import fs from 'node:fs/promises';
import {artworks} from '../dist/art.js';
import {designArticles} from '../dist/design.js';
const required=['dist/index.html','dist/style.css','dist/mobile.css','dist/app.js','dist/scene.js','dist/cube-state.js','dist/assets/three.module.js','dist/assets/three.core.js','dist/assets/police-n-thief.jpg','dist/assets/combat-patrol.jpg','dist/assets/potionpendium.jpg','dist/assets/quantum-loom.jpg','dist/assets/Ahmad-Fadzil-CV.pdf','dist/assets/ahmad-fadzil.png'];
for(const file of required)await fs.access(file);
for(const art of artworks){for(const file of [art.image,art.thumbnail])await fs.access('dist/'+file);}
await fs.access('dist/art-gallery.js');
await fs.access('dist/design.js');
for (const article of designArticles) {
  if (article.presentation) {
    await fs.access('dist/' + article.presentation.cover.src);
    await fs.access('dist/' + article.presentation.pdf);
  }
  for (const section of article.sections) {
    for (const figure of section.figures || []) await fs.access('dist/' + figure.src);
  }
}
console.log('Static portfolio ready in dist/ — all required files present.');
