export const matsunoMechanics = {
  slug: 'matsuno-gameplay-mechanics',
  title: 'Gameplay Mechanics — The Matsuno Method',
  summary: 'Four playable experiments in turn timing, spell targeting, attack chains, and party AI.',
  cover: 'assets/design/matsuno-method/diagram-2.webp',
  body: `<div class="matsuno-study matsuno-mechanics">
    <p>These experiments use simplified rules inspired by the games. Change one variable at a time and see which decision becomes more valuable.</p>
    <details class="matsuno-contents" open>
      <summary>Jump to an experiment</summary>
      <ol>
        <li><button type="button" data-matsuno-jump="recovery">Armor and turn order</button></li>
        <li><button type="button" data-matsuno-jump="spell-targeting">Charged spells</button></li>
        <li><button type="button" data-matsuno-jump="attack-risk">Attack chains and RISK</button></li>
        <li><button type="button" data-matsuno-jump="gambit-order">Gambit priorities</button></li>
      </ol>
    </details>
    <section aria-labelledby="recovery">
      <h2 id="recovery" tabindex="-1">Armor and turn order</h2>
      <p><em>Tactics Ogre</em> makes recovery time part of an equipment decision. Try heavy armor, then change Wait to Attack. How many turns do you give up for the protection?</p>
      <div data-mechanic-slot="recovery"></div>
      <p><a class="design-reference" href="https://www.square-enix-games.com/pt_BR/news/tactics-ogre-reborn-preview">Tactics Ogre: Reborn on recovery time</a></p>
    </section>
    <section aria-labelledby="spell-targeting">
      <h2 id="spell-targeting" tabindex="-1">Charged spells</h2>
      <p>In <em>Final Fantasy Tactics</em>, units can move before a spell resolves. Run the same paths twice. Aim at the ground on the first run and follow the enemy on the second. See who gets caught in the blast.</p>
      <div data-mechanic-slot="spell"></div>
      <p><a class="design-reference" href="https://manuals.plus/squaresoft/final-fantasy-tactics-game-manual">Final Fantasy Tactics instruction manual</a></p>
    </section>
    <section aria-labelledby="attack-risk">
      <h2 id="attack-risk" tabindex="-1">Attack chains and RISK</h2>
      <p><em>Vagrant Story</em> lets you extend an attack chain at the cost of accuracy. Set a minimum hit chance you’d accept, then find the longest chain that stays above it.</p>
      <div data-matsuno-model="risk"></div>
      <p><a class="design-reference" href="https://www.gamesdatabase.org/Media/SYSTEM/Sony_Playstation/Manual/formated/Vagrant_Story_-_2000_-_Square_Co.%2C_Ltd..pdf">Vagrant Story instruction manual</a></p>
    </section>
    <section aria-labelledby="gambit-order">
      <h2 id="gambit-order" tabindex="-1">Gambit priorities</h2>
      <p>In <em>Final Fantasy XII</em>, higher-priority rules run first. Leave the enemy on screen and the ally below the healing threshold. Swap the two rules and watch which action wins.</p>
      <div data-matsuno-model="priority"></div>
      <p><a class="design-reference" href="https://blog.playstation.com/2017/07/07/extended-play-how-final-fantasy-xiis-gambit-created-one-of-the-most-distinct-rpgs-ever/">Final Fantasy XII developers on Gambits</a></p>
    </section>
  </div>`
};
