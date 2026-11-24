const frame = (file, description, height = 800) => ({
  src: `assets/candlesan/${file}.webp`,
  alt: description,
  caption: description,
  width: 450,
  height
});

function topic(slug, title, summary, heading, paragraphs, application, figures, discussion, {demo, cover} = {}) {
  return {
    slug, title, summary, cover,
    sections: [
      {heading, paragraphs, figures, demo},
      discussion,
      {heading: 'Put it into practice', paragraphs: [application]}
    ]
  };
}

export const candlesanGroups = [
  {title: 'Gameplay Systems', entries: [
    topic('slow-motion-game-feel', 'Study Game Feel in Slow Motion',
      'A three-second harpoon catch shows how feedback builds from aim to resolution.',
      'Break down the action in Dave the Diver', [
        'The hands and harpoon follow the aim. A visible aiming arc shows the shot’s angle and limits, and the camera pushes in before the release. The shot triggers recoil, a bubble trail, and an impact reaction.',
        'The hooked fish keeps the struggle readable through movement and a small shake. The camera eases back out to mark the end of the action.'
      ],
      'Record one action in your own game. Step through the frames and mark aim, commitment, impact, and recovery. Add or adjust the feedback that would make an unclear moment easier to read.',
      [frame('harpoon-aim', 'The harpoon tracks the player’s aim before firing.'), frame('harpoon-impact', 'The fish recoils and a visible burst marks the point of impact.')],
      {heading: 'The full feedback sequence', paragraphs: [
        'Before firing, Dave\'s hands and harpoon track the aim, a precision arc shows the angle and range of motion, and the camera moves in. At release, Dave leans backward and bubbles trace the harpoon\'s path underwater. On contact, the fish is knocked backward and particles burst at the impact point and on the fish.',
        'The feedback continues after the hit. Dave kicks while he struggles with the catch, the camera shakes a little, and the camera pulls back when the catch completes. Each effect has a different job: conveying control, marking force or contact, showing resistance, or letting the player know it is over.',
        'On your own recording, mark when each effect starts and ends. Turn effects off one at a time and replay the action at full speed to see what information disappears. This helps you decide where polish does useful work and where effects might be competing.'
      ]}),
    topic('how-hard-should-games-be', 'How Hard Should Your Game Be?',
      'Tune the challenge to what players came to feel.',
      'Choose difficulty that serves the experience', [
        'In a game about mastery, difficult but readable failures give players a reason to learn. In a story-first game, repeatedly blocking the next scene can get in the way. A progression RPG can let gear and build choices offer a path through resistance.',
        'A power fantasy can use close calls to create tension and give the player enough room to recover. The felt danger and the actual chance of losing can differ.'
      ],
      'Write the intended feeling before adjusting numbers. Ask testers to describe a failure or a close call and use their answers to adjust the challenge.',
      [frame('difficulty-types', 'Different game types can target mastery, story, progression, or a power fantasy.')],
      {heading: 'What a useful failure looks like', paragraphs: [
        'In a Souls-like, the player should be able to connect a death to something they can learn from, such as an attack timing or a decision to overcommit. A visual novel can use the uncertainty of what happens in the story without making players repeatedly earn the chance to see the next scene.',
        'In a progression-focused RPG, gear choices and investment can give players a route through a fight they struggled with earlier. An action power fantasy can make a narrow recovery feel dramatic while still giving the player tools and time to pull it off.',
        'During playtesting, ask people what they believe caused the failure and what they plan to try next. A player who identifies a better response is having a different experience from someone who describes the same loss as a wall and has no idea how to proceed.'
      ]}),
    topic('control-randomness', 'Control Randomness with a Shuffle Bag',
      'Draw without replacement when extreme streaks hurt the experience.',
      'Give the rolls a memory', [
        'With a 25% independent critical chance, four misses in a row happen about 32% of the time. A bag with two successes and six failures still yields 25% across each complete bag. Drawing without replacement limits imbalance within that bag, although streaks can cross a refill boundary.',
        'Bags can be nested. A word game can draw vowel versus consonant first, then draw a letter from the matching pool. A separate rare-letter pool helps control how often difficult letters appear.'
      ],
      'Simulate many short sequences and compare how frequently each approach produces a streak that feels bad. Choose the bag size and distribution around that result.',
      [],
      {heading: 'How to reason about streaks and refill rules', paragraphs: [
        'An independent roll remembers nothing. At 25% success, eight consecutive misses still occur about 10% of the time. A shuffle bag like two red marbles and six blue guarantees two successes in each complete bag, while preserving uncertainty about their order. The next bag starts fresh, so a bad run can span the boundary.',
        'The word-game example uses one bag to choose vowels or consonants and separate distributions to select the letter. A rarer sub-bag controls letters such as J, K, Q, X, and Z. That structure lets the designer tune at the level players notice: the availability of usable letters, the mix of vowels, and the spacing of unusual letters.',
        'Write down when the bag is refilled and whether it persists across rounds or reloads. Simulate those rules. A bag can guarantee the long-term mix without guaranteeing that every short stretch will feel fair.'
      ]}, {demo: 'shuffle-bag', cover: 'assets/candlesan/randomness-bag.webp'}),
    topic('magic-find-design', 'Why Magic Find Is Hard to Design',
      'A reward bonus can be difficult to notice and harder to value.',
      'Make the trade-off visible', [
        'Players receive loot at rates shaped by difficulty, clear speed, and many other factors, so a passive Magic Find bonus can be hard to notice. Once a better reward rate becomes routine, it can stop feeling special. Trading combat power for an uncertain reward adds another difficult choice.',
        'Alternatives include rewarding progression directly, offering a choice of reward types, or giving the player one deliberate trade-off tied to a clearly identifiable reward.'
      ],
      'Ask players to explain what changed after they opted in. If they cannot name the gain or what they gave up, make the reward more visible or simplify the choice.',
      [frame('magic-find-choices', 'One alternative offers a choice among reward types.'), frame('magic-find-decision', 'One visible trade-off can replace many small gear choices.')],
      {heading: 'What Diablo III’s Sage’s Set changes', paragraphs: [
        'Highlighting a bonus drop can help players notice Magic Find, but difficulty, clear speed, and activity type all affect what they earn. Players also get used to a higher drop rate over time. Giving up damage for a reward with uncertain value leaves them doing a comparison they may never feel confident about.',
        'The video points to Sage’s Set as a more legible example. It doubles Death’s Breath, which is easy to identify, and occupies several equipment slots. Players can decide whether to wear the set for this specific reward instead of reconsidering a small percentage on every item.',
        'Compare that solution with tying more rewards to progression or letting players choose between experience, gold, and item rewards. Each answers a different player need. Look at whether the intended benefit is visible, whether it stays meaningful, and whether the choice is easy to explain.'
      ]}),
    topic('responsive-animation', 'Use Animation Timing to Make Actions Responsive',
      'Give immediate visual feedback while preserving the weight of the action.',
      'Shorten the wait before the first readable pose', [
        'Anticipation can make a swing readable, but waiting through a long wind-up after pressing attack can make the input feel sluggish. Speeding up the whole animation can also take weight out of the hit.',
        'A Diablo III example moves directly to a clearly different silhouette when the player presses attack, then lets the swing and follow-through carry the weight. A jump can use the same principle by starting upward movement immediately.'
      ],
      'Record input and the first clear response. Compare an animation that speeds up everywhere with one that changes only the opening pose and timing.',
      [frame('attack-silhouette', 'The new attack pose changes the silhouette enough to signal input immediately.'), frame('attack-timing', 'The timing comparison isolates the delay removed from the start of the action.')],
      {heading: 'Keep the weight where the player can feel it', paragraphs: [
        'Traditional movement often has anticipation, action, and follow-through. In a film, a preparatory movement makes the action easier to read. In a game, those frames can sit between the player\'s input and the response they expect. The Diablo III test found that speeding up the whole swing made it feel lighter while leaving the impression of a delay.',
        'The revised attack jumps to the fully drawn-back pose as soon as the player acts. The silhouette immediately changes, while the strike and follow-through keep their timing. Removing a short opening delay made a noticeable difference without needing the whole animation to run faster.',
        'Measure the time to the first readable response separately from the time to impact. A responsive player attack and a readable enemy wind-up do different jobs, so test those timings from each character\'s point of view.'
      ]}),
    topic('rpg-loot-tables', 'Design RPG Loot Tables for Change',
      'Separate rarity odds from the items available at each rarity.',
      'Protect drop rates during content updates', [
        'A single weighted item table can be easy to start with. Adding a common item or disabling one in a patch changes the total weight and can inadvertently shift the chance of every rare item.',
        'Roll the rarity first, then choose an item from its own pool. A descending cascade can check for a legendary first, then test the next tier if it fails. Later chances are conditional on earlier misses.'
      ],
      'Before a patch, simulate drops with and without the changed item. Compare overall rarity rates and verify that the selected rarity always has an eligible reward.',
      [frame('loot-table', 'The weighted item table ties each entry to a range in the same roll.'), frame('loot-cascade', 'The cascade checks each rarity in turn before choosing from its pool.')],
      {heading: 'Why adding a common item can affect legendary odds', paragraphs: [
        'In a shared weighted table, every entry competes against the total weight. Adding three ordinary swords expands that total. Disabling one sword in a hotfix shrinks it. Even when no legendary weight changes, its actual drop rate shifts, and players may perceive the return to the original rate as a nerf.',
        'Separate tables give the game independent controls for how often each rarity occurs and which item wins inside that rarity. With a cascade, a 2% legendary roll happens first. If the next tier has a 10% conditional chance, its overall chance is 98% × 10% = 9.8%.',
        'Document whether percentages are conditional or overall. Test an empty or disabled pool, add a common item, and compare the distribution before and after a content change. Those cases show whether the system will behave as intended during Live Ops.'
      ]}, {demo: 'loot-table'}),
    topic('tune-the-armor-formula', 'How to Tune the Armor Formula',
      'Choose an armor curve from a target mitigation and believable gear values.',
      'Solve for the curve you want', [
        'In the formula mitigation = armor ÷ (armor + K), armor equal to K yields 50% mitigation. Start with the desired mitigation at a representative point, decide how much armor gear should contribute there, and solve for K.',
        'If gear contributes 28 armor per level and the target is 25% mitigation, the worked example gives K = 84 per level for that simplified model. When using a level-based curve, the attacker’s level can define the comparison without reducing mitigation solely because the defender leveled up.'
      ],
      'Choose a standard enemy, a gear benchmark, and a target number of hits to survive. Check low, middle, and high gear values before committing to the curve.',
      [frame('armor-tuning', 'Individual gear slots contribute different amounts to the total armor budget.')],
      {heading: 'Work backward from the target', paragraphs: [
        'In mitigation = armor ÷ (armor + K), rearrange to get K = armor × (1 − mitigation) ÷ mitigation, with mitigation expressed as a decimal. If the target is 25% at 28 armor, K is 84. The point of choosing readable gear values first is to make the character sheet understandable while tuning the curve separately.',
        'A round constant such as 100 makes half damage easy to reason about at 100 armor. An RTS with small armor values can use a smaller constant. In a progression game, the curve can scale with enemy level, as in the historical World of Warcraft example discussed in the video. Basing a level term on the attacker helps avoid a character losing mitigation merely for leveling up while fighting the same opponent.',
        'Test beside a same-level foe, a stronger foe, and an early enemy the player returns to later. Those cases reveal whether the curve supports the intended feeling of progression.'
      ]}),
    topic('math-behind-armor', 'The Math Behind Armor and Survivability',
      'Compare effective health when percentage mitigation looks like diminishing returns.',
      'Measure what the player can survive', [
        'Flat reduction affects fast and slow attacks differently. Subtracting 10 damage per hit can erase a series of 10-damage hits while barely changing a slow 100-damage hit. A straight linear mitigation percentage instead grows disproportionately in value near 100%.',
        'The curve armor ÷ (armor + K) slows the growth of the displayed percentage, but effective health against that damage scales as base health × (1 + armor ÷ K). Equal armor gains add equal effective health when the other values stay fixed.'
      ],
      'Compare two attacks with equal damage per second and different hit frequencies. Then graph effective health as armor rises so you can evaluate survival alongside the displayed percentage.',
      [frame('armor-flat', 'Flat reduction hits its limit when attack damage becomes too small.'), frame('armor-survival', 'The table compares mitigation percentages with the number of hits the player can survive.')],
      {heading: 'What changes when you measure hits survived', paragraphs: [
        'Take a character with 1,000 health facing 100-damage hits and use K = 100. With no armor, 10 hits consume the health pool. At 100 armor, half the damage gets through, so it takes 20 hits. At 200 armor, about a third gets through, so the same pool lasts about 30 hits. Displayed mitigation grows from 0% to 50% to about 67%, while survivability gains remain even in this example.',
        'A flat subtraction can make attack speed decisive because the reduction applies to every hit. A direct percentage-per-point rule can reach immunity or require a hard cap. With the armor curve, a steady increase in effective health is easier to evaluate across repeated attacks, but actual time to defeat still depends on healing, burst, hit rounding, and which damage types armor covers.'
      ]})
  ]},
  {title: 'Design Practice', entries: [
    topic('good-ideas-wrong-game', 'When a Good Idea Doesn’t Fit the Game',
      'Judge a proposed feature against what players came to do.',
      'Use the intended experience as a filter', [
        'Autoplay can fit a progression game that expects short check-ins or an auto-battler where the decisions happen during drafting and positioning. In an action game built around direct combat, the same feature could remove the decisions and feedback players came for.',
        'A written audience and experience statement gives a team a concrete way to discuss the suggestion. A feature can be useful in one game and weaken the experience in another.'
      ],
      'Ask which actions the feature takes away and which decisions it leaves with the player. Compare the result with the experience the team agreed to build.',
      [frame('autoplay-combat', 'In Teamfight Tactics, units fight automatically after players make their draft and positioning decisions.', 440)],
      {heading: 'How to explain the decision to the team', paragraphs: [
        'An idle-friendly progression game may place the player\'s meaningful decisions between sessions. Teamfight Tactics places them before a fight, when players draft, assemble a team, and arrange units. In both cases, automatic combat leaves the main decisions intact. For a game built around reacting to attacks and controlling every swing, automation changes the activity itself.',
        'Bring the discussion back to the people you expect to play and the reason those people would choose this game. A useful response might be that autoplay makes sense when players are here to manage a build, while this project needs to keep moment-to-moment control rewarding. That gives a teammate a concrete design constraint they can work with and leaves room to explore another way to help players through repetitive encounters.'
      ]}),
    topic('entry-level-game-design', 'Four Skills for an Entry-Level Game Designer',
      'Show that you can make, analyze, revise, and design for an audience.',
      'What an interview can reveal', [
        'Personal games, maps, and mods show an interest in building. When discussing a favorite game, explain how a particular rule or interaction produces an experience players value.',
        'In a collaborative exercise, respond to feedback while explaining which parts of the design serve the goal. Try adapting the same challenge for different players, such as children, parent-and-child co-op partners, or older adults who rarely play games.'
      ],
      'Bring a small playable project and one example of a revision. Explain what the feedback revealed, what you changed, and which audience the change was meant to help.',
      [frame('designer-exercise', 'The four qualities include a passion for the craft, clear communication, collaboration, and empathy.')],
      {heading: 'What to demonstrate in an interview', paragraphs: [
        'A prototype, custom map, or mod gives an interviewer something concrete to ask about. Be ready to explain what you built yourself and which design choice changed after you played it. When asked about a favorite game, name the experience it creates and point to a specific rule or interaction that produces it. That answer shows how you reason about design.',
        'A written exercise can also become a live design conversation. An interviewer may deliberately pick a weaker answer to see what you do with feedback. A candidate can acknowledge a problem and propose a revision while explaining what they would protect and why.',
        'Audience empathy is a separate skill. A boss for a child, a child playing beside a parent, and an adult over 65 who rarely plays games will call for different controls, signals, and expectations. The exercise is to justify each change in terms of that player\'s needs.'
      ]}),
    topic('first-video-game', 'How to Start Your First Game',
      'Define a first project by one thing you want to learn.',
      'Choose one skill to practise', [
        'A small project gives you a way to learn an engine, draw a character, or understand how simple rules fit together. The first milestone can be as small as getting an object on screen or making one valid match in a match-three prototype.'
      ],
      'Pick one skill and define something you can show at the end of a session. Stop when you can demonstrate it. Use what you learned to choose the next exercise.',
      [frame('first-game', 'A match-three game illustrates the kind of rule set a beginner can reduce to a small exercise.')],
      {heading: 'Define a finish line for the first session', paragraphs: [
        'Getting a controllable object on screen is enough if the goal is to learn a new engine. Drawing and importing one rough character is enough if the goal is to learn the 2D workflow. If installing the engine and launching a project is the step you keep avoiding, that can be the whole first session.',
        'A match-three exercise can focus on swapping adjacent pieces, finding one valid match, and clearing it. A shop, campaign, score system, and polished art can wait. If one step turns into three unfamiliar problems, shrink the exercise until you can tell which one you are practising.',
        'Keep a runnable version even when it looks rough. At the end, write down what you can do now and what still confused you. Use that to pick the next project or practice session.'
      ]}),
    topic('respond-to-a-game-idea', 'How to Respond to a Game Idea That Doesn’t Work',
      'Ask what problem the suggestion is trying to solve.',
      'Separate the symptom from the proposed fix', [
        'A teammate proposes more fast-travel points. You worry they will make the world feel smaller. A follow-up question reveals that the real frustration is having to retrace a long stretch after a death.',
        'A respawn point can shorten that return trip while preserving fast travel as a separate system. The team can now assess the issue and both proposals on their merits.'
      ],
      'Ask the teammate which player behavior prompted the idea. Agree on the problem in one sentence and test a change aimed at that problem.',
      [frame('respawn-point', 'A map example distinguishes a local point from a fast-travel destination.')],
      {heading: 'Diagnose the problem together', paragraphs: [
        'Lead with a question that invites the person to explain what prompted the suggestion. Ask what they like about the idea or which part of the game they wanted to improve. Find out when the problem happened and whether it affected other people. Someone proposing extra fast travel may have experienced a frustrating death rather than a general travel problem.',
        'Once you know the issue, compare how each fix changes the game. Extra fast-travel nodes shorten ordinary trips as well as recovery. A respawn-only point shortens the repeat journey after death without making that spot selectable for general travel. You can test the recovery trip directly and ask whether the world still feels as large during normal exploration.'
      ]}),
    topic('make-development-satisfying', 'Make Building a Game Feel Like Progress',
      'Turn a long list of ideas into tasks you can finish in one sitting.',
      'Build a quest log for the project', [
        'Get the ideas out of your head and into a list. Break large items into smaller outcomes. A task such as “fix jumping” might become “add jump input,” “set the jump height,” and “test the landing.”',
        'Aim for tasks you can complete in an afternoon or less. Choose the one that matters most right now and mark it done when you can show the result.'
      ],
      'Take the item you keep putting off, split it into testable steps, and complete one. Write the next step before you stop.',
      [frame('break-down-task', 'The task diagram begins with one item that needs to be broken down.')],
      {heading: 'Turn vague work into visible progress', paragraphs: [
        'A quest log makes progress visible by giving you a clear action and a completion signal. A project backlog can do the same. Capture ideas such as controller support, a title screen, and a better jump, then turn each one into an outcome you can verify.',
        'Tasks differ in size. Recoloring a button may take less than a minute. Implementing and testing a title screen may need separate tasks for laying out the menu, wiring a button, and opening the correct scene. Four hours is a planning rule of thumb from the video. Split work again if it regularly runs past a single sitting.',
        'Start with the task that answers the most pressing question today. A checklist helps you finish work, while the priority order helps you decide which finished work is worth having.'
      ]}),
    topic('chicken-and-pig-principle', 'The Chicken and Pig Principle',
      'Give the person doing the work a meaningful say in craft decisions.',
      'Listen to feedback and trust the person closest to the work', [
        'A playtest can generate conflicting notes about a spell effect. One person wants a brighter flash. Another wants a cooler color. The artist can weigh those suggestions against readability, performance, and the tools available.',
        'The analogy distinguishes offering advice from being responsible for implementing the decision. Both contributions matter. The person responsible for the result is often best placed to choose how to get there.'
      ],
      'Agree on the intended player experience as a team. Let the person implementing it propose a solution, then review it in play against the shared goal.',
      [frame('decision-owner', 'The decision-making example highlights the person responsible for implementing the change.')],
      {heading: 'Who should decide after a review?', paragraphs: [
        'The breakfast analogy uses the chicken\'s eggs and the pig\'s bacon to describe different levels of involvement. On a team, people who give notes can still spot real issues. The person implementing the change has to weigh those notes against the craft, the tools, and the rest of the work.',
        'During an effects review, one person may ask for more brightness because they missed the hit. Another may suggest blue because effects of that kind already use blue. Those are two different observations. The artist can propose a way to make the hit readable within the existing color rules and performance limits.',
        'Give the person doing the work room to make that choice once the group agrees on the outcome. Review their proposal in game before deciding whether another pass is needed.'
      ]}),
    topic('three-design-questions', 'Three Questions for a Difficult Design Problem',
      'Step away after clarifying the problem, desired feeling, and comparable examples.',
      'Write down what you’re trying to solve', [
        'Explain the issue as if you were talking to a friend. Write what you want the player to feel. Find another game that deals with a similar problem and note what it does.',
        'For dialogue that players click through, the goal might be to make choices feel consequential. Look at how other games show a response to player decisions. Then take a break and return to the notes with fresh eyes.'
      ],
      'Answer the three questions in a notebook. When you return, choose one change and test whether it affects what players notice or do.',
      [frame('dialogue-options', 'Three similar greetings show how a list of dialogue options can offer little meaningful choice.')],
      {heading: 'How the questions change the problem', paragraphs: [
        'For the dialogue example, the symptom is that players skip conversations or treat the choices as interchangeable. The experience you want is for players to weigh a reply because they expect it to have consequences. Those are specific enough to look for in a playtest.',
        'Compare games such as Dispatch, Baldur\'s Gate 3, or The Walking Dead. Ask how each one makes the player anticipate a consequence and how it later shows what changed. A relationship reaction, a changed objective, and a different immediate reply can feel very different even if they use the same interface.',
        'Write down what the comparisons taught you and take a break. On return, try a small change that fits your game. The goal is to borrow the reasoning behind an example rather than reproducing its interface or dialogue tree.'
      ]}),
    topic('prioritize-good-ideas', 'How to Prioritize Good Ideas',
      'Test the decisions that other features depend on first.',
      'Find the dependencies', [
        'Customizing reload speed, sight magnification, or magazine capacity sounds promising. In a shooter, those changes are hard to judge before the team knows what ranges, movement speeds, cover, and time to kill suit the combat.',
        'An early prototype should answer the questions with the most downstream impact. A good idea can stay on the list while the team establishes the systems it needs.'
      ],
      'For each proposed feature, list the decisions it assumes are settled. Prototype the uncertain systems that would invalidate the most work first.',
      [frame('priority-order', 'The prioritization diagram asks which idea should come first.')],
      {heading: 'What weapon customization depends on', paragraphs: [
        'Reload speed, magazine size, and sight magnification only mean something within an established combat loop. A larger magazine may make little difference if enemies fall immediately. A stronger zoom may be counterproductive if most fights happen indoors at close range. Establish a baseline for enemy movement, cover, range, reload timing, and time to kill before tuning those upgrades.',
        'Early priorities can include proving the central interaction, testing a risky technical feature, or finding out whether the intended audience understands the game. Put ideas that depend on those answers somewhere you can revisit them. For weapon customization, the condition for revisiting it might be that players can explain the difference between the basic weapons and their intended ranges.'
      ]}),
    topic('tissue-test', 'What a Tissue Test Can Tell You',
      'Observe one fresh first impression per player.',
      'Protect the first encounter', [
        'Tell the participant that you are testing the game and invite them to think aloud. If they ask what a button does, ask what they expect. Their guess and their next action show whether the game communicates enough on its own.',
        'If they become completely stuck, note where and why before helping them move on. When possible, let someone other than the designer facilitate the session so participants feel more comfortable speaking frankly.'
      ],
      'Write an opening script and leave space to record what the player expected, what they did, and where you intervened. Use a fresh player to test the next revision.',
      [frame('tissue-test-gameplay', 'A puzzle-game playtest provides a concrete place to watch how newcomers interpret controls and objectives.')],
      {heading: 'A short facilitation script and what to record', paragraphs: [
        'At the start, tell participants that you are evaluating the game and that there is no wrong way to try it. Invite them to describe what they think is happening. Explain that you will give them time to figure things out because a released game needs to communicate on its own.',
        'If someone asks what happens when they ignore a quest, ask what they expect. Wait to see what they try. When a player can no longer proceed, record the blocker before giving them enough help to continue. Keep those later observations separate in your notes because the player now has information the game did not provide.',
        'A person can give you a fresh first impression only once. If they return after a revision, their experience is useful for follow-up, but a newcomer is a better test of first-time comprehension.'
      ]})
  ]},
  {title: 'Player Experience', entries: [
    topic('beat-saber-sensation', 'Why Beat Saber Feels Good',
      'Sensation comes from music, movement, and immediate feedback.',
      'Make feedback part of the rhythm', [
        'Incoming blocks cue physical motion on the beat. Swinging and ducking make the response bodily, while audio and visual changes communicate a hit or miss without asking the player to read a score first.'
      ],
      'Try a short rhythm sequence and ask players if they know they missed without seeing the score. Adjust timing, sound, or the motion cue based on their answers.',
      [frame('beat-saber', 'Beat Saber pairs incoming blocks with visible saber movement and impact effects.')],
      {heading: 'What the player reads without a score', paragraphs: [
        'The block pattern suggests what the body should do next. Players swing their arms, duck under barriers, and shift out of the way. A clean strike keeps the musical and visual sequence intact. A miss interrupts the combination and changes what the player sees or hears, so timing errors are easy to feel.',
        'The eight kinds of fun framework describes this as sensation. The lightsaber fantasy gives the movement a recognizable context, while music and physical action can keep it satisfying on their own. The mechanics rely on players feeling the connection between the beat, the movement, and its immediate result.',
        'In a test, look separately at whether players can anticipate an action and whether they can tell it succeeded. Someone might execute the correct swing and still lack a clear confirmation that it landed.'
      ]}),
    topic('cyberpunk-fantasy', 'Cyberpunk 2077 and the Appeal of Fantasy',
      'Night City gives players ways to inhabit a role.',
      'Give the player a life in the world', [
        'V’s life path gives the player a starting identity. Street races, side jobs, hacking, and ordinary movement through Night City give that identity something to do. The city’s density, weather, and sound support the feeling of having a place in it.'
      ],
      'Write down who the player gets to be. Find one ordinary action that makes the role feel real, then test whether players describe that fantasy in their own words.',
      [frame('cyberpunk-life-path', 'Cyberpunk 2077 offers life paths that frame the player’s identity before the story begins.')],
      {heading: 'How Night City sustains the role', paragraphs: [
        'Nomad, Streetkid, and Corpo give V different starting relationships to the city. Once inside it, ordinary moments also matter. Driving in the rain, hearing advertisements and street vendors, taking a job, joining a race, and hacking a terminal give the player ways to act as someone who lives there.',
        'The video recognizes narrative as another strong ingredient. Its distinction is that a well-told plot explains what happens to V, while fantasy is the pleasure of behaving like V in a place that feels inhabited. The two can support each other. A world can feel impressive in a cutscene and still offer the player few ways to express their role.',
        'When reviewing a scene, note what the player can choose to do and which details reinforce that identity while they do it.'
      ]}),
    topic('dispatch-narrative', 'How Dispatch Makes Narrative Playable',
      'Roster assignments become decisions about trust and relationships.',
      'Make the choice part of the story', [
        'The dispatcher weighs who is suited to a call and who deserves a chance. Those assignments are tactical decisions about abilities. They also give the player a say in relationships as teammates are trusted, sidelined, or given new responsibilities.'
      ],
      'Pick one decision where a practical outcome and a personal relationship can pull in different directions. Let the player see how both respond afterward.',
      [frame('dispatch-assignment', 'A roster card surfaces character strengths before the player decides who to send.')],
      {heading: 'Why an assignment feels like a story choice', paragraphs: [
        'The player is a former superhero working a desk and sending a roster of reformed villains to calls. Rescuing a cat or breaking up a bar fight creates humor because the assignment conflicts with who those teammates used to be. Over time, the roster becomes a set of people the player understands as well as a set of stats.',
        'Sending a reliable veteran can be the safer decision. Giving a less dependable teammate a chance may have a different payoff for their relationship or development. When later reactions reflect who was trusted or benched, the assignment screen becomes part of how the story is told.',
        'This example helps distinguish narrative participation from simply selecting an ending. Small decisions can accumulate throughout an ordinary part of play and make the player care about what happens next.'
      ]}),
    topic('vampire-survivors-progression', 'Why Vampire Survivors Is Easy to Keep Playing',
      'Simple inputs feed growth during a run and between runs.',
      'Connect two progression loops', [
        'Movement is the main input while weapons and effects grow around the player. Level-ups and visible increases in power give each attempt momentum. Coins earned in a run can then improve the next attempt.',
        'The category called submission in the eight kinds of fun describes the appeal of settling into a low-effort rhythm and making steady progress.'
      ],
      'Sketch what changes every minute and what carries forward after the session. Give each loop enough feedback that players can tell what they gained.',
      [frame('vampire-survivors-loop', 'The loop diagram connects moment-to-moment fighting and upgrades with progression between runs.')],
      {heading: 'How the two loops keep each other moving', paragraphs: [
        'During a run, moving through the crowd leads to combat, experience drops, level-ups, and stronger weapons. The next wave gives the player a chance to see those upgrades working. Between runs, coins can go into permanent improvements, which affect the starting conditions of later attempts.',
        'The two loops answer different questions. One shows what the player built in this particular run. The other makes a short or unsuccessful run part of a longer progression. New zones invite discovery, and chest effects add spectacle, but the consistent rhythm needs little effort to re-enter.',
        'For a prototype, track the time to the first upgrade, the time until players see its effect, and what a failed run leaves behind. Those moments reveal where growth is legible and where it may start feeling like busywork.'
      ]}),
    topic('cuphead-challenge', 'How Cuphead Makes Another Attempt Worthwhile',
      'A progress display makes mastery visible after a loss.',
      'Show evidence of improvement', [
        'Cuphead’s boss fights ask players to recognise patterns and survive successive phases. When a run ends, the progress display shows how far they got. A loss can still show that the player reached a new phase or got closer to the finish.'
      ],
      'After a failed attempt, show the player something specific they accomplished. Test whether that information helps them decide what to try next.',
      [frame('cuphead-retry', 'Cuphead’s retry screen shows progress through the encounter before the next attempt.')],
      {heading: 'Why defeat can still show progress', paragraphs: [
        'The hand-drawn animation and playful look give Cuphead immediate appeal. Bosses then put the player under pressure with little filler. After a defeat, the game shows how far the player got, including the phase they reached. That can turn a loss into evidence that a strategy worked for longer than it did last time.',
        'The video identifies challenge as the main kind of fun in this example. The player wants to learn patterns and gain mastery. A progress display supports that goal by making a small improvement visible before the player attempts the fight again.',
        'Design the failure screen around useful information. A phase marker can tell players that they survived a pattern, while a more detailed breakdown can show what to practise. Keep the information short enough to preserve the rhythm between attempts.'
      ]}),
    topic('it-takes-two-fellowship', 'How It Takes Two Builds Fellowship',
      'Complementary abilities give both players a reason to rely on each other.',
      'Give each partner a different job', [
        'The game requires two players and changes their paired abilities between chapters. A hammer and nails work together, just as other sections pair effects such as sap and matches. Both players have something to notice, communicate, and do.',
        'The relationship story mirrors what happens at the controls. Progress depends on people working through a moment of confusion or frustration together.'
      ],
      'Prototype a task with two distinct abilities. During play, listen for moments where one player asks the other for help or explains what they see.',
      [frame('it-takes-two-pairs', 'The paired abilities change between chapters to give partners new reasons to cooperate.')],
      {heading: 'What makes both partners essential', paragraphs: [
        'With the hammer and nails, one player can create an opportunity the other needs to use. Sap and matches or rewind and clone introduce new dependencies later, so a pair keeps learning how to communicate instead of applying the same solution throughout the game.',
        'The story about a struggling couple gives the cooperation context. The game often asks the people on the couch to deal with a version of the same problem: expressing what they can do, noticing what the other person needs, and trying again when they get in each other\'s way.',
        'A good check is to see if one person can direct the whole puzzle while the other follows instructions mechanically. Give each player information, timing, or control that they can contribute independently, then let the solution depend on comparing those perspectives.'
      ]}),
    topic('games-and-friendship', 'How Games Help Players Become Friends',
      'Friendship develops through repeat encounters, shared experiences, help, and conversation.',
      'Give players a reason to meet again', [
        'Proximity makes people familiar. Similar goals create something to talk about. Reciprocity gives players chances to help each other. Disclosure can happen when a group stays together and has time to chat after the formal task ends.',
        'A persistent realm, familiar names, and shared quests can create the first encounters. Dungeons and raids give those players a reason to rely on each other over time.'
      ],
      'Trace what happens after two strangers play together. Check whether they can recognise each other later, cooperate again, and stay in touch after the activity ends.',
      [frame('friendship-steps', 'The diagram names proximity, similarity, reciprocity, and disclosure.')],
      {heading: 'What each stage looks like in World of Warcraft', paragraphs: [
        'Seeing familiar names repeatedly on the same realm creates proximity. Shared factions, level ranges, and quests can reveal similarity. An elite enemy such as Hogger gives two players a small reason to help each other. In a dungeon or raid, each role depends more heavily on the group, which creates repeated chances to return that help.',
        'Disclosure is the part that can continue after the objective ends. Players might stay in voice chat while gathering resources or leveling a different character and talk about their lives. A long friends list measures contacts, while repeat interactions and time together give those contacts room to become relationships.',
        'Check if teammates are recognizable on a second meeting, whether they can choose to play together again, and what happens to their communication channel at the end of the activity.'
      ]})
  ]},
  {title: 'Encounter Design', entries: [
    topic('loatheb', 'Designing Loatheb in Naxxramas',
      'Give healers a reason to contribute damage while keeping healing essential.',
      'Change how often healers can act', [
        'Disabling healing would make it easy to leave healers out. A penalty that stacked on the tank made players cast harder as the tank’s health dropped. A penalty on the healer created an unpleasant choice between saving the tank and making future heals weaker.',
        'A one-heal-per-minute rule gave the raid a reason to bring healers and gave them time to deal damage between heals. The spore buff also let affected damage dealers attack without generating threat.'
      ],
      'Test how a group actually responds to a role restriction, including whether it changes who gets invited. Include preparation costs such as consumables in playtests.',
      [frame('loatheb-early-design', 'An early tank debuff reduced consecutive healing.'), frame('loatheb-spore', 'The Fungal Bloom tooltip shows the spore’s combat benefit.')],
      {heading: 'Why the earlier healing rules failed', paragraphs: [
        'When repeated heals weakened healing on the tank, testers saw falling health and tried to compensate by healing more. When the penalty moved to the caster, each emergency heal made later casts less effective. Both rules put healers in a situation where the intended action looked worse than doubling down or saving a spell for later.',
        'The shipped limit gave each healer a single valuable cast per minute and an interval when dealing damage made sense. The encounter also needed a way to manage threat when tank resources were harder to generate. Fungal Bloom from spores allowed affected players to deal damage without creating threat.',
        'The video also raises the cost of consumables. The team could spawn them instantly in internal tests, but raiders had to acquire them and continued to need them while farming the boss. Test preparation time as part of the encounter. It can change whether players see a fight as a mastery challenge they want to repeat.'
      ]}),
    topic('patchwerk', 'How Patchwerk Tests a Raid',
      'A simple boss can stress tanks, healers, and damage dealers through tuning.',
      'Put pressure on each role', [
        'Hateful Strike let Patchwerk hit off-tanks while continuing to attack the primary tank. Choosing the eligible off-tank with the most health gave healers some room when heals landed at different times.',
        'A tight enrage timer added a damage check so the raid could not freely trade damage dealers for more healers. Internal damage tests for each class gave the team a baseline for setting boss health.'
      ],
      'Test the encounter with unusually defensive and aggressive group compositions. Tune the checks so each role contributes and a single tactic cannot bypass the intended pressure.',
      [frame('patchwerk-strike', 'Hateful Strike adds a second source of pressure on the tanks.'), frame('patchwerk-enrage', 'The enrage timer turns clearing the fight into a damage check.')],
      {heading: 'How the encounter became a raid-wide check', paragraphs: [
        'The starting idea drew on an EverQuest boss whose danger came from tightly tuned hits. One large hit on the main tank proved manageable with concentrated healing. Hateful Strike spread pressure to off-tanks and selected among eligible high-threat targets using current health, leaving healers time to react to staggered healing or latency.',
        'At that point, a raid could still compensate by bringing extra healers and taking longer. The enrage created an upper limit and made the damage contribution matter. With limited player damage data available, internal players tested each class against target dummies. The team then added about 30% to its health estimate to account for optimizations serious raiders would discover.',
        'For a similar check, measure a realistic group rather than relying on a target-dummy result alone. Movement, reaction time, and recovery after mistakes can change how much damage the group actually delivers.'
      ]}),
    topic('gruul', 'Gruul and the Panic of Musical Chairs',
      'Random displacement turns a spread mechanic into a last-second decision.',
      'Make spacing an improvisation', [
        'Shatter hurts players based on how close they are to each other. Ground Slam scatters the raid before Shatter so players have to find space in the moment.',
        'Latency made nearby players hard to track. A stacking slow gives positions time to synchronize and adds suspense before the damage lands. An increasing boss damage penalty helps keep the fight dangerous even as fewer players make spreading easier.'
      ],
      'Test a shared positioning mechanic on real and simulated network delays. Check what happens when a group starts to lose players and space becomes easier to find.',
      [frame('gruul-shatter', 'The damage curve shows why players need distance before Shatter.'), frame('gruul-slow', 'A stacking slow makes movement progressively more deliberate after Ground Slam.')],
      {heading: 'A technical constraint became part of the drama', paragraphs: [
        'Shatter on its own allows a fixed spread formation. Ground Slam scatters players in different directions and distances so they have to find a safe spot from where they land. With network latency, a player could think a spot was empty while another player\'s client showed it occupied, because their positions reached one another late.',
        'The stacking Gronn Lord\'s Grasp reduced movement speed in 20% steps over five seconds, giving positions more time to settle. After players were petrified, a short pause created time to look around and realize who was too close. The solution added suspense while making the mechanic easier to read across clients.',
        'The room stayed the same size as the raid lost players, which made it easier for survivors to spread. A soft enrage increased Gruul\'s damage by 15% every 30 seconds in the version discussed, so losing people still carried a cost.'
      ]}),
    topic('prophet-skeram', 'Prophet Skeram and the Problem of Illusions',
      'Players will use any reliable clue to identify the real boss.',
      'Set the challenge, then look for unintended tells', [
        'Mind control pressures the raid to disable an affected ally. Illusory copies spawn at 75%, 50%, and 25% health so the group has to handle each split even if it deals high damage.',
        'The intended clue was that copies had half the health and would fall faster under equal pressure. Names, UI data, pet targeting, and mana also gave players ways to identify the original.'
      ],
      'When designing a disguise or identification mechanic, test with the interface, tools, and combat state that players actually see. Decide which discovered shortcuts are acceptable.',
      [frame('skeram-copies', 'The health-bar diagram illustrates the intended difference between Skeram and his copies.')],
      {heading: 'Why the illusions never stayed concealed', paragraphs: [
        'Skeram\'s prankster theme informed both abilities. Mind control initially posed little danger to a well-geared group, so the controlled player\'s damage was increased until crowd control became a worthwhile response. Enlarging the controlled target also made the change visible. Health thresholds for copies kept each split relevant even when the raid dealt damage quickly.',
        'The intended way to find the original was to compare health loss while the raid attacked the copies evenly. An early version gave copies a revealing name, and interface add-ons, creature identifiers, mana state, and persistent pet targeting could also expose the original.',
        'Before shipping an identification puzzle, list the facts the game exposes through names, interface data, targeting, and status bars. If a shortcut is genuinely clever and compatible with the encounter\'s goals, it can become part of what players learn rather than a defect that needs to be removed.'
      ]}),
    topic('instructor-razuvious', 'Instructor Razuvious and Class Identity',
      'A raid encounter can spotlight a class ability that rarely gets a chance to shine.',
      'Turn Mind Control into a tanking solution', [
        'Instructor Razuvious hits too hard for a player tank to hold him indefinitely. Priests can control his students and use them to tank instead. The encounter makes a familiar class spell central to a new job.',
        'This creates a memorable discovery for the right group, but requiring a spell exclusive to one class also limits which groups can take part.'
      ],
      'Choose a rarely used ability and design a moment where it solves a real problem. Check whether a group without that ability still has a viable way to play.',
      [frame('razuvious-strike', 'Unbalancing Strike demonstrates why conventional tanking is difficult to sustain.')],
      {heading: 'How a group learns to use the students', paragraphs: [
        'Unbalancing Strike hits hard and reduces defense, so even a strong player tank has trouble holding Razuvious over time. A cooldown may cover a short emergency. The longer-term answer is for a priest to take control of a student and use that student to tank.',
        'The video describes a blind test group whose tank died on the pull. The raid first had to read the combat log, then work out what the students were for. That discovery made a rarely used spell meaningful and gave the priest a moment specific to the class.',
        'Class-specific mechanics can make an encounter memorable, but they carry a roster cost. Decide whether the game can reliably assemble a group with the required ability. If it cannot, offer multiple tools that solve the same problem while preserving the specialist\'s advantage.'
      ]}),
    topic('set-monsters', 'From Diablo Set Monsters to Anubisath Sentinels',
      'A kill-order mechanic found a better home in a raid.',
      'Match the idea to the pace of combat', [
        'The original pack idea let an enemy pass its ability to the survivors when killed. In fast area-damage combat, enemies died before that change became readable or useful.',
        'The Anubisath Sentinels put the idea into a raid where buffs are readable, kill order matters, and players can coordinate. A pool of paired abilities gives the group reasons to inspect the enemies and reposition before committing.'
      ],
      'When a prototype fails, list the conditions it needs to be readable and consequential. Try it in a combat context that already supports those conditions.',
      [frame('set-monster-abilities', 'The paired ability categories give the raid different positioning and targeting problems.')],
      {heading: 'The same rule in two combat environments', paragraphs: [
        'The set item analogy suggested a group whose members were mechanically related. In the prototype, when one monster died its ability passed to the others, creating a potential decision about kill order. In Diablo\'s fast area-damage fights, the pack often died before an inherited ability became relevant. Players also had little reason to stop and inspect each buff.',
        'In a World of Warcraft raid, players could read buffs, communicate on voice, and focus their damage. The Anubisath Sentinels drew from eight abilities organized around paired choices, such as opposing magical effects or reasons to move closer or farther away. The raid had time to notice the traits and adjust how it pulled and killed the group.',
        'When testing a mechanic in a new context, check the visibility of its state, the time players have to respond, and whether their choice materially changes the encounter.'
      ]}),
    topic('buru-the-gorger', 'Buru the Gorger and Raid Awareness',
      'A pursuit mechanic turns one player’s movement into a shared responsibility.',
      'Draw a path through the room', [
        'Buru pursues a chosen raid member and speeds up. The target leads him across an egg while the raid prepares to break it. The explosion damages the boss and resets his speed, giving everyone a reason to track the route.',
        'Buru was optional and frequently skipped when the rewards did not justify the detour. Pathfinding failures could also reset the encounter, making terrain and route testing important.'
      ],
      'Test the pursuit from different player starting points. Check that the egg placement supports readable routes, then ask whether the reward makes the optional fight worth seeking out.',
      [frame('buru-egg', 'The raid attacks the egg while Buru is being led into position.'), frame('buru-path', 'The pathfinding illustration shows how the boss navigates across the room to its target.')],
      {heading: 'What an optional boss needs to earn repeat visits', paragraphs: [
        'The selected player becomes responsible for guiding Buru past an egg while the rest of the raid times its damage. Anyone might be chosen, so the group can see whether each person notices the switch and can plan a route while Buru gains speed. The explosion resets that speed and gives the raid another chance to organize.',
        'Being off the route to the final boss made Buru easy to skip. With rewards many players did not value, the extra fight rarely justified the detour. There was a second issue in the room itself: Buru could lose the path to a target and reset the fight. That bug was later fixed as a side effect of wider pathfinding work.',
        'Test the fight using the actual room and target starting positions. Then judge whether the rewards, travel time, and likelihood of a reset add up to a detour that players will choose.'
      ]})
  ]}
];
