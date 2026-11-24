const number = new Intl.NumberFormat('en', {maximumFractionDigits: 1});
const show = value => number.format(value);
const percent = value => show(value * 100) + '%';
const health = 1000;
const attacks = [{hit: 100, frequency: 0.5}, {hit: 10, frequency: 5}];
const defenses = [
  {label: 'Flat reduction', remaining: (armor, hit) => Math.max(0, hit - armor)},
  {label: '1% per armor', remaining: (armor, hit) => hit * Math.max(0, 100 - armor) / 100},
  {label: 'Armor curve', remaining: (armor, hit, k) => hit * k / (armor + k)}
];

function attackRows(armor, k) {
  return defenses.map(({label, remaining}) => `<tr><th scope="row">${label}</th>${attacks.map(({hit, frequency}) => {
    const damage = remaining(armor, hit, k);
    return `<td><strong>${show(damage)} per hit</strong><small>${show(damage * frequency)} DPS</small></td>`;
  }).join('')}</tr>`).join('');
}

function milestoneRows(k) {
  return [0, k, k * 2].map(armor => `<tr>
    <th scope="row">${show(armor)}</th>
    <td>${percent(armor / (armor + k))}</td>
    <td>${show(health * (1 + armor / k))}</td>
    <td>${Math.ceil(health * (armor + k) / (attacks[0].hit * k))}</td>
  </tr>`).join('');
}

export function armorSurvivalDemo() {
  return `<section class="article-simulation armor-demo armor-survival-demo" data-armor-survival aria-labelledby="armor-survival-title">
    <h2 id="armor-survival-title">Simulate armor and survivability</h2>
    <p>Both attackers deal 50 damage per second before armor. Change the armor value to see which attacks each rule protects against.</p>
    <form>
      <label class="armor-slider" for="survival-armor">
        <span>Armor <output aria-hidden="true" data-survival-value="armor">10</output></span>
        <input id="survival-armor" name="armor" type="range" min="0" max="400" value="10">
      </label>
      <label class="armor-slider" for="survival-k">
        <span>Curve constant K <output aria-hidden="true" data-survival-value="k">100</output></span>
        <input id="survival-k" name="k" type="range" min="10" max="200" value="100">
      </label>
      <table class="loot-odds survival-odds">
        <caption>Incoming damage after armor</caption>
        <thead><tr><th scope="col">Armor rule</th><th scope="col">Slow attack<small>100 every 2s</small></th><th scope="col">Fast attack<small>10 × 5 per second</small></th></tr></thead>
        <tbody data-survival-attacks>${attackRows(10, 100)}</tbody>
      </table>
      <dl class="armor-metrics">
        <div><dt>Curve mitigation</dt><dd data-survival-mitigation>9.1%</dd></div>
        <div><dt>Effective health on the curve</dt><dd data-survival-health>1,100</dd></div>
      </dl>
      <table class="loot-odds survival-odds">
        <caption>Curve milestones · 1,000 base health · 100 raw damage per hit</caption>
        <thead><tr><th scope="col">Armor</th><th scope="col">Mitigation</th><th scope="col">Effective health</th><th scope="col">Hits to defeat</th></tr></thead>
        <tbody data-survival-milestones>${milestoneRows(100)}</tbody>
      </table>
      <p class="armor-model">Each additional K armor adds another 1,000 effective health. This model uses unrounded damage, with no healing or minimum damage floor.</p>
      <p class="sr-only" role="status" data-survival-status></p>
      <button class="button" type="reset">Reset example</button>
    </form>
  </section>`;
}

export function initArmorSurvivalDemo(container) {
  const demo = container.querySelector('[data-armor-survival]');
  if (!demo) return;
  const form = demo.querySelector('form');
  const armor = form.elements.namedItem('armor');
  const k = form.elements.namedItem('k');
  const controls = [armor, k];
  const values = controls.map(input => demo.querySelector(`[data-survival-value="${input.name}"]`));
  const attackTable = demo.querySelector('[data-survival-attacks]');
  const milestones = demo.querySelector('[data-survival-milestones]');
  const mitigation = demo.querySelector('[data-survival-mitigation]');
  const effectiveHealth = demo.querySelector('[data-survival-health]');
  const status = demo.querySelector('[data-survival-status]');

  function update() {
    const [points, constant] = controls.map(input => input.valueAsNumber);
    values[0].textContent = show(points);
    values[1].textContent = show(constant);
    attackTable.innerHTML = attackRows(points, constant);
    milestones.innerHTML = milestoneRows(constant);
    mitigation.textContent = percent(points / (points + constant));
    effectiveHealth.textContent = show(health * (1 + points / constant));
    status.textContent = `${mitigation.textContent} curve mitigation. ${effectiveHealth.textContent} effective health.`;
  }

  form.addEventListener('input', update);
  form.addEventListener('reset', event => {
    event.preventDefault();
    for (const input of controls) input.value = input.defaultValue;
    update();
  });
}
