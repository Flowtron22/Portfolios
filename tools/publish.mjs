import fs from 'node:fs/promises';
import path from 'node:path';
import {fileURLToPath} from 'node:url';
import {publishedLibraryCollections} from '../dist/library-content.js';
import {fullLibrarySections} from '../dist/library-article-index.js';
import {librarySamples} from '../dist/library-samples.js';
import {designArticles} from '../dist/design.js';

const source = fileURLToPath(new URL('../dist/', import.meta.url));
const output = fileURLToPath(new URL('../public-dist', import.meta.url));
const publicSections = Object.fromEntries(Object.entries(fullLibrarySections)
  .filter(([key]) => Object.hasOwn(publishedLibraryCollections, key)));
const publicArticles = new Set(Object.values(publicSections).flat());
const publicSamples = Object.fromEntries(Object.entries(librarySamples)
  .filter(([slug]) => publicArticles.has(slug)));
const publicImages = new Set(Object.values(publicSamples).flatMap(({src, original}) => [src, original].filter(Boolean)));
for (const slug of publicArticles) {
  const {images} = await import(`../dist/library-articles/${slug}.js`);
  for (const image of images) publicImages.add(image);
}
for (const {sections = [], assets = []} of designArticles) {
  for (const asset of assets) publicImages.add(asset);
  for (const section of sections) {
    for (const {src, original} of section.figures ?? []) {
      for (const image of [src, original]) {
        if (image?.startsWith('assets/design/') && !image.endsWith('.pdf')) publicImages.add(image);
      }
    }
  }
}

const replacedModules = new Map([
  ['library-content.js', ['publishedLibraryCollections', publishedLibraryCollections]],
  ['library-article-index.js', ['fullLibrarySections', publicSections]],
  ['library-samples.js', ['librarySamples', publicSamples]]
]);
const retiredModules = new Set([
  'cookie-content.js', 'cookie-samples.js', 'design-decks.js', 'design-original.js',
  'design-topic-figures.js', 'design-topics.js'
]);
const filteredImageFolders = ['assets/design', 'assets/library', 'assets/library-inline', 'assets/concept-inline'];

await fs.rm(output, {recursive: true, force: true});
await fs.cp(source, output, {recursive: true, filter(file) {
  const relative = path.relative(source, file).split(path.sep).join('/');
  if (replacedModules.has(relative) || retiredModules.has(relative)) return false;
  if (relative === 'assets/cookies-inline') return false;
  if (relative.startsWith('library-articles/')) {
    return publicArticles.has(path.basename(relative, '.js'));
  }
  if (filteredImageFolders.some(folder => relative.startsWith(`${folder}/`))) {
    return publicImages.has(relative) || [...publicImages].some(image => image.startsWith(`${relative}/`));
  }
  return true;
}});
for (const [file, [name, data]] of replacedModules) {
  await fs.writeFile(path.join(output, file), `export const ${name} = ${JSON.stringify(data)};\n`, 'utf8');
}
for (const image of publicImages) await fs.access(path.join(output, image));
console.log('Public portfolio ready in public-dist/');
