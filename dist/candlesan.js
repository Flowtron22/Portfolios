const frame = (file, description, height = 800) => ({
  src: `assets/candlesan/${file}.webp`,
  alt: description,
  caption: description,
  width: 450,
  height
});

function topic(slug, title, summary, heading, paragraphs, application, figures = []) {
  return {
    slug, title, summary,
    sections: [{heading, paragraphs, figures}, {heading: 'Put it into practice', paragraphs: [application]}]
  };
}

export const candlesanGroups = [
  {title: 'Design Practice', entries: [
    topic('good-ideas-wrong-game', 'When a Good Idea Doesn’t Fit the Game',
      'Judge a proposed feature against what players came to do.',
      'Use the intended experience as a filter', [
        'Autoplay can fit a progression game that expects short check-ins or an auto-battler where the decisions happen during drafting and positioning. In an action game built around direct combat, the same feature could remove the decisions and feedback players came for.',
        'A written audience and experience statement gives a team a concrete way to discuss the suggestion. A feature can be useful in one game and weaken the experience in another.'
      ],
      'Ask which actions the feature takes away and which decisions it leaves with the player. Compare the result with the experience the team agreed to build.',
      [frame('autoplay-combat', 'In Teamfight Tactics, units fight automatically after players make their draft and positioning decisions.', 440)]),
    topic('entry-level-game-design', 'Four Skills for an Entry-Level Game Designer',
      'Show that you can make, analyze, revise, and design for an audience.',
      'What an interview can reveal', [
        'Personal games, maps, and mods show an interest in building. When discussing a favorite game, explain how a particular rule or interaction produces an experience players value.',
        'In a collaborative exercise, respond to feedback while explaining which parts of the design serve the goal. Try adapting the same challenge for different players, such as children, parent-and-child co-op partners, or older adults who rarely play games.'
      ],
      'Bring a small playable project and one example of a revision. Explain what the feedback revealed, what you changed, and which audience the change was meant to help.',
      [frame('designer-exercise', 'The four qualities include a passion for the craft, clear communication, collaboration, and empathy.')]),
    topic('first-video-game', 'How to Start Your First Game',
      'Define a first project by one thing you want to learn.',
      'Choose one skill to practise', [
        'A small project gives you a way to learn an engine, draw a character, or understand how simple rules fit together. The first milestone can be as small as getting an object on screen or making one valid match in a match-three prototype.'
      ],
      'Pick one skill and define something you can show at the end of a session. Stop when you can demonstrate it. Use what you learned to choose the next exercise.',
      [frame('first-game', 'A match-three game illustrates the kind of rule set a beginner can reduce to a small exercise.')]),
    topic('respond-to-a-game-idea', 'How to Respond to a Game Idea That Doesn’t Work',
      'Ask what problem the suggestion is trying to solve.',
      'Separate the symptom from the proposed fix', [
        'A teammate proposes more fast-travel points. You worry they will make the world feel smaller. A follow-up question reveals that the real frustration is having to retrace a long stretch after a death.',
        'A respawn point can shorten that return trip while preserving fast travel as a separate system. The team can now assess the issue and both proposals on their merits.'
      ],
      'Ask the teammate which player behavior prompted the idea. Agree on the problem in one sentence and test a change aimed at that problem.',
      [frame('respawn-point', 'A map example distinguishes a local point from a fast-travel destination.')]),
    topic('make-development-satisfying', 'Make Building a Game Feel Like Progress',
      'Turn a long list of ideas into tasks you can finish in one sitting.',
      'Build a quest log for the project', [
        'Get the ideas out of your head and into a list. Break large items into smaller outcomes. A task such as “fix jumping” might become “add jump input,” “set the jump height,” and “test the landing.”',
        'Aim for tasks you can complete in an afternoon or less. Choose the one that matters most right now and mark it done when you can show the result.'
      ],
      'Take the item you keep putting off, split it into testable steps, and complete one. Write the next step before you stop.',
      [frame('break-down-task', 'The task diagram begins with one item that needs to be broken down.')]),
    topic('chicken-and-pig-principle', 'The Chicken and Pig Principle',
      'Give the person doing the work a meaningful say in craft decisions.',
      'Listen to feedback and trust the person closest to the work', [
        'A playtest can generate conflicting notes about a spell effect. One person wants a brighter flash. Another wants a cooler color. The artist can weigh those suggestions against readability, performance, and the tools available.',
        'The analogy distinguishes offering advice from being responsible for implementing the decision. Both contributions matter. The person responsible for the result is often best placed to choose how to get there.'
      ],
      'Agree on the intended player experience as a team. Let the person implementing it propose a solution, then review it in play against the shared goal.',
      [frame('decision-owner', 'The decision-making example highlights the person responsible for implementing the change.')]),
    topic('three-design-questions', 'Three Questions for a Difficult Design Problem',
      'Step away after clarifying the problem, desired feeling, and comparable examples.',
      'Write down what you’re trying to solve', [
        'Explain the issue as if you were talking to a friend. Write what you want the player to feel. Find another game that deals with a similar problem and note what it does.',
        'For dialogue that players click through, the goal might be to make choices feel consequential. Look at how other games show a response to player decisions. Then take a break and return to the notes with fresh eyes.'
      ],
      'Answer the three questions in a notebook. When you return, choose one change and test whether it affects what players notice or do.',
      [frame('dialogue-options', 'Three similar greetings show how a list of dialogue options can offer little meaningful choice.')]),
    topic('prioritize-good-ideas', 'How to Prioritize Good Ideas',
      'Test the decisions that other features depend on first.',
      'Find the dependencies', [
        'Customizing reload speed, sight magnification, or magazine capacity sounds promising. In a shooter, those changes are hard to judge before the team knows what ranges, movement speeds, cover, and time to kill suit the combat.',
        'An early prototype should answer the questions with the most downstream impact. A good idea can stay on the list while the team establishes the systems it needs.'
      ],
      'For each proposed feature, list the decisions it assumes are settled. Prototype the uncertain systems that would invalidate the most work first.',
      [frame('priority-order', 'The prioritization diagram asks which idea should come first.')]),
    topic('tissue-test', 'What a Tissue Test Can Tell You',
      'Observe one fresh first impression per player.',
      'Protect the first encounter', [
        'Tell the participant that you are testing the game and invite them to think aloud. If they ask what a button does, ask what they expect. Their guess and their next action show whether the game communicates enough on its own.',
        'If they become completely stuck, note where and why before helping them move on. When possible, let someone other than the designer facilitate the session so participants feel more comfortable speaking frankly.'
      ],
      'Write an opening script and leave space to record what the player expected, what they did, and where you intervened. Use a fresh player to test the next revision.',
      [frame('tissue-test-gameplay', 'A puzzle-game playtest provides a concrete place to watch how newcomers interpret controls and objectives.')])
  ]},
  {title: 'Player Experience', entries: [
    topic('beat-saber-sensation', 'Why Beat Saber Feels Good',
      'Sensation comes from music, movement, and immediate feedback.',
      'Make feedback part of the rhythm', [
        'Incoming blocks cue physical motion on the beat. Swinging and ducking make the response bodily, while audio and visual changes communicate a hit or miss without asking the player to read a score first.'
      ],
      'Try a short rhythm sequence and ask players if they know they missed without seeing the score. Adjust timing, sound, or the motion cue based on their answers.',
      [frame('beat-saber', 'Beat Saber pairs incoming blocks with visible saber movement and impact effects.')]),
    topic('cyberpunk-fantasy', 'Cyberpunk 2077 and the Appeal of Fantasy',
      'Night City gives players ways to inhabit a role.',
      'Give the player a life in the world', [
        'V’s life path gives the player a starting identity. Street races, side jobs, hacking, and ordinary movement through Night City give that identity something to do. The city’s density, weather, and sound support the feeling of having a place in it.'
      ],
      'Write down who the player gets to be. Find one ordinary action that makes the role feel real, then test whether players describe that fantasy in their own words.',
      [frame('cyberpunk-life-path', 'Cyberpunk 2077 offers life paths that frame the player’s identity before the story begins.')]),
    topic('dispatch-narrative', 'How Dispatch Makes Narrative Playable',
      'Roster assignments become decisions about trust and relationships.',
      'Make the choice part of the story', [
        'The dispatcher weighs who is suited to a call and who deserves a chance. Those assignments are tactical decisions about abilities. They also give the player a say in relationships as teammates are trusted, sidelined, or given new responsibilities.'
      ],
      'Pick one decision where a practical outcome and a personal relationship can pull in different directions. Let the player see how both respond afterward.',
      [frame('dispatch-assignment', 'A roster card surfaces character strengths before the player decides who to send.')]),
    topic('vampire-survivors-progression', 'Why Vampire Survivors Is Easy to Keep Playing',
      'Simple inputs feed growth during a run and between runs.',
      'Connect two progression loops', [
        'Movement is the main input while weapons and effects grow around the player. Level-ups and visible increases in power give each attempt momentum. Coins earned in a run can then improve the next attempt.',
        'The category called submission in the eight kinds of fun describes the appeal of settling into a low-effort rhythm and making steady progress.'
      ],
      'Sketch what changes every minute and what carries forward after the session. Give each loop enough feedback that players can tell what they gained.',
      [frame('vampire-survivors-loop', 'The loop diagram connects moment-to-moment fighting and upgrades with progression between runs.')]),
    topic('cuphead-challenge', 'How Cuphead Makes Another Attempt Worthwhile',
      'A progress display makes mastery visible after a loss.',
      'Show evidence of improvement', [
        'Cuphead’s boss fights ask players to recognise patterns and survive successive phases. When a run ends, the progress display shows how far they got. A loss can still show that the player reached a new phase or got closer to the finish.'
      ],
      'After a failed attempt, show the player something specific they accomplished. Test whether that information helps them decide what to try next.',
      [frame('cuphead-retry', 'Cuphead’s retry screen shows progress through the encounter before the next attempt.')]),
    topic('it-takes-two-fellowship', 'How It Takes Two Builds Fellowship',
      'Complementary abilities give both players a reason to rely on each other.',
      'Give each partner a different job', [
        'The game requires two players and changes their paired abilities between chapters. A hammer and nails work together, just as other sections pair effects such as sap and matches. Both players have something to notice, communicate, and do.',
        'The relationship story mirrors what happens at the controls. Progress depends on people working through a moment of confusion or frustration together.'
      ],
      'Prototype a task with two distinct abilities. During play, listen for moments where one player asks the other for help or explains what they see.',
      [frame('it-takes-two-pairs', 'The paired abilities change between chapters to give partners new reasons to cooperate.')]),
    topic('games-and-friendship', 'How Games Help Players Become Friends',
      'Friendship develops through repeat encounters, shared experiences, help, and conversation.',
      'Give players a reason to meet again', [
        'Proximity makes people familiar. Similar goals create something to talk about. Reciprocity gives players chances to help each other. Disclosure can happen when a group stays together and has time to chat after the formal task ends.',
        'A persistent realm, familiar names, and shared quests can create the first encounters. Dungeons and raids give those players a reason to rely on each other over time.'
      ],
      'Trace what happens after two strangers play together. Check whether they can recognise each other later, cooperate again, and stay in touch after the activity ends.',
      [frame('friendship-steps', 'The diagram names proximity, similarity, reciprocity, and disclosure.')])
  ]},
  {title: 'Gameplay Systems', entries: [
    topic('slow-motion-game-feel', 'Study Game Feel in Slow Motion',
      'A three-second harpoon catch shows how feedback builds from aim to resolution.',
      'Break down the action in Dave the Diver', [
        'The hands and harpoon follow the aim. A visible aiming arc shows the shot’s angle and limits, and the camera pushes in before the release. The shot triggers recoil, a bubble trail, and an impact reaction.',
        'The hooked fish keeps the struggle readable through movement and a small shake. The camera eases back out to mark the end of the action.'
      ],
      'Record one action in your own game. Step through the frames and mark aim, commitment, impact, and recovery. Add or adjust the feedback that would make an unclear moment easier to read.',
      [frame('harpoon-aim', 'The harpoon tracks the player’s aim before firing.'), frame('harpoon-impact', 'The fish recoils and a visible burst marks the point of impact.')]),
    topic('how-hard-should-games-be', 'How Hard Should Your Game Be?',
      'Tune the challenge to what players came to feel.',
      'Choose difficulty that serves the experience', [
        'In a game about mastery, difficult but readable failures give players a reason to learn. In a story-first game, repeatedly blocking the next scene can get in the way. A progression RPG can let gear and build choices offer a path through resistance.',
        'A power fantasy can use close calls to create tension and give the player enough room to recover. The felt danger and the actual chance of losing can differ.'
      ],
      'Write the intended feeling before adjusting numbers. Ask testers to describe a failure or a close call and use their answers to adjust the challenge.',
      [frame('difficulty-types', 'Different game types can target mastery, story, progression, or a power fantasy.')]),
    topic('control-randomness', 'Control Randomness with a Shuffle Bag',
      'Draw without replacement when extreme streaks hurt the experience.',
      'Give the rolls a memory', [
        'With a 25% independent critical chance, four misses in a row happen about 32% of the time. A bag with two successes and six failures still yields 25% across each complete bag. Drawing without replacement limits imbalance within that bag, although streaks can cross a refill boundary.',
        'Bags can be nested. A word game can draw vowel versus consonant first, then draw a letter from the matching pool. A separate rare-letter pool helps control how often difficult letters appear.'
      ],
      'Simulate many short sequences and compare how frequently each approach produces a streak that feels bad. Choose the bag size and distribution around that result.',
      [frame('randomness-bag', 'Two red marbles and six blue marbles represent a 25% success bag.')]),
    topic('magic-find-design', 'Why Magic Find Is Hard to Design',
      'A reward bonus can be difficult to notice and harder to value.',
      'Make the trade-off visible', [
        'Players receive loot at rates shaped by difficulty, clear speed, and many other factors, so a passive Magic Find bonus can be hard to notice. Once a better reward rate becomes routine, it can stop feeling special. Trading combat power for an uncertain reward adds another difficult choice.',
        'Alternatives include rewarding progression directly, offering a choice of reward types, or giving the player one deliberate trade-off tied to a clearly identifiable reward.'
      ],
      'Ask players to explain what changed after they opted in. If they cannot name the gain or what they gave up, make the reward more visible or simplify the choice.',
      [frame('magic-find-choices', 'One alternative offers a choice among reward types.'), frame('magic-find-decision', 'One visible trade-off can replace many small gear choices.')]),
    topic('responsive-animation', 'Use Animation Timing to Make Actions Responsive',
      'Give immediate visual feedback while preserving the weight of the action.',
      'Shorten the wait before the first readable pose', [
        'Anticipation can make a swing readable, but waiting through a long wind-up after pressing attack can make the input feel sluggish. Speeding up the whole animation can also take weight out of the hit.',
        'A Diablo III example moves directly to a clearly different silhouette when the player presses attack, then lets the swing and follow-through carry the weight. A jump can use the same principle by starting upward movement immediately.'
      ],
      'Record input and the first clear response. Compare an animation that speeds up everywhere with one that changes only the opening pose and timing.',
      [frame('attack-silhouette', 'The new attack pose changes the silhouette enough to signal input immediately.'), frame('attack-timing', 'The timing comparison isolates the delay removed from the start of the action.')]),
    topic('rpg-loot-tables', 'Design RPG Loot Tables for Change',
      'Separate rarity odds from the items available at each rarity.',
      'Protect drop rates during content updates', [
        'A single weighted item table can be easy to start with. Adding a common item or disabling one in a patch changes the total weight and can inadvertently shift the chance of every rare item.',
        'Roll the rarity first, then choose an item from its own pool. A descending cascade can check for a legendary first, then test the next tier if it fails. Later chances are conditional on earlier misses.'
      ],
      'Before a patch, simulate drops with and without the changed item. Compare overall rarity rates and verify that the selected rarity always has an eligible reward.',
      [frame('loot-table', 'The weighted item table ties each entry to a range in the same roll.'), frame('loot-cascade', 'The cascade checks each rarity in turn before choosing from its pool.')]),
    topic('tune-the-armor-formula', 'How to Tune the Armor Formula',
      'Choose an armor curve from a target mitigation and believable gear values.',
      'Solve for the curve you want', [
        'In the formula mitigation = armor ÷ (armor + K), armor equal to K yields 50% mitigation. Start with the desired mitigation at a representative point, decide how much armor gear should contribute there, and solve for K.',
        'If gear contributes 28 armor per level and the target is 25% mitigation, the worked example gives K = 84 per level for that simplified model. When using a level-based curve, the attacker’s level can define the comparison without reducing mitigation solely because the defender leveled up.'
      ],
      'Choose a standard enemy, a gear benchmark, and a target number of hits to survive. Check low, middle, and high gear values before committing to the curve.',
      [frame('armor-tuning', 'Individual gear slots contribute different amounts to the total armor budget.')]),
    topic('math-behind-armor', 'The Math Behind Armor and Survivability',
      'Compare effective health when percentage mitigation looks like diminishing returns.',
      'Measure what the player can survive', [
        'Flat reduction affects fast and slow attacks differently. Subtracting 10 damage per hit can erase a series of 10-damage hits while barely changing a slow 100-damage hit. A straight linear mitigation percentage instead grows disproportionately in value near 100%.',
        'The curve armor ÷ (armor + K) slows the growth of the displayed percentage, but effective health against that damage scales as base health × (1 + armor ÷ K). Equal armor gains add equal effective health when the other values stay fixed.'
      ],
      'Compare two attacks with equal damage per second and different hit frequencies. Then graph effective health as armor rises so you can evaluate survival alongside the displayed percentage.',
      [frame('armor-flat', 'Flat reduction hits its limit when attack damage becomes too small.'), frame('armor-survival', 'The table compares mitigation percentages with the number of hits the player can survive.')])
  ]},
  {title: 'Encounter Design', entries: [
    topic('loatheb', 'Designing Loatheb in Naxxramas',
      'Give healers a reason to contribute damage while keeping healing essential.',
      'Change how often healers can act', [
        'Disabling healing would make it easy to leave healers out. A penalty that stacked on the tank made players cast harder as the tank’s health dropped. A penalty on the healer created an unpleasant choice between saving the tank and making future heals weaker.',
        'A one-heal-per-minute rule gave the raid a reason to bring healers and gave them time to deal damage between heals. The spore buff also let affected damage dealers attack without generating threat.'
      ],
      'Test how a group actually responds to a role restriction, including whether it changes who gets invited. Include preparation costs such as consumables in playtests.',
      [frame('loatheb-early-design', 'An early tank debuff reduced consecutive healing.'), frame('loatheb-spore', 'The Fungal Bloom tooltip shows the spore’s combat benefit.')]),
    topic('patchwerk', 'How Patchwerk Tests a Raid',
      'A simple boss can stress tanks, healers, and damage dealers through tuning.',
      'Put pressure on each role', [
        'Hateful Strike let Patchwerk hit off-tanks while continuing to attack the primary tank. Choosing the eligible off-tank with the most health gave healers some room when heals landed at different times.',
        'A tight enrage timer added a damage check so the raid could not freely trade damage dealers for more healers. Internal damage tests for each class gave the team a baseline for setting boss health.'
      ],
      'Test the encounter with unusually defensive and aggressive group compositions. Tune the checks so each role contributes and a single tactic cannot bypass the intended pressure.',
      [frame('patchwerk-strike', 'Hateful Strike adds a second source of pressure on the tanks.'), frame('patchwerk-enrage', 'The enrage timer turns clearing the fight into a damage check.')]),
    topic('gruul', 'Gruul and the Panic of Musical Chairs',
      'Random displacement turns a spread mechanic into a last-second decision.',
      'Make spacing an improvisation', [
        'Shatter hurts players based on how close they are to each other. Ground Slam scatters the raid before Shatter so players have to find space in the moment.',
        'Latency made nearby players hard to track. A stacking slow gives positions time to synchronize and adds suspense before the damage lands. An increasing boss damage penalty helps keep the fight dangerous even as fewer players make spreading easier.'
      ],
      'Test a shared positioning mechanic on real and simulated network delays. Check what happens when a group starts to lose players and space becomes easier to find.',
      [frame('gruul-shatter', 'The damage curve shows why players need distance before Shatter.'), frame('gruul-slow', 'A stacking slow makes movement progressively more deliberate after Ground Slam.')]),
    topic('prophet-skeram', 'Prophet Skeram and the Problem of Illusions',
      'Players will use any reliable clue to identify the real boss.',
      'Set the challenge, then look for unintended tells', [
        'Mind control pressures the raid to disable an affected ally. Illusory copies spawn at 75%, 50%, and 25% health so the group has to handle each split even if it deals high damage.',
        'The intended clue was that copies had half the health and would fall faster under equal pressure. Names, UI data, pet targeting, and mana also gave players ways to identify the original.'
      ],
      'When designing a disguise or identification mechanic, test with the interface, tools, and combat state that players actually see. Decide which discovered shortcuts are acceptable.',
      [frame('skeram-copies', 'The health-bar diagram illustrates the intended difference between Skeram and his copies.')]),
    topic('instructor-razuvious', 'Instructor Razuvious and Class Identity',
      'A raid encounter can spotlight a class ability that rarely gets a chance to shine.',
      'Turn Mind Control into a tanking solution', [
        'Instructor Razuvious hits too hard for a player tank to hold him indefinitely. Priests can control his students and use them to tank instead. The encounter makes a familiar class spell central to a new job.',
        'This creates a memorable discovery for the right group, but requiring a spell exclusive to one class also limits which groups can take part.'
      ],
      'Choose a rarely used ability and design a moment where it solves a real problem. Check whether a group without that ability still has a viable way to play.',
      [frame('razuvious-strike', 'Unbalancing Strike demonstrates why conventional tanking is difficult to sustain.')]),
    topic('set-monsters', 'From Diablo Set Monsters to Anubisath Sentinels',
      'A kill-order mechanic found a better home in a raid.',
      'Match the idea to the pace of combat', [
        'The original pack idea let an enemy pass its ability to the survivors when killed. In fast area-damage combat, enemies died before that change became readable or useful.',
        'The Anubisath Sentinels put the idea into a raid where buffs are readable, kill order matters, and players can coordinate. A pool of paired abilities gives the group reasons to inspect the enemies and reposition before committing.'
      ],
      'When a prototype fails, list the conditions it needs to be readable and consequential. Try it in a combat context that already supports those conditions.',
      [frame('set-monster-abilities', 'The paired ability categories give the raid different positioning and targeting problems.')]),
    topic('buru-the-gorger', 'Buru the Gorger and Raid Awareness',
      'A pursuit mechanic turns one player’s movement into a shared responsibility.',
      'Draw a path through the room', [
        'Buru pursues a chosen raid member and speeds up. The target leads him across an egg while the raid prepares to break it. The explosion damages the boss and resets his speed, giving everyone a reason to track the route.',
        'Buru was optional and frequently skipped when the rewards did not justify the detour. Pathfinding failures could also reset the encounter, making terrain and route testing important.'
      ],
      'Test the pursuit from different player starting points. Check that the egg placement supports readable routes, then ask whether the reward makes the optional fight worth seeking out.',
      [frame('buru-egg', 'The raid attacks the egg while Buru is being led into position.'), frame('buru-path', 'The pathfinding illustration shows how the boss navigates across the room to its target.')])
  ]}
];
