import React, { useState, useEffect } from 'react';
import { useAgency } from '../../context/AgencyContext';
import { OptimizedImage } from './OptimizedImage';
import { 
  X, 
  ExternalLink, 
  ArrowRight, 
  Cpu, 
  TrendingUp, 
  MessageSquare,
  Play,
  Pause,
  Star,
  Quote,
  CheckCircle2,
  Sparkles,
  Volume2
} from 'lucide-react';

export const CaseStudyModal: React.FC = () => {
  const { activeModalCaseStudy, setActiveModalCaseStudy, navigate } = useAgency();
  const [isPlayingVideo, setIsPlayingVideo] = useState(false);
  const [videoProgress, setVideoProgress] = useState(0);

  // Reset video state when switching case studies
  useEffect(() => {
    setIsPlayingVideo(false);
    setVideoProgress(0);
  }, [activeModalCaseStudy?.id]);

  // Simulate video playback progress
  useEffect(() => {
    if (!isPlayingVideo) return;
    const interval = setInterval(() => {
      setVideoProgress((prev) => {
        if (prev >= 100) {
          setIsPlayingVideo(false);
          return 0;
        }
        return prev + 2;
      });
    }, 120);
    return () => clearInterval(interval);
  }, [isPlayingVideo]);

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
            <OptimizedImage
              src={activeModalCaseStudy.heroImage}
              alt={activeModalCaseStudy.title}
              width={1200}
              height={675}
              priority={true}
              className="w-full h-full object-cover"
              pictureClassName="w-full h-full block"
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

          {/* Verified Video Client Testimonial */}
          {activeModalCaseStudy.videoTestimonial && (
            <div className="rounded-xl border border-[#222222] bg-[#111111] overflow-hidden">
              <div className="p-3 sm:p-4 bg-[#141414] border-b border-[#1f1f1f] flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                  <span className="text-xs font-mono font-semibold text-emerald-400 uppercase tracking-wider">
                    Client Video Review
                  </span>
                </div>
                <div className="flex items-center gap-1">
                  {[...Array(activeModalCaseStudy.videoTestimonial.rating || 5)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                  ))}
                </div>
              </div>

              <div className="p-4 sm:p-5 grid grid-cols-1 md:grid-cols-12 gap-5 items-center">
                {/* Video Screen Reel */}
                <div className="md:col-span-5 relative rounded-lg overflow-hidden aspect-[4/3] bg-black border border-[#262626] group shadow-inner">
                  <OptimizedImage
                    src={activeModalCaseStudy.videoTestimonial.posterImage}
                    alt={activeModalCaseStudy.videoTestimonial.speakerName}
                    width={800}
                    height={600}
                    className={`w-full h-full object-cover transition-transform duration-500 ${isPlayingVideo ? 'scale-105' : 'group-hover:scale-102'}`}
                    pictureClassName="w-full h-full block"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-black/20" />

                  {/* Play / Pause Overlay Button */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <button
                      type="button"
                      onClick={() => setIsPlayingVideo(!isPlayingVideo)}
                      className="w-12 h-12 rounded-full bg-blue-600/90 hover:bg-blue-500 text-white flex items-center justify-center shadow-lg transition-transform hover:scale-110 active:scale-95"
                      aria-label={isPlayingVideo ? 'Pause Video' : 'Play Video'}
                    >
                      {isPlayingVideo ? (
                        <Pause className="w-5 h-5 fill-white" />
                      ) : (
                        <Play className="w-5 h-5 fill-white ml-0.5" />
                      )}
                    </button>
                  </div>

                  {/* Duration Badge */}
                  <div className="absolute top-2.5 right-2.5 px-2 py-0.5 rounded text-[10px] font-mono bg-black/80 text-white border border-neutral-700 backdrop-blur-sm">
                    {isPlayingVideo ? 'Playing • ' : ''}{activeModalCaseStudy.videoTestimonial.duration}
                  </div>

                  {/* Speaker Label On Video */}
                  <div className="absolute bottom-2 left-2.5 right-2.5 text-left">
                    <div className="text-xs font-bold text-white leading-tight">
                      {activeModalCaseStudy.videoTestimonial.speakerName}
                    </div>
                    <div className="text-[10px] text-neutral-300 font-mono truncate">
                      {activeModalCaseStudy.videoTestimonial.role}
                    </div>
                  </div>

                  {/* Video Progress Bar */}
                  {isPlayingVideo && (
                    <div className="absolute bottom-0 left-0 right-0 h-1 bg-neutral-800">
                      <div
                        className="h-full bg-blue-500 transition-all duration-100 ease-linear"
                        style={{ width: `${videoProgress}%` }}
                      />
                    </div>
                  )}
                </div>

                {/* Testimonial Quote & Speaker Info */}
                <div className="md:col-span-7 space-y-3">
                  <div className="flex items-center gap-2 text-xs text-neutral-400 font-mono">
                    <Quote className="w-4 h-4 text-blue-500 shrink-0" />
                    <span>Verified Project Story</span>
                  </div>

                  <blockquote className="text-xs sm:text-sm font-medium text-neutral-200 leading-relaxed italic">
                    "{activeModalCaseStudy.videoTestimonial.quote}"
                  </blockquote>

                  <div className="pt-2 border-t border-[#1f1f1f] flex flex-wrap items-center justify-between gap-3">
                    <div>
                      <div className="text-xs font-bold text-white flex items-center gap-1.5">
                        <span>{activeModalCaseStudy.videoTestimonial.speakerName}</span>
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                      </div>
                      <div className="text-[11px] text-neutral-400 font-mono">
                        {activeModalCaseStudy.videoTestimonial.role} • <strong className="text-neutral-300">{activeModalCaseStudy.videoTestimonial.company}</strong>
                      </div>
                    </div>

                    <a
                      href={`https://wa.me/923099489168?text=${encodeURIComponent(
                        `Hello Aqeel, I watched the video review from ${activeModalCaseStudy.videoTestimonial.speakerName} (${activeModalCaseStudy.client}) and want similar results for my company.`
                      )}`}
                      target="_blank"
                      rel="noreferrer"
                      className="px-3 py-1.5 rounded-lg bg-emerald-950/60 hover:bg-emerald-900/60 border border-emerald-800/50 text-[11px] font-semibold text-emerald-400 flex items-center gap-1 transition-colors"
                    >
                      <MessageSquare className="w-3 h-3 text-[#25D366]" />
                      <span>Ask About This</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          )}

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
