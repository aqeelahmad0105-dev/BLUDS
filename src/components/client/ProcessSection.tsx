import React from 'react';
import { 
  GitPullRequest, 
  Search, 
  Palette, 
  Terminal, 
  ShieldCheck, 
  Rocket
} from 'lucide-react';

export const ProcessSection: React.FC = () => {
  const steps = [
    {
      num: '01',
      title: 'Discovery & Requirement Scoping',
      timeline: 'Days 1 - 3',
      desc: 'Our founders analyze your requirements, define exact specifications for your Website, POS Software, Shopify store, or Ad/SEO campaign, and provide a fixed milestone roadmap.',
      icon: Search,
      highlight: 'Fixed Scope & Direct Consultation'
    },
    {
      num: '02',
      title: 'UI/UX Design & High-Fidelity Prototype',
      timeline: 'Week 1',
      desc: 'We design modern, mobile-optimized user interfaces in Figma, structure high-converting layouts, and share interactive previews for your review and approval.',
      icon: Palette,
      highlight: 'Interactive Figma Prototype'
    },
    {
      num: '03',
      title: 'Full-Stack Development & Setup',
      timeline: 'Weeks 1 - 2',
      desc: 'We build your custom Next.js website, configure your POS software with barcode & receipt printers, connect Shopify catalogs, or script and edit your 12 viral reels.',
      icon: Terminal,
      highlight: 'Clean Code & Live Staging'
    },
    {
      num: '04',
      title: 'QA Testing, Speed & Security Audit',
      timeline: 'Pre-Launch',
      desc: 'Rigorous cross-device testing across smartphones and desktops, 95+ Google PageSpeed optimization, SSL certificate verification, and payment gateway checkout testing.',
      icon: ShieldCheck,
      highlight: 'Zero-Bug Quality Check'
    },
    {
      num: '05',
      title: 'Deployment & Monthly Growth Retainer',
      timeline: 'Launch & Growth',
      desc: 'We map your custom domain, launch cloud hosting, train your staff on POS workflows, and maintain continuous support via monthly SEO, maintenance, or Meta Ads management.',
      icon: Rocket,
      highlight: 'Launch & Ongoing Support'
    }
  ];

  return (
    <section id="process" className="py-20 bg-black text-white border-t border-[#1f1f1f]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-2xl mb-12">
          <span className="text-xs font-mono font-medium text-blue-500 uppercase tracking-wider block mb-2">
            Methodology
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
            5-Stage Agile Delivery Engine
          </h2>
          <p className="text-neutral-400 text-sm sm:text-base mt-3 leading-relaxed">
            Eliminating guesswork with transparent sprint cycles, real-time code staging, and weekly stakeholder walkthroughs.
          </p>
        </div>

        {/* Steps Grid */}
        <div className="space-y-3">
          {steps.map((step) => {
            const Icon = step.icon;
            return (
              <div
                key={step.num}
                className="p-5 sm:p-6 rounded-xl bg-[#0c0c0c] border border-[#222222] hover:border-neutral-700 transition-colors"
              >
                <div className="grid grid-cols-1 md:grid-cols-12 gap-4 items-center">
                  
                  {/* Number & Icon */}
                  <div className="md:col-span-3 flex items-center gap-3">
                    <span className="text-2xl font-bold text-neutral-500 font-mono">
                      {step.num}
                    </span>
                    <div className="w-10 h-10 rounded-lg bg-[#141414] border border-[#262626] flex items-center justify-center">
                      <Icon className="w-5 h-5 text-blue-500" />
                    </div>
                  </div>

                  {/* Title & Desc */}
                  <div className="md:col-span-6 space-y-1">
                    <div className="flex items-center gap-2.5">
                      <h3 className="text-base font-semibold text-white">
                        {step.title}
                      </h3>
                      <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-[#141414] text-neutral-400 border border-[#262626]">
                        {step.timeline}
                      </span>
                    </div>
                    <p className="text-xs text-neutral-400 leading-relaxed">
                      {step.desc}
                    </p>
                  </div>

                  {/* Deliverable Pill */}
                  <div className="md:col-span-3 flex md:justify-end">
                    <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded bg-[#141414] border border-[#262626] text-xs font-mono text-neutral-300">
                      <GitPullRequest className="w-3.5 h-3.5 text-blue-400" />
                      <span>{step.highlight}</span>
                    </div>
                  </div>

                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
