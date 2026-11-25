export const awangProgression = {
  slug: 'machination-roguelite-progression-model',
  title: 'Machination = Roguelite Progression Model',
  cover: 'assets/design/dungeon-survival-resource-loop.png',
  summary: 'Simulate a roguelite loop where clearing rooms earns roots, roots become herb mutations, and 15 clears secure victory.',
  sections: [
    {
      heading: 'Run the model',
      paragraphs: [
        'Press Play and follow the Room Progress chart. Each cleared encounter advances the run and drops roots from the Root Garden.'
      ],
      demo: 'awang-progression'
    },
    {
      heading: 'Follow the resources',
      bullets: [
        'Each clear adds one point to Room Progress and drops three to five roots.',
        'Herb Synthesis consumes two roots to produce one Herb Mutation.',
        'Victory triggers when Room Progress reaches 15.'
      ]
    }
  ]
};

export function awangProgressionDemo() {
  const diagramId = 'c46443f2e8b011f189880abc5ce0dcc9';
  const player = `https://my.machinations.io/e/diagram/${diagramId}?hosted=1&amp;diagram=1&amp;description=0&amp;theme=dark&amp;fit=auto`;
  const diagram = `https://my.machinations.io/d/dungeon-survival-resource-loop/${diagramId}`;
  return `<iframe class="awang-progression-player" src="${player}" title="Dungeon Survival Resource Loop simulation"
    loading="lazy" referrerpolicy="strict-origin-when-cross-origin" allow="fullscreen" allowfullscreen></iframe>
    <p><a class="design-reference" href="${diagram}" target="_blank" rel="noopener noreferrer">Open full diagram in Machinations</a></p>`;
}
