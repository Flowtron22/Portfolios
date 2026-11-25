export const awangProgression = {
  slug: 'machination-roguelite-progression-model',
  title: 'Machination = Roguelite Progression Model',
  cover: 'assets/design/roguelike-run-risk-reward-death.png',
  summary: 'See how far a dungeon run lasts as combat damage rises, traps take their toll, and gold buys healing.',
  sections: [
    {
      heading: 'Run the model',
      paragraphs: [
        'Press Play and follow the Health Pool as the adventurer descends. Replay to see how different rolls for combat damage, traps and loot change how far the run gets.'
      ],
      demo: 'awang-progression'
    },
    {
      heading: 'Follow the resources',
      bullets: [
        'Exploration and risk. Dungeon Entrance advances Dungeon Floor by one each step. Combat Damage removes health equal to a six-sided die roll plus half the floor depth, rounded down. Deadly Trap has a 15% chance per floor to deal 40 damage.',
        'Loot and recovery. Loot Cache adds one to eight coins per floor to Gold Purse. When at least 15 coins are available, Local Tavern automatically spends 15 to restore 25 HP, up to the 100 HP cap.',
        'Survival limit. Game Over ends the run when health reaches zero. Deeper floors increase combat damage while tavern healing stays fixed, so recovery becomes less able to keep up.'
      ]
    },
    {
      heading: 'What the diagram reveals about the core loop',
      paragraphs: [
        'The loop is visible at a glance. Descending increases danger and earns gold. Gold buys back health, and the health you recover lets you descend further. The diagram shows where those systems connect and where the loop breaks when damage outpaces healing.',
        'Compare several runs to distinguish a sudden trap death from steady health loss over several floors. They suggest different changes. Lowering trap damage reduces sudden deaths. Changing the tavern price affects how often players can recover. Adjust one value at a time in a copy of the model, replay it, and compare floors reached before committing the change to the game.'
      ]
    }
  ]
};

export function awangProgressionDemo() {
  const diagramId = '66987240e8c211f189880abc5ce0dcc9';
  const player = `https://my.machinations.io/e/diagram/${diagramId}?hosted=1&amp;diagram=1&amp;description=0&amp;theme=dark&amp;fit=auto`;
  const diagram = `https://my.machinations.io/d/roguelike-run-risk-reward-death/${diagramId}`;
  return `<iframe class="awang-progression-player" src="${player}" title="Roguelike run risk, reward and death simulation"
    loading="lazy" referrerpolicy="strict-origin-when-cross-origin" allow="fullscreen" allowfullscreen></iframe>
    <p><a class="design-reference" href="${diagram}" target="_blank" rel="noopener noreferrer">Open full diagram in Machinations</a></p>`;
}
