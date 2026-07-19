# Sunny Kushwaha — AI Full-Stack Architect Portfolio

Professional single-page portfolio built with **Vite + React + TypeScript**.
Dark, AI-architect-grade design with sections for expertise pillars,
architecture-level projects/POCs, skills, experience, and contact.

**Live URL (after deploy):** https://sunny-dev007.github.io

---

## ✏️ Editing content

All content lives in **one file**: [`src/data.ts`](src/data.ts)

- `profile` — name, role, tagline, email, GitHub/LinkedIn links, hero stats
  (⚠️ update `yearsOfExperience` / `resumeHighlights` to your real numbers)
- `projects` — the ten architecture projects/POCs (incl. FinOps, Research
  Hyper-Agentic, BFSI Banking, and Healthcare domain solutions), filterable
  by group on the site
- `experiences` — currently uses **generic company names**; replace with real
  employers and exact dates whenever you're ready
- `skillGroups`, `expertise`, `about`, `contact` — everything else

No code changes needed to update content.

## 🖥️ Run locally

```bash
npm install
npm run dev        # http://localhost:5173
npm run build      # production build → dist/
```

## 🚀 Deploy FREE on GitHub Pages (one-time setup, ~5 minutes)

The clean-URL option: create a repo named exactly **`sunny-dev007.github.io`**
and your site is served at `https://sunny-dev007.github.io` — zero cost, free
SSL, no credit card.

### Step 1 — Create the repo

Go to https://github.com/new and create a **public** repo named:

```
sunny-dev007.github.io
```

(no README, no license — leave it empty)

### Step 2 — Push this folder to it

From inside this `portfolio/` folder:

```bash
git init
git add .
git commit -m "Portfolio: AI Full-Stack Architect"
git branch -M main
git remote add origin https://github.com/sunny-dev007/sunny-dev007.github.io.git
git push -u origin main
```

### Step 3 — Enable GitHub Pages (Actions mode)

1. Open the repo on GitHub → **Settings** → **Pages**
2. Under **Build and deployment → Source**, choose **GitHub Actions**

That's it. The included workflow ([`.github/workflows/deploy.yml`](.github/workflows/deploy.yml))
builds and deploys automatically on every `git push`. First deploy takes ~1–2
minutes; check progress in the repo's **Actions** tab.

### Updating the site later

```bash
# edit src/data.ts, then:
git add . && git commit -m "Update content" && git push
```

The site redeploys automatically.

## 🆓 Alternative free hosts (also zero cost)

| Host | How | URL style |
|------|-----|-----------|
| **GitHub Pages** (recommended) | steps above | `sunny-dev007.github.io` |
| Netlify | drag-and-drop the `dist/` folder at app.netlify.com/drop | `<name>.netlify.app` |
| Vercel | `npx vercel` in this folder | `<name>.vercel.app` |
| Cloudflare Pages | connect the GitHub repo | `<name>.pages.dev` |

All of them support custom domains for free later (you only pay for the domain
itself if you want e.g. `sunnykushwaha.dev`).

## 🧱 Tech stack

- [Vite](https://vitejs.dev) — build tool
- [React 18](https://react.dev) + TypeScript — UI
- Pure modern CSS (design tokens, glassmorphism, scroll-reveal via
  IntersectionObserver) — no CSS framework, tiny bundle (~53 KB gzipped JS)
- GitHub Actions — CI/CD to GitHub Pages
