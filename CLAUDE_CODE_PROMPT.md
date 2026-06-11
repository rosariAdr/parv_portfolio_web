# Claude Code prompt — Parv Kaur portfolio (Next.js rebuild)

Copy everything below the line into Claude Code, from inside the unzipped
`design_handoff_portfolio/` folder (so `design_reference/` and `README.md` are in the working dir).

---

You are helping me build my personal portfolio website. This folder contains a **design reference**
in `design_reference/` (HTML/CSS/vanilla JS) and a detailed **`README.md`**. Read `README.md` in
full first, then read `design_reference/css/style.css` and each HTML page (especially the inline
`<script>` blocks, which hold the data arrays and the French translations).

**Your task: recreate this design as a production Next.js app** — same look, pixel-faithful — not a
copy of the raw HTML.

## Stack
- **Next.js (App Router) + React + TypeScript.**
- Styling: preserve every design token from `style.css` exactly. Use Tailwind (encode the tokens in
  `tailwind.config.ts`) **or** CSS Modules — your choice. No border-radius anywhere; this is a crisp
  editorial look.
- Fonts via `next/font/google`: **Newsreader** (serif headings), **Inter** (body), **Space Grotesk**
  (mono labels/buttons).
- Structure: a shared root layout with the top **nav** and the **contact + footer** block; one route
  per page — `/` (Home), `/experience`, `/teaching`, `/voices`, `/about`. Nav order is **Home ·
  Experience · Teaching · Student Voices · About**.

## Faithfully reproduce
- **Home:** hero (headline with italic-ochre emphasis, stat row, chip, portrait slot), the
  full-width **auto-scrolling logo marquee** (full-colour transparent logos, rightward infinite
  loop, edge mask, pause on hover), the dark **quote band** (quote wrapped in curly quotes), and the
  **"Featured Curriculum & Student Feedback"** 3-card row (centred logos, **no stars**).
  ⚠️ Do **not** port the prototype's floating "Layout options" widget — ship the defaults
  (split hero, centered nav).
- **Experience:** 4 timeline entries. Logo sizes: **SEVA 3× (~180px), AVIV 1.5× (~90px)**, Helvetia
  and the Consultant 4-logo row at the default 60px. Keep the dates as-is (AVIV 2022–2023, Helvetia
  2021–2022). Bilingual bullet text is already in the prototype.
- **Teaching:** port the **83-entry `COURSES` array**, `INSTS` and `DISC` maps as typed data. Build
  the filter bar — **Level** (single), **Discipline** (single), **Institution** (**multi-select**) —
  the 3-column card grid, and **pagination at 15/page** (Prev/numbered/Next, active page ochre,
  "Showing X–Y of Z courses"). Filters compose; changing any filter resets to page 1.
- **Voices:** port the `REVIEWS` array; category filter + responsive masonry. **No decorative quote
  mark** above cards.
- **About:** education/languages/certifications grid + the **embedded CV `<iframe>` preview** (900px,
  with download button above). Reference the CV at `/Parv_KAUR_Resume.pdf` — I'll add the file to
  `/public` myself (it's intentionally not in this bundle).

## Behaviour
- **EN/FR toggle**, persisted, default EN. Drive it from a locale context + dictionaries (lift the
  French strings straight from each page's `window.I18N_FR`). Re-render localised grids on change.
  **Don't** manipulate the DOM the way the prototype does — do it the React way.
- **Contact form: visual demo only, no backend.** Keep the fake "Message sent ✓" confirmation. Form
  labels must be pure white on the dark band.
- **Scroll-reveal:** animate **transform only, never opacity**, so content is always visible even if
  JS/animation never runs. Honour `prefers-reduced-motion`.
- Nav LinkedIn + Download-CV icon buttons; on mobile they fold into the hamburger menu.

## Build these additions on top
1. **SEO + Open Graph:** per-route `Metadata` (title + description), Open Graph + Twitter card tags
   for rich LinkedIn previews, an OG image (reuse the home hero), plus `sitemap.xml` and
   `robots.txt`.
2. **Accessibility (WCAG 2.1 AA):** semantic landmarks, visible focus states, fully keyboard-operable
   nav / language toggle / Teaching filters + pagination, `aria-current` on the active link, alt text
   on every logo, labelled inputs, contrast check on ochre, reduced-motion respected.
3. **Real legal pages:** create `/legal-notice` (Mentions légales) and `/privacy-policy`, bilingual,
   styled like the site, and wire the footer's currently-`#` links to them. Expand the GDPR footer
   text into the privacy page. Use sensible boilerplate and **leave a clear comment that I must have
   it reviewed before publishing.**

## Deploy
Target **Vercel** (free Hobby tier, zero-config for Next.js). When the app builds cleanly
(`next build` passes with no type errors), give me **step-by-step instructions** to: init a git repo,
push to GitHub, import the repo into Vercel, set the project, and deploy. Note where I drop my CV PDF
(`/public/Parv_KAUR_Resume.pdf`) and where to later paste my **Calendly URL** (the "Schedule a call"
link, currently `#`).

## Working style
- Scaffold the app, get it building, then implement page by page — **Home first** — pausing after
  each so I can review.
- Match the reference closely; if you must deviate, tell me why.
- Flag anything in the reference that looks intentional-but-unusual (e.g. the transform-only reveal,
  the square/no-radius styling) before "fixing" it.
