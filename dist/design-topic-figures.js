const figuresByTopic = {
  '02': [
    ['island-routines', 'Villagers gathering in a decorated room', 'A calendar event gives a familiar room a new use.'],
    ['island-customisation', 'A decorated house and garden on an island plot', 'Customisation makes progress visible in the spaces players use every day.']
  ],
  '06': [
    ['notebook-clue', 'A grid of symbols in an in-game notebook', 'A notebook clue can let players cross-check what they see in the room.'],
    ['environmental-puzzle', 'A character standing below a suspended structure', 'An environmental puzzle can communicate an interaction through its moving parts.']
  ],
  '07': [
    ['generated-rooms', 'A grid of connected rooms highlighted in red', 'A connectivity view makes the generated route easier to validate.'],
    ['dungeon-room', 'A single room in a tile-based dungeon', 'An authored room can supply a specific challenge within a generated layout.']
  ],
  '09': [
    ['impact-feedback', 'Slide showing a shooter enemy reacting to a hit', 'A distinct hit effect helps players read the enemy reaction and aim their next shot.']
  ],
  '10': [
    ['visual-novel', 'A high-contrast black-and-white visual novel scene', 'A focused visual style lets a small horror game establish its tone in a single scene.']
  ],
  '11': [
    ['route-planning', 'A route planning slide shows the map, a view of distant peaks and the scope used to spot a landmark', 'A vantage point lets players judge the route and choose a destination.'],
    ['shrine-landmark', 'A glowing shrine silhouetted against a dark landscape', 'The shape and colour help the shrine stand out from its surroundings.']
  ],
  '12': [
    ['familiar-place', 'A dark cat in a familiar tiled interior', 'An ordinary setting gives players a baseline for noticing when something changes.'],
    ['tension-build', 'A slide lays out cues for building and releasing tension', 'Subtle cues and limited visibility give the player time to anticipate the reveal.']
  ],
  '13': [
    ['arcade-spacing', 'Two arcade fighters separated by an open stretch of ground', 'The gap between fighters determines which attacks can reach.'],
    ['combo-pressure', 'Two fighters at close range with a visible impact effect', 'A close-range hit can open a follow-up. Check how soon the defender can act again.']
  ],
  '14': [
    ['economy-flow', 'A flowchart with linked stages and a decision branch', 'Map how rewards enter circulation, get exchanged and leave through a sink.']
  ],
  '15': [
    ['ring-out', 'A fighting game round ending at the ring boundary', 'A ring out makes the edge of the stage matter even when a player has health left.'],
    ['defensive-options', 'Three linked arrows connecting strikes, throws and holds', 'The three options keep a single response from covering every threat.']
  ],
  '17': [
    ['greybox', 'Greybox room with grid materials and a player character for scale', 'The greybox lets the team verify dimensions, movement and sightlines.'],
    ['polish', 'A dressed level with lighting and environmental detail', 'The presentation pass shows how lighting and art affect the playable route.'],
    ['production-phases', 'Six level production phases from preparation to hardening', 'This milestone plan pairs each phase with a concrete deliverable the team can review.']
  ],
  '18': [
    ['path-clarity', 'Slide comparing two paths through overgrown stone ruins', 'Compare how quickly each route reads against the surrounding surfaces.'],
    ['camera-framing', 'Slide comparing tight and open camera views of a route', 'Review the route from the player’s camera and leave room for it to follow movement.']
  ],
  '19': [
    ['match-recognition', 'An in-game screen displaying a set of match awards', 'Match awards sit alongside the result. Objective-based modes can also recognise actions such as saves and successful defenses.']
  ],
  '20': [
    ['blockout-beats', 'A sequence connects a warehouse exit, an open field and a water tower', 'Sketch one action per space. Use the first playable to test how the spaces connect.'],
    ['layout-transitions', 'Slide on using sightlines to guide the player into the next area', 'A gradual turn helps the camera reveal the next objective as the player enters.']
  ],
  '23': [
    ['cover-fronts', 'A greybox arena with two lines of low cover', 'A readable front helps players judge the first crossing and work out where to stop.'],
    ['flank-options', 'A greybox arena with a building that creates alternate lines of sight', 'Breaking the sightline gives an alternate route a reason to exist.']
  ],
  '24': [
    ['shared-stage', 'Split-screen views of two co-op players facing the same obstacle', 'Test whether both views give players enough information to coordinate.']
  ],
  '27': [
    ['quest-states', 'Three cards show the same bridge before, during and after a repair quest', 'A single landmark can communicate different information as the world state changes.']
  ],
  '28': [
    ['capture-traversal', 'A player navigating elevated terrain in Super Mario Odyssey', 'Varying the movement options changes which parts of the scenery become useful.']
  ],
  '29': [
    ['attack-timing', 'Three stages of an enemy attack showing the tell, swing and recovery', 'Each stage should be readable while the player is moving or tracking another threat.']
  ],
  '30': [
    ['route-graph', 'A room graph connects a hub, a movement upgrade and a return shortcut', 'The player sees a ledge early and returns with a new way to reach it.']
  ],
  '31': [
    ['sudoku-example', 'A Sudoku grid with several starting numbers and empty cells', 'The visible starting numbers determine which deductions the player can make first.']
  ],
  '34': [
    ['rapture-entrance', 'Two BioShock scenes show a New Year sign and a statue framed by a banner', 'The signage and staging tell players when events took place and what Rapture wanted people to believe.']
  ],
  '35': [
    ['systemic-interaction', 'An immersive sim example shows a keypad beside a glazed door with a figure behind it', 'Readable objects give players information before they decide how to proceed.']
  ],
  '36': [
    ['mirrors-edge-cues', 'Red surfaces mark a route across pale rooftops in Mirror’s Edge', 'A consistent accent colour helps the route stand out at speed.']
  ],
  '37': [
    ['portal-tutorial', 'Portal scenes show a button beside a door and a short input prompt', 'The space can demonstrate a rule, while a prompt can explain an input when needed.']
  ],
  '38': [
    ['time-loop-examples', 'Three time-loop games show a club, a small apartment and a courtyard', 'A familiar location can support a new plan when another pass reveals what changes over time.']
  ],
};

export function topicFigures(number) {
  return figuresByTopic[number].map(([name, alt, caption]) => ({
    src: `assets/design/topics/${number}-${name}.jpg`,
    alt,
    caption,
  }));
}
