import React from 'react';
import { BricksAnimation } from '../common/BricksAnimation';
import { Card3D } from '../common/Card3D';
import { 
  ShieldCheck, 
  Sparkles, 
  Zap, 
  Activity, 
  ArrowUpRight 
} from 'lucide-react';

export const TrustedBrandsSection: React.FC = () => {
  const brands = [
    {
      name: 'LuxeMart Superstore',
      category: 'POS Software & Retail Management',
      metric: '3,800+ bills/day',
      highlight: 'Zero stock leakage',
      tag: 'Retail Chain POS',
    },
    {
      name: 'Nova Apparel Brand',
      category: 'Shopify Store & 1-Click COD Checkout',
      metric: 'Rs. 4.2M+ monthly sales',
      highlight: '38% higher conversion',
      tag: 'E-Commerce Shopify',
    },
    {
      name: 'Apex Dental Care',
      category: 'Website Development & Page-1 SEO',
      metric: '#1 Google search rank',
      highlight: '3.4x organic patients',
      tag: 'Healthcare & SEO',
    },
    {
      name: 'Skyline Properties',
      category: 'Meta & Google Paid Ads Scaling',
      metric: '5.2x Verified ROAS',
      highlight: 'Rs. 360 qualified lead',
      tag: 'Paid Acquisition',
    },
    {
      name: 'Glow Essentials',
      category: '12 Viral Reels/Mo Social Media Management',
      metric: '620,000+ organic views',
      highlight: '+28,500 active followers',
      tag: 'Social Media Growth',
    },
    {
      name: 'Zenith Corporate Group',
      category: 'Custom Next.js Website & Annual Hosting',
      metric: '98/100 PageSpeed score',
      highlight: 'Rs. 10k/mo maintenance',
      tag: 'Web Development',
    },
  ];

  return (
    <section id="trusted-brands" className="py-20 bg-black text-white border-t border-[#1f1f1f] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
          <div className="max-w-2xl">
            <span className="text-xs font-mono font-medium text-blue-500 uppercase tracking-wider block mb-2">
              Client Blueprints & Business Results
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
              Trusted by Visionary Brands
            </h2>
            <p className="text-neutral-400 text-sm sm:text-base mt-3 leading-relaxed">
              From retail supermarkets needing fast POS billing to online stores scaling with Shopify, SEO, and Meta Ads — we engineer systems that drive measurable commercial growth.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <div className="px-3 py-1.5 rounded-lg bg-[#0c0c0c] border border-[#222222] text-xs font-mono text-neutral-300 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse" />
              <span>Interactive Blue SQX LED Matrix</span>
            </div>
          </div>
        </div>

        {/* 1. The Bricks Animation Canvas (Under the Heading) */}
        <div className="mb-10 rounded-xl overflow-hidden border border-[#222222] bg-[#0c0c0c] shadow-2xl relative">
          <BricksAnimation
            height={260}
            brickWidth={72}
            brickHeight={28}
            gap={4}
            variant="wall"
            showControls={true}
            interactive={true}
            className="w-full"
          >
            {/* Overlay Content over the Bricks Animation */}
            <div className="absolute inset-0 flex flex-col justify-between p-6 sm:p-8 pointer-events-none">
              
              {/* Top Banner Tag */}
              <div className="flex items-center justify-between">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-black/80 border border-neutral-800 text-[11px] font-mono text-neutral-300 backdrop-blur-md">
                  <Activity className="w-3.5 h-3.5 text-blue-400" />
                  <span>Real-Time Modular Display Simulation</span>
                </div>
                <div className="hidden sm:flex items-center gap-2 text-xs font-mono text-neutral-400">
                  <span>Click anywhere on the bricks to trigger a shockwave</span>
                </div>
              </div>

              {/* Bottom Metrics Ticker overlaid on the brick wall */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-4 border-t border-white/10 backdrop-blur-sm bg-black/40 rounded-lg p-3">
                <div>
                  <div className="text-lg sm:text-xl font-bold text-white font-mono">
                    98 / 100
                  </div>
                  <div className="text-[11px] text-neutral-400">
                    Google PageSpeed Score
                  </div>
                </div>

                <div>
                  <div className="text-lg sm:text-xl font-bold text-blue-400 font-mono">
                    99.99%
                  </div>
                  <div className="text-[11px] text-neutral-400">
                    Hosting & Cloud Uptime SLA
                  </div>
                </div>

                <div>
                  <div className="text-lg sm:text-xl font-bold text-white font-mono">
                    1 - 2 wks
                  </div>
                  <div className="text-[11px] text-neutral-400">
                    Average Delivery Speed
                  </div>
                </div>

                <div>
                  <div className="text-lg sm:text-xl font-bold text-blue-400 font-mono">
                    Zero
                  </div>
                  <div className="text-[11px] text-neutral-400">
                    Hidden Agency Fees
                  </div>
                </div>
              </div>

            </div>
          </BricksAnimation>
        </div>

        {/* 2. Visionary Brands Showcase Cards with 3D Tilt */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {brands.map((b) => (
            <Card3D key={b.name} intensity={5}>
              <div className="p-5 rounded-xl bg-[#0c0c0c] border border-[#222222] hover:border-neutral-700 transition-colors flex flex-col justify-between h-full group">
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-[#141414] border border-[#262626] text-blue-400">
                      {b.tag}
                    </span>
                    <span className="text-xs text-neutral-500 font-mono flex items-center gap-1 group-hover:text-neutral-300 transition-colors">
                      Verified Architecture
                      <ShieldCheck className="w-3.5 h-3.5 text-blue-500" />
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-white mb-1 group-hover:text-blue-400 transition-colors flex items-center justify-between">
                    <span>{b.name}</span>
                    <ArrowUpRight className="w-4 h-4 text-neutral-500 group-hover:text-blue-400 transition-colors" />
                  </h3>

                  <p className="text-xs text-neutral-400 mb-4">
                    {b.category}
                  </p>
                </div>

                <div className="pt-3 border-t border-[#1c1c1c] flex items-center justify-between text-xs">
                  <div>
                    <div className="text-neutral-500 text-[10px] uppercase font-mono">Scale Metric</div>
                    <div className="font-semibold text-white font-mono">{b.metric}</div>
                  </div>
                  <div className="text-right">
                    <div className="text-neutral-500 text-[10px] uppercase font-mono">Benchmark</div>
                    <div className="font-semibold text-blue-400 font-mono">{b.highlight}</div>
                  </div>
                </div>
              </div>
            </Card3D>
          ))}
        </div>

      </div>
    </section>
  );
};

