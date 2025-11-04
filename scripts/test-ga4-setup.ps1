# GA4 Setup Test Script
# Run this after completing the service account setup

Write-Host "🔍 Testing GA4 Service Account Setup..." -ForegroundColor Green
Write-Host ""

# Test 1: Check environment variables
Write-Host "1. Checking environment variables..." -ForegroundColor Yellow
try {
    $envVars = Get-Content ".env.local" | Where-Object { $_ -like "*GA4*" }
    Write-Host "✅ GA4 environment variables found:" -ForegroundColor Green
    $envVars | ForEach-Object { Write-Host "   $_" -ForegroundColor Gray }
} catch {
    Write-Host "❌ Error reading .env.local: $($_.Exception.Message)" -ForegroundColor Red
}

Write-Host ""

# Test 2: Check secrets file exists
Write-Host "2. Checking service account file..." -ForegroundColor Yellow
$secretsPath = "secrets/ga4-service-account.json"
if (Test-Path $secretsPath) {
    try {
        $json = Get-Content $secretsPath | ConvertFrom-Json
        Write-Host "✅ Service account JSON found" -ForegroundColor Green
        Write-Host "   Client Email: $($json.client_email)" -ForegroundColor Gray
        Write-Host "   Project ID: $($json.project_id)" -ForegroundColor Gray
    } catch {
        Write-Host "❌ Service account JSON is corrupted: $($_.Exception.Message)" -ForegroundColor Red
    }
} else {
    Write-Host "❌ Service account JSON not found at: $secretsPath" -ForegroundColor Red
    Write-Host "   Please complete Step 6 in the setup guide" -ForegroundColor Yellow
}

Write-Host ""

# Test 3: Test npm script (without actually running it)
Write-Host "3. Checking npm script availability..." -ForegroundColor Yellow
try {
    $packageJson = Get-Content "package.json" | ConvertFrom-Json
    $hasReportScript = $packageJson.scripts.PSObject.Properties.Name -contains "report:summary"
    if ($hasReportScript) {
        Write-Host "✅ Report script available: npm run report:summary" -ForegroundColor Green
    } else {
        Write-Host "❌ Report script not found in package.json" -ForegroundColor Red
    }
} catch {
    Write-Host "❌ Error reading package.json: $($_.Exception.Message)" -ForegroundColor Red
}

Write-Host ""

# Test 4: Check dependencies
Write-Host "4. Checking GA4 dependencies..." -ForegroundColor Yellow
try {
    $packageJson = Get-Content "package.json" | ConvertFrom-Json
    $hasGa4Dep = $packageJson.dependencies.PSObject.Properties.Name -contains "@google-analytics/data"
    if ($hasGa4Dep) {
        Write-Host "✅ GA4 dependency installed: @google-analytics/data" -ForegroundColor Green
    } else {
        Write-Host "❌ GA4 dependency missing. Run: npm install @google-analytics/data" -ForegroundColor Red
    }
} catch {
    Write-Host "❌ Error reading package.json: $($_.Exception.Message)" -ForegroundColor Red
}

Write-Host ""

# Summary
Write-Host "📋 Setup Summary:" -ForegroundColor Cyan
Write-Host ""

if ((Test-Path $secretsPath) -and (Get-Content $secretsPath | ConvertFrom-Json | Select-Object client_email)) {
    Write-Host "🎉 Ready to test! Choose your authentication method:" -ForegroundColor Green
    Write-Host ""
    Write-Host "Option A (Service Account):" -ForegroundColor Cyan
    Write-Host "  Run: npm run report:summary" -ForegroundColor Gray
    Write-Host ""
    Write-Host "Option B (Application Default):" -ForegroundColor Cyan
    Write-Host "  Run: gcloud auth application-default login" -ForegroundColor Gray
    Write-Host "       gcloud config set project 379374366" -ForegroundColor Gray
    Write-Host "       npm run report:summary" -ForegroundColor Gray
    Write-Host ""
    Write-Host "Expected output:" -ForegroundColor Yellow
    Write-Host "docs/analytics-reporting/daily/summary-2025-10-XX.json" -ForegroundColor Gray
} else {
    Write-Host "⚠️  Complete the setup steps in:" -ForegroundColor Yellow
    Write-Host "docs/analytics-reporting/GA4-SERVICE-ACCOUNT-SETUP.md" -ForegroundColor Cyan
}

Write-Host ""
Write-Host "📚 For visual guidance, see:" -ForegroundColor Cyan
Write-Host "docs/analytics-reporting/GA4-SETUP-VISUAL-GUIDE.md" -ForegroundColor Gray

Write-Host ""
Write-Host "🔧 Need help? Check troubleshooting section in the guides above." -ForegroundColor Cyan
