import {playerTypeFigures} from './design-player-type-figures.js';

const source = (slug, date) => ({url: `https://www.skeletoncodemachine.com/p/${slug}`, author: 'Exeunt Press', publication: 'Skeleton Code Machine', date});

export const playerTypeArticles = [
  {
    slug: 'the-8-kinds-of-fun', title: 'The 8 Kinds of Fun',
    summary: 'A vocabulary for the experiences players enjoy, from sensory pleasure to discovery and expression.',
    source: source('the-8-kinds-of-fun', '10 October 2023'),
    sections: [
      {heading: 'From mechanics to experience', paragraphs: ['The MDA framework connects mechanics, the dynamics they produce, and the experiences players feel. Its eight aesthetics help designers describe a desired experience more precisely.'], figures: playerTypeFigures['the-8-kinds-of-fun'].slice(0, 2)},
      {heading: 'Eight ways to enjoy play', bullets: ['Sensation: enjoyment through sight, sound, touch and physical interaction.', 'Fantasy: inhabiting an imagined world or identity.', 'Narrative: engagement with unfolding stories and drama.', 'Challenge: overcoming demanding obstacles.', 'Fellowship: sharing play and working with others.', 'Discovery: uncovering places, systems and possibilities.', 'Expression: creating and showing individuality.', 'Submission: enjoying familiar routines and repetitive activity.'], figures: playerTypeFigures['the-8-kinds-of-fun'].slice(2)},
      {heading: 'Use the vocabulary in design', paragraphs: ['These experiences overlap; eight categories cannot describe every pleasure. Use them to discuss design intentions and playtest feedback, while leaving room for experiences outside the model. The original article includes tabletop examples and further reading.']}
    ]
  },
  {
    slug: 'bartle-taxonomy-of-player-types', title: 'Bartle Taxonomy of Player Types',
    summary: 'Four approaches to play, organised by acting or interacting and by interest in players or the world.',
    source: source('bartle-taxonomy-of-player-types', '17 October 2023'),
    sections: [
      {heading: 'Read the interest graph', paragraphs: ['Richard Bartle’s 1996 study of MUD players describes two dimensions: acting upon versus interacting with, and orientation toward players versus the world. Their intersections produce four player types.'], figures: playerTypeFigures['bartle-taxonomy-of-player-types'].slice(0, 2)},
      {heading: 'Four approaches to play', bullets: ['Killers: acting on players through competition and domination.', 'Achievers: acting on the world through goals, progress and mastery.', 'Socializers: interacting with players through relationships and community.', 'Explorers: interacting with the world through discovery and experimentation.'], figures: playerTypeFigures['bartle-taxonomy-of-player-types'].slice(2)},
      {heading: 'Useful vocabulary, limited categories', paragraphs: ['A mechanism can satisfy one motivation while frustrating another. Consider who enjoys direct conflict, optimisation or conversation. Players can span quadrants, and competition does not automatically mean griefing. The original research concerned a limited population; use the graph to discuss expectations rather than assign permanent identities.']}
    ]
  },
  {
    slug: 'what-type-of-gamer-are-you', title: 'What Type of Gamer Are You?',
    summary: 'Quantic Foundry’s motivation model, nine gamer types and the ways player preferences blend.',
    source: source('what-type-of-gamer-are-you', '24 October 2023'),
    sections: [
      {heading: 'Six families of motivation', paragraphs: ['Quantic Foundry’s research groups motivations into Action, Social, Mastery, Achievement, Immersion and Creativity. These cover excitement, competition and community, challenge and strategy, completion and power, fantasy and story, and design and discovery.'], figures: playerTypeFigures['what-type-of-gamer-are-you'].slice(0, 2)},
      {heading: 'Nine gamer types', bullets: ['Acrobat: challenge and discovery.', 'Gardener: completion.', 'Slayer: fantasy, story and destruction.', 'Skirmisher: destruction and competition.', 'Gladiator: challenge, completion and community.', 'Ninja: competition and challenge.', 'Bounty Hunter: destruction and fantasy.', 'Architect: strategy and completion.', 'Bard: design, community and fantasy.'], figures: playerTypeFigures['what-type-of-gamer-are-you'].slice(2)},
      {heading: 'Blended profiles and practical limits', paragraphs: ['Profiles can combine a primary and secondary type. Compared with the eight kinds of fun and Bartle’s quadrants, this model offers more detailed, data-informed distinctions. Each remains an abstraction. Use the vocabulary to ask what players want, then observe playtests and talk with players. The original includes model comparisons, research links and talks.']}
    ]
  }
];
