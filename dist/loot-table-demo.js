const tiers = [
  {id: 'legendary', name: 'Legendary', chance: 0.02, items: [['Thunderfury', 1]]},
  {id: 'epic', name: 'Epic', chance: 0.10, items: [['Fallen King’s Blade', 2]]},
  {id: 'uncommon', name: 'Uncommon', chance: 0.40, items: [['Falchion', 6], ['Rapier', 4]]},
  {id: 'common', name: 'Common', chance: 1, items: [['Long Sword', 6], ['Short Sword', 6]]}
];
const addedSwords = [['Saber', 6], ['Cutlass', 6], ['Scimitar', 6]];
const patches = {baseline: 0, update: 3, hotfix: 2};
const percent = value => (value * 100).toFixed(2) + '%';
const totalWeight = items => items.reduce((sum, [, weight]) => sum + weight, 0);

function model(patch) {
  let chanceLeft = 1;
  const pools = tiers.map(tier => {
    const items = tier.id === 'common' ? [...tier.items, ...addedSwords.slice(0, patches[patch])] : tier.items;
    const cascadeOdds = chanceLeft * tier.chance;
    chanceLeft -= cascadeOdds;
    return {...tier, items, weight: totalWeight(items), cascadeOdds};
  });
  const weight = pools.reduce((sum, tier) => sum + tier.weight, 0);
  const flatItems = [...pools].reverse().flatMap(tier => tier.items.map(([item, weight]) => ({id: tier.id, item, weight})));
  return {weight, flatItems, pools: pools.map(tier => ({...tier, flatOdds: tier.weight / weight}))};
}

function takeWeighted(entries, roll, weightOf) {
  for (const entry of entries) {
    roll -= weightOf(entry);
    if (roll < 0) return entry;
  }
}

function sampleDrop(loot, system) {
  if (system === 'flat') {
    const ticket = Math.floor(Math.random() * loot.weight);
    const {id, item} = takeWeighted(loot.flatItems, ticket, entry => entry.weight);
    return {id, item, detail: `Ticket ${ticket + 1} of ${loot.weight}`};
  }
  const tier = loot.pools.find(pool => Math.random() < pool.chance);
  const item = takeWeighted(tier.items, Math.floor(Math.random() * tier.weight), entry => entry[1]);
  return {id: tier.id, item: item[0], detail: `${tier.name} pool · ${tier.items.length} eligible items`};
}

function blankCounts() {
  return {flat: [0, 0, 0, 0], cascade: [0, 0, 0, 0]};
}

function tableRows(loot, counts) {
  return loot.pools.map(({id, name, flatOdds, cascadeOdds}, index) => `<tr>
    <th scope="row"><span class="loot-rarity loot-${id}">${name}</span></th>
    <td>${percent(flatOdds)} <small>${counts.flat[index].toLocaleString()} drops</small></td>
    <td>${percent(cascadeOdds)} <small>${counts.cascade[index].toLocaleString()} drops</small></td>
  </tr>`).join('');
}

function weightRows(items) {
  let end = 0;
  return items.map(({item, weight}) => {
    const start = end + 1;
    end += weight;
    return `<tr><th scope="row">${item}</th><td>${weight}</td><td>${start === end ? end : `${start}–${end}`}</td></tr>`;
  }).join('');
}

export function lootTableDemo() {
  return `<section class="loot-demo" data-loot-demo aria-labelledby="loot-demo-title">
    <h2 id="loot-demo-title">Simulate a loot patch</h2>
    <p>Choose a patch and roll both systems. The weighted table rolls across all items. The cascade checks for legendary loot first at 2%, then checks lower rarities if it misses.</p>
    <label class="loot-patch">Content patch
      <select data-loot-patch>
        <option value="baseline">Baseline · original items</option>
        <option value="update">Update · add three common swords</option>
        <option value="hotfix">Hotfix · disable Scimitar</option>
      </select>
    </label>
    <p class="loot-pool" data-loot-pool></p>
    <table class="loot-odds">
      <caption>Chance per drop and simulated counts</caption>
      <thead><tr><th scope="col">Rarity</th><th scope="col">Weighted table</th><th scope="col">Rarity cascade</th></tr></thead>
      <tbody data-loot-odds>${tableRows(model('baseline'), blankCounts())}</tbody>
    </table>
    <details class="loot-weights">
      <summary>Inspect item weights and cascade checks</summary>
      <p>The cascade checks 2% for a legendary, then 10% for an epic on a miss, then 40% for an uncommon on another miss. Common is the fallback.</p>
      <table class="loot-odds">
        <caption>Ticket ranges in the weighted table</caption>
        <thead><tr><th scope="col">Item</th><th scope="col">Weight</th><th scope="col">Tickets</th></tr></thead>
        <tbody data-loot-weights>${weightRows(model('baseline').flatItems)}</tbody>
      </table>
    </details>
    <div class="loot-controls">
      <button class="button primary" type="button" data-loot-roll="1">Roll once</button>
      <button class="button" type="button" data-loot-roll="1000">Roll 1,000</button>
      <button class="button" type="button" data-loot-reset>Reset rolls</button>
    </div>
    <p data-loot-result role="status" aria-atomic="true">No rolls yet.</p>
  </section>`;
}

export function initLootTableDemo(container) {
  const demo = container.querySelector('[data-loot-demo]');
  if (!demo) return;
  const patch = demo.querySelector('[data-loot-patch]');
  const pool = demo.querySelector('[data-loot-pool]');
  const odds = demo.querySelector('[data-loot-odds]');
  const weights = demo.querySelector('[data-loot-weights]');
  const result = demo.querySelector('[data-loot-result]');
  let loot = model(patch.value);
  let counts = blankCounts();
  let total = 0;

  function showPool() {
    const common = loot.pools.find(tier => tier.id === 'common');
    pool.textContent = `Common pool · ${common.items.map(([item]) => item).join(', ')}. Weighted table · ${loot.weight} tickets.`;
  }

  function reset(message) {
    counts = blankCounts();
    total = 0;
    odds.innerHTML = tableRows(loot, counts);
    result.textContent = message;
  }

  patch.addEventListener('change', () => {
    loot = model(patch.value);
    showPool();
    weights.innerHTML = weightRows(loot.flatItems);
    reset(`Patch applied. Legendary chance is ${percent(loot.pools[0].flatOdds)} in the weighted table and ${percent(loot.pools[0].cascadeOdds)} in the cascade. Roll counts reset.`);
  });
  demo.querySelector('[data-loot-reset]').addEventListener('click', () => reset('Roll counts reset.'));
  for (const button of demo.querySelectorAll('[data-loot-roll]')) {
    button.addEventListener('click', () => {
      const quantity = Number(button.dataset.lootRoll);
      const latest = {};
      for (const system of ['flat', 'cascade']) {
        for (let i = 0; i < quantity; i++) {
          const drop = sampleDrop(loot, system);
          counts[system][tiers.findIndex(tier => tier.id === drop.id)]++;
          latest[system] = drop;
        }
      }
      total += quantity;
      odds.innerHTML = tableRows(loot, counts);
      result.textContent = quantity === 1
        ? `Weighted table: ${latest.flat.item} (${latest.flat.detail}). Cascade: ${latest.cascade.item} (${latest.cascade.detail}). Total rolls per system: ${total.toLocaleString()}.`
        : `After ${total.toLocaleString()} rolls per system, the weighted table dropped ${counts.flat[0].toLocaleString()} legendary items and the cascade dropped ${counts.cascade[0].toLocaleString()}.`;
    });
  }
  showPool();
}
