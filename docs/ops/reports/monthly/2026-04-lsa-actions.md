# April 2026 LSA Dashboard — Action Items

**Generated:** May 5, 2026
**Owner action:** Office (Mark / AJ / KH) — work this from the LSA dashboard
**Source data:** [`2026-04-lsa-attribution.md`](2026-04-lsa-attribution.md) — full lead-by-lead attribution

LSA URL: https://ads.google.com/local-services-ads (login: kellysappliance@gmail.com)

---

## Why this list exists

Google's Local Services Ads dashboard is the only place where charged leads can be:
1. **Disputed** (request credit) — must be done within **14 days** of charge date
2. **Marked with notes** for office tracking
3. **Status-updated** (booked, declined, archived)

The OATAS phone-match audit on May 5 identified which April leads converted to jobs and which didn't. This file is the actionable checklist for the office to work through the LSA dashboard.

---

## 1. Disputable leads — file these IMMEDIATELY (14-day window closing)

**Today is May 5. Dispute window cutoff = leads charged on/after April 21.**

### CLEAR OUT-OF-AREA — file dispute as "Job is outside my service area"

| LSA Lead ID | Date | Phone | Type / Service | Why dispute |
|-------------|------|-------|----------------|-------------|
| 309865983 | Apr 27 | +1 503-962-9783 | PHONE_CALL, repair_dishwasher | **503 = Oregon** — clearly out-of-state, not a Sonoma/Marin/Napa customer |

### POSSIBLE OUT-OF-AREA — review before disputing

| LSA Lead ID | Date | Phone | Type / Service | Notes |
|-------------|------|-------|----------------|-------|
| 310062429 | Apr 28 | +1 530-417-2974 | PHONE_CALL | 530 = Northern CA. Could be Yuba/Sutter (out) or far Sonoma (in). Check city if visible. |

### CUSTOMER CANCELLED — eligible for credit dispute

| LSA Lead ID | Date | Phone / OATAS Match | Why dispute |
|-------------|------|---------------------|-------------|
| 309254433 | Apr 23 | 4154809227 → invoice 30579 FAHEY (CANCELLED $0) | Customer cancelled before tech arrived. Eligible for credit. |

### How to file each dispute (UI flow)

1. Go to https://ads.google.com/local-services-ads
2. Select **Leads** in the left sidebar
3. Find the lead by date or phone number
4. Click the lead → "Dispute" button (or 3-dot menu → "Request lead credit")
5. Select reason:
   - For out-of-area: "Job is outside my service area"
   - For cancelled: "Customer cancelled" or "Job didn't happen"
   - For spam/wrong-service: "Not a real customer" / "Wrong service category"
6. Add brief note (e.g. "Customer in Oregon, outside Sonoma/Marin/Napa service area")
7. Submit

Track which were submitted in this file under "Dispute outcomes" below.

---

## 2. Lost leads — office follow-up needed

**These charged leads never resulted in an OATAS job. Worth a quick callback to find out why.**
Past 14-day dispute window for most. Goal: identify if they booked elsewhere, are still shopping, or are uncontactable.

| Lead Date | Phone | Type | Last attempt? | Notes |
|-----------|-------|------|--------------|-------|
| Apr 1 | 2066585339 | PHONE_CALL washer | — | 206 = Seattle area (verify if local) |
| Apr 1 | 7073372178 | PHONE_CALL oven | — | Local 707 |
| Apr 2 | 7072904758 | MESSAGE dishwasher | — | Local 707 |
| Apr 3 | 4157105636 | PHONE_CALL | — | 415 SF |
| Apr 5 | 9163163354 | PHONE_CALL | — | 916 Sacramento — likely out-of-area |
| Apr 6 | 7075145098 | PHONE_CALL | — | Local |
| Apr 6 | 8583829343 | PHONE_CALL oven | — | 858 San Diego — likely out |
| Apr 7 | 6508141645 | PHONE_CALL | — | 650 Peninsula |
| Apr 7 | pmb72@sbcglobal.net | MESSAGE appliance_other | — | EMAIL ONLY (credit_state PENDING) |
| Apr 8 | 7074831805 | PHONE_CALL | — | Local |
| Apr 9 | 7076957665 | PHONE_CALL | — | Local |
| Apr 9 | theoneandonlyrg89@gmail.com | MESSAGE refrigerator | — | EMAIL ONLY |
| Apr 12 | 9168895609 | MESSAGE | — | 916 Sacramento |
| Apr 13 | 4158282325 | PHONE_CALL | — | 415 SF |
| Apr 14 | andrewr8r@yahoo.com | MESSAGE oven | — | EMAIL ONLY |
| Apr 14 | 5035023144 | MESSAGE dryer | — | 503 Oregon |
| Apr 15 | 4156086594 | PHONE_CALL | — | 415 SF |
| Apr 16 | potluck44@gmail.com | MESSAGE refrigerator/freezer | — | EMAIL ONLY |
| Apr 20 | 4153771074 | PHONE_CALL | — | 415 SF |
| Apr 20 | 4154081493 | PHONE_CALL | — | 415 SF |
| Apr 21 | 4158065086 | PHONE_CALL | — | 415 SF |
| Apr 22 | 7073214350 | PHONE_CALL | — | Local |
| Apr 24 | 7073310134 | PHONE_CALL | — | Local |
| Apr 24 | 7073551261 | MESSAGE dishwasher | — | Local |
| Apr 24 | 7073435720 | PHONE_CALL | — | Local |
| Apr 27 | 7077039974 | MESSAGE freezer | — | Local |
| Apr 28 | 7074817877 (Lucille Gullotta) | MESSAGE microwave | — | Local |
| Apr 28 | 4156866760 | PHONE_CALL | — | 415 SF |

For each, the office can:
1. Open the lead in LSA dashboard
2. Click the phone number to call (or send a message reply if MESSAGE type)
3. Add a note in the lead: "Followup [date]: [outcome]"
4. If contact reveals dispute-eligible reason (already booked, spam, etc.) and lead is still in 14-day window → file dispute

---

## 3. Matched leads — confirm in LSA dashboard (optional, audit trail)

**These 17 matched OATAS jobs already have triage notes in OATAS.** For LSA dashboard audit trail, optionally mark each lead in LSA with status = "Booked" if not already system-marked, and add a note like "Booked - Inv #{invoice}".

LSA already has its own status tracking (e.g. lead 307200772 SCHAEFFER was status BOOKED automatically). Most of the others were status ACTIVE.

| LSA Lead | Phone | OATAS Invoice | LSA Status | Recommended action |
|----------|-------|--------------|-----------|-------------------|
| 305191788 | 4154268294 | 29974 POWELL | ACTIVE | Mark Booked, note "Inv 29974" |
| 305200728 | 7072316277 | 29976 TALLMAN | ACTIVE | Mark Booked, note "Inv 29976" |
| 305253709 | 7075421026 | 29991 ROXANNE | ACTIVE | Mark Booked, note "Inv 29991" |
| 305529416 | 7077187217 | 30143 RAPP | ACTIVE | Mark Booked, note "Inv 30143" |
| 305874907 | 7077321299 | 30066 REED | ACTIVE | Mark Booked, note "Inv 30066" |
| 306331810 | 7074844924 | 30141 RATZLAFF | ACTIVE | Mark Booked, note "Inv 30141" |
| 306769807 | 7077039385 | 30210 KNOOP | ACTIVE | Mark Booked, note "Inv 30210" |
| 306511568 | 9729774013 | 30295 IVISON | ACTIVE | Mark Booked, note "Inv 30295" |
| 307200772 | 7078353484 | 30254 SCHAEFFER | BOOKED | Already auto-marked |
| 307204984 | 7038191846 | 30260 VAN FLEIT | ACTIVE | Mark Booked, note "Inv 30260, $451 ice maker" |
| 307817634 | 7076954494 | 30366 TURTLE | ACTIVE | Mark Booked, note "Inv 30366, $420 clutch" |
| 307771990 | 7072808214 | 30364 MORSE | ACTIVE | Mark Booked, note "Inv 30364 (open)" |
| 308044662 | 9703191879 | 30390 GOTTLIEB | ACTIVE | Mark Booked, note "Inv 30390, $497 ice maker" |
| 308205399 | 7075363639 | 30418 ROBINETTE | ACTIVE | Mark Booked, note "Inv 30418, $169" |
| 308532190 | 7075284787 | 30439 KERKHOF | ACTIVE | Mark Booked, note "Inv 30439, $149 same-day" |
| 308302847 | 7072915589 | 30445 SOFRANKO | ACTIVE | Mark Booked, note "Inv 30445 (open, parts NLA)" |
| 308833842 | 7073285125 | 30712 SILEWICZ | ACTIVE | Mark Booked, note "Inv 30712 (May 1, parts auth)" |
| 308834398 | 9167391774 | 30517 BUTCHER | ACTIVE | Mark Booked, note "Inv 30517, $169 (callback issue)" |
| 308716226 | 7073218192 | 30555 FERGUSON | ACTIVE | Mark Booked, note "Inv 30555" |
| 308996497 | 7073877965 | 30557 SIMONSON | ACTIVE | Mark Booked, note "Inv 30557 (open, parts NLA)" |
| 309254433 | 4154809227 | 30579 FAHEY (CANCELLED) | ACTIVE | **DISPUTE** (see section 1) |
| 309342981 | 8315242701 | 30618 PALM BEACH TAN | ACTIVE | Mark Booked, note "Inv 30618 (open, B2B)" |
| 309570974 | 9259971507 | 30692 RIBAR | ACTIVE | Mark Booked, note "Inv 30692, $169 no-fix" |
| 309817102 | 7073265888 | 30693 LUTUVAKULA | ACTIVE | Mark Booked, note "Inv 30693, $284 heating element" |

---

## 4. Historical-only matches — no action needed

These 4 LSA leads pinged old customer phones in our system but didn't book new April work. The office can call to convert if interested, but no LSA action required.

| LSA Lead | Phone | Old OATAS Match |
|----------|-------|----------------|
| 305180177 | 4157224873 | LATHAM LESLIE inv 30028 (Whirlpool washer, secondary phone) |
| 306057042 | 7073643936 | MORE inv 29047 (March job, didn't rebook) |
| 308252772 | 7074845604 | SQUAR/DECHA inv 4753 (2023 customer) |
| 309772498 | 7077915011 | TAUFER inv 24700 (Oct 2025) |

---

## Dispute outcomes — fill in as completed

| LSA Lead | Date filed | Status | Credit amount | Notes |
|----------|-----------|--------|---------------|-------|
| 309865983 (Oregon) | _ | _ | _ | _ |
| 310062429 (530 area) | _ | _ | _ | _ |
| 309254433 (FAHEY cancelled) | _ | _ | _ | _ |

---

## Office workflow tip

Process these in priority order:
1. **TODAY** — file the 1-3 disputes (window closing fast)
2. **THIS WEEK** — call the 7-8 most local lost leads (707 area code, no email-only) to recover whatever can be recovered
3. **NEXT WEEK** — finish marking the 24 matched leads as Booked in LSA dashboard for audit trail
4. **ONGOING** — use the same lead-handling process for May leads as soon as they come in (don't wait until end of month)
