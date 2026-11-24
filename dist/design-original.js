export const designArticles = [
  {
    "number": "02",
    "slug": "topic-02-animal-crossing-design",
    "title": "Designing a Daily Return Loop",
    "summary": "Give players a reason to return that survives a missed day.",
    "sections": [
      {
        "heading": "Design approach",
        "paragraphs": [
          "A daily loop works when players can name something they look forward to doing. In a village prototype, a player might tend a garden for five minutes on a busy day or spend an hour arranging a market stall. Both sessions should leave a visible trace of their choices. A shop rotation can create anticipation while permanent projects let players choose their own pace.",
          "I would keep time-sensitive opportunities recoverable. A missed festival might return later, and unfinished work should still make sense after a week away. The experience changes if players plan around their own curiosity or around preventing a penalty."
        ]
      },
      {
        "heading": "How I would test it",
        "paragraphs": [
          "Test three sessions with the same player: a short visit, a longer visit, and a return after a gap. Ask what they planned before opening the game and what they felt obliged to do after arriving."
        ]
      }
    ]
  },
  {
    "number": "06",
    "slug": "topic-06-puzzle-design-in-games",
    "title": "Puzzle Design in Games",
    "summary": "Give players a clear goal and a way to test their ideas.",
    "sections": [
      {
        "heading": "Design approach",
        "paragraphs": [
          "Consider a freight lift that only moves when its two platforms carry equal weight. Show players a simple crossing where the platform tilts visibly under a crate. The first challenge can ask them to move that crate. A later challenge can add crates of different weights while retaining the same signal for imbalance.",
          "Design the failure response so the player learns from acting. A silent lock tells them only that the solution failed. A lift that rises a little and settles again tells them where to investigate. Put a reset within reach if experimentation can leave the room unsolvable."
        ]
      },
      {
        "heading": "How I would test it",
        "paragraphs": [
          "Ask testers to explain the rule before attempting the variation. If they can solve the first room but cannot explain why, revise the feedback before adding more complexity."
        ]
      }
    ]
  },
  {
    "number": "07",
    "slug": "topic-07-procedural-content-generation",
    "title": "Procedural Content Generation in Game Design",
    "summary": "Define what every generated layout must do before varying its details.",
    "sections": [
      {
        "heading": "Design approach",
        "paragraphs": [
          "In a cave expedition, I would generate the route from the exit backward. Require a traversable main path, give optional rooms a clear reward, and place a recovery space before the hardest encounter. Vary the shape and connections only after those constraints are met. The generator can choose room shapes and enemy combinations while preserving the relationship between risk and reward.",
          "Keep each run reproducible with a seed. When an odd layout appears, record its seed and the failed rule instead of tuning the entire generator from memory. Automated checks can find disconnected rooms and unreachable rewards. Playtests can catch boring stretches or unfair overlaps that pass those checks."
        ]
      },
      {
        "heading": "How I would test it",
        "paragraphs": [
          "Generate a batch and review the least interesting seeds as well as the broken ones. Change the rules that produce those outcomes before adding more room variations."
        ]
      }
    ]
  },
  {
    "number": "09",
    "slug": "topic-09-gunplay-design",
    "title": "Designing Gunplay for Video Games",
    "summary": "Tune weapon decisions and hit feedback in the same test space.",
    "sections": [
      {
        "heading": "Design approach",
        "paragraphs": [
          "A close-range weapon should ask the player to commit to proximity. A longer-range weapon might ask them to manage exposure while lining up a shot. I would put both in one graybox with a short crossing, a defended lane, and a flank. The goal is to find out whether each weapon creates different decisions even when the visuals and enemy types stay constant.",
          "Separate the timing of input, firing, impact, and recovery. A clear response on input helps a weapon feel responsive. Recoil, sound, and target reactions communicate the result. The player should be able to tell whether they missed, hit armor, or interrupted the target before reading damage numbers."
        ]
      },
      {
        "heading": "How I would test it",
        "paragraphs": [
          "Record fights at several distances and ask testers why they switched weapons. Tune the encounter and the weapon together if their choice depends entirely on damage per second."
        ]
      }
    ]
  },
  {
    "number": "10",
    "slug": "topic-10-indie-game-development",
    "title": "Scoping an Indie Game You Can Finish",
    "summary": "Set a finish line around one playable experience you can produce repeatedly.",
    "sections": [
      {
        "heading": "Design approach",
        "paragraphs": [
          "Start with one complete run through the game’s promise. A folklore hunt could begin with one clue, lead to one encounter, and end with a decision about the reward. Build that sequence with temporary art and a simple restart. Time how long it takes to design, implement, test, and revise each step before promising more hunts.",
          "Separate work that proves the idea from work that makes it bigger. A second enemy can be useful if it tests whether a combat rule holds across different threats. A second region with a new asset kit may add production cost before the team knows whether the hunt itself is enjoyable."
        ]
      },
      {
        "heading": "How I would test it",
        "paragraphs": [
          "Make a cut list before building more content. Protect the mechanics players must understand to complete the run, then identify upgrades the project can ship without."
        ]
      }
    ]
  },
  {
    "number": "11",
    "slug": "topic-11-breath-of-the-wild-exploration",
    "title": "Designing Exploration Through Landmarks",
    "summary": "Let players choose a destination from what they can see in the world.",
    "sections": [
      {
        "heading": "Design approach",
        "paragraphs": [
          "In a hillside level, I would place a tall ruined signal tower where players can see it from the opening trail. A feature at its base, such as smoke from an inhabited camp, can offer a smaller destination on the way. Changing what each landmark reveals as the player approaches makes the route feel like a series of discoveries.",
          "Allow players to reach important destinations from more than one direction when the environment supports it. A difficult ridge approach can offer a stronger view while a river route offers an easier climb. Keep landmarks readable from both so a detour still feels intentional."
        ]
      },
      {
        "heading": "How I would test it",
        "paragraphs": [
          "Watch a first-time player at a junction. Ask what caught their eye, where they expected the route to go, and whether they could recover after losing sight of the landmark. Use that evidence before adding a waypoint."
        ]
      }
    ]
  },
  {
    "number": "12",
    "slug": "topic-12-horror-game-design",
    "title": "Designing Tension in Horror Games",
    "summary": "Use MAUT as a design exercise in anticipation, uncertainty, and release.",
    "sections": [
      {
        "heading": "A proposed hunt in MAUT",
        "paragraphs": [
          "In a proposed MAUT hunt, I would show the Death Dealer a trace of the creature before revealing it. A disturbed marker or a sound from the treeline could give the player enough information to decide whether to follow or take cover. The player should know what they are trying to do even when they cannot tell exactly where the threat is.",
          "I would build the encounter in three beats. First, let the player learn a reliable signal in relative safety. Next, repeat the signal under pressure as they cross exposed ground. Finally, let them act on it by changing route or using a spirit ability. Follow the threat with a quieter space so the player has time to process what happened."
        ],
        "figures": [
          {
            "src": "assets/maut-overhead.webp",
            "alt": "Overhead view of the Death Dealer surrounded by dark terrain",
            "caption": "MAUT concept screenshot. The proposed encounter could use the edges of this clearing to suggest where a threat might be hiding.",
            "width": 1261,
            "height": 862
          }
        ]
      },
      {
        "heading": "Test tension against confusion",
        "paragraphs": [
          "Run two versions, one where the creature is visible early and one where the signal arrives first. Ask players to mark when they felt tense, what they expected, and what action they thought was available. If they cannot describe a choice, improve the cue or the layout before making the encounter darker."
        ]
      }
    ]
  },
  {
    "number": "13",
    "slug": "topic-13-fighting-game-history-part-1",
    "title": "Fighting Game Design Part 1",
    "summary": "Build readable exchanges around distance, timing, and recovery.",
    "sections": [
      {
        "heading": "Design approach",
        "paragraphs": [
          "Imagine two fighters standing just outside each other’s normal attack range. One has a longer poke with a slower recovery. The other can close space quickly but has to predict the poke. Each player can threaten more than one response, so an exchange depends on reading the opponent as well as executing the move.",
          "I would prototype three attacks per character before building a large move list. Give them distinct startup, reach, and recovery. Then test them at the distances where their use cases overlap. A useful attack should be identifiable from its pose and outcome before players need a frame chart."
        ]
      },
      {
        "heading": "How I would test it",
        "paragraphs": [
          "Record short matches with intermediate and new players. Track which attacks players understand, which they avoid, and which appear to work regardless of distance. That last group is where I would look for a missing trade-off."
        ]
      }
    ]
  },
  {
    "number": "14",
    "slug": "topic-14-online-game-economies",
    "title": "Player Motivation in Online Game Economies",
    "summary": "Give spending and earning decisions a purpose players can explain.",
    "sections": [
      {
        "heading": "Design approach",
        "paragraphs": [
          "Suppose players earn one currency through hunts. They can spend it on a visible short-term upgrade or save it for a new ability. The decision creates a clear trade-off because both outcomes connect to what the player wants to do next. If the game adds a second currency, it should support a decision the first cannot express clearly.",
          "I would make an inventory of where rewards enter, where they leave, and how long common player types need to reach a goal. Watch what happens to a newcomer and to someone who already owns most upgrades. They may face very different incentives even if the reward amounts are the same."
        ]
      },
      {
        "heading": "How I would test it",
        "paragraphs": [
          "Test a missed week and a very active week. If players feel either punished for leaving or pressured to exhaust every reward, adjust timing and alternatives before increasing payout values."
        ]
      }
    ]
  },
  {
    "number": "15",
    "slug": "topic-15-fighting-game-history-part-2",
    "title": "Fighting Game Design Part 2",
    "summary": "Make depth visible without overwhelming a first-time player.",
    "sections": [
      {
        "heading": "Design approach",
        "paragraphs": [
          "A fighter can have a simple route to useful play and still reward long-term practice. Give a beginner a reliable action at close range and a way to retreat. Give an experienced player ways to vary timing, bait a response, or turn a risky read into a stronger outcome. Both players should be engaging with the same core exchange.",
          "Teach the game with short tasks that explain when a move matters. A practice drill might ask the player to punish a slow recovery twice, then alternate that opening with a faster move so they learn to recognize the difference. Train perception alongside the input sequence."
        ]
      },
      {
        "heading": "How I would test it",
        "paragraphs": [
          "Test whether players can identify a decision they could change after losing. If they remember only the combo they took, improve the readability of the opening that led to it."
        ]
      }
    ]
  },
  {
    "number": "17",
    "slug": "topic-17-shadow-of-the-tomb-raider-level-production",
    "title": "Producing an Adventure Level",
    "summary": "Use a playable handoff to protect traversal, story, and art intent.",
    "sections": [
      {
        "heading": "Design approach",
        "paragraphs": [
          "For an adventure level, I would start with a graybox that proves the route, camera clearances, and transition between traversal and story beats. A climb into a reveal needs a planned sightline and time for the player to orient. The environment team can then develop a visual target that respects those constraints.",
          "Record decisions where later teams can find them. Mark which collision shapes support climbing, where scripted events expect the player to arrive, and what happens if they approach from the other side. If art changes a landmark or narrows a ledge, review that change from the player camera in a playable build."
        ]
      },
      {
        "heading": "How I would test it",
        "paragraphs": [
          "Plan reviews around the riskiest handoffs. Test the same route before and after the art pass and compare the player’s movement, attention, and timing rather than comparing still images alone."
        ]
      }
    ]
  },
  {
    "number": "18",
    "slug": "topic-18-level-creation-tips",
    "title": "10 Checks for Building 3D Levels",
    "summary": "Review a level from the player’s first view through its return routes.",
    "sections": [
      {
        "heading": "Design approach",
        "paragraphs": [
          "My first five checks are objective, spawn orientation, scale, landmarks, and paths. The player should know what matters at the start, face something useful, and understand which gaps or doors fit their movement. A landmark should help them recover orientation, and an alternate path should give them a reason to take it.",
          "The next five are camera movement, collision, pacing, recovery, and performance. Check tight turns at speed. Look for bumps and invisible obstructions. Compare busy stretches with quieter ones, test what happens after a mistake, and run the most expensive view on target hardware."
        ]
      },
      {
        "heading": "How I would test it",
        "paragraphs": [
          "I would put those ten checks on a graybox review sheet. For each issue, record the point in the level, the build, what the player did, and the smallest change worth testing."
        ]
      }
    ]
  },
  {
    "number": "19",
    "slug": "topic-19-losing-in-pvp",
    "title": "Designing for the Losing Side in PvP",
    "summary": "Keep useful decisions available after a team falls behind.",
    "sections": [
      {
        "heading": "Design approach",
        "paragraphs": [
          "A losing team needs to see the threat and know what it can still do. In a control-point prototype, that might mean choosing between a safer regroup route, contesting a secondary objective, or risking a quick return to the main point. Those options depend on map access and spawn safety as much as on the scoring rules.",
          "Avoid making a comeback automatic. A team should have a chance to turn the match by reading the situation and coordinating well, while the leading side should retain the advantage it earned. Strong comeback rewards can create incentives to fall behind deliberately or make early wins feel pointless."
        ]
      },
      {
        "heading": "How I would test it",
        "paragraphs": [
          "Playtest from a deliberately losing position. Note whether the team can leave spawn, identify a useful goal, and tell when a decision helped. Review whether the leaders can respond to the recovery attempt."
        ]
      }
    ]
  },
  {
    "number": "20",
    "slug": "topic-20-creating-a-3d-layout",
    "title": "Creating a 3D Level Layout",
    "summary": "Turn a flat plan into spaces that work from the player camera.",
    "sections": [
      {
        "heading": "Design approach",
        "paragraphs": [
          "I would draw the main route, optional branches, and key encounters first, then block them out using actual movement and camera settings. A route that looks wide enough on paper can feel narrow when the camera swings. A stair that technically works may hide the exit at the moment the player needs to see it.",
          "Use height changes to frame destinations, offer alternate approaches, or change the terms of a fight. Test why each elevation exists. Adding stairs just to make the plan less flat can increase travel time without giving players a meaningful decision."
        ]
      },
      {
        "heading": "How I would test it",
        "paragraphs": [
          "Walk the blockout at several speeds and from each plausible entrance. Mark places where players hesitate or look back. Adjust the view and movement before replacing the blockout with decorative geometry."
        ]
      }
    ]
  },
  {
    "number": "21",
    "slug": "tips-for-building-multiplayer-maps",
    "title": "Tips for Building Multiplayer Maps",
    "summary": "Time routes and challenge the strongest positions while the map is still a blockout.",
    "sections": [
      {
        "heading": "Design approach",
        "paragraphs": [
          "Design from the opening thirty seconds. Mark each spawn, the first objective, early information, and likely first contact. Time both teams with the real movement controller. A longer path can still be competitive if it offers cover or a safer view. Give alternate routes tactical purposes players can recognize during play.",
          "Then test how the map changes when one side earns an advantage. A strong position can reward control while still leaving an approach outside its main sightline. A respawn system should have usable candidates as control shifts. Use landmarks that can be named quickly from multiple directions."
        ]
      },
      {
        "heading": "How I would test it",
        "paragraphs": [
          "Run the same match with teams swapped, then test a group pinned near spawn. Record the first sightline, time to the objective, and positions where players cannot disengage. Change one route or cover piece at a time so you can read the result."
        ]
      }
    ]
  },
  {
    "number": "23",
    "slug": "topic-23-pve-shooter-level-design",
    "title": "PvE Shooter Level Design",
    "summary": "Give players ways to move and recover as enemy pressure changes.",
    "sections": [
      {
        "heading": "Design approach",
        "paragraphs": [
          "A useful combat room offers a readable entry, a few strong routes, and cover that supports movement between them. I would stage one enemy that pressures from a distance and another that makes staying behind the same cover risky. Together they create a reason to relocate without needing to spawn a larger crowd.",
          "Teach an enemy’s role where players can observe it. Once they can predict the threat, combine it with a second role or change the geometry. Place resupply where moving for it has a cost the player can judge. Avoid relying on hidden spawns to force the intended route."
        ]
      },
      {
        "heading": "How I would test it",
        "paragraphs": [
          "Review the encounter from each entrance and repeat it after losing health early. Watch where players retreat, whether they can see what pushed them out, and whether different approaches survive."
        ]
      }
    ]
  },
  {
    "number": "24",
    "slug": "topic-24-it-takes-two-co-op",
    "title": "Designing Co-op Around Complementary Abilities",
    "summary": "Give both partners information, agency, and something useful to say.",
    "sections": [
      {
        "heading": "Design approach",
        "paragraphs": [
          "One player might be able to see runes hidden in the environment while the other can rotate the machinery linked to them. The first interprets the clue and the second sees what the mechanism changes. A good solution asks both players to compare observations rather than having one read a sequence of instructions to the other.",
          "Introduce each ability in a simple setup, then let the players discover a combination. Later challenges can change timing or which player has the best view. Build in a fast recovery if the partnership makes a mistake so the pair can try their next idea together."
        ]
      },
      {
        "heading": "How I would test it",
        "paragraphs": [
          "Watch who speaks, who waits, and whether one person solves everything. If a player spends most of the sequence waiting for directions, give them a decision or piece of information the other person genuinely needs."
        ]
      }
    ]
  },
  {
    "number": "27",
    "slug": "topic-27-open-world-storytelling",
    "title": "Storytelling in Open-World Games",
    "summary": "Write story beats that still make sense when players arrive out of order.",
    "sections": [
      {
        "heading": "Design approach",
        "paragraphs": [
          "A player may reach an abandoned watchtower before hearing about its history. The location should tell a small story on its own: a barricade turned inward, an interrupted meal, and a trail leaving through a window. Later dialogue can change what these clues mean without being required to notice them.",
          "For a larger thread, divide information into what the player must know and what can be discovered in any order. Keep the essential fact available in more than one place where it makes sense. Optional scenes can deepen a character or complicate the story without becoming a hidden requirement for understanding it."
        ]
      },
      {
        "heading": "How I would test it",
        "paragraphs": [
          "Ask testers to enter the region from different directions. Have them recount what happened and why they want to follow the next clue. Compare the stories before deciding which clues need stronger placement."
        ]
      }
    ]
  },
  {
    "number": "28",
    "slug": "topic-28-super-mario-odyssey-level-design",
    "title": "Designing Levels as Playful Sandboxes",
    "summary": "Use clusters of small goals to make wandering productive.",
    "sections": [
      {
        "heading": "Design approach",
        "paragraphs": [
          "A playground-style level should show something players can try immediately and hint at something harder to reach. A central landmark can orient them while smaller rewards invite short detours. When they finish a task, a new vantage point can reveal another possibility without assigning a different objective.",
          "Build an area around a movement ability and give it several uses. A wall jump might cross a gap, climb to a collectible, or let a curious player return to a path from the side. Vary the setup while preserving a clear read of what the movement can do."
        ]
      },
      {
        "heading": "How I would test it",
        "paragraphs": [
          "Test whether players choose to explore after reaching the first obvious reward. Note what they notice next and where they circle back. If most stop at the same point, check what the camera lets them see before adding another prompt."
        ]
      }
    ]
  },
  {
    "number": "29",
    "slug": "topic-29-combat-design",
    "title": "Combat Design in Games",
    "summary": "Make commitments, consequences, and recovery readable on both sides of a fight.",
    "sections": [
      {
        "heading": "Design approach",
        "paragraphs": [
          "In a melee prototype, I would start with a safe quick attack, a stronger committed attack, and an enemy that punishes predictable timing. The quick move keeps pressure but deals less damage. The committed move opens a larger window if it misses. The enemy needs a clear signal before exploiting that window.",
          "Tune attack feedback separately from player safety. A hit can feel powerful through pose, pause, sound, and reaction, while recovery still leaves time for the opponent to respond. Multiple effects should point to the same outcome. If players cannot tell what hit them, more visual intensity will not fix the timing or camera."
        ]
      },
      {
        "heading": "How I would test it",
        "paragraphs": [
          "Record one encounter and label the choice, commitment, impact, and recovery for both sides. Ask testers what they would change and see whether they can act on their answer next attempt."
        ]
      }
    ]
  },
  {
    "number": "30",
    "slug": "topic-30-metroidvania-map-design",
    "title": "Metroidvania Map Design",
    "summary": "Make a new ability change how players remember old spaces.",
    "sections": [
      {
        "heading": "Design approach",
        "paragraphs": [
          "A crossed-out route on a map does not create desire by itself. Let players see what might be beyond a barrier or try a jump that lands just short. When they gain a movement ability later, the earlier space becomes a question they can finally answer. The return feels worthwhile when familiar geometry supports a new decision.",
          "I would give each upgrade one obvious use and one optional use near a place players already recognize. Use shortcuts to keep return trips manageable. Connections can make revisiting feel like learning the map instead of repeating the same corridor."
        ]
      },
      {
        "heading": "How I would test it",
        "paragraphs": [
          "Track which blocked routes players remember after an upgrade. If they can use the ability in a new room but recall none of their earlier encounters, strengthen the way those barriers were introduced."
        ]
      }
    ]
  },
  {
    "number": "31",
    "slug": "topic-31-good-puzzle-design",
    "title": "Good Puzzle Design",
    "summary": "Design for the moment a player changes their explanation of the problem.",
    "sections": [
      {
        "heading": "Design approach",
        "paragraphs": [
          "Give the player a reasonable first interpretation. In a room with a movable mirror, they may assume the beam must hit the nearest receiver. A visible second reflection can reveal that the beam keeps traveling and suggest a solution that did not look possible at first.",
          "Avoid mistaking an obscure input for a clever answer. The player should understand what they can touch, how they can reset the room, and what changed when they tried something. The insight can come from connecting known actions in a new way."
        ]
      },
      {
        "heading": "How I would test it",
        "paragraphs": [
          "Watch how players describe the problem before and after their first attempt. When they are stuck, ask what they are trying to prove. Use their answer to decide whether the room needs a clearer signal or simply more space to experiment."
        ]
      }
    ]
  },
  {
    "number": "34",
    "slug": "topic-34-environmental-storytelling",
    "title": "Environmental Storytelling",
    "summary": "Let players infer a specific event from arrangements and traces in the world.",
    "sections": [
      {
        "heading": "Design approach",
        "paragraphs": [
          "Instead of filling a room with generic damage, choose an event. Perhaps a guard tried to keep something out, then escaped through a service door. A chair braced against the entrance, scuff marks moving toward the back, and a missing lamp can support that sequence without a written explanation.",
          "Place a strong clue where the player naturally looks and smaller evidence where curious players can examine it. Match the age and direction of damage to the event. If every object tells a different story, players may read the space as decoration even when each prop makes sense individually."
        ]
      },
      {
        "heading": "How I would test it",
        "paragraphs": [
          "Ask players to recount what happened in the room and point to what made them think so. Keep alternative interpretations that enrich the story, and revise evidence that sends them away from a fact the next objective depends on."
        ]
      }
    ]
  },
  {
    "number": "35",
    "slug": "topic-35-immersive-sim-design",
    "title": "Designing Immersive Sims",
    "summary": "Give the player rules they can reuse and let different approaches carry different costs.",
    "sections": [
      {
        "heading": "Design approach",
        "paragraphs": [
          "Imagine a guarded workshop with a vent, a locked door, and a power panel. Cutting power might disable a sensor and darken the room, but it can also attract a guard. The same electricity rule should apply elsewhere so the player can make plans based on what they learned.",
          "A route needs a different cost or benefit to justify its place. A narrow vent might avoid detection while leaving the player far from useful equipment. Talking past a guard can leave the lights on and preserve access to the main exit. Consistent consequences let players improvise when their preferred route fails."
        ]
      },
      {
        "heading": "How I would test it",
        "paragraphs": [
          "Test what a first-time player tries that you did not plan. Review whether the world rules acknowledged it and whether success or failure made sense from the information available."
        ]
      }
    ]
  },
  {
    "number": "36",
    "slug": "topic-36-minimalism-in-design",
    "title": "Minimalism in Game Design",
    "summary": "Remove rules that obscure the decision you want players to notice.",
    "sections": [
      {
        "heading": "Design approach",
        "paragraphs": [
          "Start with one verb and one source of pressure. A movement prototype might ask players to cross a room before lights go out, using the same dash to move quickly or avoid a threat. If the dash already creates a choice around timing and position, extra abilities can wait until that choice is clear.",
          "I would compare a build with and without each secondary system. Keep additions that create a different decision or let the core action express something new. Remove gauges that duplicate information already clear in animation, sound, or world state."
        ]
      },
      {
        "heading": "How I would test it",
        "paragraphs": [
          "Ask players to explain what they were paying attention to during a run. If they spend their time reading the interface instead of judging the room and their timing, try keeping the same challenge with fewer simultaneous signals."
        ]
      }
    ]
  },
  {
    "number": "37",
    "slug": "topic-37-teaching-through-play",
    "title": "Teaching Through Play",
    "summary": "Let the player learn one rule safely and apply it under a new condition.",
    "sections": [
      {
        "heading": "Design approach",
        "paragraphs": [
          "A gate requires hitting a switch with an aimed throw. Start by giving the player a clear view, a safe retry, and a target that visibly reacts. Once they know the action works, give them a second switch from a different angle. The difference shows whether they learned the rule or copied one setup.",
          "Increase pressure after the player has a chance to read the result. An enemy or timer can make the action meaningful later, but introducing both in the first attempt can hide what went wrong. Use help when players repeatedly form the same incorrect explanation."
        ]
      },
      {
        "heading": "How I would test it",
        "paragraphs": [
          "Test the variation without instructions. Ask what they expected the throw to do. The answer can distinguish a control issue from a failure to understand the connection between switch and gate."
        ]
      }
    ]
  },
  {
    "number": "38",
    "slug": "topic-38-controlled-repetition",
    "title": "Controlled Repetition in Games",
    "summary": "Keep the familiar part of a task so players can notice what changed.",
    "sections": [
      {
        "heading": "Design approach",
        "paragraphs": [
          "Repeated encounters can build mastery when they preserve a recognizable rule and alter the decision around it. If players first cross a bridge while a guard watches the far end, a second bridge could change the cover and timing rather than adding a new input. The player recognizes the problem but still has to make a fresh choice.",
          "Separate productive practice from time spent repeating understood steps. Recovering from a mistake might include replaying the demanding part of a fight. It rarely needs the same long walk back. Gradually introduce combinations to check whether earlier learning transfers."
        ]
      },
      {
        "heading": "How I would test it",
        "paragraphs": [
          "Track what players predict on the second and third encounters and whether their approach improves. If they are repeating the same actions with no reason to reconsider them, change the context or shorten the sequence."
        ]
      }
    ]
  }
];

export const playerTypeArticles = [
  {
    "slug": "the-8-kinds-of-fun",
    "title": "Defining the Experience Players Come For",
    "summary": "Use specific language about the experience to guide design and playtesting.",
    "sections": [
      {
        "heading": "Design approach",
        "paragraphs": [
          "A team that wants a game to be fun can still disagree about what to build. In a prototype about tracking a creature, one designer may want suspense while another wants mastery of a combat pattern. Both can be worthwhile goals, but they suggest different cues, pacing, and failure feedback.",
          "Write a statement that connects a player action to a feeling. A player listens for movement and decides when to cross a clearing because they want to feel exposed and resourceful. That is specific enough to design a scene around and ask about afterward. It also provides a basis for cutting features that distract from the effect."
        ]
      },
      {
        "heading": "How I would test it",
        "paragraphs": [
          "Gather descriptions from players before showing them your statement. Ask where the experience was strongest and which mechanic produced it. Revise the statement when their experience points to a stronger design."
        ]
      }
    ]
  },
  {
    "slug": "bartle-taxonomy-of-player-types",
    "title": "Understanding Player Motivations in Shared Worlds",
    "summary": "Design activities around what players choose to do and who they want to do it with.",
    "sections": [
      {
        "heading": "Design approach",
        "paragraphs": [
          "In a shared world, a player might chase a rank, find an unmarked cave, meet the same group each week, or seek a contest with other players. Those intentions can overlap. Someone might start a raid for a reward and return because of the group. Treat motivation as a reason to observe a choice rather than a permanent label on the person.",
          "Give the game systems that let these interests reinforce each other. A group hunt can reveal a new route as well as offer a shared accomplishment. When interests conflict, such as a player seeking combat while another wants to explore quietly, design clear signals and consent around the encounter."
        ]
      },
      {
        "heading": "How I would test it",
        "paragraphs": [
          "Track what players do after the required activity ends. Their next voluntary choice may tell you more about why they stay than the activity with the largest reward."
        ]
      }
    ]
  },
  {
    "slug": "what-type-of-gamer-are-you",
    "title": "Playtest with Different Player Motivations",
    "summary": "Ask what players voluntarily pursue before deciding who the game is for.",
    "sections": [
      {
        "heading": "Design approach",
        "paragraphs": [
          "Recruit players who give different reasons for playing similar games. A challenge-focused tester can reveal whether failures are readable. A player drawn by a setting can tell you whether they feel invited to explore. A social player can show where the game makes collaboration easy or awkward.",
          "Give each participant the same opening setup without assigning a preferred route. Record what they do when they have a free choice, when they stop, and which moment they want to repeat. Interview them about those decisions. A person who enjoys optimization may also value quiet exploration when playing alone."
        ]
      },
      {
        "heading": "How I would test it",
        "paragraphs": [
          "Use the results to find friction your intended audience shares. Distinguish changes that improve the experience for those players from changes that would move the game toward a different promise."
        ]
      }
    ]
  }
];

export const additionalDesignArticles = [
  {
    "slug": "balancing-multiplayer-competitive-games",
    "title": "Balancing Multiplayer Competitive Games",
    "summary": "Measure the contexts behind a win rate before tuning a character or map.",
    "sections": [
      {
        "heading": "Design approach",
        "paragraphs": [
          "A character can sit near an even overall win rate while dominating one skill bracket or depending on one map. I would split results by skill, opponent, map, and team composition where sample size allows, then review representative matches. Pick rate, ban rate, and player reports can show what feels restrictive even when average wins appear fair.",
          "Balance around a clear strength and a response opponents can use. If a character loses its identity when damage goes down, consider whether the timing or availability of counterplay is the actual problem. Adjust one meaningful lever at a time and compare its effects across the affected groups."
        ]
      },
      {
        "heading": "How I would test it",
        "paragraphs": [
          "Record the baseline, the expected change, and the result that would make you reverse it. Revisit the data after players have time to adapt, including teams that never used the dominant option."
        ]
      }
    ]
  },
  {
    "slug": "beyond-games-as-a-service-with-live-ops",
    "title": "Designing a Live Ops Structure",
    "summary": "Give recurring events a purpose and a delivery plan the team can sustain.",
    "sections": [
      {
        "heading": "Design approach",
        "paragraphs": [
          "Start with the player experience you want a monthly event to add. A short hunt can bring groups back around a shared challenge. A progression event can give quieter players a reason to return on their own schedule. Establish how those events connect to the base game and how long a missed reward remains attainable.",
          "I would plan each event from the release date back through configuration, QA, and rollback. Assign an owner for the rules, rewards, and communication. Try the event with a new player and a returning player, and verify that rewards can be granted once even if the player reconnects during a claim."
        ]
      },
      {
        "heading": "How I would test it",
        "paragraphs": [
          "After the event, compare participation, completion, feedback, and the effort the team spent delivering it. Use that review to decide which parts are worth repeating and what the next event needs to prove."
        ]
      }
    ]
  }
];
