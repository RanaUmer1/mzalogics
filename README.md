 # MZA Logics – Software House Website

 Production-ready Next.js (pages router) website with TailwindCSS, lazy Three.js hero (with non‑WebGL fallback), MDX content (blog, services, case studies), validated contact form, SEO, and optional analytics.

 ## Tech Stack
 - Next.js 14 (pages router), React 18
 - TailwindCSS 3
 - Three.js via `@react-three/fiber` and `@react-three/drei` (hero lazily loaded)
 - MDX via `next-mdx-remote` + `gray-matter`
 - Forms: `react-hook-form` + `zod`
 - SEO: `next-seo`

 ## Getting Started
 1) Install dependencies
 ```bash
 npm install
 ```
 2) Development
 ```bash
 npm run dev
 # If port 3000 is busy
 npm run dev -- -p 3001
 ```
 3) Open http://localhost:3000 (or 3001)

 ## Project Structure
 - `pages/` – routes (Home, Services, Portfolio, About, Process, Blog, Careers, Contact, API)
 - `components/` – `Layout`, `Nav`, `Footer`, `Hero3D`, `HeroFallback`, `MDXContent`
 - `content/` – MDX content
   - `blog/*.mdx`
   - `services/*.mdx`
   - `cases/*.mdx`
 - `lib/` – utilities (`mdx.js`, `seo.js`)
 - `styles/` – Tailwind styles (`globals.css`)

 ## Branding
 - Place your logo at `public/logo.png` (Navbar expects this path). Supported formats: png/webp/svg.

 ## Content Authoring (MDX)
 - Create files under `content/` with frontmatter:
 ```md
 ---
 title: Web Applications
 summary: Next.js SPAs and SSR apps optimized for performance and SEO.
 date: 2025-10-20
 ---
 Your MDX content here.
 ```
 - Blog: `content/blog/my-post.mdx` -> `/blog/my-post`
 - Services: `content/services/android.mdx` -> `/services/android`
 - Case Studies: `content/cases/project-alpha.mdx` -> `/portfolio/project-alpha`

 ## Contact Form
 - Frontend: `pages/contact.js`
 - API: `pages/api/contact.js` (validates `name`, `email`, `message`).
 - Default action logs to server console; integrate email/SaaS as needed.

 ## SEO
 - Defaults in `lib/seo.js`; site-wide via `DefaultSeo` in `pages/_app.js`.
 - Add per-page `<Head>` for overrides if needed.

 ## Analytics (optional)
 - Set `NEXT_PUBLIC_GA_ID` in `.env.local` to enable Google Analytics.
 - GA scripts load only if the env var is present.

 ## Scripts
 - `npm run dev` – start dev server
 - `npm run build` – build production
 - `npm run start` – start production server

 ## Deployment
 - Vercel (recommended):
   - Import repo in Vercel, framework: Next.js, build command: `npm run build`, output: `.next`
   - Add env var `NEXT_PUBLIC_GA_ID` if using GA
 - Netlify:
   - Build: `npm run build`
   - Publish directory: `.next`
   - Adapter handled automatically by Netlify Next runtime

 ## Notes
 - Three.js hero is lazy and has a graceful fallback (`HeroFallback`) for non‑WebGL contexts.
 - Tailwind warning about "no utilities detected" disappears once classes are present; the config already scans `pages/`, `components/`.

 ## Roadmap / Customization
 - Add more MDX content for services/cases/blog
 - Apply brand color palette in `tailwind.config.js`
 - Integrate email provider for `/api/contact` (e.g., SendGrid/Mailgun)
 - Add CMS backend later if desired (Sanity/Contentful/Strapi)

# Software House Website\n\nNext.js + Tailwind + Three.js starter project.