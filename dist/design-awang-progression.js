export const awangProgression = {
  slug: 'machination-roguelite-progression-model',
  title: 'Machination = Roguelite Progression Model',
  cover: 'assets/design/awang-progression-model.png',
  summary: 'Run Awang’s expedition through Alam Sela and see how room rewards, weapon power and health affect the chance of clearing a run.',
  sections: [
    {
      heading: 'Run the model',
      paragraphs: [
        'Press Play to preview the opening rounds and watch the Room Number chart. Open the full diagram to explore the longer run and compare weapon power, health and win ratio.'
      ],
      demo: 'awang-progression'
    },
    {
      heading: 'Read the results',
      bullets: [
        'Room Number shows how far Awang progresses through combat, recovery and trader encounters.',
        'Weapon Build Power tracks the gains from rewards such as herb mutations and weapon upgrades.',
        'Awang Health shows how damage and recovery add up over the run. Win Ratio measures completed runs as a share of total attempts.'
      ],
      paragraphs: [
        'This simulation uses working balance values. It helps compare how rewards and recovery affect a run through the final boss.'
      ]
    }
  ]
};

export function awangProgressionDemo() {
  const diagramId = '838e0842e89111f189880abc5ce0dcc9';
  const player = `https://my.machinations.io/e/diagram/${diagramId}?hosted=1&amp;diagram=1&amp;description=0&amp;theme=dark&amp;fit=auto`;
  const diagram = `https://machinations.io/community/diagrams/${diagramId}`;
  return `<iframe class="awang-progression-player" src="${player}" title="Awang roguelite progression simulation"
    loading="lazy" referrerpolicy="strict-origin-when-cross-origin" allow="fullscreen" allowfullscreen></iframe>
    <p><a class="design-reference" href="${diagram}" target="_blank" rel="noopener noreferrer">Open full diagram in Machinations</a></p>`;
}
