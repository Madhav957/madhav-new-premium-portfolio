# Madhav Jayanti — Premium Developer Portfolio

A dark, Apple-inspired personal portfolio designed and engineered for **Madhav Jayanti** (Computer Science Student & Aspiring Cloud Engineer). Built with React 18, TypeScript, Vite, Tailwind CSS, Lucide Icons, and Framer Motion. Ready for production deployment on Vercel.

---

##  Design System & Tokens

Crafted around Apple's design philosophy: precision, hierarchy, restraint, generous whitespace, and typography-led structure.

- **Main Background**: `#08090B` (Deep near-black canvas)
- **Secondary Background**: `#101216` (Graphite surface)
- **Card Surface**: `#14171C` (Muted dark container)
- **Primary Text**: `#F5F5F7` (Apple soft white)
- **Secondary Text**: `#A1A1AA` (Muted zinc gray)
- **Accent Blue**: `#6EA8FE` (Restrained electric blue)
- **Border**: `rgba(255, 255, 255, 0.08)` to `rgba(255, 255, 255, 0.14)`
- **Typography**: Inter (UI / Headings) & JetBrains Mono (Technical telemetry / Code)

---

## 🚀 Key Sections & Architecture

1. **Navigation (`src/components/Navbar.tsx`)**:
   - Translucent background on scroll with backdrop blur
   - Smooth anchor navigation
   - Fully accessible mobile drawer with keyboard controls (`Esc` / focus-visible)
   - Prominent but understated "Let's Connect" CTA

2. **Hero (`src/components/Hero.tsx`)**:
   - Status badge: `COMPUTER SCIENCE · CLOUD ENGINEERING`
   - Headline: *"Building thoughtful software for the cloud."*
   - Interactive Cloud Architecture simulator toggling between VPC Topology and real Boto3 / Terraform CLI execution logs
   - Primary and secondary CTAs with "Open to Internship Opportunities" indicator

3. **Featured Project — CloudPilot AI (`src/components/CloudPilotSection.tsx`)**:
   - Headline: *"Cloud infrastructure. A more natural interface."*
   - Interactive conceptual workflow viewer:
     1. Natural Language Intent (`"Create a private application environment with a VPC..."`)
     2. Proposed Architecture (Ingress Tier -> Public ALB Subnet -> Private Subnet Workloads)
     3. Terraform HCL Plan (Valid AWS resource declarations)
     4. Human Review & Verification Gate (Strict safety barrier before apply phase)
   - Technical transparency notes and architectural deep-dive

4. **Selected Projects (`src/components/ProjectsSection.tsx` & `ProjectModal.tsx`)**:
   - **CyberShield**: Cybersecurity analytics dashboard using MySQL and security telemetry
   - **AWS Cloud Resource Automation & FinOps**: Python, Boto3, Lambda, EventBridge, and S3/EC2 lifecycle automation
   - Interactive deep-dive case study modal dialog for detailed architectural reviews

5. **About Me (`src/components/AboutSection.tsx`)**:
   - *"Curious by nature. An engineer in progress."*
   - Core engineering principles: Repeatable over manual, Least-privilege mindset, Systems under the hood, Iterative building
   - Verified metrics: 6+ AWS services scripted, 100% CLI-first workflow, AWS Cloud Practitioner foundations

6. **Skills & Technologies (`src/components/SkillsSection.tsx`)**:
   - Grouped into Cloud & Infrastructure, Programming & Backend, and Networking & Tools
   - Typography-led labels with real context—no arbitrary percentage bars

7. **Learning Journey & Technical Writing (`src/components/JourneySection.tsx`)**:
   - 3-phase roadmap: Completed, Currently Exploring, Up Next
   - Technical writing preview with draft engineering notes

8. **Contact (`src/components/ContactSection.tsx`)**:
   - *"Have something interesting to build?"*
   - Verified email (`jssmadhav20@gmail.com`) with instant "Copy Address" clipboard feedback and direct mail client launch
   - Verified GitHub (`Madhav957`), LinkedIn profile, and resume download
   - No fake backend submission forms

9. **SEO & Discovery**:
   - Semantic HTML5 landmarks (`header`, `main`, `section`, `footer`)
   - Schema.org Person JSON-LD structured data
   - Open Graph & Twitter card metadata
   - `public/robots.txt` and `public/sitemap.xml`

---

## 🛠️ Project Structure

```
madhav-portfolio-v2-main/
├── dist/                      # Production build output
├── public/
│   ├── favicon.svg            # Custom minimalist cloud/terminal icon
│   ├── resume.pdf             # Madhav's verified resume
│   ├── Madhav_Jayanti_Resume.pdf
│   ├── robots.txt             # Search crawler directives
│   ├── sitemap.xml            # Search indexing sitemap
│   └── site.webmanifest       # PWA metadata
├── src/
│   ├── components/            # Reusable UI components
│   │   ├── AboutSection.tsx
│   │   ├── CloudPilotSection.tsx
│   │   ├── ContactSection.tsx
│   │   ├── Footer.tsx
│   │   ├── Hero.tsx
│   │   ├── JourneySection.tsx
│   │   ├── Navbar.tsx
│   │   ├── ProjectModal.tsx
│   │   ├── ProjectsSection.tsx
│   │   └── SkillsSection.tsx
│   ├── data/
│   │   └── portfolioData.ts   # Centralized configuration (easy to edit)
│   ├── types/
│   │   └── index.ts           # TypeScript interfaces
│   ├── App.tsx
│   ├── index.css              # Apple design tokens and Tailwind base
│   └── main.tsx
├── index.html                 # Main template with SEO & JSON-LD
├── package.json
├── postcss.config.js
├── tailwind.config.js
├── tsconfig.json
├── tsconfig.node.json
├── vercel.json                # Vercel SPA routing and security headers
└── vite.config.ts
```

---

## 💻 Local Development

### Prerequisites
- Node.js (v18+ or v20+ LTS)
- npm or pnpm / bun

### 1. Install Dependencies
```bash
npm install
```

### 2. Start Local Development Server
```bash
npm run dev
```
Open `http://localhost:3000` in your browser.

### 3. Build for Production
```bash
npm run build
```

### 4. Preview Production Build
```bash
npm run preview
```

---

## 🌐 Deploying to Vercel

The repository is configured for one-click deployment on [Vercel](https://vercel.com):

1. Push this repository to your GitHub account (`https://github.com/Madhav957/portfolio` or your chosen repository name).
2. Log into **Vercel** and click **"Add New Project"**.
3. Import your repository.
4. Vercel automatically detects Vite:
   - **Framework Preset**: `Vite`
   - **Build Command**: `npm run build`
   - **Output Directory**: `dist`
   - **Install Command**: `npm install`
5. Click **"Deploy"**.
6. (Optional) Under **Project Settings > Domains**, connect your custom domain (e.g. `madhavjayanti.dev`).

---

## ✏️ How to Customize Your Content

All content is centralized in a single file: `src/data/portfolioData.ts`. You can update:
- Your headline or bio paragraphs
- Links (GitHub, LinkedIn, Resume path)
- Projects, case study details, or code snippets
- Technical skills and learning milestones
- Engineering blog article links
- Production domain for canonical SEO links

---

## 🛡️ License

© 2026 Madhav Jayanti. All rights reserved.
