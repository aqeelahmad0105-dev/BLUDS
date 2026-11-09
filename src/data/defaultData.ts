import { CaseStudy, Founder, Inquiry, Service, SiteSettings, Testimonial } from '../types';

export const initialSiteSettings: SiteSettings = {
  agencyName: 'BLUDS Agency',
  tagline: 'We Build Websites, Shop Billing Software & Run Ads That Actually Bring You Customers',
  shortPitch: 'BLUDS Agency helps retail shops, brands, and businesses launch custom websites, fast POS billing software, Shopify stores, and sales-generating Facebook, Instagram & Google ads.',
  announcement: {
    enabled: true,
    text: '🚀 Currently taking new projects: Websites, Shop Billing (POS), Shopify & Meta Ads.',
    tag: 'WHATSAPP: 03099489168',
    actionText: 'Message on WhatsApp',
    actionTarget: '#contact'
  },
  operationalModel: {
    currentPhase: 'Direct Founder Service • Online Across Pakistan & Worldwide',
    phaseBadge: 'DIRECT FOUNDER DELIVERY',
    description: 'You talk directly with Aqeel Ahmad and our 3 lead builders on WhatsApp. No sales reps, no confusion, and honest fixed pricing.',
    nextMilestone: 'Physical Onsite Walk-In Studios Launching in 2026'
  },
  contactInfo: {
    email: 'm.bluds2@gmail.com',
    phone: '03099489168',
    whatsapp: '923099489168',
    leadContact: 'Aqeel Ahmad',
    headquarters: 'Lahore & Online Across Pakistan (Direct WhatsApp & Call Support)',
    physicalStudioNote: 'Instant consultation & fast pricing available 24/7 on WhatsApp & Phone.',
    businessHours: '24/7 Direct WhatsApp & Call Support (Aqeel Ahmad: 03099489168)',
    calendlyLink: 'https://wa.me/923099489168'
  },
  socialLinks: {
    github: 'https://github.com/bluds-agency',
    linkedin: 'https://linkedin.com/company/bluds-agency',
    twitter: 'https://x.com/bludsagency',
    discord: 'https://wa.me/923099489168'
  },
  metrics: {
    projectsShipped: '64+',
    clientSatisfactionRate: '99.6%',
    averageDeliveryWeeks: '1 - 2 Weeks',
    uptimeSLA: '100% Guaranteed'
  },
  emailConfig: {
    enabled: true,
    provider: 'emailjs',
    recipientEmail: 'm.bluds2@gmail.com',
    emailjsServiceId: '',
    emailjsTemplateId: '',
    emailjsPublicKey: '',
    web3formsAccessKey: '',
    formspreeId: ''
  },
  cloudSync: {
    enabled: true,
    provider: 'supabase',
    supabaseUrl: '',
    supabaseAnonKey: '',
    autoSync: true,
    lastSyncedAt: undefined
  }
};

export const initialFounders: Founder[] = [
  {
    id: 'founder-1',
    name: 'Ghulam',
    role: 'Co-Founder & Website Specialist',
    focus: 'Custom Websites, Mobile Speed & Hosting',
    bio: 'Specialist in building fast, beautiful websites that look great on smartphones, load in under 1 second, and give your business a trusted, professional look.',
    expertise: ['Custom Websites', 'Fast on Mobile', 'WhatsApp Integration', 'Domain Setup', 'Annual Hosting'],
    avatarUrl: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=600&q=80',
    socials: {
      linkedin: 'https://linkedin.com/in/ghulam-founder',
      github: 'https://github.com/ghulam-tech',
      twitter: 'https://x.com/ghulam_eng'
    },
    location: 'Lead Website Builder',
    onlineStatusBadge: 'Available for Web Inquiries',
    active: true
  },
  {
    id: 'founder-2',
    name: 'Hamza',
    role: 'Co-Founder & Shop Systems Specialist',
    focus: 'Shop Billing (POS) & Shopify Online Stores',
    bio: 'Builds easy-to-use billing software for shops and retail stores with barcode scanning and instant receipt printing, alongside Shopify stores with Cash on Delivery.',
    expertise: ['Shop POS Billing', 'Shopify Stores', 'Barcode Scanners', 'Receipt Printers', 'Stock Tracking'],
    avatarUrl: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=600&q=80',
    socials: {
      linkedin: 'https://linkedin.com/in/hamza-product',
      github: 'https://github.com/hamza-builds',
      twitter: 'https://x.com/hamza_cpo'
    },
    location: 'Shop Software Lead',
    onlineStatusBadge: 'Configuring Client POS',
    active: true
  },
  {
    id: 'founder-3',
    name: 'Daniyal',
    role: 'Co-Founder & Growth Marketing Lead',
    focus: 'Google Page-1 Ranking, 12 Video Reels & Ads',
    bio: 'Helps businesses get more customers through Page-1 Google ranking, targeted Facebook/Instagram/Google ads, and 12 monthly video reels with viral hooks.',
    expertise: ['Google Ranking (SEO)', 'Facebook & Instagram Ads', '12 Video Reels/Mo', 'Google Ads', 'Monthly Reports'],
    avatarUrl: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=600&q=80',
    socials: {
      linkedin: 'https://linkedin.com/in/daniyal-ai',
      github: 'https://github.com/daniyal-dev',
      twitter: 'https://x.com/daniyal_ux'
    },
    location: 'Marketing & Video Lead',
    onlineStatusBadge: 'Scaling Client Ad Campaigns',
    active: true
  },
  {
    id: 'founder-4',
    name: 'Aqeel Ahmad',
    role: 'Lead Solutions Manager & Direct Client Contact',
    focus: 'Direct Client Communication & WhatsApp Support',
    bio: 'Your primary contact at BLUDS Agency. Available 24/7 on WhatsApp (03099489168) and email for quick quotes, project status, and questions in plain language.',
    expertise: ['WhatsApp: 03099489168', 'Direct Quotes', 'Fast Delivery', 'Zero Middlemen', 'Customer Support'],
    avatarUrl: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=600&q=80',
    socials: {
      linkedin: 'https://linkedin.com/in/aqeel-ahmad',
      github: 'https://github.com/aqeelahmad0105-dev',
      twitter: 'https://x.com/aqeel_bluds'
    },
    location: 'Client Solutions Lead',
    onlineStatusBadge: 'Online on WhatsApp: 03099489168',
    active: true
  }
];

export const initialServices: Service[] = [
  {
    id: 'srv-web-dev',
    title: 'Website Development',
    tagline: 'Fast, beautiful websites that look great on smartphones and turn visitors into paying customers.',
    iconName: 'Globe',
    badge: 'MOST POPULAR',
    shortDescription: 'Custom business website with mobile-friendly design, fast loading, domain, hosting, and WhatsApp inquiry buttons.',
    fullDescription: 'We design and build a clean, modern website specifically for your business. It works smoothly on all mobile phones, loads instantly, and includes your domain name, high-speed annual hosting, and direct WhatsApp messaging for new inquiries.',
    deliverables: [
      'One-time website creation: Rs. 20,000',
      'Monthly updates, security & maintenance: Rs. 10,000/month',
      'Domain name & cloud hosting setup: Rs. 7,000 - 8,000/year',
      '100% mobile-friendly on all phones and tablets',
      'WhatsApp chat button so customers can message you instantly',
      'Easy-to-use admin panel to view all customer inquiries'
    ],
    techStack: ['Mobile-Friendly Design', 'Fast Cloud Hosting', 'WhatsApp Button', 'Domain & Security', 'Admin Panel'],
    startingPrice: 'Rs. 20,000 setup + Rs. 10,000/mo',
    active: true,
    featured: true
  },
  {
    id: 'srv-pos',
    title: 'POS Software (Shop Billing)',
    tagline: 'Fast billing software for retail shops and supermarkets with barcode scanning and receipt printing.',
    iconName: 'Store',
    badge: 'RETAIL & SHOPS',
    shortDescription: 'Easy-to-use checkout software that scans barcodes, prints receipts in seconds, tracks stock, and records daily profit.',
    fullDescription: 'Say goodbye to slow handwritten receipts and inventory loss. Our custom POS software lets cashiers scan barcodes and print receipts in under 2 seconds. It automatically updates inventory, warns you when stock is low, supports multiple cashiers, and shows your daily sales and net profit.',
    deliverables: [
      'One-time software setup: Rs. 20,000',
      'Cloud backup & priority support: Rs. 3,000/month subscription',
      'Barcode scanner and thermal receipt printer setup',
      'Automatic inventory deduction when products are sold',
      'Daily, weekly, and monthly sales and profit/loss reports',
      'Multiple cashier accounts with shift closing summaries'
    ],
    techStack: ['Barcode Scanning', 'Receipt Printing', 'Inventory Tracking', 'Daily Profit Reports', 'Cashier Accounts'],
    startingPrice: 'Rs. 20,000 setup + Rs. 3,000/mo',
    active: true,
    featured: true
  },
  {
    id: 'srv-shopify',
    title: 'Shopify Store Setup',
    tagline: 'Get your products online with a complete Shopify store and Cash on Delivery.',
    iconName: 'ShoppingBag',
    badge: 'START SELLING',
    shortDescription: 'We set up your Shopify store, upload your products, connect your custom domain, and configure Cash on Delivery.',
    fullDescription: 'Start selling across the country. We configure your complete Shopify store, set up your product catalog, link your custom domain, enable Cash on Delivery (COD), and configure instant WhatsApp order notifications so you never miss a sale.',
    deliverables: [
      'One-time setup fee: Rs. 5,000',
      'Full online store setup with your custom brand logo and colors',
      'Cash on Delivery (COD) and courier delivery setup',
      'Product catalog, prices, and photo upload assistance',
      'WhatsApp and email notifications whenever a customer orders',
      'Fast, clean 1-click checkout on mobile phones'
    ],
    techStack: ['Shopify Store', 'Cash on Delivery (COD)', 'Domain Setup', 'WhatsApp Order Alerts', 'Product Catalog'],
    startingPrice: 'Rs. 5,000 (one-time)',
    active: true,
    featured: true
  },
  {
    id: 'srv-seo',
    title: 'SEO Optimization (Google Ranking)',
    tagline: 'Rank on Page 1 of Google so customers find your business before your competitors.',
    iconName: 'Search',
    badge: 'ORGANIC CALLS',
    shortDescription: 'We optimize your website to show up on Google search when local customers look for your products or services.',
    fullDescription: 'When people search for what you sell, they choose businesses on the first page of Google. We optimize your website, fix indexing issues, and get your business ranked high so you receive continuous calls and inquiries.',
    deliverables: [
      'Monthly service fee: Rs. 15,000/month',
      'Google Page-1 ranking optimization for your core services',
      'Google Search and Google Maps local business setup',
      'Fix all website errors that prevent Google from ranking you',
      'Target high-intent keywords that bring actual customers',
      'Clear monthly report showing your visitor increase & keyword rank'
    ],
    techStack: ['Google Search Console', 'Google Maps Business', 'Keyword Research', 'Monthly Reports'],
    startingPrice: 'Rs. 15,000 / month',
    active: true,
    featured: true
  },
  {
    id: 'srv-ads',
    title: 'Meta & Google Ads Management',
    tagline: 'Targeted ads on Facebook, Instagram & Google to bring you direct calls and orders.',
    iconName: 'Megaphone',
    badge: 'FAST SALES',
    shortDescription: 'We write, design, and manage high-converting ad campaigns that reach buyers interested in your business.',
    fullDescription: 'Stop wasting money on boosted posts that bring zero sales. We design professional ad creatives, write compelling offers, and run targeted campaigns on Facebook, Instagram, and Google Search to bring real customer calls and WhatsApp inquiries. (Note: Ad spend is paid directly to Facebook/Google).',
    deliverables: [
      'Monthly management fee: Rs. 12,000/month (ad budget paid by client)',
      'Facebook & Instagram ads setup with high-converting designs',
      'Google Search ads targeting customers actively searching to buy',
      'Eye-catching ad copy and persuasive promotional offers',
      'Sales and inquiry tracking so you know which ads perform best',
      'Weekly review and adjustments to get the most sales for your budget'
    ],
    techStack: ['Facebook Ads', 'Instagram Ads', 'Google Ads', 'WhatsApp Ad Funnel', 'Weekly Tracking'],
    startingPrice: 'Rs. 12,000 / month',
    active: true,
    featured: true
  },
  {
    id: 'srv-social-media',
    title: 'Social Media & Video Reels',
    tagline: '12 short video reels filmed & edited every month to grow your followers and brand.',
    iconName: 'Video',
    badge: 'VIRAL CONTENT',
    shortDescription: 'Professional video editing with viral hooks, trending music, and dynamic captions posted to Instagram, Facebook & TikTok.',
    fullDescription: 'Consistent short-form video is the #1 way to grow today. We write engaging hooks, professionally edit 12 short video reels each month with trending audio and subtitles, post them across your social platforms, and give you monthly growth reports.',
    deliverables: [
      'Monthly package: Rs. 20,000/month',
      '12 professionally edited video reels / shorts per month',
      'Viral hooks and captivating on-screen subtitles',
      'Trending music selection and hashtag strategy',
      'Publishing to Instagram, Facebook, and TikTok',
      'Monthly report showing views, follower growth, and engagement'
    ],
    techStack: ['12 Video Reels/Mo', 'Instagram & Facebook', 'TikTok', 'Trending Audio', 'Monthly Growth Analytics'],
    startingPrice: 'Rs. 20,000 / month',
    active: true,
    featured: true
  }
];

export const initialCaseStudies: CaseStudy[] = [
  {
    id: 'case-1',
    title: 'LuxeMart: Retail Shop Billing & POS Software',
    client: 'LuxeMart Superstore',
    category: 'POS Software',
    summary: 'Fast billing software for retail shops and supermarkets. Features barcode scanning, instant receipt printing, real-time inventory deduction, and daily profit tracking.',
    challenge: 'Long customer checkout queues during evening rush hours, frequent stock counting mistakes, and no way to know exact daily profits.',
    solution: 'Installed our custom desktop & tablet POS system with instant barcode scanning, thermal receipt printing, and daily profit/loss reports.',
    heroImage: 'https://images.unsplash.com/photo-1556742049-0a67c5574f73?auto=format&fit=crop&w=1200&q=80',
    tags: ['Live POS Software', 'Barcode Scanner', 'Thermal Receipts', 'Inventory Sync'],
    metrics: [
      { label: 'Billing Speed', value: '< 2.0s / bill' },
      { label: 'Stock Accuracy', value: '100% Synced' },
      { label: 'Daily Bills Processed', value: '3,800+' }
    ],
    techStack: ['Barcode Scanner', 'Thermal Printer', 'Inventory OS', 'Profit Reports'],
    liveUrl: 'https://luxemart-pos.vercel.app',
    videoTestimonial: {
      speakerName: 'Mian Tariq',
      role: 'General Manager',
      company: 'LuxeMart Superstore (Gulberg, Lahore)',
      posterImage: 'https://images.unsplash.com/photo-1556742049-0a67c5574f73?auto=format&fit=crop&w=800&q=80',
      duration: '0:45',
      rating: 5,
      quote: 'Hamza and the BLUDS team set up our entire supermarket checkout in 48 hours. Billing time dropped from 30 seconds to under 2 seconds per customer. Our evening cashier queues are completely smooth now.'
    },
    featured: true,
    active: true
  },
  {
    id: 'case-2',
    title: 'Aura Studio: High-Speed Architecture & Design Website',
    client: 'Aura Architecture Group',
    category: 'Web Development',
    summary: 'Custom mobile-friendly website with instant load speeds, clean modern layout, and direct WhatsApp customer inquiries.',
    challenge: 'Their previous template website took 7+ seconds to load, looked broken on mobile phones, and brought zero inquiries.',
    solution: 'Designed and built a fast custom website that loads in under 1 second, displays their project portfolio cleanly, and connects directly to WhatsApp.',
    heroImage: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80',
    tags: ['Live Website', 'Mobile Fast', 'WhatsApp Inquiries', 'Admin Panel'],
    metrics: [
      { label: 'Page Load Speed', value: '0.6 Seconds' },
      { label: 'Mobile Readiness', value: '100% Tested' },
      { label: 'New Client Leads', value: '+190%' }
    ],
    techStack: ['Custom Website', 'Fast Hosting', 'WhatsApp Routing', 'Admin Dashboard'],
    liveUrl: 'https://aurastudio.vercel.app',
    videoTestimonial: {
      speakerName: 'Ar. Zainab Malik',
      role: 'Principal Architect',
      company: 'Aura Architecture Group (F-7, Islamabad)',
      posterImage: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=800&q=80',
      duration: '0:38',
      rating: 5,
      quote: 'Ghulam built us a custom site that loads instantly on iPhones and showcases our design renderings with zero lag. In the first month alone, we received 14 qualified commercial inquiries through the WhatsApp button.'
    },
    featured: true,
    active: true
  },
  {
    id: 'case-3',
    title: 'Nova Streetwear: Ready-to-Sell Shopify E-Commerce Store',
    client: 'Nova Apparel Brand',
    category: 'Shopify & E-Commerce',
    summary: 'Live Shopify store with Cash on Delivery (COD) setup, automated WhatsApp order alerts, and mobile-friendly 1-click checkout.',
    challenge: 'Needed to get their clothing brand online quickly with trusted Pakistani Cash on Delivery checkout and mobile responsiveness.',
    solution: 'Configured complete Shopify store with brand logo, linked Cash on Delivery, set up courier shipping, and configured instant WhatsApp order notifications.',
    heroImage: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=1200&q=80',
    tags: ['Live Shopify Store', 'Cash on Delivery', '1-Click Checkout', 'WhatsApp Alerts'],
    metrics: [
      { label: 'Checkout Rate', value: '+36%' },
      { label: 'Cart Abandonment', value: '-29%' },
      { label: 'Monthly Online Sales', value: 'Rs. 3.8M+' }
    ],
    techStack: ['Shopify Store', 'Cash on Delivery (COD)', 'Domain Setup', 'Order Alerts'],
    liveUrl: 'https://nova-apparel-demo.myshopify.com',
    videoTestimonial: {
      speakerName: 'Usman Sheikh',
      role: 'Founder & CEO',
      company: 'Nova Apparel Brand (Karachi)',
      posterImage: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=800&q=80',
      duration: '0:52',
      rating: 5,
      quote: 'Setting up Cash on Delivery and Trax courier integration was completely seamless. We went from zero online sales to doing over Rs. 3.8M in our second month on Shopify.'
    },
    featured: true,
    active: true
  },
  {
    id: 'case-4',
    title: 'Apex Dental Care: Page-1 Google Local Search Ranking',
    client: 'Apex Specialty Clinics',
    category: 'SEO Optimization',
    summary: 'Ranked #1 on Google for high-intent local dental searches, driving direct patient calls and daily appointment bookings.',
    challenge: 'Clinic was invisible on Google search, relying only on expensive word-of-mouth with zero patients finding them online.',
    solution: 'Optimized their website and Google Maps business profile for local dental keywords, taking them to the #1 spot on Google.',
    heroImage: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=1200&q=80',
    tags: ['Live Clinic Site', 'Google Page 1', 'Google Maps Business', 'Patient Bookings'],
    metrics: [
      { label: 'Google Search Rank', value: '#1 on Google' },
      { label: 'Monthly Search Views', value: '+380%' },
      { label: 'Direct Patient Calls', value: '3.4x More Calls' }
    ],
    techStack: ['Google Search Console', 'Google Maps Business', 'Local Keyword Rank'],
    liveUrl: 'https://apex-dental.vercel.app',
    videoTestimonial: {
      speakerName: 'Dr. Haris Mehmood',
      role: 'Chief Dental Surgeon',
      company: 'Apex Dental Care (DHA Phase 5, Lahore)',
      posterImage: 'https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&w=800&q=80',
      duration: '0:41',
      rating: 5,
      quote: 'Within 60 days of Daniyal managing our local SEO, Apex Dental ranked #1 on Google for dental implants and cosmetic dentistry in Lahore. Direct patient bookings tripled.'
    },
    featured: false,
    active: true
  },
  {
    id: 'case-5',
    title: 'Skyline Properties: High-ROI Meta & Google Ads Campaign',
    client: 'Skyline Real Estate',
    category: 'Meta & Google Ads',
    summary: 'Targeted Facebook, Instagram, and Google Search ad campaigns delivering verified buyer leads directly to the sales team WhatsApp.',
    challenge: 'Wasting budget on boosted posts that generated thousands of views but zero serious property buyer inquiries.',
    solution: 'Structured targeted lead generation ads on Facebook, Instagram, and Google Search with pre-qualifying questions to capture serious buyers.',
    heroImage: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=1200&q=80',
    tags: ['Live Ads Campaign', 'Verified Buyer Leads', 'WhatsApp Funnel', 'Weekly Tracking'],
    metrics: [
      { label: 'Return on Ad Spend', value: '5.2x Return' },
      { label: 'Cost Per Real Lead', value: 'Rs. 360 / lead' },
      { label: 'Property Sales Closed', value: 'Rs. 22M+' }
    ],
    techStack: ['Facebook Ads', 'Instagram Ads', 'Google Ads', 'WhatsApp Funnel'],
    liveUrl: 'https://skyline-properties.vercel.app',
    videoTestimonial: {
      speakerName: 'Chaudhry Bilal',
      role: 'Managing Director',
      company: 'Skyline Properties (Bahria Town)',
      posterImage: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=800&q=80',
      duration: '0:49',
      rating: 5,
      quote: 'BLUDS ran our Meta & Google search campaigns with real buyer filters. Instead of time-wasters, our sales team closed Rs. 22M in verified property and villa bookings.'
    },
    featured: false,
    active: true
  },
  {
    id: 'case-6',
    title: 'Glow Essentials: 12 Monthly Reels & Social Media Growth',
    client: 'Glow Organic Skincare',
    category: 'Social Media',
    summary: '12 professionally produced and edited video reels per month with trending audio and viral hooks, generating over 600k views.',
    challenge: 'Stagnant social media accounts with low reach, inconsistent posting, and zero video content to showcase skincare results.',
    solution: 'Produced and edited 12 short video reels each month with eye-catching hooks, clean subtitles, and trending audio, published across Instagram & TikTok.',
    heroImage: 'https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&w=1200&q=80',
    tags: ['12 Reels / Month', 'Viral Video Hooks', 'Instagram & TikTok', 'Monthly Analytics'],
    metrics: [
      { label: 'Reels Created', value: '12 / Month' },
      { label: 'Reel Video Views', value: '620,000+' },
      { label: 'New Brand Followers', value: '+28,500' }
    ],
    techStack: ['Video Editing', 'Trending Audio', 'Instagram & TikTok', 'Monthly Analytics'],
    liveUrl: 'https://glow-essentials.vercel.app',
    videoTestimonial: {
      speakerName: 'Mahnoor Khan',
      role: 'Brand Director',
      company: 'Glow Organic Skincare',
      posterImage: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=800&q=80',
      duration: '0:36',
      rating: 5,
      quote: 'Their 12 monthly video reels with viral hooks completely transformed our Instagram. One reel hit 340,000 views, bringing thousands of new customers without paying for ads.'
    },
    featured: false,
    active: true
  }
];

export const initialTestimonials: Testimonial[] = [
  {
    id: 'test-1',
    clientName: 'Rashid Mahmood',
    role: 'Owner',
    company: 'LuxeMart Superstore',
    location: 'Lahore, Pakistan',
    rating: 5,
    quote: 'The POS billing software completely solved our evening rush. Billing that used to take 2 minutes now takes 2 seconds with the barcode scanner and thermal printer. Hamza set everything up at our shop seamlessly.',
    avatarUrl: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80',
    projectDelivered: 'Shop POS Software & Barcode System',
    active: true
  },
  {
    id: 'test-2',
    clientName: 'Ayesha Siddiqui',
    role: 'Founder',
    company: 'Nova Apparel Brand',
    location: 'Karachi, Pakistan',
    rating: 5,
    quote: 'BLUDS set up our Shopify store with Cash on Delivery in just 2 days. The 12 video reels Daniyal produces each month gave our brand instant credibility and orders started coming in immediately.',
    avatarUrl: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80',
    projectDelivered: 'Shopify Store + 12 Reels Monthly',
    active: true
  },
  {
    id: 'test-3',
    clientName: 'Bilal Chaudhry',
    role: 'Managing Director',
    company: 'Skyline Real Estate',
    location: 'Islamabad, Pakistan',
    rating: 5,
    quote: 'Ghulam built our company website and it loads instantly on mobile. Daniyal manages our Facebook and Google ads, delivering serious buyer inquiries every single day. Honest pricing with zero hidden fees.',
    avatarUrl: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&q=80',
    projectDelivered: 'Custom Website + Meta & Google Ads',
    active: true
  },
  {
    id: 'test-4',
    clientName: 'Dr. Usman Farooq',
    role: 'Head Dentist',
    company: 'Apex Specialty Clinics',
    location: 'Faisalabad, Pakistan',
    rating: 5,
    quote: 'Our clinic is now ranked #1 on Google when people search for dentists in our area. We receive direct calls and patient appointments every day through Google Maps. Highly recommend BLUDS Agency.',
    avatarUrl: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=200&q=80',
    projectDelivered: 'Google Page-1 SEO Optimization',
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
        author: 'Ghulam (Web Lead)',
        content: 'Reviewing domain selection and hosting package (Rs. 7,000 - 8,000/yr). Prepared Next.js design preview.',
        createdAt: '2026-11-08T10:00:00.000Z'
      }
    ],
    estimatedScope: 'Custom website, mobile layout, domain, and annual cloud hosting setup.'
  },
  {
    id: 'inq-102',
    clientName: 'Kamran Rafiq',
    email: 'kamran@metromart.pk',
    phone: '+92 300 8899112',
    company: 'Metro Mart Superstore',
    projectType: 'POS Software (Shop Billing)',
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
        author: 'Hamza (POS Lead)',
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
