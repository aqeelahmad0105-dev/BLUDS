import React, { useState, useEffect, useRef } from 'react';
import { getOptimizedImageUrl } from '../../utils/imageOptimizer';

export type RevealMode = 'vertical' | 'horizontal' | 'grid';

interface StaggeredImageRevealProps {
  currentSrc: string;
  previousSrc?: string | null;
  alt: string;
  mode?: RevealMode;
  sliceCount?: number;
  className?: string;
  aspectRatioClass?: string;
  overlayBadge?: React.ReactNode;
  onImageClick?: () => void;
}

export const StaggeredImageReveal: React.FC<StaggeredImageRevealProps> = ({
  currentSrc,
  previousSrc,
  alt,
  mode = 'vertical',
  sliceCount = 6,
  className = '',
  aspectRatioClass = 'aspect-[16/9] md:aspect-[21/9]',
  overlayBadge,
  onImageClick,
}) => {
  // Slices count
  const verticalSlices = mode === 'vertical' ? Math.max(3, sliceCount) : 1;
  const horizontalSlices = mode === 'horizontal' ? 5 : 1;
  const gridRows = mode === 'grid' ? 3 : 1;
  const gridCols = mode === 'grid' ? 4 : 1;

  // Stagger delays
  const getSliceDelay = (index: number, isIncoming: boolean): number => {
    const base = isIncoming ? 100 : 0;
    const step = isIncoming ? 70 : 40;
    return base + index * step;
  };

  const getGridDelay = (row: number, col: number, isIncoming: boolean): number => {
    const base = isIncoming ? 90 : 0;
    const wave = row + col;
    return base + wave * 55;
  };

  // Convert to high-speed WebP format for cellular data speed
  const optCurrentSrc = getOptimizedImageUrl(currentSrc, { format: 'webp', width: 1200, quality: 75 });
  const optPrevSrc = previousSrc ? getOptimizedImageUrl(previousSrc, { format: 'webp', width: 1200, quality: 75 }) : null;

  return (
    <div
      onClick={onImageClick}
      className={`relative w-full overflow-hidden rounded-xl bg-black select-none border border-[#222222] group cursor-pointer ${aspectRatioClass} ${className}`}
    >
      <style>{`
        @keyframes bludsSliceEnterVert {
          0% {
            opacity: 0;
            transform: translateY(32px) scale(0.97);
            filter: brightness(0.6);
          }
          100% {
            opacity: 1;
            transform: translateY(0) scale(1);
            filter: brightness(1);
          }
        }
        @keyframes bludsSliceExitVert {
          0% {
            opacity: 1;
            transform: translateY(0) scale(1);
            filter: brightness(1);
          }
          100% {
            opacity: 0;
            transform: translateY(-22px) scale(1.02);
            filter: brightness(0.5);
          }
        }
        @keyframes bludsSliceEnterHoriz {
          0% {
            opacity: 0;
            transform: translateX(-36px) scale(0.98);
          }
          100% {
            opacity: 1;
            transform: translateX(0) scale(1);
          }
        }
        @keyframes bludsSliceExitHoriz {
          0% {
            opacity: 1;
            transform: translateX(0) scale(1);
          }
          100% {
            opacity: 0;
            transform: translateX(28px) scale(1.02);
          }
        }
        @keyframes bludsSliceEnterGrid {
          0% {
            opacity: 0;
            transform: scale(0.85) translateY(18px);
          }
          100% {
            opacity: 1;
            transform: scale(1) translateY(0);
          }
        }
        @keyframes bludsSliceExitGrid {
          0% {
            opacity: 1;
            transform: scale(1);
          }
          100% {
            opacity: 0;
            transform: scale(0.88);
          }
        }
      `}</style>

      {/* ================================================================= */}
      {/* 1. OUTGOING IMAGE (FADE OUT + STAGGERED SLICE DISMISSAL)         */}
      {/* ================================================================= */}
      {previousSrc && previousSrc !== currentSrc && (
        <div key={`outgoing-${previousSrc}`} className="absolute inset-0 z-10 pointer-events-none">
          {mode === 'vertical' && (
            <div className="relative w-full h-full flex">
              {Array.from({ length: verticalSlices }).map((_, i) => {
                const delayMs = getSliceDelay(i, false);
                return (
                  <div
                    key={`prev-vert-${i}`}
                    className="relative h-full overflow-hidden"
                    style={{
                      width: `${100 / verticalSlices}%`,
                      animation: `bludsSliceExitVert 550ms cubic-bezier(0.4, 0, 0.2, 1) ${delayMs}ms forwards`,
                    }}
                  >
                    <img
                      src={optPrevSrc || previousSrc}
                      alt={alt}
                      className="absolute top-0 h-full max-w-none object-cover"
                      style={{
                        width: `${verticalSlices * 100}%`,
                        left: `-${i * 100}%`,
                      }}
                    />
                  </div>
                );
              })}
            </div>
          )}

          {mode === 'horizontal' && (
            <div className="relative w-full h-full flex flex-col">
              {Array.from({ length: horizontalSlices }).map((_, i) => {
                const delayMs = getSliceDelay(i, false);
                return (
                  <div
                    key={`prev-horiz-${i}`}
                    className="relative w-full overflow-hidden"
                    style={{
                      height: `${100 / horizontalSlices}%`,
                      animation: `bludsSliceExitHoriz 550ms cubic-bezier(0.4, 0, 0.2, 1) ${delayMs}ms forwards`,
                    }}
                  >
                    <img
                      src={optPrevSrc || previousSrc}
                      alt={alt}
                      className="absolute left-0 w-full max-w-none object-cover"
                      style={{
                        height: `${horizontalSlices * 100}%`,
                        top: `-${i * 100}%`,
                      }}
                    />
                  </div>
                );
              })}
            </div>
          )}

          {mode === 'grid' && (
            <div
              className="relative w-full h-full grid"
              style={{
                gridTemplateColumns: `repeat(${gridCols}, minmax(0, 1fr))`,
                gridTemplateRows: `repeat(${gridRows}, minmax(0, 1fr))`,
              }}
            >
              {Array.from({ length: gridRows * gridCols }).map((_, idx) => {
                const r = Math.floor(idx / gridCols);
                const c = idx % gridCols;
                const delayMs = getGridDelay(r, c, false);
                return (
                  <div
                    key={`prev-grid-${idx}`}
                    className="relative overflow-hidden"
                    style={{
                      animation: `bludsSliceExitGrid 500ms cubic-bezier(0.4, 0, 0.2, 1) ${delayMs}ms forwards`,
                    }}
                  >
                    <img
                      src={optPrevSrc || previousSrc}
                      alt={alt}
                      className="absolute max-w-none object-cover"
                      style={{
                        width: `${gridCols * 100}%`,
                        height: `${gridRows * 100}%`,
                        left: `-${c * 100}%`,
                        top: `-${r * 100}%`,
                      }}
                    />
                  </div>
                );
              })}
            </div>
          )}
        </div>
      )}

      {/* ================================================================= */}
      {/* 2. INCOMING IMAGE (FADE IN + STAGGERED REVEAL ANIMATION)         */}
      {/* ================================================================= */}
      <div key={`incoming-${currentSrc}`} className="absolute inset-0 z-20">
        {mode === 'vertical' && (
          <div className="relative w-full h-full flex">
            {Array.from({ length: verticalSlices }).map((_, i) => {
              const delayMs = getSliceDelay(i, true);
              return (
                <div
                  key={`curr-vert-${i}`}
                  className="relative h-full overflow-hidden"
                  style={{
                    width: `${100 / verticalSlices}%`,
                    animation: `bludsSliceEnterVert 700ms cubic-bezier(0.16, 1, 0.3, 1) ${delayMs}ms both`,
                  }}
                >
                  <img
                    src={optCurrentSrc}
                    alt={alt}
                    className="absolute top-0 h-full max-w-none object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                    style={{
                      width: `${verticalSlices * 100}%`,
                      left: `-${i * 100}%`,
                    }}
                  />
                  {/* Subtle slice separator line */}
                  <div className="absolute right-0 top-0 bottom-0 w-[1px] bg-black/20 pointer-events-none" />
                </div>
              );
            })}
          </div>
        )}

        {mode === 'horizontal' && (
          <div className="relative w-full h-full flex flex-col">
            {Array.from({ length: horizontalSlices }).map((_, i) => {
              const delayMs = getSliceDelay(i, true);
              return (
                <div
                  key={`curr-horiz-${i}`}
                  className="relative w-full overflow-hidden"
                  style={{
                    height: `${100 / horizontalSlices}%`,
                    animation: `bludsSliceEnterHoriz 700ms cubic-bezier(0.16, 1, 0.3, 1) ${delayMs}ms both`,
                  }}
                >
                  <img
                    src={optCurrentSrc}
                    alt={alt}
                    className="absolute left-0 w-full max-w-none object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                    style={{
                      height: `${horizontalSlices * 100}%`,
                      top: `-${i * 100}%`,
                    }}
                  />
                  {/* Subtle horizontal separator line */}
                  <div className="absolute left-0 right-0 bottom-0 h-[1px] bg-black/20 pointer-events-none" />
                </div>
              );
            })}
          </div>
        )}

        {mode === 'grid' && (
          <div
            className="relative w-full h-full grid"
            style={{
              gridTemplateColumns: `repeat(${gridCols}, minmax(0, 1fr))`,
              gridTemplateRows: `repeat(${gridRows}, minmax(0, 1fr))`,
            }}
          >
            {Array.from({ length: gridRows * gridCols }).map((_, idx) => {
              const r = Math.floor(idx / gridCols);
              const c = idx % gridCols;
              const delayMs = getGridDelay(r, c, true);
              return (
                <div
                  key={`curr-grid-${idx}`}
                  className="relative overflow-hidden"
                  style={{
                    animation: `bludsSliceEnterGrid 650ms cubic-bezier(0.16, 1, 0.3, 1) ${delayMs}ms both`,
                  }}
                >
                  <img
                    src={optCurrentSrc}
                    alt={alt}
                    className="absolute max-w-none object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                    style={{
                      width: `${gridCols * 100}%`,
                      height: `${gridRows * 100}%`,
                      left: `-${c * 100}%`,
                      top: `-${r * 100}%`,
                    }}
                  />
                  {/* Subtle grid border overlay */}
                  <div className="absolute inset-0 border border-black/20 pointer-events-none" />
                </div>
              );
            })}
          </div>
        )}
      </div>

      {/* ================================================================= */}
      {/* 3. CINEMATIC GRADIENT OVERLAYS                                   */}
      {/* ================================================================= */}
      <div className="absolute inset-0 z-30 pointer-events-none bg-gradient-to-t from-black via-black/25 to-transparent" />
      <div className="absolute inset-0 z-30 pointer-events-none bg-gradient-to-r from-black/50 via-transparent to-black/20" />

      {/* Top Left Badge Overlay */}
      {overlayBadge && (
        <div className="absolute top-4 left-4 z-40">
          {overlayBadge}
        </div>
      )}

      {/* Interactive Hover Vignette / Slice Indicator */}
      <div className="absolute bottom-3 right-3 z-40 hidden sm:flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-black/80 border border-neutral-700/80 text-[10px] font-mono text-neutral-300 backdrop-blur-sm pointer-events-none">
        <span className="w-1.5 h-1.5 rounded-full bg-blue-500 animate-pulse" />
        <span className="capitalize">{mode} Staggered Reveal</span>
      </div>
    </div>
  );
};
