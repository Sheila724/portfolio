// Gera os ícones PNG do PWA a partir da marca em SVG.
// Uso: npm run icons
import { mkdir } from "node:fs/promises";
import sharp from "sharp";

const mark = (pad) => {
  const s = 512;
  const inner = s - pad * 2;
  const k = inner / 28;
  return Buffer.from(`<svg xmlns="http://www.w3.org/2000/svg" width="${s}" height="${s}" viewBox="0 0 ${s} ${s}">
  <rect width="${s}" height="${s}" fill="#0c131c"/>
  <g transform="translate(${pad} ${pad}) scale(${k})" fill="none">
    <rect x="1" y="1" width="26" height="26" rx="7" fill="#172334" stroke="#2e425b" stroke-width="0.6"/>
    <rect x="6" y="8" width="16" height="4.5" rx="1.2" stroke="#93a3b8" stroke-width="1.4"/>
    <rect x="6" y="15.5" width="16" height="4.5" rx="1.2" stroke="#93a3b8" stroke-width="1.4"/>
    <circle cx="18.6" cy="10.25" r="1.3" fill="#3fd99a"/>
    <circle cx="18.6" cy="17.75" r="1.3" fill="#5cd6ec"/>
  </g>
</svg>`);
};

await mkdir("public/icons", { recursive: true });
const jobs = [
  ["public/icons/icon-192.png", 192, 40],
  ["public/icons/icon-512.png", 512, 40],
  ["public/icons/apple-touch-icon.png", 180, 56],
  ["public/icons/icon-maskable-512.png", 512, 110],
];
for (const [file, size, pad] of jobs) {
  await sharp(mark(pad)).resize(size, size).png().toFile(file);
  console.log("ok", file);
}
