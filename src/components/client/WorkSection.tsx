import React, { useState } from 'react';
import { useAgency } from '../../context/AgencyContext';
import { ArrowUpRight } from 'lucide-react';

export const WorkSection: React.FC = () => {
  const { caseStudies, setActiveModalCaseStudy } = useAgency();
  const [activeCategory, setActiveCategory] = useState<string>('All');

  const categories = ['All', 'FinTech', 'AI & LLM', 'Mobile', 'Cloud & SaaS'];

  const filteredCases = caseStudies.filter((item) => {
    if (!item.active) return false;
    if (activeCategory === 'All') return true;
    return item.category === activeCategory;
  });

  return (
    <section id="case-studies" className="py-20 bg-black text-white border-t border-[#1f1f1f]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header with Category Filter */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="max-w-2xl">
            <span className="text-xs font-mono font-medium text-blue-500 block mb-2">
              Case Studies
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-white">
              Selected Production Deployments
            </h2>
            <p className="text-neutral-400 text-sm mt-2.5 leading-relaxed">
              Explore the technical blueprints, architecture decisions, and metrics behind our client engagements.
            </p>
          </div>

          {/* Filter Pills */}
          <div className="flex flex-wrap gap-1.5 self-start md:self-auto">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-colors ${activeCategory === cat
                  ? 'bg-blue-600 text-white'
                  : 'bg-[#111111] text-neutral-400 hover:text-white border border-[#222222]'
                  }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Case Studies Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filteredCases.map((project) => (
            <div
              key={project.id}
              onClick={() => setActiveModalCaseStudy(project)}
              className="group cursor-pointer rounded-xl bg-[#0c0c0c] border border-[#222222] hover:border-neutral-700 transition-colors overflow-hidden flex flex-col"
            >
              {/* Image Frame */}
              <div className="relative aspect-[16/9] overflow-hidden bg-black border-b border-[#1f1f1f]">
                <img
                  src={project.heroImage}
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-3 left-3">
                  <span className="px-2.5 py-1 rounded text-[11px] font-mono font-medium bg-black/85 text-neutral-300 border border-neutral-700">
                    {project.category}
                  </span>
                </div>
                <div className="absolute top-3 right-3 w-8 h-8 rounded-lg bg-black/85 border border-neutral-700 flex items-center justify-center text-neutral-300">
                  <ArrowUpRight className="w-4 h-4" />
                </div>
              </div>

              {/* Card Body */}
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <div className="text-xs text-neutral-400 mb-1">
                    Client: <span className="text-neutral-200 font-medium">{project.client}</span>
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2">
                    {project.title}
                  </h3>
                  <p className="text-xs text-neutral-400 line-clamp-2 leading-relaxed mb-4">
                    {project.summary}
                  </p>
                </div>

                {/* Metrics Highlight Pills */}
                <div className="pt-3 border-t border-[#1c1c1c]">
                  <div className="grid grid-cols-3 gap-2">
                    {project.metrics.map((m, idx) => (
                      <div key={idx} className="p-2 rounded bg-[#111111] border border-[#1f1f1f]">
                        <div className="text-xs font-semibold text-blue-400 truncate">
                          {m.value}
                        </div>
                        <div className="text-[10px] text-neutral-500 truncate mt-0.5 font-mono">
                          {m.label}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
