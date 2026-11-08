import { CaseStudy, Founder, Inquiry, Service, SiteSettings, Testimonial } from '../types';

export const initialSiteSettings: SiteSettings = {
  agencyName: 'BLUDS Agency',
  tagline: 'Engineering Digital Dominance for Visionary Companies',
  shortPitch: 'Founded by three elite engineers, BLUDS is a premier software house delivering enterprise-grade cloud software, intelligent AI systems, and pixel-perfect digital experiences. Operating globally online, scaling to physical studios.',
  announcement: {
    enabled: true,
    text: '🚀 Currently accepting select Q3/Q4 digital transformation projects & enterprise retainers.',
    tag: 'NEW CLIENT INTAKE OPEN',
    actionText: 'Book Discovery Call',
    actionTarget: '#contact'
  },
  operationalModel: {
    currentPhase: 'Phase 1: 100% Online & Distributed Global Engine',
    phaseBadge: 'ONLINE FIRST • GLOBAL DELIVERY',
    description: 'We run as a hyper-agile digital-first software house with 24/7 delivery across US, UK, and APAC timezones. No overhead, senior engineering talent on every sprint.',
    nextMilestone: 'Phase 2: Launching Onsite Experience Labs & Tech Studios in 2026'
  },
  contactInfo: {
    email: 'founders@bludsagency.com',
    phone: '+1 (555) 389-2041 / +92 300 1234567',
    headquarters: 'Global Online Hub (Expanding Onsite Q4)',
    physicalStudioNote: 'Onsite visits & dedicated client war-rooms available upon scheduled enterprise discovery.',
    businessHours: '24/7 Synchronous Agile Support across Global Timezones',
    calendlyLink: 'https://calendly.com'
  },
  socialLinks: {
    github: 'https://github.com/bluds-agency',
    linkedin: 'https://linkedin.com/company/bluds-agency',
    twitter: 'https://x.com/bludsagency',
    discord: 'https://discord.gg/bluds'
  },
  metrics: {
    projectsShipped: '48+',
    clientSatisfactionRate: '99.4%',
    averageDeliveryWeeks: '4 - 10 wks',
    uptimeSLA: '99.99%'
  }
};

export const initialFounders: Founder[] = [
  {
    id: 'founder-1',
    name: 'Ghulam',
    role: 'Co-Founder & Chief Technology Officer',
    focus: 'Distributed Systems, Cloud Architecture & Scalability',
    bio: 'Veteran full-stack systems architect with deep expertise in fault-tolerant backend infrastructures, microservices, and high-load web architectures. Passionate about zero-downtime deployments and ultra-clean codebases.',
    expertise: ['Cloud Architecture', 'Distributed Systems', 'Kubernetes / AWS', 'Next.js & Node.js', 'System Security'],
    avatarUrl: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=600&q=80',
    socials: {
      linkedin: 'https://linkedin.com/in/ghulam-founder',
      github: 'https://github.com/ghulam-tech',
      twitter: 'https://x.com/ghulam_eng'
    },
    location: 'Remote Lead / Future Onsite Hub',
    onlineStatusBadge: 'Available for Architecture Reviews',
    active: true
  },
  {
    id: 'founder-2',
    name: 'Hamza',
    role: 'Co-Founder & Chief Product Officer',
    focus: 'Product Strategy, Enterprise Solutions & Agile Delivery',
    bio: 'Product strategist and solutions engineer specializing in converting complex business logic into intuitive, high-converting digital products. Leads client discovery sprints and ensures every milestone generates measurable ROI.',
    expertise: ['Product Roadmapping', 'Enterprise SaaS', 'Agile Scrum', 'FinTech & HealthTech', 'Client Experience'],
    avatarUrl: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=600&q=80',
    socials: {
      linkedin: 'https://linkedin.com/in/hamza-product',
      github: 'https://github.com/hamza-builds',
      twitter: 'https://x.com/hamza_cpo'
    },
    location: 'Global Delivery Lead',
    onlineStatusBadge: 'In Discovery Sprints',
    active: true
  },
  {
    id: 'founder-3',
    name: 'Daniyal',
    role: 'Co-Founder & Head of AI & Design Engineering',
    focus: 'Applied AI, LLM Agents & Ultra-Modern Interactive UI/UX',
    bio: 'Creative technologist bridging high-end interactive aesthetics (WebGL, micro-animations, glassmorphism) with cutting-edge Generative AI and autonomous agent pipelines. Obsessed with micro-interactions that leave a lasting mark.',
    expertise: ['Generative AI / LLMs', 'Creative Frontend', 'Three.js & Motion', 'Figma to Code', 'Autonomous Workflows'],
    avatarUrl: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=600&q=80',
    socials: {
      linkedin: 'https://linkedin.com/in/daniyal-ai',
      github: 'https://github.com/daniyal-dev',
      twitter: 'https://x.com/daniyal_ux'
    },
    location: 'Design & AI Lab',
    onlineStatusBadge: 'Prototyping Next-Gen Interfaces',
    active: true
  }
];

export const initialServices: Service[] = [
  {
    id: 'srv-1',
    title: 'Custom Enterprise Software & SaaS',
    tagline: 'Scalable, multi-tenant web platforms built for speed and high concurrency.',
    iconName: 'Code2',
    badge: 'CORE PILLAR',
    shortDescription: 'We architect bespoke web apps and enterprise solutions using modern stacks (Next.js, TypeScript, Go, Node.js) with modular microservices and automated CI/CD.',
    fullDescription: 'From high-throughput financial backends to modern workflow automation portals, our custom enterprise engineering delivers bulletproof reliability, sub-100ms API response times, and infinite scaling capabilities.',
    deliverables: [
      'Multi-tenant cloud architecture',
      'High-performance REST & GraphQL APIs',
      'Role-based access control (RBAC & SSO)',
      'Automated integration test suites',
      'Continuous Deployment pipelines'
    ],
    techStack: ['React', 'Next.js', 'Node.js', 'TypeScript', 'PostgreSQL', 'Docker'],
    startingPrice: 'From $5,000 / sprint',
    active: true,
    featured: true
  },
  {
    id: 'srv-2',
    title: 'Applied AI & Autonomous Agent Systems',
    tagline: 'Leverage LLMs, RAG knowledge bases, and custom machine learning workflows.',
    iconName: 'Cpu',
    badge: 'HIGH DEMAND',
    shortDescription: 'Integrate intelligent AI co-pilots, retrieval-augmented generation (RAG) search, and autonomous multi-agent systems directly into your company operations.',
    fullDescription: 'We help startups and enterprises harness cutting-edge LLMs (OpenAI, Anthropic Claude, Gemini) and local models. We build custom fine-tuned agents that automate customer operations, document analysis, and predictive analytics.',
    deliverables: [
      'Custom LLM Fine-Tuning & Prompt Pipelines',
      'RAG Vector Databases (Pinecone / pgvector)',
      'Autonomous Business Workflow Agents',
      'Intelligent Voice & Chatbot Interfaces',
      'AI Privacy & Zero-Data-Leak Safeguards'
    ],
    techStack: ['Python', 'LangChain', 'OpenAI', 'Gemini', 'pgvector', 'FastAPI'],
    startingPrice: 'From $6,500 / solution',
    active: true,
    featured: true
  },
  {
    id: 'srv-3',
    title: 'Mobile App Engineering (iOS & Android)',
    tagline: 'Smooth 120 FPS native and cross-platform apps with offline-first capabilities.',
    iconName: 'Smartphone',
    badge: 'CROSS-PLATFORM',
    shortDescription: 'From consumer apps with viral UI to mission-critical field operations software, we engineer seamless mobile experiences using Flutter and React Native.',
    fullDescription: 'Our mobile team delivers buttery-smooth mobile applications with offline synchronization, biometric security, deep analytics, and native device hardware integrations.',
    deliverables: [
      'Flutter & React Native cross-platform apps',
      'App Store & Google Play launch compliance',
      'Real-time WebSockets & Push Notifications',
      'Offline caching & SQLite syncing',
      'In-App Subscriptions & Stripe / Apple Pay'
    ],
    techStack: ['Flutter', 'React Native', 'Swift', 'Kotlin', 'Firebase', 'GraphQL'],
    startingPrice: 'From $7,000 / MVP',
    active: true,
    featured: true
  },
  {
    id: 'srv-4',
    title: 'Cloud Architecture & DevOps Automation',
    tagline: 'Zero-downtime infrastructure, Kubernetes clusters, and security hardening.',
    iconName: 'Cloud',
    badge: 'ENTERPRISE SLA',
    shortDescription: 'Migrate to resilient cloud infrastructure with AWS, GCP, or Azure. We build automated Terraform scripts, containerization, and monitoring suites.',
    fullDescription: 'Say goodbye to servers crashing during traffic spikes. We build self-healing, auto-scaling Kubernetes architectures with automated rollback safeguards and bank-level security protocols.',
    deliverables: [
      'Terraform Infrastructure as Code (IaC)',
      'Kubernetes (EKS/GKE) cluster orchestration',
      'GitHub Actions & GitLab CI/CD pipelines',
      '24/7 Prometheus & Datadog monitoring',
      'SOC2 / GDPR compliance hardening'
    ],
    techStack: ['AWS', 'Google Cloud', 'Terraform', 'Kubernetes', 'Docker', 'Grafana'],
    startingPrice: 'From $4,500 / setup',
    active: true,
    featured: false
  },
  {
    id: 'srv-5',
    title: 'Interactive UI/UX & Creative Digital Design',
    tagline: 'Award-winning aesthetics, micro-interactions, and conversion-optimized interfaces.',
    iconName: 'Sparkles',
    badge: 'AWARD WINNING',
    shortDescription: 'Inspired by leading global design houses (Noomo Agency, Blue SQX), we build futuristic, immersive digital journeys that turn visitors into loyal clients.',
    fullDescription: 'We merge brand storytelling with modern web interaction design. Expect dark glassmorphic aesthetics, magnetic cursors, fluid motion, and responsive component libraries engineered in Figma and code.',
    deliverables: [
      'Full Design System & Figma component library',
      'Interactive WebGL & 3D micro-animations',
      'Conversion-rate-optimized (CRO) user journeys',
      'High-fidelity interactive prototypes',
      'Brand identity & visual asset kit'
    ],
    techStack: ['Figma', 'Tailwind CSS', 'Framer Motion', 'Three.js', 'Spline'],
    startingPrice: 'From $3,500 / sprint',
    active: true,
    featured: true
  },
  {
    id: 'srv-6',
    title: 'Dedicated Engineering Squads & Staffing',
    tagline: 'Augment your in-house team with senior full-stack engineers within 48 hours.',
    iconName: 'Users',
    badge: 'FLEXIBLE RETAINER',
    shortDescription: 'Hire dedicated, pre-vetted senior software engineers, tech leads, or DevOps specialists managed by our 3 founders for guaranteed velocity.',
    fullDescription: 'Skip months of recruiting. Our handpicked squads integrate directly into your Jira, Slack, and GitHub workflows, shipping PRs from Day 1 with daily asynchronous video updates.',
    deliverables: [
      'Senior developers with 6+ years experience',
      'Direct Slack/Discord integration',
      'Daily standups & weekly sprint demos',
      'Transparent time tracking & velocity metrics',
      'Zero recruiter fees & 14-day trial period'
    ],
    techStack: ['Full Stack', 'Mobile', 'DevOps', 'QA Automation', 'AI Engineers'],
    startingPrice: 'From $4,000 / month / engineer',
    active: true,
    featured: false
  }
];

export const initialCaseStudies: CaseStudy[] = [
  {
    id: 'case-1',
    title: 'AegisCloud: High-Frequency FinTech Platform',
    client: 'Aegis Global Capital',
    category: 'FinTech',
    summary: 'A sub-millisecond trading intelligence portal processing $45M+ in daily transaction volume with real-time risk calculations.',
    challenge: 'The client had legacy monolithic software struggling with 8-second query latencies and unexpected downtime during market volatility.',
    solution: 'Re-architected the entire system into distributed Go microservices with Kafka streaming and a modern Next.js client-facing dashboard with WebSockets.',
    heroImage: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80',
    tags: ['FinTech', 'Distributed Systems', 'Real-Time Data', 'Next.js'],
    metrics: [
      { label: 'Latency Reduction', value: '94% faster' },
      { label: 'Daily Trading Volume', value: '$45M+' },
      { label: 'Platform Uptime', value: '99.998%' }
    ],
    techStack: ['Next.js', 'Go', 'Kafka', 'PostgreSQL', 'Tailwind CSS', 'AWS'],
    liveUrl: 'https://aegis-demo.bludsagency.com',
    featured: true,
    active: true
  },
  {
    id: 'case-2',
    title: 'OmniAgent: Enterprise AI Workflow Automation',
    client: 'HyperLogistics Inc.',
    category: 'AI & LLM',
    summary: 'Multi-agent LLM pipeline that automatically reads bills of lading, orchestrates customs clearance, and predicts cargo delays.',
    challenge: 'Manual document intake was costing 350+ staff hours every week and creating frequent shipment re-routing errors.',
    solution: 'Built a specialized Vision-LLM document extractor coupled with an autonomous routing agent that self-verifies customs paperwork and syncs ERP systems.',
    heroImage: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=1200&q=80',
    tags: ['AI Agents', 'LLMs', 'Computer Vision', 'Automation'],
    metrics: [
      { label: 'Manual Hours Saved', value: '350 hrs/wk' },
      { label: 'Document Accuracy', value: '99.7%' },
      { label: 'Processing Speed', value: '45s vs 4 hrs' }
    ],
    techStack: ['Python', 'FastAPI', 'Gemini & OpenAI API', 'pgvector', 'React'],
    liveUrl: 'https://omniagent-demo.bludsagency.com',
    featured: true,
    active: true
  },
  {
    id: 'case-3',
    title: 'Kuro Health: Telemedicine & Bio-Vitals App',
    client: 'Kuro Medical Systems',
    category: 'Mobile',
    summary: 'HIPAA-compliant cross-platform mobile app connecting over 120,000 chronic illness patients with certified specialists in real-time.',
    challenge: 'Needed an ultra-secure video consultation interface with continuous Bluetooth wearable sensor sync that works flawlessly on iOS and low-end Android devices.',
    solution: 'Delivered an offline-first Flutter application featuring end-to-end encrypted WebRTC video sessions and continuous health metric graphing.',
    heroImage: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=1200&q=80',
    tags: ['HealthTech', 'Mobile App', 'Flutter', 'WebRTC'],
    metrics: [
      { label: 'Active Patients', value: '120,000+' },
      { label: 'App Store Rating', value: '4.9 ★' },
      { label: 'Consultation Latency', value: '<150ms' }
    ],
    techStack: ['Flutter', 'Node.js', 'WebRTC', 'Firebase', 'GCP'],
    liveUrl: 'https://kurohealth-demo.bludsagency.com',
    featured: true,
    active: true
  },
  {
    id: 'case-4',
    title: 'NexusCommerce: Headless E-Commerce Engine',
    client: 'Veloce Luxury Apparel',
    category: 'Cloud & SaaS',
    summary: 'Global headless storefront operating across 18 currencies with instant edge page loads and 3D product previews.',
    challenge: 'Sluggish Shopify frontends were suffering from a 68% cart abandonment rate on mobile devices.',
    solution: 'Designed and deployed an edge-rendered Next.js frontend with Three.js 3D apparel customization and instant Stripe one-click checkout.',
    heroImage: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80',
    tags: ['E-Commerce', 'Next.js', 'Three.js', 'Stripe'],
    metrics: [
      { label: 'Conversion Increase', value: '+34%' },
      { label: 'Mobile Bounce Rate', value: '-42%' },
      { label: 'Page Load Speed', value: '0.4s' }
    ],
    techStack: ['Next.js', 'Tailwind CSS', 'Shopify Storefront API', 'Stripe', 'Vercel Edge'],
    liveUrl: 'https://nexuscommerce-demo.bludsagency.com',
    featured: false,
    active: true
  }
];

export const initialTestimonials: Testimonial[] = [
  {
    id: 'test-1',
    clientName: 'Alexander Wright',
    role: 'Chief Technology Officer',
    company: 'Aegis Global Capital',
    location: 'London, UK',
    rating: 5,
    quote: 'BLUDS Agency did what two legacy consulting agencies failed to do in 9 months. The three founders personally stepped in, designed our distributed system, and delivered 2 weeks ahead of schedule. Their code quality is exemplary.',
    avatarUrl: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80',
    projectDelivered: 'FinTech High-Frequency Platform',
    active: true
  },
  {
    id: 'test-2',
    clientName: 'Elena Rostova',
    role: 'VP of Digital Innovation',
    company: 'HyperLogistics Inc.',
    location: 'San Francisco, USA',
    rating: 5,
    quote: 'The AI automation pipeline engineered by BLUDS has completely transformed our supply chain back-office. Their online delivery rhythm was silky smooth, with daily video walkthroughs and zero time-zone friction.',
    avatarUrl: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=200&q=80',
    projectDelivered: 'Autonomous Multi-Agent AI System',
    active: true
  },
  {
    id: 'test-3',
    clientName: 'Dr. Marcus Vance',
    role: 'Medical Director',
    company: 'Kuro Medical Systems',
    location: 'Zurich, Switzerland',
    rating: 5,
    quote: 'Finding engineers who understand both high-security compliance and award-winning mobile UX is rare. The BLUDS team treats your startup like their own. We will definitely be partnering with them for our onsite phase!',
    avatarUrl: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80',
    projectDelivered: 'Telemedicine Mobile App',
    active: true
  }
];

export const initialInquiries: Inquiry[] = [
  {
    id: 'inq-101',
    clientName: 'David Sterling',
    email: 'david@sterlingventures.io',
    phone: '+1 (415) 890-3321',
    company: 'Sterling Ventures',
    projectType: 'Custom Enterprise Software & SaaS',
    budgetRange: '$25,000 - $50,000',
    timeline: 'Within 2 Months',
    message: 'We are looking to build a multi-tenant portfolio monitoring dashboard with real-time API integrations into Bloomberg and Carta. We saw your AegisCloud case study and were thoroughly impressed.',
    source: 'contact_form',
    status: 'new',
    priority: 'high',
    createdAt: '2026-11-08T09:15:00.000Z',
    notes: [
      {
        id: 'note-1',
        author: 'Ghulam (CTO)',
        content: 'Reviewing Bloomberg API sync requirements. Need to prepare 15-minute architecture discovery slide.',
        createdAt: '2026-11-08T10:00:00.000Z'
      }
    ],
    estimatedScope: 'Full-stack Next.js + Go microservices backend with automated data pipeline.'
  },
  {
    id: 'inq-102',
    clientName: 'Sophia Chen',
    email: 'sophia@novabiotech.ai',
    phone: '+1 (650) 442-9901',
    company: 'Nova Biotech',
    projectType: 'Applied AI & Autonomous Agent Systems',
    budgetRange: '$50,000+',
    timeline: 'Immediate (1-2 weeks)',
    message: 'We have 10,000+ proprietary clinical trials in PDF and raw lab notes. We need a private, on-premise RAG vector pipeline and conversational research assistant with strict HIPAA compliance.',
    source: 'cost_estimator',
    status: 'reviewed',
    priority: 'urgent',
    createdAt: '2026-11-07T16:40:00.000Z',
    notes: [
      {
        id: 'note-2',
        author: 'Daniyal (Head of AI)',
        content: 'Proposed local open-weights model or HIPAA-compliant Azure OpenAI enclave. Client replied to introductory calendar link.',
        createdAt: '2026-11-07T18:20:00.000Z'
      }
    ],
    estimatedScope: 'Custom RAG pipeline with pgvector, Python FastAPI backend, and encrypted web chat portal.'
  },
  {
    id: 'inq-103',
    clientName: 'Liam O’Connor',
    email: 'liam@finflow.eu',
    phone: '+353 87 234 5678',
    company: 'FinFlow Global',
    projectType: 'Mobile App Engineering (iOS & Android)',
    budgetRange: '$15,000 - $25,000',
    timeline: 'Within 3 Months',
    message: 'Looking for a dedicated team to build our consumer micro-investment app in Flutter with biometric authentication and European Open Banking API integration.',
    source: 'contact_form',
    status: 'proposal_sent',
    priority: 'medium',
    createdAt: '2026-11-06T11:05:00.000Z',
    notes: [
      {
        id: 'note-3',
        author: 'Hamza (CPO)',
        content: 'Sent initial 8-page technical and pricing proposal. Client reviewing with their board on Tuesday.',
        createdAt: '2026-11-06T15:30:00.000Z'
      }
    ],
    estimatedScope: 'Flutter iOS & Android app, Plaid / Yapily Open Banking SDK integration.'
  }
];

