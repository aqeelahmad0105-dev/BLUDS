import { CaseStudy, Founder, Inquiry, Service, SiteSettings, Testimonial } from '../types';

export const initialSiteSettings: SiteSettings = {
  agencyName: 'BLUDS Agency',
  tagline: 'High-Performance Website Development, POS Software & Digital Growth Systems',
  shortPitch: 'Founded by three technical partners, BLUDS is a software house delivering custom websites, retail POS systems, Shopify store connections, page-one SEO, and high-ROI Meta & Google Ads campaigns.',
  announcement: {
    enabled: true,
    text: '🚀 Currently taking new projects: Website Development, POS Software, Shopify & Ads/SEO.',
    tag: 'INTAKE OPEN • WHATSAPP: 03099489168',
    actionText: 'Message on WhatsApp',
    actionTarget: '#contact'
  },
  operationalModel: {
    currentPhase: 'Phase 1: 100% Online & Distributed Global Engine',
    phaseBadge: 'ONLINE FIRST • DIRECT LEAD DELIVERY',
    description: 'We run as a hyper-agile digital software house providing direct WhatsApp and email communication with transparent milestone pricing.',
    nextMilestone: 'Phase 2: Launching Onsite Experience Labs & Tech Studios in 2026'
  },
  contactInfo: {
    email: 'm.bluds2@gmail.com',
    phone: '03099489168',
    whatsapp: '923099489168',
    leadContact: 'Aqeel Ahmad',
    headquarters: 'Global Online Hub (Direct WhatsApp & Email Support)',
    physicalStudioNote: 'Direct consultation & project discovery available 24/7 on WhatsApp & Email.',
    businessHours: '24/7 Direct WhatsApp & Email Support (Aqeel Ahmad)',
    calendlyLink: 'https://calendly.com'
  },
  socialLinks: {
    github: 'https://github.com/bluds-agency',
    linkedin: 'https://linkedin.com/company/bluds-agency',
    twitter: 'https://x.com/bludsagency',
    discord: 'https://discord.gg/bluds'
  },
  metrics: {
    projectsShipped: '64+',
    clientSatisfactionRate: '99.6%',
    averageDeliveryWeeks: '1 - 4 wks',
    uptimeSLA: '99.99%'
  }
};

export const initialFounders: Founder[] = [
  {
    id: 'founder-1',
    name: 'Ghulam',
    role: 'Co-Founder & Chief Technology Officer',
    focus: 'Website Development, Cloud Architecture & Domain Hosting',
    bio: 'Lead technical architect specializing in high-speed responsive website development (Next.js, React, Tailwind CSS), cloud deployment, and zero-downtime annual hosting infrastructures.',
    expertise: ['Website Development', 'Next.js & React', 'Speed Optimization', 'Domain & Cloud Hosting', 'Admin CMS Systems'],
    avatarUrl: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=600&q=80',
    socials: {
      linkedin: 'https://linkedin.com/in/ghulam-founder',
      github: 'https://github.com/ghulam-tech',
      twitter: 'https://x.com/ghulam_eng'
    },
    location: 'Remote Lead / Future Onsite Hub',
    onlineStatusBadge: 'Available for Web Inquiries',
    active: true
  },
  {
    id: 'founder-2',
    name: 'Hamza',
    role: 'Co-Founder & Head of Product Solutions',
    focus: 'POS Software, Retail Systems & Shopify Integrations',
    bio: 'Solutions engineer engineering high-speed Point of Sale (POS) software for retail, supermarkets, and restaurants alongside seamless Shopify store connections, catalog sync, and checkout flows.',
    expertise: ['POS Software Systems', 'Shopify Connection', 'Barcode Scanning', 'Inventory Deductions', 'Payment Gateways'],
    avatarUrl: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=600&q=80',
    socials: {
      linkedin: 'https://linkedin.com/in/hamza-product',
      github: 'https://github.com/hamza-builds',
      twitter: 'https://x.com/hamza_cpo'
    },
    location: 'Global Delivery Lead',
    onlineStatusBadge: 'Configuring Client POS',
    active: true
  },
  {
    id: 'founder-3',
    name: 'Daniyal',
    role: 'Co-Founder & Head of Growth & Creative Engineering',
    focus: 'SEO Optimization, Meta & Google Ads, and Viral Reels',
    bio: 'Growth strategist and creative video engineer running high-ROI Meta & Google Ads campaigns, technical Page-1 SEO optimization, and producing 12 high-retention short-form video reels each month.',
    expertise: ['SEO Optimization', 'Meta Ads (FB/IG)', 'Google Search & PMax', '12 Viral Reels/Mo', 'GA4 & Tracking'],
    avatarUrl: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=600&q=80',
    socials: {
      linkedin: 'https://linkedin.com/in/daniyal-ai',
      github: 'https://github.com/daniyal-dev',
      twitter: 'https://x.com/daniyal_ux'
    },
    location: 'Design & Marketing Lab',
    onlineStatusBadge: 'Scaling Client Ad Campaigns',
    active: true
  }
];

export const initialServices: Service[] = [
  {
    id: 'srv-web-dev',
    title: 'Website Development',
    tagline: 'High-speed, responsive, professional websites with modern animations and clean architecture.',
    iconName: 'Globe',
    badge: 'CORE OFFERING',
    shortDescription: 'Custom website development with modern UI, mobile responsiveness, fast load speeds, and intuitive CMS/admin panel integration.',
    fullDescription: 'We build fast, secure, and conversion-optimized websites tailored to your brand. From corporate landing pages to agency platforms, we deliver clean semantic code, 3D interactive touches, mobile-first responsiveness, and full SEO foundations.',
    deliverables: [
      'One-time development: Rs. 20,000',
      'Monthly maintenance & security: Rs. 10,000/month',
      'Domain & Hosting: Rs. 7,000 - 8,000/year (based on domain)',
      'Fully responsive on mobile, tablet & desktop',
      'Admin dashboard & inquiry handling',
      'Google PageSpeed 95+ performance optimization'
    ],
    techStack: ['React', 'Next.js', 'Tailwind CSS', 'TypeScript', 'Node.js', 'Cloud Hosting'],
    startingPrice: 'Rs. 20,000 (one-time) + Rs. 10,000/mo',
    active: true,
    featured: true
  },
  {
    id: 'srv-seo',
    title: 'SEO Optimization',
    tagline: 'Boost organic rankings, keyword visibility, and continuous search traffic on Google.',
    iconName: 'Search',
    badge: 'ORGANIC GROWTH',
    shortDescription: 'Comprehensive on-page, off-page, and technical search engine optimization to rank your business higher on Google search.',
    fullDescription: 'Our data-driven SEO strategies help your website dominate local and global search results. We perform extensive keyword research, competitor analysis, meta tags optimization, speed enhancement, backlink building, and monthly search progress tracking.',
    deliverables: [
      'Monthly Retainer: Rs. 15,000/month',
      'Complete technical SEO audit & indexing fixes',
      'Targeted keyword research & content mapping',
      'Meta tags, schema markup & heading optimization',
      'Google Search Console & GA4 analytics configuration',
      'Monthly ranking, impressions & organic traffic report'
    ],
    techStack: ['Google Search Console', 'Google Analytics 4', 'Ahrefs', 'Semrush', 'Schema.org', 'Technical SEO'],
    startingPrice: 'Rs. 15,000 / month',
    active: true,
    featured: true
  },
  {
    id: 'srv-ads',
    title: 'Meta Ads & Google Ads Management',
    tagline: 'High-converting paid advertising campaigns that drive immediate qualified leads and sales.',
    iconName: 'Megaphone',
    badge: 'PAID TRAFFIC',
    shortDescription: 'End-to-end paid campaign setup, audience targeting, ad creatives, pixel tracking, and continuous ROI optimization across Meta & Google.',
    fullDescription: 'Turn ad spend into measurable revenue. We design, launch, and optimize high-ROI advertising campaigns on Facebook, Instagram, and Google Search. Note: Service fee covers full campaign management, copywriting, creative angles, and optimization; ad spend is paid directly by the client.',
    deliverables: [
      'Management Fee: Rs. 12,000/month (ad spend paid by client)',
      'Facebook & Instagram (Meta Ads) campaign architecture',
      'Google Search & Performance Max ads setup',
      'High-converting ad copywriting & creative angles',
      'Meta Pixel & Google Tag Manager conversion tracking',
      'Weekly A/B split testing & ROAS optimization'
    ],
    techStack: ['Meta Ads Manager', 'Google Ads', 'Meta Pixel', 'Google Tag Manager', 'Canva Pro', 'Looker Studio'],
    startingPrice: 'Rs. 12,000 / month',
    active: true,
    featured: true
  },
  {
    id: 'srv-shopify',
    title: 'Shopify Connection & Store Integration',
    tagline: 'Seamless Shopify e-commerce store linkage, payment gateway setup, and inventory sync.',
    iconName: 'ShoppingBag',
    badge: 'E-COMMERCE',
    shortDescription: 'Connect your website to Shopify, sync product catalogs, configure payment gateways, and streamline your checkout process.',
    fullDescription: 'Expand your sales footprint with seamless Shopify store integration. We configure custom domain routing, link payment gateways (Credit Card, Cash on Delivery, Bank Transfer), sync product inventories with webhooks, and ensure a friction-free mobile checkout flow.',
    deliverables: [
      'One-time setup: Rs. 5,000',
      'Shopify store integration & custom domain mapping',
      'Product catalog & collection structure configuration',
      'Payment gateway & Cash on Delivery (COD) integration',
      'Inventory auto-sync & webhook setup',
      'Mobile-optimized checkout and order notification emails'
    ],
    techStack: ['Shopify', 'Liquid', 'Storefront API', 'Webhooks', 'Payment Gateways', 'SSL Security'],
    startingPrice: 'Rs. 5,000 (one-time)',
    active: true,
    featured: false
  },
  {
    id: 'srv-social-media',
    title: 'Social Media Management',
    tagline: '12 engaging short-form reels per month, strategic posting, and monthly growth analytics.',
    iconName: 'Video',
    badge: 'VIRAL BRANDING',
    shortDescription: 'Grow your brand presence across Instagram, TikTok, and Facebook with 12 professionally produced reels and in-depth performance reports.',
    fullDescription: 'Social media consistency that drives attention and trust. We script, edit, and post 12 high-retention short-form reels every month with trending audio, engaging captions, and hashtag strategies, followed by an actionable monthly analytics report.',
    deliverables: [
      'Monthly Package: Rs. 20,000/month',
      '12 professional short-form Reels / Videos per month',
      'Viral hook scripting, dynamic captions & trending music',
      'Multi-channel publishing (Instagram, Facebook, TikTok)',
      'Engagement monitoring & community interaction guidelines',
      'Comprehensive monthly analytics & growth report'
    ],
    techStack: ['Premiere Pro', 'CapCut Pro', 'Meta Business Suite', 'TikTok Creative Center', 'Canva'],
    startingPrice: 'Rs. 20,000 / month',
    active: true,
    featured: true
  },
  {
    id: 'srv-pos',
    title: 'POS Software (Point of Sale)',
    tagline: 'Fast billing, inventory control, and multi-user retail/restaurant management software.',
    iconName: 'Store',
    badge: 'BUSINESS OS',
    shortDescription: 'Complete Point of Sale software for retail shops, supermarkets, and restaurants with offline-first speed and cloud sync.',
    fullDescription: 'Automate your retail or food establishment with our custom POS solution. Features fast barcode scanning, instant thermal receipt printing, real-time stock deductions, low-inventory notifications, multi-counter cashier accounts, and cloud reporting for business owners.',
    deliverables: [
      'One-time software license: Rs. 20,000',
      'Ongoing cloud sync & support: Rs. 3,000/month subscription',
      'Barcode scanner & thermal receipt printer integration',
      'Real-time inventory management & low-stock alerts',
      'Multi-cashier access control & shift closing reports',
      'Daily, weekly & monthly profit/loss accounting analytics'
    ],
    techStack: ['React/Electron', 'Node.js', 'PostgreSQL/SQLite', 'ESC/POS Thermal', 'Cloud Sync', 'Barcode Engine'],
    startingPrice: 'Rs. 20,000 (one-time) + Rs. 3,000/mo',
    active: true,
    featured: true
  }
];

export const initialCaseStudies: CaseStudy[] = [
  {
    id: 'case-1',
    title: 'LuxeMart: Multi-Counter Retail POS Software System',
    client: 'LuxeMart Superstore',
    category: 'POS Software',
    summary: 'A fast, offline-first Point of Sale system with barcode scanner integration, instant thermal receipt printing, real-time inventory deduction, and cloud sync.',
    challenge: 'The retail client suffered from sluggish billing queues during peak hours, inventory stock mismatches, and lacked real-time daily profit and loss accounting.',
    solution: 'Engineered a modern desktop/tablet POS system with local SQLite offline resilience, automated barcode lookup, cashier shift closing, and cloud data backup.',
    heroImage: 'https://images.unsplash.com/photo-1556742049-0a67c5574f73?auto=format&fit=crop&w=1200&q=80',
    tags: ['POS Software', 'Barcode Scanner', 'Inventory Sync', 'Receipt Printing'],
    metrics: [
      { label: 'Billing Speed', value: '< 2.0s / bill' },
      { label: 'Stock Accuracy', value: '100% synced' },
      { label: 'Daily Bills Processed', value: '3,800+' }
    ],
    techStack: ['React/Electron', 'Node.js', 'PostgreSQL/SQLite', 'Thermal ESC/POS', 'Barcode Engine'],
    liveUrl: 'https://bludsagency.com/#contact',
    featured: true,
    active: true
  },
  {
    id: 'case-2',
    title: 'Aura Studio: High-Speed Custom Website & 3D Polish',
    client: 'Aura Architecture Group',
    category: 'Web Development',
    summary: 'Custom responsive corporate website featuring modern dark aesthetic, clean typography, 3D interactive canvas, and sub-second load times.',
    challenge: 'Their previous template website took 7+ seconds to load, looked outdated on mobile, and failed to generate qualified enterprise architectural inquiries.',
    solution: 'Built a bespoke Next.js 14 and Tailwind CSS platform with 98/100 Google PageSpeed, mobile-first layouts, and an integrated client inquiry dashboard.',
    heroImage: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80',
    tags: ['Web Development', 'Next.js', 'Speed Optimization', 'Admin Dashboard'],
    metrics: [
      { label: 'Google PageSpeed', value: '98 / 100' },
      { label: 'Mobile Bounce Rate', value: '-48%' },
      { label: 'Client Inquiries', value: '+190%' }
    ],
    techStack: ['Next.js', 'React', 'Tailwind CSS', 'TypeScript', 'Cloud Hosting'],
    liveUrl: 'https://bludsagency.com/#contact',
    featured: true,
    active: true
  },
  {
    id: 'case-3',
    title: 'Nova Streetwear: High-Conversion Shopify Store Integration',
    client: 'Nova Apparel Brand',
    category: 'Shopify & E-Commerce',
    summary: 'Complete Shopify connection, custom domain setup, product catalog synchronization, payment gateway linkage, and 1-click Cash on Delivery (COD) checkout.',
    challenge: 'The client needed to connect their standalone web presence to Shopify, resolve payment gateway integration issues, and eliminate high mobile cart abandonment.',
    solution: 'Connected Shopify Storefront APIs with automated webhook inventory sync, streamlined checkout steps, and configured WhatsApp order notification triggers.',
    heroImage: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=1200&q=80',
    tags: ['Shopify', 'E-Commerce', 'Payment Gateway', 'COD Integration'],
    metrics: [
      { label: 'Checkout Conversion', value: '+36%' },
      { label: 'Cart Abandonment', value: '-29%' },
      { label: 'Monthly Online Sales', value: 'Rs. 3.8M+' }
    ],
    techStack: ['Shopify', 'Liquid', 'Storefront API', 'Webhooks', 'COD Gateway'],
    liveUrl: 'https://bludsagency.com/#contact',
    featured: true,
    active: true
  },
  {
    id: 'case-4',
    title: 'Apex Dental Care: Google Page-1 SEO Optimization',
    client: 'Apex Specialty Clinics',
    category: 'SEO Optimization',
    summary: 'Data-driven on-page, off-page, and technical SEO campaign taking local search rankings to the #1 spot on Google for high-intent medical queries.',
    challenge: 'The clinic was invisible on Google search, relying entirely on expensive referrals with zero organic patient bookings from online searches.',
    solution: 'Executed a complete technical SEO audit, optimized meta schemas, enhanced page load speeds, built local authority citations, and integrated Google Search Console & GA4.',
    heroImage: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=1200&q=80',
    tags: ['SEO Optimization', 'Google Search Console', 'Keyword Ranking', 'Local SEO'],
    metrics: [
      { label: 'Google Search Rank', value: '#1 Ranking' },
      { label: 'Organic Impressions', value: '+380%' },
      { label: 'Monthly Inquiries', value: '3.4x Growth' }
    ],
    techStack: ['Google Search Console', 'GA4', 'Schema.org', 'Technical SEO', 'Ahrefs'],
    liveUrl: 'https://bludsagency.com/#contact',
    featured: false,
    active: true
  },
  {
    id: 'case-5',
    title: 'Skyline Properties: Meta & Google Ads Paid Acquisition',
    client: 'Skyline Real Estate Group',
    category: 'Meta & Google Ads',
    summary: 'High-ROI paid advertising campaign across Facebook, Instagram (Meta Ads), and Google Search delivering qualified property buyer leads.',
    challenge: 'Client was burning ad budget on boosted posts with zero lead qualification, high cost-per-click, and untracked conversion data.',
    solution: 'Configured Meta Pixel & Conversion API (CAPI), structured Google Search campaigns, tested 8 high-converting video hooks, and set up daily lead qualification filters.',
    heroImage: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=1200&q=80',
    tags: ['Meta Ads', 'Google Ads', 'Lead Generation', 'Pixel Tracking'],
    metrics: [
      { label: 'ROAS Delivered', value: '5.2x Return' },
      { label: 'Cost Per Lead', value: 'Rs. 360 / lead' },
      { label: 'Closed Deal Volume', value: 'Rs. 22M+' }
    ],
    techStack: ['Meta Ads Manager', 'Google Ads (PMax)', 'Conversion API', 'Google Tag Manager'],
    liveUrl: 'https://bludsagency.com/#contact',
    featured: false,
    active: true
  },
  {
    id: 'case-6',
    title: 'Glow Essentials: 12 Viral Reels/Month Social Media Management',
    client: 'Glow Organic Skincare',
    category: 'Social Media',
    summary: 'End-to-end social media management producing 12 high-retention short-form video reels per month with professional editing, captions, and monthly analytics.',
    challenge: 'Stagnant social media accounts with low reach, inconsistent posting, and zero video content strategy to showcase product results.',
    solution: 'Scripted and edited 12 viral-hook reels per month with trending audio and dynamic captions, published across Instagram and TikTok with detailed monthly analytics.',
    heroImage: 'https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&w=1200&q=80',
    tags: ['Social Media', '12 Reels / Month', 'Viral Video Hooks', 'Monthly Analytics'],
    metrics: [
      { label: 'Reels Produced', value: '12 / Month' },
      { label: 'Organic Reel Views', value: '620,000+' },
      { label: 'Follower Growth', value: '+28,500' }
    ],
    techStack: ['Premiere Pro', 'CapCut Pro', 'Meta Business Suite', 'Trending Audio Engine'],
    liveUrl: 'https://bludsagency.com/#contact',
    featured: false,
    active: true
  }
];

export const initialTestimonials: Testimonial[] = [
  {
    id: 'test-1',
    clientName: 'Muhammad Usman',
    role: 'Founder & Managing Director',
    company: 'LuxeMart Retail Superstore',
    location: 'Lahore, Pakistan',
    rating: 5,
    quote: 'BLUDS Agency installed and configured our complete POS software system in under 48 hours. The barcode scanner and thermal receipt printer work seamlessly without lag, and we have zero inventory leakage now. Excellent after-sales support!',
    avatarUrl: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80',
    projectDelivered: 'POS Software & Retail System',
    active: true
  },
  {
    id: 'test-2',
    clientName: 'Fatima Zahra',
    role: 'Creative Director',
    company: 'Nova Apparel Brand',
    location: 'Karachi, Pakistan',
    rating: 5,
    quote: 'They connected our website directly to Shopify and integrated our payment gateways effortlessly. Our store loads instantly on mobile, and the 12 reels produced by their social media team brought us over 40,000 targeted store visits in the first month!',
    avatarUrl: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80',
    projectDelivered: 'Shopify Store & 12 Reels Management',
    active: true
  },
  {
    id: 'test-3',
    clientName: 'Tariq Mehmood',
    role: 'Managing Partner',
    company: 'Skyline Real Estate Group',
    location: 'Islamabad, Pakistan',
    rating: 5,
    quote: 'Our website built by BLUDS Agency looks stunning and modern. On top of that, their Meta Ads and Google Ads management generated qualified buyer leads from day one at a cost per lead we could not achieve with any other agency.',
    avatarUrl: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&q=80',
    projectDelivered: 'Website Development & Meta Ads',
    active: true
  },
  {
    id: 'test-4',
    clientName: 'Dr. Bilal Hashmi',
    role: 'Chief Medical Consultant',
    company: 'Apex Specialty Dental Care',
    location: 'Rawalpindi, Pakistan',
    rating: 5,
    quote: 'Their monthly SEO optimization service took our clinic’s website to Page 1 of Google for all our primary keywords within 3 months. Our organic appointment bookings tripled. Highly recommend Aqeel Ahmad and his team!',
    avatarUrl: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=200&q=80',
    projectDelivered: 'Web Development & Page-1 SEO',
    active: true
  }
];

export const initialInquiries: Inquiry[] = [
  {
    id: 'inq-101',
    clientName: 'Tariq Mehmood',
    email: 'tariq@alnoorfabrics.com',
    phone: '+92 321 4455667',
    company: 'Al-Noor Fabrics',
    projectType: 'Website Development',
    budgetRange: 'Rs. 20,000 + Rs. 10,000/mo',
    timeline: 'Within 2 Weeks',
    message: 'We need a high-performance modern responsive website for our textile brand with domain hosting setup. Interested in Rs. 20k one-time development and ongoing monthly maintenance.',
    source: 'contact_form',
    status: 'new',
    priority: 'high',
    createdAt: '2026-11-08T09:15:00.000Z',
    notes: [
      {
        id: 'note-1',
        author: 'Ghulam (CTO)',
        content: 'Reviewing domain selection and hosting package (Rs. 7,000 - 8,000/yr). Prepared Next.js design preview.',
        createdAt: '2026-11-08T10:00:00.000Z'
      }
    ],
    estimatedScope: 'Next.js website, responsive layout, SEO basics, domain and annual cloud hosting setup.'
  },
  {
    id: 'inq-102',
    clientName: 'Kamran Rafiq',
    email: 'kamran@metromart.pk',
    phone: '+92 300 8899112',
    company: 'Metro Mart Superstore',
    projectType: 'POS Software (Point of Sale)',
    budgetRange: 'Rs. 20,000 + Rs. 3,000/mo',
    timeline: 'Immediate (1-2 weeks)',
    message: 'We operate 3 checkout counters and require a Point of Sale system with fast barcode scanning, thermal receipt printing, real-time inventory deduction, and daily profit/loss reports.',
    source: 'cost_estimator',
    status: 'reviewed',
    priority: 'urgent',
    createdAt: '2026-11-07T16:40:00.000Z',
    notes: [
      {
        id: 'note-2',
        author: 'Hamza (CPO)',
        content: 'Configuring barcode scanner integration test and ESC/POS thermal printer layout. Client confirmed setup meeting.',
        createdAt: '2026-11-07T18:20:00.000Z'
      }
    ],
    estimatedScope: 'Desktop POS software license (Rs. 20,000) with Rs. 3,000/mo cloud sync and multi-counter support.'
  },
  {
    id: 'inq-103',
    clientName: 'Sarah Khan',
    email: 'sarah@bloomcosmetics.pk',
    phone: '+92 333 1122334',
    company: 'Bloom Cosmetics',
    projectType: 'Shopify Store & Meta Ads',
    budgetRange: 'Rs. 17,000 / month',
    timeline: 'Within 1 Month',
    message: 'We need Shopify store connection (Rs. 5,000 one-time) with Cash on Delivery setup, plus monthly Meta Ads management (Rs. 12,000/month) to drive online sales.',
    source: 'contact_form',
    status: 'proposal_sent',
    priority: 'medium',
    createdAt: '2026-11-06T11:05:00.000Z',
    notes: [
      {
        id: 'note-3',
        author: 'Daniyal (Growth Lead)',
        content: 'Shared Meta Ads strategy and Shopify COD workflow with client. Ad spend to be funded directly by client.',
        createdAt: '2026-11-06T15:30:00.000Z'
      }
    ],
    estimatedScope: 'Shopify catalog linkage, COD checkout configuration, and Meta Ads campaign management.'
  }
];

