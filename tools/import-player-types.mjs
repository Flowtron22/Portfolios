import fs from 'node:fs/promises';
const captions = {
  'the-8-kinds-of-fun': ['Photo credit: Possessed Photography / Unsplash.', 'Eight aesthetics in the MDA framework.', 'Hellboy illustrates playing an imagined role.', 'Oath illustrates stories emerging through play.', 'Modern Art illustrates social play through auctions.', 'Wonderland’s War illustrates tactile play with chips.'],
  'bartle-taxonomy-of-player-types': ['Opening photograph from the Bartle article.', 'Bartle’s interest graph: acting / interacting and players / world.', 'Eschaton illustrates competitive interaction.', 'Paladins of the West Kingdom illustrates differing expectations of interaction.'],
  'what-type-of-gamer-are-you': ['Photo credit: Pawl Czerwinski / Unsplash.', 'Quantic Foundry’s motivation model.', 'The author’s mapping of gamer types to motivations.']
};
const inventory = {};
for (const [slug, labels] of Object.entries(captions)) {
  const html = await fs.readFile(`.local/sources/${slug}.html`, 'utf8');
  const images = [...html.matchAll(/<img\b[^>]*data-attrs="([^"]+)"[^>]*>/g)];
  if (images.length !== labels.length) throw new Error(`Unexpected image count: ${slug}`);
  inventory[slug] = [];
  await fs.mkdir(`dist/assets/design/player-types/${slug}`, {recursive: true});
  for (const [index, match] of images.entries()) {
    const data = JSON.parse(match[1].replaceAll('&quot;', '"').replaceAll('&amp;', '&'));
    const extension = new URL(data.src).pathname.split('.').pop();
    const src = `assets/design/player-types/${slug}/image-${index + 1}.${extension}`;
    const response = await fetch(data.src);
    if (!response.ok) throw new Error(`Image download failed: ${response.status}`);
    await fs.writeFile(`dist/${src}`, Buffer.from(await response.arrayBuffer()));
    inventory[slug].push({src, original: data.src, width: data.width, height: data.height, alt: labels[index], caption: labels[index]});
  }
  console.log(`${slug}: ${images.length} images`);
}
await fs.writeFile('dist/design-player-type-figures.js', `export const playerTypeFigures = ${JSON.stringify(inventory, null, 2)};\n`);
