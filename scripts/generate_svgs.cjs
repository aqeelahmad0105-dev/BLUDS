const fs = require('fs');

const monoContent = fs.readFileSync('public/bluds-logo-mono.svg', 'utf8');
const match = monoContent.match(/<path d="([^"]+)"/);
if (!match) throw new Error('Path not found');
const pathD = match[1];

// 1. Master Default Vector SVG (Original Gradient)
const svgDefault = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 394 394" width="100%" height="100%" fill="none">
  <defs>
    <linearGradient id="bludsGradientDefault" x1="15%" y1="10%" x2="85%" y2="90%">
      <stop offset="0%" stop-color="#00A3FF" />
      <stop offset="40%" stop-color="#1D72FE" />
      <stop offset="80%" stop-color="#0A3B7A" />
      <stop offset="100%" stop-color="#082042" />
    </linearGradient>
    <filter id="subtleGlow" x="-10%" y="-10%" width="120%" height="120%">
      <feDropShadow dx="0" dy="2" stdDeviation="6" flood-color="#1D72FE" flood-opacity="0.35" />
    </filter>
  </defs>
  <path d="${pathD}" fill="url(#bludsGradientDefault)" fill-rule="evenodd" filter="url(#subtleGlow)" />
</svg>`;
fs.writeFileSync('public/bluds-logo.svg', svgDefault);

// 2. Dark-theme Optimized Vector SVG (Electric Blue gradient for pitch black)
const svgDark = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 394 394" width="100%" height="100%" fill="none">
  <defs>
    <linearGradient id="bludsGradientDark" x1="10%" y1="5%" x2="90%" y2="95%">
      <stop offset="0%" stop-color="#38BDF8" />
      <stop offset="35%" stop-color="#2563EB" />
      <stop offset="75%" stop-color="#1D4ED8" />
      <stop offset="100%" stop-color="#1E3A8A" />
    </linearGradient>
    <filter id="glowDark" x="-15%" y="-15%" width="130%" height="130%">
      <feDropShadow dx="0" dy="3" stdDeviation="8" flood-color="#2563EB" flood-opacity="0.45" />
    </filter>
  </defs>
  <path d="${pathD}" fill="url(#bludsGradientDark)" fill-rule="evenodd" filter="url(#glowDark)" />
</svg>`;
fs.writeFileSync('public/bluds-logo-dark.svg', svgDark);

// 3. Light-theme Optimized Vector SVG (High contrast deep cobalt for white background)
const svgLight = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 394 394" width="100%" height="100%" fill="none">
  <defs>
    <linearGradient id="bludsGradientLight" x1="10%" y1="5%" x2="90%" y2="95%">
      <stop offset="0%" stop-color="#0284C7" />
      <stop offset="45%" stop-color="#1E40AF" />
      <stop offset="100%" stop-color="#0F172A" />
    </linearGradient>
  </defs>
  <path d="${pathD}" fill="url(#bludsGradientLight)" fill-rule="evenodd" />
</svg>`;
fs.writeFileSync('public/bluds-logo-light.svg', svgLight);

// 4. Clean Monochrome Vector SVG
const svgMono = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 394 394" width="100%" height="100%" fill="none">
  <path d="${pathD}" fill="currentColor" fill-rule="evenodd" />
</svg>`;
fs.writeFileSync('public/bluds-logo-mono.svg', svgMono);

console.log('Successfully generated all 4 SVG vector files');
