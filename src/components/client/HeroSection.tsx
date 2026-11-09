import React from 'react';
import { ArrowDown, MessageSquare, Sparkles } from 'lucide-react';

const HeroScene3D = React.lazy(() =>
  import('./HeroScene3D').then((module) => ({ default: module.HeroScene3D }))
);

export const HeroSection: React.FC = () => (
  <section id="top" className="relative isolate overflow-hidden bg-black py-20 text-white sm:py-28">
    <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-blue-950/30 via-transparent to-slate-900/60" />
    <div className="pointer-events-none absolute -right-[24%] top-0 h-full w-[105%] opacity-80 sm:-right-[8%] sm:w-[82%] sm:opacity-100">
      <React.Suspense fallback={null}>
        <HeroScene3D activeMode="cloud" showControls={false} className="h-full min-h-[440px]" />
      </React.Suspense>
    </div>
    <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-black via-black/40 to-transparent" />

    <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl py-8 sm:py-14">
        <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-lime-700/20 bg-white/70 px-3.5 py-1.5 text-xs font-medium text-slate-800 shadow-sm backdrop-blur">
          <Sparkles className="h-4 w-4 text-lime-700" />
          <span>Digital products, retail systems, and growth marketing</span>
        </div>

        <h1 className="max-w-3xl text-4xl font-extrabold leading-tight tracking-tight text-slate-900 sm:text-6xl">
          Websites, shop software, and marketing that move your business forward.
        </h1>
        <p className="mt-5 max-w-2xl text-base leading-relaxed text-slate-700 sm:text-lg">
          Work directly with BLUDS Agency for custom websites, POS billing, Shopify setup, SEO, and paid campaigns—with clear service details and pricing from the start.
        </p>

        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <a
            href="https://wa.me/923099489168"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#25D366] px-6 py-3.5 text-sm font-bold text-black shadow-lg shadow-emerald-950/20 transition-transform hover:-translate-y-0.5 hover:bg-[#20bd5a]"
          >
            <MessageSquare className="h-4 w-4" />
            Talk to us on WhatsApp
          </a>
          <a
            href="#services"
            className="inline-flex items-center justify-center gap-2 rounded-xl border border-slate-300 bg-white/80 px-6 py-3.5 text-sm font-semibold text-slate-900 transition-colors hover:bg-white"
          >
            Explore services and pricing
            <ArrowDown className="h-4 w-4" />
          </a>
        </div>
      </div>
    </div>
  </section>
);
