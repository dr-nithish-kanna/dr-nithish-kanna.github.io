// Regenerates public/og/default.png (1200x630) from the logo + brand colours.
// Run after swapping the logo:  node scripts/make-og.mjs
import sharp from 'sharp';
const logo = await sharp('public/assets/logo.png').resize(220, 220).png().toBuffer();
const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630">
  <defs>
    <radialGradient id="g" cx="85%" cy="15%" r="70%"><stop offset="0" stop-color="#06E7FE" stop-opacity=".35"/><stop offset="1" stop-color="#0A1020" stop-opacity="0"/></radialGradient>
    <linearGradient id="t" x1="0" x2="1"><stop offset="0" stop-color="#06E7FE"/><stop offset="1" stop-color="#3DBCFE"/></linearGradient>
    <pattern id="p" width="28" height="28" patternUnits="userSpaceOnUse"><circle cx="14" cy="14" r="1.4" fill="#93A4BF" fill-opacity=".18"/></pattern>
  </defs>
  <rect width="1200" height="630" fill="#0A1020"/><rect width="1200" height="630" fill="url(#p)"/><rect width="1200" height="630" fill="url(#g)"/>
  <text x="80" y="250" font-family="DejaVu Sans, Arial, sans-serif" font-weight="700" font-size="76" fill="url(#t)">Nifty Games</text>
  <text x="80" y="330" font-family="DejaVu Sans, Arial, sans-serif" font-weight="700" font-size="76" fill="#E6EDF7">Studios</text>
  <text x="80" y="420" font-family="DejaVu Sans, Arial, sans-serif" font-size="34" fill="#93A4BF">Unity game developer · 2D, casual &amp; WebGL games</text>
  <rect x="80" y="480" width="300" height="6" rx="3" fill="url(#t)"/>
</svg>`;
await sharp(Buffer.from(svg)).composite([{ input: logo, left: 880, top: 205 }]).png({ compressionLevel: 9 }).toFile('public/og/default.png');
console.log('wrote public/og/default.png');
