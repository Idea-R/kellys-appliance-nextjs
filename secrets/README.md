# GA4 Service Account Setup

## Status: Property ID Added ✅

**Property ID:** `507428307` (already in `.env.local`)

---

## Next Step: Create Service Account (5 minutes)

### Step 1: Create Google Cloud Project

1. Go to: https://console.cloud.google.com
2. Click: **Select a project** (top bar) → **New Project**
3. Project name: `kellys-analytics`
4. Click: **Create**
5. Wait for project creation (30 seconds)

### Step 2: Enable GA4 Data API

1. Go to: https://console.cloud.google.com/apis/library
2. Search: `Google Analytics Data API`
3. Click: **Google Analytics Data API**
4. Click: **Enable**

### Step 3: Create Service Account

1. Go to: https://console.cloud.google.com/iam-admin/serviceaccounts
2. Make sure `kellys-analytics` project is selected (top bar)
3. Click: **Create Service Account**

**Fill in:**
- **Service account name:** `ga4-reporting`
- **Service account ID:** `ga4-reporting` (auto-fills)
- **Description:** `Read-only access to GA4 for CLI reports`

4. Click: **Create and Continue**
5. **Role:** Skip this (no role needed at project level)
6. Click: **Continue**
7. Click: **Done**

### Step 4: Create Service Account Key

1. Click on the service account you just created (`ga4-reporting`)
2. Go to: **Keys** tab
3. Click: **Add Key** → **Create new key**
4. Select: **JSON**
5. Click: **Create**

**This downloads a JSON file** (e.g., `kellys-analytics-abc123.json`)

### Step 5: Move Key to Project

**On Windows PowerShell:**

```powershell
# Move the downloaded JSON file to your project
Move-Item "$env:USERPROFILE\Downloads\kellys-analytics-*.json" "C:\dev\KellysApplianceCenter\kellys-nextjs\secrets\ga4-service-account.json"

# Verify it's there
Get-Content "C:\dev\KellysApplianceCenter\kellys-nextjs\secrets\ga4-service-account.json" | ConvertFrom-Json | Select-Object client_email
```

**You should see:** Something like `ga4-reporting@kellys-analytics-abc123.iam.gserviceaccount.com`

### Step 6: Grant Access in GA4

1. Copy the service account email (from above command)
2. Go to: https://analytics.google.com
3. Click: **Admin** (bottom left)
4. Click: **Property access management** (Property column)
5. Click: **+** (top right) → **Add users**
6. Paste the service account email
7. Role: Select **Viewer**
8. **Uncheck:** "Notify new users by email"
9. Click: **Add**

---

## Test the Setup

```powershell
# Get summary report for last 7 days
npm run report:summary

# Should create: logs/reports/summary-[timestamp].json
```

**Expected output:**
```json
{
  "startDate": "2025-09-28",
  "endDate": "2025-10-05",
  "sessions": "42",
  "users": "35", 
  "events": "156",
  "pageViews": "98"
}
```

---

## Available Commands

### Summary Report
```powershell
npm run report:summary
npm run report:summary -- --days=30
```

### Event Report
```powershell
# All events
npm run report:events

# Phone clicks only
npm run report:events -- --event=link_click

# Last 30 days as CSV
npm run report:events -- --days=30 --csv
```

### Partner Referrals
```powershell
npm run report:partners -- --days=30 --csv
```

---

## Security Notes

**✅ The service account JSON file is:**
- In `.gitignore` (won't be committed)
- Read-only access (can't modify GA4 data)
- Can be revoked anytime in GA4 dashboard

**🔒 Best Practices:**
- Never commit `ga4-service-account.json` to git
- Never share the JSON file publicly
- Rotate keys every 90 days (optional)
- Revoke access if compromised

---

## Troubleshooting

### Error: "GA4_PROPERTY_ID env var is required"

**Solution:** Make sure `.env.local` has:
```
GA4_PROPERTY_ID=507428307
```

### Error: "Permission denied"

**Solution:** 
1. Verify service account email in GA4 Property access management
2. Make sure role is set to **Viewer** or higher
3. Wait 5 minutes for permissions to propagate

### Error: "Invalid credentials"

**Solution:**
1. Verify JSON file exists: `secrets/ga4-service-account.json`
2. Check JSON is valid: `Get-Content secrets/ga4-service-account.json | ConvertFrom-Json`
3. Re-download key if corrupted

---

## What Gets Reported

### Summary Report
- Total sessions
- Total users
- Total events
- Total page views

### Events Report
- Event name
- Date
- Link URL (if applicable)
- Link text (if applicable)
- Page path
- Event count

### Partner Report
- Filtered to links with `partner_` prefix
- Shows referral tracking

---

## Quick Reference

**Property ID:** `507428307`  
**Measurement ID:** `G-6NW7LJG197`  
**Service Account Email:** (will be in JSON file after creation)  
**Reports Location:** `logs/reports/`

---

## Status Checklist

- [x] Property ID added to `.env.local`
- [x] Secrets directory created
- [ ] Google Cloud project created
- [ ] GA4 Data API enabled
- [ ] Service account created
- [ ] Service account key downloaded
- [ ] Key moved to `secrets/ga4-service-account.json`
- [ ] Service account granted access in GA4
- [ ] Test command run successfully

**Next:** Follow steps above to complete setup!
