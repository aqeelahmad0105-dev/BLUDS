import React from 'react';
import { useAgency } from '../../context/AgencyContext';
import { X, ExternalLink, ArrowRight, Cpu, TrendingUp, MessageSquare } from 'lucide-react';

export const CaseStudyModal: React.FC = () => {
  const { activeModalCaseStudy, setActiveModalCaseStudy, navigate } = useAgency();

  if (!activeModalCaseStudy) return null;

  const handleInquireFromCase = () => {
    setActiveModalCaseStudy(null);
    navigate('/');
    setTimeout(() => {
      const el = document.querySelector('#contact');
      el?.scrollIntoView({ behavior: 'smooth' });
    }, 100);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
      {/* Backdrop */}
      <div
        onClick={() => setActiveModalCaseStudy(null)}
        className="fixed inset-0 bg-black/85 transition-opacity"
      />

      {/* Modal Dialog Card */}
      <div className="relative w-full max-w-3xl bg-[#0c0c0c] border border-[#262626] rounded-xl overflow-hidden z-10 max-h-[90vh] flex flex-col text-white">
        {/* Header Bar */}
        <div className="flex items-center justify-between p-4 sm:p-5 border-b border-[#1f1f1f] bg-[#121212]">
          <div className="flex items-center gap-3">
            <span className="px-2 py-0.5 rounded text-[11px] font-mono font-medium bg-[#1a1a1a] text-neutral-300 border border-[#2a2a2a]">
              {activeModalCaseStudy.category}
            </span>
            <span className="text-xs text-neutral-400">
              Client: <strong className="text-white">{activeModalCaseStudy.client}</strong>
            </span>
          </div>
          <button
            onClick={() => setActiveModalCaseStudy(null)}
            className="p-1.5 rounded-lg text-neutral-400 hover:text-white hover:bg-neutral-800 transition-colors"
            aria-label="Close dialog"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content Scrollable */}
        <div className="overflow-y-auto p-5 sm:p-7 space-y-6">
          {/* Hero Banner */}
          <div className="relative rounded-lg overflow-hidden aspect-video max-h-64 w-full border border-[#222222] bg-black">
            <img
              src={activeModalCaseStudy.heroImage}
              alt={activeModalCaseStudy.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0c0c0c] via-black/40 to-transparent" />
            <div className="absolute bottom-3 left-4 right-4 flex items-end justify-between gap-4">
              <h2 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
                {activeModalCaseStudy.title}
              </h2>
              {activeModalCaseStudy.liveUrl && (
                <a
                  href={activeModalCaseStudy.liveUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="px-3 py-1.5 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-semibold flex items-center gap-1.5 shrink-0 transition-colors shadow-lg"
                >
                  <ExternalLink className="w-3.5 h-3.5" />
                  <span>Visit Live Website</span>
                </a>
              )}
            </div>
          </div>

          {/* Key Metrics Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            {activeModalCaseStudy.metrics.map((m, idx) => (
              <div
                key={idx}
                className="p-3.5 rounded-lg bg-[#111111] border border-[#222222]"
              >
                <div className="flex items-center gap-1.5 text-blue-400 mb-1">
                  <TrendingUp className="w-3.5 h-3.5" />
                  <span className="text-[11px] font-mono text-neutral-400">
                    {m.label}
                  </span>
                </div>
                <div className="text-xl font-bold text-white">
                  {m.value}
                </div>
              </div>
            ))}
          </div>

          {/* Problem vs Solution */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="p-4 rounded-lg bg-[#111111] border border-[#222222] space-y-1.5">
              <h4 className="text-xs font-mono font-medium text-rose-400">
                The Problem
              </h4>
              <p className="text-xs text-neutral-300 leading-relaxed">
                {activeModalCaseStudy.challenge}
              </p>
            </div>

            <div className="p-4 rounded-lg bg-[#111111] border border-[#222222] space-y-1.5">
              <h4 className="text-xs font-mono font-medium text-blue-400">
                What We Delivered
              </h4>
              <p className="text-xs text-neutral-300 leading-relaxed">
                {activeModalCaseStudy.solution}
              </p>
            </div>
          </div>

          {/* Tech Stack */}
          <div>
            <h4 className="text-xs font-mono font-medium text-neutral-400 mb-2 flex items-center gap-1.5">
              <Cpu className="w-3.5 h-3.5 text-neutral-400" />
              <span>Tools & Platforms Used</span>
            </h4>
            <div className="flex flex-wrap gap-1.5">
              {activeModalCaseStudy.techStack.map((tech) => (
                <span
                  key={tech}
                  className="px-2.5 py-0.5 rounded text-[11px] font-mono bg-[#141414] border border-[#262626] text-neutral-300"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Footer Actions */}
        <div className="p-4 sm:p-5 border-t border-[#1f1f1f] bg-[#121212] flex flex-col sm:flex-row items-center justify-between gap-3">
          <span className="text-xs text-neutral-400">
            Want something similar for your business?
          </span>
          <div className="flex items-center gap-2.5 w-full sm:w-auto">
            {activeModalCaseStudy.liveUrl && (
              <a
                href={activeModalCaseStudy.liveUrl}
                target="_blank"
                rel="noreferrer"
                className="px-3.5 py-2 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-xs font-semibold text-white transition-colors flex items-center gap-1.5"
              >
                <span>Visit Live Website</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            )}
            <a
              href={`https://wa.me/923099489168?text=${encodeURIComponent(
                `Hello Aqeel, I am looking at ${activeModalCaseStudy.title} on BLUDS Agency and want a similar solution.`
              )}`}
              target="_blank"
              rel="noreferrer"
              className="px-4 py-2 rounded-lg bg-[#25D366] hover:bg-[#20bd5a] text-xs font-semibold text-black transition-colors flex items-center justify-center gap-1.5 shadow"
            >
              <MessageSquare className="w-3.5 h-3.5 fill-black" />
              <span>Order on WhatsApp</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
