import {topicFigures} from './design-topic-figures.js';

function topic(number, slug, title, summary, sections) {
  sections[1].figures = topicFigures(number);
  return {
    number,
    slug: `topic-${number}-${slug}`,
    title,
    summary,
    sections
  };
}

function section(heading, ...paragraphs) {
  return {heading, paragraphs};
}

function exercise(heading, ...steps) {
  return {heading, steps};
}

export const designTopics = [
  topic('02', 'animal-crossing-design', 'Designing Daily Life in Animal Crossing',
    'How real-time routines, villagers and player-made spaces make an island worth returning to.', [
      section('Give the player a place to live',
        'The island works as a place because the game gives players several reasons to be there. One visit can be about fishing, another about moving a path or looking for a recipe. I would build the first hour around two activities that feed each other, such as gathering materials for a piece of furniture that changes how a room looks. That gives an ordinary action a visible consequence.',
        'Villagers help connect the calendar to the player. A birthday, a gift returned later or a conversation about the weather makes the day feel specific. Give residents something to say about what has changed, then keep the dialogue short enough to read during a routine visit.'),
      section('Decide where a routine is worth the time',
        'The airport turns a social visit into a departure and arrival. That effort can make the trip feel like an event. I would apply the same test to crafting menus and storage. After the tenth use, does the sequence still support the feeling of the game? If it only consumes time, I would shorten it.',
        'Seasonal catches, weekly visitors and shop closures change what is possible on a given day. When one plan is unavailable, make another visible. A player who logs in after work should still have a way to make progress.'),
      exercise('Prototype one week of island life',
        'Give each day a small change. Include a rare recipe, a neighbour interaction and a visible upgrade.',
        'Ask two players to trade a duplicate recipe or share a pattern. Watch how they find what the other person needs.',
        'Try the build at different times of day and after missing several days. Check which routines become chores and which interruptions lead somewhere interesting.')
    ]),

  topic('06', 'puzzle-design-in-games', 'Puzzle Design in Games',
    'A method for teaching a rule and using it to build a satisfying environmental puzzle.', [
      section('Start with a goal the player can see',
        'I start with a blocked exit or a device the player needs to activate. The goal should be visible before the solution is obvious. Then I pick a single interaction worth exploring, such as raising water to float a platform. Give the player a chance to move the mechanism and see the result from the controls.',
        'A pattern puzzle in Uncharted can ask the player to connect a room to a notebook clue. A physics puzzle in Tomb Raider can put the clue in the movement of water, light or weight. Both approaches work when the player knows what to pay attention to.'),
      section('Build a sequence around the same rule',
        'Show the platform rising in a shallow pool first. In the next room, let the player move it sideways as well. In the final room, let the platform carry a weight to a switch. Each room changes one assumption while preserving what the player already learned.',
        'A misleading first approach can be satisfying if the player gets information from trying it. Let the platform rise and show why it cannot reach the switch. Once they understand the obstruction, they can revise the plan using the same tools.'),
      exercise('Test the puzzle without giving hints',
        'Ask the player to point out the goal and tell you what they think they can manipulate.',
        'Observe each experiment. If they miss a state change, fix the sound, camera framing or animation before adding a hint.',
        'Give them a quick way to restore the starting state. Check whether failure sends them back to thinking or back through a long sequence they have already solved.')
    ]),

  topic('07', 'procedural-content-generation', 'Procedural Content Generation in Game Design',
    'How to set rules for a generator, preserve authored decisions and test the seeds it produces.', [
      section('Choose the part that should vary',
        'I decide what a repeat player should have to reconsider. In a dungeon, changing connections and encounter placement can demand a new route. Randomizing the stone colour may add variety without changing play. Set a variation budget around the decisions you want the player to make.',
        'Generation can run in an editor for designers to review or at runtime as part of each playthrough. An editor tool can hand over a draft for art direction. A runtime tool has to handle every result it can produce, including unusual combinations.'),
      section('Author the constraints',
        'A useful pattern in Spelunky is to choose a route from entrance to exit, fill the space with compatible room modules, then populate the rooms. The generator can vary the locations of an optional shop or a valuable pickup, while designers author the situations that make taking a detour worthwhile.',
        'For a small prototype I would define connection types, landing space, difficulty ranges and forbidden adjacencies. Check reachability using the abilities available on that seed. A route which requires a later unlock is a failed route even when the rooms join in the data.'),
      exercise('Review a batch of seeds',
        'Save the seed and mark generated and authored parts in the debug view.',
        'Check that required objectives can be reached and that exits remain accessible after encounters are placed.',
        'Play both ordinary and extreme results. If each run has the same decision in a different room, revise the modules before making more of them.')
    ]),

  topic('09', 'gunplay-design', 'Designing Gunplay for Video Games',
    'How timing, commitment and feedback give fictional weapons distinct roles in a shooter.', [
      section('Design the moment between input and outcome',
        'I map the sequence from the player’s decision to the result they can read. An instant shot puts the emphasis on aim and timing. A slow projectile lets the target move while the shot travels. A wind-up asks the player to commit while the opportunity might disappear. These timings change when a player wants to act and what the opponent can do in response.',
        'A spread that tightens while aiming creates a clear trade-off if staying aimed limits awareness or movement. Give the player a cue that the spread has tightened and provide situations where taking the quick shot is equally reasonable.'),
      section('Make every cue answer a question',
        'Animation and sound can establish that the input fired. Impact effects tell the player where it landed, while a reaction or a restrained HUD cue tells them what it did. I check those three moments individually when a hit feels weak. Another layer of effects may make the event louder while leaving the result unclear.',
        'A family of weapons needs meaningful differences in the spaces and timings each favours. Give every prototype a useful situation and a situation in which switching is the better call.'),
      exercise('Compare two versions of the same weapon',
        'Keep the encounter and target health fixed. Change the wind-up, projectile travel time or recovery in one version.',
        'Ask players to predict when the shot will land and whether they can reposition after firing.',
        'See whether they change their timing in response. Tune the feedback separately from the mechanical values.')
    ]),

  topic('10', 'indie-game-development', 'Scoping an Indie Game You Can Finish',
    'How to prototype, schedule and teach a small game around the team’s strongest skills.', [
      section('Prove a small, complete experience',
        'I start with what the team can make repeatedly at a good standard. A short horror visual novel, for example, can deliver tension through framing, sound and a few consequential choices. Every additional branch means writing, implementation and testing, even when the art stays the same.',
        'Build one sequence with an opening, a decision and a consequence. Watch someone play it before producing the rest. Plan the onboarding in this build. If a game needs to pause for an explanation, the pause and resume logic belong in the feature estimate.'),
      section('Count work that sits outside the main loop',
        'Save and load, controller input, audio mixing and a working store build take time. So do screenshots and a concise description that tells players what they will do. I write these into the schedule alongside content and keep stretch ideas in a backlog.',
        'A small audio pass is part of the playable slice. Use placeholder music and distinctive feedback early to test pacing. Review whether silence, room tone or a short cue does the job before committing to a large track list.'),
      exercise('Set the first release checkpoint',
        'Define the shortest version you would ask a stranger to play from start to finish.',
        'Build it with input, sound and the first-use explanation. Ask a tester to record where they stop or get lost.',
        'Price the work to repeat that quality across the planned game. Cut a branch or mode if the schedule leaves too little time for a full playthrough and fixes.')
    ]),

  topic('11', 'breath-of-the-wild-exploration', 'Exploration Design in Breath of the Wild',
    'How sightlines, routes and local discoveries support a journey the player chooses for themselves.', [
      section('Let a trip begin with something visible',
        'I think of an expedition in Breath of the Wild as a short hike. The player spots a destination, checks the terrain, prepares for a hazard and sets out. Weather, stamina or an unexpectedly steep slope can change the plan. Those obstacles are useful when the player can read them and choose a different way forward.',
        'Put a landmark where it can be seen from the route, then test how it disappears and reappears as the player moves. Give it a recognisable silhouette or colour cue so they can pick it up again without opening the map.'),
      section('Use three scales of discovery',
        'A local rock formation or gatherable plant can reward five seconds of attention. A tower or shrine can justify a detour. A rumour about an unusual place can drive a longer trip without giving the exact destination away. Place those three scales so players can switch between them and still remember their original plan.',
        'The arrival needs to repay the trip with a view, a mechanic, a story detail or a useful reward. I also check what the player can see from the destination. A good vantage point can give them a reason to continue in a direction they choose.'),
      exercise('Walk the route with all markers off',
        'Put a distant landmark, a mid-route feature and one small discovery into a blockout.',
        'Watch a player choose a route and mark where they change it. Ask what they were responding to.',
        'If they lose direction, change the view or terrain first. Then replay with a weather or traversal constraint to see whether the route still supports improvisation.')
    ]),

  topic('12', 'horror-game-design', 'Designing Tension in Horror Games',
    'A playable way to build dread, vary its intensity and make the eventual reveal matter.', [
      section('Give the player time to form a theory',
        'A shock releases tension. The scene earns it earlier, while the player is still trying to explain what they heard or saw. I establish an ordinary rule first. A radio comes on when someone enters the room. Later it turns on while the doorway is empty. The change gives the player something specific to investigate or avoid.',
        'Small deviations often do more work than a stream of loud cues. A movement can be almost familiar but stop a beat too late. A voice can answer from the wrong side of a door. Describe what the player can observe and decide how long they will have to think about it.'),
      section('Build the rise and give it somewhere to go',
        'Plan a quiet baseline, a first interruption, a stronger cue and a payoff. Attach the climb to player action, like taking a key that changes the return route. Alternate evidence with stretches in which players can act on their suspicions. Follow the reveal with room to recover or make a new decision.',
        'Match the payoff to what the scene threatens. Risking a supply changes how players move. A familiar room that no longer behaves predictably can make them question how the space works. Either can sustain a scene when the stakes are clear.'),
      exercise('Playtest a two-minute sequence',
        'Ask players afterwards where they first sensed a change, what they thought would happen and when tension dropped.',
        'Run the same scene with one fewer cue. Check whether the quieter version gives the strongest moment more room.',
        'Test the scene on a repeat run. Give the player something to do once the outcome is known.')
    ]),

  topic('13', 'fighting-game-history-part-1', 'Fighting Game History, Part 1',
    'What early arcade fighters can teach us about move roles, combos, momentum and arcade spectacle.', [
      section('Make a move list readable in a match',
        'Early games like Karate Champ put spacing and commitment at the centre of one-on-one play. Street Fighter’s attack strengths give the player a way to trade speed for reach or damage. I look at that arrangement as a menu of risks. A quick button can interrupt a nearby action while a slower one can cover more ground if the player has time.',
        'Special inputs add another layer. Test how often a beginner gets the intended move and how easy it is for an expert to trigger it accidentally. The input window belongs in the same design conversation as the attack’s range and recovery.'),
      section('Separate the competitive effect from the spectacle',
        'Street Fighter II made combos part of the match. A hit can lead into a follow-up if the attacker recognises the opening and executes it in time. Dizzy states make sustained pressure matter, but stacking a long combo and a free opening can leave the defender watching for too long.',
        'Fatal Fury 2 used a powerful move to make a low-health moment more consequential. Mortal Kombat’s fatalities put much of their spectacle after the match was already decided. I would separate these two jobs in a prototype. A comeback move changes the next decision. A finisher can celebrate the result without changing who won.'),
      exercise('Test a short set from both sides',
        'Build a fast poke, a slower attack with greater reach and one special. Identify a range where each is a good choice.',
        'Track how long a defender loses control after one mistake, including any dizzy or follow-up.',
        'Watch a new player replay the same situation. See whether they can explain what they could try next.')
    ]),

  topic('14', 'online-game-economies', 'Player Motivation in Online Game Economies',
    'Map how resources enter, move and leave a game, then check whether rewards translate into progress players can see.', [
      section('Follow one resource from source to sink',
        'I draw where the resource enters play, where it changes hands and where it is spent or removed. Daily tasks and encounters produce materials. Crafting can create new items from those materials. A trade moves stock between players, and only a fee or consumed item removes stock from the overall economy.',
        'In a closed economy, player progression depends on the sources and prices the game sets. Suppose an upgrade needs ten of each of two materials. Earning 27 of one and five of the other leaves the player halfway to the upgrade, even though the inventory grew by 32 items. A market adds substitutes, specialisation and fluctuating prices. Test supply and demand separately. A cheap material can pile up while one scarce ingredient blocks an entire upgrade path.'),
      section('Measure whether rewards solve a player problem',
        'An inventory can grow after every session while the next useful upgrade stays out of reach. Show the full requirement early, then offer a way to earn or exchange for the bottleneck item. I compare time to a useful upgrade across players who trade, play a little each week or prefer one activity.',
        'Random drops can make a reward surprising. Clear odds or a predictable path alongside them give players a way to plan. Show which set pieces they have and what completing the set unlocks. Social rewards such as a title or a shared group goal can serve players who care less about the next stat increase.'),
      exercise('Audit one upgrade across three player paths',
        'List the sources, exchanges and sinks for each ingredient, including fees and failed attempts.',
        'Estimate the range of sessions needed to finish. Check what happens to surplus resources after completion.',
        'Ask players to explain how they would get the missing material. Fix the gap if their only answer is to repeat an activity with no visible progress.')
    ]),

  topic('15', 'fighting-game-history-part-2', 'Fighting Game History, Part 2',
    'How 3D movement, stage boundaries and defensive systems opened new paths to winning a round.', [
      section('Depth can start with a few buttons',
        'Virtua Fighter makes guarding a dedicated action and gives the ring edge its own stakes. A player can be ahead on health and still lose by giving up position. That rule makes a retreat, a lateral move and a risky advance worth comparing. I look for stage geometry that changes a decision players already understand.',
        'Tekken’s limb-based control scheme gives inputs a physical logic. To test a layout like this, give a player two moves to learn and see whether the same mapping helps them recall a third. Then test the controller under pressure, when a tidy input scheme on paper can be harder to use.'),
      section('Give defense an active role',
        'Dead or Alive puts holds, throws and strikes into a counter system. A hold can make repeated strikes risky, while a throw can punish an expected hold. Each answer should have a readable condition and a consequence if the player guesses poorly.',
        'Guilty Gear’s Burst gives the defender a chance to interrupt some long sequences. It matters because it is a timed decision with limited availability. Super Smash Bros. gives players a different defensive problem, where damage makes it harder to stay on the stage and recovery can decide the round.'),
      exercise('Try the same matchup on two stages',
        'Compare a ring with a hard boundary to one where reaching the edge creates a disadvantage the player can recover from.',
        'Note when each fighter chooses to trade damage for position.',
        'Check that players can recover from pressure in more than one way and can tell why an attempted defense failed.')
    ]),

  topic('17', 'shadow-of-the-tomb-raider-level-production', 'Making Levels for Shadow of the Tomb Raider',
    'A level production workflow from the first paper plan to a stable, polished build.', [
      section('Define what each milestone has to prove',
        'I would start with a paper brief that names the player goal, the main beats and the mechanics the level needs. In the shell, prove the layout and scale. At first playable, run from entry to exit, even when art and presentation are still rough.',
        'Once the major gameplay pieces work together, test stability and the whole sequence instead of reviewing each feature in isolation. Then move through presentation polish and hardening. The dates can move when a risk demands it, but each handoff should still have a build people can verify. If a door requires an engine change, prove a fallback transition early and keep the critical path available while the dependency is resolved.'),
      section('Keep the feedback attached to the build',
        'Send a short video with the build identifier, the question you need answered and the exact point in the level. Log decisions and defects where the team can find the latest status. Play a fix in context before closing it. A new gate can solve a navigation issue while breaking the pace into the next room.',
        'Where the engine or a gameplay object has little documentation, make a tiny test map. Record what the object expects from the player, how it resets and what happens on a reload. Keep that example available before several levels adopt the same pattern.'),
      exercise('Review a first playable before dressing it',
        'Check that each beat has a clear objective, action and transition. Capture one plain run with no developer shortcuts.',
        'Identify the biggest design risk, technical dependency and presentation question. Assign each one an owner and a next check.',
        'Run through the same path after the changes. Verify checkpointing, gameplay objects and the intended pace before approving the handoff.')
    ]),

  topic('18', 'level-creation-tips', '10 Tips for Building 3D Levels',
    'Ten checks for readable routes, smooth traversal, camera framing and early lighting in an action-adventure blockout.', [
      exercise('Make the route easy to read',
        'Give the player a direction from the entrance. Test whether they can pick out the onward path without following another player.',
        'Use height to give one space a different view and another a different traversal challenge. Check that the level reads from the usual camera height.',
        'Use walls and corridors to control when the player sees a large space. Try a short, tight approach before an important reveal.',
        'Distinguish walkable surfaces from barriers. Keep silhouettes, slopes and surface cues consistent with the player’s movement rules.',
        'Suggest space beyond the level through a window or fence. Frame the view so a player knows whether it is scenery or a route worth trying.'),
      {...exercise('Test what movement and the camera actually do',
        'Simplify collision on busy edges. Test whether the player can brush past details without snagging or being pushed off the route.',
        'Keep boundary collision smooth and test it with the full movement set. Use climb- and jump-resistant boundaries where the play space has to end.',
        'Tune traversal with the controller. A small bevel, wider landing or gentler transition can keep a familiar action reliable.',
        'Walk through from the normal camera, including while aiming or backing up. Check that turns and low overhead geometry leave the subject in view.',
        'Place rough lighting while the level is flexible. Check that a dark foreground can frame a destination while the path and jump edges remain readable.'), start: 6},
      section('Repeat the same test after the art pass',
        'I record a first run through the blockout, then use the same route once the foreground details and final lighting arrive. If a new piece of art changes the way a player reads or crosses a space, the side-by-side runs help identify the cause.')
    ]),

  topic('19', 'losing-in-pvp', 'Designing for the Losing Side in PvP',
    'How to keep a competitive match engaging when one side falls behind.', [
      section('Find when the match starts to feel decided',
        'I mark the point where a losing player stops forming a plan. It can happen before the scoreboard says the game is over. A team might lose a forward position and still spend several minutes filing through the same defended entrance. That remaining time gives both teams fewer interesting decisions.',
        'Look for the rule or position that seals the result early. If it is an irreversible resource gap, try delaying when the biggest advantage comes online. If it is a trap near spawn, test a second exit or a route that lets the losing team regroup. A comeback should come from an opportunity the player can recognise and act on. In an objective mode, a late side objective could open a new approach without changing the score earned so far.'),
      section('Leave players meaningful work',
        'A different loadout, a side objective or a defensive tool can give a team a plan under pressure. Keep the cost of trying reasonable. A counter on a menu matters only if the team can switch to it while the counter is still useful.',
        'Acknowledge a good save or a contested objective even when the match is lost. Secondary goals can help players understand what they did well. Tie them to actions that still serve the team’s main objective.'),
      exercise('Run a deliberately lopsided match',
        'Replay the moment a team falls behind and count the viable choices it has at that point.',
        'Track downtime, long control-loss sequences and how often a losing player tries something different.',
        'Give the stronger team the same lead after the change. Verify that it still has an advantage and that both sides have decisions to make.')
    ]),

  topic('20', 'creating-a-3d-layout', 'Creating a 3D Level Layout',
    'Build a route from a beat sheet, test scale with the player controller and shape transitions before the art pass.', [
      section('Write what happens in each space',
        'I write an action for each beat, such as finding a warehouse exit, crossing a field or reaching a water tower. Then I sketch how effort rises and falls. A climb can prepare a reveal. A short connector can give the player a break after a fight. Pick one visual feature that ties the route together and can be seen more than once.'),
      section('Build the route with the actual controller',
        'Measure movement speed, jump reach, landing space, doorway clearance and camera distance in a small test room. Build only the floor, barriers and a few landmarks first. Run it at gameplay speed and compare the result with the travel times on the beat sheet. Increase space where encounters need manoeuvring room and shorten empty travel where it adds little.',
        'Use a consistent material for walkable surfaces and a second for barriers. Reserve another cue for interactive objects. Simple materials let testers focus on the layout and help reviewers tell deliberate guidance from placeholder art.'),
      exercise('Shape a transition and test it',
        'Build a tight passage that turns gradually into a larger room. Use the approach to turn the camera toward a visible landmark.',
        'Run it with a player unfamiliar with the layout. Check when they identify the new objective and how long it takes to recover after the previous beat.',
        'Add rough lighting and silhouette changes once the route works. Rerun the sequence to see what the new presentation does to movement and attention.')
    ]),

  topic('23', 'pve-shooter-level-design', 'PvE Shooter Level Design',
    'How to build a readable encounter with opposing fronts, useful cover, alternate routes and staged enemy waves.', [
      section('Lay out two fronts and a way to change the angle',
        'I begin with the position the player can reach first, the likely enemy front and the exposed space between them. Use full cover to break contact and low cover where awareness is important. Put the next useful piece within a move the player can judge. Rotate cover with the expected threats so safety is readable from the approach.',
        'A flank earns its space when it changes the fight. In a solo game the enemies may turn to follow the player, so test what holds their attention and what the alternate route offers. A brief break in sight or a new angle on protected targets can be enough. Movement-focused shooters may need less fixed cover and more room to evade.'),
      section('Let players read a new threat before reacting',
        'Stage enemies where players can see or hear them before taking heavy damage. A side-to-side entry across the visible front makes direction and numbers easier to read. Add a new enemy role in a later wave when players have time to identify it.',
        'Plan the space after a fight as well. A brief crossing or exploration beat gives the player room to reload and reorient before the next major encounter. Alternate where pressure comes from so that the same piece of cover does not solve every wave.'),
      exercise('Run the same encounter from three positions',
        'Start in the expected cover, halfway along the flank and at the arena entrance. Check that enemy entries remain legible.',
        'Try to finish without moving. If all waves are safe from the same spot, give another position a distinct advantage or add pressure the player can read and answer.',
        'Replay the encounter with the intended enemy roles and weapons before committing the cover shapes to final art.')
    ]),

  topic('24', 'it-takes-two-co-op', 'Co-op Gameplay in It Takes Two',
    'How complementary roles and bespoke levels turn a shared obstacle into something both players have to solve.', [
      section('Give each player a job the other can see',
        'The hammer and nail tools in It Takes Two give players different reasons to look at the same obstacle. One prepares the surface or route and the other takes advantage of it. I would test whether both players can describe what their partner is doing, especially when their cameras face different directions.',
        'A shared task works best when each person can see when their part is needed and what it changed. If one player spends the whole encounter waiting, give them a decision about positioning, target or timing that affects how the pair succeeds.'),
      section('Use the level to teach the boss mechanic',
        'Start with an interaction where the pair can try the tools without a deadline. Add movement or timing after they understand what they can do. A boss can then combine both actions in a new order and make the practice pay off. Change the roles and run again to see whether one side has a much harder job.',
        'Mixed-skill pairs are particularly important in co-op. Give them a way to recover after a missed jump or late input. Moving to a new camera angle or control scheme adds learning time, so give players a safe stretch to reacquire their character and try the movement. I would also check how the tone established by the art matches the story the pair will encounter. Playful scenery can appeal to younger players even when the writing deals with heavier subjects.'),
      exercise('Test with a mixed-skill pair',
        'Watch where they talk about the situation and where one person has to explain the interface.',
        'Check how long either player waits after a mistake. Try a nearer restart or a wider coordination window.',
        'Ask each player what their partner did to make the final encounter work. Review any role that is hard to describe.')
    ]),

  topic('27', 'open-world-storytelling', 'Storytelling in Open-World Games',
    'How to connect a main story to optional exploration when players can change the order of events.', [
      section('Track the protagonist’s story and the world’s story',
        'I map the beats the main quest needs and the stories the world can tell through places, objects and characters. A bridge damaged in a storm can teach the player about a region before the main quest sends them there. A side quest can show who depends on the crossing and add a local consequence that survives the larger plot.',
        'Mark what a scene assumes the player knows and what it changes. If the scene can run in either order relative to a nearby quest, write the smallest variation you need for each state. Reserve strict gates for events where the cause or required ability is essential.'),
      section('Match urgency to the way time works',
        'A character who insists on leaving within the hour creates a promise about time. If the player can spend several days elsewhere and return to the same line, the world feels less coherent. Give the deadline a rule the player can read, or phrase the invitation around what happens when the player chooses to arrive.',
        'Plan what remains interesting after the main story. Follow through on a changed settlement or leave enough local stories with their own stakes. A side story can continue to matter once the main threat is gone. When a settlement has several phases, write an explicit rule for each change. Updating a guard’s dialogue while leaving the old barricade in place can send contradictory signals about whether the road has reopened.'),
      exercise('Read a quest chain out of order',
        'Add state cards for arriving early, arriving after a related event and returning after the finale.',
        'Remove a piece of optional information. Check whether the main story still makes sense and whether the optional discovery adds something specific.',
        'Play through a long detour. Review the dialogue, quest log and world cues when returning to the main route.')
    ]),

  topic('28', 'super-mario-odyssey-level-design', 'Level Design in Super Mario Odyssey',
    'How a capture ability changes the way players read and move through a level.', [
      section('Design a movement question around each capture',
        'In Super Mario Odyssey, an enemy can also be a new way to move. A capture can change how high the player reaches, what they can cross or how they move through water. I would put two visible uses for the new move in the same area. One teaches the basic action and the other rewards spotting an opportunity in the scenery.',
        'A kingdom can develop a few movement ideas in depth. Give the player space to try a new move and recover, then ask them to use it under pressure. A boss can extend the same movement skill the route has already taught.'),
      section('Account for the freedom that comes with a new move',
        'A new movement profile changes collision, camera framing and the edges of the playable space. Test the move at the edge of the intended route and at the transition into the next area. Check what happens if the player disengages on an awkward surface or carries momentum into a place they were expected to enter slowly.',
        'The split between the main character and the hat in co-op creates an asymmetric helper role. Check that the second player can see what they have done and can contribute in situations beyond combat.'),
      exercise('Block out a capture teaching area',
        'Place one safe use of the ability near its introduction and a more demanding use in view.',
        'Watch a player try the move before displaying an instruction. Place any reminder where they can act on it immediately.',
        'Try the route with and without the capture. Check deliberate alternate paths, accidental skips and recovery after a missed move.')
    ]),

  topic('29', 'combat-design', 'Combat Design in Games',
    'Build combat around attacks players can read, useful defensive choices and enemies with distinct jobs.', [
      section('Write the decision before the attack',
        'I sketch an enemy action as a cue, a threat and a recovery. A wide swing can ask the player to step back, interrupt early or commit to a dodge that gives them a better position. Compare the value of these responses and the risk of choosing the wrong timing. If one answer wins against every cue, the other options will rarely see play.',
        'Give an attack a distinctive silhouette or sound before it connects. Check whether players can recognise it when effects overlap or when the attacker is at the edge of the camera. Feedback after a hit should also tell the player what happened and when they can act again.'),
      section('Give each tool and enemy a reason to exist',
        'In Streets of Rage, a familiar enemy can gain a behaviour that asks for a new response. Keep its established cues dependable so the player can build on what they know. Introduce the change in a simpler space before combining it with other threats.',
        'A small weapon roster can support different plans. In Quake, a bouncing grenade changes how the player can pressure a corner or a route. I look for that kind of distinction before adding another tool that deals a slightly different amount of damage.'),
      exercise('Build a small encounter around two threats',
        'Teach each enemy’s tell in isolation, then combine their behaviours with a different approach route.',
        'Try one defensive response through the whole encounter and record where it works. Give alternatives a clear advantage in some situations.',
        'Ask the player to explain the last hit they took and one way they could prevent it on the next attempt.')
    ]),

  topic('30', 'metroidvania-map-design', 'Metroidvania Map Design',
    'A room-graph method for mapping unlocks, remembered barriers and return routes.', [
      section('Draw the progression before the geography',
        'I begin with a graph of zones and connections. Label what each connection requires and when players can learn it. There may be several routes through the first area, while a later upgrade opens a connection that joins two zones. The graph lets me check progress before investing in room layouts.',
        'Show an interesting barrier before the player can pass it. A ledge above a recognisable landmark gives them a place to remember once they learn a climbing move. Teach the new ability near an easy loop and give the player a view or shortcut that suggests where to try it next.'),
      section('Make a return trip earn its time',
        'A new move can turn a long ladder route into a quick ascent, reveal a side room or let the player approach an old hazard differently. Check that the return still includes a few navigational decisions and that enough of the original route remains familiar to orient the player.',
        'Decide which shortcuts and alternate orders you want to support. Test them with the abilities the player would actually have, including save and reload. A clever early route belongs in the build only if it still leaves a viable way forward.'),
      exercise('Prototype a three-zone loop',
        'Draw an early hub, an upgrade zone and a return shortcut. Place one optional room beyond a barrier the player sees early.',
        'Run through the graph with no upgrades, then with each upgrade added. Look for loops that trap the player or gates they never encounter.',
        'Wait before asking someone to return to the early barrier. See whether they can remember it without a detailed waypoint.')
    ]),

  topic('31', 'good-puzzle-design', 'Good Puzzle Design',
    'How to tune clues, feedback and recovery so experimentation stays worthwhile.', [
      section('Decide what the player has to work out',
        'Write the problem and tools in two short sentences. I check whether playtesters can restate both before asking them to solve it. If the player is searching for a switch they did not know could move, that is a readability issue. If they know the switch exists and are working out its order, the puzzle is doing its job.',
        'In Sudoku, the given numbers affect which deductions are available. In Sokoban, the same push can help or leave a crate trapped by the walls. Look at which decisions a puzzle asks for and what each experiment teaches. More grid squares or more pushes can add work without adding a new deduction. In an early box-pushing room, a single crate and a corner can teach the cost of pushing too far. Add a second crate when its position changes which move should come first.'),
      section('Give failure a useful shape',
        'Choose whether a dead end becomes visible immediately or is something the player can discover by reasoning. Give them a short route back to the useful part of the puzzle. Undo helps a player compare a new sequence with the last one. A room reset helps when they want to try a new approach from the beginning.',
        'In co-op, give each player access to information or an action the pair needs. Test the puzzle without a timer first. Add time pressure only after both players can read the consequences of their choices.'),
      exercise('Reduce the puzzle to its smallest working version',
        'Prototype a single deduction and give the player room to test a wrong idea.',
        'Add one complication at a time. Note the difference between time spent reasoning and time spent repeating known actions.',
        'Watch a second attempt after a dead end. Check that the feedback and recovery let the player revise their plan.')
    ]),

  topic('34', 'environmental-storytelling', 'Environmental Storytelling',
    'Design spaces that let players infer what happened through objects, composition, sound and traces of change.', [
      section('Write the event before placing the props',
        'I start with a sequence of events. Who used the space? What changed? What would a visitor still be able to see? Imagine a station shut down in a hurry. A half-packed bag suggests someone intended to leave. An abandoned cup beside a ringing phone suggests they left before finishing what they were doing. Put those clues where they could plausibly have been left.',
        'Decide what every player needs to infer and what a curious player can investigate. A barricaded entrance might explain why the route is blocked. Scrapes on the floor and a spare key inside the ticket booth can explain how the barricade went up. The details reward a closer look without making exploration compulsory.'),
      section('Stage the first clue from the player’s view',
        'Treat lighting, sound and objects as parts of the same scene. In BioShock, the banner and statue at the entrance to Rapture give the city an ideology before the player knows much about it. The signs make more sense because they are staged together. Check what a player can see at the actual camera height and walking speed.',
        'Sound can tell the player that a room is still occupied before they turn a corner. Place the cue so it helps them form a theory. A conversation heard through a wall carries different information from a siren that can be heard throughout the district.'),
      exercise('Test a room without the dialogue',
        'Write down the event and the three details that point to it.',
        'Walk players through the space without explaining its history. Ask what happened and which detail led them to that reading.',
        'Move or strengthen the clue that explains a required action. Leave optional details for players who choose to look around.')
    ]),

  topic('35', 'immersive-sim-design', 'Designing Immersive Sims',
    'Build situations that support several solutions through consistent rules and tools players can combine.', [
      section('Give the player a goal and a space to read',
        'I start with a concrete objective, such as retrieving a log from a locked office. The hall contains a guard, a window onto a maintenance ledge and a power panel. A player can talk their way in, take the ledge or open a powered door from the panel. Each approach uses something the player can notice and reason about.',
        'The important part is what carries over to another room. If cutting power opens a class of doors in one corridor, the same kind of door elsewhere should follow the same rule. Use a visibly different mechanism when a door behaves differently. In a systemic game, a familiar prop is part of what the player has learned.'),
      section('Plan for rules to interact',
        'The player may cut the power to move in darkness, then discover that this also stops the lift. That consequence can create a new decision if the lift and the door remain readable. I sketch a small table of what each action affects, including alarms, access routes and NPC responses. It helps find combinations that produce interesting choices and ones that leave no viable route.',
        'Check encounters at the end of a mission as well. A forced fight can penalise a player who spent the rest of the level building for stealth. Test whether the same tools used on the way in still have a meaningful role at the climax.'),
      exercise('Prototype one room with three approaches',
        'Teach each rule in a small interaction. Give different solutions real differences in cost, risk or information.',
        'Watch someone discover a route you did not describe. Ask how they predicted it would work.',
        'Try the room after spending each limited tool and changing routes halfway through. Check that the player can understand and recover from a bad choice.')
    ]),

  topic('36', 'minimalism-in-design', 'Minimalism in Game Design',
    'Use fewer competing cues to make the information players need stand out at the right moment.', [
      section('Decide what the player needs for the next move',
        'I write the decision first. If the player needs to know which rooftop they can reach, colour and shape can make a landing readable at a glance. In Mirror’s Edge, red objects stand out against pale buildings and help connect a route while the player is moving. Reserve a distinctive colour for cues that carry a consistent meaning.',
        'In Super Hexagon, the walls and gaps dominate the view because they are the information the player needs under time pressure. In a slower game, a silhouette or a distant light can do similar work. The right amount of information depends on how much time the player has to interpret it.'),
      section('Check what each cue contributes',
        'A health indicator earns its place when it helps decide whether to stay in danger. A flashing objective marker can compete with the same decision if the destination is already visible. I remove one cue at a time and replay the scene. If people lose an important distinction, restore it or give that information a better place.',
        'Try meaning through motion and shape as well as colour. A handle that rattles when it can be pulled provides information without a new icon. Pair a signal with a second readable cue when missing it would block progress.'),
      exercise('Run a subtraction pass',
        'List the cues on screen and the decision each one supports.',
        'Hide the weakest cue, then watch a first-time player make the same decision at normal speed.',
        'Test the revised scene in greyscale and at small display sizes. Restore any distinction players can no longer read.')
    ]),

  topic('37', 'teaching-through-play', 'Teaching Through Play',
    'Introduce mechanics through safe attempts, reinforce them in new contexts, and make hints easy to use.', [
      section('Teach the first decision the player actually needs',
        'I start with a question the level can ask through play. In Portal, a button and a nearby door make it possible to see whether standing on the button changes the exit. The player can test the relationship in a small space before they have to solve a longer puzzle.',
        'A useful first exercise has a visible target, a safe way to try and an immediate response. Use a short prompt when the input itself is hard to discover. Place it where the player can act on it, and let them try again without replaying the setup.'),
      section('Build complexity one decision at a time',
        'After the player uses a rule once, change the situation while keeping the rule intact. Let a player jump a narrow gap, make the next landing less direct, and later ask them to choose between two landings. A sequence that only repeats the first jump can measure familiarity without showing whether the player can apply it.',
        'Watch first-time players with different levels of experience. A missed prompt may be an issue with timing or focus. If they understood the instruction but cannot execute it, adjust the practice space or the recovery window. Those are different problems and need different fixes.'),
      exercise('Check whether the lesson transferred',
        'Teach the action in a safe spot and make one retry quick.',
        'Ask the player to use it in a different room without the original prompt.',
        'Record what they try before helping. Add a reminder if they forgot the action, or change the scene if it hides the reason to use it.')
    ]),

  topic('38', 'controlled-repetition', 'Controlled Repetition in Games',
    'Keep repeat visits and retries engaging by changing the decisions players bring back to a familiar situation.', [
      section('Find what changes on the next attempt',
        'I write down what the player carries forward. It might be route knowledge, a new tool, improved timing or an alternate objective. A repeat visit in Hitman can let the player act on a routine they noticed the first time. The layout stays familiar, but that knowledge gives them a different plan.',
        'A familiar challenge can also reward mastery. A short retry after a failed jump lets the player apply what they just learned. If they must repeat a long stretch they already understand, move the restart closer or give the approach a decision worth making again.'),
      section('Use variety that affects play',
        'A time loop can make the same room useful at several points. A character arrives later, a door opens briefly or an earlier discovery gives the player a new reason to visit. Show when something has changed so the player can revise their route deliberately.',
        'Track when a reward is covering for an uneventful repeat. A new loadout or optional challenge can change the way the player approaches an encounter. Extra currency may make it worth doing, but it cannot create a fresh decision on its own.'),
      exercise('Play the same sequence three times',
        'On the first run, record what the player learns. On the second, note whether that knowledge changes their plan.',
        'Add one new condition on the third run. Check whether the player can anticipate and respond to it.',
        'Time the stretches with no new decisions. Shorten required repeats and keep optional returns where players have a reason to choose them.')
    ]),
];
