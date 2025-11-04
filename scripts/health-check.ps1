# GA4 Analytics Health Check Script
# Run this to verify system health and generate alerts

$ErrorActionPreference = "Stop"
$timestamp = Get-Date -Format "yyyy-MM-dd-HH-mm-ss"
$healthLog = "logs/reports/health-check-$timestamp.log"

try {
    Write-Host "🔍 Starting GA4 Analytics Health Check..." -ForegroundColor Green

    # Change to project directory
    Set-Location "C:\dev\KellysApplianceCenter\kellys-nextjs"

    $healthIssues = @()
    $healthStatus = "HEALTHY"

    # Check 1: Environment variables
    Write-Host "1. Checking environment configuration..." -ForegroundColor Yellow
    $envFile = ".env.local"
    if (Test-Path $envFile) {
        $envContent = Get-Content $envFile
        $ga4Property = $envContent | Select-String "GA4_PROPERTY_ID"
        $ga4Credentials = $envContent | Select-String "GOOGLE_APPLICATION_CREDENTIALS"

        if ($ga4Property) {
            Write-Host "✅ GA4 Property ID configured" -ForegroundColor Green
        } else {
            $healthIssues += "GA4_PROPERTY_ID not found in .env.local"
            $healthStatus = "WARNING"
        }

        if ($ga4Credentials) {
            Write-Host "✅ GA4 credentials path configured" -ForegroundColor Green
        } else {
            $healthIssues += "GOOGLE_APPLICATION_CREDENTIALS not found in .env.local"
            $healthStatus = "WARNING"
        }
    } else {
        $healthIssues += ".env.local file not found"
        $healthStatus = "CRITICAL"
    }

    # Check 2: Service account file
    Write-Host "2. Checking service account credentials..." -ForegroundColor Yellow
    $secretsPath = "secrets/ga4-service-account.json"
    if (Test-Path $secretsPath) {
        try {
            $json = Get-Content $secretsPath | ConvertFrom-Json
            if ($json.client_email -and $json.project_id) {
                Write-Host "✅ Service account JSON valid" -ForegroundColor Green
                Write-Host "   Project ID: $($json.project_id)" -ForegroundColor Gray
            } else {
                $healthIssues += "Service account JSON missing required fields"
                $healthStatus = "CRITICAL"
            }
        } catch {
            $healthIssues += "Service account JSON is corrupted: $($_.Exception.Message)"
            $healthStatus = "CRITICAL"
        }
    } else {
        $healthIssues += "Service account JSON not found at: $secretsPath"
        $healthStatus = "CRITICAL"
    }

    # Check 3: Dependencies
    Write-Host "3. Checking npm dependencies..." -ForegroundColor Yellow
    try {
        $packageJson = Get-Content "package.json" | ConvertFrom-Json
        $hasGa4Dep = $packageJson.dependencies.PSObject.Properties.Name -contains "@google-analytics/data"

        if ($hasGa4Dep) {
            Write-Host "✅ GA4 dependency installed" -ForegroundColor Green
        } else {
            $healthIssues += "GA4 dependency missing. Run: npm install @google-analytics/data"
            $healthStatus = "WARNING"
        }
    } catch {
        $healthIssues += "Could not read package.json: $($_.Exception.Message)"
        $healthStatus = "WARNING"
    }

    # Check 4: Recent reports
    Write-Host "4. Checking recent report generation..." -ForegroundColor Yellow
    $reportsDir = "docs/analytics-reporting/daily"
    if (Test-Path $reportsDir) {
        $recentReports = Get-ChildItem $reportsDir -File | Where-Object {
            $_.LastWriteTime -gt (Get-Date).AddDays(-1)
        }

        if ($recentReports.Count -gt 0) {
            Write-Host "✅ Recent reports found ($($recentReports.Count) files)" -ForegroundColor Green
            $latestReport = $recentReports | Sort-Object LastWriteTime -Descending | Select-Object -First 1
            Write-Host "   Latest: $($latestReport.Name)" -ForegroundColor Gray
        } else {
            $healthIssues += "No reports generated in the last 24 hours"
            $healthStatus = "WARNING"
        }
    } else {
        $healthIssues += "Reports directory not found: $reportsDir"
        $healthStatus = "WARNING"
    }

    # Check 5: Test API connection (if credentials available)
    Write-Host "5. Testing GA4 API connection..." -ForegroundColor Yellow
    if ((Test-Path $secretsPath) -and (Test-Path $envFile)) {
        try {
            $testOutput = & npm run report:summary 2>&1
            if ($LASTEXITCODE -eq 0) {
                Write-Host "✅ GA4 API connection successful" -ForegroundColor Green
            } else {
                $healthIssues += "GA4 API test failed: $testOutput"
                $healthStatus = "CRITICAL"
            }
        } catch {
            $healthIssues += "GA4 API connection test failed: $($_.Exception.Message)"
            $healthStatus = "CRITICAL"
        }
    } else {
        Write-Host "⏭️ Skipping API test (setup incomplete)" -ForegroundColor Yellow
    }

    # Generate health summary
    Write-Host ""
    Write-Host "🏥 Health Check Summary:" -ForegroundColor Cyan
    Write-Host "Status: $healthStatus" -ForegroundColor $(if ($healthStatus -eq "HEALTHY") { "Green" } elseif ($healthStatus -eq "WARNING") { "Yellow" } else { "Red" })

    if ($healthIssues.Count -eq 0) {
        Write-Host "✅ All systems operational" -ForegroundColor Green
    } else {
        Write-Host "⚠️ Issues found ($($healthIssues.Count)):" -ForegroundColor Yellow
        $healthIssues | ForEach-Object {
            Write-Host "   • $_" -ForegroundColor Gray
        }
    }

    # Log results
    $logEntry = "$(Get-Date -Format 'yyyy-MM-dd HH:mm:ss'): HEALTH_CHECK - Status: $healthStatus - Issues: $($healthIssues.Count)"
    Add-Content -Path $healthLog -Value $logEntry

    if ($healthIssues.Count -gt 0) {
        Add-Content -Path $healthLog -Value "ISSUES:"
        $healthIssues | ForEach-Object {
            Add-Content -Path $healthLog -Value "  - $_"
        }
    }

    Write-Host ""
    Write-Host "📝 Health log: $healthLog" -ForegroundColor Gray

    # Send alerts for critical issues
    if ($healthStatus -eq "CRITICAL") {
        Write-Host "🚨 Sending critical alert..." -ForegroundColor Red
        try {
            Send-MailMessage -To "alerts@kellysappliancecenter.com" `
                             -From "health@kellysappliancecenter.com" `
                             -Subject "CRITICAL: GA4 Analytics System Down" `
                             -Body "Health check failed with critical issues. Check logs at: $healthLog" `
                             -SmtpServer "smtp.gmail.com" `
                             -Port 587 `
                             -UseSsl
            Write-Host "📧 Critical alert sent" -ForegroundColor Yellow
        } catch {
            Write-Host "⚠️ Could not send alert: $($_.Exception.Message)" -ForegroundColor Yellow
        }
    }

} catch {
    Write-Host "❌ Health check failed: $($_.Exception.Message)" -ForegroundColor Red
    Add-Content -Path $healthLog -Value "$(Get-Date -Format 'yyyy-MM-dd HH:mm:ss'): HEALTH_CHECK_ERROR - $($_.Exception.Message)"
    exit 1
}

Write-Host ""
Write-Host "✨ Health check completed!" -ForegroundColor Green

