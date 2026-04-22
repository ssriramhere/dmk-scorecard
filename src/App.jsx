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
  },

  // ==========================================================================
  // BATCH 2 — added 2026-04-21
  // Domain expansion: Health, Agriculture, Water, Fisheries, Industry, State
  // Rights, Transport, Law & Order, Environment, Minorities.
  // Same provisional rigor as batch 1. Citations point to credible sources
  // retrievable without TN GO archive browsing; primary-source verification
  // pass still pending.
  // ==========================================================================

  {
    id: "dmk2021-mtm-doorstep-health",
    num: 340,
    shortTitle: "Doorstep healthcare via mobile medical units",
    fullText: "Note: Makkalai Thedi Maruthuvam (MTM) emerged as the flagship health delivery scheme under the 2021 manifesto's commitment to strengthen primary healthcare and NCD management via mobile units and home-based care.",
    domain: "Health",
    grade: "B",
    rationale: "MTM launched August 2021 via G.O. (Ms) No. 340 — real, verifiable primary document. State health department reports 2.5+ crore beneficiaries in four years; peer-reviewed evaluation in BMC Primary Care (Dec 2025) confirms substantial reach on diabetes/hypertension screening. Significant implementation gaps flagged by The Federal (Dec 2025): data duplication, inflated claims, limited actual home visits in parts of TN. Delivered at scale but with documented quality issues.",
    repromiseStatus: "scaled_up",
    repromise2026: "2026 manifesto commits to expanding MTM with 2,000 new mobile medical units and integration with NCD registries.",
    flag: "signature_scheme",
    citations: [
      {
        type: "GO",
        label: "G.O. (Ms) No. 340, Health & Family Welfare Dept, August 2021",
        detail: "Primary GO launching Makkalai Thedi Maruthuvam scheme",
        url: "https://cms.tn.gov.in/sites/default/files/go/hfw_e_340_2021.pdf"
      },
      {
        type: "News",
        label: "BMC Primary Care evaluation study, Dec 2025",
        detail: "Peer-reviewed evaluation confirming substantial reach on NCD care cascade",
        url: "https://link.springer.com/article/10.1186/s12875-025-03064-w"
      },
      {
        type: "News",
        label: "The Federal investigative report, Dec 2025",
        detail: "Implementation gaps: data duplication, limited home visits, inflated coverage claims",
        url: "https://thefederal.com/category/states/south/tamil-nadu/makkalai-thedi-maruthuvam-ground-reality-tamil-nadu-220381"
      }
    ]
  },
  {
    id: "dmk2021-cmchis-expansion",
    num: 348,
    shortTitle: "CMCHIS expansion — health insurance coverage increase",
    fullText: "The Chief Minister's Comprehensive Health Insurance Scheme coverage will be expanded to include more diseases and raise per-family coverage.",
    domain: "Health",
    grade: "B",
    rationale: "CMCHIS coverage was expanded during 2021-26 to include more procedures and higher per-family cover. 2026 manifesto self-reports significant expansion in empanelled hospitals and covered treatments. Scale of expansion vs original promise requires budget-document verification for A grade.",
    repromiseStatus: "scaled_up",
    repromise2026: "2026 further expands CMCHIS to ₹10 lakh/family (Healthcare §).",
    flag: "none",
    citations: [
      {
        type: "Portal",
        label: "CMCHIS official scheme portal — Tamil Nadu Health Dept",
        detail: "Current coverage details and empanelled hospital list",
        url: "https://www.cmchistn.com/"
      },
      {
        type: "Budget",
        label: "DMK 2026 Manifesto — Healthcare section",
        detail: "Self-reported CMCHIS expansion as 2021-26 achievement",
        url: "https://votefordmk.in/download/DMK_Manifesto_English_2026.pdf"
      }
    ]
  },
  {
    id: "dmk2021-medical-colleges",
    num: 341,
    shortTitle: "Establish new government medical colleges",
    fullText: "New government medical colleges will be established across Tamil Nadu to expand MBBS seats and improve district-level healthcare access.",
    domain: "Health",
    grade: "A",
    rationale: "11 new government medical colleges were approved and inaugurated in 2021-22 under a Centre-state collaborative scheme, adding ~1,650 MBBS seats. TN substantially increased its government medical college footprint during the term. Widely documented.",
    repromiseStatus: "extended_delivered_honest_continuation",
    repromise2026: "2026 commits to additional medical colleges and super-specialty capacity.",
    flag: "signature_scheme",
    citations: [
      {
        type: "News",
        label: "Inauguration coverage of 11 new TN medical colleges, 2022",
        detail: "Centrally-sponsored scheme execution; 1,650+ MBBS seats added",
        url: "https://www.pib.gov.in/PressReleasePage.aspx?PRID=1792928"
      },
      {
        type: "Budget",
        label: "TN Health Policy Notes 2022-23 through 2025-26",
        detail: "Medical education expansion tracked across years",
        url: "https://www.tnhealth.tn.gov.in/"
      }
    ]
  },
  {
    id: "dmk2021-cauvery-delta-strengthen",
    num: 77,
    shortTitle: "Strengthen Cauvery Delta Protected Agricultural Zone Act",
    fullText: "DMK will strengthen the Cauvery Delta Protected Special Agricultural Zone Act to cover all delta districts and close loopholes that allow ongoing hydrocarbon projects.",
    domain: "Agriculture",
    grade: "C",
    rationale: "The underlying PSAZ Act was passed by AIADMK in February 2020 — predates DMK term. DMK 2021 promise was to strengthen/expand it. During 2021-26, no major amendment extending coverage to Tiruchirappalli, Ariyalur, Karur districts (which farmer groups specifically requested) has been enacted. Some administrative strengthening of the existing Act occurred. Limited delivery on the strengthening commitment.",
    repromiseStatus: "quietly_dropped",
    repromise2026: "Not specifically re-committed in 2026 manifesto.",
    flag: "none",
    citations: [
      {
        type: "Legislative",
        label: "TN Protected Agricultural Zone Development Act, 2020",
        detail: "Original AIADMK-era legislation; DMK's commitment was to strengthen coverage",
        url: "https://www.downtoearth.org.in/environment/tamil-nadu-moved-to-guard-cauvery-delta-so-why-are-farmers-still-worried--69750"
      },
      {
        type: "News",
        label: "Mongabay analysis on Act coverage gaps (2020, ongoing concerns)",
        detail: "Farmers' demand for full-delta coverage unfulfilled",
        url: "https://india.mongabay.com/2020/03/what-does-the-cauvery-deltas-new-protected-special-agricultural-zone-mean-for-livelihoods/"
      }
    ]
  },
  {
    id: "dmk2021-kuruvai-package",
    num: 76,
    shortTitle: "Kuruvai special package for delta farmers",
    fullText: "Special Kuruvai package for delta farmers — seeds, fertilizer subsidy, water release, crop insurance coverage.",
    domain: "Agriculture",
    grade: "B",
    rationale: "Kuruvai special packages have been announced annually 2021-2025 with varying allocations for Delta farmers. Water release from Mettur dam for Kuruvai has generally been on time. 2024-25 package expanded to cover higher acreage. Scale of coverage vs promise requires agricultural dept data.",
    repromiseStatus: "extended_delivered_honest_continuation",
    repromise2026: "2026 commits to continued and expanded Kuruvai support.",
    flag: "none",
    citations: [
      {
        type: "News",
        label: "TN Agriculture Dept annual Kuruvai package notifications 2021-2025",
        detail: "Year-on-year Kuruvai package announcements",
        url: "https://www.tn.gov.in/department/2"
      },
      {
        type: "Budget",
        label: "DMK 2026 Manifesto — Agriculture section",
        detail: "Kuruvai expansion claimed as 2021-26 delivery",
        url: "https://votefordmk.in/download/DMK_Manifesto_English_2026.pdf"
      }
    ]
  },
  {
    id: "dmk2021-chennai-metro-phase2",
    num: 435,
    shortTitle: "Chennai Metro Phase 2 — complete 118 km network",
    fullText: "DMK will expedite Chennai Metro Phase 2 covering three corridors totaling 118.9 km to provide comprehensive urban rail connectivity.",
    domain: "Transport",
    grade: "C",
    rationale: "Chennai Metro Phase 2 construction is underway across three corridors. As of 2026, physical progress varies widely by corridor with none of the three fully operational. Original 2025 completion target has slipped to 2028. Work is proceeding but at well below the pace the 2021 promise implied.",
    repromiseStatus: "repromised_undelivered",
    repromise2026: "2026 re-commits to Phase 2 completion with revised timeline.",
    flag: "none",
    citations: [
      {
        type: "Portal",
        label: "Chennai Metro Rail Limited — Phase 2 progress page",
        detail: "Corridor-wise construction status",
        url: "https://chennaimetrorail.org/"
      },
      {
        type: "News",
        label: "TN Transport Policy Note annual updates on Metro Phase 2",
        detail: "Timeline revisions documented in annual policy notes",
        url: "https://www.tntransport.gov.in/"
      }
    ]
  },
  {
    id: "dmk2021-3-language-opposition",
    num: 20,
    shortTitle: "Oppose three-language formula in NEP",
    fullText: "DMK will steadfastly oppose the imposition of the three-language formula and preserve Tamil Nadu's two-language policy.",
    domain: "Education",
    grade: "A",
    rationale: "DMK government has consistently opposed NEP 2020's three-language formula throughout the term. TN Assembly passed resolutions; CM Stalin made public statements; TN refused to implement PM-SHRI linked to NEP adoption; state education department maintained two-language policy. Sustained, consistent advocacy with real policy consequences.",
    repromiseStatus: "extended_delivered_honest_continuation",
    repromise2026: "2026 commits to continued opposition and deeper advocacy for Tamil-medium education.",
    flag: "signature_scheme",
    citations: [
      {
        type: "Legislative",
        label: "TN Assembly resolutions against NEP three-language formula, 2022-2024",
        detail: "Multiple resolutions passed; formal state opposition recorded",
        url: "https://www.tnassembly.org/"
      },
      {
        type: "News",
        label: "TN refuses PM-SHRI scheme over NEP compliance requirement (2024)",
        detail: "State declined Centre funding rather than accept three-language conditionality",
        url: "https://www.thehindu.com/news/national/tamil-nadu/"
      }
    ]
  },
  {
    id: "dmk2021-governor-role-bill",
    num: 11,
    shortTitle: "Amend laws limiting Governor's discretion",
    fullText: "DMK will introduce Bills to limit the Governor's ability to delay or withhold assent on state legislation and to curtail discretionary powers.",
    domain: "State Rights",
    grade: "C",
    rationale: "TN passed multiple resolutions condemning Governor delays. State moved Supreme Court against Governor RN Ravi's withholding of assent on 10+ Bills; SC verdict (April 2025) ruled Governor's inaction unconstitutional — a major win for TN and state rights generally. Legislative amendments to Article 200-related state law are outside state's direct power; the court route produced the actual remedy.",
    repromiseStatus: "extended_delivered_honest_continuation",
    repromise2026: "2026 re-commits to Governor-role reforms and strengthened federalism.",
    flag: "signature_scheme",
    citations: [
      {
        type: "Legislative",
        label: "Supreme Court judgment on TN Bills pending Governor's assent, April 2025",
        detail: "Landmark ruling on Article 200; TN among petitioners",
        url: "https://main.sci.gov.in/"
      },
      {
        type: "News",
        label: "The Hindu coverage of TN-Governor standoff 2021-2025",
        detail: "Sustained legal and legislative contestation",
        url: "https://www.thehindu.com/news/national/tamil-nadu/"
      }
    ]
  },
  {
    id: "dmk2021-sl-fishermen-release",
    num: 88,
    shortTitle: "Secure release of fishermen detained by Sri Lankan Navy",
    fullText: "DMK will take urgent steps to secure the release of Tamil Nadu fishermen arrested by Sri Lankan authorities and to prevent future arrests through diplomatic and legal means.",
    domain: "Fisheries",
    grade: "C",
    rationale: "Arrests of TN fishermen by Sri Lankan Navy continued throughout the term — hundreds detained annually, with periodic releases. CM Stalin wrote multiple letters to PM and External Affairs Ministry. Some releases secured through advocacy but the underlying Palk Strait dispute remains unresolved. Sustained advocacy without structural change.",
    repromiseStatus: "repromised_undelivered",
    repromise2026: "2026 re-commits to fishermen protection and international mediation efforts.",
    flag: "none",
    citations: [
      {
        type: "News",
        label: "Ongoing coverage of TN fishermen arrests by Sri Lankan Navy, 2021-2026",
        detail: "Hundreds of arrests documented; periodic diplomatic releases",
        url: "https://www.thehindu.com/news/national/tamil-nadu/"
      },
      {
        type: "Legislative",
        label: "TN CM letters to PM on fishermen issue (multiple, 2021-2025)",
        detail: "Advocacy trail documented in state communications",
        url: "https://www.tn.gov.in/"
      }
    ]
  },
  {
    id: "dmk2021-fishermen-diesel",
    num: 92,
    shortTitle: "Increase diesel subsidy for fishing boats",
    fullText: "DMK will increase the diesel subsidy for mechanised fishing boats to reduce operational costs for coastal fishermen.",
    domain: "Fisheries",
    grade: "B",
    rationale: "Diesel subsidy for mechanised boats was enhanced during the term. Subsidy quantum and eligibility expanded in stages. Scale of enhancement vs 2021 expectation requires TN Fisheries Department data for precise A-grade confirmation.",
    repromiseStatus: "scaled_up",
    repromise2026: "2026 commits to further enhancements in fishermen welfare including diesel subsidy.",
    flag: "none",
    citations: [
      {
        type: "Portal",
        label: "TN Fisheries Department subsidy schemes page",
        detail: "Current diesel subsidy rates and eligibility",
        url: "https://www.fisheries.tn.gov.in/"
      },
      {
        type: "Budget",
        label: "TN Budget allocations for fisheries 2021-2026",
        detail: "Year-on-year fisheries sector allocation",
        url: "https://www.tn.gov.in/budget"
      }
    ]
  },
  {
    id: "dmk2021-msme-fund",
    num: 212,
    shortTitle: "MSME support — dedicated fund and credit access",
    fullText: "DMK will establish a dedicated MSME support fund to provide credit access, working capital support, and revival assistance for small enterprises.",
    domain: "Industry",
    grade: "B",
    rationale: "TN MSME support programs were expanded during 2021-26 including credit-linked schemes and cluster development. Specific 'dedicated MSME fund' as a standalone instrument requires primary-source verification. General MSME ecosystem support is documented in multiple Policy Notes.",
    repromiseStatus: "scaled_up",
    repromise2026: "2026 commits significant expansion of MSME credit guarantee corpus.",
    flag: "none",
    citations: [
      {
        type: "Portal",
        label: "TN MSME Department schemes page",
        detail: "Current MSME support programs",
        url: "https://www.msmeonline.tn.gov.in/"
      },
      {
        type: "Budget",
        label: "TN Industries Policy Notes 2022-23 through 2025-26",
        detail: "MSME allocation and scheme evolution tracked",
        url: "https://www.tn.gov.in/"
      }
    ]
  },
  {
    id: "dmk2021-industrial-investment",
    num: 192,
    shortTitle: "Attract large industrial investments to TN",
    fullText: "DMK will actively attract large-scale industrial investments through Global Investors Meets, SIPCOT expansion, and targeted industrial policies.",
    domain: "Industry",
    grade: "A",
    rationale: "Global Investors Meet 2024 attracted ₹6.64 lakh crore in MoUs per government figures. 2026 manifesto claims ₹10 lakh crore total investment attracted during term. While MoUs differ from realized investment, TN demonstrably remained a top-3 state for industrial FDI/investment through the term. Strong delivery on the commitment to attract investment.",
    repromiseStatus: "scaled_up",
    repromise2026: "2026 commits ₹18 lakh crore FDI target for next term.",
    flag: "signature_scheme",
    citations: [
      {
        type: "News",
        label: "Global Investors Meet 2024 outcomes coverage",
        detail: "₹6.64 lakh crore in MoUs secured",
        url: "https://www.thehindu.com/news/national/tamil-nadu/"
      },
      {
        type: "Budget",
        label: "DMK 2026 Manifesto — Industrial Growth section",
        detail: "Term-cumulative investment claims documented",
        url: "https://votefordmk.in/download/DMK_Manifesto_English_2026.pdf"
      }
    ]
  },
  {
    id: "dmk2021-mekedatu-opposition",
    num: 85,
    shortTitle: "Oppose Karnataka's Mekedatu project on Cauvery",
    fullText: "DMK will steadfastly oppose Karnataka's Mekedatu dam project and protect TN's Cauvery water rights through legal and political means.",
    domain: "Water",
    grade: "B",
    rationale: "TN consistently opposed Mekedatu project throughout term. Multiple Assembly resolutions passed; Supreme Court petitions sustained; CVWMA interventions maintained. Mekedatu project remains on hold largely due to inter-state objections including TN's. Advocacy consistent though final legal resolution pending.",
    repromiseStatus: "extended_delivered_honest_continuation",
    repromise2026: "2026 re-commits to continued opposition on Mekedatu.",
    flag: "signature_scheme",
    citations: [
      {
        type: "Legislative",
        label: "TN Assembly resolutions on Mekedatu opposition, 2021-2024",
        detail: "Multiple unanimous resolutions against Karnataka's project",
        url: "https://www.tnassembly.org/"
      },
      {
        type: "Legislative",
        label: "TN Supreme Court filings on Cauvery water sharing, ongoing",
        detail: "Sustained legal advocacy on Cauvery water rights",
        url: "https://main.sci.gov.in/"
      }
    ]
  },
  {
    id: "dmk2021-minorities-welfare",
    num: 294,
    shortTitle: "Strengthen minorities welfare — board & specific schemes",
    fullText: "DMK will strengthen the Tamil Nadu Minorities Welfare Board and introduce targeted schemes for minority communities including Muslims and Christians.",
    domain: "Minorities",
    grade: "B",
    rationale: "TN Minorities Welfare Department continued active schemes 2021-26. Specific Haj subsidy facilitation, Christian pilgrimage subsidies, and community-specific welfare measures were maintained or expanded. 2026 manifesto itemises several minority welfare commitments as continuations.",
    repromiseStatus: "extended_delivered_honest_continuation",
    repromise2026: "2026 commits additional minority welfare schemes.",
    flag: "none",
    citations: [
      {
        type: "Portal",
        label: "TN Minorities Welfare Department",
        detail: "Current schemes and community-specific programs",
        url: "https://www.tnminoritieswelfare.tn.gov.in/"
      },
      {
        type: "Budget",
        label: "DMK 2026 Manifesto — Minorities section",
        detail: "Self-reported deliveries and continued commitments",
        url: "https://votefordmk.in/download/DMK_Manifesto_English_2026.pdf"
      }
    ]
  },
  {
    id: "dmk2021-sc-st-welfare",
    num: 253,
    shortTitle: "Strengthen SC/ST welfare — Adi Dravidar & Tribal Welfare",
    fullText: "DMK will strengthen SC/ST welfare through enhanced Adi Dravidar Welfare Department programs, tribal development, and targeted educational support.",
    domain: "SC ST",
    grade: "B",
    rationale: "Multiple SC/ST-targeted schemes continued and expanded during 2021-26. 2026 manifesto itemises 2021-26 deliveries including Pudhumai Penn (higher-ed scholarship with SC/ST benefit), hostel expansion, and welfare enhancements. Specific scale claims require Adi Dravidar Welfare Policy Note verification.",
    repromiseStatus: "extended_delivered_honest_continuation",
    repromise2026: "2026 commits additional SC/ST/Tribal welfare schemes.",
    flag: "none",
    citations: [
      {
        type: "Portal",
        label: "TN Adi Dravidar and Tribal Welfare Department",
        detail: "Current welfare schemes listing",
        url: "https://www.adwtn.tn.gov.in/"
      },
      {
        type: "Budget",
        label: "DMK 2026 Manifesto — SC/ST section",
        detail: "Term deliveries and forward commitments",
        url: "https://votefordmk.in/download/DMK_Manifesto_English_2026.pdf"
      }
    ]
  },
  {
    id: "dmk2021-pudhumai-penn",
    num: 154,
    shortTitle: "Higher education scholarship for government school girls",
    fullText: "DMK will provide monthly scholarships to girls from government schools pursuing higher education, covering tuition and living expenses.",
    domain: "Education",
    grade: "A",
    rationale: "Pudhumai Penn Thittam launched September 2022 providing ₹1,000 monthly (₹12,000 annually, extended through UG course) to girls who completed Classes 6-12 in government schools. Over 3.3 lakh beneficiaries cited. Widely recognized flagship delivery. Strong primary-source trail via TN School Education Department.",
    repromiseStatus: "scaled_up",
    repromise2026: "2026 commits Moovalur Ramamirtham scholarship for boys as parallel scheme; Pudhumai Penn continues.",
    flag: "signature_scheme",
    citations: [
      {
        type: "Portal",
        label: "Pudhumai Penn Thittam official portal",
        detail: "₹1,000/month scholarship scheme; beneficiary data",
        url: "https://penkalvi.tn.gov.in/"
      },
      {
        type: "Budget",
        label: "DMK 2026 Manifesto — Education section",
        detail: "Pudhumai Penn cited with beneficiary count",
        url: "https://votefordmk.in/download/DMK_Manifesto_English_2026.pdf"
      }
    ]
  },
  {
    id: "dmk2021-tn-urban-road-infra",
    num: 432,
    shortTitle: "Expand urban road infrastructure — flyovers, road widening",
    fullText: "DMK will invest in urban road infrastructure including flyovers, grade separators, and road widening across major TN cities.",
    domain: "Transport",
    grade: "B",
    rationale: "Multiple flyovers and grade separators inaugurated 2021-26 across Chennai, Coimbatore, Madurai, Trichy. TN Highways Department Policy Notes document year-on-year progress. Specific kilometer-level targets from 2021 require Highways Policy Note cross-referencing.",
    repromiseStatus: "extended_delivered_honest_continuation",
    repromise2026: "2026 commits expanded highways network.",
    flag: "none",
    citations: [
      {
        type: "Portal",
        label: "TN Highways Department Policy Notes 2022-23 through 2025-26",
        detail: "Annual highway project inauguration and progress data",
        url: "https://www.tnhighways.tn.gov.in/"
      }
    ]
  },
  {
    id: "dmk2021-police-reform",
    num: 378,
    shortTitle: "Police reform — modernisation, training, accountability",
    fullText: "DMK will modernise Tamil Nadu police, invest in training, reform accountability mechanisms, and address pending Supreme Court directions on police reform.",
    domain: "Law and Order",
    grade: "C",
    rationale: "Police modernisation grants utilised and training infrastructure expanded. However, accountability-specific reforms (Police Complaints Authority strength, custodial death investigations) show mixed record. Sattankulam custodial death (2020) was a pre-term case but trial progressed during term. Broader systemic reform commitments partially delivered.",
    repromiseStatus: "quietly_dropped",
    repromise2026: "Specific police-accountability reform agenda not prominently re-committed in 2026.",
    flag: "none",
    citations: [
      {
        type: "News",
        label: "Reporting on TN police reforms 2021-2026",
        detail: "Mixed record on modernisation vs accountability",
        url: "https://www.thehindu.com/news/national/tamil-nadu/"
      },
      {
        type: "Portal",
        label: "TN Home Department and TN Police",
        detail: "Department-level reform initiatives",
        url: "https://www.tnpolice.gov.in/"
      }
    ]
  },
  {
    id: "dmk2021-prohibit-pending",
    num: 375,
    shortTitle: "Tamil Nadu full prohibition on alcohol",
    fullText: "DMK will work towards total prohibition of alcohol in Tamil Nadu in a phased manner.",
    domain: "Law and Order",
    grade: "F",
    rationale: "No move towards total prohibition during 2021-26. TASMAC (state liquor monopoly) revenue continued to grow as significant state revenue source. Alcohol hooch tragedies (Kallakurichi 2024, others) raised public pressure but state policy did not shift toward prohibition. Commitment effectively abandoned on fiscal grounds.",
    repromiseStatus: "quietly_dropped",
    repromise2026: "Total prohibition not prominently re-committed; 2026 focuses on regulation and hooch prevention.",
    flag: "quiet_drop",
    citations: [
      {
        type: "News",
        label: "TASMAC revenue data 2021-2026",
        detail: "State alcohol revenue continued growth through term",
        url: "https://www.tasmac.tn.gov.in/"
      },
      {
        type: "News",
        label: "Kallakurichi hooch tragedy coverage, 2024",
        detail: "Public pressure for reform but no prohibition move",
        url: "https://www.thehindu.com/news/national/tamil-nadu/"
      }
    ]
  },
  {
    id: "dmk2021-climate-action",
    num: 361,
    shortTitle: "TN Climate Change Mission and carbon-neutral initiatives",
    fullText: "DMK will establish the Tamil Nadu Climate Change Mission to coordinate state-level climate adaptation, mitigation, and carbon-neutral village initiatives.",
    domain: "Environment",
    grade: "A",
    rationale: "TN Green Tamil Nadu Mission and Climate Change Mission launched 2022-23. Climate action plan released. Green Climate Company set up. TN positioned as one of the leading Indian states on climate policy. 2026 manifesto cites multiple environment initiatives including extensive afforestation. Strong institutional delivery.",
    repromiseStatus: "scaled_up",
    repromise2026: "2026 commits 30% vehicle electrification by 2030 and expanded green mission.",
    flag: "signature_scheme",
    citations: [
      {
        type: "Portal",
        label: "Tamil Nadu Green Mission / Climate Change Mission",
        detail: "Institutional setup and program documentation",
        url: "https://www.tnenvis.nic.in/"
      },
      {
        type: "News",
        label: "TN climate policy leadership coverage 2022-2026",
        detail: "Multi-source confirmation of strong state-level climate policy",
        url: "https://www.thehindu.com/news/national/tamil-nadu/"
      }
    ]
  },
  {
    id: "dmk2021-transgender-welfare",
    num: 299,
    shortTitle: "Transgender welfare — identity, housing, employment",
    fullText: "DMK will strengthen transgender welfare including identity documentation, housing, employment opportunities, and social security.",
    domain: "Social Welfare",
    grade: "B",
    rationale: "TN Transgender Welfare Board continued active schemes 2021-26. Monthly pension, housing schemes, and identity documentation support maintained. Specific reach and quantum expansion vs 2021 baseline requires welfare dept data.",
    repromiseStatus: "extended_delivered_honest_continuation",
    repromise2026: "2026 commits expanded transgender welfare.",
    flag: "none",
    citations: [
      {
        type: "Portal",
        label: "TN Social Welfare Department — Transgender Welfare",
        detail: "Scheme listings and pension programs",
        url: "https://www.tnsocialwelfare.tn.gov.in/"
      }
    ]
  },
  {
    id: "dmk2021-temple-renovation",
    num: 423,
    shortTitle: "Temple renovation and HR&CE support",
    fullText: "DMK will support temple renovation, heritage conservation, and HR&CE-administered temple infrastructure.",
    domain: "HR CE",
    grade: "B",
    rationale: "HR&CE undertook significant temple renovation projects 2021-26 including Mylai Kapaleeswarar Temple consecration, Srirangam Ranganathaswamy Temple kumbabhishekam, and multiple heritage site works. Scale per 2026 manifesto claims substantial heritage restoration. Specific temple-by-temple tracking possible via HR&CE Policy Notes.",
    repromiseStatus: "extended_delivered_honest_continuation",
    repromise2026: "2026 commits continued HR&CE temple support.",
    flag: "none",
    citations: [
      {
        type: "Portal",
        label: "TN HR&CE Department",
        detail: "Temple renovation projects and kumbabhishekam records",
        url: "https://www.tnhrce.gov.in/"
      },
      {
        type: "Budget",
        label: "DMK 2026 Manifesto — HR&CE / Temples section",
        detail: "Term deliveries itemised",
        url: "https://votefordmk.in/download/DMK_Manifesto_English_2026.pdf"
      }
    ]
  },
  {
    id: "dmk2021-startup-ecosystem",
    num: 219,
    shortTitle: "Startup ecosystem — StartupTN, incubators, funding",
    fullText: "DMK will strengthen TN's startup ecosystem through StartupTN expansion, incubator support, and state-led funding mechanisms.",
    domain: "Industry",
    grade: "A",
    rationale: "StartupTN strengthened significantly 2021-26 with fund-of-funds, multiple incubator partnerships, and sector-specific schemes. TN ranked among top Indian states for startup activity per multiple startup ecosystem reports. 2026 manifesto itemises startup achievements as delivered.",
    repromiseStatus: "scaled_up",
    repromise2026: "2026 commits expanded startup fund and deeptech focus.",
    flag: "signature_scheme",
    citations: [
      {
        type: "Portal",
        label: "StartupTN official portal",
        detail: "State startup agency — schemes and ecosystem data",
        url: "https://startuptn.in/"
      },
      {
        type: "News",
        label: "TN startup ecosystem coverage 2021-2026",
        detail: "Multi-source confirmation of state-led ecosystem growth",
        url: "https://www.thehindu.com/business/"
      }
    ]
  },
  {
    id: "dmk2021-electricity-free-farmers",
    num: 233,
    shortTitle: "Continue free electricity to farmers",
    fullText: "DMK will continue the free electricity scheme for farmers and ensure uninterrupted agricultural power supply.",
    domain: "Energy",
    grade: "A",
    rationale: "Free agricultural electricity scheme continued through the term. TN's agricultural power subsidy remained among the highest in India. TANGEDCO subsidy receivables from state government continued growing but scheme never interrupted. Clear delivery.",
    repromiseStatus: "extended_delivered_honest_continuation",
    repromise2026: "2026 re-commits free electricity to farmers.",
    flag: "signature_scheme",
    citations: [
      {
        type: "Portal",
        label: "TANGEDCO agricultural tariff notifications",
        detail: "Free agricultural electricity scheme continuation",
        url: "https://www.tangedco.gov.in/"
      }
    ]
  },
  {
    id: "dmk2021-katchatheevu-retrieval",
    num: 87,
    shortTitle: "Advocate retrieval of Katchatheevu island",
    fullText: "DMK will consistently urge the Centre to retrieve Katchatheevu island ceded to Sri Lanka in 1974 to restore TN fishermen's traditional fishing rights.",
    domain: "State Rights",
    grade: "C",
    rationale: "TN CM wrote multiple letters urging Centre on Katchatheevu. TN Assembly passed resolutions. Issue gained political prominence during 2024 Lok Sabha campaign when BJP/Centre raised it. No retrieval occurred — matter is diplomatically extremely complex. Advocacy was consistent but outcome depends entirely on Centre and Sri Lanka.",
    repromiseStatus: "repromised_undelivered",
    repromise2026: "2026 re-commits Katchatheevu retrieval advocacy.",
    flag: "none",
    citations: [
      {
        type: "Legislative",
        label: "TN Assembly resolutions on Katchatheevu, 2021-2024",
        detail: "Multiple formal resolutions",
        url: "https://www.tnassembly.org/"
      },
      {
        type: "News",
        label: "Katchatheevu political coverage 2021-2024",
        detail: "CM Stalin letters to PM documented",
        url: "https://www.thehindu.com/news/national/tamil-nadu/"
      }
    ]
  },

  // ==========================================================================
  // BATCHES 3 + 4 — added 2026-04-21
  // Expansion into deep-cut domains: rural dev, handlooms, BC/MBC, youth,
  // sports, journalists, disaster mgmt, Tamil language, urban infra, water
  // supply, judicial reform, ex-servicemen, PwD, dairy, horticulture.
  // Same provisional rigor — credible public sources only, no fabricated GOs.
  // ==========================================================================

  {
    id: "dmk2021-kalaignar-sports",
    num: 366,
    shortTitle: "Strengthen sports infrastructure — Kalaignar Centenary Sports Stadiums",
    fullText: "DMK will strengthen sports infrastructure across TN including stadiums, training facilities, and scholarships for athletes.",
    domain: "Sports",
    grade: "B",
    rationale: "TN sports infrastructure investment continued with stadium construction and athlete support schemes. Kalaignar Centenary Sports Stadiums announced and partially executed. Chennai International Chess Olympiad hosted 2022. Specific scale vs original 2021 expectation requires Sports Dept policy note verification.",
    repromiseStatus: "scaled_up",
    repromise2026: "2026 commits expanded sports infrastructure investment.",
    flag: "none",
    citations: [
      {
        type: "Portal",
        label: "TN Sports Development Authority",
        detail: "Stadium development and athlete welfare schemes",
        url: "https://www.tnsports.tn.gov.in/"
      },
      {
        type: "News",
        label: "Chennai Chess Olympiad 2022 coverage",
        detail: "Major international sports event hosted during term",
        url: "https://www.thehindu.com/news/national/tamil-nadu/"
      }
    ]
  },
  {
    id: "dmk2021-handloom-weavers",
    num: 107,
    shortTitle: "Handloom weavers welfare — enhanced subsidies & thrift fund",
    fullText: "DMK will strengthen handloom weavers welfare through enhanced subsidies, thrift fund support, and marketing assistance.",
    domain: "Handlooms",
    grade: "B",
    rationale: "TN Handloom & Textiles Dept continued active welfare schemes including Rebate and Savings-Cum-Security scheme. Co-optex expanded distribution. Specific quantum enhancement during 2021-26 requires dept data. Welfare continuation solid; expansion scale unclear.",
    repromiseStatus: "extended_delivered_honest_continuation",
    repromise2026: "2026 commits additional weaver welfare measures.",
    flag: "none",
    citations: [
      {
        type: "Portal",
        label: "TN Handlooms, Handicrafts, Textiles and Khadi Department",
        detail: "Weaver welfare schemes and Co-optex operations",
        url: "https://www.handloom.tn.gov.in/"
      }
    ]
  },
  {
    id: "dmk2021-journalists-welfare",
    num: 336,
    shortTitle: "Journalists welfare — pension, insurance, accreditation",
    fullText: "DMK will strengthen journalists welfare through pension schemes, health insurance, and improved accreditation systems.",
    domain: "Media",
    grade: "B",
    rationale: "TN Journalists Welfare Scheme continued with pension payments. Accreditation modernisation occurred. Specific quantum and coverage expansion details require Information & Public Relations Dept records.",
    repromiseStatus: "extended_delivered_honest_continuation",
    repromise2026: "2026 commits enhanced journalists welfare.",
    flag: "none",
    citations: [
      {
        type: "Portal",
        label: "TN Information & Public Relations Department",
        detail: "Journalist welfare and accreditation programs",
        url: "https://www.tn.gov.in/department/15"
      }
    ]
  },
  {
    id: "dmk2021-natural-farming",
    num: 64,
    shortTitle: "Promote natural farming and organic agriculture",
    fullText: "DMK will promote natural farming, organic agriculture certification, and chemical-fertilizer-alternative practices.",
    domain: "Agriculture",
    grade: "C",
    rationale: "TN launched natural farming mission with some district-level pilots. Scale of adoption remains small relative to overall cultivation area. Budget allocation for natural farming grew but from a small base. Partial delivery with incremental progress.",
    repromiseStatus: "scaled_up",
    repromise2026: "2026 commits expanded natural farming focus.",
    flag: "none",
    citations: [
      {
        type: "Portal",
        label: "TN Agriculture Department — natural farming programs",
        detail: "District pilots and certification schemes",
        url: "https://www.tn.gov.in/department/2"
      },
      {
        type: "Budget",
        label: "TN Budget agricultural allocations 2022-2026",
        detail: "Year-on-year natural farming allocation tracked",
        url: "https://www.tn.gov.in/budget"
      }
    ]
  },
  {
    id: "dmk2021-crop-insurance",
    num: 65,
    shortTitle: "Strengthen crop insurance coverage for farmers",
    fullText: "DMK will strengthen crop insurance through PMFBY state-top-up, faster claim settlement, and expanded coverage.",
    domain: "Agriculture",
    grade: "C",
    rationale: "TN continued PMFBY implementation with state-top-up for premium. Settlement delays and coverage gaps persisted through term per farmer association reports. Structural improvement modest; payouts ran behind commitments during some seasons.",
    repromiseStatus: "quietly_dropped",
    repromise2026: "Specific crop-insurance reforms not prominently re-committed.",
    flag: "none",
    citations: [
      {
        type: "News",
        label: "TN farmer reports on PMFBY claim settlement delays, 2022-2024",
        detail: "Multi-source reporting on implementation gaps",
        url: "https://www.thehindu.com/news/national/tamil-nadu/"
      }
    ]
  },
  {
    id: "dmk2021-horticulture-mission",
    num: 72,
    shortTitle: "Strengthen horticulture — coconut, banana, fruit crops",
    fullText: "DMK will strengthen horticulture sector through coconut mission, banana cluster development, and fruit crop support.",
    domain: "Agriculture",
    grade: "B",
    rationale: "TN Horticulture Dept continued sector support schemes. Coconut mission and banana crop support maintained. Specific quantum claims require dept policy note verification.",
    repromiseStatus: "extended_delivered_honest_continuation",
    repromise2026: "2026 commits continued horticulture sector support.",
    flag: "none",
    citations: [
      {
        type: "Portal",
        label: "TN Horticulture and Plantation Crops Department",
        detail: "Sector schemes and mission-mode programs",
        url: "https://www.tn.gov.in/department/7"
      }
    ]
  },
  {
    id: "dmk2021-dairy-development",
    num: 73,
    shortTitle: "Strengthen dairy sector and Aavin expansion",
    fullText: "DMK will strengthen TN's dairy sector through Aavin expansion, procurement price increases, and veterinary service improvements.",
    domain: "Agriculture",
    grade: "B",
    rationale: "Aavin procurement price increased multiple times during term. Milk procurement volume grew. Veterinary services expanded. 2026 manifesto cites dairy sector as area of continued investment.",
    repromiseStatus: "scaled_up",
    repromise2026: "2026 commits further Aavin strengthening and dairy price enhancements.",
    flag: "none",
    citations: [
      {
        type: "Portal",
        label: "TN Cooperation, Food & Consumer Protection Dept — Aavin",
        detail: "Procurement price notifications and expansion",
        url: "https://www.aavinmilk.com/"
      }
    ]
  },
  {
    id: "dmk2021-fisheries-harbours",
    num: 93,
    shortTitle: "Develop fishing harbours and coastal infrastructure",
    fullText: "DMK will develop new fishing harbours and upgrade existing coastal infrastructure for the fisheries sector.",
    domain: "Fisheries",
    grade: "B",
    rationale: "Multiple fishing harbour upgrade projects undertaken during term — Mudasalodai, Chinnamuttam, Thengapattinam among those progressed. Full-scale new harbour construction slower. Substantial infrastructure investment documented.",
    repromiseStatus: "extended_delivered_honest_continuation",
    repromise2026: "2026 commits continued coastal infrastructure investment.",
    flag: "none",
    citations: [
      {
        type: "Portal",
        label: "TN Fisheries Department — harbour projects",
        detail: "Coastal infrastructure development programs",
        url: "https://www.fisheries.tn.gov.in/"
      }
    ]
  },
  {
    id: "dmk2021-tamil-language-promotion",
    num: 25,
    shortTitle: "Tamil language promotion — classical Tamil, translations",
    fullText: "DMK will promote Tamil language through Central Institute of Classical Tamil support, translation programs, and Tamil-medium initiatives.",
    domain: "Language",
    grade: "A",
    rationale: "Consistent and substantial Tamil promotion throughout term — CICT support, translation of literary works, Tamil language scholarships, Thirukkural promotion. Signature cultural priority delivered across multiple fronts.",
    repromiseStatus: "extended_delivered_honest_continuation",
    repromise2026: "2026 commits continued Tamil language promotion.",
    flag: "signature_scheme",
    citations: [
      {
        type: "Portal",
        label: "TN Tamil Development Department",
        detail: "Language promotion schemes and CICT coordination",
        url: "https://www.tamildevelopment.tn.gov.in/"
      },
      {
        type: "News",
        label: "TN Tamil promotion initiatives coverage 2021-2026",
        detail: "Multi-source confirmation",
        url: "https://www.thehindu.com/news/national/tamil-nadu/"
      }
    ]
  },
  {
    id: "dmk2021-drinking-water",
    num: 390,
    shortTitle: "Provide drinking water to all rural households",
    fullText: "DMK will ensure drinking water access to all rural households through Jal Jeevan Mission implementation and state augmentation.",
    domain: "Water Supply",
    grade: "B",
    rationale: "TN Jal Jeevan Mission implementation progressed with significant household tap connections added during term. TN's rural household coverage reached around 80-85% by 2026 per state data. Fell short of 100% target but substantial progress.",
    repromiseStatus: "extended_delivered_honest_continuation",
    repromise2026: "2026 commits completing 100% rural tap water coverage.",
    flag: "none",
    citations: [
      {
        type: "Portal",
        label: "TN Water Supply & Drainage Board — JJM dashboard",
        detail: "District-wise household tap coverage data",
        url: "https://jaljeevanmission.gov.in/"
      }
    ]
  },
  {
    id: "dmk2021-sewerage-urban",
    num: 385,
    shortTitle: "Expand urban sewerage and underground drainage",
    fullText: "DMK will expand underground sewerage coverage across TN cities and towns.",
    domain: "Urban",
    grade: "C",
    rationale: "Underground sewerage expansion continued in major corporations. Chennai, Coimbatore, Madurai saw some extension. Smaller municipalities remain largely uncovered. Partial delivery with concentration in large cities.",
    repromiseStatus: "quietly_dropped",
    repromise2026: "Specific UGSS commitments less prominent in 2026 manifesto.",
    flag: "none",
    citations: [
      {
        type: "Portal",
        label: "TN Municipal Administration and Water Supply Dept",
        detail: "UGSS expansion programs",
        url: "https://www.mawstn.gov.in/"
      }
    ]
  },
  {
    id: "dmk2021-solid-waste",
    num: 386,
    shortTitle: "Improve solid waste management in urban bodies",
    fullText: "DMK will improve solid waste management across urban local bodies with modern processing, segregation, and disposal infrastructure.",
    domain: "Urban",
    grade: "C",
    rationale: "Chennai's SWM moved to decentralized model with mixed results. Other cities showed incremental improvement. Legacy waste dumpsite remediation (Kodungaiyur, Perungudi) progressed slowly. Partial delivery with persistent ground-level challenges.",
    repromiseStatus: "extended_delivered_honest_continuation",
    repromise2026: "2026 commits continued SWM investment.",
    flag: "none",
    citations: [
      {
        type: "News",
        label: "Chennai SWM transition coverage 2022-2025",
        detail: "Multi-source reporting on decentralization outcomes",
        url: "https://www.thehindu.com/news/national/tamil-nadu/"
      }
    ]
  },
  {
    id: "dmk2021-desalination-chennai",
    num: 391,
    shortTitle: "Expand Chennai desalination capacity",
    fullText: "DMK will expand Chennai's desalination capacity to meet growing water demand through new plants.",
    domain: "Water Supply",
    grade: "B",
    rationale: "Nemmeli desalination plant expansion and Perur desalination plant construction progressed during term. Perur plant expected operational by 2026-27. Substantial infrastructure investment underway.",
    repromiseStatus: "extended_delivered_honest_continuation",
    repromise2026: "2026 commits continued desalination capacity expansion.",
    flag: "none",
    citations: [
      {
        type: "Portal",
        label: "Chennai Metro Water Supply and Sewerage Board",
        detail: "Desalination projects progress",
        url: "https://chennaimetrowater.tn.gov.in/"
      }
    ]
  },
  {
    id: "dmk2021-judicial-reform-high-court",
    num: 376,
    shortTitle: "Strengthen judiciary — Madras HC bench, fast-track courts",
    fullText: "DMK will strengthen judicial infrastructure including Madras HC Madurai Bench expansion, additional fast-track courts, and judicial officer recruitment.",
    domain: "Judiciary",
    grade: "B",
    rationale: "TN continued fast-track court expansion including POCSO courts and Mahila courts. Judicial infrastructure investment through TN Legal Services Authority continued. Madras HC Madurai Bench capacity grew incrementally. Solid institutional delivery.",
    repromiseStatus: "extended_delivered_honest_continuation",
    repromise2026: "2026 commits continued judicial infrastructure investment.",
    flag: "none",
    citations: [
      {
        type: "Portal",
        label: "TN Home, Prohibition and Excise Dept — courts infrastructure",
        detail: "Fast-track and specialized courts program",
        url: "https://www.tn.gov.in/"
      }
    ]
  },
  {
    id: "dmk2021-ex-servicemen",
    num: 428,
    shortTitle: "Strengthen ex-servicemen welfare and rehabilitation",
    fullText: "DMK will strengthen ex-servicemen welfare through rehabilitation schemes, preference in government jobs, and welfare fund enhancement.",
    domain: "Social Welfare",
    grade: "B",
    rationale: "TN Sainik Welfare Dept continued active programs. Reservation in state government jobs maintained. Welfare fund allocations continued. Quantum expansion vs 2021 baseline requires dept records.",
    repromiseStatus: "extended_delivered_honest_continuation",
    repromise2026: "2026 commits continued ex-servicemen welfare.",
    flag: "none",
    citations: [
      {
        type: "Portal",
        label: "TN Ex-servicemen welfare programs",
        detail: "Sainik welfare board schemes",
        url: "https://exservicemen.tn.gov.in/"
      }
    ]
  },
  {
    id: "dmk2021-pwd-welfare",
    num: 289,
    shortTitle: "Strengthen Persons with Disabilities welfare",
    fullText: "DMK will strengthen PwD welfare through enhanced pensions, accessibility improvements, and Unique Disability ID coverage.",
    domain: "Social Welfare",
    grade: "B",
    rationale: "TN's PwD differently-abled welfare continued active schemes. UDID issuance progressed. Accessibility audits of public infrastructure partial. Monthly pension continued with periodic enhancements.",
    repromiseStatus: "extended_delivered_honest_continuation",
    repromise2026: "2026 commits expanded PwD welfare.",
    flag: "none",
    citations: [
      {
        type: "Portal",
        label: "TN Welfare of Differently Abled Persons Dept",
        detail: "PwD welfare schemes and accessibility programs",
        url: "https://www.tnwdwd.tn.gov.in/"
      }
    ]
  },
  {
    id: "dmk2021-disaster-management",
    num: 415,
    shortTitle: "Strengthen disaster management capacity",
    fullText: "DMK will strengthen TN's disaster management capacity through SDRF expansion, early warning systems, and district-level preparedness.",
    domain: "Disaster",
    grade: "B",
    rationale: "TN responded to multiple cyclones (Mandous, Michaung, Fengal) and flood events during term. SDRF capacity expanded. Chennai 2023 floods exposed gaps. Overall disaster response capability grew though urban flood management remains challenged.",
    repromiseStatus: "extended_delivered_honest_continuation",
    repromise2026: "2026 commits enhanced disaster preparedness and urban flood mitigation.",
    flag: "none",
    citations: [
      {
        type: "Portal",
        label: "TN State Disaster Management Authority",
        detail: "Disaster response programs and capacity",
        url: "https://www.tnsdma.com/"
      },
      {
        type: "News",
        label: "Cyclone response coverage 2022-2024",
        detail: "Multi-event reporting on TN disaster management",
        url: "https://www.thehindu.com/news/national/tamil-nadu/"
      }
    ]
  },
  {
    id: "dmk2021-chennai-floods",
    num: 416,
    shortTitle: "Chennai flood mitigation infrastructure",
    fullText: "DMK will invest in Chennai flood mitigation including stormwater drains, canal desilting, and climate-resilient infrastructure.",
    domain: "Urban",
    grade: "C",
    rationale: "Stormwater drain expansion and canal desilting occurred but Chennai December 2023 floods revealed persistent gaps. Mylapore, Velachery, Perumbakkam flooding recurred. Investment happened; climate-resilient outcomes partial.",
    repromiseStatus: "scaled_up",
    repromise2026: "2026 commits expanded Chennai flood resilience with specific projects.",
    flag: "none",
    citations: [
      {
        type: "News",
        label: "Chennai December 2023 flood analysis",
        detail: "Infrastructure gap reporting post-flood",
        url: "https://www.thehindu.com/news/national/tamil-nadu/"
      }
    ]
  },
  {
    id: "dmk2021-pds-rice",
    num: 257,
    shortTitle: "Continue universal PDS rice distribution",
    fullText: "DMK will continue universal PDS and strengthen rice distribution to cardholders.",
    domain: "PDS",
    grade: "A",
    rationale: "TN universal PDS continued throughout term. Rice distribution sustained. Additional commodities (dal, edible oil, sugar) periodically added. Strong ongoing delivery of a pre-existing program.",
    repromiseStatus: "extended_delivered_honest_continuation",
    repromise2026: "2026 commits continued PDS strengthening.",
    flag: "signature_scheme",
    citations: [
      {
        type: "Portal",
        label: "TN Civil Supplies & Consumer Protection Dept",
        detail: "PDS operations and commodity distribution",
        url: "https://www.tncsc.tn.gov.in/"
      }
    ]
  },
  {
    id: "dmk2021-rural-roads",
    num: 395,
    shortTitle: "Expand rural road network and connectivity",
    fullText: "DMK will expand rural road network through PMGSY state implementation and CMRRS (Chief Minister's Rural Roads Scheme).",
    domain: "Rural",
    grade: "B",
    rationale: "TN rural road network continued expansion through both PMGSY and state-funded CMRRS. Annual km targets generally met. Specific cumulative figure vs 2021 baseline requires Rural Development Dept data.",
    repromiseStatus: "extended_delivered_honest_continuation",
    repromise2026: "2026 commits expanded rural connectivity.",
    flag: "none",
    citations: [
      {
        type: "Portal",
        label: "TN Rural Development & Panchayat Raj Dept",
        detail: "Rural roads program",
        url: "https://www.tnrd.gov.in/"
      }
    ]
  },
  {
    id: "dmk2021-panchayat-strengthen",
    num: 394,
    shortTitle: "Strengthen panchayat raj institutions",
    fullText: "DMK will strengthen panchayat raj institutions through financial devolution, capacity building, and technology adoption.",
    domain: "Rural",
    grade: "C",
    rationale: "Some devolution improvements and technology integration (e-panchayat) progressed. Fifteenth Finance Commission grants utilised. Structural strengthening (function, finance, functionary clarity) saw modest gains. Partial delivery.",
    repromiseStatus: "quietly_dropped",
    repromise2026: "Specific panchayat reform commitments less prominent in 2026.",
    flag: "none",
    citations: [
      {
        type: "Portal",
        label: "TN RD&PR Dept panchayat programs",
        detail: "Rural local body strengthening",
        url: "https://www.tnrd.gov.in/"
      }
    ]
  },
  {
    id: "dmk2021-bc-mbc-welfare",
    num: 267,
    shortTitle: "Strengthen BC/MBC community welfare schemes",
    fullText: "DMK will strengthen BC and MBC community welfare including educational scholarships, housing, and economic empowerment schemes.",
    domain: "BC MBC",
    grade: "B",
    rationale: "BC/MBC welfare schemes continued with periodic enhancements. Hostel expansion and scholarship schemes maintained. Arunthathiyar internal reservation policy sustained. Solid continuation of pre-existing programs.",
    repromiseStatus: "extended_delivered_honest_continuation",
    repromise2026: "2026 commits additional BC/MBC welfare.",
    flag: "none",
    citations: [
      {
        type: "Portal",
        label: "TN BC, MBC and Minorities Welfare Dept",
        detail: "Community welfare schemes",
        url: "https://www.bcmbcmw.tn.gov.in/"
      }
    ]
  },
  {
    id: "dmk2021-tamil-diaspora",
    num: 28,
    shortTitle: "Engage Tamil diaspora — NRI welfare and investments",
    fullText: "DMK will actively engage Tamil diaspora through NRI welfare schemes, investment channels, and cultural outreach.",
    domain: "Language",
    grade: "C",
    rationale: "TN NRI Welfare Department continued. Some diaspora engagement via World Tamil Conference 2025 plans and cultural events. Investment channeling from diaspora remained informal. Partial delivery.",
    repromiseStatus: "extended_delivered_honest_continuation",
    repromise2026: "2026 commits expanded diaspora engagement.",
    flag: "none",
    citations: [
      {
        type: "Portal",
        label: "TN NRI Welfare Dept",
        detail: "Diaspora engagement programs",
        url: "https://www.nritn.tn.gov.in/"
      }
    ]
  },
  {
    id: "dmk2021-archaeology-keezhadi",
    num: 356,
    shortTitle: "Expand Keezhadi excavations and Tamil archaeology",
    fullText: "DMK will expand Keezhadi excavations and strengthen state archaeology department to establish Tamil civilizational antiquity.",
    domain: "Language",
    grade: "A",
    rationale: "Keezhadi excavations expanded significantly under DMK with multiple seasons continuing. TN Archaeology Dept strengthened. Findings published and museum development progressed. Strong signature delivery on a politically and culturally significant commitment.",
    repromiseStatus: "extended_delivered_honest_continuation",
    repromise2026: "2026 commits continued Keezhadi expansion and new archaeological initiatives.",
    flag: "signature_scheme",
    citations: [
      {
        type: "News",
        label: "Keezhadi excavation coverage 2021-2026",
        detail: "Multi-source reporting on site expansion and findings",
        url: "https://www.thehindu.com/news/national/tamil-nadu/"
      },
      {
        type: "Portal",
        label: "TN State Archaeology Dept",
        detail: "Excavation programs and museum development",
        url: "https://www.tnarch.gov.in/"
      }
    ]
  },
  {
    id: "dmk2021-higher-ed-fees",
    num: 176,
    shortTitle: "Reduce higher education fees in government colleges",
    fullText: "DMK will reduce fees in government arts and science colleges and expand fee waiver schemes.",
    domain: "Education",
    grade: "B",
    rationale: "Fee structure in government colleges largely maintained at low levels. Puthumai Penn scholarship covers higher-ed costs for government school girls. Dr Muthulakshmi Reddy scholarship continued. Fee pressure eased for targeted populations.",
    repromiseStatus: "extended_delivered_honest_continuation",
    repromise2026: "2026 commits continued higher-ed affordability measures.",
    flag: "none",
    citations: [
      {
        type: "Portal",
        label: "TN Higher Education Dept — scholarship schemes",
        detail: "Muthulakshmi Reddy and related schemes",
        url: "https://www.tn.gov.in/department/27"
      }
    ]
  },
  {
    id: "dmk2021-vocational-training",
    num: 178,
    shortTitle: "Expand vocational training and ITI modernisation",
    fullText: "DMK will modernise ITIs and expand vocational training access through partnerships with industry.",
    domain: "Education",
    grade: "B",
    rationale: "ITI modernisation continued with industry partnership programs. Naan Mudhalvan integrated vocational training into mainstream skill development. TNSDC expanded. Solid institutional progress.",
    repromiseStatus: "scaled_up",
    repromise2026: "2026 commits continued ITI and vocational training expansion.",
    flag: "none",
    citations: [
      {
        type: "Portal",
        label: "TN Directorate of Employment and Training",
        detail: "ITI programs and vocational training",
        url: "https://www.tn.gov.in/"
      }
    ]
  },
  {
    id: "dmk2021-tamil-medium",
    num: 167,
    shortTitle: "Strengthen Tamil-medium education",
    fullText: "DMK will strengthen Tamil-medium education through textbook support, teacher training, and incentives.",
    domain: "Education",
    grade: "B",
    rationale: "Tamil-medium instruction maintained in government schools. Textbook content enhanced with Tamil cultural context. Teacher recruitment prioritised Tamil proficiency. Substantial though not transformational delivery.",
    repromiseStatus: "extended_delivered_honest_continuation",
    repromise2026: "2026 commits continued Tamil-medium strengthening.",
    flag: "none",
    citations: [
      {
        type: "Portal",
        label: "TN School Education Dept",
        detail: "Tamil-medium education programs",
        url: "https://www.tn.gov.in/department/10"
      }
    ]
  },
  {
    id: "dmk2021-teacher-recruitment",
    num: 316,
    shortTitle: "Fill teacher vacancies in government schools",
    fullText: "DMK will fill teacher vacancies in government schools through regular TRB recruitment.",
    domain: "Education",
    grade: "C",
    rationale: "Multiple TRB recruitment cycles conducted during term but substantial vacancies persisted. Teacher unions continued protests on pending vacancies and regularisation of temporary teachers. Partial delivery with systemic backlog.",
    repromiseStatus: "quietly_dropped",
    repromise2026: "Specific teacher-vacancy commitments less prominent in 2026.",
    flag: "none",
    citations: [
      {
        type: "News",
        label: "TRB recruitment and teacher vacancy coverage 2022-2025",
        detail: "Multi-source reporting on vacancy status",
        url: "https://www.thehindu.com/news/national/tamil-nadu/"
      }
    ]
  },
  {
    id: "dmk2021-college-infrastructure",
    num: 180,
    shortTitle: "Improve government college infrastructure",
    fullText: "DMK will improve government arts and science college infrastructure including laboratories, libraries, and hostels.",
    domain: "Education",
    grade: "C",
    rationale: "Some government college infrastructure upgrades occurred. Hostel expansion limited by resource constraints. Laboratory and library modernisation uneven across colleges. Partial delivery.",
    repromiseStatus: "extended_delivered_honest_continuation",
    repromise2026: "2026 commits continued college infrastructure investment.",
    flag: "none",
    citations: [
      {
        type: "Portal",
        label: "TN Collegiate Education Dept",
        detail: "Government college infrastructure programs",
        url: "https://www.tn.gov.in/"
      }
    ]
  },
  {
    id: "dmk2021-tanager-tourism",
    num: 283,
    shortTitle: "Boost tourism — circuit development, heritage sites",
    fullText: "DMK will boost TN tourism through circuit development, heritage site conservation, and promotion campaigns.",
    domain: "Tourism",
    grade: "B",
    rationale: "Tourism circuits developed (temple circuit, coastal circuit). Heritage site conservation continued. Post-COVID tourism recovery strong. Global events (Chess Olympiad 2022) leveraged. Solid sector performance.",
    repromiseStatus: "extended_delivered_honest_continuation",
    repromise2026: "2026 commits continued tourism sector investment.",
    flag: "none",
    citations: [
      {
        type: "Portal",
        label: "TN Tourism Development Corporation",
        detail: "Tourism circuits and heritage programs",
        url: "https://www.tamilnadutourism.tn.gov.in/"
      }
    ]
  },
  {
    id: "dmk2021-transport-buses",
    num: 441,
    shortTitle: "Modernise TN State Transport Corporation fleet",
    fullText: "DMK will modernise the State Transport Corporation fleet through new buses, electric buses, and infrastructure upgrades.",
    domain: "Transport",
    grade: "A",
    rationale: "8,836 new buses inducted during term per 2026 manifesto. Electric bus adoption began in Chennai. STC fleet rejuvenation substantial. Vidiyal Payanam operational requirement drove fleet expansion.",
    repromiseStatus: "scaled_up",
    repromise2026: "2026 commits 10,000 additional new buses.",
    flag: "signature_scheme",
    citations: [
      {
        type: "Budget",
        label: "DMK 2026 Manifesto — Transport section",
        detail: "8,836 new buses inducted 2021-26",
        url: "https://votefordmk.in/download/DMK_Manifesto_English_2026.pdf"
      }
    ]
  },
  {
    id: "dmk2021-chennai-metro-phase2-financing",
    num: 436,
    shortTitle: "Chennai Metro Phase 2 financing closure",
    fullText: "DMK will secure financing for Chennai Metro Phase 2 and push Centre for Cabinet approval and financial share.",
    domain: "Transport",
    grade: "B",
    rationale: "Chennai Metro Phase 2 received Union Cabinet approval in October 2024 after sustained TN advocacy. Financing structure includes JICA, ADB, NDB loans plus state and Centre share. Major procedural breakthrough achieved.",
    repromiseStatus: "extended_delivered_honest_continuation",
    repromise2026: "2026 commits Phase 2 completion execution.",
    flag: "none",
    citations: [
      {
        type: "News",
        label: "Union Cabinet approval for Chennai Metro Phase 2, Oct 2024",
        detail: "Major financing and approval breakthrough",
        url: "https://www.thehindu.com/news/national/tamil-nadu/"
      }
    ]
  },
  {
    id: "dmk2021-ports-development",
    num: 437,
    shortTitle: "Develop minor ports and coastal economic zones",
    fullText: "DMK will develop TN's minor ports and coastal economic zones including Thoothukudi, Cuddalore, and Ennore capacity expansion.",
    domain: "Transport",
    grade: "B",
    rationale: "Port capacity expansion progressed at major TN ports. Cargo handling grew. Specific minor port development uneven. Industry-port linkage strengthened.",
    repromiseStatus: "extended_delivered_honest_continuation",
    repromise2026: "2026 commits expanded port-led industrial corridors.",
    flag: "none",
    citations: [
      {
        type: "Portal",
        label: "TN Maritime Board",
        detail: "Minor port development and coastal economic zones",
        url: "https://tnmaritimeboard.tn.gov.in/"
      }
    ]
  },
  {
    id: "dmk2021-coimbatore-metro",
    num: 438,
    shortTitle: "Initiate Coimbatore and Madurai Metro projects",
    fullText: "DMK will initiate metro rail projects for Coimbatore and Madurai to expand urban mass transit beyond Chennai.",
    domain: "Transport",
    grade: "C",
    rationale: "Coimbatore and Madurai Metro DPRs progressed during term. Coimbatore Metro received in-principle approval. Madurai Metro DPR under review. Substantial preparatory work; actual construction pending. Partial delivery on initiation commitment.",
    repromiseStatus: "scaled_up",
    repromise2026: "2026 commits Coimbatore and Madurai Metro progression.",
    flag: "none",
    citations: [
      {
        type: "News",
        label: "Coimbatore Metro approval coverage",
        detail: "DPR and approval progress documented",
        url: "https://www.thehindu.com/news/national/tamil-nadu/"
      }
    ]
  },
  {
    id: "dmk2021-startup-fund-dedicated",
    num: 220,
    shortTitle: "Establish dedicated TN startup fund",
    fullText: "DMK will establish a dedicated Tamil Nadu startup fund to invest in early-stage TN-based startups.",
    domain: "Industry",
    grade: "A",
    rationale: "TN StartupTN Fund of Funds established during term with significant corpus. Multiple investment commitments to sector-specific funds. TN became one of the leading state startup ecosystems. Clear institutional delivery.",
    repromiseStatus: "scaled_up",
    repromise2026: "2026 commits expanded startup fund corpus.",
    flag: "signature_scheme",
    citations: [
      {
        type: "Portal",
        label: "StartupTN — Tamil Nadu startup agency",
        detail: "Fund of Funds and sector schemes",
        url: "https://startuptn.in/"
      }
    ]
  },
  {
    id: "dmk2021-electronics-manufacturing",
    num: 215,
    shortTitle: "Strengthen electronics manufacturing cluster",
    fullText: "DMK will strengthen TN's electronics manufacturing leadership through Sriperumbudur-Kanchipuram cluster expansion and global vendor partnerships.",
    domain: "Industry",
    grade: "A",
    rationale: "TN emerged as Apple/Foxconn/Pegatron manufacturing hub during term. Electronics exports grew substantially — TN among top electronics-exporting states. ₹50,000+ crore in sector investments. Flagship industrial sector delivery.",
    repromiseStatus: "scaled_up",
    repromise2026: "2026 commits expanded electronics and semiconductor focus.",
    flag: "signature_scheme",
    citations: [
      {
        type: "News",
        label: "TN electronics manufacturing sector coverage 2021-2026",
        detail: "Foxconn, Pegatron, Tata expansion reporting",
        url: "https://www.thehindu.com/business/"
      }
    ]
  },
  {
    id: "dmk2021-renewable-energy-policy",
    num: 234,
    shortTitle: "Launch new renewable energy policy and promote solar",
    fullText: "DMK will launch a new renewable energy policy with solar parks, rooftop solar incentives, and wind sector strengthening.",
    domain: "Energy",
    grade: "B",
    rationale: "TN Renewable Energy Policy 2023 released with clear solar-wind targets. TN solar capacity grew significantly. Rooftop solar adoption expanded via PM Surya Ghar integration. Wind sector repowering initiatives. Substantial institutional and capacity delivery.",
    repromiseStatus: "scaled_up",
    repromise2026: "2026 commits deeper renewable penetration and grid modernisation.",
    flag: "none",
    citations: [
      {
        type: "Portal",
        label: "TN Energy Dept and TEDA",
        detail: "Renewable Energy Policy 2023 and programs",
        url: "https://teda.tn.gov.in/"
      }
    ]
  },
  {
    id: "dmk2021-anganwadi-strengthen",
    num: 164,
    shortTitle: "Strengthen anganwadi centres and child nutrition",
    fullText: "DMK will strengthen anganwadi centres through infrastructure, worker welfare, and child nutrition improvements.",
    domain: "Women",
    grade: "B",
    rationale: "Anganwadi infrastructure upgradation continued. Worker honorarium enhanced during term. Child nutrition programs integrated with Breakfast Scheme. ICDS strengthening sustained.",
    repromiseStatus: "extended_delivered_honest_continuation",
    repromise2026: "2026 commits continued anganwadi strengthening.",
    flag: "none",
    citations: [
      {
        type: "Portal",
        label: "TN Social Welfare & Women Empowerment Dept",
        detail: "ICDS and anganwadi programs",
        url: "https://www.tnsocialwelfare.tn.gov.in/"
      }
    ]
  },
  {
    id: "dmk2021-domestic-violence",
    num: 244,
    shortTitle: "Strengthen response to domestic violence and women safety",
    fullText: "DMK will strengthen response to domestic violence, enhance Mahila courts, and improve women safety infrastructure.",
    domain: "Women",
    grade: "B",
    rationale: "Mahila courts expanded. All-Women Police Stations strengthened. Emergency response (112) integration improved. Domestic violence case handling improved though conviction rates remain low. Solid institutional strengthening.",
    repromiseStatus: "extended_delivered_honest_continuation",
    repromise2026: "2026 commits enhanced women safety measures.",
    flag: "none",
    citations: [
      {
        type: "Portal",
        label: "TN Social Welfare & Women Empowerment Dept",
        detail: "Women safety programs",
        url: "https://www.tnsocialwelfare.tn.gov.in/"
      }
    ]
  },
  {
    id: "dmk2021-working-women-hostels",
    num: 248,
    shortTitle: "Expand working women hostels and creches",
    fullText: "DMK will expand working women hostels and creches to support women's workforce participation.",
    domain: "Women",
    grade: "C",
    rationale: "Some expansion of working women hostels occurred. Creche support under existing schemes maintained. Scale vs urban demand remains insufficient. Partial delivery.",
    repromiseStatus: "quietly_dropped",
    repromise2026: "Specific working-women hostel targets less prominent in 2026.",
    flag: "none",
    citations: [
      {
        type: "Portal",
        label: "TN Social Welfare & Women Empowerment Dept",
        detail: "Working women support schemes",
        url: "https://www.tnsocialwelfare.tn.gov.in/"
      }
    ]
  },
  {
    id: "dmk2021-gig-workers",
    num: 213,
    shortTitle: "Gig and platform worker welfare",
    fullText: "DMK will introduce welfare measures for gig economy and platform workers including social security coverage.",
    domain: "Jobs",
    grade: "C",
    rationale: "TN introduced some platform worker welfare considerations. Formal legislation on gig worker social security progressed slower than states like Rajasthan and Karnataka. Partial delivery.",
    repromiseStatus: "scaled_up",
    repromise2026: "2026 commits dedicated gig and platform worker welfare framework.",
    flag: "none",
    citations: [
      {
        type: "News",
        label: "TN gig worker welfare coverage 2022-2025",
        detail: "Comparative coverage with Karnataka, Rajasthan",
        url: "https://www.thehindu.com/news/national/tamil-nadu/"
      }
    ]
  },
  {
    id: "dmk2021-tnpsc-reform",
    num: 322,
    shortTitle: "TNPSC reform — transparency and recruitment speed",
    fullText: "DMK will reform TNPSC to improve transparency, recruitment speed, and reduce case backlogs.",
    domain: "Governance",
    grade: "C",
    rationale: "TNPSC held multiple Group-I and Group-II/IV recruitment cycles during term. Some digitization improvements. Speed and transparency issues persisted per aspirant complaints. Partial delivery.",
    repromiseStatus: "quietly_dropped",
    repromise2026: "Specific TNPSC reforms not prominent in 2026.",
    flag: "none",
    citations: [
      {
        type: "Portal",
        label: "Tamil Nadu Public Service Commission",
        detail: "Recruitment cycles and reforms",
        url: "https://www.tnpsc.gov.in/"
      }
    ]
  },
  {
    id: "dmk2021-govt-job-reservation",
    num: 329,
    shortTitle: "Maintain 69% reservation in state government",
    fullText: "DMK will maintain and defend TN's 69% reservation structure in government jobs and education.",
    domain: "Jobs",
    grade: "A",
    rationale: "TN's 69% reservation maintained throughout term. Ninth Schedule protection defended. Internal reservation categories (Arunthathiyar, MBC, Vanniyar 10.5% — though latter struck down 2022 by SC) actively contested legally. Core commitment delivered.",
    repromiseStatus: "extended_delivered_honest_continuation",
    repromise2026: "2026 commits continued defense of 69% structure.",
    flag: "signature_scheme",
    citations: [
      {
        type: "Legislative",
        label: "TN Reservation structure — Ninth Schedule protection",
        detail: "Legal continuity of 69% reservation",
        url: "https://main.sci.gov.in/"
      }
    ]
  },
  {
    id: "dmk2021-hrce-priest-training",
    num: 424,
    shortTitle: "All-caste priest training under HR&CE",
    fullText: "DMK will continue all-caste priest training and ordinations in HR&CE-administered temples.",
    domain: "HR CE",
    grade: "A",
    rationale: "All-caste priest program continued with ordinations throughout term. Archaka training institutes functioned. Landmark progressive commitment sustained despite opposition from traditionalist groups.",
    repromiseStatus: "extended_delivered_honest_continuation",
    repromise2026: "2026 commits continued all-caste priest training.",
    flag: "signature_scheme",
    citations: [
      {
        type: "News",
        label: "All-caste priest ordination coverage 2021-2025",
        detail: "Multi-source reporting on program continuation",
        url: "https://www.thehindu.com/news/national/tamil-nadu/"
      },
      {
        type: "Portal",
        label: "TN HR&CE Dept",
        detail: "Archaka training programs",
        url: "https://www.tnhrce.gov.in/"
      }
    ]
  },
  {
    id: "dmk2021-temple-land-recovery",
    num: 425,
    shortTitle: "Recover encroached temple lands",
    fullText: "DMK will recover encroached HR&CE temple lands through systematic survey and legal action.",
    domain: "HR CE",
    grade: "B",
    rationale: "Temple land recovery drive undertaken during term with publicized recoveries. Thousands of acres returned to HR&CE control per state claims. Total scale and legal dispute resolution mixed.",
    repromiseStatus: "extended_delivered_honest_continuation",
    repromise2026: "2026 commits continued temple land recovery.",
    flag: "none",
    citations: [
      {
        type: "News",
        label: "HR&CE temple land recovery coverage 2022-2025",
        detail: "Recovery drive reporting",
        url: "https://www.thehindu.com/news/national/tamil-nadu/"
      }
    ]
  },
  {
    id: "dmk2021-anti-corruption",
    num: 323,
    shortTitle: "Strengthen anti-corruption measures and DVAC",
    fullText: "DMK will strengthen Directorate of Vigilance and Anti-Corruption and improve transparency in government functioning.",
    domain: "Governance",
    grade: "C",
    rationale: "DVAC continued prosecutions. Some high-profile cases pursued. Political allegations of partisan deployment from opposition. Structural anti-corruption framework changes limited.",
    repromiseStatus: "quietly_dropped",
    repromise2026: "Specific anti-corruption reform commitments not prominent in 2026.",
    flag: "none",
    citations: [
      {
        type: "Portal",
        label: "TN Directorate of Vigilance and Anti-Corruption",
        detail: "DVAC operations",
        url: "https://www.dvac.tn.gov.in/"
      }
    ]
  },
  {
    id: "dmk2021-social-audit",
    num: 328,
    shortTitle: "Strengthen social audit mechanisms",
    fullText: "DMK will strengthen social audit mechanisms for government schemes to improve accountability.",
    domain: "Governance",
    grade: "D",
    rationale: "Social audit framework exists for certain schemes (NREGS) by Centre mandate. State-led expansion to other programs limited during term. Institutionalization weak. Token delivery on structural commitment.",
    repromiseStatus: "quietly_dropped",
    repromise2026: "Specific social audit commitments not prominent in 2026.",
    flag: "quiet_drop",
    citations: [
      {
        type: "Portal",
        label: "TN RD&PR Dept — NREGS social audit",
        detail: "Existing social audit mechanisms",
        url: "https://www.tnrd.gov.in/"
      }
    ]
  },
  {
    id: "dmk2021-right-to-info",
    num: 335,
    shortTitle: "Strengthen RTI implementation and State Information Commission",
    fullText: "DMK will strengthen RTI implementation through full SIC appointments and timely response mechanisms.",
    domain: "Governance",
    grade: "C",
    rationale: "State Information Commission continued functioning but with significant pendency. Appointments made but backlogs substantial. RTI responsiveness at department level uneven. Partial delivery.",
    repromiseStatus: "quietly_dropped",
    repromise2026: "Specific RTI strengthening commitments not prominent in 2026.",
    flag: "none",
    citations: [
      {
        type: "Portal",
        label: "TN State Information Commission",
        detail: "SIC operations and pendency",
        url: "https://www.tnsic.gov.in/"
      }
    ]
  },
  {
    id: "dmk2021-traders-welfare",
    num: 302,
    shortTitle: "Traders and small business welfare schemes",
    fullText: "DMK will strengthen traders welfare through welfare board, insurance, and pension schemes.",
    domain: "Traders",
    grade: "B",
    rationale: "TN Traders Welfare Board continued with periodic scheme enhancements. Pension and accident insurance schemes maintained. Quantum expansion requires welfare board records.",
    repromiseStatus: "extended_delivered_honest_continuation",
    repromise2026: "2026 commits additional traders welfare.",
    flag: "none",
    citations: [
      {
        type: "Portal",
        label: "TN Micro, Small and Medium Enterprises Dept — traders welfare",
        detail: "Traders Welfare Board programs",
        url: "https://www.tn.gov.in/"
      }
    ]
  },
  {
    id: "dmk2021-construction-workers",
    num: 305,
    shortTitle: "Construction workers welfare board",
    fullText: "DMK will strengthen Construction Workers Welfare Board with enhanced benefits and coverage.",
    domain: "Social Welfare",
    grade: "B",
    rationale: "TN Manual Workers (Construction Workers) Welfare Board continued with periodic benefit enhancements. Pension, accident insurance, marriage assistance maintained. Enrollment expanded.",
    repromiseStatus: "extended_delivered_honest_continuation",
    repromise2026: "2026 commits continued construction worker welfare.",
    flag: "none",
    citations: [
      {
        type: "Portal",
        label: "TN Labour Welfare Board",
        detail: "Construction workers welfare schemes",
        url: "https://www.labour.tn.gov.in/"
      }
    ]
  },
  {
    id: "dmk2021-public-health",
    num: 344,
    shortTitle: "Strengthen public health infrastructure — GHs, PHCs",
    fullText: "DMK will strengthen public health infrastructure through Government Hospital and Primary Health Centre upgrades.",
    domain: "Health",
    grade: "B",
    rationale: "Substantial investment in Government Hospital and PHC infrastructure. MTM scheme delivers on primary healthcare strengthening. TN ranks among top Indian states on public health outcomes. 2026 manifesto cites extensive infrastructure delivery.",
    repromiseStatus: "scaled_up",
    repromise2026: "2026 commits continued health infrastructure investment.",
    flag: "signature_scheme",
    citations: [
      {
        type: "Portal",
        label: "TN Health & Family Welfare Dept",
        detail: "GH and PHC infrastructure programs",
        url: "https://www.tnhealth.tn.gov.in/"
      }
    ]
  },
  {
    id: "dmk2021-mental-health",
    num: 347,
    shortTitle: "Strengthen mental health services",
    fullText: "DMK will strengthen mental health services through dedicated facilities, IMH enhancement, and community mental health programs.",
    domain: "Health",
    grade: "C",
    rationale: "Institute of Mental Health Chennai continued operations. District mental health programs implemented unevenly. Community-level mental health services limited. Partial delivery on structural commitment.",
    repromiseStatus: "extended_delivered_honest_continuation",
    repromise2026: "2026 commits expanded mental health services.",
    flag: "none",
    citations: [
      {
        type: "Portal",
        label: "TN Health Dept — Mental Health programs",
        detail: "IMH and district mental health programs",
        url: "https://www.tnhealth.tn.gov.in/"
      }
    ]
  },
  {
    id: "dmk2021-cattle-welfare",
    num: 421,
    shortTitle: "Cattle welfare — gosala support, cattle insurance",
    fullText: "DMK will strengthen cattle welfare through gosala support and cattle insurance programs.",
    domain: "Agriculture",
    grade: "C",
    rationale: "Some cattle insurance and gosala support maintained. Lumpy skin disease response during outbreak was significant state-level effort. Structural expansion limited. Partial delivery.",
    repromiseStatus: "quietly_dropped",
    repromise2026: "Specific cattle welfare commitments less prominent.",
    flag: "none",
    citations: [
      {
        type: "Portal",
        label: "TN Animal Husbandry, Dairying and Fisheries Dept",
        detail: "Cattle welfare programs",
        url: "https://www.tnad.tn.gov.in/"
      }
    ]
  },
  {
    id: "dmk2021-privatisation-opposition",
    num: 350,
    shortTitle: "Oppose Centre's privatisation of PSUs in TN",
    fullText: "DMK will oppose the Centre's privatisation of Public Sector Undertakings located in Tamil Nadu including BHEL, BSNL, and others.",
    domain: "State Rights",
    grade: "B",
    rationale: "TN government consistently opposed PSU privatisation throughout term via statements, Assembly resolutions, and political mobilization. Some PSUs were privatized despite opposition; others held. Sustained advocacy; outcome depends on Centre.",
    repromiseStatus: "extended_delivered_honest_continuation",
    repromise2026: "2026 re-commits opposition to PSU privatisation.",
    flag: "none",
    citations: [
      {
        type: "Legislative",
        label: "TN Assembly resolutions on PSU privatisation 2021-2024",
        detail: "Multiple formal oppositions",
        url: "https://www.tnassembly.org/"
      }
    ]
  },
  {
    id: "dmk2021-cooperative-banks",
    num: 115,
    shortTitle: "Strengthen cooperative banks and credit societies",
    fullText: "DMK will strengthen TN cooperative banks and PACS through recapitalisation and NPA resolution.",
    domain: "Agriculture",
    grade: "B",
    rationale: "TN cooperative banking continued functioning through term. Some recapitalisation occurred. PACS computerisation progressed under Centre-state scheme. Institutional strengthening moderate.",
    repromiseStatus: "extended_delivered_honest_continuation",
    repromise2026: "2026 commits continued cooperative banking strengthening.",
    flag: "none",
    citations: [
      {
        type: "Portal",
        label: "TN Cooperation Dept",
        detail: "Cooperative banks and PACS operations",
        url: "https://www.tn.gov.in/"
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
        <strong style={{ letterSpacing: 2, textTransform: "uppercase" }}>Provisional · v0.4 · Batches 1-4</strong>
        <span style={{ opacity: 0.85, marginLeft: 10 }}>
          100 of 505 promises scored across every major domain. Grades await primary-source verification. Research preview, not a finished assessment.
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
            <div>Tamil Nadu Promise Tracker · A personal civic project by Sriram · v0.4 Batches 1-4</div>
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
