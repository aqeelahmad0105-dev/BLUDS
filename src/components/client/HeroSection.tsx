import React, { useState } from 'react';
import { useAgency } from '../../context/AgencyContext';
import {
  ArrowRight,
  Globe,
  TrendingUp,
  ShoppingBag,
  Store,
  CheckCircle2,
  MessageSquare,
  Sparkles
} from 'lucide-react';

const HeroScene3D = React.lazy(() =>
  import('./HeroScene3D').then((m) => ({ default: m.HeroScene3D }))
);

export const HeroSection: React.FC = () => {
  const { siteSettings } = useAgency();
  const [activeSolution, setActiveSolution] = useState<'website' | 'marketing' | 'shopify' | 'pos'>('website');

  const scrollTo = (id: string) => {
    const el = document.querySelector(id);
    el?.scrollIntoView({ behavior: 'smooth' });
  };

  const solutionConfigs = {
    website: {
      title: 'Business Websites That Turn Visitors Into Buyers',
      spec: 'Rs. 20,000 one-time setup • Rs. 10,000/mo ongoing care • Rs. 7,000-8,000/yr hosting',
      badge: 'Delivered in 1 - 2 Weeks',
      metrics: [
        { label: 'Mobile Optimized', value: '100%' },
        { label: 'Page Load Speed', value: 'Instant' },
        { label: 'Domain & Hosting', value: 'Included' },
        { label: 'WhatsApp Inquiries', value: 'Direct' },
      ],
      nodes: [
        { name: 'Custom Design', role: 'Built from scratch for your brand, not a generic copied template' },
        { name: 'Fast on Mobile Phones', role: 'Loads in under a second so customers do not bounce away' },
        { name: 'WhatsApp & Contact Forms', role: 'Customer inquiries go directly to your WhatsApp and phone' },
        { name: 'Full Maintenance', role: 'We keep your site secure, updated, and always running smoothly' },
      ],
    },
    marketing: {
      title: 'Google Page-1 Ranking & High-Sales Social Ads',
      spec: 'SEO: Rs. 15,000/mo • Meta Ads: Rs. 12,000/mo • 12 Video Reels: Rs. 20,000/mo',
      badge: 'Measurable Results',
      metrics: [
        { label: 'Google Search', value: 'Page #1' },
        { label: 'Monthly Video Reels', value: '12 Videos' },
        { label: 'Targeted Buyers', value: 'Verified' },
        { label: 'Progress Reports', value: 'Monthly' },
      ],
      nodes: [
        { name: 'Google Page-1 SEO', role: 'When local customers search for your service, you appear on top' },
        { name: 'Meta & Google Ads', role: 'Targeted Facebook, Instagram & Google ads to get direct leads' },
        { name: '12 Viral Video Reels', role: 'Professional short-form reels with hooks & captions to grow fans' },
        { name: 'Simple Monthly Reports', role: 'Clear breakdown showing your exact reach, calls, and new clients' },
      ],
    },
    shopify: {
      title: 'Ready-to-Sell Shopify Store with Cash on Delivery',
      spec: 'Rs. 5,000 One-Time Setup • Fully Configured & Ready to Sell',
      badge: 'Start Selling Today',
      metrics: [
        { label: 'Setup Timeline', value: '2 - 3 Days' },
        { label: 'Cash on Delivery', value: 'Configured' },
        { label: 'Product Catalog', value: 'Synced' },
        { label: 'Order Alerts', value: 'WhatsApp' },
      ],
      nodes: [
        { name: 'Complete Store Setup', role: 'Brand logo, clean layout, policies, and domain connection' },
        { name: 'Cash on Delivery (COD)', role: 'Configured for Pakistani courier services and easy customer checkout' },
        { name: 'Inventory Management', role: 'Stock reduces automatically whenever a customer places an order' },
        { name: 'WhatsApp Notifications', role: 'Instant alerts sent to you whenever a new order is received' },
      ],
    },
    pos: {
      title: 'Point of Sale (POS) Billing Software for Shops',
      spec: 'Rs. 20,000 One-Time License • Rs. 3,000/mo Cloud Backup & Support',
      badge: 'For Retail & Superstores',
      metrics: [
        { label: 'Checkout Speed', value: '< 2 Seconds' },
        { label: 'Barcode Scanner', value: 'Supported' },
        { label: 'Receipt Printer', value: 'Supported' },
        { label: 'Daily Profit Reports', value: 'Automated' },
      ],
      nodes: [
        { name: 'Fast Barcode Checkout', role: 'Scan products and print receipts in under 2 seconds during rush hours' },
        { name: 'Thermal Receipt Printing', role: 'Works seamlessly with standard 80mm & 58mm thermal receipt printers' },
        { name: 'Inventory Tracking', role: 'Tracks stock levels and gives low-stock alerts before items run out' },
        { name: 'Daily Profit & Loss Reports', role: 'Know your exact daily sales, cashier shift totals, and net profit' },
      ],
    },
  };

  const currentSolution = solutionConfigs[activeSolution];

  return (
    <section id="top" className="pt-12 pb-16 md:pt-20 md:pb-24 bg-black text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Content Hero Header */}
        <div className="max-w-3xl mx-auto text-center space-y-5">
          
          {/* Trust Badge */}
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#111111] border border-[#262626] text-xs text-neutral-300">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
            <span>Direct WhatsApp Support: 03099489168 • Founded by Ghulam, Hamza & Daniyal</span>
          </div>

          {/* Slogan & Main Heading (100% Layman, Clear & Punchy) */}
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-tight">
            We Build Websites, Shop Billing Software & Run Ads That{' '}
            <span className="text-blue-500">
              Actually Bring You Customers.
            </span>
          </h1>

          {/* Subtitle in plain everyday language */}
          <p className="text-base sm:text-lg text-neutral-400 font-normal leading-relaxed max-w-2xl mx-auto">
            No confusing tech jargon, no hidden fees. We help shops, retail brands, and service businesses get online, speed up billing, and increase daily sales with transparent pricing in PKR.
          </p>

          {/* Action Buttons (Real working actions) */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-3">
            <a
              href="https://wa.me/923099489168?text=Hello%20Aqeel%2C%20I%20am%20interested%20in%20discussing%20a%20project%20with%20BLUDS%20Agency."
              target="_blank"
              rel="noreferrer"
              className="w-full sm:w-auto px-6 py-3.5 rounded-lg bg-[#25D366] hover:bg-[#20bd5a] text-black font-bold text-sm transition-all flex items-center justify-center gap-2 shadow-lg"
            >
              <MessageSquare className="w-4 h-4 fill-black" />
              <span>Chat on WhatsApp (03099489168)</span>
            </a>

            <button
              onClick={() => scrollTo('#services')}
              className="w-full sm:w-auto px-6 py-3.5 rounded-lg bg-[#141414] hover:bg-[#1a1a1a] text-neutral-200 border border-[#262626] hover:border-neutral-700 font-medium text-sm transition-colors flex items-center justify-center gap-2"
            >
              <span>See Services & Pricing</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          {/* Honest Value Commitments */}
          <div className="pt-3 flex flex-wrap items-center justify-center gap-6 text-xs text-neutral-400">
            <div className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-emerald-400" />
              <span>Honest Rates in PKR (No Hidden Costs)</span>
            </div>
            <div className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-emerald-400" />
              <span>Fast 1 - 2 Week Turnaround</span>
            </div>
            <div className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-emerald-400" />
              <span>You Own 100% of Your Website & Accounts</span>
            </div>
          </div>
        </div>

        {/* ============================================================== */}
        {/* INTERACTIVE SOLUTIONS SHOWCASE & 3D VISUALIZER                 */}
        {/* ============================================================== */}
        <div className="mt-12 max-w-5xl mx-auto">
          <div className="rounded-2xl bg-[#0c0c0c] border border-[#222222] overflow-hidden">
            
            {/* Switcher Navigation */}
            <div className="bg-[#121212] px-4 py-3 border-b border-[#222222] flex flex-col md:flex-row md:items-center justify-between gap-3">
              <div className="text-xs font-semibold text-neutral-300">
                Choose a Service to Explore:
              </div>

              {/* Solution Selectors */}
              <div className="flex items-center gap-1.5 overflow-x-auto pb-1 md:pb-0">
                {[
                  { id: 'website', label: '1. Business Website', icon: Globe },
                  { id: 'pos', label: '2. Shop POS Billing', icon: Store },
                  { id: 'shopify', label: '3. Shopify Store', icon: ShoppingBag },
                  { id: 'marketing', label: '4. Ads & Reels', icon: TrendingUp },
                ].map((tab) => {
                  const Icon = tab.icon;
                  const isActive = activeSolution === tab.id;
                  return (
                    <button
                      key={tab.id}
                      onClick={() => setActiveSolution(tab.id as any)}
                      className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs transition-colors whitespace-nowrap font-medium ${
                        isActive
                          ? 'bg-blue-600 text-white shadow-sm'
                          : 'text-neutral-400 hover:text-white hover:bg-neutral-800'
                      }`}
                    >
                      <Icon className="w-3.5 h-3.5" />
                      <span>{tab.label}</span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Solution Interior */}
            <div className="p-6 sm:p-8 space-y-6">
              
              {/* Title & Pricing Guidance */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-4 border-b border-[#1f1f1f]">
                <div>
                  <h3 className="text-lg sm:text-xl font-bold text-white">
                    {currentSolution.title}
                  </h3>
                  <p className="text-xs text-neutral-400 mt-0.5">
                    {currentSolution.spec}
                  </p>
                </div>
                <span className="text-xs font-mono text-emerald-400 bg-emerald-950/60 border border-emerald-800 px-2.5 py-1 rounded self-start sm:self-auto">
                  {currentSolution.badge}
                </span>
              </div>

              {/* Main 3D Canvas + Feature Breakdown */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
                {/* Interactive 3D Model Showcase (Stops automatically when out of focus) */}
                <div className="lg:col-span-5 h-[300px] sm:h-[350px] rounded-xl bg-[#080808] border border-[#222222] overflow-hidden relative">
                  <React.Suspense
                    fallback={
                      <div className="w-full h-full flex flex-col items-center justify-center gap-2 text-xs font-mono text-neutral-500">
                        <span className="w-2 h-2 rounded-full bg-blue-500 animate-ping" />
                        <span>Loading 3D Visualizer...</span>
                      </div>
                    }
                  >
                    <HeroScene3D activeMode={activeSolution === 'website' ? 'cloud' : activeSolution === 'marketing' ? 'ai' : activeSolution === 'shopify' ? 'mobile' : 'enterprise'} />
                  </React.Suspense>
                </div>

                {/* What You Get in Layman Language */}
                <div className="lg:col-span-7 space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {currentSolution.nodes.map((node, index) => (
                      <div
                        key={index}
                        className="p-3.5 rounded-lg bg-[#111111] border border-[#222222] flex flex-col justify-between"
                      >
                        <div>
                          <div className="text-xs font-semibold text-white flex items-center gap-1.5 mb-1">
                            <span className="w-1.5 h-1.5 rounded-full bg-blue-500" />
                            <span>{node.name}</span>
                          </div>
                          <div className="text-xs text-neutral-400 leading-relaxed">
                            {node.role}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Highlights Summary */}
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 pt-1">
                    {currentSolution.metrics.map((metric, idx) => (
                      <div
                        key={idx}
                        className="p-2.5 rounded-lg bg-[#111111] border border-[#222222] text-center"
                      >
                        <div className="text-sm sm:text-base font-bold text-white">
                          {metric.value}
                        </div>
                        <div className="text-[11px] text-neutral-400 mt-0.5">
                          {metric.label}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

            </div>

            {/* Bottom Direct Inquiry Bar */}
            <div className="px-6 py-3.5 bg-[#111111] border-t border-[#1f1f1f] flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-neutral-300">
              <span className="text-neutral-400">
                Want this for your business? Speak directly with our lead engineer:
              </span>
              <a
                href={`https://wa.me/923099489168?text=${encodeURIComponent(
                  `Hello Aqeel, I am interested in ${currentSolution.title} for my business.`
                )}`}
                target="_blank"
                rel="noreferrer"
                className="text-emerald-400 hover:text-emerald-300 font-semibold flex items-center gap-1.5 transition-colors whitespace-nowrap"
              >
                <MessageSquare className="w-3.5 h-3.5" />
                <span>Chat with Aqeel Ahmad on WhatsApp</span>
              </a>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
