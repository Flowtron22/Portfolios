import {playerTypeFigures} from './design-player-type-figures.js';

const source = date => ({author: 'Exeunt Press', publication: 'Skeleton Code Machine', date});
const section = (heading, ...paragraphs) => ({heading, paragraphs});
const illustrated = (figures, heading, ...paragraphs) => ({heading, paragraphs, figures});

const fun = playerTypeFigures['the-8-kinds-of-fun'];
const bartle = playerTypeFigures['bartle-taxonomy-of-player-types'];
const quantic = playerTypeFigures['what-type-of-gamer-are-you'];

export const playerTypeArticles = [
  {
    slug: 'the-8-kinds-of-fun',
    title: 'The 8 Kinds of Fun',
    summary: 'Use eight kinds of player experience to decide what to build and what to look for in a playtest.',
    source: source('10 October 2023'),
    sections: [
      illustrated(fun.slice(0, 2), 'How rules become experiences',
        'In Mechanics, Dynamics, and Aesthetics (MDA), mechanics are the rules and actions the team builds. Dynamics are the patterns that emerge when people play. Aesthetics are the experiences those patterns create. A limited radio battery is a mechanic. Teammates agreeing when to speak and when to stay quiet is a dynamic. The trust and tension they feel are part of the aesthetic.',
        'Start with the experience you want, then work backwards. If players should feel like a rescue crew, ask what would make them rely on each other. Try giving the navigator the map and the pilot the controls. Watch a team use those tools before deciding whether it needs more rules.'),
      section('Sensation',
        'Sensation is pleasure from what a game feels, sounds or looks like. In a pottery game, shaping clay could feel good through the resistance of the controls, the sound of the wheel and the way the surface responds. Playtest the interaction before adding a score. See whether players repeat it for the feel alone.'),
      illustrated([fun[2]], 'Fantasy',
        'Fantasy is the pleasure of inhabiting an imagined role or world. Give a mountain courier decisions that make sense for the job, such as choosing which letters to carry through a storm. The role should influence what players do throughout the session.'),
      illustrated([fun[3]], 'Narrative',
        'Narrative comes from caring how events unfold. It can be authored through characters and scenes, or emerge from a set of systems. A courier who abandons a profitable delivery to warn a village has a story to tell if the village later responds to that decision. Ask players to recount what happened and why it mattered.'),
      section('Challenge',
        'Challenge is satisfaction from learning to overcome an obstacle. A windy landing can ask for timing, a tight supply budget can ask for planning, and a rival crew can ask for adaptation. Give players enough information to understand a failure and enough control to attempt a different approach.'),
      illustrated([fun[4]], 'Fellowship',
        'Fellowship is the experience of sharing play. In a co-op kitchen, letting each player see a different part of an order can make conversation useful. Leave room for players to teach each other and recover together when somebody makes a mistake.'),
      section('Discovery',
        'Discovery is the pleasure of finding places, information or unexpected ways to use a system. A tide schedule can reveal an underwater passage, and the same schedule might explain why a fishing spot changes. Give players clues they can notice and test so the discovery feels earned.'),
      section('Expression',
        'Expression gives players room to make choices that reflect their taste or identity. Two couriers might earn the same pay while designing different uniforms, decorating their depots or choosing who they serve. Leave enough viable options for those decisions to stay personal.'),
      illustrated([fun[5]], 'Submission',
        'Submission is the pleasure of settling into play as a pastime. Sorting a collection, harvesting a garden or taking a familiar route can offer a satisfying rhythm with few decisions. Test whether players choose to repeat the routine when rewards are optional. If they only repeat it to unlock something else, investigate what that routine contributes.'),
      {
        heading: 'Turn the model into a playtest',
        steps: [
          'Choose two intended experiences and describe the behaviour that would tell you each one is happening.',
          'Prototype one rule or interaction that could produce both. A night route might offer discovery through hidden paths and challenge through limited visibility.',
          'Watch where the experiences support or compete with each other. A timer that makes the route exciting may also stop people from looking for clues.',
          'Ask players to describe a specific moment they would repeat. Record unexpected pleasures too. The eight terms give you a starting vocabulary, and players may describe experiences outside it.'
        ]
      }
    ]
  },
  {
    slug: 'bartle-taxonomy-of-player-types',
    title: 'Bartle Taxonomy of Player Types',
    summary: 'Use Bartle’s four approaches to spot where multiplayer systems support or clash with what players want.',
    source: source('17 October 2023'),
    sections: [
      illustrated(bartle.slice(0, 2), 'Read the two axes',
        'Richard Bartle developed this taxonomy from discussions about MUDs, shared online worlds commonly played through text. One axis asks what a person pays attention to, other players or the world. The other asks how they engage, by acting on something to produce an outcome or by interacting with it to see what develops.',
        'Picture a shared town with a market, dangerous ruins and rival guilds. The same visit can be about finishing a quest, testing a rumour, helping a friend or outplaying a rival. The axes describe what the player is trying to get from the session.'),
      section('Achievers act on the world',
        'An Achiever might map out the shortest route to a quest reward, assemble a complete set of tools or try to clear every contract in a district. Clear goals and visible progress help them plan. A goal can also reward ingenuity. Offer a few viable ways to earn the same badge and see which approaches players develop.'),
      section('Explorers interact with the world',
        'An Explorer might return to the ruins at different times to see whether doors open, or test how three ordinary items work together. Useful surprises follow rules players can investigate. If every secret appears automatically on the map, that player loses a reason to form and test a theory.'),
      section('Socializers interact with players',
        'A Socializer might visit the market to trade stories, introduce a newcomer or arrange a guild event. Shared gathering places and activities people can join mid-session create openings for those relationships. Watch how long it takes a new player to find and contribute to a group.'),
      illustrated([bartle[2]], 'Killers act on players',
        'Bartle’s label covers players motivated by exerting an effect on others. A fair duel, a rivalry over territory and deliberate harassment can all involve acting on another player, with very different outcomes for the people involved. Design the contest around clear stakes and ways to opt in. Observe whether the losing side still wants another match.'),
      illustrated([bartle[3]], 'Design for clashes between motivations',
        'Suppose guild raids can destroy market stalls. A player seeking competition gets a high-stakes target. Someone who spent weeks unlocking and decorating a stall may leave after losing it overnight. Try contestable guild outposts alongside a protected market. Then check whether the contest still gives rivals enough reason to engage and whether traders can pursue their goals.',
        'A single system can also serve several motives. A group expedition can offer a completion badge, an unexplained device and a reason to invite somebody. Observe what players talk about after the expedition. That can reveal which parts mattered to them.'),
      section('Use the taxonomy as a question',
        'The four categories came from a particular community and genre. The same person may chase a leaderboard on Tuesday and spend Saturday showing friends around the map. In a test, ask what they came to do, watch what they actually spend time on, and compare what happens when another player interferes. Use the answers to tune the system and the expectations you set before people join.')
    ]
  },
  {
    slug: 'what-type-of-gamer-are-you',
    title: 'What Type of Gamer Are You?',
    summary: 'Explore Quantic Foundry’s six motivation families and nine profiles through concrete player choices.',
    source: source('24 October 2023'),
    sections: [
      illustrated(quantic.slice(0, 2), 'What a motivation profile measures',
        'Quantic Foundry researchers Nick Yee and Nicolas Ducheneaut used survey responses to study what people enjoy in video games. A motivation profile describes a preference across several dimensions. For instance, someone can strongly value story and strategy while having little interest in completing every side quest. The model also groups recurring combinations into profiles.'),
      {
        heading: 'Six families, twelve motivations',
        bullets: [
          'Action includes Destruction and Excitement. Smashing through a wall can satisfy the appeal of impact. Escaping through it while a room collapses can add speed and suspense.',
          'Social includes Competition and Community. A timed duel gives people a rival to beat. A standing team gives them people to return to and cooperate with.',
          'Mastery includes Challenge and Strategy. A tight parry window tests execution. Choosing a route with scarce supplies asks the player to plan.',
          'Achievement includes Completion and Power. One player may collect every relic because they want a finished set. Another might target the relic that makes their build stronger.',
          'Immersion includes Fantasy and Story. Living as a starship mechanic feeds the role fantasy. Caring whether a stranded rival finds their crew feeds the story.',
          'Creativity includes Design and Discovery. Building a custom workshop lets someone express taste. Probing a machine for hidden interactions rewards curiosity.'
        ]
      },
      {
        heading: 'Nine profiles in the same game',
        paragraphs: ['Imagine a game about building a space station. These are nine reasons people might choose different activities when they log in.'],
        bullets: [
          'Acrobat. Repeats a difficult docking run to perfect the sequence and find more efficient trajectories.',
          'Gardener. Keeps the hydroponics deck running and gradually fills a catalogue of plant varieties.',
          'Slayer. Wants to inhabit the lead role in a story campaign and enjoy the spectacle of its encounters.',
          'Skirmisher. Joins a short match to outplay another crew, then queues for another round.',
          'Gladiator. Takes on difficult raids with a regular team and pursues the rewards that mark their progress.',
          'Ninja. Practises precise manoeuvres and compares performance with other skilled pilots.',
          'Bounty Hunter. Roams the map as a mercenary and looks for targets that put powerful gear to use.',
          'Architect. Plans power, storage and transport so a growing station still runs efficiently.',
          'Bard. Builds a themed meeting place and gives other players roles in the events they host there.'
        ],
        figures: [quantic[2]]
      },
      section('Blended profiles',
        'A station builder may spend Monday balancing power consumption and Friday hosting a role-play event. Architect and Bard together describe more of that player’s choices than either label alone. Design investigations work best when they ask which motivation matters in a particular activity. A blended profile can suggest what to look for, and observation can confirm what actually happens.'),
      section('Choose the model that fits the question',
        'The eight kinds of fun help a team name the experience it is trying to create. Bartle’s axes help explain why people using the same shared world can get in each other’s way. Quantic Foundry gives a team more detail when it needs to distinguish motivations that commonly travel together, such as enjoying difficulty while also wanting completion.'),
      {
        heading: 'Test motivations through choices',
        steps: [
          'Pick a mechanic and write down two plausible reasons players would use it. Someone crafting a spacesuit may want stronger equipment or a recognisable look.',
          'Offer both choices with comparable time costs. Watch which option players choose and what they do once they have it.',
          'Ask what they wanted from the activity and how they decided. Look for the same pattern across sessions before committing to a design change.'
        ]
      }
    ]
  }
];
