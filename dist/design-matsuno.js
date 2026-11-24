export const matsuno = {
  slug: 'yasumi-matsuno-designing-consequences',
  title: 'Yasumi Matsuno and the Design of Consequences',
  summary: 'How Ogre Battle, Tactics Ogre and Vagrant Story make power, allegiance and risk matter to the player, and what a small team can take from them.',
  sections: [
    {
      heading: 'A victory can cost you the campaign',
      paragraphs: [
        'In Ogre Battle, an army can become better at winning fights while losing the public support it needs. The composition and alignment of the units you send to liberate towns influence your reputation. From the player’s perspective, taking a town and earning its support are two different outcomes.',
        'That tension is what I find most useful in Yasumi Matsuno’s work. The player commands groups that fight automatically, so the setup and deployment carry much of the decision. Sending the most effective unit makes sense for the immediate fight. Sending a unit that earns the town’s trust serves the campaign. Combining RPG progression with indirect military command gave the game room for both objectives.'
      ],
      references: [
        {label: 'Ogre Battle instruction manual', href: 'https://www.world-of-nintendo.com/manuals/super_nes/ogre_battle.shtml'},
        {label: 'Ogre Battle and Tactics Ogre developer interviews', href: 'https://shmuplations.com/tacticsogre/'}
      ]
    },
    {
      heading: 'Start with the history that creates the choice',
      paragraphs: [
        'Matsuno described starting with the history of a fictional world and looking for the period worth telling a story about. For a designer, the useful part is working out who controls land, supplies and legitimacy before assigning motives to a cast. A character’s choices begin to make sense once you know whom they depend on and what they stand to lose.',
        'Tactics Ogre puts that approach to work at Balmamusa. An order to massacre civilians makes loyalty to the rebellion collide with the reasons a person might have joined it. Obeying and refusing lead to different routes and relationships. How you respond to authority changes the campaign you have to navigate.',
        'When adapting this approach, I would research how a real institution works before borrowing its imagery. A port levy, an inherited debt or a contested supply route can give two factions credible reasons to oppose one another. One of those relationships can then become the objective of an encounter.'
      ],
      references: [{label: 'Tactics Ogre anniversary interview', href: 'https://www.frontlinejp.net/2020/10/28/tactics-ogre-25th-anniversary-interview-part-5/'}]
    },
    {
      heading: 'Make the cost of power visible',
      paragraphs: [
        'In Vagrant Story, extending an attack chain pays off immediately, while the resulting RISK makes attacks less reliable and leaves the character more vulnerable. The same input that extends a good round can make the next one harder. That gives the player a reason to stop even when the game will let them continue.',
        'Final Fantasy Tactics puts a different price on some spell casts. A powerful action can resolve after other units have moved, so the player has to read the turn order and think about where units will be when it lands. The job system adds another layer by letting characters use abilities learned in other jobs. Combinations are worth exploring because terrain, party composition and timing can change which build helps most.',
        'Both cases depend on the player being able to read the cost before committing. If a missed spell feels arbitrary, the first thing I would check is whether the interface makes the timing and target clear. If testers can see the trade-off and still use the same build in every encounter, I would look at the encounters before adding more abilities.'
      ],
      references: [
        {label: 'Vagrant Story developer interviews', href: 'https://shmuplations.com/vagrantstory/'},
        {label: 'Final Fantasy Tactics developer interview', href: 'https://shmuplations.com/fft/'}
      ]
    },
    {
      heading: 'Let players test a decision again',
      paragraphs: [
        'Tactics Ogre: Reborn keeps two kinds of rewind from the PSP remake. Chariot Tarot lets players revisit moves within a fight. World Tarot lets them return to earlier points in the story and pursue another route with their forces intact. Rewind changes the cost of finding out what another decision would have done.',
        'That gives a team two separate questions to test. How far back does a player need to go to understand a tactical mistake? How much of the campaign should they replay to see what a political choice changed? For a small prototype, save just before the decision and let testers see both outcomes. Their reactions can help establish how much of the replay the shipped game needs.'
      ],
      references: [{label: 'Tactics Ogre: Reborn overview', href: 'https://www.square-enix-games.com/en_US/games/tactics-ogre-reborn'}]
    },
    {
      heading: 'Give the team a decision it can build around',
      paragraphs: [
        'The original Tactics Ogre planning documents show two different jobs for a game design document. The nine-page proposal set out a direction and already outlined ideas for the map and turn system. An expanded 59-page version gave the team a more detailed basis for building it. The useful distinction is between getting agreement on the experience and settling the rules people need to implement.',
        'In the Vagrant Story interviews, Matsuno describes the director’s role as bringing different creative contributions together. He also explains why even ordinary monsters needed to last long enough for players to see their behaviour. That requirement touches AI, animation, combat balance and feedback. A brief can give those disciplines a shared test. Can a player spot an enemy’s retreat pattern and change their next move because of it?',
        'Collaboration also matters when assigning credit. Hiroyuki Ito led battle design on Final Fantasy XII. Its Gambit system is a team example of moving decisions upstream. Players set priorities for party members, see how those priorities play out, then revise them when the party’s behaviour exposes a bad assumption.'
      ],
      references: [
        {label: 'Matsuno on the original Tactics Ogre planning documents', href: 'https://www.4gamer.net/games/116/G011621/20110426090/'},
        {label: 'Final Fantasy XII developers on Gambits', href: 'https://blog.playstation.com/2017/07/07/extended-play-how-final-fantasy-xiis-gambit-created-one-of-the-most-distinct-rpgs-ever/'}
      ]
    },
    {
      heading: 'Prototype one consequence in PANDORA',
      paragraphs: [
        'For PANDORA, I would test these ideas with a village treatment decision. Awang returns with enough medicine to treat one patient before the next expedition. Treating the ferryman could reopen a supply route. Treating a child could earn a household’s trust and access to its knowledge of local remedies. Either choice leaves someone waiting, and both start from a shortage the player can understand.',
        'Both outcomes could lead into the same expedition, with a changed resource and a short follow-up in the village. That scope makes it possible to test the decision before commissioning unique levels or scripting long branches.'
      ],
      steps: [
        'Show both patients and establish why medicine is scarce before asking for a choice.',
        'Give each treatment an immediate result and one observable consequence on the next visit.',
        'Ask testers what they expected, what they saw afterward and whether they can explain the connection. Change the cues or the consequence if those answers diverge.'
      ],
      figures: [{
        src: 'assets/design/matsuno-treatment-choice.png',
        width: 960,
        height: 540,
        alt: 'One dose of medicine. Treat the ferryman to reopen a supply route, or treat the child to learn a local remedy. Both outcomes rejoin the same expedition.',
        caption: 'A proposed PANDORA prototype. Two outcomes change the village while sharing the next expedition.'
      }]
    }
  ]
};
