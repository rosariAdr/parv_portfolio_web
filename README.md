# Handoff: Parv Kaur — Academic Portfolio (Next.js rebuild)

## Overview
A five-page personal portfolio for **Parv Kaur**, a Marketing & Management lecturer and Higher
Education Consultant across French business schools. The audience is **recruiters and pedagogical
decision-makers** — course coordinators, programme directors, deans. The site's job is to establish
credibility fast: surface student reviews prominently, list the courses taught and the institutions
worked with, and make it trivial to get in touch / download the CV.

It is bilingual (**English default, French toggle**) and built in a warm editorial style.

---

## About the Design Files
The files in `design_reference/` are a **design reference created in HTML/CSS/vanilla JS** — a
high-fidelity prototype showing the intended look, content and behaviour. **They are not the
production codebase.** Your task is to **recreate these designs in a modern framework (Next.js +
React, App Router)** using its established patterns — component composition, a shared layout, an
i18n approach, CSS Modules or Tailwind — not to copy the raw HTML verbatim.

Treat the HTML as the source of truth for **layout, spacing, colour, typography, copy and
interactions**. Re-implement the structure idiomatically.

## Fidelity
**High-fidelity.** Colours, typography, spacing and interactions are final. Recreate the UI
pixel-faithfully. Where this document and the HTML disagree, the HTML wins — but everything here was
written to match the current HTML.

---

## Target stack & deliverables (what the user asked for)
- **Framework:** Next.js (App Router) + React, TypeScript preferred. Same visual design.
- **Styling:** keep the existing design tokens (below). Tailwind **or** CSS Modules — your call, but
  preserve exact values. If Tailwind, encode the tokens in `tailwind.config`.
- **i18n:** EN default + FR toggle, persisted (the prototype uses `localStorage`). Use a light
  approach — `next-intl` or a simple context + dictionaries. **All French copy already exists** in
  the prototype (see "Internationalisation" below) — reuse it verbatim.
- **Contact form:** **visual demo only** — no backend. Keep the fake "Message sent ✓" confirmation.
- **Hosting:** **Vercel** (recommended — zero-config for Next.js; free Hobby tier). Push to GitHub,
  import into Vercel, deploy. `next build` must pass.
- **Dates:** leave the Experience dates exactly as in the prototype (AVIV 2022–2023, Helvetia
  2021–2022). Do not "correct" them.
- **CV PDF:** **not included** in this bundle. The About page and nav reference
  `assets/Parv_KAUR_Resume.pdf` — wire the same path; the user will drop the file into `/public`
  themselves. Keep the embedded `<iframe>` preview + download button.

### Additions requested (implement these on top of the rebuild)
1. **SEO + Open Graph** — per-page `<title>`/meta description (Next.js Metadata API), plus Open
   Graph + Twitter card tags so LinkedIn shows a rich preview. Generate an OG image (the home hero
   works well). Add `sitemap.xml` and `robots.txt`.
2. **Accessibility pass (WCAG 2.1 AA)** — semantic landmarks, focus-visible styles, keyboard-operable
   nav + language toggle + Teaching filters/pagination, `aria-current` on the active nav link,
   alt text on every logo, labelled form fields, colour-contrast check on the ochre accents, respect
   `prefers-reduced-motion` (already done in the prototype CSS — preserve it).
3. **Real Legal notice + Privacy policy pages** — the footer currently links `#`. Create two routes
   (`/legal-notice`, `/privacy-policy`) — bilingual, styled like the rest of the site. France
   requires *Mentions légales*; the privacy page should expand the GDPR footer text. Wire the footer
   links to them. (Content can be sensible boilerplate for the user to review with a lawyer — flag
   that clearly in a comment.)

---

## Screens / Views

There are **5 pages**, a shared **top nav**, and a shared **contact + footer** block on every page.

### Shared — Top navigation (`<header class="nav">`)
- Sticky, translucent cream background with blur, 1px bottom hairline.
- **Left:** brand wordmark — `PK | Parv Kaur` (serif, "PK" bold).
- **Centre:** nav links, in this order — **Home · Experience · Teaching · Student Voices · About**.
  Active link has an ochre underline (`::after`, 1.5px). Use `aria-current="page"`.
- **Right (in order):** two 36×36 icon buttons → **LinkedIn** (opens
  `https://www.linkedin.com/in/parv-kaur-dtn-education-a40706145/` in a new tab) and **Download CV**
  (`assets/Parv_KAUR_Resume.pdf`, `download`); then the **EN / FR** toggle; then a primary
  **"Get in touch"** button linking to `#contact`.
- Icon buttons are ghost style: 1px ink border, transparent fill, invert to filled ink on hover.
- **Mobile (<860px):** links collapse into a hamburger dropdown; the LinkedIn/CV icon buttons hide
  and reappear as text links ("LinkedIn ↗", "Download CV ↓") inside the menu.

### Shared — Contact + Footer (`<section class="contact">`)
- Dark navy band (`--dark:#11141f`), two columns.
- **Left:** heading "Let's discuss the *future of learning.*" (serif, *future of learning* italic
  ochre). Below it, a `.contact-socials` column of links: **LinkedIn ↗**, **Email ↗**
  (`mailto:parvk1398@gmail.com`), **Schedule a call ↗** (`data-calendly`, href `#` placeholder — the
  user will supply a Calendly URL later).
- **Right:** contact form — Name, Email address, Message, submit "Send message". **Labels are pure
  white.** On submit: `preventDefault`, swap button text to "Message sent ✓" for ~2.6s, reset. No
  network call.
- **Footer bar** (below, hairline-topped): left = brand mark + "© 2026 Parv Kaur. All rights
  reserved."; below that a **GDPR / legal block** (`.footer-legal`) — small monospace 10px legal
  paragraph (full EN + FR text in the prototype) ending with a "Legal notice · Privacy policy" line.
  Wire those two links to the new pages.

### 1. Home (`index.html`)
- **Hero:** overline "Higher Education Consultant"; large serif display headline "Bridging *data,
  strategy* and the classroom across French business schools." (italic-ochre emphasis); lead
  paragraph; two CTAs ("Get in touch" primary, "Download CV" ghost); a 4-up **stat row** (4+ Years
  teaching · 20+ Institutions · 100+ Curriculums · 30+ Theses guided); a chip "Courses delivered in
  English & French". **Right column:** a portrait image slot (drag-drop placeholder in the
  prototype via `image-slot.js`; in React, render a styled placeholder / `next/image` slot the user
  can replace) with two stacked CTA bars beneath (Get in touch / Download CV).
- **Layout options widget** (bottom-right, `[data-options]`): a prototype-only toggle to compare
  hero/nav variants. **Do NOT port this** — pick the shipped defaults: `data-hero="split"`,
  `data-navstyle="center"`. Drop the widget entirely.
- **Logo marquee:** full-width auto-scrolling row of **all institution logos** (transparent PNGs in
  `assets/logos-t/`), moving rightward on an infinite loop, edge-faded with a CSS mask, paused on
  hover. Logos are full-colour (no grayscale). Label above: "Taught at more than 20 institutions
  across France". Implement as a duplicated track (two identical halves) animated via `translateX`.
- **Quote band** (dark): a single large student testimonial wrapped in curly quotes, with a big
  decorative `"` flourish above, attribution, and a "Read all student voices →" link to the Voices
  page.
- **Featured Curriculum & Student Feedback:** centred section title + a 3-column card row. Each card
  = two centred school logos (~64px), a course title, and an italic serif testimonial. **No star
  ratings.**

### 2. Experience (`experience.html`)
- Page title "Experience" + a "Download complete CV ↓" link.
- A vertical list of **4 timeline entries**, each a 2-column grid (left = year + period + logo;
  right = role, place, bullet list):
  1. **Founder · SEVA** — 2024 — Present. **SEVA logo rendered 3× (≈180px).** 4 bullets.
  2. **Higher Education Consultant** — 2023 — Present. A **row of 4 logos** (Rennes, OMNES, IAE
     Lille, Paris-Saclay) at 60px, 16px gap. 5 bullets.
  3. **Market Researcher · AVIV Group** — 2022 — 2023. **AVIV logo 1.5× (≈90px).** 3 bullets
     (the FR text was supplied by the user; EN is the translation — both in the prototype).
  4. **Market Research Analyst · Helvetia** — 2021 — 2022. **Helvetia logo at default 60px.**
     3 bullets.
- All other logos stay at the 60px default; only SEVA (3×) and AVIV (1.5×) are enlarged.

### 3. Teaching (`teaching.html`)
- Centred header: overline "Curriculum", display "Curriculums designed for *impact.*", lead.
- **Filter bar** with three groups:
  - **Level** — single-select pills: All · Bachelor · Master · MBA.
  - **Discipline** — single-select pills: All · BI & Data Analytics · OB & Talent Management ·
    Digital Marketing & Brand.
  - **Institution** — **multi-select** pills (toggle any number; "All" clears the selection). This
    group sits on its own full-width row.
- **Course grid:** 3-column card grid. Each card = a coloured discipline dot + label, course title,
  and a footer with the school logo + a level badge ("Bachelors"/"Masters"/"MBA").
- **Pagination: 15 courses per page.** Controls below the grid: "‹ Prev" (disabled on page 1),
  numbered page buttons (active page filled ochre), "Next ›" (disabled on last page), and a label
  "Showing X–Y of Z courses". Pagination **respects the active filters** and **resets to page 1**
  whenever a filter changes. Monospace, uppercase buttons.
- **Data:** there are **83 course entries** in a `COURSES` array (`{t, lvl, disc, inst}`), an
  `INSTS` map (key → display name) and a `DISC` map (key → `{label, colour}`). **Port these arrays
  as data** (JSON or a typed module) — do not hard-code cards. Logo path is
  `assets/logos-t/<inst>.png`. Every institution now has a logo (no text fallback needed).

### 4. Student Voices (`voices.html`)
- Centred header: overline "Student Feedback", display "Student *Voices*", lead.
- **Category filter** pills (centred): All · BI & Data Analytics · OB & Talent Management ·
  Digital Marketing & Brand.
- **Masonry** of testimonial cards (CSS `columns:3`, responsive → 2 → 1). Each card = a coloured
  category tag, the quote (italic serif), and a footer with the school logo (~42px) + attribution.
  **No large decorative quote mark** above the quote (it was removed — keep it removed).
- **Data:** a `REVIEWS` array (`{cat, inst, who, q}`). Port as data.

### 5. About (`about.html`)
- Hero: overline "Biography", display "Where *data* meets *marketing* — taught with rigour and
  warmth.", a bio paragraph.
- **Two-column grid:** left = **Education** timeline (3 entries); right = **Languages** card +
  **Certifications** grid (Google Analytics, Tableau, Business Analytics).
- **CV section** (`.cv-preview-section`): "CV" block title + hairline, a primary "Download complete
  CV" button, then an **embedded `<iframe>`** previewing `assets/Parv_KAUR_Resume.pdf#view=FitH`,
  **900px tall** (560px on mobile), full content-width, 1px hairline border. Button sits 24px above
  the iframe. (The PDF isn't in this bundle — the user adds it to `/public`. Until then the iframe
  will 404 gracefully; that's expected.)

---

## Interactions & Behavior
- **Language toggle (EN/FR):** swaps all text nodes carrying an i18n key and input placeholders;
  persists choice; sets `<html lang>`. In React, drive everything from a locale context + dictionary;
  don't manipulate the DOM. Re-render Teaching/Voices grids on locale change (level labels and the
  pagination/count strings are localised).
- **Teaching filters + pagination:** see screen 3. Filters compose (level AND discipline AND
  institution-set); changing any filter resets to page 1.
- **Voices filter:** single category at a time.
- **Contact form:** fake submit (see shared block). No backend.
- **Logo marquee:** infinite CSS keyframe (`translateX(-50%) → 0` over ~60s), pause on hover, disable
  under `prefers-reduced-motion`.
- **Scroll reveal:** elements with `.reveal` fade/translate up via IntersectionObserver. **Important
  nuance from the prototype:** the reveal animates **transform only, never opacity**, so content is
  always visible even if JS/animation never runs (this avoided a blank-page failure mode). Preserve
  that principle — never gate visibility purely on JS.
- **Mobile nav:** hamburger toggles a dropdown; closing on link click.

## State Management
- `locale: 'en' | 'fr'` — global (context), persisted to `localStorage`.
- Teaching: `level` (string), `disc` (string), `inst` (string[]), `page` (number).
- Voices: `category` (string).
- Contact form: local field state + a transient "sent" flag.
- Nav: `mobileMenuOpen` (boolean).
No data fetching — all content is static/local.

---

## Design Tokens
From `css/style.css` `:root` — preserve exactly.

**Colours**
- Background `--bg:#faf8ff` · alt `--bg-alt:#f2f3fd` · surface `#ffffff` · surface-tint `#ecedf8`
- Ink `--ink:#191b23` · ink-strong `#080b16` · ink-soft `#54555f` · ink-faint `#86878f`
- Hairline `rgba(25,27,35,0.12)` · hairline-soft `rgba(25,27,35,0.07)`
- Accent (ochre) `--accent:#b0792a` · accent-deep `#8a5510` · accent-soft `#f3ead9`
- Dark band `--dark:#11141f` / `#181c2a`; on-dark `#eff0fb` / soft `#9a9cab` / faint `#5e6173`

**Typography**
- Serif (headings): **Newsreader** (300/400/500/600, incl. italics) — Google Fonts.
- Sans (body): **Inter** (400/500/600).
- Mono (labels/overlines/buttons): **Space Grotesk** (the prototype loads Space Grotesk and aliases
  it `--mono`; the user refers to it as "JetBrains Mono" — either monospaced-grotesk works, but the
  shipped value is Space Grotesk. Keep Space Grotesk unless the user says otherwise).
- Display headline: serif 300, `clamp(40px,6.2vw,80px)`, line-height ~1.06, letter-spacing -.02em;
  italic emphasis is ochre.
- Overlines/labels: mono, ~12px, letter-spacing .16–.22em, uppercase, ink-faint.

**Layout**
- Max width `--maxw:1280px`; gutter `clamp(20px,5vw,64px)`; section gap `clamp(72px,11vw,120px)`.

**Buttons**
- `.btn` mono, uppercase, ~12.5px, letter-spacing .1em, 13×20px padding, no radius (square).
  Primary = ochre-deep fill; ghost = ink border invert-on-hover; dark = ink fill.

**Motion**
- Reveal: ~.65s `cubic-bezier(.2,.7,.2,1)`, transform-only. Marquee: ~60s linear infinite.
- All decorative motion gated behind `prefers-reduced-motion: no-preference`.

No border-radius anywhere (intentionally crisp/editorial). Shadows only on the floating widget
(which you're dropping) and the dark-band focus states.

---

## Internationalisation (copy source)
Each page defines a `window.I18N_FR` object mapping i18n keys → French strings, and the English is
the in-markup default (`data-i18n` / `data-i18n-ph` attributes). **All French copy you need already
exists there** — lift it directly into your locale dictionaries. Shared keys (nav.*, contact.*,
form.*, footer.*) repeat across pages with identical values; consolidate them into one shared
dictionary and keep page-specific keys per route.

---

## Assets
- **Institution logos:** `design_reference/assets/logos-t/*.png` — background-removed (transparent)
  full-colour PNGs. These are the ones the site references. Filenames are the `inst` keys
  (e.g. `rennes.png`, `omnes.png`, `iae-lille.png`, `paris-saclay.png`, `inseec.png`,
  `em-normandie.png`, `idrac.png`, `gema.png`, `ifag.png`, `esc-amiens.png`, `amos.png`,
  `igensia.png`, `cmh.png`, `eidm.png`, `iscom.png`, `ilci.png`, `esg-luxe.png`, `mbway.png`,
  `ferrieres.png`, `ace.png`, `icd.png`, `ascencia.png`, `seva.png`, `aviv.png`, `helvetia.png`).
  Put them in `/public/logos` (or import them) in the Next app.
- **`image-slot.js`** — the prototype's drag-drop photo placeholder web component (Home hero). You
  don't need to port the web component; render an equivalent React placeholder / `next/image` slot.
- **CV PDF** — intentionally **excluded**. Path referenced: `assets/Parv_KAUR_Resume.pdf` → put the
  user's file at `/public/Parv_KAUR_Resume.pdf` and reference `/Parv_KAUR_Resume.pdf`.
- **Fonts** — Google Fonts (Newsreader, Inter, Space Grotesk). Use `next/font/google`.

## Files (design reference)
```
design_reference/
  index.html         — Home
  about.html         — About (+ CV embed)
  experience.html    — Experience timeline
  teaching.html      — Teaching (filters + 83-course data + pagination)
  voices.html        — Student Voices (filter + masonry)
  css/style.css      — all design tokens + shared component styles
  js/site.js         — nav, mobile menu, EN/FR engine, scroll reveal, fake form submit
  assets/image-slot.js
  assets/logos-t/*.png
```

Start by reading `css/style.css` (the design system) and `index.html`, then the per-page `<script>`
blocks for the data arrays and FR dictionaries.

## Screenshots (visual targets)
`screenshots/` contains a rendered capture of each page (`1-home.png` … `5-about.png`) showing the
top/hero of each route in English. Use them as the visual target for the rebuild. (They're viewport
captures, so scroll-down sections like the marquee, quote band and footer are documented in the
"Screens / Views" section above rather than shown in full.)
