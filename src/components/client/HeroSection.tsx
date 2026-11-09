import React, { useState, useEffect } from 'react';
import { useAgency } from '../../context/AgencyContext';
import { OptimizedImage } from '../common/OptimizedImage';
import {
  ArrowRight,
  Globe,
  TrendingUp,
  ShoppingBag,
  Store,
  CheckCircle2,
  MessageSquare,
  Sparkles,
  Play,
  Pause,
  X,
  ExternalLink,
  ShieldCheck,
  Zap
} from 'lucide-react';

const HeroScene3D = React.lazy(() =>
  import('./HeroScene3D').then((m) => ({ default: m.HeroScene3D }))
);

export const HeroSection: React.FC = () => {
  const { siteSettings } = useAgency();
  const [activeSolution, setActiveSolution] = useState<'website' | 'marketing' | 'shopify' | 'pos'>('website');
  const [videoModalOpen, setVideoModalOpen] = useState(false);
  const [activeChapter, setActiveChapter] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [chapterProgress, setChapterProgress] = useState(0);

  const scrollTo = (id: string) => {
    const el = document.querySelector(id);
    el?.scrollIntoView({ behavior: 'smooth' });
  };

  const videoChapters = [
    {
      title: '1. Fast Business Websites',
      duration: '0:00 - 0:08',
      desc: 'Custom-designed responsive websites engineered for speed, mobile responsiveness, and direct WhatsApp customer inquiries.',
      badge: 'Rs. 20,000 One-Time',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format,compress&fm=webp&fit=crop&w=1200&q=75',
      highlights: ['Loads under 1.0 second', 'Zero generic copied templates', 'Direct WhatsApp inquiry forms'],
    },
    {
      title: '2. Retail POS Billing Software',
      duration: '0:08 - 0:16',
      desc: 'Rapid cashier operations for supermarkets, clothing retail, and restaurants with barcode scanning and thermal receipt printing.',
      badge: '< 2.0s Instant Bill',
      image: 'https://images.unsplash.com/photo-1556742049-0a67c5574f73?auto=format,compress&fm=webp&fit=crop&w=1200&q=75',
      highlights: ['Instant USB/Wireless barcode lookup', 'Thermal ESC/POS receipt cuts', 'Daily shift profit & stock deduction'],
    },
    {
      title: '3. Shopify Store with Cash on Delivery',
      duration: '0:16 - 0:23',
      desc: 'Complete Shopify storefront connected to custom domain, courier shipping rates, and 1-click Cash on Delivery (COD) checkout.',
      badge: 'Rs. 5,000 One-Time',
      image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format,compress&fm=webp&fit=crop&w=1200&q=75',
      highlights: ['Pakistani courier COD integration', 'Instant WhatsApp order alerts', 'Automated inventory tracking'],
    },
    {
      title: '4. Page-1 SEO & High-ROI Ads',
      duration: '0:23 - 0:30',
      desc: 'Rank on Page #1 of Google search and run high-converting Meta (Facebook & Instagram) and Google search advertising campaigns.',
      badge: '5.2x Target ROAS',
      image: 'https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format,compress&fm=webp&fit=crop&w=1200&q=75',
      highlights: ['Google Page-1 keyword ranking', '12 produced viral video reels/mo', 'Transparent weekly lead reports'],
    },
  ];

  // Auto-advance 30s highlights sequence when modal is open
  useEffect(() => {
    if (!videoModalOpen || !isPlaying) return;

    const interval = 100;
    const durationPerChapter = 7500; // 7.5 seconds per chapter = 30s total
    const step = (interval / durationPerChapter) * 100;

    const timer = setInterval(() => {
      setChapterProgress((prev) => {
        if (prev + step >= 100) {
          setActiveChapter((curr) => (curr + 1) % videoChapters.length);
          return 0;
        }
        return prev + step;
      });
    }, interval);

    return () => clearInterval(timer);
  }, [videoModalOpen, isPlaying, activeChapter]);

  // Handle ESC key to close modal
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setVideoModalOpen(false);
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

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
          
          {/* Trust & Floating Verified Metrics Pills */}
          <div className="flex flex-wrap items-center justify-center gap-2.5">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#111111] border border-[#262626] text-xs text-neutral-300">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
              <span>Direct WhatsApp: 03099489168</span>
            </div>

            {/* Floating Verified Metrics Pill */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue-950/40 border border-blue-800/40 text-xs font-mono text-blue-300 shadow-sm shadow-blue-950/40">
              <Sparkles className="w-3.5 h-3.5 text-blue-400 shrink-0" />
              <span className="text-white font-semibold">50+ Projects Launched in Pakistan</span>
              <span className="text-neutral-500">•</span>
              <span className="text-emerald-400 font-medium">100% Client Satisfaction</span>
            </div>
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

            {/* 30s Video Highlights Modal Trigger */}
            <button
              type="button"
              onClick={() => {
                setActiveChapter(0);
                setChapterProgress(0);
                setIsPlaying(true);
                setVideoModalOpen(true);
              }}
              className="w-full sm:w-auto px-5 py-3.5 rounded-lg bg-[#111111] hover:bg-[#161616] text-white border border-[#262626] hover:border-neutral-700 font-medium text-sm transition-colors flex items-center justify-center gap-2 group"
            >
              <div className="w-5 h-5 rounded-full bg-blue-600/30 border border-blue-500/50 flex items-center justify-center text-blue-400 group-hover:scale-110 transition-transform">
                <Play className="w-2.5 h-2.5 fill-current ml-0.5" />
              </div>
              <span>Watch 30s Highlights</span>
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

      {/* ============================================================== */}
      {/* 30-SECOND AGENCY VIDEO HIGHLIGHTS MODAL                         */}
      {/* ============================================================== */}
      {videoModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
          {/* Backdrop */}
          <div
            onClick={() => setVideoModalOpen(false)}
            className="fixed inset-0 bg-black/90 backdrop-blur-md transition-opacity"
          />

          {/* Dialog Container */}
          <div className="relative w-full max-w-3xl bg-[#0c0c0c] border border-[#262626] rounded-2xl overflow-hidden z-10 shadow-2xl flex flex-col text-white">
            
            {/* Modal Top Bar */}
            <div className="flex items-center justify-between p-4 sm:p-5 border-b border-[#1f1f1f] bg-[#121212]">
              <div className="flex items-center gap-3">
                <span className="px-2.5 py-0.5 rounded text-[11px] font-mono font-semibold bg-blue-950/60 text-blue-400 border border-blue-800/50">
                  30s HIGHLIGHTS • 0{activeChapter + 1} / 0{videoChapters.length}
                </span>
                <span className="text-xs font-medium text-neutral-300 hidden sm:inline">
                  {videoChapters[activeChapter].title}
                </span>
              </div>

              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={() => setIsPlaying(!isPlaying)}
                  title={isPlaying ? 'Pause Highlights' : 'Resume Highlights'}
                  className="p-1.5 rounded-lg bg-[#1a1a1a] border border-[#2a2a2a] text-neutral-300 hover:text-white transition-colors"
                >
                  {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
                </button>
                <button
                  type="button"
                  onClick={() => setVideoModalOpen(false)}
                  className="p-1.5 rounded-lg text-neutral-400 hover:text-white hover:bg-neutral-800 transition-colors"
                  aria-label="Close highlights"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Video Stage Frame */}
            <div className="relative aspect-video max-h-[360px] bg-black overflow-hidden border-b border-[#1f1f1f]">
              {/* Top Progress Bar */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-black/60 z-20">
                <div
                  className="h-full bg-blue-500 transition-all duration-100 ease-linear"
                  style={{ width: `${chapterProgress}%` }}
                />
              </div>

              {/* Visual Chapter Media */}
              <OptimizedImage
                src={videoChapters[activeChapter].image}
                alt={videoChapters[activeChapter].title}
                width={1200}
                height={675}
                priority={true}
                className="w-full h-full object-cover brightness-[0.75] transition-all duration-700 ease-out"
                pictureClassName="w-full h-full block"
              />

              {/* Gradient Backdrop */}
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />

              {/* Overlay Content */}
              <div className="absolute bottom-4 left-4 right-4 sm:left-6 sm:right-6 space-y-2">
                <div className="flex items-center justify-between gap-3">
                  <span className="px-2.5 py-0.5 rounded text-[11px] font-mono font-medium bg-emerald-950/80 text-emerald-400 border border-emerald-800/80 backdrop-blur-sm">
                    {videoChapters[activeChapter].badge}
                  </span>
                  <span className="text-[11px] font-mono text-neutral-400">
                    {videoChapters[activeChapter].duration}
                  </span>
                </div>

                <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
                  {videoChapters[activeChapter].title}
                </h3>

                <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed max-w-xl">
                  {videoChapters[activeChapter].desc}
                </p>

                {/* Bullets */}
                <div className="flex flex-wrap gap-2 pt-1">
                  {videoChapters[activeChapter].highlights.map((h, i) => (
                    <span
                      key={i}
                      className="px-2 py-0.5 rounded text-[10px] font-mono bg-black/70 border border-neutral-700 text-neutral-200 backdrop-blur-sm"
                    >
                      ✦ {h}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Chapter Selection Bar */}
            <div className="p-4 bg-[#0e0e0e] border-b border-[#1c1c1c]">
              <div className="text-[11px] font-mono text-neutral-400 mb-2 flex items-center justify-between">
                <span>Select Section to Jump:</span>
                <span>{isPlaying ? 'Auto-playing sequence' : 'Paused'}</span>
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                {videoChapters.map((chap, idx) => (
                  <button
                    key={idx}
                    type="button"
                    onClick={() => {
                      setActiveChapter(idx);
                      setChapterProgress(0);
                    }}
                    className={`p-2.5 rounded-lg border text-left transition-all ${
                      activeChapter === idx
                        ? 'bg-blue-950/50 border-blue-500 ring-1 ring-blue-500/40 text-white'
                        : 'bg-[#141414] border-[#222222] text-neutral-400 hover:text-white'
                    }`}
                  >
                    <div className="text-[10px] font-mono text-blue-400 truncate">
                      {chap.duration}
                    </div>
                    <div className="text-xs font-medium truncate mt-0.5">
                      {chap.title.split('. ')[1]}
                    </div>
                  </button>
                ))}
              </div>
            </div>

            {/* Modal Footer Call to Action */}
            <div className="p-4 sm:p-5 bg-[#121212] flex flex-col sm:flex-row items-center justify-between gap-3">
              <span className="text-xs text-neutral-400 text-center sm:text-left">
                Ready to launch with guaranteed honest pricing in PKR?
              </span>

              <div className="flex items-center gap-2.5 w-full sm:w-auto">
                <a
                  href={`https://wa.me/923099489168?text=${encodeURIComponent(
                    `Hello Aqeel, I watched your 30-second highlights reel and would like to discuss ${videoChapters[activeChapter].title} for my business.`
                  )}`}
                  target="_blank"
                  rel="noreferrer"
                  className="flex-1 sm:flex-none px-4 py-2.5 rounded-lg bg-[#25D366] hover:bg-[#20bd5a] text-black font-semibold text-xs transition-colors flex items-center justify-center gap-1.5 shadow"
                >
                  <MessageSquare className="w-3.5 h-3.5 fill-black" />
                  <span>Start on WhatsApp (03099489168)</span>
                </a>

                <button
                  type="button"
                  onClick={() => setVideoModalOpen(false)}
                  className="px-3.5 py-2.5 rounded-lg bg-[#1a1a1a] hover:bg-neutral-800 text-xs text-neutral-300 hover:text-white transition-colors"
                >
                  Close
                </button>
              </div>
            </div>

          </div>
        </div>
      )}
    </section>
  );
};
