import fs from 'node:fs/promises';
const required=['dist/index.html','dist/style.css','dist/app.js','dist/scene.js','dist/cube-state.js','dist/assets/three.module.js','dist/assets/three.core.js','dist/assets/police-n-thief.jpg','dist/assets/combat-patrol.jpg','dist/assets/potionpendium.jpg','dist/assets/quantum-loom.jpg','dist/assets/Ahmad-Fadzil-CV.pdf'];
for(const file of required)await fs.access(file);
console.log('Static portfolio ready in dist/ — all required files present.');
