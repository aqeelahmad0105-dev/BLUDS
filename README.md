# BLUDS Agency — Enterprise Software Engineering & Digital Transformation

A high-performance software house and digital consultancy website and management platform engineered for a startup founded by three partners (**Ghulam**, **Hamza**, and **Daniyal**). Built to scale from an online-first global software house into physical onsite innovation labs and client war-rooms in 2026.

---

## 🌟 Architecture & Technical Standards
- **Enterprise Structure & Scale**: Inspired by [Devsinc](https://devsinc.com/) (Service Pillars, Architecture Topology Visualizer, Case Studies, Cost Estimator, Agile Process, Team Structure, Testimonials).
- **Design Philosophy**: High-contrast, minimal, corporate palette of **Pure Black (`#000000`)**, **Dark Gray surfaces (`#0c0c0c`, `#111111`)**, **Subtle borders (`#222222`)**, and **Deep Cobalt Blue (`#2563eb` / `#1d4ed8`)**. Zero gimmicky neon glows, zero bloated animations.

---

## 🚀 Key Features

### 1. Client-Facing Public Platform
- **Hero & Production Architecture Visualizer**: Interactive topology switcher (Cloud Architecture, AI & LLMs, Mobile Apps, Enterprise Systems) displaying live nodes, latency benchmarks, and 99.99% SLA metrics.
- **Technology Benchmark Matrix**: Tabbed architectural standards (Frontend, Backend, AI, Mobile, Cloud, Data Streaming) with lead founder attribution.
- **6 Core Engineering Pillars**: Custom Enterprise Software, Applied AI & Autonomous Agents, Cross-Platform Mobile Apps, Cloud & DevOps Automation, Interactive UI/UX Design, and Dedicated Staffing.
- **Interactive Project Scope & Cost Estimator**: 
  - Dynamic 3-step wizard calculating real-time budget brackets and timeline projections.
  - Direct "Submit Specification to Founders" workflow with instant lead capture.
- **Production Case Studies**: Filterable by FinTech, AI & LLM, Mobile, and Cloud with live metrics (+94% latency reduction, $45M+ volume, 120k+ users) and interactive deep-dive modals.
- **The 3 Founders & Roadmap**:
  - Highlights Ghulam (CTO), Hamza (CPO), and Daniyal (Head of AI & Experience).
  - Outlines the **Phase 1: Online Remote Worldwide** advantage and **Phase 2: Onsite Tech Studios (2026 Target)** expansion roadmap.
- **5-Stage Agile Delivery Engine**: Discovery -> UI/UX Prototype -> Bi-Weekly Sprints -> Security & Stress Hardening -> Zero-Downtime Launch.
- **Client Testimonials**: Verified 5-star executive feedback from industry CTOs.
- **Enterprise FAQ & IP Standards**: Clear answers on 100% client IP ownership, sprint velocity, and security compliance.
- **Interactive RFP & Contact Section**: Direct lead capture with automatic mutual NDA guarantee.

---

### 2. Secret Admin Portal (`/admin`)
> **Note**: This portal is strictly **hidden from all client-facing navigation** to maintain privacy and client professionalism.

- **How to Access**:
  - Visit `/admin` or `/admin/login` directly in your browser.
  - Shortcut: Press `Ctrl + Shift + A` anywhere on the site.
- **Default Evaluation Credentials**:
  - **Email**: `admin@bludsagency.com`
  - **Password**: `bluds2026`
- **Dashboard Capabilities**:
  1. **The 3 Founders & Headshots Manager**:
     - Upload founder photos directly from computer via Base64 file reader or enter image URLs.
     - Edit names, official titles, technical focus, bios, skills, and online availability badges.
  2. **Client Inquiries & RFPs Management**:
     - View, filter, and search all inquiries submitted through the contact form or project cost estimator.
     - Status tracking (`New`, `Reviewed`, `Contacted`, `Proposal Sent`, `Won`, `Closed`).
     - Detail view with client brief, message, budget, and timeline.
     - Internal founder collaboration notes thread.
     - Direct mailto reply trigger with pre-filled subject.
     - Export inquiries to CSV.
     - Log manual leads (phone calls / external referrals).
  3. **Executive Overview & KPIs**:
     - Total intake, conversion rates, active services, expansion roadmap status, and monthly demand distribution chart.
  4. **Live Website Adjustments**:
     - **Services Manager**: Add, edit, delete, or toggle active/inactive services shown on the live website.
     - **Case Studies Manager**: Add, edit, or toggle portfolio projects with metrics and blueprints.
     - **Testimonials Manager**: Add or edit client reviews.
     - **Site Settings & Banner**: Enable/disable top announcement banner, update announcement text, change official phone/email, and update operational milestone descriptions.
  5. **Instant Reactivity**:
     - Edits in the Admin dashboard sync immediately to `localStorage` and update the public website in real time without a server restart.

---

## 🛠️ Tech Stack
- **Framework**: React 18 + TypeScript + Vite
- **Styling**: Tailwind CSS
- **Icons**: Lucide React
- **Error Boundary**: React Error Boundary with safe fallback recovery
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
