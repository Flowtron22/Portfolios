const actions = ['Attack', 'Block', 'Throw'];
export const yomiPayoffs = [
  [0, -10, 30],
  [10, 0, -20],
  [-30, 20, 0]
];

export const yomi = {
  slug: 'yomi-rock-paper-scissors-counterplay',
  title: 'Yomi: The Rock-Paper-Scissors Philosophy in Competitive Game Design',
  cover: 'assets/design/yomi-counterplay.png',
  summary: 'Read opponents, calculate the value of a counter, and design MOBA matchups that give both sides room to adapt.',
  sections: [
    {
      heading: 'Give every strong action an answer',
      paragraphs: [
        'Yomi means reading the opponent. In a competitive game, a player can notice a habit, predict the next decision, and act on that prediction. The design has to give them a response worth attempting.',
        'Rock beats scissors, scissors beats paper, and paper beats rock. This cycle is intransitive because there is no single best option. In a fighting game, an attack can interrupt a throw, a block can stop an attack, and a throw can beat a block. A strategy game can give aggression, defense and economic investment a similar relationship. A team fight can do the same with engage, disengage and poke.'
      ]
    },
    {
      heading: 'Read the next choice and the reply',
      steps: [
        'Layer 0. I attack because it is my strongest default.',
        'Layer 1. You expect the attack, so you block.',
        'Layer 2. I predict your block and throw instead.',
        'Layer 3. You expect the throw and interrupt it with an attack.'
      ],
      paragraphs: [
        'The same action can return for a different reason. Repeating an attack on the fourth move may be a deliberate read. The cycle stays interesting when choices carry enough commitment that a player cannot safely cover every response at once.'
      ]
    },
    {
      heading: 'Calculate the value of a read',
      paragraphs: [
        'The rows are your choices and the columns are your opponent’s. Each cell gives the point change from your perspective. A positive value is your gain and your opponent’s loss. Matching actions tie. The winning actions have different rewards, so they do not need to appear equally often.',
        'Expected value adds each outcome multiplied by its probability. Against an opponent who attacks 50% of the time, blocks 40% and throws 10%, blocking is worth (0.50 × 10) + (0.40 × 0) + (0.10 × −20) = +3 points. Attack is worth −1 and throw is worth −7, which makes block the best response to this particular pattern.',
        'The equilibrium mix for this matrix is one-third attack, one-half block and one-sixth throw. Against that mix, every individual action has an expected value of zero. Try the equilibrium preset and then switch to an opponent with a habit. The best response changes as soon as their choices become predictable.'
      ],
      table: {
        caption: 'Payoff for your action against the opponent’s action',
        columns: ['Your action', ...actions],
        rows: actions.map((action, index) => [action, ...yomiPayoffs[index]])
      },
      demo: 'yomi-payoff'
    },
    {
      heading: 'Map counters across five MOBA roles',
      paragraphs: [
        'Consider five archetypes inspired by Honor of Kings: a farm-lane marksman, a mid-lane mage, a jungle assassin, a roaming tank and a clash-lane fighter. The model below is a design exercise. Lane assignments and counter relationships vary by hero, build, positioning and phase of the match.'
      ],
      bullets: [
        'Marksman pressures tank when there is time and space for sustained damage.',
        'Tank checks assassin by protecting the target and interrupting the burst.',
        'Assassin threatens mage by closing the distance before the mage can control it.',
        'Mage controls fighter with range, area denial and crowd control.',
        'Fighter threatens marksman by surviving the approach and closing the gap.'
      ],
      figures: [{
        src: 'assets/design/yomi-counterplay.png',
        width: 960,
        height: 640,
        alt: 'Five-way counter cycle: marksman beats tank, tank beats assassin, assassin beats mage, mage beats fighter, fighter beats marksman.'
      }]
    },
    {
      heading: 'Use the matrix to find matchups worth testing',
      paragraphs: [
        'The cycle highlights a few primary relationships. A full matrix also captures secondary ones, such as an assassin threatening a marksman or a fighter wearing down a tank. Read a row against its column. +2 is a strong advantage, +1 is situational, 0 is neutral, and negative scores indicate the corresponding disadvantages.',
        'These scores are design hypotheses. They do not represent observed win rates or an official Honor of Kings balancing model. Test them with different gear, gold leads, cooldowns and teammates before drawing conclusions.'
      ],
      table: {
        caption: 'Illustrative MOBA class counter matrix',
        columns: ['Class', 'Marksman', 'Mage', 'Assassin', 'Tank', 'Fighter'],
        rows: [
          ['Marksman', 0, -1, -2, 2, -1],
          ['Mage', 1, 0, -2, -1, 2],
          ['Assassin', 2, 2, 0, -2, -1],
          ['Tank', -2, 1, 2, 0, -1],
          ['Fighter', 1, -2, 1, 1, 0]
        ]
      }
    },
    {
      heading: 'Leave room for counterplay after the draft',
      paragraphs: [
        'An assassin wants to reach a marksman, but the tank has saved a stun. The assassin feints an approach to draw it out. The tank reads the feint and holds the ability while the marksman repositions. The matchup sets the conditions. The players still have to decide when to commit.',
        'A soft counter gives one side favourable conditions and leaves the other side a way to respond through timing, positioning, team support or items. A hard counter can shut down a larger share of the opponent’s options. Use hard counters carefully when players are locked into a hero. A bad draft matchup can still make for a good game if teams have meaningful decisions once play begins.'
      ]
    },
    {
      heading: 'Playtest the answer, then test its counter',
      steps: [
        'Define the combat job of each hero and sketch primary and secondary counter relationships.',
        'Write down the tell, commitment window and payoff for each key action. Give the defender a response and the attacker a reason to vary their timing.',
        'Test the same matchup with different builds and at different power spikes. Swap players and roles to see when the projected advantage holds.',
        'Compare playtest observations with telemetry. Separate a dominant strategy from a useful situational counter before changing damage or cooldowns.'
      ]
    }
  ]
};
