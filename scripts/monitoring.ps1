# GA4 Analytics Monitoring & Alerting Script
# Run this script to check for concerning metrics and send alerts

$ErrorActionPreference = "Stop"
$timestamp = Get-Date -Format "yyyy-MM-dd-HH-mm-ss"
$monitorLog = "logs/reports/monitoring-$timestamp.log"

# Alert thresholds (configurable)
$thresholds = @{
    sessions = @{ warning = 75; critical = 50 }
    bounceRate = @{ warning = 65; critical = 75 }
    phoneClicks = @{ warning = 8; critical = 5 }
    pageLoadTime = @{ warning = 2.5; critical = 3.5 }
}

try {
    Write-Host "📊 Starting GA4 Analytics Monitoring..." -ForegroundColor Green

    # Change to project directory
    Set-Location "C:\dev\KellysApplianceCenter\kellys-nextjs"

    $alerts = @()
    $warnings = @()

    # Find latest summary report
    $reportsDir = "docs/analytics-reporting/daily"
    if (Test-Path $reportsDir) {
        $latestReport = Get-ChildItem $reportsDir -Name "summary-*.json" |
                       Sort-Object -Descending |
                       Select-Object -First 1

        if ($latestReport) {
            $reportPath = Join-Path $reportsDir $latestReport
            $reportData = Get-Content $reportPath | ConvertFrom-Json

            Write-Host "📈 Analyzing latest report: $latestReport" -ForegroundColor Yellow

            # Check sessions
            $sessions = [int]$reportData.summary.sessions
            Write-Host "Sessions: $sessions (Threshold: $($thresholds.sessions.warning) warning, $($thresholds.sessions.critical) critical)" -ForegroundColor Gray

            if ($sessions -lt $thresholds.sessions.critical) {
                $alerts += "CRITICAL: Daily sessions ($sessions) below critical threshold ($($thresholds.sessions.critical))"
            } elseif ($sessions -lt $thresholds.sessions.warning) {
                $warnings += "WARNING: Daily sessions ($sessions) below warning threshold ($($thresholds.sessions.warning))"
            }

            # Check bounce rate
            $bounceRate = [double]$reportData.summary.bounceRate * 100
            Write-Host "Bounce Rate: $([math]::Round($bounceRate, 1))% (Threshold: $($thresholds.bounceRate.warning)% warning, $($thresholds.bounceRate.critical)% critical)" -ForegroundColor Gray

            if ($bounceRate -gt $thresholds.bounceRate.critical) {
                $alerts += "CRITICAL: Bounce rate ($([math]::Round($bounceRate, 1))%) above critical threshold ($($thresholds.bounceRate.critical)%)"
            } elseif ($bounceRate -gt $thresholds.bounceRate.warning) {
                $warnings += "WARNING: Bounce rate ($([math]::Round($bounceRate, 1))%) above warning threshold ($($thresholds.bounceRate.warning)%)"
            }

            # Check phone clicks
            $phoneClicks = [int]$reportData.conversions.phoneClicks
            Write-Host "Phone Clicks: $phoneClicks (Threshold: $($thresholds.phoneClicks.warning) warning, $($thresholds.phoneClicks.critical) critical)" -ForegroundColor Gray

            if ($phoneClicks -lt $thresholds.phoneClicks.critical) {
                $alerts += "CRITICAL: Phone clicks ($phoneClicks) below critical threshold ($($thresholds.phoneClicks.critical))"
            } elseif ($phoneClicks -lt $thresholds.phoneClicks.warning) {
                $warnings += "WARNING: Phone clicks ($phoneClicks) below warning threshold ($($thresholds.phoneClicks.warning))"
            }

            # Check top pages for engagement
            $topPages = $reportData.topPages | Where-Object { $_.pageViews -gt 0 }
            $lowEngagementPages = $topPages | Where-Object { $_.bounceRate -gt 0.7 }

            if ($lowEngagementPages.Count -gt 0) {
                $warnings += "WARNING: $($lowEngagementPages.Count) pages have high bounce rate (>70%)"
                $lowEngagementPages | ForEach-Object {
                    $warnings += "  - $($_.pagePath): $([math]::Round($_.bounceRate * 100, 1))% bounce rate"
                }
            }

        } else {
            $warnings += "No recent summary reports found for analysis"
        }
    } else {
        $alerts += "Reports directory not found: $reportsDir"
    }

    # Generate monitoring summary
    Write-Host ""
    Write-Host "🚨 Monitoring Summary:" -ForegroundColor Cyan

    if ($alerts.Count -eq 0 -and $warnings.Count -eq 0) {
        Write-Host "✅ All metrics within healthy ranges" -ForegroundColor Green
    } else {
        if ($alerts.Count -gt 0) {
            Write-Host "🚨 CRITICAL ALERTS ($($alerts.Count)):" -ForegroundColor Red
            $alerts | ForEach-Object {
                Write-Host "   ⚠️ $_" -ForegroundColor Red
            }
        }

        if ($warnings.Count -gt 0) {
            Write-Host "⚠️ WARNINGS ($($warnings.Count)):" -ForegroundColor Yellow
            $warnings | ForEach-Object {
                Write-Host "   • $_" -ForegroundColor Yellow
            }
        }
    }

    # Log monitoring results
    $logEntry = "$(Get-Date -Format 'yyyy-MM-dd HH:mm:ss'): MONITORING - Alerts: $($alerts.Count) - Warnings: $($warnings.Count)"
    Add-Content -Path $monitorLog -Value $logEntry

    if ($alerts.Count -gt 0) {
        Add-Content -Path $monitorLog -Value "CRITICAL ALERTS:"
        $alerts | ForEach-Object {
            Add-Content -Path $monitorLog -Value "  - $_"
        }
    }

    if ($warnings.Count -gt 0) {
        Add-Content -Path $monitorLog -Value "WARNINGS:"
        $warnings | ForEach-Object {
            Add-Content -Path $monitorLog -Value "  - $_"
        }
    }

    # Send email alerts for critical issues
    if ($alerts.Count -gt 0) {
        Write-Host "📧 Sending critical alerts..." -ForegroundColor Red

        $alertBody = @"
GA4 Analytics Critical Alerts Detected:

$($alerts | ForEach-Object { "- $_" } | Out-String)

Report Details:
- Generated: $(Get-Date -Format 'yyyy-MM-dd HH:mm:ss')
- Report File: $latestReport
- Project: Kelly's Appliance Center

Check logs at: $monitorLog
"@

        try {
            Send-MailMessage -To "alerts@kellysappliancecenter.com" `
                             -From "monitoring@kellysappliancecenter.com" `
                             -Subject "CRITICAL: GA4 Analytics Alerts" `
                             -Body $alertBody `
                             -SmtpServer "smtp.gmail.com" `
                             -Port 587 `
                             -UseSsl
            Write-Host "✅ Critical alerts sent" -ForegroundColor Green
        } catch {
            Write-Host "❌ Could not send alerts: $($_.Exception.Message)" -ForegroundColor Red
        }
    }

    Write-Host ""
    Write-Host "📝 Monitoring log: $monitorLog" -ForegroundColor Gray

} catch {
    Write-Host "❌ Monitoring failed: $($_.Exception.Message)" -ForegroundColor Red
    Add-Content -Path $monitorLog -Value "$(Get-Date -Format 'yyyy-MM-dd HH:mm:ss'): MONITORING_ERROR - $($_.Exception.Message)"
    exit 1
}

Write-Host ""
Write-Host "✨ Monitoring completed!" -ForegroundColor Green

