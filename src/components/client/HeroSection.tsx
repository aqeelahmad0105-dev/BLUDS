import React, { useState } from 'react';
import { useAgency } from '../../context/AgencyContext';
import {
  ArrowRight,
  Shield,
  Globe,
  TrendingUp,
  ShoppingBag,
  Store,
  CheckCircle2,
  Lock,
  ArrowUpRight
} from 'lucide-react';
import { HeroScene3D } from './HeroScene3D';

export const HeroSection: React.FC = () => {
  const { siteSettings } = useAgency();
  const [activeArchitecture, setActiveArchitecture] = useState<'cloud' | 'ai' | 'mobile' | 'enterprise'>('cloud');

  const scrollTo = (id: string) => {
    const el = document.querySelector(id);
    el?.scrollIntoView({ behavior: 'smooth' });
  };

  const architectureConfigs = {
    cloud: {
      title: 'Website Development & Speed Architecture',
      spec: 'Next.js 14 • React 19 • 95+ Google PageSpeed • Mobile Responsive',
      metrics: [
        { label: 'PageSpeed Score', value: '98 / 100' },
        { label: 'Load Latency', value: '< 0.5s' },
        { label: 'Uptime SLA', value: '99.99%' },
        { label: 'Mobile Readiness', value: '100% Tested' },
      ],
      nodes: [
        { name: 'Next.js Server Components', role: 'Sub-Second Edge Page Rendering', status: 'Optimal' },
        { name: 'Tailwind CSS UI Engine', role: 'Clean, Ultra-Fast Responsive Design', status: 'Active' },
        { name: 'Inquiry & Admin CMS', role: 'Direct WhatsApp & Lead Routing', status: 'Online' },
        { name: 'Cloud Fast Hosting', role: 'Automated SSL & Domain Infrastructure', status: 'Healthy' },
      ],
    },
    ai: {
      title: 'SEO Dominance & Meta/Google Ads Engine',
      spec: 'Page-1 Google Ranking • High-Converting Meta Ads • 12 Viral Reels/Mo',
      metrics: [
        { label: 'Average ROAS', value: '4.8x - 5.5x' },
        { label: 'Google Search Rank', value: '#1 Ranking' },
        { label: 'Reels Created', value: '12 / Month' },
        { label: 'Analytics Sync', value: 'GA4 & CAPI' },
      ],
      nodes: [
        { name: 'Google Search Console', role: 'Keyword & Indexing Architecture', status: 'Ranked' },
        { name: 'Meta Pixel & CAPI', role: 'High-Intent Retargeting & Tracking', status: 'Active' },
        { name: 'Viral Reel Production', role: '12 Short-Form Videos with Hooks', status: 'Producing' },
        { name: 'ROAS Optimization Engine', role: 'Weekly Creative & Bid Adjustments', status: 'Optimizing' },
      ],
    },
    mobile: {
      title: 'Shopify Store Connection & E-Commerce Flow',
      spec: 'Storefront Connection • Payment Gateway & COD • Automated Webhooks',
      metrics: [
        { label: 'Checkout Conversion', value: '+35%' },
        { label: 'Cart Abandonment', value: '-28%' },
        { label: 'Catalog Sync', value: 'Real-Time' },
        { label: 'Setup Timeline', value: '1 - 3 Days' },
      ],
      nodes: [
        { name: 'Shopify Storefront API', role: 'Custom Domain & Catalog Mapping', status: 'Connected' },
        { name: 'Payment Gateways & COD', role: 'Frictionless 1-Click Mobile Checkout', status: 'Active' },
        { name: 'Inventory Webhook Pipeline', role: 'Automatic Stock & Order Deduction', status: 'Synced' },
        { name: 'WhatsApp Order Alerts', role: 'Instant Customer Order Notifications', status: 'Enabled' },
      ],
    },
    enterprise: {
      title: 'Point of Sale (POS) Software & Inventory OS',
      spec: 'Desktop & Tablet Billing • Barcode Scanning • Multi-Counter Sync',
      metrics: [
        { label: 'Billing Speed', value: '< 2.0s / bill' },
        { label: 'Inventory Leakage', value: '0% Discrepancy' },
        { label: 'Offline Resilience', value: '100% Offline-Safe' },
        { label: 'Subscription Rate', value: 'Rs. 3,000/mo' },
      ],
      nodes: [
        { name: 'Fast Billing Engine', role: 'Instant Barcode Scan & Cashier Checkout', status: 'Active' },
        { name: 'Thermal ESC/POS Printer', role: 'High-Speed Custom Receipt Printing', status: 'Ready' },
        { name: 'Stock & Inventory Vault', role: 'Real-Time Low Stock & Wastage Alerts', status: 'Synced' },
        { name: 'Cloud P&L Sync Hub', role: 'Daily Sales, Shifts & Profit Analytics', status: 'Protected' },
      ],
    },
  };

  const currentArch = architectureConfigs[activeArchitecture];

  return (
    <section id="top" className="pt-16 pb-20 md:pt-24 md:pb-28 bg-black text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Content */}
        <div className="max-w-3xl mx-auto text-center space-y-6">
          
          {/* Subtle Status Pill */}
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#111111] border border-[#262626] text-xs text-neutral-300">
            <span className="w-1.5 h-1.5 rounded-full bg-blue-500" />
            <span>Founded by 3 Engineers • Lead WhatsApp: 03099489168</span>
          </div>

          {/* Heading */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-tight">
            High-Performance Websites, POS Software &{' '}
            <span className="text-blue-500">
              Digital Growth Systems
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-base sm:text-lg text-neutral-400 font-normal leading-relaxed">
            BLUDS is a premier software & digital growth agency. We engineer custom fast-loading websites, retail POS systems, Shopify store connections, page-one SEO optimization, and high-ROI Meta & Google Ads campaigns.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
            <button
              onClick={() => scrollTo('#contact')}
              className="w-full sm:w-auto px-6 py-3 rounded-lg bg-blue-600 hover:bg-blue-500 text-white font-medium text-sm transition-colors flex items-center justify-center gap-2"
            >
              <span>Connect on WhatsApp (03099489168)</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <button
              onClick={() => scrollTo('#estimator')}
              className="w-full sm:w-auto px-6 py-3 rounded-lg bg-[#111111] hover:bg-[#1a1a1a] text-neutral-200 border border-[#262626] hover:border-neutral-700 font-medium text-sm transition-colors flex items-center justify-center gap-2"
            >
              <span>Project Cost Estimator</span>
            </button>
          </div>

          {/* Value Props */}
          <div className="pt-4 flex flex-wrap items-center justify-center gap-6 text-xs text-neutral-400 font-mono">
            <div className="flex items-center gap-1.5">
              <CheckCircle2 className="w-3.5 h-3.5 text-blue-500" />
              <span>Transparent Rates in PKR</span>
            </div>
            <div className="flex items-center gap-1.5">
              <CheckCircle2 className="w-3.5 h-3.5 text-blue-500" />
              <span>Fast 1 - 2 Week Delivery</span>
            </div>
            <div className="flex items-center gap-1.5">
              <Shield className="w-3.5 h-3.5 text-blue-500" />
              <span>Direct WhatsApp & Call Support</span>
            </div>
          </div>
        </div>

        {/* Clean, Functional Architecture Visualizer */}
        <div className="mt-14 max-w-5xl mx-auto">
          <div className="rounded-xl bg-[#0c0c0c] border border-[#222222] overflow-hidden">
            
            {/* Header with Switcher Tabs */}
            <div className="bg-[#121212] px-4 py-3 border-b border-[#222222] flex flex-col md:flex-row md:items-center justify-between gap-3">
              <div className="flex items-center gap-2 text-xs font-medium text-neutral-300">
                <span className="w-2 h-2 rounded-full bg-emerald-500" />
                <span>Service Execution Topologies</span>
              </div>

              {/* Category Selectors */}
              <div className="flex items-center gap-1 overflow-x-auto pb-1 md:pb-0">
                {[
                  { id: 'cloud', label: 'Website Development', icon: Globe },
                  { id: 'ai', label: 'SEO & Meta Ads', icon: TrendingUp },
                  { id: 'mobile', label: 'Shopify Store', icon: ShoppingBag },
                  { id: 'enterprise', label: 'POS Software', icon: Store },
                ].map((tab) => {
                  const Icon = tab.icon;
                  const isActive = activeArchitecture === tab.id;
                  return (
                    <button
                      key={tab.id}
                      onClick={() => setActiveArchitecture(tab.id as any)}
                      className={`flex items-center gap-1.5 px-3 py-1.5 rounded-md text-xs transition-colors whitespace-nowrap font-medium ${
                        isActive
                          ? 'bg-blue-600 text-white'
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

            {/* Architecture Interior */}
            <div className="p-6 sm:p-8 space-y-6">
              
              {/* Title & Specs */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-4 border-b border-[#1f1f1f]">
                <div>
                  <h3 className="text-lg sm:text-xl font-semibold text-white">
                    {currentArch.title}
                  </h3>
                  <p className="text-xs text-neutral-400 mt-0.5">
                    {currentArch.spec}
                  </p>
                </div>
                <span className="text-xs font-mono text-emerald-400 bg-emerald-950/60 border border-emerald-800 px-2.5 py-1 rounded self-start sm:self-auto">
                  SLA Verified 99.99%
                </span>
              </div>

              {/* Main 3D Model + Topology Pipeline Split */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
                {/* Interactive 3D WebGL Model Showcase */}
                <div className="lg:col-span-5 h-[320px] sm:h-[380px] rounded-xl bg-[#080808] border border-[#222222] overflow-hidden relative">
                  <HeroScene3D activeMode={activeArchitecture} />
                </div>

                {/* Topology Nodes Pipeline & Metrics */}
                <div className="lg:col-span-7 space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {currentArch.nodes.map((node, index) => (
                      <div
                        key={index}
                        className="p-3.5 rounded-lg bg-[#111111] border border-[#222222] flex flex-col justify-between"
                      >
                        <div>
                          <div className="flex items-center justify-between mb-1.5 text-xs">
                            <span className="text-neutral-500 font-mono">0{index + 1}</span>
                            <span className="text-emerald-400 text-[11px] font-mono">{node.status}</span>
                          </div>
                          <div className="text-sm font-semibold text-white">
                            {node.name}
                          </div>
                          <div className="text-xs text-neutral-400 mt-0.5">
                            {node.role}
                          </div>
                        </div>

                        <div className="mt-3 pt-2.5 border-t border-[#1f1f1f] flex items-center justify-between text-[11px] font-mono text-neutral-500">
                          <span>Encrypted Pipeline</span>
                          <Lock className="w-3 h-3 text-neutral-400" />
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Performance Metrics Bar */}
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 pt-1">
                    {currentArch.metrics.map((metric, idx) => (
                      <div
                        key={idx}
                        className="p-3 rounded-lg bg-[#111111] border border-[#222222] text-center"
                      >
                        <div className="text-base sm:text-lg font-bold text-white">
                          {metric.value}
                        </div>
                        <div className="text-[11px] text-neutral-400 mt-0.5 font-mono">
                          {metric.label}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

            </div>

            {/* Bottom Bar */}
            <div className="px-6 py-3 bg-[#111111] border-t border-[#1f1f1f] flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-neutral-400">
              <span>Operating Model: {siteSettings.operationalModel.currentPhase}</span>
              <button
                onClick={() => scrollTo('#contact')}
                className="text-blue-400 hover:text-blue-300 font-medium flex items-center gap-1 transition-colors"
              >
                <span>Request Custom Technical Blueprint</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </button>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
