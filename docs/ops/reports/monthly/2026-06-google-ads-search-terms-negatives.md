# Google Ads Search Terms & Negative Keyword Recommendations

**Generated:** June 15, 2026
**Source:** Google Ads API search_term_view, customer 854-489-2425, May 1 – June 14, 2026
**Prepared by:** Ideas Realized
**Context:** with LSA confirmed converting, the play is to *tighten* paid spend (kill junk queries), not cut it.

---

## The account is mostly clean
The large majority of spend is on **brand searches** (`kellys appliance repair` = 70 clicks / 33 conv — the single biggest term) and **relevant local repair terms** (`appliance repair near me`, `appliance repair petaluma`, city + appliance combos). That's healthy. The recommendations below are refinements, not a rescue.

Estimated clearly-wasted spend over the 6-week window: **~$15-20** (off-service + out-of-area + competitor-name clicks with zero conversions). Small in absolute dollars on a ~$570/mo Search budget, but it's ~3% of spend on junk, and blocking it lifts Quality Score and prevents the waste from scaling with the budget.

---

## Recommended negative keywords (add as campaign negatives)

### A. Wrong service type (Kelly's does residential appliance repair)
| Negative (phrase) | Why | Wasted (6wk) |
|---|---|---|
| `tv repair`, `plasma` | TV repair, not appliances | $1.12 |
| `water heater` | Water heaters, not appliances | $0.99 |
| `handyman` | General handyman | $0.62 |
| `commercial` | Commercial equipment (residential focus) | $0.21 |
| `vacuum` | Vacuum repair (monitor — a Dyson Yelp lead came in once) | $0.40 |

### B. Retail / buying intent (Kelly's is repair + parts, not a store)
| Negative (phrase) | Why | Wasted (6wk) |
|---|---|---|
| `appliance store`, `appliance stores` | Want to buy appliances | $1.99 |
| `scratch and dent` | Buying discount appliances | $0.50 |
| `appliances near me` | Broad buy intent (watch — can catch repair) | $0.61 |
| `used appliances` | Buying used (also seen in organic) | — |

### C. Out-of-area (outside Sonoma/Marin/Napa core)
| Negative (phrase) | Why | Wasted (6wk) |
|---|---|---|
| `fairfield` | Solano County | $0.36 |
| `vacaville` | Solano County | $0.28 |
| `san francisco` | SF | $0.01 |
> Do NOT negative Marin towns (San Rafael, Novato, Mill Valley, etc.) or Sonoma/Napa cities — those are in-area.

### D. Competitor business names (optional — conquest vs. waste)
These are other companies' names. They spent with 0 conversions. Add as negatives unless you specifically want competitor-conquest:
`kings appliance` ($2.65), `ape appliance` / `ape` ($4.76), `matts appliance` ($1.15), `aaa appliance`, `a&e` / `a and e`, `abe appliance`, `reliable appliance`, `advanced appliance`.
> Note on **APE**: APE Appliance Parts closed and Kelly's expanded into that gap — there may be a brand-conquest case for keeping `ape` *on*. Judgment call; it's the single most-spent competitor term at $4.76.

---

## Do NOT add as negatives (relevant, just not converting yet)
- **`appliance repair santa rosa`** — 5 clicks, $4.05, 0 conv, 80 impressions. This is a *core* keyword and the Santa Rosa weakness we see across every channel. The fix is a Santa Rosa landing page + ad copy, NOT a negative. Blocking it would forfeit the largest market.
- **Parts terms** (`appliance parts santa rosa`, `appliance parts near me`) — parts intent has converted before ($1.50 CPA in April) because Kelly's has a parts counter. Keep, monitor.
- **`maytag repair phone number`** — low value (informational) but cheap; monitor.

---

## How to apply
Add Section A, B, and C as **phrase-match negative keywords** at the campaign level on "Appliance Repair - Sonoma Marin." Decide on Section D (competitor) per the conquest note. This is an account change, so it needs a human to apply in the Google Ads UI (or an explicitly-authorized API push). Re-run this search-terms pull monthly — it's the cheapest ongoing optimization the account has.
