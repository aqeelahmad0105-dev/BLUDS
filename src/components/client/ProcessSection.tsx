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
      title: 'Discovery & Architectural Blueprint',
      timeline: 'Days 1 - 5',
      desc: 'Our 3 founders conduct technical discovery, map business logic into microservices diagrams, select the ideal tech stack, and deliver a comprehensive RFP roadmap.',
      icon: Search,
      highlight: 'System Blueprint + Fixed Scope'
    },
    {
      num: '02',
      title: 'UI/UX Design System & Prototype',
      timeline: 'Sprint 1',
      desc: 'We craft high-fidelity responsive interfaces in Figma, establish an enterprise design system, and share clickable interactive prototypes for stakeholder approval.',
      icon: Palette,
      highlight: 'Interactive Figma Prototype'
    },
    {
      num: '03',
      title: 'Bi-Weekly Agile Sprints & CI/CD Staging',
      timeline: 'Sprints 2 - 5',
      desc: 'Test-driven development with automated GitHub Actions. Every sprint concludes with a live video demo and staging URL so you test working software in real-time.',
      icon: Terminal,
      highlight: 'Continuous Staging Deployment'
    },
    {
      num: '04',
      title: 'Penetration Testing & Load Stressing',
      timeline: 'Pre-Launch',
      desc: 'Before touching production, we execute automated vulnerability scans, database query optimization, sub-100ms API profiling, and SOC2/HIPAA compliance verification.',
      icon: ShieldCheck,
      highlight: 'Zero-Vulnerability Security Audit'
    },
    {
      num: '05',
      title: 'Zero-Downtime Launch & Continuous Evolution',
      timeline: 'Go-Live',
      desc: 'Blue-green cloud deployment with automated failover. We provide 24/7 telemetry monitoring, bug-fixing warranties, and ongoing iterative feature scaling.',
      icon: Rocket,
      highlight: '99.99% Uptime SLA'
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
