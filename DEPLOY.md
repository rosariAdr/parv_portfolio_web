# Deploying the Parv Kaur portfolio to Vercel

A Next.js (App Router) app. Vercel hosts Next.js with zero config on the free **Hobby** tier.

---

## 0. Before you deploy — 3 things to drop in

1. **Your CV PDF** → save it as **`public/Parv_KAUR_Resume.pdf`**
   (exactly that name). The nav download button, the hero/About download buttons,
   and the About-page preview all point at `/Parv_KAUR_Resume.pdf`. Until the file
   exists those links 404 — that's expected.

2. **Your Calendly link** (optional, for the "Schedule a call" link) →
   open **`lib/site.ts`** and set `CALENDLY_URL` to your real URL
   (it's currently `"#"`, so the link renders but does nothing).

3. **Your site URL** (do this *after* the first deploy, see step 5) →
   in **`lib/site.ts`** set `SITE.url` to your real domain. This drives the
   Open Graph / canonical / sitemap absolute URLs (rich LinkedIn previews).

> ⚠️ The legal pages (`/legal-notice`, `/privacy-policy`) contain **boilerplate**.
> Complete the `[bracketed]` placeholders and have them reviewed by a legal
> professional before publishing. See the comments at the top of
> `app/legal-notice/LegalNoticeClient.tsx` and `app/privacy-policy/PrivacyClient.tsx`.

---

## 1. Run it locally (optional sanity check)

```bash
npm install
npm run dev        # http://localhost:3000
npm run build      # must pass with no type errors before deploying
```

---

## 2. Put it in a Git repo

From the project folder (`parv_portfolio`):

```bash
git init
git add .
git commit -m "Parv Kaur portfolio — initial commit"
```

(Optional cleanup: `design_reference/` and `screenshots/` are the original
prototype + visual targets. They don't affect the build; keep them, or add them
to `.gitignore` if you'd rather not publish them.)

---

## 3. Push to GitHub

**Easiest — GitHub CLI** (if you have `gh` installed and are logged in):

```bash
gh repo create parv-kaur-portfolio --public --source=. --remote=origin --push
```

**Or manually:** create an empty repo at <https://github.com/new> (no README),
then:

```bash
git remote add origin https://github.com/<your-username>/parv-kaur-portfolio.git
git branch -M main
git push -u origin main
```

---

## 4. Import into Vercel & deploy

1. Go to <https://vercel.com> and sign in **with GitHub**.
2. **Add New… → Project**, then **Import** your `parv-kaur-portfolio` repo.
3. Vercel auto-detects **Next.js** — leave every setting at its default
   (Build command `next build`, no environment variables needed).
4. Click **Deploy**. First build takes ~1–2 minutes.
5. You'll get a live URL like `https://parv-kaur-portfolio.vercel.app`.

Every future `git push` to `main` redeploys automatically.

---

## 5. After the first deploy

1. Copy your live URL and set it as `SITE.url` in **`lib/site.ts`**, then:
   ```bash
   git add lib/site.ts
   git commit -m "Set production site URL"
   git push
   ```
   This makes Open Graph images, canonical tags and `sitemap.xml` use absolute
   production URLs (needed for correct LinkedIn/social previews).

2. **Custom domain (optional):** Vercel → your project → **Settings → Domains**
   → add your domain and follow the DNS instructions. Then update `SITE.url`
   to that domain and push again.

---

## What's already wired for you

- **SEO:** per-page titles/descriptions, Open Graph + Twitter cards, a generated
  OG image (`/opengraph-image`), `sitemap.xml`, `robots.txt`.
- **Bilingual EN/FR** toggle (persisted), default English.
- **Accessibility:** landmarks, skip link, visible keyboard focus, `aria-current`
  on the active nav link, labelled form fields, alt text on logos, reduced-motion
  respected.
- **Contact form:** front-end demo only (no backend) — shows "Message sent ✓".
  To make it actually send mail, wire the `onSubmit` in
  `components/ContactFooter.tsx` to an email service / API route, and then update
  the Privacy Policy accordingly.
