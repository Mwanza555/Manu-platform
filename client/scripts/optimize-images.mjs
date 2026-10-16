import { mkdir, rm, stat } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

import sharp from "sharp";

const scriptDirectory = path.dirname(fileURLToPath(import.meta.url));
const clientDirectory = path.resolve(scriptDirectory, "..");
const publicDirectory = path.join(clientDirectory, "public");
const outputDirectory = path.join(publicDirectory, "media");

const imageGroups = [
  {
    directory: "services",
    kind: "photo",
    widths: [480, 768, 1200],
    images: [
      ["services/identite-visuelle.jpg", "identite-visuelle"],
      ["services/design-graphique.jpg", "design-graphique"],
      ["services/communication.jpg", "communication"],
      ["services/direction-artistique.jpg", "direction-artistique"],
    ],
  },
  {
    directory: "profile",
    kind: "photo",
    widths: [480, 768, 960],
    images: [["manu.PNG", "manu"]],
  },
  {
    directory: "brand",
    kind: "artwork",
    widths: [320, 960, 1600],
    images: [
      ["manu_complet_B.png", "manu-complet-b"],
      ["manu_complet_N.png", "manu-complet-n"],
    ],
  },
  {
    directory: "brand",
    kind: "artwork",
    widths: [96, 512, 1200],
    images: [
      ["manu_sans_titre_B.png", "manu-sans-titre-b"],
      ["manu_sans_titre_N.png", "manu-sans-titre-n"],
    ],
  },
  {
    directory: "brand",
    kind: "artwork",
    widths: [256, 512, 960],
    images: [["manu_sans_ecrit.png", "manu-sans-ecrit"]],
  },
  {
    directory: "portfolio",
    kind: "artwork",
    widths: [480, 960, 1600],
    images: [["portfolio/project-01.png", "project-01"]],
  },
];

const encoders = {
  photo: {
    avif: { quality: 48, effort: 5 },
    webp: { quality: 76, effort: 6, smartSubsample: true },
  },
  artwork: {
    avif: { quality: 58, effort: 5 },
    webp: {
      quality: 86,
      alphaQuality: 100,
      effort: 6,
      smartSubsample: true,
    },
  },
};

const formatBytes = (bytes) => `${(bytes / 1024).toFixed(1)} KiB`;

await rm(outputDirectory, { recursive: true, force: true });
await mkdir(outputDirectory, { recursive: true });

const generatedFiles = [];

for (const group of imageGroups) {
  const groupDirectory = path.join(outputDirectory, group.directory);
  await mkdir(groupDirectory, { recursive: true });

  for (const [sourcePath, outputName] of group.images) {
    const absoluteSourcePath = path.join(publicDirectory, sourcePath);

    for (const width of group.widths) {
      for (const format of ["avif", "webp"]) {
        const outputPath = path.join(
          groupDirectory,
          `${outputName}-${width}.${format}`,
        );

        const pipeline = sharp(absoluteSourcePath)
          .rotate()
          .resize({
            width,
            withoutEnlargement: true,
          });

        await pipeline[format](encoders[group.kind][format]).toFile(outputPath);

        const outputStats = await stat(outputPath);
        generatedFiles.push({
          file: path.relative(publicDirectory, outputPath).replaceAll("\\", "/"),
          size: outputStats.size,
        });
      }
    }
  }
}

const totalSize = generatedFiles.reduce((total, file) => total + file.size, 0);

console.table(
  generatedFiles.map(({ file, size }) => ({
    file,
    size: formatBytes(size),
  })),
);
console.log(
  `Generated ${generatedFiles.length} optimized images (${formatBytes(totalSize)} total).`,
);
