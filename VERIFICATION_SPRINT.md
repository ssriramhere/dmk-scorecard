# Verification Sprint Guide

*Structured plan to move the 100 scored promises from `[PROVISIONAL]` to primary-source-verified. Read this before the first session.*

---

## Why this document exists

Every grade currently on the dashboard is backed by credible sources (scheme portals, peer-reviewed studies, major newspapers, the 2026 manifesto's self-reported deliveries). That's enough to publish as a **research preview** — which is what the red banner says. It is not enough to drop the banner, invite institutional scrutiny, or make specific grades the subject of press coverage.

The gap between "research preview" and "publishable scorecard" is closed by **primary-source citations** — actual Government Orders from `tn.gov.in`, actual budget line items from TN Budget documents, actual CAG observations, actual Assembly records with Bill numbers. Every grade needs at least one primary source. High-stakes grades (A, F, signature schemes) need two or more.

This document tells you how to do that systematically.

---

## The sprint in one paragraph

Work through the 100 promises in **3 tiers over ~15 hours**. Tier 1 (20 flagship promises, highest public attention) gets deep primary-source verification (2 hours per 5 promises). Tier 2 (30 mid-visibility promises) gets at-least-one-primary-source verification (1 hour per 5 promises). Tier 3 (50 long-tail promises) gets a lightweight check (30 minutes per 10 promises). At the end, you publish a verified v1.0 with the provisional banner replaced by a specific "Verification date: [date] · 100 promises · 78 fully primary-source-verified" disclosure.

---

## Before you start

### Tools you need open

- Browser with multiple tabs for `tn.gov.in`, `cms.tn.gov.in`, your dashboard repo
- Text editor with `src/App.jsx` open and line numbers visible
- A scratch doc (Google Doc or local markdown) for tracking verification status
- Search engine (Google) with Site: operators ready

### Bookmarks to set

Open these in pinned tabs:

```
https://cms.tn.gov.in/                          (Content Management System — GO archive)
https://www.tn.gov.in/                          (main TN portal, department links)
https://www.tn.gov.in/budget                    (TN Budget Speeches and Policy Notes)
https://www.tnassembly.org/                     (Assembly proceedings and Bills)
https://main.sci.gov.in/                        (Supreme Court of India)
https://cag.gov.in/en/state-reports/tamil-nadu  (CAG TN audit reports)
https://prsindia.org/                           (PRS Legislative Research)
```

### Search queries that work

For a GO search on `cms.tn.gov.in`, the URL pattern is:
```
https://cms.tn.gov.in/sites/default/files/go/<dept-prefix>_<type>_<number>_<year>.pdf
```

Example — the MTM GO (already in our dataset): `hfw_e_340_2021.pdf` (Health & Family Welfare, English, number 340, year 2021).

Common dept prefixes:
- `hfw` — Health & Family Welfare
- `swnd` or `sw` — Social Welfare
- `agri` — Agriculture
- `edu` / `sed` — School Education
- `he` — Higher Education
- `cspcd` — Civil Supplies & Consumer Protection
- `fin` — Finance
- `hi` — Highways
- `rd` — Rural Development
- `ind` — Industries
- `en` — Energy

General Google query pattern:
```
site:cms.tn.gov.in <scheme name> <year>
site:tn.gov.in <scheme name> GO
"<scheme name>" filetype:pdf site:tn.gov.in
```

### Tracking status

For each promise you verify, update these two places:

1. In your tracking doc: mark as `✅ VERIFIED`, `⚠️ PARTIAL`, or `❌ UNVERIFIABLE`
2. In `src/App.jsx`: update the citation with the actual URL and remove any `[PROVISIONAL]` text from the rationale if all citations for that promise are verified

---

## Tier 1 — Flagship promises (deep verification)

**Time: ~2 hours per batch of 5 · ~8 hours total**

These are the 20 most politically visible promises. Every grade on these must be defensible because critics will focus here first. Target: each needs **at least two primary sources** (one GO/Budget + one independent verification).

### Priority list

1. **Kalaignar Magalir Urimai ₹1000** (`dmk2021-0-kalaignar-magalir`) — Find launch GO (Sep 2023), latest beneficiary count from KMUT portal, Budget allocation lines
2. **Vidiyal Payanam free bus** (`dmk2021-501-free-bus-women`) — First-day GO from May 2021, Transport Policy Note ridership data
3. **CM Breakfast Scheme** (`dmk2021-169-morning-milk`) — Launch GO Sep 2022, current beneficiary count from `tnsocialwelfare.tn.gov.in`, budget line
4. **NEET Bill** (`dmk2021-160-neet-ban`) — Bill text from Assembly, SC filing details
5. **TAPS pension** (`dmk2021-309-ops`) — Jan 2026 GO, Finance Dept Policy Note
6. **Paddy MSP top-up** (`dmk2021-75-paddy-msp`) — Agriculture Dept procurement notifications, Budget allocations
7. **Farm loan waiver** (`dmk2021-33-farm-loan-waiver`) — Cooperation Dept GO, Budget line
8. **Makkalai Thedi Maruthuvam** (`dmk2021-mtm-doorstep-health`) — **GO 340/2021 already verified** — add more: budget allocation evolution, CAG observation if any
9. **100% literacy** (`dmk2021-170-100pct-literacy`) — NFHS-5/PLFS data confirming shortfall; School Education Dept policy note absence of 100% declaration
10. **10 lakh jobs** (`dmk2021-185-50-lakh-jobs`) — Naan Mudhalvan launch GO, CMIE unemployment data for TN
11. **75% local reservation** (`dmk2021-196-75pct-local`) — Assembly record showing absence of Bill, P&H HC Haryana ruling
12. **Pudhumai Penn** (`dmk2021-pudhumai-penn`) — Launch GO Sep 2022, `penkalvi.tn.gov.in` beneficiary data
13. **Electronics manufacturing** (`dmk2021-electronics-manufacturing`) — Guidance TN MoU data, SIPCOT investment notifications
14. **Climate Change Mission** (`dmk2021-climate-action`) — Launch GO, Environment Dept Policy Note
15. **11 new medical colleges** (`dmk2021-medical-colleges`) — PIB release, Centre-state MoU, TN Health Dept inauguration notifications
16. **Governor role / SC ruling** (`dmk2021-governor-role-bill`) — SC judgment text April 2025, Assembly resolutions
17. **Kalaignar Canteens** (`dmk2021-331-kalaignar-canteens`) — **Verify the absence claim**: search for any GO, confirm scale. A D grade must have strong evidence of non-delivery.
18. **Three-language opposition** (`dmk2021-3-language-opposition`) — TN Assembly resolution texts, PM-SHRI decline letter
19. **Industrial investment attracted** (`dmk2021-industrial-investment`) — GIM 2024 outcomes, Guidance TN data
20. **Tamil archaeology / Keezhadi** (`dmk2021-archaeology-keezhadi`) — TN Archaeology Dept reports, excavation season notifications

### Per-promise verification procedure

For each Tier 1 promise, run this checklist:

**Step 1. Read the current citation in `App.jsx`.** What sources are already listed? What's marked `url: null`?

**Step 2. Search for the primary GO.** Use Google with `site:cms.tn.gov.in <scheme name>` or try direct URL patterns based on dept prefixes. If found, download the PDF, record: GO number, date, department, a one-sentence excerpt.

**Step 3. Cross-reference Budget allocation.** Open TN Budget Speeches 2021-22 through 2025-26 (PDFs on `tn.gov.in/budget`). Search for the scheme name. Record: year-wise allocation amounts.

**Step 4. Check CAG audit (if scheme operational >2 years).** Go to `cag.gov.in/en/state-reports/tamil-nadu`. Search recent audit reports for scheme mentions. CAG observations can change grade either way — a positive audit supports A; critical observations can drop B to C.

**Step 5. Update the citation block.** Replace placeholder citations with:
```js
{
  type: "GO",
  label: "G.O. (Ms) No. <number>, <Department>, <Date>",
  detail: "<one-line description of what the GO does>",
  url: "https://cms.tn.gov.in/sites/default/files/go/<filename>.pdf"
}
```

**Step 6. Remove `[PROVISIONAL]` from rationale** if all citations for the promise are now primary-source-verified. Otherwise keep the flag.

**Step 7. Update tracking doc.** Mark status, note any grade changes, note any findings worth surfacing.

### Grade adjustments you might make

When you actually look at primary sources, grades sometimes need adjusting. Be willing to change them:

- If budget allocation is significantly below what the 2026 manifesto claims → grade drops
- If CAG observations flag serious gaps → grade drops one step
- If you find a GO you didn't know about that extends scope → grade may rise
- If a "quiet drop" turns out to have a discreet GO → status changes from `quietly_dropped` to something else

Being willing to revise is what distinguishes honest scoring from ratification.

---

## Tier 2 — Mid-visibility promises (one-source verification)

**Time: ~1 hour per batch of 5 · ~6 hours total**

Target: each of these 30 promises gets **at least one primary source** — either a GO, a Budget line, a scheme portal confirmation, or a CAG observation. Less exhaustive than Tier 1, but still primary-source-anchored.

### Promises in Tier 2 (scan `App.jsx` for these IDs)

Health & social welfare: `cmchis-expansion`, `anganwadi-strengthen`, `domestic-violence`, `pwd-welfare`, `transgender-welfare`, `ex-servicemen`, `construction-workers`, `public-health`, `mental-health`

Economy & industry: `msme-fund`, `startup-fund-dedicated`, `traders-welfare`, `gig-workers`, `cooperative-banks`

Infrastructure: `chennai-metro-phase2`, `chennai-metro-phase2-financing`, `ports-development`, `transport-buses`, `tn-urban-road-infra`, `drinking-water`, `desalination-chennai`, `rural-roads`

Agriculture: `horticulture-mission`, `dairy-development`, `kuruvai-package`, `crop-insurance`, `natural-farming`

Women: `pudhumai-penn` (if not Tier 1), `working-women-hostels`, `sanitary-napkins`

Water & environment: `mekedatu-opposition`, `fisheries-harbours`, `fisheries-diesel`

Education: `higher-ed-fees`, `vocational-training`, `tamil-medium`, `college-infrastructure`

### Simpler verification procedure

Per promise: one focused 10-15 minute session finding a single primary source:

1. Pick the single strongest verifiable fact in the current rationale
2. Search for that fact directly (e.g., "Pudhumai Penn ₹1000 GO")
3. If found on `tn.gov.in` / dept portal: update citation URL
4. If only secondary sources available: note "primary source not retrieved; citation uses [source]" in rationale
5. Keep or remove `[PROVISIONAL]` based on whether primary source was found

---

## Tier 3 — Long-tail promises (lightweight check)

**Time: ~30 minutes per batch of 10 · ~2.5 hours total**

Target: 50 remaining promises get a **quick sanity check** — confirm the scheme exists, confirm the 2026 self-report is roughly accurate, fix any obvious errors. No requirement to find primary sources.

### Procedure

For each promise:
1. Read the rationale out loud. Does any specific claim feel shaky?
2. Quick Google search: does the scheme portal exist at the URL cited?
3. If URL is broken: find the correct URL or mark the citation as `url: null` with "portal link verification pending"
4. If a claim feels unsupported: soften the rationale ("reported to have…" instead of "has…")
5. Move on

This tier is about not having embarrassing errors, not about exhaustive verification. `[PROVISIONAL]` stays on all Tier 3 entries.

---

## What "verified" means on the final dashboard

After the sprint, update the dashboard to reflect tiered verification status:

**Add a new field to each promise:**
```js
verificationStatus: "verified" | "partial" | "provisional"
```

**Verified** = At least one primary source (GO, Budget line, CAG audit, official scheme portal with current data, Assembly record, Supreme Court filing). Tier 1 promises should land here.

**Partial** = Credible secondary sources only (major newspapers, peer-reviewed studies, 2026 manifesto cross-reference). No primary document retrieved. Tier 2 promises land here.

**Provisional** = Minimal verification; claim rests on 2026 manifesto self-report plus reasonable inference. Tier 3 promises land here.

**Update the banner** after the sprint:
```
v1.0 · Verified [date] · 100 promises · [X] verified, [Y] partial, [Z] provisional
```

This replaces the blanket provisional banner with a more specific trust signal.

---

## After the sprint — launch sequencing

**Don't launch immediately after finishing verification.** Run these checks first:

**24-hour cooling-off.** Sleep on it. Re-read the top 20 promise rationales the next morning with fresh eyes. You'll spot things you missed.

**External review.** Send the URL to 2-3 trusted people (not DMK or AIADMK partisans — ideally civic-tech or journalism-adjacent) and ask them to find the weakest grade. Fix what they surface.

**Prepare responses to obvious criticisms.** Write down — privately — what you'd say if someone attacked:
- "This is biased against DMK" → Point to A grades (there are 18)
- "This is biased toward DMK" → Point to F grades and quiet-drops (there are 23 D/F/quiet-drop)
- "AI made this up" → Point to the tooling disclosure and invite citation-checking
- "Methodology is flawed" → Point to the rubric and re-promise taxonomy

**Publish with context, not as a standalone.** The URL gaining traction alongside a 600-word explainer (blog post, LinkedIn post, or Twitter thread) is much better than the URL circulating alone.

---

## If you hit problems

**TN government portals are notoriously flaky.** GO PDFs sometimes 404. Scheme portals sometimes redirect. Have a backup plan: if `cms.tn.gov.in` is down, use Google cache or archive.org. Note URL fragility in tracking doc.

**Some promises genuinely have no primary source.** That's a finding. Mark the citation as `{type: "Not_Found", label: "Primary source not retrieved after systematic search", detail: "...searched at [URLs], on [date]"}`. This is honest reporting and is more credible than a vague citation.

**Grades may change significantly.** If a flagship B becomes a D after verification, the underlying finding (scheme under-delivered vs self-reported) is itself a story worth telling in the companion explainer. Don't hide the revision.

**You will run out of steam.** Plan the sprint in 2-3 sessions of 4-5 hours each. Full 15 hours in one sitting is brutal and quality drops. Spread across a weekend or 3-4 evenings.

---

## What to commit back to the repo at the end

```bash
git add -A
git commit -m "Verification sprint: 100 promises, [X] primary-source-verified"
git push
npm run deploy
```

Tag the release so there's a stable reference:

```bash
git tag v1.0-verified
git push --tags
```

That gives you a permalink to the verified state. Future updates work from there.

---

## One principle that underlies all of this

The scorecard's credibility comes not from exhaustiveness but from **legibility of what's been verified and what hasn't**. Readers can trust a project that says "We verified 20 grades deeply, 30 lightly, 50 provisionally — here's exactly what each means." They cannot trust a project that claims blanket rigor it doesn't have. The sprint is about making the verification trail visible, not about pretending every grade is bulletproof.

Be precise about what you know. Be precise about what you don't. That's the whole game.
