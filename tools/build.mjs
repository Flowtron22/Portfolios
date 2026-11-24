import fs from 'node:fs/promises';
import {artworks} from '../dist/art.js';
import {designArticles} from '../dist/design.js';
import {libraryCollections} from '../dist/library-content.js';
import {librarySamples} from '../dist/library-samples.js';
import {fullLibrarySections} from '../dist/library-article-index.js';
import {pandora} from '../dist/pandora.js';
import {workMedia} from '../dist/work-media.js';
const required=['dist/index.html','dist/style.css','dist/mobile.css','dist/app.js','dist/scene.js','dist/cube-menu.js','dist/cube-state.js','dist/assets/three.module.js','dist/assets/three.core.js','dist/assets/police-n-thief.jpg','dist/assets/combat-patrol.jpg','dist/assets/potionpendium.jpg','dist/assets/quantum-loom.jpg','dist/assets/codex-imperium.jpg','dist/assets/my-watt.jpg','dist/assets/Ahmad-Fadzil-CV.pdf','dist/assets/ahmad-fadzil.png'];
for(const file of required)await fs.access(file);
for (const {images = []} of Object.values(workMedia)) {
  for (const {file} of images) await fs.access(`dist/assets/work/${file}`);
}
for (const image of ['maut-preview.webp', 'maut-overhead.webp', 'maut-ruins-gameplay.webp', 'maut-camera-gameplay.webp']) {
  await fs.access(`dist/assets/${image}`);
}
for (const {image} of [pandora, pandora.poster, ...pandora.gallery]) {
  await fs.access(`dist/assets/${image}`);
}
for (const {src, poster} of pandora.videos) {
  await fs.access(`dist/assets/${src}`);
  await fs.access(`dist/assets/${poster}`);
}
for(const art of artworks){for(const file of [art.image,art.thumbnail])await fs.access('dist/'+file);}
await fs.access('dist/art-gallery.js');
await fs.access('dist/design.js');
for (const article of designArticles) {
  for (const section of article.sections) {
    for (const figure of section.figures || []) await fs.access('dist/' + figure.src);
  }
}
for (const [key, {groups}] of Object.entries(libraryCollections)) {
  for (const {entries} of groups) {
    for (const {slug, download, sections = []} of entries) {
      const sample = librarySamples[slug];
      if (!sample && Object.hasOwn(fullLibrarySections, key)) {
        throw new Error(`Missing library sample for ${slug}`);
      }
      if (sample) await fs.access('dist/' + sample.src);
      if (download) await fs.access('dist/' + download.src);
      for (const section of sections) {
        for (const figure of section.figures || []) await fs.access('dist/' + figure.src);
      }
    }
  }
}
const inlineImages = new Set();
for (const [key, slugs] of Object.entries(fullLibrarySections)) {
  const entries = libraryCollections[key].groups.flatMap(({entries}) => entries.map(({slug}) => slug));
  if (slugs.length !== entries.length || entries.some(slug => !slugs.includes(slug))) {
    throw new Error(`Full article list does not match the ${key} collection`);
  }
  for (const slug of slugs) {
    const {body, images} = await import(`../dist/library-articles/${slug}.js`);
    if (!body || !images.length) throw new Error(`Missing article body or images for ${slug}`);
    for (const image of images) inlineImages.add(image);
  }
}
for (const image of inlineImages) await fs.access('dist/' + image);
console.log('Static portfolio ready in dist/ — all required files present.');
