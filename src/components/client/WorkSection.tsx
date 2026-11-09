import React, { useState, useEffect, useRef } from 'react';
import { useAgency } from '../../context/AgencyContext';
import { 
  ArrowUpRight, 
  ArrowRight,
  Sparkles, 
  ChevronLeft, 
  ChevronRight, 
  Play, 
  Pause, 
  TrendingUp, 
  Layers,
  CheckCircle2,
  ExternalLink,
  MessageSquare
} from 'lucide-react';
import { Card3D } from '../common/Card3D';
import { StaggeredImageReveal, RevealMode } from '../common/StaggeredImageReveal';

export const WorkSection: React.FC = () => {
  const { caseStudies, setActiveModalCaseStudy } = useAgency();
  const [activeCategory, setActiveCategory] = useState<string>('All');

  // Featured Showcase State
  const featuredCases = caseStudies.filter((item) => item.active);
  const [featuredIndex, setFeaturedIndex] = useState<number>(0);
  const [previousIndex, setPreviousIndex] = useState<number | null>(null);
  const [revealMode, setRevealMode] = useState<RevealMode>('vertical');
  const [isPlaying, setIsPlaying] = useState<boolean>(true);
  const [progress, setProgress] = useState<number>(0);
  const [isHovered, setIsHovered] = useState<boolean>(false);

  const categories = [
    'All', 
    'Web Development', 
    'Shopify & E-Commerce', 
    'POS Software', 
    'SEO Optimization', 
    'Meta & Google Ads', 
    'Social Media'
  ];

  const filteredCases = caseStudies.filter((item) => {
    if (!item.active) return false;
    if (activeCategory === 'All') return true;
    return item.category === activeCategory;
  });

  // Current and Previous case for showcase
  const currentCase = featuredCases[featuredIndex] || featuredCases[0];
  const prevCase = previousIndex !== null ? featuredCases[previousIndex] : null;

  // Change project handler with transition
  const handleSelectProject = (newIdx: number) => {
    if (newIdx === featuredIndex || featuredCases.length === 0) return;
    setPreviousIndex(featuredIndex);
    setFeaturedIndex(newIdx);
    setProgress(0);
  };

  const handleNextProject = () => {
    if (featuredCases.length === 0) return;
    const next = (featuredIndex + 1) % featuredCases.length;
    handleSelectProject(next);
  };

  const handlePrevProject = () => {
    if (featuredCases.length === 0) return;
    const prev = (featuredIndex - 1 + featuredCases.length) % featuredCases.length;
    handleSelectProject(prev);
  };

  // Auto-play timer (6 seconds per slide)
  useEffect(() => {
    if (!isPlaying || isHovered || featuredCases.length <= 1) return;

    const intervalTime = 80; // update progress every 80ms
    const totalDuration = 6000; // 6 seconds
    const step = (intervalTime / totalDuration) * 100;

    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev + step >= 100) {
          handleNextProject();
          return 0;
        }
        return prev + step;
      });
    }, intervalTime);

    return () => clearInterval(timer);
  }, [isPlaying, isHovered, featuredIndex, featuredCases.length]);

  return (
    <section id="case-studies" className="py-20 bg-black text-white border-t border-[#1f1f1f]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
          <div className="max-w-2xl">
            <span className="text-xs font-mono font-medium text-blue-500 uppercase tracking-wider block mb-2">
              Our Work & Live Demos
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
              Real Live Websites & Projects We Built
            </h2>
            <p className="text-neutral-400 text-sm sm:text-base mt-2.5 leading-relaxed">
              Explore real businesses, live websites, Shopify stores, and shop billing POS systems we have deployed. Click any live link to see them running.
            </p>
          </div>

          {/* Staggered Animation Feature Badge */}
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-[#0c0c0c] border border-[#262626] text-xs font-mono text-neutral-300 self-start md:self-auto">
            <Sparkles className="w-3.5 h-3.5 text-blue-400" />
            <span>Verified Live Client Deployments</span>
          </div>
        </div>

        {/* ============================================================== */}
        {/* PROMINENT FEATURED SHOWCASE WITH STAGGERED IMAGE REVEAL        */}
        {/* ============================================================== */}
        {currentCase && (
          <div 
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            className="mb-14 rounded-2xl bg-[#0c0c0c] border border-[#222222] p-5 sm:p-7 overflow-hidden"
          >
            {/* Top Showcase Toolbar */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-5 mb-5 border-b border-[#1c1c1c]">
              
              {/* Left: Indicator & Progress */}
              <div className="flex items-center gap-3">
                <span className="text-xs font-mono font-semibold text-blue-400 bg-blue-950/40 px-2 py-0.5 rounded border border-blue-900/40">
                  FEATURED 0{featuredIndex + 1} / 0{featuredCases.length}
                </span>
                <span className="text-xs text-neutral-400 font-medium">
                  {currentCase.client}
                </span>
              </div>

              {/* Right: Reveal Mode Selector & Controls */}
              <div className="flex items-center gap-3">
                {/* Mode Selector */}
                <div className="flex items-center p-0.5 rounded-lg bg-[#141414] border border-[#262626] text-[11px] font-mono">
                  <span className="px-2 text-neutral-500 hidden md:inline">Reveal:</span>
                  {(['vertical', 'horizontal', 'grid'] as RevealMode[]).map((mode) => (
                    <button
                      key={mode}
                      onClick={() => setRevealMode(mode)}
                      className={`px-2.5 py-1 rounded-md transition-colors capitalize ${
                        revealMode === mode
                          ? 'bg-blue-600 text-white font-medium shadow-sm'
                          : 'text-neutral-400 hover:text-white'
                      }`}
                    >
                      {mode}
                    </button>
                  ))}
                </div>

                {/* Auto-play & Nav Buttons */}
                <div className="flex items-center gap-1.5 border-l border-[#222222] pl-3">
                  <button
                    onClick={() => setIsPlaying(!isPlaying)}
                    title={isPlaying ? 'Pause Auto-cycle' : 'Play Auto-cycle'}
                    className="p-1.5 rounded-lg bg-[#141414] border border-[#262626] text-neutral-400 hover:text-white transition-colors"
                  >
                    {isPlaying ? <Pause className="w-3.5 h-3.5" /> : <Play className="w-3.5 h-3.5" />}
                  </button>
                  <button
                    onClick={handlePrevProject}
                    title="Previous Case Study"
                    className="p-1.5 rounded-lg bg-[#141414] border border-[#262626] text-neutral-400 hover:text-white transition-colors"
                  >
                    <ChevronLeft className="w-3.5 h-3.5" />
                  </button>
                  <button
                    onClick={handleNextProject}
                    title="Next Case Study"
                    className="p-1.5 rounded-lg bg-[#141414] border border-[#262626] text-neutral-400 hover:text-white transition-colors"
                  >
                    <ChevronRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            </div>

            {/* Showcase Main Stage (Visual + Spec) */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-7 items-center">
              
              {/* Left: Staggered Image Visual Stage */}
              <div className="lg:col-span-7">
                <StaggeredImageReveal
                  currentSrc={currentCase.heroImage}
                  previousSrc={prevCase?.heroImage}
                  alt={currentCase.title}
                  mode={revealMode}
                  sliceCount={6}
                  aspectRatioClass="aspect-[16/10] sm:aspect-[16/9]"
                  onImageClick={() => setActiveModalCaseStudy(currentCase)}
                  overlayBadge={
                    <span className="px-3 py-1 rounded text-xs font-mono font-medium bg-black/85 text-blue-400 border border-neutral-700 backdrop-blur-md">
                      {currentCase.category}
                    </span>
                  }
                />
                <div className="mt-2 flex items-center justify-between text-[11px] text-neutral-500 font-mono px-1">
                  <span>✦ Click image or button to view project story</span>
                  <span>{currentCase.tags.slice(0, 3).join(' • ')}</span>
                </div>
              </div>

              {/* Right: Technical Spec & Performance Metrics */}
              <div className="lg:col-span-5 space-y-4">
                
                {/* Category & Title */}
                <div>
                  <div className="text-xs font-mono text-neutral-400 mb-1">
                    Client: <strong className="text-white font-medium">{currentCase.client}</strong>
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight leading-snug">
                    {currentCase.title}
                  </h3>
                </div>

                {/* Challenge & Solution Summary */}
                <div className="space-y-2 text-xs text-neutral-300 leading-relaxed bg-[#111111] p-3.5 rounded-xl border border-[#222222]">
                  <div>
                    <span className="text-rose-400 font-mono block text-[10px] uppercase font-semibold">The Problem</span>
                    <p className="line-clamp-2 text-neutral-400 mt-0.5">{currentCase.challenge}</p>
                  </div>
                  <div className="pt-2 border-t border-[#1f1f1f]">
                    <span className="text-blue-400 font-mono block text-[10px] uppercase font-semibold">What We Delivered</span>
                    <p className="line-clamp-2 text-neutral-300 mt-0.5">{currentCase.solution}</p>
                  </div>
                </div>

                {/* Key Metrics Grid */}
                <div>
                  <span className="text-[10px] font-mono uppercase text-neutral-500 tracking-wider block mb-1.5">
                    Real Results Achieved
                  </span>
                  <div className="grid grid-cols-3 gap-2">
                    {currentCase.metrics.map((m, idx) => (
                      <div
                        key={idx}
                        className="p-2.5 rounded-lg bg-[#111111] border border-[#222222] text-center"
                      >
                        <div className="text-base font-bold text-white tracking-tight">
                          {m.value}
                        </div>
                        <div className="text-[10px] text-neutral-400 font-mono truncate mt-0.5">
                          {m.label}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Tech Stack Pills */}
                <div className="flex flex-wrap gap-1.5 pt-1">
                  {currentCase.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-0.5 rounded text-[10px] font-mono bg-[#141414] border border-[#262626] text-neutral-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Action Buttons */}
                <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-2.5">
                  {currentCase.liveUrl && (
                    <a
                      href={currentCase.liveUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="px-4 py-2.5 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-semibold transition-colors flex items-center justify-center gap-2 shadow-sm"
                    >
                      <ExternalLink className="w-3.5 h-3.5" />
                      <span>Visit Live Website</span>
                    </a>
                  )}

                  <button
                    onClick={() => setActiveModalCaseStudy(currentCase)}
                    className="px-4 py-2.5 rounded-lg bg-blue-600 hover:bg-blue-500 text-white text-xs font-semibold transition-colors flex items-center justify-center gap-2"
                  >
                    <span>View Project Story</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>

                  <a
                    href={`https://wa.me/923099489168?text=${encodeURIComponent(
                      `Hello Aqeel, I saw your ${currentCase.title} project on BLUDS Agency and want something similar.`
                    )}`}
                    target="_blank"
                    rel="noreferrer"
                    className="px-3.5 py-2.5 rounded-lg bg-[#141414] hover:bg-[#1a1a1a] text-neutral-200 border border-[#262626] text-xs font-medium transition-colors flex items-center justify-center gap-1.5"
                  >
                    <MessageSquare className="w-3.5 h-3.5 text-[#25D366]" />
                    <span>WhatsApp</span>
                  </a>
                </div>

              </div>

            </div>

            {/* Bottom Project Thumbnail Strip */}
            <div className="mt-7 pt-5 border-t border-[#1c1c1c]">
              <div className="flex items-center justify-between mb-2 text-xs text-neutral-400">
                <span className="font-mono text-[11px]">Select Project to Trigger Staggered Reveal:</span>
                <span className="font-mono text-[10px] text-neutral-500">
                  {isPlaying ? 'Auto-cycling' : 'Paused'}
                </span>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2.5">
                {featuredCases.map((item, idx) => {
                  const isActive = idx === featuredIndex;
                  return (
                    <button
                      key={item.id}
                      type="button"
                      onClick={() => handleSelectProject(idx)}
                      className={`relative p-2 rounded-lg border text-left transition-all overflow-hidden flex flex-col justify-between ${
                        isActive
                          ? 'bg-[#141720] border-blue-500 ring-1 ring-blue-500/50'
                          : 'bg-[#111111] border-[#222222] hover:border-neutral-600 opacity-75 hover:opacity-100'
                      }`}
                    >
                      <div>
                        <div className="text-[10px] font-mono text-blue-400 truncate mb-0.5">
                          {item.category}
                        </div>
                        <div className="text-xs font-medium text-white truncate">
                          {item.client}
                        </div>
                      </div>

                      {/* Small thumbnail preview */}
                      <div className="mt-2 h-8 rounded overflow-hidden bg-black relative">
                        <img
                          src={item.heroImage}
                          alt={item.title}
                          className="w-full h-full object-cover"
                        />
                      </div>

                      {/* Progress bar on active card */}
                      {isActive && (
                        <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#1b253b]">
                          <div 
                            className="h-full bg-blue-500 transition-all duration-100"
                            style={{ width: `${progress}%` }}
                          />
                        </div>
                      )}
                    </button>
                  );
                })}
              </div>
            </div>

          </div>
        )}

        {/* ============================================================== */}
        {/* FILTERABLE ALL CASE STUDIES GRID                               */}
        {/* ============================================================== */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6 pt-4 border-t border-[#1a1a1a]">
          <div>
            <h3 className="text-lg font-semibold text-white">
              Browse All Projects & Live Websites
            </h3>
            <p className="text-xs text-neutral-400">
              Filter by service category to explore live demos
            </p>
          </div>

          {/* Filter Pills */}
          <div className="flex flex-wrap gap-1.5">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-colors ${
                  activeCategory === cat
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
            <Card3D key={project.id} intensity={4}>
              <div
                className="group rounded-xl bg-[#0c0c0c] border border-[#222222] hover:border-neutral-700 transition-colors overflow-hidden flex flex-col h-full"
              >
                {/* Image Frame */}
                <div 
                  onClick={() => setActiveModalCaseStudy(project)}
                  className="relative aspect-[16/9] overflow-hidden bg-black border-b border-[#1f1f1f] cursor-pointer"
                >
                  <img
                    src={project.heroImage}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-60 group-hover:opacity-30 transition-opacity" />
                  <div className="absolute top-3 left-3">
                    <span className="px-2.5 py-1 rounded text-[11px] font-mono font-medium bg-black/85 text-neutral-300 border border-neutral-700 backdrop-blur-sm">
                      {project.category}
                    </span>
                  </div>
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      className="absolute top-3 right-3 w-8 h-8 rounded-lg bg-black/85 border border-neutral-700 flex items-center justify-center text-neutral-300 hover:text-white hover:border-emerald-500 hover:bg-emerald-600 transition-colors"
                      title="Visit Live Website"
                    >
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  )}
                </div>

                {/* Card Body */}
                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div>
                    <div className="text-xs text-neutral-400 mb-1">
                      Client: <span className="text-neutral-200 font-medium">{project.client}</span>
                    </div>
                    <h3 
                      onClick={() => setActiveModalCaseStudy(project)}
                      className="text-lg font-semibold text-white mb-2 hover:text-blue-400 transition-colors cursor-pointer"
                    >
                      {project.title}
                    </h3>
                    <p className="text-xs text-neutral-400 line-clamp-2 leading-relaxed mb-4">
                      {project.summary}
                    </p>
                  </div>

                  {/* Metrics Highlight Pills */}
                  <div className="pt-3 border-t border-[#1c1c1c] mb-4">
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

                  {/* Real Action Buttons */}
                  <div className="pt-3 border-t border-[#1a1a1a] flex items-center gap-2">
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="flex-1 py-2 px-3 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-semibold flex items-center justify-center gap-1.5 transition-colors shadow-sm"
                      >
                        <ExternalLink className="w-3.5 h-3.5" />
                        <span>Visit Live Website</span>
                      </a>
                    )}
                    <button
                      type="button"
                      onClick={() => setActiveModalCaseStudy(project)}
                      className="py-2 px-3 rounded-lg bg-[#141414] hover:bg-[#1f1f1f] border border-[#262626] text-neutral-200 hover:text-white text-xs font-medium flex items-center justify-center gap-1 transition-colors"
                    >
                      <span>Story</span>
                      <ArrowRight className="w-3 h-3 text-neutral-400" />
                    </button>
                    <a
                      href={`https://wa.me/923099489168?text=${encodeURIComponent(
                        `Hello Aqeel, I saw ${project.title} on BLUDS Agency and want something similar for my business.`
                      )}`}
                      target="_blank"
                      rel="noreferrer"
                      className="p-2 rounded-lg bg-[#141414] hover:bg-[#1f1f1f] border border-[#262626] text-[#25D366] hover:text-[#20bd5a] transition-colors"
                      title="Inquire on WhatsApp"
                    >
                      <MessageSquare className="w-4 h-4 fill-[#25D366]" />
                    </a>
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
