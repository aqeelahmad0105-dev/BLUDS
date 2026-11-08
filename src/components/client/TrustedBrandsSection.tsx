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
      name: 'VortexAI',
      category: 'Autonomous LLM Agents',
      metric: '4.8M queries/day',
      highlight: 'Sub-40ms latency',
      tag: 'Seed to Series A',
    },
    {
      name: 'NexusPay',
      category: 'FinTech Payment Infrastructure',
      metric: '$140M+ ARR Processed',
      highlight: '99.999% SLA',
      tag: 'Tier-1 Gateway',
    },
    {
      name: 'PulseHealth',
      category: 'HIPAA Cloud Telemedicine',
      metric: '1.2M Patient Records',
      highlight: 'Zero Breach Zero Downtime',
      tag: 'Healthcare Cloud',
    },
    {
      name: 'Synthetix Media',
      category: 'Generative Video Pipeline',
      metric: '120k videos rendered/wk',
      highlight: 'Kubernetes GPU Cluster',
      tag: 'Enterprise Media',
    },
    {
      name: 'OmniChain Global',
      category: 'Distributed Logistics Engine',
      metric: '450k Shipments Tracked',
      highlight: 'Event-Driven Kafka Architecture',
      tag: 'Supply Chain',
    },
    {
      name: 'Aether Cloud',
      category: 'Multi-Tenant SaaS Foundation',
      metric: '85k Daily Active Orgs',
      highlight: 'PostgreSQL + pgvector',
      tag: 'Global SaaS',
    },
  ];

  return (
    <section id="trusted-brands" className="py-20 bg-black text-white border-t border-[#1f1f1f] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
          <div className="max-w-2xl">
            <span className="text-xs font-mono font-medium text-blue-500 uppercase tracking-wider block mb-2">
              Enterprise Trust & Client Blueprints
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
              Trusted by Visionary Brands
            </h2>
            <p className="text-neutral-400 text-sm sm:text-base mt-3 leading-relaxed">
              From fast-scaling venture-backed startups to high-concurrency enterprise applications, we engineer mission-critical systems with zero compromise on speed, security, and scalability.
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
                    99.99%
                  </div>
                  <div className="text-[11px] text-neutral-400">
                    Production Uptime SLA
                  </div>
                </div>

                <div>
                  <div className="text-lg sm:text-xl font-bold text-blue-400 font-mono">
                    &lt; 35ms
                  </div>
                  <div className="text-[11px] text-neutral-400">
                    Average API Latency
                  </div>
                </div>

                <div>
                  <div className="text-lg sm:text-xl font-bold text-white font-mono">
                    100%
                  </div>
                  <div className="text-[11px] text-neutral-400">
                    Founder IP Ownership Handover
                  </div>
                </div>

                <div>
                  <div className="text-lg sm:text-xl font-bold text-blue-400 font-mono">
                    Zero
                  </div>
                  <div className="text-[11px] text-neutral-400">
                    Vendor Lock-In
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
