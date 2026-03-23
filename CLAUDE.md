# PoupaMais

> Plataforma inteligente de poupanças para consumidores portugueses

## Identity
- **Slug**: poupamais
- **Target audience**: consumidores portugueses que querem poupar dinheiro de forma inteligente
- **Status**: mvp
- **Hive company ID**: d16fd775-5e5c-4db7-93aa-8d8eaa01261a

## Tech Stack
- Next.js 15 (App Router)
- Tailwind CSS 4
- Neon serverless Postgres
- Stripe Checkout + Customer Portal
- Resend for transactional email
- Deployed on Vercel

## Current Priorities
<!-- Updated by CEO agent each nightly cycle -->
1. (awaiting first cycle)

## Coding Standards
- TypeScript strict mode
- No ORMs — raw SQL with @neondatabase/serverless
- All API routes return `{ ok: boolean, data?: any, error?: string }`
- Use parameterized queries, never string interpolation for SQL
- Tailwind for all styling, no CSS modules
- Components in src/components/, pages in src/app/
- Keep bundle small — no heavy dependencies without justification

## Playbook Insights
<!-- Injected from Hive's shared playbook, filtered by relevance -->
- Financial apps require clear value proposition in hero section
- Portuguese market responds well to trust signals (security badges, testimonials)
- Savings apps should show concrete monetary benefits in marketing copy
- Use Euro currency format: €X,XX throughout the application

## Design & UX Requirements
- Visual design must be allusive to financial/savings domain — use green/blue colors, money/growth imagery
- ONE brand color: emerald green for all interactive elements (buttons, links, highlights)
- Landing page follows conversion-optimized structure: hero → social proof → problem → features (max 3, SVG icons) → how-it-works → FAQ → final CTA
- Headlines must be specific and pass the "so what?" test — focus on concrete savings amounts
- Single conversion goal: every CTA leads to waitlist signup
- Server Components by default — only use "use client" when interactivity is needed
- Semantic HTML: `<nav>`, `<main>`, `<section>`, `<button>` — never `<div onClick>`
- Color contrast: minimum 4.5:1 for all text
- Every page: unique `<title>`, meta description, OG tags, proper heading hierarchy
- JSON-LD structured data on layout (Organization + WebSite) and FAQ sections

## Constraints
- Landing page MUST include visual savings dashboard mockups (CSS/SVG mockups showing savings goals, expense analysis, tips interface)
- Budget: minimal — free tier infrastructure until revenue justifies upgrades
- No external dependencies unless absolutely necessary
- Mobile-responsive from day one — `flex-col md:flex-row` for stacking, `px-4 sm:px-6` on containers
- Core user flow must work in under 3 clicks
- SEO: every page needs proper meta tags, OG images, structured data, sitemap.ts, robots.ts
- `<html lang="pt">` for Portuguese target audience

## Infrastructure
- **Vercel project**: (to be provisioned)
- **Neon project**: (to be provisioned)
- **GitHub repo**: carloshmiranda/poupamais
- **Stripe account**: (to be provisioned)
- **URL**: https://poupamais.vercel.app

## Search Engine Discovery (Day 1 Requirements)
- sitemap.xml must list ALL pages (landing, tools, blog posts, legal)
- robots.txt must reference sitemap URL and allow all crawlers (including AI bots)
- llms.txt must exist in public/ for AI crawler optimization
- IndexNow key must exist in public/ for instant Bing/Yandex indexing
- Google Search Console: add verification meta tag to layout (Carlos verifies ownership)
- After every deploy with new pages: ping IndexNow with new URLs
- Every page needs: unique title, meta description, canonical URL, OG image

## Do NOT
- Install packages without justification
- Store secrets in code — use Vercel env vars
- Make breaking API changes without updating the frontend
- Deploy without running `npm run build` successfully
- Ignore TypeScript errors
- Claim legal compliance, certifications, or guarantees the product cannot deliver
- State features as existing when they are not yet built — be honest about roadmap vs reality
- Mix languages on the same page — ALL copy must match Portuguese language
- Show "Start Free Trial" or checkout CTAs when LAUNCH_MODE is "waitlist" — all CTAs should lead to the waitlist
