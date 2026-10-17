import { mkdir, writeFile } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const profileUrl = 'https://www.instagram.com/restaurantemicaxu/';
const imageNames = [
  'post-tilapia.jpg',
  'post-camarao.jpg',
  'post-buffet.jpg',
  'post-caipirinha.jpg',
  'post-torresmo.jpg',
  'post-cerveja.jpg',
];
const scriptDirectory = path.dirname(fileURLToPath(import.meta.url));
const imageDirectory = path.resolve(scriptDirectory, '../public/images/instagram');

try {
  const response = await fetch(profileUrl, {
    headers: { 'user-agent': 'Mozilla/5.0 (compatible; MicaxuImageFetcher/1.0)' },
    signal: AbortSignal.timeout(15_000),
  });
  if (!response.ok) throw new Error(`Instagram returned HTTP ${response.status}`);

  const html = await response.text();
  const candidates = [
    ...html.matchAll(/<meta[^>]+property="og:image"[^>]+content="([^"]+)"/g),
    ...html.matchAll(/"display_url":"(https?:\\\/\\\/[^"]+)"/g),
  ]
    .map((match) => match[1].replaceAll('\\u0026', '&').replaceAll('\\/', '/'))
    .filter((url, index, urls) => urls.indexOf(url) === index)
    .slice(0, imageNames.length);

  if (candidates.length === 0) throw new Error('No public image URLs found in the profile response');

  await mkdir(imageDirectory, { recursive: true });
  for (const [index, imageUrl] of candidates.entries()) {
    const imageResponse = await fetch(imageUrl, { signal: AbortSignal.timeout(15_000) });
    if (!imageResponse.ok) throw new Error(`Image download failed with HTTP ${imageResponse.status}`);
    const image = new Uint8Array(await imageResponse.arrayBuffer());
    await writeFile(path.join(imageDirectory, imageNames[index]), image);
  }

  console.log(`Downloaded ${candidates.length} public Instagram image(s) to ${imageDirectory}`);
} catch (error) {
  console.error(`Instagram image fetch failed: ${error instanceof Error ? error.message : error}`);
  process.exitCode = 1;
}
