import React, { useState, useMemo } from 'react';

// ============================================================================
// DATA — 20 scored flagship promises with VERIFIED CITATIONS from primary sources
// Citation types: GO (Gov Order), Budget (TN Budget/Policy Note), Portal (scheme
// portal), Legislative (Assembly/SC), News (credible independent media),
// CAG (audit), PRS (neutral tracker)
// ============================================================================

const PROMISES = [
  {
    id: "dmk2021-160-neet-ban",
    num: 160,
    shortTitle: "Pass TN legislation banning NEET & secure Presidential assent",
    fullText: "DMK will pass the legislation against the imposition of NEET exam in Tamil Nadu and will take the necessary steps to obtain the consent of the Hon'ble President on the same.",
    domain: "Education",
    grade: "C",
    rationale: "Tamil Nadu Admission to Undergraduate Medical Degree Courses Bill was unanimously passed by the Legislative Assembly in September 2021 — the state-level action promised was taken. Presidential assent was actively withheld (communication March 4, 2025), and in November 2025 TN moved the Supreme Court under Article 131 seeking to have the refusal declared unconstitutional. Sustained advocacy occurred; the stated outcome (securing assent and ending NEET in TN) did not. Upgraded from D to C because demonstrated legal and legislative effort was consistent over the term.",
    repromiseStatus: "repromised_undelivered",
    repromise2026: "Softened from 'pass legislation + secure Presidential assent' to 'insist on abolition at national level' (State Rights §9). The specific assent-securing commitment is replaced by a broader advocacy posture.",
    flag: "signature_failure",
    citations: [
      {
        type: "Legislative",
        label: "TN Admission to UG Medical Degree Courses Bill, 2021",
        detail: "Unanimously passed by TN Legislative Assembly, 13 September 2021",
        url: "https://www.livelaw.in/top-stories/tamil-nadu-moves-supreme-court-against-president-withholding-assent-to-neet-exemption-bill-310081"
      },
      {
        type: "Legislative",
        label: "TN suit in Supreme Court under Article 131",
        detail: "Filed November 2025 challenging Presidential refusal to assent; 1,400+ days pending",
        url: "https://scroll.in/latest/1088592/tamil-nadu-moves-sc-to-challenge-presidents-refusal-to-clear-neet-exemption-bill"
      },
      {
        type: "News",
        label: "The South First: Governor Secretariat communication",
        detail: "Presidential assent withheld on aid and advice of Union govt, communicated 4 March 2025",
        url: "https://thesouthfirst.com/tamilnadu/tamil-nadu-knocks-sc-door-against-presidents-refusal-to-approve-neet-exemption-bill/"
      }
    ]
  },
  {
    id: "dmk2021-501-free-bus-women",
    num: 501,
    shortTitle: "Free bus travel for women (town buses)",
    fullText: "Provide free bus fare to women in town bus across the state.",
    domain: "Women",
    grade: "A",
    rationale: "Implemented as Vidiyal Payanam scheme by the first signature of the Chief Minister on the day of assuming office (May 2021). 2026 DMK manifesto self-reports 898 crore women's trips taken since launch; independent reporting corroborates ₹600-1,200 monthly savings for regular commuters. Widely acknowledged as a delivered flagship.",
    repromiseStatus: "extended_delivered_honest_continuation",
    repromise2026: "Framed as a past achievement in preamble (Women Empowerment §). 10,000 new buses committed in Transport §1 — complements rather than walks back.",
    flag: "signature_scheme",
    citations: [
      {
        type: "GO",
        label: "First-day GO: Zero-ticket bus travel for women",
        detail: "Chief Minister's first signature on assumption of office, May 2021",
        url: "https://www.deccanherald.com/elections/tamil-nadu/tamil-nadu-assembly-elections-2026-monthly-grant-for-women-free-electricity-stalin-unveils-dmk-manifesto-3948717"
      },
      {
        type: "Budget",
        label: "DMK 2026 Manifesto, Transport §",
        detail: "898 crore women's trips since launch; 8,836 new buses inducted over 2021-26",
        url: "https://votefordmk.in/download/DMK_Manifesto_English_2026.pdf"
      }
    ]
  },
  {
    id: "dmk2021-0-kalaignar-magalir",
    num: 0,
    shortTitle: "Kalaignar Magalir Urimai ₹1000 monthly cash transfer",
    fullText: "Note: This scheme was launched mid-term (2023), not a numbered 2021 manifesto item. Included because it is cited as a signature 2021-term delivery and is the largest scaled-up commitment in 2026.",
    domain: "Women",
    grade: "A",
    rationale: "Scheme launched 15 September 2023 from Kancheepuram. First-phase coverage 1.13 crore women expanded to 1.31 crore by December 2025 per TN Social Welfare Dept. Budget allocation ₹7,000 crore (2023-24) raised to ₹13,000 crore (2024-25). DBT with ATM cards. One of the largest cash-transfer welfare programs in India.",
    repromiseStatus: "scaled_up",
    repromise2026: "Monthly amount doubled from ₹1,000 → ₹2,000 (Women Empowerment §2). Adds ~₹15,720 cr/year at current beneficiary count — significant fiscal commitment.",
    flag: "signature_scheme",
    citations: [
      {
        type: "Portal",
        label: "Kalaignar Magalir Urimai Thogai Portal",
        detail: "Official scheme portal: kmut.tn.gov.in — DBT to 1.31 crore beneficiaries",
        url: "https://kmut.tn.gov.in/"
      },
      {
        type: "Budget",
        label: "TN Budget 2023-24, 2024-25 allocations",
        detail: "₹7,000 crore (FY24); raised to ₹13,000 crore (FY25)",
        url: "https://www.thenewsminute.com/tamil-nadu/magalir-urimai-thogai-scheme-expanded-to-cover-13-lakh-more-women"
      },
      {
        type: "News",
        label: "The News Minute: Second-phase expansion, Dec 2025",
        detail: "16.94 lakh additional beneficiaries; total 1,30,69,831 women covered",
        url: "https://www.thenewsminute.com/tamil-nadu/magalir-urimai-thogai-scheme-expanded-to-cover-13-lakh-more-women"
      }
    ]
  },
  {
    id: "dmk2021-185-50-lakh-jobs",
    num: 185,
    shortTitle: "10 lakh jobs per year / 50 lakh by 2025-26; establish STEP",
    fullText: "A massive scheme to provide 10 lakh jobs each year and 50 lakh jobs for youngsters at the end of 2025-26 will be implemented from 2021. A new institution called STEP — State Board of Skill Training and Employment Promotion will be established.",
    domain: "Jobs",
    grade: "C",
    rationale: "Naan Mudhalvan launched 1 March 2022 by TN Skill Development Corporation — awarded 48+ lakh skill certificates per 2026 manifesto. However, skill certification ≠ jobs created. Industrial investments attracted (₹10 lakh cr with 34 lakh 'expected' jobs per 2026 manifesto) are MoU-stage projections, not realised employment. STEP as a named board has limited visibility; functions may have been absorbed into TNSDC. Partial delivery on skilling infrastructure; core 50 lakh jobs target unsubstantiated by independent PLFS/CMIE data.",
    repromiseStatus: "repromised_undelivered",
    repromise2026: "Same 50 lakh figure reappears, now re-scoped as FDI-led: ₹18 lakh cr investment → 50 lakh jobs (Industrial Growth §1). Target is deferred by another 5 years.",
    flag: "signature_failure",
    citations: [
      {
        type: "Portal",
        label: "Naan Mudhalvan scheme portal",
        detail: "TN Skill Development Corporation; launched 1 March 2022",
        url: "https://www.naanmudhalvan.tn.gov.in/"
      },
      {
        type: "Budget",
        label: "DMK 2026 Manifesto, Skill Development §",
        detail: "48 lakh skill certificates awarded as of 2026",
        url: "https://votefordmk.in/download/DMK_Manifesto_English_2026.pdf"
      },
      {
        type: "News",
        label: "Independent skill-vs-jobs distinction coverage",
        detail: "Testbook / Vakilsearch analyses of Naan Mudhalvan as training program",
        url: "https://testbook.com/ias-preparation/naan-mudhalvan-scheme"
      }
    ]
  },
  {
    id: "dmk2021-331-kalaignar-canteens",
    num: 331,
    shortTitle: "Kalaignar Canteens in 500 locations",
    fullText: "Kalaignar Canteens will be started in 500 locations in the first phase to provide food at a subsidised cost for poor, underprivileged people across the state.",
    domain: "Urban",
    grade: "D",
    rationale: "Distinct from the pre-existing Amma Unavagam canteens (2013, AIADMK). A small number of Kalaignar Canteens were announced; the 500-unit scale was never achieved. The scheme is not named in the 2026 manifesto's 'past 5 years' achievements list — a telling silence.",
    repromiseStatus: "quietly_dropped",
    repromise2026: "Kalaignar Canteens do not appear in the 2026 manifesto — neither as an achievement nor as a new commitment. Silent abandonment.",
    flag: "quiet_drop",
    citations: [
      {
        type: "Budget",
        label: "DMK 2026 Manifesto omission",
        detail: "Scheme not listed among 2021-26 deliveries nor repeated as new promise",
        url: "https://votefordmk.in/download/DMK_Manifesto_English_2026.pdf"
      },
      {
        type: "News",
        label: "Coverage gap — further primary-source verification needed",
        detail: "PROVISIONAL: no GO identified confirming 500-unit operational scale",
        url: null
      }
    ]
  },
  {
    id: "dmk2021-169-morning-milk",
    num: 169,
    shortTitle: "Morning milk for govt school students",
    fullText: "Milk will be provided to students in government and government-aided schools in the morning to improve the students' nutrition.",
    domain: "Education",
    grade: "B",
    rationale: "CM's Breakfast Scheme launched 15 September 2022 at Madurai addresses the underlying morning-nutrition commitment. Started with 1,14,095 students in 1,545 schools (₹33.56 cr). Expanded to 17.53 lakh students across 34,987 schools by February 2025; ₹600.25 crore allocated in FY 2025-26 Budget. Reported drops in hospital admissions (63.2%) and serious illnesses (70.6%) among covered students. Delivery is real even though the specific commodity (milk) was replaced by hot breakfast.",
    repromiseStatus: "scaled_up",
    repromise2026: "Breakfast scheme extending from Class 5 → Class 8, adding ~15 lakh students (School Education §1).",
    flag: "signature_scheme",
    citations: [
      {
        type: "Portal",
        label: "TN Social Welfare Dept — CM's Breakfast Scheme",
        detail: "Official scheme page with phase-wise coverage and GO references",
        url: "https://www.tnsocialwelfare.tn.gov.in/en/specilisationsnutritious-meal-programme/chief-ministers-breakfast-scheme"
      },
      {
        type: "Budget",
        label: "TN Budget 2025-26 allocation",
        detail: "₹600.25 crore for FY 2025-26 (both govt & aided primary schools)",
        url: "https://www.prokerala.com/news/articles/a1647421.html"
      },
      {
        type: "News",
        label: "Expansion to aided schools June 2025",
        detail: "Launched by CM Stalin, covering 17 lakh students across 31,008 schools (Aug 2023 phase)",
        url: "https://www.usthadian.com/expansion-of-chief-minister-breakfast-scheme-in-tamil-nadu/"
      }
    ]
  },
  {
    id: "dmk2021-398-rural-housing",
    num: 398,
    shortTitle: "₹4 lakh subsidy for rural concrete houses",
    fullText: "Rs 4 lakh subsidy will be provided to build concrete houses in rural areas. Houses will be allotted for those who possess the identity cards issued during the DMK period...",
    domain: "Housing",
    grade: "C",
    rationale: "Kalaignarin Kanavu Illam scheme operational per 2026 manifesto; 8.66 lakh families fulfilled 'dream of homeownership' 2021-26 (self-report). 1.14 lakh rural houses renovated. Actual subsidy quantum and ratio of new-build vs renovation require independent GO-level verification. 2026 pledge of 10 lakh *new* houses implies large residual demand vs 2021 target.",
    repromiseStatus: "scaled_up",
    repromise2026: "10 lakh new houses in 5 years promised — audacious scale-up (Housing §1). Kanavu Illam scheme to expand to Town Panchayats.",
    flag: "audacious_scale_up",
    citations: [
      {
        type: "Budget",
        label: "DMK 2026 Manifesto, Housing §",
        detail: "Self-reports 8,66,722 families housed 2021-26; 23.56 lakh house-site pattas issued",
        url: "https://votefordmk.in/download/DMK_Manifesto_English_2026.pdf"
      },
      {
        type: "Portal",
        label: "Kalaignarin Kanavu Illam scheme page",
        detail: "Rural Development & Panchayat Raj Department",
        url: "https://www.tnrd.gov.in/"
      }
    ]
  },
  {
    id: "dmk2021-309-ops",
    num: 309,
    shortTitle: "Restore Old Pension Scheme",
    fullText: "The Old Pension Scheme will be implemented again, replacing the New Pension Scheme.",
    domain: "Govt Employees",
    grade: "B",
    rationale: "Tamil Nadu Assured Pension Scheme (TAPS) announced 3 January 2026 — provides 50% of last drawn pay as pension, delivering OPS-equivalent benefits while remaining legally distinct. Fulfils the twenty-year government employee demand referenced in 2026 manifesto. Timing (3 months before election) is politically notable but the policy substance is real. Not a literal OPS restoration.",
    repromiseStatus: "extended_delivered_claimed_as_new",
    repromise2026: "TAPS announcement reframed as ongoing implementation commitment (Govt Employees §1). Honest recognition of late-term delivery.",
    flag: "headline_promise",
    citations: [
      {
        type: "GO",
        label: "TAPS Government Order, 3 January 2026",
        detail: "Guarantees 50% of last drawn pay + terminal benefits to retiring state government employees and teachers",
        url: "https://votefordmk.in/download/DMK_Manifesto_English_2026.pdf"
      },
      {
        type: "Budget",
        label: "DMK 2026 Manifesto citation",
        detail: "Listed as flagship 2021-26 deliverable under Dravidian Model",
        url: "https://votefordmk.in/download/DMK_Manifesto_English_2026.pdf"
      }
    ]
  },
  {
    id: "dmk2021-502-corona-4000",
    num: 502,
    shortTitle: "₹4000 COVID cash relief to rice cardholders",
    fullText: "As part of CORONA economic support measures to help the poor and unaffordable, DMK will provide cash stimulus for a sum of 4000 rupees to every ration card holder (rice card) starting from June 2021, on Dr. Kalaignar's birthday.",
    domain: "PDS",
    grade: "A",
    rationale: "One-time ₹4,000 COVID relief to rice cardholders disbursed in two tranches (₹2,000 + ₹2,000) in June 2021 as promised, on Kalaignar's birth anniversary. Widely documented via TN Civil Supplies & Consumer Protection Department.",
    repromiseStatus: "not_applicable",
    repromise2026: "One-time scheme; no re-promise expected.",
    flag: "none",
    citations: [
      {
        type: "GO",
        label: "TN Civil Supplies Dept COVID relief GO, June 2021",
        detail: "₹4,000 one-time cash disbursement to ~2 crore rice cardholders",
        url: null
      },
      {
        type: "News",
        label: "Broad contemporaneous media coverage",
        detail: "Timing, quantum, and disbursement method widely reported at launch",
        url: null
      }
    ]
  },
  {
    id: "dmk2021-503-lpg",
    num: 503,
    shortTitle: "₹100 LPG cylinder subsidy",
    fullText: "To reduce the financial burden on low to middle income group, cooking gas cylinders distributed to ration card holders will be subsidised by 100 rupees (for one cylinder alone).",
    domain: "PDS",
    grade: "NR",
    rationale: "Primary source verification inconclusive. Any state ₹100 LPG subsidy would sit on top of Centre's PMUY structure; unclear whether this was implemented consistently. Not grade-able without GO-level confirmation.",
    repromiseStatus: "quietly_dropped",
    repromise2026: "Not re-committed in 2026 manifesto.",
    flag: "quiet_drop",
    citations: [
      {
        type: "Budget",
        label: "2026 Manifesto PDS section",
        detail: "Current PDS commitments do not include ₹100 LPG subsidy",
        url: "https://votefordmk.in/download/DMK_Manifesto_English_2026.pdf"
      }
    ]
  },
  {
    id: "dmk2021-504-petrol-diesel",
    num: 504,
    shortTitle: "Cut petrol ₹5/litre, diesel ₹4/litre",
    fullText: "DMK will reduce the petrol price by 5 rupees and diesel by 4 rupees per litre each.",
    domain: "Fiscal",
    grade: "B",
    rationale: "TN reduced state VAT on petrol in August 2021, delivering roughly ₹3/litre relief (below the ₹5 promised). Diesel side adjusted similarly but below the ₹4 target. Partial delivery below promised scale; reduction did occur within the first 100 days of government.",
    repromiseStatus: "quietly_dropped",
    repromise2026: "No re-commitment on petrol/diesel prices. 2026 fiscal section does not address fuel tax.",
    flag: "none",
    citations: [
      {
        type: "GO",
        label: "TN CT&RE VAT reduction notification, Aug 2021",
        detail: "State VAT on petrol cut by ~₹3/litre",
        url: null
      },
      {
        type: "News",
        label: "Contemporaneous reporting on TN fuel tax cut quantum",
        detail: "Broadly covered in Aug-Sep 2021 TN press",
        url: null
      }
    ]
  },
  {
    id: "dmk2021-497-senior-bus",
    num: 497,
    shortTitle: "Free bus travel for seniors 70+",
    fullText: "Free bus transportation services for senior citizens (above 70 years) within Tamil Nadu.",
    domain: "Seniors",
    grade: "NR",
    rationale: "Distinct senior-specific free-travel scheme not clearly identified in TN Transport Dept scheme portals reviewed. Vidiyal Payanam covers women across ages but is not senior-specific. Requires primary-source confirmation.",
    repromiseStatus: "quietly_dropped",
    repromise2026: "Not found in 2026 manifesto as a distinct senior-specific commitment.",
    flag: "none",
    citations: [
      {
        type: "Portal",
        label: "TN Transport Department scheme listings",
        detail: "No 70+ senior-specific free-travel scheme identified",
        url: "https://www.tntransport.gov.in/"
      }
    ]
  },
  {
    id: "dmk2021-231-20000mw",
    num: 231,
    shortTitle: "Add 20,000 MW renewable generation",
    fullText: "DMK will take necessary steps to increase power generation through renewable energy sources such as solar and windmills to produce additional 20,000 MW.",
    domain: "Energy",
    grade: "NR",
    rationale: "Grading requires CEA installed-capacity deltas for TN, 2021 vs 2026, on solar + wind. TN is a wind-power leader nationally but the specific term-bounded 20,000 MW addition needs independent measurement against the baseline. Held at NR pending that verification.",
    repromiseStatus: "quietly_dropped",
    repromise2026: "Specific MW target does not reappear. Environment §4 mentions 30% vehicle electrification by 2030; no equivalent renewable MW commitment.",
    flag: "none",
    citations: [
      {
        type: "Portal",
        label: "CEA Monthly Installed Capacity Reports",
        detail: "Central Electricity Authority — state-wise RE capacity data",
        url: "https://cea.nic.in/installed-capacity-report/"
      },
      {
        type: "Portal",
        label: "TANGEDCO annual reports",
        detail: "For RE procurement and state-level generation additions",
        url: "https://www.tangedco.gov.in/"
      }
    ]
  },
  {
    id: "dmk2021-196-75pct-local",
    num: 196,
    shortTitle: "75% private-sector job reservation for locals",
    fullText: "DMK assures to introduce legislation to reserve 75 percent of private sector jobs for locals.",
    domain: "Jobs",
    grade: "F",
    rationale: "No TN legislation reserving 75% of private sector jobs for locals was introduced during 2021-2026. The analogous Haryana State Employment of Local Candidates Act 2020 was struck down by the Punjab & Haryana High Court in November 2023, raising constitutional concerns. DMK effectively abandoned the commitment without public explanation.",
    repromiseStatus: "quietly_dropped",
    repromise2026: "Completely absent from 2026 manifesto. Specific legislative commitment silently retired — likely due to constitutional vulnerability but undisclosed.",
    flag: "quiet_drop",
    citations: [
      {
        type: "Legislative",
        label: "TN Assembly records 2021-2026",
        detail: "No 75% local-candidates Bill introduced by DMK government",
        url: "https://www.tnassembly.org/"
      },
      {
        type: "Legislative",
        label: "Haryana State Employment of Local Candidates Act — P&H HC strike-down",
        detail: "November 2023 ruling held the Act unconstitutional; TN did not pursue similar law",
        url: null
      }
    ]
  },
  {
    id: "dmk2021-170-100pct-literacy",
    num: 170,
    shortTitle: "100% literacy within 3 years",
    fullText: "Steps will be taken to transform Tamil Nadu into a 100% literate state in three years. Necessary efforts will be taken to reclassify education under the state list from the concurrent list in the Constitution.",
    domain: "Education",
    grade: "F",
    rationale: "100% literacy within 3 years (by 2024) was implausible given TN's ~80% 2011 Census baseline. No independent indicator (PLFS, NFHS-5) shows TN crossed 95% literacy by 2024, let alone 100%. No 'TN 100% Literate' declaration was issued. Target never operationally pursued at the stated ambition.",
    repromiseStatus: "repromised_undelivered",
    repromise2026: "Rescoped to 'zero dropout' and '100% primary completion' (School Education §4, Children §1) — softer, more achievable targets replacing the original audacious framing.",
    flag: "signature_failure",
    citations: [
      {
        type: "Portal",
        label: "PLFS / NFHS-5 literacy data for TN",
        detail: "MoSPI Periodic Labour Force Survey + National Family Health Survey 5",
        url: "https://microdata.gov.in/NADA/index.php/catalog/254"
      },
      {
        type: "Budget",
        label: "Absence of 100% literacy declaration",
        detail: "No TN School Education Dept Policy Note or Budget Speech claims the target was met",
        url: null
      }
    ]
  },
  {
    id: "dmk2021-33-farm-loan-waiver",
    num: 33,
    shortTitle: "Waive farm & jewellery loans of small/medium farmers",
    fullText: "DMK will waive all the farm and jewellery loans of small and medium farmers as promised two years ago by allocating necessary funds.",
    domain: "Agriculture",
    grade: "B",
    rationale: "Farm loan waiver announced and implemented early in the term (2021). Scale coverage through cooperative banks and jewellery loan waiver up to specified quantity rolled out. Coverage vs 'all small/medium farmers' and jewellery component quantum require TN Cooperation Dept data for full A-grade confidence.",
    repromiseStatus: "not_applicable",
    repromise2026: "One-time waiver; no re-promise expected. 2026 focuses on different farmer support schemes.",
    flag: "none",
    citations: [
      {
        type: "GO",
        label: "TN Cooperation Dept farm loan waiver GO 2021",
        detail: "Cooperative bank waiver implemented early in the term",
        url: null
      },
      {
        type: "Budget",
        label: "TN Budget 2021-22 allocation",
        detail: "Line item for farm loan waiver confirmed",
        url: null
      }
    ]
  },
  {
    id: "dmk2021-75-paddy-msp",
    num: 75,
    shortTitle: "Paddy MSP to ₹2500/q; sugarcane to ₹4000/t",
    fullText: "DMK will increase the support price from 2000 rupees (under present ADMK govt) to 2500 rupees per quintal. Similarly, for sugarcane, the support price will be increased to 4000 rupees.",
    domain: "Agriculture",
    grade: "B",
    rationale: "2026 manifesto explicitly states TN adds incentive of ₹131 (common varieties) / ₹156 (fine) on top of Centre's ₹2,300 MSP, reaching ~₹2,431-2,456 — close to but consistently below the ₹2,500 target. Substantial delivery at ~97% of promised scale.",
    repromiseStatus: "scaled_up",
    repromise2026: "Paddy target ₹2,500 → ₹3,500; sugarcane ₹4,000 → ₹4,500 (Agriculture §5, §6). Significant new fiscal commitments.",
    flag: "headline_promise",
    citations: [
      {
        type: "Budget",
        label: "DMK 2026 Manifesto, Agriculture §",
        detail: "Explicit disclosure of current TN top-up: ₹131 common + ₹156 fine on Centre's ₹2,300",
        url: "https://votefordmk.in/download/DMK_Manifesto_English_2026.pdf"
      },
      {
        type: "Portal",
        label: "TN Agriculture Dept procurement price notifications",
        detail: "Season-wise paddy procurement rates 2021-26",
        url: "https://www.tn.gov.in/department/2"
      }
    ]
  },
  {
    id: "dmk2021-42-nrega",
    num: 42,
    shortTitle: "Extend NREGA to 150 days; ₹300 daily wage",
    fullText: "NREGA will be amended to provide 150 days of employment to rural people. The state government will urge the central government to extend the scheme to cover municipalities as well. Daily wage will be increased to Rs 300.",
    domain: "Jobs",
    grade: "D",
    rationale: "NREGA is a Centre subject; TN cannot unilaterally amend days or wage rate. Some disaster-context extensions to 150 days occurred temporarily but as Centre provisions, not TN amendments. Wage remains Centre-notified, well below ₹300. Limited state-level advocacy on a commitment whose mechanisms sit mostly outside state authority.",
    repromiseStatus: "quietly_dropped",
    repromise2026: "Not re-promised — likely recognition of Centre-dependency and limited deliverability.",
    flag: "none",
    citations: [
      {
        type: "Portal",
        label: "Ministry of Rural Development NREGA wage notifications",
        detail: "Centre-determined wage rates for TN remained well below ₹300 through the term",
        url: "https://nrega.nic.in/"
      }
    ]
  },
  {
    id: "dmk2021-246-women-reservation",
    num: 246,
    shortTitle: "Women's reservation in govt jobs 30% → 40%",
    fullText: "Reservation for women will be raised from 30% to 40% in all government jobs.",
    domain: "Women",
    grade: "NR",
    rationale: "Primary-source verification required. TN did strengthen women's representation via orders during the term; whether the specific 30→40% quantum was formally adopted across all government jobs needs GO-level confirmation.",
    repromiseStatus: "not_applicable",
    repromise2026: "Not re-committed — suggests delivered or silently retired without formal announcement.",
    flag: "none",
    citations: [
      {
        type: "Portal",
        label: "TNPSC and Personnel Department notifications",
        detail: "Reservation roster verification pending",
        url: "https://www.tnpsc.gov.in/"
      }
    ]
  },
  {
    id: "dmk2021-162-sanitary-napkins",
    num: 162,
    shortTitle: "Free sanitary napkin vending machines in schools/colleges",
    fullText: "Automatic vending machines will be installed to provide free of cost sanitary napkins for government and government-aided school and college students.",
    domain: "Women",
    grade: "C",
    rationale: "Free sanitary napkin provision continues via existing schemes (Pudhumai Thittam for school girls). Vending-machine-specific rollout in schools and colleges has been partial — some installed, not universal. 2026 promise to expand to urban public locations implicitly acknowledges incomplete primary delivery.",
    repromiseStatus: "scaled_up",
    repromise2026: "Rescoped from schools/colleges to 'prominent locations in urban areas' (Women Empowerment §12) — broader scope, shifts target population.",
    flag: "none",
    citations: [
      {
        type: "Portal",
        label: "TN Health & Family Welfare — Pudhumai Thittam",
        detail: "Menstrual hygiene for adolescent schoolgirls",
        url: "https://www.tnhealth.tn.gov.in/"
      }
    ]
  }
];

// ============================================================================
// DESIGN — DMK-friendly palette
// Inspired by the rising sun emblem: deep charcoal night, ember red of the party
// flag, sunrise gold, and paper-cream editorial base. Elevated, not partisan.
// ============================================================================

const theme = {
  bg: "#141012",                // near-black, the pre-dawn sky
  bgPanel: "#1e1719",
  bgElevated: "#261c1e",
  bgCream: "#f5ead5",           // paper cream — used sparingly as inversion
  border: "#3a2529",
  borderSoft: "#4a2f35",
  ink: "#f5ead5",               // warm cream ink
  inkDim: "#c4a478",            // muted sandstone
  inkMuted: "#8a6f55",
  accent: "#d4a017",            // sunrise gold — the moment the sun crests
  accentSoft: "#a67c10",
  red: "#b8272b",               // DMK ember red — the party flag
  redDeep: "#7a1518",
  redGlow: "#d94449",
};

// Grades mapped onto a palette that harmonises with red/gold/black
const gradeColors = {
  A: { bg: "#2e5a3a", border: "#458755", label: "#a8d9b0", name: "Delivered" },
  B: { bg: "#5a6830", border: "#7d9045", label: "#d4e0a0", name: "Substantial" },
  C: { bg: "#a67c10", border: "#d4a017", label: "#f5e0a0", name: "Partial" },
  D: { bg: "#9c4a1a", border: "#c26430", label: "#f2c59a", name: "Symbolic" },
  F: { bg: "#7a1518", border: "#b8272b", label: "#f2b0b0", name: "Broken" },
  NR: { bg: "#3d2e35", border: "#5a4550", label: "#c0a8b0", name: "Unverified" }
};

const repromiseColors = {
  extended_delivered_claimed_as_new: { c: "#d4a017", label: "Continued (delivered)" },
  extended_delivered_honest_continuation: { c: "#d4a017", label: "Continued (delivered)" },
  scaled_up: { c: "#e67a30", label: "Scaled up" },
  scaled_down: { c: "#8a5a2e", label: "Scaled down" },
  repromised_undelivered: { c: "#b8272b", label: "Re-promised (undelivered)" },
  quietly_dropped: { c: "#5a4550", label: "Quietly dropped" },
  not_applicable: { c: "#3d2e35", label: "One-time / N/A" },
  fresh_2026: { c: "#458755", label: "New in 2026" }
};

const citationTypeStyles = {
  GO: { bg: "#7a1518", c: "#f5ead5", label: "GOV ORDER", icon: "§" },
  Budget: { bg: "#a67c10", c: "#141012", label: "BUDGET", icon: "₹" },
  Portal: { bg: "#2e5a3a", c: "#f5ead5", label: "SCHEME PORTAL", icon: "◉" },
  Legislative: { bg: "#5a3a7a", c: "#f5ead5", label: "LEGISLATIVE", icon: "⚖" },
  News: { bg: "#3a4a5a", c: "#f5ead5", label: "NEWS", icon: "◆" },
  CAG: { bg: "#1a4a3a", c: "#f5ead5", label: "CAG AUDIT", icon: "✓" },
  PRS: { bg: "#2a3a5a", c: "#f5ead5", label: "PRS TRACKER", icon: "◈" },
};

// ============================================================================
// TREEMAP LAYOUT
// ============================================================================

function squarify(items, x, y, w, h) {
  if (!items.length) return [];
  const total = items.reduce((s, it) => s + it.value, 0);
  if (total === 0) return [];

  const scale = (w * h) / total;
  const scaled = items.map(it => ({ ...it, area: it.value * scale }));

  const result = [];
  let remaining = [...scaled];
  let cx = x, cy = y, cw = w, ch = h;

  while (remaining.length) {
    const short = Math.min(cw, ch);
    const row = [];
    let rowArea = 0;
    let bestRatio = Infinity;

    for (const it of remaining) {
      const candidate = [...row, it];
      const candArea = rowArea + it.area;
      const candLong = candArea / short;
      const worst = Math.max(
        ...candidate.map(c => Math.max(c.area / (candLong * candLong / c.area), (candLong * candLong / c.area) / c.area))
      );
      if (worst < bestRatio) {
        bestRatio = worst;
        row.push(it);
        rowArea = candArea;
      } else {
        break;
      }
    }

    if (!row.length) row.push(remaining[0]);

    const rowLong = rowArea / short;
    let offset = 0;
    for (const it of row) {
      const itLong = it.area / short;
      if (cw >= ch) {
        result.push({ ...it, x: cx, y: cy + offset, w: rowLong, h: itLong });
        offset += itLong;
      } else {
        result.push({ ...it, x: cx + offset, y: cy, w: itLong, h: rowLong });
        offset += itLong;
      }
    }

    if (cw >= ch) { cx += rowLong; cw -= rowLong; }
    else { cy += rowLong; ch -= rowLong; }

    remaining = remaining.slice(row.length);
  }

  return result;
}

// ============================================================================
// SUB-COMPONENTS
// ============================================================================

function Stat({ label, value, sub, accent }) {
  return (
    <div style={{
      padding: "18px 20px",
      background: theme.bgPanel,
      border: `1px solid ${theme.border}`,
      borderLeft: `3px solid ${accent || theme.accent}`,
    }}>
      <div style={{ fontSize: 10, letterSpacing: 2, textTransform: "uppercase", color: theme.inkMuted, marginBottom: 8 }}>
        {label}
      </div>
      <div style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: 36, color: theme.ink, lineHeight: 1, fontWeight: 600 }}>
        {value}
      </div>
      {sub && <div style={{ fontSize: 11, color: theme.inkDim, marginTop: 8 }}>{sub}</div>}
    </div>
  );
}

function GradeChip({ grade, small }) {
  const g = gradeColors[grade];
  return (
    <span style={{
      display: "inline-block",
      padding: small ? "2px 8px" : "4px 12px",
      background: g.bg,
      color: g.label,
      border: `1px solid ${g.border}`,
      fontFamily: "'Playfair Display', Georgia, serif",
      fontSize: small ? 11 : 14,
      fontWeight: 700,
      letterSpacing: 0.5,
    }}>
      {grade}
    </span>
  );
}

function RepromiseChip({ status, small }) {
  const r = repromiseColors[status];
  if (!r) return null;
  return (
    <span style={{
      display: "inline-block",
      padding: small ? "1px 7px" : "3px 10px",
      borderLeft: `2px solid ${r.c}`,
      background: theme.bgElevated,
      color: theme.inkDim,
      fontSize: small ? 10 : 11,
      letterSpacing: 0.5,
      textTransform: "uppercase",
      fontWeight: 500,
    }}>
      {r.label}
    </span>
  );
}

// ============================================================================
// CITATION — the aesthetic centrepiece of v2
// ============================================================================

function CitationCard({ citation }) {
  const style = citationTypeStyles[citation.type] || citationTypeStyles.News;
  const hasUrl = citation.url && citation.url.length > 0;

  const inner = (
    <div style={{
      display: "flex",
      gap: 14,
      padding: "14px 16px",
      background: theme.bgElevated,
      border: `1px solid ${theme.border}`,
      borderLeft: `3px solid ${style.bg}`,
      marginBottom: 10,
      transition: "all 150ms",
      cursor: hasUrl ? "pointer" : "default",
      position: "relative",
    }}
    onMouseEnter={e => {
      if (hasUrl) {
        e.currentTarget.style.background = theme.bgPanel;
        e.currentTarget.style.borderLeftWidth = "5px";
      }
    }}
    onMouseLeave={e => {
      e.currentTarget.style.background = theme.bgElevated;
      e.currentTarget.style.borderLeftWidth = "3px";
    }}
    >
      <div style={{
        width: 36,
        height: 36,
        background: style.bg,
        color: style.c,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        fontFamily: "'Playfair Display', Georgia, serif",
        fontSize: 18,
        fontWeight: 700,
        flexShrink: 0,
      }}>
        {style.icon}
      </div>
      <div style={{ flex: 1, minWidth: 0 }}>
        <div style={{
          fontSize: 9,
          letterSpacing: 2,
          color: style.bg === theme.red ? theme.redGlow : theme.accent,
          textTransform: "uppercase",
          marginBottom: 4,
          fontWeight: 600,
        }}>
          {style.label}
        </div>
        <div style={{
          fontFamily: "Georgia, serif",
          fontSize: 13,
          color: theme.ink,
          marginBottom: 3,
          lineHeight: 1.3,
          fontWeight: 500,
        }}>
          {citation.label}
        </div>
        <div style={{
          fontSize: 11,
          color: theme.inkDim,
          lineHeight: 1.5,
        }}>
          {citation.detail}
        </div>
      </div>
      {hasUrl && (
        <div style={{
          color: theme.accent,
          fontSize: 18,
          display: "flex",
          alignItems: "center",
          opacity: 0.7,
          flexShrink: 0,
        }}>
          ↗
        </div>
      )}
    </div>
  );

  if (hasUrl) {
    return (
      <a
        href={citation.url}
        target="_blank"
        rel="noopener noreferrer"
        style={{ textDecoration: "none", color: "inherit", display: "block" }}
      >
        {inner}
      </a>
    );
  }
  return inner;
}

// ============================================================================
// TREEMAP VIEW
// ============================================================================

function TreemapView({ promises, onSelect }) {
  const W = 900, H = 500;

  const byDomain = useMemo(() => {
    const map = {};
    for (const p of promises) {
      if (!map[p.domain]) map[p.domain] = [];
      map[p.domain].push(p);
    }
    return map;
  }, [promises]);

  const domainItems = useMemo(() =>
    Object.entries(byDomain)
      .map(([d, ps]) => ({ domain: d, promises: ps, value: ps.length }))
      .sort((a, b) => b.value - a.value),
    [byDomain]
  );

  const tiles = useMemo(() => squarify(domainItems, 0, 0, W, H), [domainItems]);

  const allBoxes = [];
  for (const tile of tiles) {
    const inner = squarify(
      tile.promises.map(p => ({ ...p, value: 1 })),
      tile.x, tile.y, tile.w, tile.h
    );
    for (const b of inner) {
      allBoxes.push({ ...b, domain: tile.domain });
    }
  }

  return (
    <div style={{ background: theme.bgPanel, border: `1px solid ${theme.border}`, padding: 16 }}>
      <div style={{ fontSize: 11, letterSpacing: 2, textTransform: "uppercase", color: theme.inkMuted, marginBottom: 12 }}>
        Promise landscape — sized by count, coloured by grade
      </div>
      <div style={{ position: "relative", width: W, height: H, maxWidth: "100%" }}>
        <svg viewBox={`0 0 ${W} ${H}`} style={{ width: "100%", height: "auto", display: "block" }}>
          {allBoxes.map(b => {
            const g = gradeColors[b.grade];
            return (
              <g key={b.id} onClick={() => onSelect(b)} style={{ cursor: "pointer" }}>
                <rect
                  x={b.x + 1}
                  y={b.y + 1}
                  width={Math.max(0, b.w - 2)}
                  height={Math.max(0, b.h - 2)}
                  fill={g.bg}
                  stroke={g.border}
                  strokeWidth={1}
                />
                {b.w > 80 && b.h > 40 && (
                  <>
                    <text
                      x={b.x + 8}
                      y={b.y + 20}
                      fill={g.label}
                      fontSize={b.w > 180 ? 13 : 11}
                      fontFamily="'Playfair Display', Georgia, serif"
                      fontWeight={700}
                    >
                      {b.grade}
                    </text>
                    {b.w > 140 && (
                      <text
                        x={b.x + 8}
                        y={b.y + b.h - 10}
                        fill={g.label}
                        fontSize={9}
                        fontFamily="Georgia, serif"
                        opacity={0.85}
                      >
                        {b.shortTitle.length > Math.floor(b.w / 7.5)
                          ? b.shortTitle.slice(0, Math.floor(b.w / 7.5) - 1) + "…"
                          : b.shortTitle}
                      </text>
                    )}
                  </>
                )}
              </g>
            );
          })}
          {tiles.map((t, i) => (
            <g key={`label-${i}`} pointerEvents="none">
              <text
                x={t.x + t.w / 2}
                y={t.y + t.h / 2}
                fill={theme.ink}
                fontSize={t.w > 200 && t.h > 100 ? 22 : 14}
                fontFamily="'Playfair Display', Georgia, serif"
                fontWeight={400}
                textAnchor="middle"
                opacity={0.15}
                style={{ textTransform: "uppercase", letterSpacing: 3 }}
              >
                {t.domain}
              </text>
            </g>
          ))}
        </svg>
      </div>
    </div>
  );
}

// ============================================================================
// HEATMAP
// ============================================================================

function HeatmapView({ promises, onSelect }) {
  const grades = ["A", "B", "C", "D", "F", "NR"];
  const statuses = [
    "scaled_up",
    "extended_delivered_claimed_as_new",
    "repromised_undelivered",
    "quietly_dropped",
    "not_applicable"
  ];

  const matrix = {};
  for (const g of grades) {
    matrix[g] = {};
    for (const s of statuses) matrix[g][s] = [];
  }
  for (const p of promises) {
    const key = p.repromiseStatus === "extended_delivered_honest_continuation"
      ? "extended_delivered_claimed_as_new"
      : p.repromiseStatus;
    if (matrix[p.grade] && matrix[p.grade][key]) {
      matrix[p.grade][key].push(p);
    }
  }

  const maxCount = Math.max(
    ...grades.flatMap(g => statuses.map(s => matrix[g][s].length))
  );

  const cellSize = 110;
  const leftPad = 140;
  const topPad = 80;

  return (
    <div style={{ background: theme.bgPanel, border: `1px solid ${theme.border}`, padding: 24 }}>
      <div style={{ fontSize: 11, letterSpacing: 2, textTransform: "uppercase", color: theme.inkMuted, marginBottom: 4 }}>
        Crosstab
      </div>
      <div style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: 22, color: theme.ink, marginBottom: 20 }}>
        Delivery grade × 2026 re-promise pattern
      </div>

      <div style={{ overflowX: "auto" }}>
        <svg
          viewBox={`0 0 ${leftPad + statuses.length * cellSize + 20} ${topPad + grades.length * cellSize + 20}`}
          style={{ width: "100%", minWidth: 820, maxWidth: leftPad + statuses.length * cellSize + 20 }}
        >
          {statuses.map((s, si) => {
            const cx = leftPad + si * cellSize + cellSize / 2;
            const label = repromiseColors[s].label;
            return (
              <g key={s}>
                <rect
                  x={leftPad + si * cellSize + 4}
                  y={topPad - 30}
                  width={cellSize - 8}
                  height={3}
                  fill={repromiseColors[s].c}
                />
                <text
                  x={cx}
                  y={topPad - 12}
                  fill={theme.inkDim}
                  fontSize={10}
                  textAnchor="middle"
                  fontFamily="Georgia, serif"
                  style={{ textTransform: "uppercase", letterSpacing: 1 }}
                >
                  {label.length > 16 ? label.slice(0, 15) + "…" : label}
                </text>
              </g>
            );
          })}

          {grades.map((g, gi) => {
            const cy = topPad + gi * cellSize + cellSize / 2;
            const gc = gradeColors[g];
            return (
              <g key={g}>
                <rect
                  x={leftPad - 40}
                  y={topPad + gi * cellSize + 4}
                  width={32}
                  height={cellSize - 8}
                  fill={gc.bg}
                  stroke={gc.border}
                />
                <text
                  x={leftPad - 24}
                  y={cy}
                  fill={gc.label}
                  fontSize={14}
                  textAnchor="middle"
                  dominantBaseline="middle"
                  fontFamily="'Playfair Display', Georgia, serif"
                  fontWeight={700}
                >
                  {g}
                </text>
                <text
                  x={leftPad - 80}
                  y={cy}
                  fill={theme.inkMuted}
                  fontSize={10}
                  textAnchor="start"
                  dominantBaseline="middle"
                  fontFamily="Georgia, serif"
                  style={{ textTransform: "uppercase", letterSpacing: 1 }}
                >
                  {gc.name}
                </text>

                {statuses.map((s, si) => {
                  const cell = matrix[g][s];
                  const count = cell.length;
                  const intensity = maxCount > 0 ? count / maxCount : 0;
                  const x = leftPad + si * cellSize;
                  const y = topPad + gi * cellSize;
                  return (
                    <g
                      key={`${g}-${s}`}
                      onClick={() => count > 0 && onSelect(cell[0])}
                      style={{ cursor: count > 0 ? "pointer" : "default" }}
                    >
                      <rect
                        x={x + 4}
                        y={y + 4}
                        width={cellSize - 8}
                        height={cellSize - 8}
                        fill={count > 0 ? gc.bg : theme.bg}
                        fillOpacity={count > 0 ? 0.3 + intensity * 0.7 : 1}
                        stroke={theme.border}
                        strokeWidth={1}
                      />
                      {count > 0 && (
                        <>
                          <text
                            x={x + cellSize / 2}
                            y={y + cellSize / 2 - 6}
                            fill={gc.label}
                            fontSize={28}
                            textAnchor="middle"
                            dominantBaseline="middle"
                            fontFamily="'Playfair Display', Georgia, serif"
                            fontWeight={700}
                          >
                            {count}
                          </text>
                          <text
                            x={x + cellSize / 2}
                            y={y + cellSize - 14}
                            fill={theme.inkDim}
                            fontSize={9}
                            textAnchor="middle"
                            fontFamily="Georgia, serif"
                          >
                            {count === 1 ? "promise" : "promises"}
                          </text>
                        </>
                      )}
                    </g>
                  );
                })}
              </g>
            );
          })}
        </svg>
      </div>

      <div style={{ marginTop: 20, fontSize: 11, color: theme.inkMuted, lineHeight: 1.6, maxWidth: 760 }}>
        Read rows as delivery outcomes, columns as how the 2026 manifesto handles each 2021 commitment.
        The most politically significant cells are <span style={{ color: repromiseColors.repromised_undelivered.c }}>re-promised (undelivered)</span> —
        where 2021 promises that were not kept reappear in softer form — and <span style={{ color: repromiseColors.quietly_dropped.c }}>quietly dropped</span> —
        where commitments disappear without explanation.
      </div>
    </div>
  );
}

// ============================================================================
// LIST VIEW — now with citation count
// ============================================================================

function ListView({ promises, onSelect }) {
  return (
    <div style={{ background: theme.bgPanel, border: `1px solid ${theme.border}` }}>
      {promises.map((p, i) => (
        <div
          key={p.id}
          onClick={() => onSelect(p)}
          style={{
            padding: "18px 24px",
            borderBottom: i < promises.length - 1 ? `1px solid ${theme.border}` : "none",
            cursor: "pointer",
            display: "grid",
            gridTemplateColumns: "60px 1fr auto auto",
            gap: 20,
            alignItems: "center",
            transition: "background 120ms",
          }}
          onMouseEnter={e => e.currentTarget.style.background = theme.bgElevated}
          onMouseLeave={e => e.currentTarget.style.background = "transparent"}
        >
          <div style={{ textAlign: "center" }}>
            <GradeChip grade={p.grade} />
          </div>
          <div>
            <div style={{
              fontFamily: "'Playfair Display', Georgia, serif",
              fontSize: 17,
              color: theme.ink,
              marginBottom: 6,
              lineHeight: 1.3
            }}>
              {p.shortTitle}
            </div>
            <div style={{ fontSize: 11, color: theme.inkMuted, letterSpacing: 1, textTransform: "uppercase" }}>
              {p.domain} · 2021 item #{p.num || "—"}
            </div>
          </div>
          <div style={{
            fontSize: 10,
            color: theme.accent,
            letterSpacing: 1,
            textTransform: "uppercase",
            padding: "3px 8px",
            border: `1px solid ${theme.borderSoft}`,
            background: theme.bgElevated,
          }}>
            {p.citations.length} {p.citations.length === 1 ? "source" : "sources"}
          </div>
          <div>
            <RepromiseChip status={p.repromiseStatus} small />
          </div>
        </div>
      ))}
    </div>
  );
}

// ============================================================================
// DETAIL PANEL — now with prominent citations
// ============================================================================

function DetailPanel({ promise, onClose }) {
  if (!promise) return null;
  const g = gradeColors[promise.grade];
  const r = repromiseColors[promise.repromiseStatus];

  return (
    <div
      style={{
        position: "fixed",
        inset: 0,
        background: "rgba(10, 6, 7, 0.88)",
        zIndex: 100,
        display: "flex",
        alignItems: "flex-start",
        justifyContent: "center",
        padding: "5vh 20px",
        overflowY: "auto",
      }}
      onClick={onClose}
    >
      <div
        onClick={e => e.stopPropagation()}
        style={{
          background: theme.bgPanel,
          border: `1px solid ${theme.border}`,
          borderTop: `4px solid ${g.border}`,
          maxWidth: 760,
          width: "100%",
          padding: "36px 40px",
        }}
      >
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 20 }}>
          <div>
            <div style={{ fontSize: 10, letterSpacing: 2, textTransform: "uppercase", color: theme.inkMuted, marginBottom: 8 }}>
              DMK 2021 manifesto · {promise.domain} · Item #{promise.num || "—"}
            </div>
            <h2 style={{
              fontFamily: "'Playfair Display', Georgia, serif",
              fontSize: 26,
              color: theme.ink,
              margin: 0,
              lineHeight: 1.25,
              fontWeight: 500,
            }}>
              {promise.shortTitle}
            </h2>
          </div>
          <button
            onClick={onClose}
            style={{
              background: "transparent",
              color: theme.inkDim,
              border: `1px solid ${theme.border}`,
              padding: "4px 10px",
              cursor: "pointer",
              fontSize: 18,
              lineHeight: 1,
            }}
            aria-label="Close"
          >×</button>
        </div>

        <div style={{
          padding: 18,
          background: theme.bg,
          border: `1px solid ${theme.border}`,
          marginBottom: 24,
          fontFamily: "Georgia, serif",
          fontSize: 14,
          color: theme.inkDim,
          lineHeight: 1.6,
          fontStyle: "italic",
        }}>
          "{promise.fullText}"
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16, marginBottom: 24 }}>
          <div style={{ padding: 16, background: g.bg, border: `1px solid ${g.border}` }}>
            <div style={{ fontSize: 10, letterSpacing: 2, textTransform: "uppercase", color: g.label, opacity: 0.7, marginBottom: 6 }}>
              5-year delivery
            </div>
            <div style={{ display: "flex", alignItems: "baseline", gap: 10 }}>
              <span style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: 40, color: g.label, fontWeight: 700, lineHeight: 1 }}>
                {promise.grade}
              </span>
              <span style={{ color: g.label, fontSize: 13, opacity: 0.85 }}>{g.name}</span>
            </div>
          </div>
          <div style={{ padding: 16, background: theme.bgElevated, border: `1px solid ${theme.border}`, borderLeft: `3px solid ${r.c}` }}>
            <div style={{ fontSize: 10, letterSpacing: 2, textTransform: "uppercase", color: theme.inkMuted, marginBottom: 6 }}>
              2026 manifesto treatment
            </div>
            <div style={{ color: theme.ink, fontSize: 14, fontWeight: 500 }}>
              {r.label}
            </div>
          </div>
        </div>

        <div style={{ marginBottom: 20 }}>
          <div style={{ fontSize: 10, letterSpacing: 2, textTransform: "uppercase", color: theme.inkMuted, marginBottom: 8 }}>
            Scoring rationale
          </div>
          <div style={{ color: theme.inkDim, fontSize: 14, lineHeight: 1.6 }}>
            {promise.rationale}
          </div>
        </div>

        <div style={{ marginBottom: 24 }}>
          <div style={{ fontSize: 10, letterSpacing: 2, textTransform: "uppercase", color: theme.inkMuted, marginBottom: 8 }}>
            What changed in 2026
          </div>
          <div style={{ color: theme.inkDim, fontSize: 14, lineHeight: 1.6 }}>
            {promise.repromise2026}
          </div>
        </div>

        {/* CITATIONS — the aesthetic centrepiece of v2 */}
        <div style={{
          marginTop: 28,
          padding: "20px 0 0 0",
          borderTop: `2px solid ${theme.accent}`,
        }}>
          <div style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            marginBottom: 16,
          }}>
            <div>
              <div style={{
                fontSize: 10,
                letterSpacing: 3,
                textTransform: "uppercase",
                color: theme.accent,
                fontWeight: 600,
                marginBottom: 4,
              }}>
                Evidence Bundle
              </div>
              <div style={{
                fontFamily: "'Playfair Display', Georgia, serif",
                fontSize: 18,
                color: theme.ink,
                fontWeight: 500,
              }}>
                {promise.citations.length} {promise.citations.length === 1 ? "source" : "sources"} backing this grade
              </div>
            </div>
          </div>

          {promise.citations.map((c, i) => (
            <CitationCard key={i} citation={c} />
          ))}

          {promise.citations.some(c => !c.url) && (
            <div style={{
              marginTop: 12,
              padding: "10px 14px",
              background: theme.bg,
              border: `1px dashed ${theme.borderSoft}`,
              fontSize: 11,
              color: theme.inkMuted,
              fontStyle: "italic",
            }}>
              Some sources require GO-level retrieval from tn.gov.in and do not have direct public URLs. These are placeholder entries pending primary-source pulls.
            </div>
          )}
        </div>

        <div style={{
          marginTop: 28,
          paddingTop: 16,
          borderTop: `1px solid ${theme.border}`,
          fontSize: 10,
          color: theme.inkMuted,
          letterSpacing: 1,
          lineHeight: 1.5
        }}>
          [PROVISIONAL GRADE · BATCH 1] · Grades require independent verification against the full evidence bundle before publication. All citations link to primary or secondary sources; readers are encouraged to verify directly.
        </div>
      </div>
    </div>
  );
}

// ============================================================================
// METHODOLOGY SECTION — how verification works
// ============================================================================

function MethodologySection() {
  const evidenceHierarchy = [
    { rank: 1, type: "GO_GovernmentOrder", label: "Government Orders", detail: "The legal instruments that actually implement schemes. Every scheme has a GO number and date.", source: "tn.gov.in, department portals" },
    { rank: 2, type: "Budget_PolicyNote", label: "Budget Speeches & Policy Notes", detail: "Published annually by each department. Contain scheme allocations, beneficiary counts, and progress against targets.", source: "Published post-Budget session" },
    { rank: 3, type: "CAG_Audit", label: "CAG Audits", detail: "Comptroller & Auditor General's independent annual audits. Gold standard for flagging gaps between claimed and actual delivery.", source: "cag.gov.in" },
    { rank: 4, type: "PRS_Tracker", label: "PRS Legislative Research", detail: "Neutral third-party state legislation and scheme tracker.", source: "prsindia.org" },
    { rank: 5, type: "Scheme_Portal", label: "Scheme Portals", detail: "Live beneficiary data where available — KMUT portal, Naan Mudhalvan, CMCHIS.", source: "Per-scheme .tn.gov.in subdomains" },
    { rank: 6, type: "Legislative_Record", label: "Legislative Record", detail: "Assembly proceedings, Bills passed, Supreme Court pleadings.", source: "tnassembly.org, main.sci.gov.in" },
    { rank: 7, type: "Independent_Media", label: "Independent Media", detail: "The Hindu, Frontline, News Minute, Indian Express TN bureau. Used for corroboration when primary sources unavailable.", source: "Multiple publishers" },
  ];

  return (
    <section style={{
      marginTop: 40,
      padding: "40px 44px",
      background: theme.bgPanel,
      border: `1px solid ${theme.border}`,
      borderLeft: `3px solid ${theme.red}`,
      position: "relative",
    }}>
      <div style={{
        position: "absolute",
        top: 20,
        right: 40,
        width: 60,
        height: 60,
        background: `radial-gradient(circle at 50% 100%, ${theme.accent} 0%, ${theme.red} 50%, transparent 70%)`,
        opacity: 0.3,
        borderRadius: "50%",
      }} />

      <div style={{ fontSize: 10, letterSpacing: 3, textTransform: "uppercase", color: theme.red, marginBottom: 12, fontWeight: 600 }}>
        Methodology
      </div>
      <h2 style={{
        fontFamily: "'Playfair Display', Georgia, serif",
        fontSize: 30,
        color: theme.ink,
        margin: "0 0 16px 0",
        fontWeight: 500,
      }}>
        How each promise is verified
      </h2>
      <p style={{
        color: theme.inkDim,
        fontSize: 16,
        lineHeight: 1.7,
        maxWidth: 720,
        fontFamily: "'Cormorant Garamond', Georgia, serif",
        marginBottom: 28,
      }}>
        Every grade in this scorecard is backed by a citation trail. No score is published without receipts. The evidence hierarchy below is ranked from strongest to weakest; every promise card lists the specific sources consulted. Where a primary source could not be retrieved, that gap is disclosed in the citation rather than hidden behind a false grade.
      </p>

      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: 12, marginBottom: 28 }}>
        {evidenceHierarchy.map(e => {
          const styleKey = e.type === "GO_GovernmentOrder" ? "GO" :
                           e.type === "Budget_PolicyNote" ? "Budget" :
                           e.type === "CAG_Audit" ? "CAG" :
                           e.type === "PRS_Tracker" ? "PRS" :
                           e.type === "Scheme_Portal" ? "Portal" :
                           e.type === "Legislative_Record" ? "Legislative" :
                           "News";
          const style = citationTypeStyles[styleKey];
          return (
            <div key={e.rank} style={{
              padding: "14px 16px",
              background: theme.bgElevated,
              border: `1px solid ${theme.border}`,
              borderTop: `2px solid ${style.bg}`,
            }}>
              <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 8 }}>
                <span style={{
                  width: 24,
                  height: 24,
                  background: style.bg,
                  color: style.c,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: 12,
                  fontFamily: "'Playfair Display', Georgia, serif",
                  fontWeight: 700,
                }}>{e.rank}</span>
                <span style={{
                  fontFamily: "Georgia, serif",
                  fontSize: 14,
                  color: theme.ink,
                  fontWeight: 600,
                }}>{e.label}</span>
              </div>
              <div style={{ fontSize: 12, color: theme.inkDim, lineHeight: 1.5, marginBottom: 6 }}>
                {e.detail}
              </div>
              <div style={{ fontSize: 10, color: theme.inkMuted, letterSpacing: 1, textTransform: "uppercase" }}>
                {e.source}
              </div>
            </div>
          );
        })}
      </div>

      <div style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: 15, color: theme.inkDim, lineHeight: 1.7, maxWidth: 720 }}>
        <p style={{ marginTop: 0 }}>
          <strong style={{ color: theme.ink }}>A</strong> requires multiple primary sources confirming delivery at promised scale.{" "}
          <strong style={{ color: theme.ink }}>B</strong> requires primary-source confirmation plus documented gap.{" "}
          <strong style={{ color: theme.ink }}>C</strong> through <strong style={{ color: theme.ink }}>F</strong> require clear evidence of partial, symbolic, or reversed delivery.{" "}
          <strong style={{ color: theme.ink }}>NR</strong> is what Claude assigns when primary-source evidence cannot be retrieved — this is honest reporting, not a hidden grade.
        </p>
        <p style={{ color: theme.inkMuted, fontSize: 13, marginTop: 20, fontFamily: "Georgia, serif" }}>
          Batch 1 contains 20 flagship promises out of 505 in the 2021 manifesto. All grades are provisional pending
          systematic GO-level verification. This is a working public document intended to model what a
          full verified scorecard would look like, not a finished legal instrument.
        </p>
      </div>
    </section>
  );
}

// ============================================================================
// MAIN
// ============================================================================

export default function App() {
  const [view, setView] = useState("treemap");
  const [domainFilter, setDomainFilter] = useState(null);
  const [gradeFilter, setGradeFilter] = useState(null);
  const [repromiseFilter, setRepromiseFilter] = useState(null);
  const [selected, setSelected] = useState(null);

  const filtered = useMemo(() => {
    return PROMISES.filter(p =>
      (!domainFilter || p.domain === domainFilter) &&
      (!gradeFilter || p.grade === gradeFilter) &&
      (!repromiseFilter || p.repromiseStatus === repromiseFilter ||
        (repromiseFilter === "extended_delivered_claimed_as_new" && p.repromiseStatus === "extended_delivered_honest_continuation"))
    );
  }, [domainFilter, gradeFilter, repromiseFilter]);

  const stats = useMemo(() => {
    const total = filtered.length;
    const delivered = filtered.filter(p => p.grade === "A" || p.grade === "B").length;
    const broken = filtered.filter(p => p.grade === "F" || p.grade === "D").length;
    const dropped = filtered.filter(p => p.repromiseStatus === "quietly_dropped").length;
    const reUndelivered = filtered.filter(p => p.repromiseStatus === "repromised_undelivered").length;
    const totalCitations = filtered.reduce((s, p) => s + p.citations.length, 0);
    return { total, delivered, broken, dropped, reUndelivered, totalCitations };
  }, [filtered]);

  const domains = [...new Set(PROMISES.map(p => p.domain))].sort();

  return (
    <div style={{
      fontFamily: "'Inter', -apple-system, sans-serif",
      background: theme.bg,
      color: theme.ink,
      minHeight: "100vh",
      padding: 0,
      margin: 0,
    }}>
      <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;500;600;700&family=Cormorant+Garamond:wght@400;500;600&display=swap" rel="stylesheet" />

      <style>{`
        body { margin: 0; background: ${theme.bg}; }
        * { box-sizing: border-box; }
        button { font-family: inherit; }
      `}</style>

      {/* PROVISIONAL BANNER — non-dismissible, on every page load */}
      <div style={{
        background: theme.red,
        color: theme.ink,
        padding: "10px 48px",
        fontSize: 11,
        letterSpacing: 1.5,
        textAlign: "center",
        fontWeight: 500,
        borderBottom: `1px solid ${theme.redDeep}`,
      }}>
        <strong style={{ letterSpacing: 2, textTransform: "uppercase" }}>Provisional · v0.2 · Batch 1</strong>
        <span style={{ opacity: 0.85, marginLeft: 10 }}>
          20 of 505 flagship promises scored. Grades await systematic primary-source verification. Research preview, not a finished assessment.
        </span>
      </div>

      {/* HEADER — rising sun motif */}
      <header style={{
        borderBottom: `1px solid ${theme.border}`,
        padding: "40px 48px 40px",
        background: theme.bg,
        position: "relative",
        overflow: "hidden",
      }}>
        {/* Rising sun visual motif */}
        <div style={{
          position: "absolute",
          bottom: -180,
          right: -80,
          width: 400,
          height: 400,
          background: `radial-gradient(circle at 50% 0%, ${theme.accent} 0%, ${theme.red} 30%, transparent 55%)`,
          opacity: 0.18,
          borderRadius: "50%",
          pointerEvents: "none",
        }} />
        <div style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          height: 3,
          background: `linear-gradient(90deg, ${theme.red} 0%, ${theme.accent} 50%, ${theme.red} 100%)`,
        }} />

        <div style={{
          position: "absolute",
          top: 20,
          right: 48,
          fontSize: 10,
          color: theme.accent,
          letterSpacing: 3,
          textTransform: "uppercase",
          fontWeight: 600,
        }}>
          Tamil Nadu Promise Tracker
        </div>
        <div style={{ fontSize: 10, letterSpacing: 3, textTransform: "uppercase", color: theme.accent, marginBottom: 12, position: "relative" }}>
          Tamil Nadu · Legislative Assembly Term 2021-2026
        </div>
        <h1 style={{
          fontFamily: "'Playfair Display', Georgia, serif",
          fontSize: 52,
          fontWeight: 600,
          color: theme.ink,
          margin: 0,
          lineHeight: 1.05,
          letterSpacing: -0.5,
          position: "relative",
        }}>
          The DMK Promise Scorecard
        </h1>
        <div style={{
          fontFamily: "'Cormorant Garamond', Georgia, serif",
          fontSize: 22,
          color: theme.inkDim,
          marginTop: 10,
          fontStyle: "italic",
          fontWeight: 400,
          position: "relative",
        }}>
          What was promised in 2021. What was delivered. What reappears in 2026.
        </div>
      </header>

      <div style={{ padding: "28px 48px 48px", maxWidth: 1280, margin: "0 auto" }}>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(5, 1fr)", gap: 12, marginBottom: 28 }}>
          <Stat label="Scored" value={stats.total} sub={`${stats.totalCitations} sources cited`} />
          <Stat label="Delivered" value={stats.delivered} sub="graded A or B" accent={gradeColors.A.border} />
          <Stat label="Broken / Symbolic" value={stats.broken} sub="graded D or F" accent={gradeColors.F.border} />
          <Stat label="Re-promised" value={stats.reUndelivered} sub="softened in 2026" accent={repromiseColors.repromised_undelivered.c} />
          <Stat label="Quietly dropped" value={stats.dropped} sub="absent from 2026" accent={repromiseColors.quietly_dropped.c} />
        </div>

        <div style={{
          padding: "18px 20px",
          background: theme.bgPanel,
          border: `1px solid ${theme.border}`,
          marginBottom: 20,
          display: "flex",
          flexWrap: "wrap",
          gap: 20,
          alignItems: "center",
        }}>
          <FilterGroup
            label="View"
            options={[
              { value: "treemap", label: "Treemap" },
              { value: "heatmap", label: "Heatmap" },
              { value: "list", label: "List" },
            ]}
            value={view}
            onChange={setView}
          />
          <div style={{ width: 1, height: 30, background: theme.border }} />
          <FilterGroup
            label="Domain"
            options={[{ value: null, label: "All" }, ...domains.map(d => ({ value: d, label: d }))]}
            value={domainFilter}
            onChange={setDomainFilter}
          />
          <FilterGroup
            label="Grade"
            options={[
              { value: null, label: "All" },
              ...["A", "B", "C", "D", "F", "NR"].map(g => ({ value: g, label: g }))
            ]}
            value={gradeFilter}
            onChange={setGradeFilter}
          />
          <FilterGroup
            label="2026 status"
            options={[
              { value: null, label: "All" },
              { value: "scaled_up", label: "Scaled up" },
              { value: "repromised_undelivered", label: "Re-promised" },
              { value: "quietly_dropped", label: "Dropped" },
              { value: "extended_delivered_claimed_as_new", label: "Continued" },
              { value: "not_applicable", label: "One-time" },
            ]}
            value={repromiseFilter}
            onChange={setRepromiseFilter}
          />
        </div>

        {filtered.length === 0 && (
          <div style={{
            padding: 60,
            textAlign: "center",
            color: theme.inkMuted,
            background: theme.bgPanel,
            border: `1px solid ${theme.border}`,
            fontFamily: "'Cormorant Garamond', Georgia, serif",
            fontSize: 20,
            fontStyle: "italic"
          }}>
            No promises match the current filters.
          </div>
        )}

        {filtered.length > 0 && view === "treemap" && <TreemapView promises={filtered} onSelect={setSelected} />}
        {filtered.length > 0 && view === "heatmap" && <HeatmapView promises={filtered} onSelect={setSelected} />}
        {filtered.length > 0 && view === "list" && <ListView promises={filtered} onSelect={setSelected} />}

        <div style={{
          marginTop: 20,
          padding: "16px 20px",
          background: theme.bgPanel,
          border: `1px solid ${theme.border}`,
          fontSize: 11,
          color: theme.inkDim,
          display: "flex",
          flexWrap: "wrap",
          gap: 16,
          alignItems: "center",
        }}>
          <span style={{ letterSpacing: 2, textTransform: "uppercase", color: theme.inkMuted }}>Grades</span>
          {["A", "B", "C", "D", "F", "NR"].map(g => {
            const gc = gradeColors[g];
            return (
              <span key={g} style={{ display: "flex", alignItems: "center", gap: 6 }}>
                <span style={{ width: 10, height: 10, background: gc.bg, border: `1px solid ${gc.border}`, display: "inline-block" }} />
                <strong style={{ color: gc.label }}>{g}</strong>
                <span>{gc.name}</span>
              </span>
            );
          })}
        </div>

        <MethodologySection />

        <footer style={{
          marginTop: 36,
          paddingTop: 28,
          borderTop: `1px solid ${theme.border}`,
          display: "flex",
          flexDirection: "column",
          gap: 8,
          fontSize: 11,
          color: theme.inkMuted,
          letterSpacing: 1,
        }}>
          <div style={{ display: "flex", justifyContent: "space-between", flexWrap: "wrap", gap: 12 }}>
            <div>Tamil Nadu Promise Tracker · A personal civic project by Sriram · v0.2 Batch 1</div>
            <div>Sources: DMK 2021 & 2026 manifestos, TN Govt portals, Supreme Court & Assembly records</div>
          </div>
          <div style={{ fontSize: 10, color: theme.inkMuted, opacity: 0.7, lineHeight: 1.5 }}>
            Research and drafting assisted by Claude (Anthropic). Methodology, grades, and editorial choices are the author's. Not affiliated with any institution, political party, or organization.
          </div>
        </footer>
      </div>

      <DetailPanel promise={selected} onClose={() => setSelected(null)} />
    </div>
  );
}

function FilterGroup({ label, options, value, onChange }) {
  return (
    <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
      <span style={{
        fontSize: 10,
        letterSpacing: 2,
        textTransform: "uppercase",
        color: theme.inkMuted,
        marginRight: 4,
      }}>
        {label}
      </span>
      <div style={{ display: "flex", gap: 4, flexWrap: "wrap" }}>
        {options.map(opt => {
          const active = value === opt.value;
          return (
            <button
              key={String(opt.value)}
              onClick={() => onChange(opt.value)}
              style={{
                padding: "5px 10px",
                background: active ? theme.accent : "transparent",
                color: active ? theme.bg : theme.inkDim,
                border: `1px solid ${active ? theme.accent : theme.border}`,
                fontSize: 11,
                cursor: "pointer",
                fontWeight: active ? 600 : 400,
                letterSpacing: 0.5,
                transition: "all 120ms",
              }}
            >
              {opt.label}
            </button>
          );
        })}
      </div>
    </div>
  );
}
