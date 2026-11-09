import React, { useState } from 'react';
import { useAgency } from '../../context/AgencyContext';
import { ArrowUpRight, ExternalLink, MessageSquare } from 'lucide-react';
import { OptimizedImage } from '../common/OptimizedImage';

const categories = [
  'All',
  'Web Development',
  'Shopify & E-Commerce',
  'POS Software',
  'SEO Optimization',
  'Meta & Google Ads',
  'Social Media',
];

export const WorkSection: React.FC = () => {
  const { caseStudies, setActiveModalCaseStudy } = useAgency();
  const [activeCategory, setActiveCategory] = useState('All');

  const projects = caseStudies.filter(
    (project) => project.active && (activeCategory === 'All' || project.category === activeCategory)
  );

  return (
    <section id="case-studies" className="border-t border-slate-300 bg-black py-16 text-white sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-8 max-w-3xl">
          <span className="mb-2 block text-xs font-mono font-semibold uppercase tracking-wider text-blue-600">
            Selected Work
          </span>
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Selected projects.
          </h2>
          <p className="mt-3 text-sm leading-relaxed text-neutral-700 sm:text-base">
            A selection of work delivered for our clients.
          </p>
        </div>

        <div className="mb-7 flex gap-2 overflow-x-auto pb-2" role="group" aria-label="Filter projects by service">
          {categories.map((category) => (
            <button
              key={category}
              type="button"
              onClick={() => setActiveCategory(category)}
              aria-pressed={activeCategory === category}
              className={`shrink-0 rounded-full border px-4 py-2 text-xs font-semibold transition-colors ${
                activeCategory === category
                  ? 'border-blue-600 bg-blue-600 text-white'
                  : 'border-slate-300 bg-white text-slate-700 hover:border-lime-500 hover:bg-lime-50'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => {
            return (
              <article
                key={project.id}
                className="overflow-hidden rounded-2xl border border-[#CBD5E1] bg-white shadow-sm transition-all hover:-translate-y-1 hover:shadow-lg hover:shadow-slate-900/5"
              >
                <div className="group relative aspect-[16/9] overflow-hidden bg-slate-200">
                  <button
                    type="button"
                    onClick={() => setActiveModalCaseStudy(project)}
                    className="block h-full w-full text-left"
                    aria-label={`View ${project.title} case study`}
                  >
                    <OptimizedImage
                      src={project.heroImage}
                      alt={project.title}
                      width={800}
                      height={450}
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                      pictureClassName="block h-full w-full"
                    />
                    <span className="absolute left-3 top-3 rounded-full bg-white/90 px-3 py-1 text-[10px] font-semibold text-slate-800 shadow-sm">
                      {project.category}
                    </span>
                  </button>
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="absolute right-3 top-3 rounded-lg bg-white/90 p-2 text-slate-800 transition-colors hover:bg-lime-300"
                      aria-label={`Visit ${project.client} website`}
                    >
                      <ExternalLink className="h-4 w-4" />
                    </a>
                  )}
                </div>

                <div className="flex h-full flex-col p-5">
                  <p className="text-xs font-medium text-slate-500">{project.client}</p>
                  <button
                    type="button"
                    onClick={() => setActiveModalCaseStudy(project)}
                    className="mt-1 text-left text-lg font-bold leading-snug text-slate-900 hover:text-lime-800"
                  >
                    {project.title}
                  </button>
                  <p className="mt-2 line-clamp-3 text-sm leading-relaxed text-slate-600">{project.summary}</p>

                  <div className="mt-4 grid grid-cols-3 gap-2 border-t border-slate-200 pt-4">
                    {project.metrics.slice(0, 3).map((metric) => (
                      <div key={metric.label} className="rounded-lg bg-slate-50 p-2">
                        <div className="truncate text-xs font-bold text-lime-800">{metric.value}</div>
                        <div className="mt-1 line-clamp-2 text-[10px] leading-tight text-slate-500">{metric.label}</div>
                      </div>
                    ))}
                  </div>

                  <div className="mt-auto flex flex-wrap items-center gap-2 border-t border-slate-200 pt-4">
                    <button
                      type="button"
                      onClick={() => setActiveModalCaseStudy(project)}
                      className="inline-flex items-center gap-1 rounded-lg bg-slate-100 px-3 py-2 text-xs font-semibold text-slate-800 transition-colors hover:bg-lime-100"
                    >
                      Case study <ArrowUpRight className="h-3.5 w-3.5" />
                    </button>
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-1 rounded-lg bg-blue-600 px-3 py-2 text-xs font-bold text-white transition-colors hover:bg-blue-500"
                      >
                        Live project <ExternalLink className="h-3.5 w-3.5" />
                      </a>
                    )}
                    <a
                      href={`https://wa.me/923099489168?text=${encodeURIComponent(`Hello Aqeel, I saw ${project.title} and would like to discuss a similar project.`)}`}
                      target="_blank"
                      rel="noreferrer"
                      aria-label={`Ask about a project like ${project.client}`}
                      className="ml-auto rounded-lg border border-slate-300 p-2 text-slate-700 transition-colors hover:border-lime-500 hover:bg-lime-50"
                    >
                      <MessageSquare className="h-4 w-4" />
                    </a>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
};
