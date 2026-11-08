import React from 'react';
import { 
  Code2, 
  Cpu, 
  Database, 
  Cloud, 
  Layers, 
  Workflow, 
  Terminal, 
  Smartphone, 
  ShieldCheck, 
  GitBranch, 
  Boxes 
} from 'lucide-react';

export const TechMarquee: React.FC = () => {
  const techList = [
    { name: 'Next.js 14', tag: 'Server Components', icon: Code2 },
    { name: 'TypeScript', tag: 'Type Safety', icon: Terminal },
    { name: 'Python & FastAPI', tag: 'AI & Data Services', icon: Cpu },
    { name: 'AWS & Kubernetes', tag: 'Cloud Infrastructure', icon: Cloud },
    { name: 'PostgreSQL & pgvector', tag: 'ACID & Vector Storage', icon: Database },
    { name: 'Flutter', tag: 'Cross-Platform Mobile', icon: Smartphone },
    { name: 'Docker & CI/CD', tag: 'Automated Pipelines', icon: Boxes },
    { name: 'OpenAI & Claude API', tag: 'LLM Systems', icon: Workflow },
    { name: 'Tailwind CSS', tag: 'Design Systems', icon: Layers },
    { name: 'GraphQL & REST', tag: 'Low-Latency APIs', icon: GitBranch },
    { name: 'SOC2 Standards', tag: 'Security Hardening', icon: ShieldCheck },
  ];

  return (
    <div className="relative py-6 bg-black border-y border-[#1f1f1f] overflow-hidden">
      {/* Edge Fades */}
      <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-black to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-black to-transparent z-10 pointer-events-none" />

      <div className="flex w-max animate-marquee space-x-4 hover:[animation-play-state:paused]">
        {[...techList, ...techList, ...techList].map((tech, index) => {
          const Icon = tech.icon;
          return (
            <div
              key={index}
              className="flex items-center gap-3 px-4 py-2 rounded-lg bg-[#0c0c0c] border border-[#222222] text-neutral-300 hover:border-neutral-700 transition-colors cursor-default"
            >
              <Icon className="w-4 h-4 text-blue-500 shrink-0" />
              <div className="text-left">
                <div className="text-xs font-medium text-white">
                  {tech.name}
                </div>
                <div className="text-[10px] text-neutral-400">
                  {tech.tag}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
