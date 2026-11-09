import React, { useState } from 'react';
import { getOptimizedImageUrl, getResponsiveSrcSet } from '../../utils/imageOptimizer';

export interface OptimizedImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  priority?: boolean;
  aspectRatio?: string;
  fallbackSrc?: string;
  className?: string;
  pictureClassName?: string;
  widths?: number[];
  sizes?: string;
}

export const OptimizedImage: React.FC<OptimizedImageProps> = ({
  src,
  alt,
  width,
  height,
  priority = false,
  aspectRatio,
  fallbackSrc,
  className = '',
  pictureClassName = '',
  widths = [400, 800, 1200],
  sizes = '(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 1200px',
  ...rest
}) => {
  const [hasError, setHasError] = useState(false);

  // If already an SVG or data URL, render clean standard img
  if (!src || src.endsWith('.svg') || src.startsWith('data:')) {
    return (
      <img
        src={src || fallbackSrc || ''}
        alt={alt}
        width={width}
        height={height}
        loading={priority ? 'eager' : 'lazy'}
        decoding={priority ? 'sync' : 'async'}
        className={className}
        {...rest}
      />
    );
  }

  // Generate modern AVIF and WebP representations
  const avifSrcSet = getResponsiveSrcSet(src, widths, 'avif');
  const webpSrcSet = getResponsiveSrcSet(src, widths, 'webp');
  const defaultWebp = getOptimizedImageUrl(src, { width, height, format: 'webp' });
  const defaultAvif = getOptimizedImageUrl(src, { width, height, format: 'avif' });
  const standardFallback = fallbackSrc || getOptimizedImageUrl(src, { width, height, format: 'auto' });

  return (
    <picture className={`inline-block ${pictureClassName}`}>
      {/* 1. Ultra modern AVIF for browsers supporting AVIF */}
      {!hasError && (
        <source
          type="image/avif"
          srcSet={avifSrcSet || defaultAvif}
          sizes={sizes}
        />
      )}

      {/* 2. High-performance WebP for modern browsers */}
      {!hasError && (
        <source
          type="image/webp"
          srcSet={webpSrcSet || defaultWebp}
          sizes={sizes}
        />
      )}

      {/* 3. Standard fallback image */}
      <img
        src={hasError && fallbackSrc ? fallbackSrc : standardFallback}
        alt={alt}
        width={width}
        height={height}
        loading={priority ? 'eager' : 'lazy'}
        decoding={priority ? 'sync' : 'async'}
        onError={() => setHasError(true)}
        className={className}
        style={aspectRatio ? { aspectRatio, ...rest.style } : rest.style}
        {...rest}
      />
    </picture>
  );
};
