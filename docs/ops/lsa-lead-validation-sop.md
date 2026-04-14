# LSA Lead Validation SOP — Kelly's Appliance Center

**Last Updated:** April 12, 2026
**Status:** DRAFT
**Owner:** Shane / Ideas Realized

---

## Purpose

Validate Google Local Services Ads (LSA) leads by cross-referencing phone numbers across three systems to determine which leads became real jobs and which were spam, wrong-service, or no-shows. This data drives lead grading, budget optimization, and ROI reporting.

---

## Three-System Validation Chain

```
LSA Lead (Google Ads API)
  → phone number
    → SCS Unified Communications (call recordings, duration, who answered)
      → SD/CRM (job record: scheduled, completed, invoice amount)
```

### System 1: Google Ads API (LSA Leads)

**Access:** MCP server (google-ads), GAQL queries
**Data available:**
- Lead ID, creation timestamp
- Lead type (PHONE_CALL or MESSAGE)
- Lead status (NEW, ACTIVE, BOOKED)
- Category (appliance repair confirmed)
- Charge status (In Review, Charged, Credited)

**Data NOT available via API:**
- Caller phone number (privacy restricted)
- Call recording audio
- Message text content
- Lead grading/feedback submission

**Phone numbers are visible in:** LSA Dashboard UI (ads.google.com/localservices)

**GAQL query to pull recent leads:**
```sql
SELECT local_services_lead.id, local_services_lead.lead_type,
  local_services_lead.lead_status, local_services_lead.creation_date_time,
  local_services_lead.credit_details.credit_state
FROM local_services_lead
ORDER BY local_services_lead.creation_date_time DESC
LIMIT 50
```

### System 2: SCS Unified Communications

**Access:** Web UI at https://uc.scscommunications.com/calls
**Login:** Kelly's Appliance account
**Data available:**
- Full call log with caller ID (Display Name + phone number)
- Call recordings with playback
- Call duration
- Who answered (Kendra Ext 1001, Abigail Ext 1002, etc.)
- Call status (connected, missed, voicemail)
- Searchable by phone number (type 3+ digits)
- Date range: up to 12 months of history

**Cross-reference method:**
1. Copy phone number from LSA Dashboard
2. Search in SCS
3. Match by date/time (LSA lead time should be within minutes of SCS call time)
4. Check call duration: <15s = likely missed/spam, 30s-2min = inquiry, 2min+ = real conversation
5. Listen to recording if needed to verify lead quality

### System 3: ServiceDesk by Rossware (CRM)

**Access:** Remote desktop (private server). No API yet. Data available via CSV exports only.
**Export location:** `C:\Projects and Programs\Gemini Analytics\DATA\`
**API Gateway:** In development (Shane's SD project). Once complete, enables full automation.

**Key export files:**
- `SDtype6[date].csv` — Master job records. Has phone numbers, customer name, appliance type, symptoms, job status, parts, completion dates, work descriptions. **This is the primary file for lead matching.**
- `SDSalesByMore[date]_1and2.csv` — Revenue data. Paycode 1+2. Has TotalAmount, PartsSold, OtherLabor per invoice.
- `SDSalesByMore[date]_1and3.csv` — Revenue data. Paycode 1+3. Same structure.
- `SDPercCompComplete[date].csv` — Job completion tracking. Origin-to-completion days, visit counts.

**Key fields in SDtype6 for lead matching:**
- `TelNmbr1`, `TelNmbr2`, `TelNmbr3` — Customer phone numbers (primary match key)
- `NmLst`, `NmFrst` — Customer name (secondary match to SCS Display Name)
- `CityStateZip` — Location verification
- `Type` — Appliance type (REFRIGERATOR, WASHER, DRYER, etc.)
- `Make` — Brand (LG, SUBZERO, GE, etc.)
- `Symptoms` — What the customer described
- `OriginDate` — Job creation date (match to LSA lead timestamp)
- `CmpltnDate` — When job was done (or "still pending")
- `Status` — Archived (done), Currently Scheduled, Pending Authorization, Waiting for Parts, etc.
- `TotalMateriaInSale`, `TotalLaborInSale` — Revenue (may be 0 in Type6, use SalesByMore for full revenue)
- `JobCanceled` — Yes/No
- `CompletedOnFirstTrip` — Yes/No
- `WorkDescription` — Full job notes with timestamps

**Cross-reference method:**
1. Search SDtype6 CSV by phone number: `grep "XXX-XXX-XXXX" SDtype6[latest].csv`
2. If job record exists → lead converted → note invoice number, revenue, status
3. Join to SDSalesByMore on InvoiceNmbr for full revenue breakdown
4. If no match → lead didn't convert (inquiry only, missed call, or went elsewhere)

**Current limitation:** CSV exports are manual. Shane pulls them from the remote desktop. No real-time access. Fresh exports needed for each validation run.

---

## Validation Workflow (Weekly)

### Step 1: Pull LSA Leads
- Run GAQL query via MCP for last 7 days of leads
- Export lead IDs, timestamps, types, charge status
- Open LSA Dashboard to see phone numbers

### Step 2: Cross-Reference with SCS
- For each LSA lead, search the phone number in SCS
- Record: call duration, who answered, call status
- Flag leads with no SCS match (possible Google tracking number mismatch)
- Flag leads with <15s calls (likely spam or hangup)

### Step 3: Cross-Reference with CRM
- For converted leads (long calls, real conversations), search CRM by phone number
- Record: job scheduled Y/N, service type, invoice amount
- Calculate: actual revenue generated per LSA lead

### Step 4: Grade Leads in LSA Dashboard
- Mark real jobs as BOOKED or COMPLETED
- For bad leads (spam, wrong service, out of area): grade with feedback
- Google's automated system handles credits, but grading improves future lead quality

### Step 5: Update ROI Tracking
- Total LSA spend (from Google Ads API)
- Total converted leads (from CRM match)
- Total revenue from LSA leads (from CRM invoices)
- True ROI = (Revenue - LSA Spend) / LSA Spend

---

## Key Findings (April 12, 2026 Audit)

### Lead Volume (Last 30 Days)
- 131 leads, 31 conversions, $531.51 spend
- Cost per lead: $4.05
- Cost per conversion: $17.15
- 86% phone calls, 14% messages

### Lead Status Issues
- 45 of 50 leads sitting at ACTIVE (unmanaged)
- Only 3 marked as BOOKED
- 1 auto-credited by Google
- Messages going unread (response time affects ranking)

### Validation Test Results (April 12, 2026 — 7 leads tested)

| LSA Lead ID | Date | Phone | SCS Match | CRM Match | Customer | Job | Revenue | ROI |
|------------|------|-------|-----------|-----------|----------|-----|---------|-----|
| 306511568 | Apr 10 | 972-977-4013 | ✅ 50s call + 5m33s prior | ✅ | Kathy Ivison, Rohnert Park | LG Washer, error OE | $149 labor | ~36x |
| 306769807 | Apr 10 | 707-703-9385 | ✅ | ✅ | Heidi Knoop, Occidental | DCS Range, wires | TBD (scheduled 4/15) | — |
| 306331810 | Apr 8 | 707-484-4924 | ✅ | ✅ | David Ratzlaff, Sebastopol | GE Washer, noisy | TBD (parts pending) | — |
| 305874907 | Apr 6 | 707-732-1299 | ✅ | ✅ | Bryan Reed, Sonoma | Sub-Zero ice maker | $452 (parts+labor) | ~27x |
| 305906483 | Apr 7 | 650-814-1645 | ? | ❌ No match | — | — | $0 | Lost lead |
| 305550233 | Apr 6 | 858-382-9343 | ? | ❌ No match | — | — | $0 | Lost lead |
| 306674520 | Apr 9 | 707-695-7665 | ? | ❌ No match | — | — | $0 | Lost lead |

**Results: 4 of 7 leads (57%) converted to real jobs.**
**Combined revenue from 4 matched jobs: $601+ (with 2 still pending)**
**LSA cost for those 7 leads: ~$28 (7 × $4.05)**
**ROI on matched leads: 21x+ return**

### Key Insight
Google's LSA job type categorization is unreliable. Lead 306331810 showed "Repair microwave" in the LSA dashboard, but the actual CRM job was a GE Washer repair. Don't use LSA job types for filtering or disputing — always verify against CRM.

---

## Automation Opportunities

### Near-Term (Manual + API)
- Weekly lead pull via GAQL → compare to SCS manually
- Track in a spreadsheet until CRM integration is built

### Medium-Term (n8n automation)
- n8n workflow: pull LSA leads daily via API → send Slack notification with lead details
- Reminder to grade leads within 48 hours

### Long-Term (Full Integration — blocked on SD API Gateway)
- Shane's SD API Gateway project (in development) will enable direct CRM queries
- Once available: LSA lead phone → API query → job match → revenue → automated ROI
- SCS API (if available) to auto-match calls by phone number
- Full pipeline: LSA API → SCS API → SD API → Automated ROI Dashboard
- This is the single biggest automation unlock for the business

### CRM Data Location
- **Software:** ServiceDesk by Rossware
- **Access:** Remote desktop (private server, no direct API)
- **Export storage:** `C:\Projects and Programs\Gemini Analytics\DATA\`
- **Export naming:** `SDtype6[month][year][date].csv`, `SDSalesByMore[date]_1and[2|3].csv`, `SDPercCompComplete[date].csv`
- **Also used by:** Gemini Analytics project (quarterly reviews in `3monthReviews/` and `quarterly_reviews/` subdirectories)

---

## Phone System Reference

| Extension | Person | Role |
|-----------|--------|------|
| Ext 1001 | Kendra Hoetger | Office/Dispatch |
| Ext 1002 | Abigail Jensen | Office/Dispatch |
| Ext 1503 | Joseph Denning | Technician? |
| Main | 707-664-9702 | Kelly's main line |

---

## Important Notes

- **LSA uses tracking numbers.** Google assigns a tracking phone number to LSA ads. When someone calls that number, Google records it as a lead, then forwards the call to Kelly's main line (707-664-9702). This is why SCS shows the call coming FROM the customer's real number TO the main line, not from the Google tracking number.
- **Lead grading affects ranking.** Google uses your grading feedback to improve lead quality. Businesses that actively grade leads get better leads over time.
- **Manual disputes are gone.** As of August 2024, Google removed manual dispute capability. Credits are now automated within 72 hours. But grading leads still matters for quality improvement.
- **Microwave IS a valid service.** Kelly's repairs microwaves. Do not flag microwave leads as wrong-service.

---

## Related Docs

- [Google LSA Platform File](platforms/google-lsa.md)
- [Google Ads Platform File](platforms/google-ads.md)
- [Interactive Tools Strategy](interactive-tools-strategy.md) — cost estimator could reduce unqualified LSA calls
