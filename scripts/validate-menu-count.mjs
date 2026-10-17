import { readFile } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const rootDirectory = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const spec = await readFile(path.join(rootDirectory, 'docs/SPEC.md'), 'utf8');
const menuSource = await readFile(path.join(rootDirectory, 'src/data/menuData.ts'), 'utf8');
const categorySections = [...spec.matchAll(/^### .*?([1-7])\.\s+(.+)$/gm)];

if (categorySections.length !== 7) {
  throw new Error(`Expected 7 menu categories in SPEC.md; found ${categorySections.length}`);
}

const specItemsThroughFirstSixCategories = categorySections.slice(0, 6).reduce((total, match, index) => {
  const start = match.index + match[0].length;
  const end = categorySections[index + 1].index;
  const section = spec.slice(start, end);
  const bulletItems = (section.match(/^\s*-\s+/gm) ?? []).length;
  const inlineTeaItem = section.match(/^Chás \(450ml\):/m) ? 1 : 0;
  return total + bulletItems + inlineTeaItem;
}, 0);
const caipirinhaSectionStart = categorySections[6].index + categorySections[6][0].length;
const caipirinhaSection = spec.slice(caipirinhaSectionStart);
const caipirinhaSpecials = caipirinhaSection.match(/Caipirinha de (?:Cerveja|Cachaça com Rúcula e Pimenta)/g) ?? [];
const expectedItemCount = specItemsThroughFirstSixCategories + caipirinhaSpecials.length;
const itemsSection = menuSource.match(/items:\s*\[([\s\S]*?)\n\s*\],\s*\n\s*sauces:/)?.[1];

if (!itemsSection) throw new Error('Could not locate menuData.items');

const actualItemCount = (itemsSection.match(/^\s+id:\s*'/gm) ?? []).length;
if (actualItemCount !== expectedItemCount) {
  throw new Error(
    `Menu count mismatch: menuData has ${actualItemCount} items; SPEC.md describes ${expectedItemCount}`,
  );
}

console.log(`Menu count matches SPEC.md: ${actualItemCount} items across ${categorySections.length} categories.`);
