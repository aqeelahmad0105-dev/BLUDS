/**
 * Image Optimization Utilities
 * Converts remote and local static image assets into WebP and AVIF formats,
 * produces responsive srcsets, and enforces mobile-friendly compression.
 */

export interface ImageOptimizationOptions {
  width?: number;
  height?: number;
  quality?: number;
  format?: 'webp' | 'avif' | 'auto';
  fit?: 'crop' | 'clip' | 'scale';
}

/**
 * Transforms an image URL to deliver WebP or AVIF format with optimized dimensions.
 * Handles Unsplash / Imgix CDNs and local static assets seamlessly.
 */
export function getOptimizedImageUrl(
  src: string,
  options: ImageOptimizationOptions = {}
): string {
  if (!src) return '';

  const {
    width,
    height,
    quality = 75,
    format = 'webp',
    fit = 'crop'
  } = options;

  // 1. Handle Unsplash / Imgix CDNs
  if (src.includes('images.unsplash.com') || src.includes('imgix.net')) {
    try {
      const url = new URL(src);
      
      // Auto compress and format negotiation
      url.searchParams.set('auto', 'format,compress');
      if (format !== 'auto') {
        url.searchParams.set('fm', format);
      }
      url.searchParams.set('q', quality.toString());

      if (width) {
        url.searchParams.set('w', width.toString());
      }
      if (height) {
        url.searchParams.set('h', height.toString());
      }
      if (fit) {
        url.searchParams.set('fit', fit);
      }

      return url.toString();
    } catch {
      return src;
    }
  }

  // 2. Handle local static PNG assets (bluds-logo.png, logo.png, logo192.png, favicon.png)
  if (format === 'webp' && src.endsWith('.png')) {
    return src.replace(/\.png$/, '.webp');
  }
  if (format === 'avif' && src.endsWith('.png')) {
    return src.replace(/\.png$/, '.avif');
  }

  return src;
}

/**
 * Builds a standard responsive srcset string for Unsplash or responsive images.
 */
export function getResponsiveSrcSet(
  src: string,
  widths: number[] = [400, 800, 1200],
  format: 'webp' | 'avif' = 'webp',
  quality = 75
): string {
  if (!src || (!src.includes('images.unsplash.com') && !src.includes('imgix.net'))) {
    return '';
  }

  return widths
    .map((w) => `${getOptimizedImageUrl(src, { width: w, quality, format })} ${w}w`)
    .join(', ');
}
