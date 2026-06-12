// One-shot helper run by .github/workflows/fetch-assets.yml to pull
// Higgsfield-generated imagery (CDN is unreachable from the dev sandbox)
// and write optimized webp files into public/images.
import sharp from "sharp";
import { mkdir, writeFile } from "node:fs/promises";

const CDN = "https://d8j0ntlcm91z4.cloudfront.net/user_2zmvw1xZwmTwOGw7vtfDHWQzRsk";

// Round 2: text-free replacements for the hero and about images
// (first attempts had AI-generated typography baked in).
const assets = [
  { url: `${CDN}/hf_20260612_164211_bb6f824a-c72f-417c-a6c0-d385426f6207.png`, out: "hero-carbon-a.webp", width: 1920, quality: 80 },
  { url: `${CDN}/hf_20260612_164211_ab2346a3-c1b7-4514-86c6-6080fdae2982.png`, out: "hero-carbon-b.webp", width: 1920, quality: 80 },
  { url: `${CDN}/hf_20260612_164217_d4df2cad-8f37-4bb7-a422-3cde8c345f0f.png`, out: "about-pour-a.webp", width: 1400, quality: 82 },
  { url: `${CDN}/hf_20260612_164217_eb12e7d8-19b9-40ef-a06d-2b6f0f7238dc.png`, out: "about-pour-b.webp", width: 1400, quality: 82 },
];

await mkdir("public/images", { recursive: true });

for (const { url, out, width, quality } of assets) {
  const res = await fetch(url);
  if (!res.ok) throw new Error(`${out}: HTTP ${res.status}`);
  const buf = Buffer.from(await res.arrayBuffer());
  const webp = await sharp(buf).resize({ width, withoutEnlargement: true }).webp({ quality }).toBuffer();
  await writeFile(`public/images/${out}`, webp);
  console.log(`${out}: ${(webp.length / 1024).toFixed(0)} KB`);
}
