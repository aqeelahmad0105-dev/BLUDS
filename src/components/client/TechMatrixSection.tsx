import React, { useState } from 'react';
import { 
  Globe, 
  Store, 
  ShoppingBag, 
  Search, 
  Megaphone, 
  Video, 
  CheckCircle2, 
  ShieldCheck
} from 'lucide-react';

interface TechItem {
  name: string;
  role: string;
  benchmark: string;
  description: string;
  leadFounder: string;
}

export const TechMatrixSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>('web');

  const categories = [
    { id: 'web', label: 'Website Development', icon: Globe },
    { id: 'pos', label: 'POS Software Systems', icon: Store },
    { id: 'shopify', label: 'Shopify & E-Commerce', icon: ShoppingBag },
    { id: 'seo', label: 'SEO Optimization', icon: Search },
    { id: 'ads', label: 'Meta & Google Ads', icon: Megaphone },
    { id: 'social', label: 'Social Media & Reels', icon: Video },
  ];

  const stacksData: Record<string, TechItem[]> = {
    web: [
      {
        name: 'Next.js 14 & React 19',
        role: 'Server Components & Speed Architecture',
        benchmark: '98/100 PageSpeed Rating',
        description: 'Blazing fast server-rendered web applications with instant client hydration and automated responsive asset delivery.',
        leadFounder: 'Ghulam (CTO)',
      },
      {
        name: 'Tailwind CSS & Modern Motion',
        role: 'Clean UI & 3D Interactive Polish',
        benchmark: 'Zero Unused CSS',
        description: 'Custom component design systems with responsive layouts, smooth micro-animations, and subtle 3D hover interactions.',
        leadFounder: 'Daniyal (Creative Lead)',
      },
      {
        name: 'TypeScript & Node.js',
        role: 'Type-Safe Application Logic',
        benchmark: '100% Compile Verification',
        description: 'End-to-end typed codebases preventing runtime errors and ensuring long-term maintainability for corporate websites.',
        leadFounder: 'Ghulam (CTO)',
      },
      {
        name: 'Cloud Fast Hosting & SSL',
        role: 'Annual Hosting & Maintenance',
        benchmark: '99.99% Uptime SLA',
        description: 'High-speed cloud server deployment with automated SSL certificates, custom domain linkage, and daily security backups.',
        leadFounder: 'Ghulam (CTO)',
      },
    ],
    pos: [
      {
        name: 'Desktop & Tablet POS Engine',
        role: 'Retail, Supermarket & Restaurant Billing',
        benchmark: '< 2.0s Instant Checkout',
        description: 'Offline-first Point of Sale application designed for fast cashier operations with zero lag during peak store hours.',
        leadFounder: 'Hamza (Solutions Lead)',
      },
      {
        name: 'Barcode Scanning & Lookup',
        role: 'Rapid Product Identification',
        benchmark: '0.1s Fast Scan Latency',
        description: 'USB and wireless barcode scanner integration with instant SKU lookup, multi-variant pricing, and discount calculations.',
        leadFounder: 'Hamza (Solutions Lead)',
      },
      {
        name: 'Thermal ESC/POS Receipt Printing',
        role: 'Custom Receipt & Bill Printing',
        benchmark: 'Instant Paper Cut',
        description: 'Direct USB/LAN/Bluetooth thermal printer integration with customized business headers, QR codes, and tax calculations.',
        leadFounder: 'Hamza (Solutions Lead)',
      },
      {
        name: 'Inventory Sync & Daily P&L',
        role: 'Stock Tracking & Shift Reports',
        benchmark: 'Zero Stock Discrepancies',
        description: 'Automated stock deduction on each sale, low-inventory notifications, cashier drawer reconciliation, and cloud reports.',
        leadFounder: 'Hamza (Solutions Lead)',
      },
    ],
    shopify: [
      {
        name: 'Shopify Storefront & Theme Setup',
        role: 'E-Commerce Store Architecture',
        benchmark: 'Mobile-Optimized UX',
        description: 'Connecting custom domains to Shopify, configuring high-converting theme layouts, and organizing clean product collections.',
        leadFounder: 'Hamza (Solutions Lead)',
      },
      {
        name: 'Payment Gateways & COD Linkage',
        role: 'Checkout & Transaction Processing',
        benchmark: '1-Click Mobile Checkout',
        description: 'Integration of Cash on Delivery (COD), local bank transfers, and international payment gateways with fraud protection.',
        leadFounder: 'Hamza (Solutions Lead)',
      },
      {
        name: 'Webhook & Inventory Auto-Sync',
        role: 'Real-Time Store Synchronicity',
        benchmark: 'Sub-Second Webhook Sync',
        description: 'Automated synchronization between Shopify orders, product catalogs, and warehouse inventory levels via webhooks.',
        leadFounder: 'Ghulam (CTO)',
      },
      {
        name: 'WhatsApp Order Notifications',
        role: 'Customer Engagement & Alerts',
        benchmark: 'Instant Dispatch Alerts',
        description: 'Triggering automated WhatsApp order confirmation and delivery status notifications to boost customer trust and retention.',
        leadFounder: 'Daniyal (Creative Lead)',
      },
    ],
    seo: [
      {
        name: 'Google Search Console & Indexing',
        role: 'Technical Search Architecture',
        benchmark: 'Page-1 Ranking Target',
        description: 'Fixing crawl errors, submitting dynamic XML sitemaps, and establishing clean canonical URLs for high Google visibility.',
        leadFounder: 'Daniyal (Marketing Lead)',
      },
      {
        name: 'Keyword Research & Competitor Mapping',
        role: 'High-Intent Search Targeting',
        benchmark: 'Commercial Intent Focus',
        description: 'Identifying buyer-intent keywords that competitors are ranking for and building targeted on-page content structures.',
        leadFounder: 'Daniyal (Marketing Lead)',
      },
      {
        name: 'Schema.org & Meta Tags Optimization',
        role: 'Rich Snippets & CTR Enhancement',
        benchmark: '+35% Organic Click-Through',
        description: 'Implementing structured data markup (LocalBusiness, Organization, FAQs) so your website stands out with Google rich snippets.',
        leadFounder: 'Ghulam (CTO)',
      },
      {
        name: 'Google Analytics 4 & Ranking Reports',
        role: 'Monthly Search Growth Analytics',
        benchmark: 'Transparent Monthly Audits',
        description: 'Tracking keyword position movements, organic impressions, user engagement, and sending actionable monthly ranking reports.',
        leadFounder: 'Daniyal (Marketing Lead)',
      },
    ],
    ads: [
      {
        name: 'Meta Ads Manager (Facebook & Instagram)',
        role: 'Lead Generation & E-Commerce Sales',
        benchmark: '4.5x - 5.5x Target ROAS',
        description: 'Structuring campaign funnels (Top/Middle/Bottom of Funnel) with high-converting video hooks, carousel ads, and lead forms.',
        leadFounder: 'Daniyal (Marketing Lead)',
      },
      {
        name: 'Google Search & Performance Max (PMax)',
        role: 'High-Intent Buyer Acquisition',
        benchmark: 'Top Search Placement',
        description: 'Capturing active searchers who are ready to buy your services or products right now with optimized negative keywords and bidding.',
        leadFounder: 'Daniyal (Marketing Lead)',
      },
      {
        name: 'Meta Pixel & Conversion API (CAPI)',
        role: 'Server-Side Event Tracking',
        benchmark: '100% Data Capture',
        description: 'Setting up Conversion API to bypass iOS tracking blocks, ensuring your ad algorithms receive accurate purchase and lead data.',
        leadFounder: 'Ghulam (CTO)',
      },
      {
        name: 'Weekly A/B Creative Testing',
        role: 'Ad Spend Optimization',
        benchmark: 'Lowest Cost Per Acquisition',
        description: 'Continual split-testing of hooks, copy, video angles, and target audiences to maximize results while client funds ad spend.',
        leadFounder: 'Daniyal (Marketing Lead)',
      },
    ],
    social: [
      {
        name: '12 Viral Short-Form Reels / Month',
        role: 'TikTok, Instagram & Facebook Video Content',
        benchmark: '12 Produced Videos / Mo',
        description: 'Scripting, recording guidelines, and editing 12 high-retention short-form reels each month to build massive organic reach.',
        leadFounder: 'Daniyal (Creative Lead)',
      },
      {
        name: 'Professional Video Editing & Hooks',
        role: 'High Retention & Dynamic Captions',
        benchmark: 'Sub-3s Hook Rate',
        description: 'Using Premiere Pro & CapCut with dynamic jump cuts, bold captions, sound effects, and trending audio to maximize watch time.',
        leadFounder: 'Daniyal (Creative Lead)',
      },
      {
        name: 'Trending Audio & Algorithm Optimization',
        role: 'Explore & For-You Page Distribution',
        benchmark: 'Viral Distribution Reach',
        description: 'Aligning video releases with active trending audio tracks and hashtag clusters that trigger algorithmic discovery.',
        leadFounder: 'Daniyal (Creative Lead)',
      },
      {
        name: 'Monthly Social Analytics & Insights',
        role: 'Account Growth Performance Report',
        benchmark: 'Monthly Data Breakdown',
        description: 'Detailed monthly report covering views, follower growth, audience demographics, and top-performing reel metrics.',
        leadFounder: 'Daniyal (Creative Lead)',
      },
    ],
  };

  const currentItems = stacksData[activeTab] || stacksData['web'];

  return (
    <section id="technology" className="py-20 bg-black text-white border-t border-[#1f1f1f]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="max-w-2xl">
            <span className="text-xs font-mono font-medium text-blue-500 uppercase tracking-wider block mb-2">
              Technology & Delivery Stacks
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
              Engineered for Measurable Commercial Results
            </h2>
            <p className="text-neutral-400 text-sm sm:text-base mt-3">
              We select battle-tested tools engineered for maximum speed, reliable POS operations, and high-ROI digital marketing.
            </p>
          </div>

          <div className="flex items-center gap-2 text-xs font-mono text-neutral-300 bg-[#0c0c0c] border border-[#222222] px-3.5 py-2 rounded-lg self-start md:self-auto">
            <ShieldCheck className="w-4 h-4 text-blue-500" />
            <span>100% Client Ownership • Direct Founder Execution</span>
          </div>
        </div>

        {/* Category Tabs */}
        <div className="flex gap-2 overflow-x-auto pb-3 mb-8">
          {categories.map((cat) => {
            const Icon = cat.icon;
            const isActive = activeTab === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setActiveTab(cat.id)}
                className={`flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-medium whitespace-nowrap transition-colors border ${
                  isActive
                    ? 'bg-blue-600 text-white border-blue-500'
                    : 'bg-[#0c0c0c] text-neutral-400 border-[#222222] hover:text-white hover:border-neutral-700'
                }`}
              >
                <Icon className="w-3.5 h-3.5" />
                <span>{cat.label}</span>
              </button>
            );
          })}
        </div>

        {/* Stack Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {currentItems.map((item, idx) => (
            <div
              key={idx}
              className="p-5 rounded-xl bg-[#0c0c0c] border border-[#222222] flex flex-col justify-between"
            >
              <div>
                <div className="flex items-start justify-between gap-3 mb-2">
                  <div>
                    <h3 className="text-base font-semibold text-white">
                      {item.name}
                    </h3>
                    <div className="text-xs text-neutral-400 mt-0.5">
                      {item.role}
                    </div>
                  </div>

                  <span className="px-2.5 py-0.5 rounded text-[11px] font-mono bg-[#141414] text-neutral-300 border border-[#262626] shrink-0">
                    {item.benchmark}
                  </span>
                </div>

                <p className="text-xs text-neutral-400 leading-relaxed mb-4">
                  {item.description}
                </p>
              </div>

              <div className="pt-3 border-t border-[#1c1c1c] flex items-center justify-between text-xs font-mono text-neutral-500">
                <span>Lead: <strong className="text-neutral-300">{item.leadFounder}</strong></span>
                <span className="text-blue-400 flex items-center gap-1">
                  <span>Verified</span>
                  <CheckCircle2 className="w-3.5 h-3.5 text-blue-500" />
                </span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
