import React from 'react';
import { useAgency } from '../../context/AgencyContext';
import { 
  X, 
  CheckCircle, 
  ArrowRight, 
  Globe,
  Search,
  Megaphone,
  ShoppingBag,
  Video,
  Store,
  Code2, 
  Cpu, 
  Smartphone, 
  Cloud, 
  Sparkles, 
  Users 
} from 'lucide-react';

export const ServiceDetailModal: React.FC = () => {
  const { activeServiceDetails, setActiveServiceDetails, navigate } = useAgency();

  if (!activeServiceDetails) return null;

  const getIcon = (name: string) => {
    switch (name) {
      case 'Globe': return <Globe className="w-5 h-5 text-blue-500" />;
      case 'Search': return <Search className="w-5 h-5 text-blue-500" />;
      case 'Megaphone': return <Megaphone className="w-5 h-5 text-blue-500" />;
      case 'ShoppingBag': return <ShoppingBag className="w-5 h-5 text-blue-500" />;
      case 'Video': return <Video className="w-5 h-5 text-blue-500" />;
      case 'Store': return <Store className="w-5 h-5 text-blue-500" />;
      case 'Code2': return <Code2 className="w-5 h-5 text-blue-500" />;
      case 'Cpu': return <Cpu className="w-5 h-5 text-blue-500" />;
      case 'Smartphone': return <Smartphone className="w-5 h-5 text-blue-500" />;
      case 'Cloud': return <Cloud className="w-5 h-5 text-blue-500" />;
      case 'Sparkles': return <Sparkles className="w-5 h-5 text-blue-500" />;
      default: return <Users className="w-5 h-5 text-blue-500" />;
    }
  };

  const handleStartWithService = () => {
    setActiveServiceDetails(null);
    navigate('/');
    setTimeout(() => {
      const el = document.querySelector('#estimator');
      el?.scrollIntoView({ behavior: 'smooth' });
    }, 100);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
      {/* Backdrop */}
      <div
        onClick={() => setActiveServiceDetails(null)}
        className="fixed inset-0 bg-black/80 backdrop-blur-sm transition-opacity"
      />

      {/* Modal Card */}
      <div className="relative w-full max-w-2xl bg-[#0c0c0c] border border-[#262626] rounded-xl shadow-2xl overflow-hidden z-10 max-h-[90vh] flex flex-col text-white">
        {/* Header */}
        <div className="flex items-center justify-between p-4 sm:p-5 border-b border-[#1f1f1f] bg-[#121212]">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-lg bg-[#1a1a1a] border border-[#2a2a2a]">
              {getIcon(activeServiceDetails.iconName)}
            </div>
            <div>
              <span className="text-[10px] font-mono tracking-wider font-medium text-blue-400 uppercase">
                {activeServiceDetails.badge}
              </span>
              <h3 className="text-base sm:text-lg font-semibold text-white">
                {activeServiceDetails.title}
              </h3>
            </div>
          </div>
          <button
            onClick={() => setActiveServiceDetails(null)}
            className="p-1.5 rounded-lg text-neutral-400 hover:text-white hover:bg-neutral-800 transition-colors"
            aria-label="Close dialog"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Body */}
        <div className="overflow-y-auto p-5 sm:p-7 space-y-5">
          <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed border-l-2 border-blue-500 pl-3 py-1 bg-[#111111] rounded-r">
            {activeServiceDetails.tagline}
          </p>

          <div>
            <h4 className="text-xs font-mono font-medium text-neutral-400 uppercase tracking-wider mb-1.5">
              Overview
            </h4>
            <p className="text-xs text-neutral-300 leading-relaxed">
              {activeServiceDetails.fullDescription}
            </p>
          </div>

          {/* Deliverables Checklist */}
          <div>
            <h4 className="text-xs font-mono font-medium text-neutral-300 uppercase tracking-wider mb-2.5">
              Deliverables & Sprints
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {activeServiceDetails.deliverables.map((item, idx) => (
                <div
                  key={idx}
                  className="flex items-start gap-2 p-2.5 rounded-lg bg-[#111111] border border-[#222222] text-xs text-neutral-300"
                >
                  <CheckCircle className="w-3.5 h-3.5 text-blue-500 shrink-0 mt-0.5" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Tech Stack */}
          <div>
            <h4 className="text-xs font-mono font-medium text-neutral-400 uppercase tracking-wider mb-2">
              Technology Stack
            </h4>
            <div className="flex flex-wrap gap-1.5">
              {activeServiceDetails.techStack.map((tech) => (
                <span
                  key={tech}
                  className="px-2.5 py-0.5 rounded text-[11px] font-mono bg-[#141414] border border-[#262626] text-neutral-300"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {activeServiceDetails.startingPrice && (
            <div className="p-3.5 rounded-lg bg-[#111111] border border-[#222222] flex items-center justify-between text-xs font-mono">
              <div>
                <span className="text-neutral-500 block text-[10px]">Investment Guideline</span>
                <span className="font-semibold text-white">{activeServiceDetails.startingPrice}</span>
              </div>
              <span className="text-neutral-400">100% Transparent Sprints</span>
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="p-4 sm:p-5 border-t border-[#1f1f1f] bg-[#121212] flex items-center justify-between gap-3">
          <span className="text-xs text-neutral-400 hidden sm:inline font-mono">
            Directly supervised by Ghulam, Hamza & Daniyal
          </span>
          <button
            onClick={handleStartWithService}
            className="w-full sm:w-auto px-4 py-2 rounded-lg bg-blue-600 hover:bg-blue-500 text-xs font-medium text-white transition-colors flex items-center justify-center gap-1.5"
          >
            <span>Configure Project Scope</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </div>
  );
};
