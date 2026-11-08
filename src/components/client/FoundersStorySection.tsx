import React from 'react';
import { useAgency } from '../../context/AgencyContext';
import { 
  Globe, 
  Building2, 
  Github, 
  Linkedin, 
  Twitter
} from 'lucide-react';
import { Card3D } from '../common/Card3D';

export const FoundersStorySection: React.FC = () => {
  const { founders } = useAgency();

  return (
    <section id="founders" className="py-20 bg-black text-white border-t border-[#1f1f1f]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Header */}
        <div className="max-w-2xl mb-12">
          <span className="text-xs font-mono font-medium text-blue-500 uppercase tracking-wider block mb-2">
            Leadership
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
            The Three Founders
          </h2>
          <p className="text-neutral-400 text-sm sm:text-base mt-3 leading-relaxed">
            BLUDS was founded by three technical partners who combined enterprise systems architecture, product roadmapping, and applied AI systems.
          </p>
        </div>

        {/* Strategic Operating Model: Online First -> Physical Onsite Expansion */}
        <div className="mb-14 p-6 sm:p-8 rounded-xl bg-[#0c0c0c] border border-[#222222]">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
            
            <div className="lg:col-span-7 space-y-3">
              <span className="text-xs font-mono font-medium text-blue-500 uppercase tracking-wider">
                Operating Roadmap
              </span>
              <h3 className="text-xl sm:text-2xl font-bold text-white">
                Online Global Delivery Today. Dedicated Onsite Studios in 2026.
              </h3>
              <p className="text-xs sm:text-sm text-neutral-400 leading-relaxed">
                By operating online-first, we eliminate bloated commercial real estate overhead and focus 100% of resources on technical execution. Clients across North America, Europe, and APAC receive 24/7 synchronous sprint delivery directly from senior leadership.
              </p>
              <p className="text-xs sm:text-sm text-neutral-400 leading-relaxed">
                As our enterprise client base scales, Phase 2 will establish physical tech studios and client war-rooms for intensive in-person architectural workshops.
              </p>

              {/* Milestones */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                <div className="p-3 rounded-lg bg-[#111111] border border-[#222222]">
                  <div className="flex items-center gap-2 text-xs font-medium text-white">
                    <Globe className="w-3.5 h-3.5 text-blue-400" />
                    <span>Phase 1: Online Remote (Current)</span>
                  </div>
                  <p className="text-[11px] text-neutral-500 mt-1">
                    Continuous Slack access, bi-weekly sprints, global delivery.
                  </p>
                </div>

                <div className="p-3 rounded-lg bg-[#111111] border border-[#222222]">
                  <div className="flex items-center gap-2 text-xs font-medium text-white">
                    <Building2 className="w-3.5 h-3.5 text-blue-400" />
                    <span>Phase 2: Onsite Studios (2026 Target)</span>
                  </div>
                  <p className="text-[11px] text-neutral-500 mt-1">
                    Physical innovation labs and in-person client war-rooms.
                  </p>
                </div>
              </div>
            </div>

            {/* Why Founders Matter Box */}
            <div className="lg:col-span-5 p-5 rounded-lg bg-[#111111] border border-[#222222] space-y-3">
              <h4 className="text-xs font-mono font-medium text-neutral-300 uppercase tracking-wider">
                Founder Delivery Standards
              </h4>
              <div className="space-y-2.5 text-xs text-neutral-300">
                <div className="flex items-start gap-2">
                  <span className="text-blue-500 mt-0.5">✓</span>
                  <div>
                    <strong className="text-white">Direct Supervision:</strong> Ghulam, Hamza, and Daniyal personally review and architect every codebase.
                  </div>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-blue-500 mt-0.5">✓</span>
                  <div>
                    <strong className="text-white">100% IP Handover:</strong> Clean Git repositories, complete documentation, and zero proprietary lock-in.
                  </div>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-blue-500 mt-0.5">✓</span>
                  <div>
                    <strong className="text-white">Fixed Milestone Pricing:</strong> Predictable sprint billing with no hidden agency markups.
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* The 3 Founders Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {founders.filter(f => f.active).map((founder, index) => (
            <Card3D key={founder.id} intensity={5}>
              <div
                className="p-6 rounded-xl bg-[#0c0c0c] border border-[#222222] hover:border-neutral-700 transition-colors flex flex-col justify-between h-full"
              >
                <div>
                  {/* Avatar and status */}
                  <div className="relative mb-5 flex items-center justify-between">
                    <div className="w-20 h-20 rounded-xl overflow-hidden border border-[#262626] bg-[#141414]">
                      <img
                        src={founder.avatarUrl}
                        alt={founder.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <span className="text-[11px] font-mono font-medium bg-[#141414] text-neutral-300 px-2 py-0.5 rounded border border-[#262626]">
                      Founder 0{index + 1}
                    </span>
                  </div>

                  {/* Name & Role */}
                  <div className="mb-2">
                    <h3 className="text-xl font-bold text-white">
                      {founder.name}
                    </h3>
                    <div className="text-xs text-blue-400 font-medium mt-0.5">
                      {founder.role}
                    </div>
                  </div>

                  <div className="text-xs text-neutral-300 font-medium mb-2">
                    Focus: <span className="text-white">{founder.focus}</span>
                  </div>

                  <p className="text-xs text-neutral-400 leading-relaxed mb-4">
                    {founder.bio}
                  </p>

                  {/* Expertise tags */}
                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {founder.expertise.map((skill) => (
                      <span
                        key={skill}
                        className="px-2 py-0.5 rounded text-[10px] font-mono bg-[#141414] border border-[#262626] text-neutral-300"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Social Links & Active Status */}
                <div className="pt-3 border-t border-[#1c1c1c] flex items-center justify-between">
                  <div className="flex items-center gap-1.5">
                    {founder.socials.github && (
                      <a
                        href={founder.socials.github}
                        target="_blank"
                        rel="noreferrer"
                        className="p-1.5 rounded bg-[#141414] hover:bg-neutral-800 text-neutral-400 hover:text-white transition-colors"
                        aria-label="GitHub"
                      >
                        <Github className="w-3.5 h-3.5" />
                      </a>
                    )}
                    {founder.socials.linkedin && (
                      <a
                        href={founder.socials.linkedin}
                        target="_blank"
                        rel="noreferrer"
                        className="p-1.5 rounded bg-[#141414] hover:bg-neutral-800 text-neutral-400 hover:text-white transition-colors"
                        aria-label="LinkedIn"
                      >
                        <Linkedin className="w-3.5 h-3.5" />
                      </a>
                    )}
                    {founder.socials.twitter && (
                      <a
                        href={founder.socials.twitter}
                        target="_blank"
                        rel="noreferrer"
                        className="p-1.5 rounded bg-[#141414] hover:bg-neutral-800 text-neutral-400 hover:text-white transition-colors"
                        aria-label="Twitter"
                      >
                        <Twitter className="w-3.5 h-3.5" />
                      </a>
                    )}
                  </div>

                  <span className="text-[11px] font-mono text-neutral-400 flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                    <span>{founder.onlineStatusBadge}</span>
                  </span>
                </div>
              </div>
            </Card3D>
          ))}
        </div>

      </div>
    </section>
  );
};
