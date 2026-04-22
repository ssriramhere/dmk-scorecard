# Tamil Nadu Promise Tracker — DMK 2021-2026 Scorecard

A 5-year scorecard of DMK's 2021-2026 delivery against their 2021 election manifesto, cross-referenced with the 2026 manifesto. Personal civic project. Research and drafting assisted by Claude; methodology, grades, and editorial choices are mine.

Not affiliated with any institution, political party, or organization.

## Known limitations

This is version 0.4 — a research preview, not a finished assessment. Batches 1-4 together cover 100 of 505 promises from the 2021 manifesto across every substantial domain (welfare, health, education, agriculture, water, fisheries, industry, transport, state rights, environment, law & order, minorities, SC/ST, BC/MBC, rural development, handlooms, media, urban infrastructure, and more). All grades are marked **provisional** pending systematic primary-source verification against Government Orders, Budget line items, and CAG audits. See `VERIFICATION_SPRINT.md` for the structured plan to move from provisional to verified grades.

The scorecard is deliberately lenient in marginal cases — commitments with genuine delivery effort are credited even when scale or timeline fell short of the original promise. A stricter grading pass would shift several B grades downward.

Readers are encouraged to click through every citation and verify directly. Corrections and additional primary sources are welcome via GitHub Issues.

**Live site:** _set after deploy_ — typically `https://<username>.github.io/dmk-scorecard/`

## What this is

An interactive scorecard of 20 flagship promises (out of 505) from the DMK 2021 manifesto, each scored A–F against 5 years of delivery evidence, with an explicit cross-reference to the 2026 manifesto showing whether each promise was continued, scaled up, re-promised in weaker form, or quietly dropped.

Batch 1 is a **provisional research preview**. Every grade is backed by a citation trail; every grade awaits systematic primary-source verification before publication.

## Running locally

```bash
npm install
npm run dev
```

Opens at `http://localhost:5173`.

## Building for production

```bash
npm run build
npm run preview    # preview the built site locally on :4173
```

The built site lands in `dist/`.

## Deploying to GitHub Pages

Two deploy paths; pick one.

### Path A — gh-pages CLI (simplest, manual push)

```bash
npm run deploy
```

This runs `vite build` then pushes `dist/` to a `gh-pages` branch on your repo. In GitHub → Settings → Pages, set source to `gh-pages` branch root.

Site will be live at `https://<username>.github.io/<repo-name>/` after ~1 minute.

### Path B — GitHub Actions (automatic on every push)

The repo ships with `.github/workflows/deploy.yml`. To activate:

1. Push the repo to GitHub
2. Go to repo → Settings → Pages
3. Under "Build and deployment", set **Source** to **GitHub Actions**
4. Every push to `main` now auto-builds and deploys

The Actions tab shows deploy progress; the site URL appears as the deployment output.

## Configuration

### If your repo name is NOT `dmk-scorecard`

Edit `vite.config.js` and change `base: '/dmk-scorecard/'` to `base: '/<your-repo-name>/'`.

### If you're deploying to a custom domain (e.g. `tnpromises.in`)

1. Set `base: '/'` in `vite.config.js`
2. Create `public/CNAME` with a single line containing your domain: `tnpromises.in`
3. In GitHub → Settings → Pages, set the custom domain. Enable "Enforce HTTPS".
4. At your DNS provider, add a CNAME record pointing your subdomain to `<username>.github.io`.

### If you're deploying to a user/org root page (e.g. `<username>.github.io`)

Set `base: '/'` in `vite.config.js` and name the repo `<username>.github.io` (not `dmk-scorecard`).

## Stack

- React 18
- Vite 5
- Single-file app — no external state management, no backend, no API calls
- All data inlined in `src/App.jsx` under the `PROMISES` const

## Methodology

See the in-app methodology section. Evidence hierarchy, from strongest to weakest: Government Orders → Budget & Policy Notes → CAG Audits → PRS Tracker → Scheme Portals → Legislative Record → Independent Media.

Every promise carries an explicit citations array. Where primary sources could not be retrieved in batch 1, placeholder citations are marked as such rather than hidden.

## Updating content

To add or revise a promise, edit the `PROMISES` array in `src/App.jsx`. Each entry follows this shape:

```js
{
  id: "dmk2021-###-slug",           // stable id
  num: 169,                          // 2021 manifesto item number
  shortTitle: "Short display title",
  fullText: "Verbatim 2021 text",
  domain: "Education",               // one of the fixed domain buckets
  grade: "B",                        // A | B | C | D | F | NR
  rationale: "2-3 sentence justification",
  repromiseStatus: "scaled_up",      // see repromiseColors for enum
  repromise2026: "What changed in 2026 and where (§ reference)",
  flag: "signature_scheme",          // optional UI flag
  citations: [
    { type: "Portal", label: "...", detail: "...", url: "https://..." },
    ...
  ]
}
```

Rebuild and redeploy to publish changes.

## License

Research preview. All scheme data and citations reference public-record sources. Manifesto text quoted from the respective party's official publications. Non-partisan civic research intended to support informed voter engagement.

---

**Tamil Nadu Promise Tracker** · A personal civic research project
