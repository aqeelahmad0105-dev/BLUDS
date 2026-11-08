import React from 'react';
import { useAgency } from '../../context/AgencyContext';
import { 
  Code2, 
  Cpu, 
  Smartphone, 
  Cloud, 
  Sparkles, 
  Users, 
  ArrowRight, 
  CheckCircle2
} from 'lucide-react';

export const ServicesSection: React.FC = () => {
  const { services, setActiveServiceDetails } = useAgency();

  const activeServices = services.filter((s) => s.active);

  const getServiceIcon = (name: string) => {
    switch (name) {
      case 'Code2': return <Code2 className="w-5 h-5 text-blue-500" />;
      case 'Cpu': return <Cpu className="w-5 h-5 text-blue-500" />;
      case 'Smartphone': return <Smartphone className="w-5 h-5 text-blue-500" />;
      case 'Cloud': return <Cloud className="w-5 h-5 text-blue-500" />;
      case 'Sparkles': return <Sparkles className="w-5 h-5 text-blue-500" />;
      default: return <Users className="w-5 h-5 text-blue-500" />;
    }
  };

  return (
    <section id="services" className="py-20 bg-black text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-2xl mb-12">
          <span className="text-xs font-mono font-medium text-blue-500 uppercase tracking-wider block mb-2">
            Core Capabilities
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
            Engineering Services Built for Scale
          </h2>
          <p className="text-neutral-400 text-sm sm:text-base mt-3 leading-relaxed">
            From greenfield architecture to scaling high-throughput distributed systems, our three founders orchestrate every layer of technical execution.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {activeServices.map((service) => (
            <div
              key={service.id}
              className="p-6 rounded-xl bg-[#0c0c0c] border border-[#222222] hover:border-neutral-700 transition-colors flex flex-col justify-between cursor-pointer"
              onClick={() => setActiveServiceDetails(service)}
            >
              <div>
                {/* Icon & Badge */}
                <div className="flex items-center justify-between mb-4">
                  <div className="w-10 h-10 rounded-lg bg-[#141414] border border-[#262626] flex items-center justify-center">
                    {getServiceIcon(service.iconName)}
                  </div>
                  <span className="px-2 py-0.5 rounded text-[11px] font-mono font-medium bg-[#141414] text-neutral-300 border border-[#262626]">
                    {service.badge}
                  </span>
                </div>

                {/* Title & Tagline */}
                <h3 className="text-lg font-semibold text-white mb-2">
                  {service.title}
                </h3>
                <p className="text-xs text-neutral-400 leading-relaxed mb-4">
                  {service.shortDescription}
                </p>

                {/* Deliverables snippet */}
                <div className="space-y-1.5 mb-6 pt-3 border-t border-[#1c1c1c]">
                  {service.deliverables.slice(0, 3).map((item, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-xs text-neutral-300">
                      <CheckCircle2 className="w-3.5 h-3.5 text-blue-500 shrink-0" />
                      <span className="truncate">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Bottom Card Action */}
              <div className="pt-3 border-t border-[#1c1c1c] flex items-center justify-between">
                <span className="text-xs font-medium text-blue-400 flex items-center gap-1">
                  <span>View Details</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </span>
                {service.startingPrice && (
                  <span className="text-xs font-mono text-neutral-400">
                    {service.startingPrice.split('/')[0]}
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
