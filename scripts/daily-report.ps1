# Daily Analytics Report Automation
# Run this script via Windows Task Scheduler at 8:00 AM daily

$ErrorActionPreference = "Stop"
$timestamp = Get-Date -Format "yyyy-MM-dd-HH-mm-ss"
$logFile = "logs/reports/daily-run-$timestamp.log"

try {
    Write-Host "🚀 Starting daily analytics report generation..." -ForegroundColor Green

    # Change to project directory
    Set-Location "C:\dev\KellysApplianceCenter\kellys-nextjs"

    # Verify environment setup
    Write-Host "📋 Checking environment setup..." -ForegroundColor Yellow
    if (-not (Test-Path ".env.local")) {
        throw "Environment file .env.local not found"
    }

    # Check for GA4 credentials
    $envContent = Get-Content ".env.local"
    $hasGA4 = $envContent | Select-String "GA4_PROPERTY_ID"
    if (-not $hasGA4) {
        throw "GA4_PROPERTY_ID not found in .env.local"
    }

    # Generate summary report (last 7 days)
    Write-Host "📊 Generating summary report..." -ForegroundColor Yellow
    $summaryOutput = & npm run report:summary 2>&1
    if ($LASTEXITCODE -ne 0) {
        throw "Summary report failed: $summaryOutput"
    }
    Write-Host "✅ Summary report generated" -ForegroundColor Green

    # Generate events report (last 7 days)
    Write-Host "📈 Generating events report..." -ForegroundColor Yellow
    $eventsOutput = & npm run report:events -- --days=7 2>&1
    if ($LASTEXITCODE -ne 0) {
        throw "Events report failed: $eventsOutput"
    }
    Write-Host "✅ Events report generated" -ForegroundColor Green

    # Generate partner referrals report (last 7 days, CSV format)
    Write-Host "🤝 Generating partner referrals report..." -ForegroundColor Yellow
    $partnersOutput = & npm run report:partners -- --days=7 --csv 2>&1
    if ($LASTEXITCODE -ne 0) {
        throw "Partners report failed: $partnersOutput"
    }
    Write-Host "✅ Partner referrals report generated" -ForegroundColor Green

    # Verify reports were created
    $reportsDir = "docs/analytics-reporting/daily"
    $newFiles = Get-ChildItem $reportsDir -File | Where-Object {
        $_.LastWriteTime -gt (Get-Date).AddMinutes(-5)
    }

    if ($newFiles.Count -ge 3) {
        Write-Host "🎉 All reports generated successfully!" -ForegroundColor Green
        Write-Host "📁 New files created:" -ForegroundColor Cyan
        $newFiles | ForEach-Object {
            Write-Host "   $($_.Name)" -ForegroundColor Gray
        }
    } else {
        Write-Host "⚠️ Warning: Expected 3+ report files, found $($newFiles.Count)" -ForegroundColor Yellow
    }

    # Log success
    $successMessage = "$(Get-Date -Format 'yyyy-MM-dd HH:mm:ss'): Daily reports completed successfully"
    Add-Content -Path $logFile -Value $successMessage
    Write-Host "📝 Log updated: $logFile" -ForegroundColor Green

} catch {
    $errorMessage = "$(Get-Date -Format 'yyyy-MM-dd HH:mm:ss'): ERROR - $($_.Exception.Message)"
    Write-Host "❌ Error in daily reports: $($_.Exception.Message)" -ForegroundColor Red

    # Log error
    Add-Content -Path $logFile -Value $errorMessage

    # Send email alert (if configured)
    try {
        Send-MailMessage -To "alerts@kellysappliancecenter.com" `
                         -From "analytics@kellysappliancecenter.com" `
                         -Subject "Daily Analytics Report Failed" `
                         -Body "Error: $($_.Exception.Message)`nCheck logs at: $logFile" `
                         -SmtpServer "smtp.gmail.com" `
                         -Port 587 `
                         -UseSsl
        Write-Host "📧 Alert email sent" -ForegroundColor Yellow
    } catch {
        Write-Host "⚠️ Could not send alert email: $($_.Exception.Message)" -ForegroundColor Yellow
    }

    exit 1
}

Write-Host ""
Write-Host "✨ Daily analytics reports completed successfully!" -ForegroundColor Green
Write-Host "📍 Reports location: docs/analytics-reporting/daily/" -ForegroundColor Cyan
Write-Host "📊 Next scheduled run: Tomorrow at 8:00 AM" -ForegroundColor Gray

