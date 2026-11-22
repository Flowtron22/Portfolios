import {designDecks} from '../dist/design-decks.js';
import fs from 'node:fs/promises';
import {artworks} from '../dist/art.js';
import {designArticles} from '../dist/design.js';
import {libraryCollections} from '../dist/library-content.js';
import {librarySamples} from '../dist/library-samples.js';
import {fullLibrarySections} from '../dist/library-article-index.js';
const required=['dist/index.html','dist/style.css','dist/mobile.css','dist/app.js','dist/scene.js','dist/cube-menu.js','dist/cube-state.js','dist/assets/three.module.js','dist/assets/three.core.js','dist/assets/police-n-thief.jpg','dist/assets/combat-patrol.jpg','dist/assets/potionpendium.jpg','dist/assets/quantum-loom.jpg','dist/assets/codex-imperium.jpg','dist/assets/my-watt.jpg','dist/assets/Ahmad-Fadzil-CV.pdf','dist/assets/ahmad-fadzil.png'];
for(const file of required)await fs.access(file);
for(const art of artworks){for(const file of [art.image,art.thumbnail])await fs.access('dist/'+file);}
await fs.access('dist/art-gallery.js');
await fs.access('dist/design.js');
for (const article of designArticles) {
  const deck = designDecks[article.number];
  if (!deck?.slides.length) throw new Error(`Missing presentation for Topic ${article.number}`);
  await fs.access('dist/' + deck.pdf);
  for (const slide of deck.slides) await fs.access('dist/' + slide.thumbnail);
  for (const section of article.sections) {
    for (const figure of section.figures || []) await fs.access('dist/' + figure.src);
  }
}
for (const [key, {groups}] of Object.entries(libraryCollections)) {
  for (const {entries} of groups) {
    for (const {slug} of entries) {
      const sample = librarySamples[slug];
      if (!sample && Object.hasOwn(fullLibrarySections, key)) {
        throw new Error(`Missing library sample for ${slug}`);
      }
      if (sample) await fs.access('dist/' + sample.src);
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
