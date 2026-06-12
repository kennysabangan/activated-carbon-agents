// One-shot helper run by .github/workflows/fetch-assets.yml to pull
// Higgsfield-generated imagery (CDN is unreachable from the dev sandbox)
// and write optimized webp files into public/images.
import sharp from "sharp";
import { mkdir, writeFile } from "node:fs/promises";

const CDN = "https://d8j0ntlcm91z4.cloudfront.net/user_2zmvw1xZwmTwOGw7vtfDHWQzRsk";

const assets = [
  { url: `${CDN}/hf_20260612_163237_e001f433-4359-4dd8-9196-365a5e469050.png`, out: "hero-carbon.webp", width: 1920, quality: 80 },
  { url: `${CDN}/hf_20260612_163240_9c1b6e3c-812a-4247-a987-d05448b4288a.png`, out: "about-carbon-pour.webp", width: 1400, quality: 82 },
  { url: `${CDN}/hf_20260612_163242_da5d1577-e358-4ff3-acfb-8e983b31b4e8.png`, out: "globe-network.webp", width: 1024, quality: 85 },
  { url: `${CDN}/hf_20260612_163246_27bb86a9-b055-4779-8e21-740c1060f795.png`, out: "product-water.webp", width: 1000, quality: 82 },
  { url: `${CDN}/hf_20260612_163248_32f1ff6c-9cde-4aee-baae-8d25aabd343a.png`, out: "product-air.webp", width: 1000, quality: 82 },
  { url: `${CDN}/hf_20260612_163250_1fb1de40-bf28-4cf6-9e2b-09c7edfa66ef.png`, out: "product-gold.webp", width: 1000, quality: 82 },
  { url: `${CDN}/hf_20260612_163253_ce360ed7-8648-492d-ba62-0782faf39e00.png`, out: "materials-trio.webp", width: 1800, quality: 80 },
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
