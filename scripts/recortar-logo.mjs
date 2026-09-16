import sharp from 'sharp';
import { mkdir } from 'node:fs/promises';
await mkdir('src/assets', { recursive: true }); await mkdir('public', { recursive: true });
const source = sharp('img/DIGITAL_STICKER.png').extract({ left: 92, top: 680, width: 2331, height: 1162 }).extend({ top: 23, bottom: 23, left: 47, right: 47, background: { r: 0, g: 0, b: 0, alpha: 0 } });
const buffer = await source.png().toBuffer();
await Promise.all([480,960].map(width => sharp(buffer).resize({ width }).webp({ quality: 88 }).toFile(`src/assets/logo-pizzarica-${width}.webp`)));
const fitted = await sharp(buffer).resize({ width: 450, height: 450, fit: 'contain' }).png().toBuffer();
await sharp({ create: { width: 512, height: 512, channels: 4, background: '#ffffff' } }).composite([{ input: fitted, gravity: 'center' }]).png().toFile('public/favicon.png');
console.log('Logos y favicon generados.');
