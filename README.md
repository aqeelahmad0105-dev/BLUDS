# BLUDS Agency — Next-Generation Software House & Digital Consultancy

A website and management platform engineered for a startup founded by three friends (**Ghulam**, **Hamza**, and **Daniyal**). Built to scale from an online software house into physical onsite innovation labs and tech studios.

---

## 🌟 Visual & Architecture References
- **Enterprise Structure & Scale**: Inspired by [Devsinc](https://devsinc.com/) (Service Pillars, Case Studies, Cost Estimator, Agile Process, Team Structure, Testimonials).
- **Aesthetics & Micro-Interactions**: Inspired by [Noomo Agency](https://noomoagency.com/) and [Blue SQX](https://www.bluesqx.com/) (Dark space palette, ambient neon glows, glassmorphism, floating canvas particle mesh, interactive cards, smooth typography).

---

## 🚀 Key Features

### 1. Client-Facing Public Platform
- **Hero Command Center**: Bold typography, live code terminal simulation, system status badge, and dual CTAs.
- **Tech Ecosystem Marquee**: Continuous infinite ribbon with modern tech stacks (React, Next.js, Node.js, Python, AWS, Flutter, Docker, Kubernetes, PostgreSQL, etc.).
- **6 Core Engineering Pillars**: Custom Enterprise Software, Applied AI & Autonomous Agents, Cross-Platform Mobile Apps, Cloud & DevOps Automation, Interactive UI/UX Design, and Dedicated Staffing.
- **Interactive Project Scope & Cost Estimator**: 
  - Dynamic 4-step wizard calculating real-time budget brackets and timeline projections.
  - Direct "Submit Specification to Founders" button with instant lead capture.
- **Production Case Studies**: Filterable by FinTech, AI & LLM, Mobile, and Cloud with live metrics (+94% latency reduction, $45M+ volume, 120k+ users) and interactive deep-dive modals.
- **The 3 Founders & Story**:
  - Highlights Ghulam (CTO), Hamza (CPO), and Daniyal (Head of AI).
  - Outlines the **Phase 1: Online Remote Worldwide** advantage and **Phase 2: Onsite Tech Studios** expansion roadmap.
- **5-Stage Agile Delivery Engine**: Discovery -> Interactive Prototype -> Bi-weekly Sprints -> Penetration Testing -> Zero-Downtime Launch.
- **Client Testimonials**: Verified 5-star executive feedback.
- **Interactive RFP & Contact Section**: Direct lead capture with automatic NDA guarantee and SLA response timeline.
- **Ambient 60 FPS Interactive Canvas Background**: Softly reactive particle mesh that follows cursor movements.

---

### 2. Secret Admin Command Center (`/admin`)
> **Note**: As requested, this dashboard is **NOT linked anywhere in the client-facing navigation** to maintain privacy and client professionalism.

- **How to Access**:
  - Visit `/admin` or `/admin/login` directly in your browser.
  - Shortcut: Press `Ctrl + Shift + A` anywhere on the site.
- **Default Credentials** (Pre-filled via one-click button on login screen):
  - **Email**: `admin@bludsagency.com`
  - **Password**: `bluds2026`
- **Dashboard Capabilities**:
  1. **Client Inquiries & RFPs Management**:
     - View, filter, and search all inquiries submitted through the contact form or project cost estimator.
     - Status tracking (`New`, `Reviewed`, `Contacted`, `Proposal Sent`, `Won`, `Closed`).
     - Detail modal with full client details, message, budget, and timeline.
     - Internal founder collaboration notes thread.
     - Direct mailto reply trigger with pre-filled subject.
     - Export all inquiries to CSV.
     - Log manual leads (phone calls / external referrals).
  2. **Executive Overview & KPIs**:
     - Total intake, conversion rates, active services, expansion roadmap status, and founder workloads.
  3. **Live Website Adjustments**:
     - **Services Manager**: Add, edit, delete, or toggle active/inactive services shown on the live website.
     - **Case Studies Manager**: Add, edit, or toggle portfolio projects with metrics and blueprints.
     - **Testimonials Manager**: Add or edit client reviews.
     - **The 3 Founders Manager**: Update bios, roles, skills, and online/onsite availability badges.
     - **Site Settings & Banner**: Enable/disable top announcement banner, update announcement text, change official phone/email, and update operational milestone descriptions.
  4. **Instant Reactivity**:
     - Edits in the Admin dashboard sync immediately to `localStorage` and update the public website in real time without a server restart!

---

## 🛠️ Tech Stack
- **Framework**: React 18 + TypeScript + Vite
- **Styling**: Tailwind CSS with custom glassmorphism and ambient glow plugins
- **Icons**: Lucide React
- **Animations**: CSS keyframe animations, Canvas 2D interactive particle mesh
- **State & Persistence**: React Context + Reactive LocalStorage persistence

---

## 💻 Running the Project Locally

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

