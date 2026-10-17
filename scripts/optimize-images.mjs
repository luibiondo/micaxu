import { mkdir, readdir } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import sharp from 'sharp';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const sourceDirectory = path.join(root, 'public/images/restaurantemicaxu');
const outputDirectory = path.join(root, 'public/images/optimized');

// Each original was visually reviewed; promotional notices are not gallery photos.
const assets = [
  { prefix: 'img.png', id: 'logo', category: 'logo' },
  { prefix: 'imgi_10_', id: 'iscas-peixe', category: 'prato' },
  { prefix: 'imgi_17_', id: 'buffet-legumes', category: 'buffet' },
  { prefix: 'imgi_20_', id: 'buffet-frango', category: 'buffet' },
  { prefix: 'imgi_22_', id: 'buffet-peixes', category: 'buffet' },
  { prefix: 'imgi_25_', id: 'peixe-empanado', category: 'prato' },
  { prefix: 'imgi_26_', id: 'buffet-cogumelos', category: 'buffet' },
  { prefix: 'imgi_28_', id: 'buffet-variado', category: 'buffet' },
  { prefix: 'imgi_29_', id: 'ambiente-lago', category: 'ambiente' },
  { prefix: 'imgi_2_', category: 'logo', skip: 'Avatar de 150x150; usar logo de 500x500.' },
  { prefix: 'imgi_31_', id: 'buffet-empanados', category: 'buffet' },
  { prefix: 'imgi_37_', id: 'mesa-porcoes', category: 'ambiente' },
  { prefix: 'imgi_43_', id: 'buffet-gratinado', category: 'buffet' },
  { prefix: 'imgi_4_', category: 'inutilizavel', skip: 'Capa de destaque: localização, 150x150.' },
  { prefix: 'imgi_5_', category: 'inutilizavel', skip: 'Capa de destaque: aperto de mãos, 150x150.' },
  { prefix: 'imgi_6_', category: 'inutilizavel', skip: 'Capa de destaque: prato e talheres, 150x150.' },
  { prefix: 'imgi_7_', category: 'inutilizavel', skip: 'Capa de destaque: cloche, 150x150.' },
  { prefix: 'imgi_8_', category: 'ambiente', skip: 'Fachada coberta por aviso sobre pets; não usar como foto.' },
  { prefix: 'imgi_9_', category: 'ambiente', skip: 'Fachada coberta por aviso de ordem de chegada; não usar como foto.' },
];

const files = await readdir(sourceDirectory);
await mkdir(outputDirectory, { recursive: true });

for (const asset of assets) {
  const filename = files.find((file) =>
    asset.prefix === 'img.png' ? file === asset.prefix : file.startsWith(asset.prefix),
  );
  if (!filename) throw new Error(`Missing reviewed original: ${asset.prefix}`);
  if (asset.skip) {
    console.log(`${filename}: ${asset.category}; omitida: ${asset.skip}`);
    continue;
  }

  const output = await sharp(path.join(sourceDirectory, filename))
    .rotate()
    .resize({ width: 1600, height: 1600, fit: 'inside', withoutEnlargement: true })
    .webp({ quality: 80 })
    .toFile(path.join(outputDirectory, `${asset.id}.webp`));
  console.log(`${asset.id}: ${asset.category}; ${output.width}x${output.height}; ${output.size} bytes`);
}

// Faithful detail crops from the real table photo, without enlarging or inventing drinks.
const tableFilename = files.find((file) => file.startsWith('imgi_37_'));
if (!tableFilename) throw new Error('Missing original table photo');
for (const crop of [
  { id: 'cervejas', left: 1370, top: 650, width: 500, height: 800 },
  { id: 'suco-laranja', left: 945, top: 2025, width: 270, height: 500 },
]) {
  const output = await sharp(path.join(sourceDirectory, tableFilename))
    .extract({ left: crop.left, top: crop.top, width: crop.width, height: crop.height })
    .webp({ quality: 80 })
    .toFile(path.join(outputDirectory, `${crop.id}.webp`));
  console.log(`${crop.id}: bebida; ${output.width}x${output.height}; ${output.size} bytes`);
}
