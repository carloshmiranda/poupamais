# PoupaMais

> Portuguese personal finance comparison and education platform — helping the 44% who never compare financial products make smarter money decisions

## Identity
- **Slug**: poupamais
- **Target audience**: freelancers portugueses, jovens profissionais, expatriados e os 44% dos portugueses que escolhem produtos financeiros sem comparar
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
1. Build core value flow - AI-powered comparison articles for banks, credit cards, brokers, ETF platforms, insurance, PPRs, and crypto exchanges
2. Set up affiliate commission tracking for financial product signups
3. Create financial calculators (mortgage, compound interest, tax)
4. Optimize landing page copy targeting Portuguese financial decision-makers
5. Write first SEO blog post targeting "melhor banco Portugal" keyword

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

**Operations**: Circuit breaker needed: After 4 consecutive engineer failures on the same task (Senhorio DB provisioning), the system kept re-planning the same cycle. Implement auto-halt after 3 consecutive same-task failures — create blocking escalation for Carlos with specific fix steps instead of burning another cycle on identical plans.

**Growth**: Reddit distribution with low-karma accounts fails 100% of the time (6/6 posts spam-filtered). Never use Reddit as primary autonomous channel. Post max 1 sub/day, build karma first. Directories (BetaList, Microlaunch, Uneed) have no karma gate — use those first.

**Engineering**: Vercel enables Standard Protection (Vercel Auth) by default on new Hobby projects — returns 401 to all visitors. After every new Vercel project: immediately curl for HTTP 200, disable protection via PATCH /v9/projects/{id} with {"ssoProtection": null}.

**Deployment**: For non-Next.js projects on Vercel (Vite, Astro, etc.), the REST API with gitSource is more reliable than CLI or GitHub webhooks for production deploys. Always have a fallback deploy method.

**Operations**: Agents must monitor and fix errors proactively — do not ship code and move on without checking if builds and deploys succeed. Verify, then iterate.

## Design & UX Requirements
- Visual design must be allusive to the business domain — use colors, imagery, and language that evoke financial trust and clarity
- ONE brand color for all interactive elements (buttons, links, highlights) — consistent throughout
- Landing page follows conversion-optimized structure: hero → social proof (real data only) → problem → features (max 3, SVG icons) → how-it-works → FAQ → final CTA
- Headlines must be specific and pass the "so what?" test — no generic "Get started" or "Save time"
- Single conversion goal: every CTA leads to the same action (waitlist or checkout)
- Server Components by default — only use "use client" when interactivity is needed
- Semantic HTML: `<nav>`, `<main>`, `<section>`, `<button>` — never `<div onClick>`
- Color contrast: minimum 4.5:1 for all text
- Every page: unique `<title>`, meta description, OG tags, proper heading hierarchy
- JSON-LD structured data on layout (Organization + WebSite) and FAQ sections

## Business Model Context
- **Revenue streams**: Affiliate commissions from banks/fintechs/brokers (20-300 EUR per lead), Display ads (15-40 EUR RPM finance niche)
- **Target market**: Portugal's 10.3M population, ~5M adults with financial products, 2.2M who never compare (44% OECD data)
- **Competitive advantage**: AI-updated comparison engine (competitors update manually), bilingual PT+EN for expat market, unbiased vs credit intermediaries like DoutorFinancas
- **Key metrics**: Monthly search volume - melhor banco Portugal (2,400), onde investir dinheiro (1,900), melhores ETFs Portugal (1,300)

## Constraints
- Landing page MUST include visual product previews (CSS/SVG mockups in browser frames). Never ship a landing page with text-only feature descriptions. Customize the generic dashboard mockup to show financial comparison tables and calculator interfaces.
- Budget: minimal — free tier infrastructure until revenue justifies upgrades
- No external dependencies unless absolutely necessary
- Mobile-responsive from day one — `flex-col md:flex-row` for stacking, `px-4 sm:px-6` on containers
- Core user flow must work in under 3 clicks
- SEO: every page needs proper meta tags, OG images, structured data, sitemap.ts, robots.ts
- `<html lang="pt">` for Portuguese target audience

## Infrastructure
- **Vercel project**: poupamais
- **Neon project**: TBD (uses Hive API)
- **GitHub repo**: carloshmiranda/poupamais
- **Stripe account**: TBD
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
- Mix languages on the same page — ALL copy must be in Portuguese for this market
- Show "Start Free Trial" or checkout CTAs when LAUNCH_MODE is "waitlist" — all CTAs should lead to the waitlist