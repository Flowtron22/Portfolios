const figure = (name, width, height, caption) => ({
  src: `assets/design/multiplayer-balance/${name}.png`,
  width,
  height,
  alt: caption,
  caption
});

export const multiplayerBalance = {
  slug: 'balancing-multiplayer-competitive-games',
  title: 'Balancing Multiplayer Competitive Games',
  summary: 'Design meaningful choices, test the fairness of starting options, and improve your judgment through repeated play.',
  sections: [
    {
      heading: 'Balance and depth solve different problems',
      paragraphs: [
        'A winning tactic spreads quickly in multiplayer. If it works against almost everyone and has no practical answer, players soon face a choice between copying it and losing to it. Balance keeps several approaches viable. Depth keeps decisions interesting as players study the game and become more skilled.',
        'Test both expert play and the experience of learning the game. Experienced players can reveal a strategy that only becomes dominant after its timing is mastered. New players can show whether the tools to understand and answer that strategy are visible. A competitive community needs both a game worth studying and a way for new players to get involved.'
      ],
      figures: [figure('competitive-community', 396, 398, 'A diagram showing a core competitive audience within a broader player community.')]
    },
    {
      heading: 'Separate match decisions from starting choices',
      paragraphs: [
        'A move made during a match can be useful only in specific situations. A short-range interrupt can be a poor opening and an excellent response to a slow attack. It earns its place if the right situation matters and players can recognise it.',
        'Starting choices deserve a higher standard when players are committed for the match. Two similarly skilled players should each have a credible path to victory when they begin with different characters, factions or decks. In a symmetric design, players start with the same tool set. In an asymmetric design, their tools differ. The degree of commitment matters too. A class you can change during play is easier to balance than a character you must keep through the last round.'
      ]
    },
    {
      heading: 'Build counters that reward reading the opponent',
      paragraphs: [
        'Start by looking for dominated options. If two moves do the same job and one is safer, faster and just as effective, players have little reason to use the other. Vary what moves do as well as their strength. Range, recovery time, direction, resource cost and follow-up options can each create a different use. Cut choices that remain redundant.',
        'Yomi means reading an opponent. At layer zero, a player uses a strong default. At layer one, the opponent expects it and counters. At layer two, the first player anticipates that counter and chooses a response. At layer three, the opponent anticipates that response in turn. If that final answer leaves the opponent vulnerable to the original move, the loop can start again.',
        'When both players must commit before seeing the other choice, a situational move has room to work. Simultaneous orders create this directly. Timing and reaction delays in a fighting game, or fog of war in a strategy game, can create similar uncertainty. Keep the clues readable and check that a correct prediction gives the player a usable response.',
        'Balance the whole match. A player who earns a strong position should benefit from it. Check whether the advantage came from play, whether the opponent had a chance to prevent it, and how long the match continues after its outcome is effectively decided.'
      ],
      figures: [figure('yomi-layers', 420, 320, 'The counter sequence begins with Honda’s torpedo, then cycles through Ken’s fireball, Honda’s butt slam and Ken’s sweep before returning to the torpedo.')]
    },
    {
      heading: 'Test locked choices in two passes',
      paragraphs: [
        'Build safeguards that keep a bad interaction from repeating indefinitely. A combo system can shorten hit stun as a sequence continues, increase the rate at which airborne characters fall, or let a defender spend a resource to create space. In a deck game, giving each faction distinct strengths and weaknesses can leave room for counters as new combinations emerge.',
        'Ask skilled testers to rank starting options independently and explain the games behind their rankings. Fix options that crowd out the rest first because they can distort every other test. Next, bring options that players cannot reasonably win with into a credible range. Some choices will still be stronger than others, and a top ranking alone is no reason to weaken an option.',
        'Once the roster is broadly playable, test individual pairings. A character may perform well overall while having very few good answers against a specific opponent. Switch players and starting sides, then look for repeatable patterns. A hard counter can be healthy when players can swap tools during a match. It deserves closer attention when the matchup is locked at the start.'
      ]
    },
    {
      heading: 'Build intuition through shorter feedback loops',
      paragraphs: [
        'A new game may take years to produce enough evidence for a balance decision. Studying established competitive games gives you more feedback in less time. Pick a patch, write down what you expect its changes to do, and compare that prediction with expert matches and how strategies evolve afterward. Frame data, replays and community discussion can explain different parts of the result.',
        'Experienced players often notice something is wrong before they can name the cause. Treat that judgment as a lead. Have the player demonstrate the situation, write down the conditions and run it again with a small change. When choosing balance testers, look for people who follow competitive changes, can reproduce a problem and revise a prediction when play contradicts it.'
      ],
      figures: [figure('mental-iceberg', 414, 572, 'The mental iceberg depicts conscious thought above the surface and knowledge that is difficult to articulate below it.')]
    },
    {
      heading: 'Run a balance review',
      steps: [
        'Pick one choice made during a match and one choice locked before it. Write down how a player should be able to answer each.',
        'Play the strongest strategies against skilled opponents. Record when a response fails because of execution, information or a missing tool.',
        'Identify choices that crowd out the rest and starting options with few credible wins. Revisit the most difficult matchups once those extremes are under control.',
        'Change one rule or value at a time where practical. Keep a short record of the prediction, the result and any new problem the change uncovered.'
      ]
    },
    {
      heading: 'Further reading on intuition',
      bullets: [
        'Books listed in the handout include Blink by Malcolm Gladwell, Gut Feelings by Gerd Gigerenzer, Strangers to Ourselves by Timothy Wilson, and The Power of Intuition by Gary Klein.',
        'Research listed in the handout includes A Theory of Unconscious Thought by Dijksterhuis and Nordgren, On Making the Right Choice by Dijksterhuis and colleagues, and Unskilled and Unaware of It by Kruger and Dunning.'
      ]
    }
  ]
};
