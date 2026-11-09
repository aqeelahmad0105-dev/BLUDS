import React, { useEffect, useRef, useState, useCallback } from 'react';

export interface BricksAnimationProps {
  /** Height of the canvas container */
  height?: number | string;
  /** Width of the canvas container (defaults to 100%) */
  width?: number | string;
  /** Custom brick dimensions */
  brickWidth?: number;
  brickHeight?: number;
  gap?: number;
  /** Visual variant */
  variant?: 'wall' | 'heading' | 'compact';
  /** Show interactive controls / telemetry */
  showControls?: boolean;
  /** Optional overlay children (e.g. brand logos, text) */
  children?: React.ReactNode;
  /** Additional CSS class names */
  className?: string;
  /** Accent color in hex or rgb (defaults to cobalt blue #2563eb) */
  accentColor?: string;
  /** Glow intensity multiplier */
  glowIntensity?: number;
  /** Whether mouse interaction triggers ripples/hover lights */
  interactive?: boolean;
}

interface Brick {
  x: number;
  y: number;
  w: number;
  h: number;
  row: number;
  col: number;
  brightness: number;
  targetBrightness: number;
  pulsePhase: number;
  pulseSpeed: number;
}

interface Ripple {
  x: number;
  y: number;
  radius: number;
  maxRadius: number;
  speed: number;
  strength: number;
  active: boolean;
}

export const BricksAnimation: React.FC<BricksAnimationProps> = ({
  height = 240,
  width = '100%',
  brickWidth = 68,
  brickHeight = 26,
  gap = 4,
  variant = 'wall',
  showControls = false,
  children,
  className = '',
  accentColor = '#2563eb',
  glowIntensity = 1.0,
  interactive = true,
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animationFrameRef = useRef<number>(0);
  const bricksRef = useRef<Brick[]>([]);
  const ripplesRef = useRef<Ripple[]>([]);
  const mouseRef = useRef({ x: -1000, y: -1000, isHovered: false });
  const [activeLedCount, setActiveLedCount] = useState<number>(0);
  const [isFlowing, setIsFlowing] = useState<boolean>(true);

  // Helper: Trigger manual shockwave ripple
  const triggerRipple = useCallback((clientX?: number, clientY?: number) => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const rect = canvas.getBoundingClientRect();
    const x = clientX !== undefined ? clientX - rect.left : rect.width / 2;
    const y = clientY !== undefined ? clientY - rect.top : rect.height / 2;

    ripplesRef.current.push({
      x,
      y,
      radius: 0,
      maxRadius: Math.max(rect.width, rect.height) * 0.9,
      speed: 6.5,
      strength: 1.0,
      active: true,
    });
  }, []);

  useEffect(() => {
    const container = containerRef.current;
    const canvas = canvasRef.current;
    if (!container || !canvas) return;

    const ctx = canvas.getContext('2d', { alpha: true });
    if (!ctx) return;

    // Helper: Initialize brick matrix based on current container dimensions
    const initBricks = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      const rect = container.getBoundingClientRect();
      const w = rect.width || 800;
      const h = typeof height === 'number' ? height : (rect.height || 240);

      canvas.width = w * dpr;
      canvas.height = h * dpr;
      canvas.style.width = `${w}px`;
      canvas.style.height = `${h}px`;
      ctx.scale(dpr, dpr);

      // Sizing adjustments for variants
      const bW = variant === 'heading' ? Math.max(42, brickWidth * 0.75) : brickWidth;
      const bH = variant === 'heading' ? Math.max(18, brickHeight * 0.75) : brickHeight;
      const bGap = variant === 'heading' ? Math.max(3, gap * 0.8) : gap;

      const cols = Math.ceil(w / (bW + bGap)) + 2;
      const rows = Math.ceil(h / (bH + bGap)) + 1;

      const newBricks: Brick[] = [];
      for (let r = 0; r < rows; r++) {
        // Staggered offset for masonry/brick pattern (every alternate row offset by half brick)
        const rowOffset = (r % 2 === 1) ? -(bW + bGap) / 2 : 0;
        for (let c = -1; c < cols; c++) {
          const bx = c * (bW + bGap) + rowOffset;
          const by = r * (bH + bGap);
          newBricks.push({
            x: bx,
            y: by,
            w: bW,
            h: bH,
            row: r,
            col: c,
            brightness: 0.05,
            targetBrightness: 0.05,
            pulsePhase: (bx * 0.02) + (by * 0.03) + Math.random() * 0.5,
            pulseSpeed: 1.2 + Math.random() * 0.8,
          });
        }
      }
      bricksRef.current = newBricks;
      setActiveLedCount(newBricks.length);
    };

    initBricks();

    // Resize observer to maintain crisp resolution
    const resizeObserver = new ResizeObserver(() => {
      initBricks();
    });
    resizeObserver.observe(container);

    // Mouse & Touch events
    const handleMouseMove = (e: MouseEvent) => {
      if (!interactive) return;
      const rect = canvas.getBoundingClientRect();
      mouseRef.current.x = e.clientX - rect.left;
      mouseRef.current.y = e.clientY - rect.top;
      mouseRef.current.isHovered = true;
    };

    const handleMouseLeave = () => {
      mouseRef.current.isHovered = false;
      mouseRef.current.x = -1000;
      mouseRef.current.y = -1000;
    };

    const handleClick = (e: MouseEvent) => {
      if (!interactive) return;
      triggerRipple(e.clientX, e.clientY);
    };

    const handleTouchMove = (e: TouchEvent) => {
      if (!interactive || !e.touches[0]) return;
      const rect = canvas.getBoundingClientRect();
      mouseRef.current.x = e.touches[0].clientX - rect.left;
      mouseRef.current.y = e.touches[0].clientY - rect.top;
      mouseRef.current.isHovered = true;
    };

    const handleTouchStart = (e: TouchEvent) => {
      if (!interactive || !e.touches[0]) return;
      triggerRipple(e.touches[0].clientX, e.touches[0].clientY);
    };

    canvas.addEventListener('mousemove', handleMouseMove);
    canvas.addEventListener('mouseleave', handleMouseLeave);
    canvas.addEventListener('click', handleClick);
    canvas.addEventListener('touchmove', handleTouchMove, { passive: true });
    canvas.addEventListener('touchstart', handleTouchStart, { passive: true });

    // Animation Loop with Visibility & Focus optimization
    let startTime = performance.now();
    let isIntersecting = true;
    let isWindowActive = typeof document !== 'undefined' ? !document.hidden : true;
    let isRunning = false;

    const startAnimation = () => {
      if (isRunning || !isIntersecting || !isWindowActive) return;
      isRunning = true;
      startTime = performance.now();
      animationFrameRef.current = requestAnimationFrame(render);
    };

    const stopAnimation = () => {
      if (!isRunning) return;
      isRunning = false;
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
        animationFrameRef.current = 0;
      }
    };

    const drawRoundedRect = (
      context: CanvasRenderingContext2D,
      x: number,
      y: number,
      w: number,
      h: number,
      r: number
    ) => {
      if (typeof context.roundRect === 'function') {
        context.beginPath();
        context.roundRect(x, y, w, h, r);
      } else {
        context.beginPath();
        context.moveTo(x + r, y);
        context.lineTo(x + w - r, y);
        context.quadraticCurveTo(x + w, y, x + w, y + r);
        context.lineTo(x + w, y + h - r);
        context.quadraticCurveTo(x + w, y + h, x + w - r, y + h);
        context.lineTo(x + r, y + h);
        context.quadraticCurveTo(x, y + h, x, y + h - r);
        context.lineTo(x, y + r);
        context.quadraticCurveTo(x, y, x + r, y);
        context.closePath();
      }
    };

    const render = (time: number) => {
      if (!isRunning || !isIntersecting || !isWindowActive) {
        isRunning = false;
        return;
      }

      const elapsed = (time - startTime) * 0.001;
      const rect = container.getBoundingClientRect();
      const w = rect.width || 800;
      const h = typeof height === 'number' ? height : (rect.height || 240);

      ctx.clearRect(0, 0, w, h);

      // 1. Advance Ripples
      const ripples = ripplesRef.current;
      for (let i = ripples.length - 1; i >= 0; i--) {
        const rp = ripples[i];
        rp.radius += rp.speed;
        rp.strength *= 0.985;
        if (rp.radius > rp.maxRadius || rp.strength < 0.01) {
          ripples.splice(i, 1);
        }
      }

      // 2. Render each brick
      const bricks = bricksRef.current;
      const mouse = mouseRef.current;
      const mouseRadius = variant === 'heading' ? 110 : 160;

      for (let i = 0; i < bricks.length; i++) {
        const b = bricks[i];

        // Base wave calculation (inspired by Blue SQX flowing LED panels)
        let wave = 0;
        if (isFlowing) {
          // Combination of horizontal flow + subtle diagonal wave
          const wave1 = Math.sin((b.x * 0.012) - (elapsed * 2.2));
          const wave2 = Math.cos((b.y * 0.02) + (b.x * 0.008) - (elapsed * 1.6));
          const combinedWave = (wave1 + wave2) * 0.5;
          // Accentuate wave peaks
          wave = combinedWave > 0.35 ? (combinedWave - 0.35) * 1.5 : 0;
        }

        // Mouse proximity calculation
        let mouseBoost = 0;
        if (mouse.isHovered) {
          const dx = (b.x + b.w / 2) - mouse.x;
          const dy = (b.y + b.h / 2) - mouse.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < mouseRadius) {
            const factor = 1 - dist / mouseRadius;
            mouseBoost = Math.pow(factor, 1.8) * 1.4;
          }
        }

        // Ripple boost calculation
        let rippleBoost = 0;
        for (let j = 0; j < ripples.length; j++) {
          const rp = ripples[j];
          const dx = (b.x + b.w / 2) - rp.x;
          const dy = (b.y + b.h / 2) - rp.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          const distFromWavefront = Math.abs(dist - rp.radius);
          if (distFromWavefront < 45) {
            const waveFactor = 1 - distFromWavefront / 45;
            rippleBoost = Math.max(rippleBoost, waveFactor * rp.strength * 1.3);
          }
        }

        // Occasional digital sparkle (simulates real-time LED telemetry)
        let sparkle = 0;
        if (Math.sin(elapsed * b.pulseSpeed + b.pulsePhase) > 0.985) {
          sparkle = 0.45;
        }

        // Target brightness is clamped sum
        b.targetBrightness = Math.min(1.0, 0.06 + wave * 0.65 + mouseBoost + rippleBoost + sparkle);

        // Smooth lerp easing
        b.brightness += (b.targetBrightness - b.brightness) * 0.18;

        // Draw Brick Chassis
        const br = b.brightness;
        drawRoundedRect(ctx, b.x, b.y, b.w, b.h, 3.5);

        // Background gradient based on brightness
        if (br > 0.28) {
          // Active Illuminated State (Cobalt Blue Core + Specular Highlight)
          const grad = ctx.createLinearGradient(b.x, b.y, b.x, b.y + b.h);
          const alphaBase = Math.min(1.0, br * 0.85);
          const alphaCyan = Math.min(1.0, br * 0.6);

          grad.addColorStop(0, `rgba(37, 99, 235, ${alphaBase})`); // #2563eb
          grad.addColorStop(0.5, `rgba(29, 78, 216, ${alphaBase * 0.9})`); // #1d4ed8
          grad.addColorStop(1, `rgba(15, 23, 42, ${alphaBase * 0.95})`);

          ctx.fillStyle = grad;
          ctx.fill();

          // Border glow on bright bricks
          ctx.lineWidth = 1;
          ctx.strokeStyle = `rgba(96, 165, 250, ${alphaCyan})`; // #60a5fa
          ctx.stroke();

          // Corner LED indicator dot (Blue SQX LED module aesthetic)
          ctx.beginPath();
          ctx.arc(b.x + b.w - 5, b.y + 5, 1.4, 0, Math.PI * 2);
          ctx.fillStyle = `rgba(219, 234, 254, ${br})`;
          ctx.fill();
        } else {
          // Idle Sleek Dark Chassis
          const idleBg = `rgba(12, 14, 20, ${0.7 + br * 0.8})`;
          ctx.fillStyle = idleBg;
          ctx.fill();

          ctx.lineWidth = 1;
          ctx.strokeStyle = `rgba(255, 255, 255, ${0.05 + br * 0.35})`;
          ctx.stroke();
        }
      }

      animationFrameRef.current = requestAnimationFrame(render);
    };

    // IntersectionObserver to pause when not in viewport
    const intersectionObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          isIntersecting = entry.isIntersecting;
          if (isIntersecting && isWindowActive) {
            startAnimation();
          } else {
            stopAnimation();
          }
        });
      },
      { threshold: 0.05 }
    );
    intersectionObserver.observe(container);

    // Visibility & Focus listeners to pause when tab/window is not in focus
    const handleVisibilityChange = () => {
      isWindowActive = !document.hidden;
      if (isWindowActive && isIntersecting) {
        startAnimation();
      } else {
        stopAnimation();
      }
    };

    const handleWindowBlur = () => {
      isWindowActive = false;
      stopAnimation();
    };

    const handleWindowFocus = () => {
      isWindowActive = true;
      if (isIntersecting) {
        startAnimation();
      }
    };

    document.addEventListener('visibilitychange', handleVisibilityChange);
    window.addEventListener('blur', handleWindowBlur);
    window.addEventListener('focus', handleWindowFocus);

    // Initial start if visible
    startAnimation();

    return () => {
      stopAnimation();
      intersectionObserver.disconnect();
      document.removeEventListener('visibilitychange', handleVisibilityChange);
      window.removeEventListener('blur', handleWindowBlur);
      window.removeEventListener('focus', handleWindowFocus);
      resizeObserver.disconnect();
      canvas.removeEventListener('mousemove', handleMouseMove);
      canvas.removeEventListener('mouseleave', handleMouseLeave);
      canvas.removeEventListener('click', handleClick);
      canvas.removeEventListener('touchmove', handleTouchMove);
      canvas.removeEventListener('touchstart', handleTouchStart);
    };
  }, [height, brickWidth, brickHeight, gap, variant, isFlowing, interactive]);

  return (
    <div
      ref={containerRef}
      className={`relative overflow-hidden rounded-xl bg-black select-none ${className}`}
      style={{
        width: typeof width === 'number' ? `${width}px` : width,
        height: typeof height === 'number' ? `${height}px` : height,
      }}
    >
      {/* HTML5 Canvas Rendering Layer */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 block w-full h-full cursor-crosshair z-0"
      />

      {/* Subtle Vignette & Top/Bottom Edge Fades */}
      <div className="absolute inset-0 pointer-events-none bg-gradient-to-b from-black/40 via-transparent to-black/60 z-10" />
      <div className="absolute left-0 top-0 bottom-0 w-16 bg-gradient-to-r from-black via-black/40 to-transparent pointer-events-none z-10" />
      <div className="absolute right-0 top-0 bottom-0 w-16 bg-gradient-to-l from-black via-black/40 to-transparent pointer-events-none z-10" />

      {/* Optional Interactive Controls / Status Pill */}
      {showControls && (
        <div className="absolute top-3 right-3 z-20 flex items-center gap-2">
          <button
            type="button"
            onClick={() => triggerRipple()}
            className="px-2.5 py-1 rounded bg-[#111111]/90 hover:bg-[#1c1c1c] text-neutral-300 hover:text-white border border-[#2a2a2a] text-[10px] font-mono transition-colors flex items-center gap-1.5 backdrop-blur-sm"
            title="Trigger Shockwave Ripple"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-blue-500 animate-pulse" />
            <span>Pulse Wave</span>
          </button>

          <button
            type="button"
            onClick={() => setIsFlowing((prev) => !prev)}
            className={`px-2.5 py-1 rounded text-[10px] font-mono border transition-colors backdrop-blur-sm ${
              isFlowing
                ? 'bg-blue-950/60 border-blue-600/60 text-blue-300'
                : 'bg-[#111111]/90 border-[#2a2a2a] text-neutral-400'
            }`}
          >
            {isFlowing ? 'Wave: On' : 'Wave: Paused'}
          </button>
        </div>
      )}

      {/* Children Layer (Text, Brand Badges, Metrics) */}
      {children && (
        <div className="relative z-20 w-full h-full pointer-events-auto">
          {children}
        </div>
      )}
    </div>
  );
};

