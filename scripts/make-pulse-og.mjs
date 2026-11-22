// Builds the Pulse images from the source art in scripts/pulse-src/ (into public/images/pulse/):
//   icon-256.webp, apple-touch-icon.png (180),
//   public/images/pulse/feature-graphic.webp (960 wide), public/og/pulse.png (1200x630 share image).
// Run after changing the Pulse icon or feature graphic:  node scripts/make-pulse-og.mjs
import sharp from 'sharp';
const SRC = 'scripts/pulse-src';
const icon = `${SRC}/icon-512.png`;
const feature = `${SRC}/feature-graphic.png`;

await sharp(icon).resize(256, 256).webp({ quality: 85 }).toFile('public/images/pulse/icon-256.webp');
await sharp(icon).resize(180, 180).png({ compressionLevel: 9, palette: true }).toFile('public/images/pulse/apple-touch-icon.png');
await sharp(feature).resize(960).webp({ quality: 82 }).toFile('public/images/pulse/feature-graphic.webp');

// Share image: site background, violet glow, feature graphic as a rounded card.
const fg = await sharp(feature).resize(880, 430).png().toBuffer();
const mask = Buffer.from('<svg width="880" height="430"><rect width="880" height="430" rx="28" fill="#fff"/></svg>');
const fgRounded = await sharp(fg).composite([{ input: mask, blend: 'dest-in' }]).png().toBuffer();
const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630">
  <defs>
    <radialGradient id="g" cx="50%" cy="10%" r="75%"><stop offset="0" stop-color="#8E7CFF" stop-opacity=".45"/><stop offset="1" stop-color="#0A1020" stop-opacity="0"/></radialGradient>
  </defs>
  <rect width="1200" height="630" fill="#0A1020"/><rect width="1200" height="630" fill="url(#g)"/>
  <text x="600" y="580" text-anchor="middle" font-family="DejaVu Sans, Arial, sans-serif" font-size="30" fill="#C9D3E3">A Nifty Games Studios app · Android beta</text>
</svg>`;
await sharp(Buffer.from(svg))
  .composite([{ input: fgRounded, left: 160, top: 70 }])
  .png({ compressionLevel: 9, palette: true, colours: 256, dither: 0.3, effort: 10 })
  .toFile('public/og/pulse.png');
console.log('wrote public/images/pulse/* and public/og/pulse.png');
