import { mkdir, stat } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

import sharp from "sharp";

const clientDirectory = path.resolve(
  path.dirname(fileURLToPath(import.meta.url)),
  "..",
);
const sourceDirectory = path.join(clientDirectory, "assets", "portfolio-demos");
const outputDirectory = path.join(
  clientDirectory,
  "public",
  "media",
  "portfolio",
);

const images = [
  { name: "demo-identite", widths: [480, 960, 1536] },
  { name: "demo-evenement", widths: [480, 960, 1536] },
  { name: "demo-contenu", widths: [480, 960, 1536] },
  { name: "demo-kalo-branding", widths: [480, 768, 1024] },
];
const encoders = {
  avif: { quality: 52, effort: 5 },
  webp: { quality: 82, effort: 6, smartSubsample: true },
};

await mkdir(outputDirectory, { recursive: true });

for (const { name, widths } of images) {
  const source = path.join(sourceDirectory, `${name}.png`);
  const metadata = await sharp(source).metadata();

  for (const width of widths) {
    for (const format of ["avif", "webp"]) {
      const output = path.join(outputDirectory, `${name}-${width}.${format}`);
      const pipeline = sharp(source).resize({
        width,
        withoutEnlargement: true,
      });
      await pipeline[format](encoders[format]).toFile(output);
      const { size } = await stat(output);
      console.log(`${path.basename(output)}: ${(size / 1024).toFixed(1)} KiB`);
    }
  }

  console.log(`${name}: ${metadata.width} × ${metadata.height} source`);
}
