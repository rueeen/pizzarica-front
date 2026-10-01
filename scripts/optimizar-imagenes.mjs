import sharp from 'sharp';
import { mkdir } from 'node:fs/promises';

// Los binarios derivados no se versionan: Vite los genera antes de desarrollo y build.
const outputDirectory = 'public/generated-images';
await mkdir(outputDirectory, { recursive: true });

const ibiza = await sharp('img/IBIZA.png')
  .resize({ width: 1440, height: 1080, fit: 'cover', position: 'centre', withoutEnlargement: true })
  // Suavizado imperceptible para mantener incluso la variante grande por debajo de 250 KB.
  .blur(0.7)
  .toBuffer();

await Promise.all(
  [480, 960, 1440].map((width) =>
    sharp(ibiza)
      .resize({ width })
      .webp({ quality: 78, effort: 6, smartSubsample: true })
      .toFile(`${outputDirectory}/pizza-ibiza-${width}.webp`),
  ),
);

const porcion = await sharp('img/piece-salami-pizza-olives-cheese-pepper-top-view.png')
  .trim()
  .toBuffer();

await Promise.all(
  [360, 720, 1080].map((width) =>
    sharp(porcion)
      .resize({ width, withoutEnlargement: true })
      .webp({ quality: 78, alphaQuality: 90, effort: 6, smartSubsample: true })
      .toFile(`${outputDirectory}/porcion-${width}.webp`),
  ),
);

console.log('Imágenes de la pizza y la porción generadas.');
