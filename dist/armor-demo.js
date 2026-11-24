const gearGroups = [
  {id: 'heavy', title: 'Helm, chest and legs', slots: 3, armor: 4},
  {id: 'medium', title: 'Shoulders, gloves, belt and boots', slots: 4, armor: 3},
  {id: 'light', title: 'Wrists and back', slots: 2, armor: 2}
];
const format = new Intl.NumberFormat('en', {maximumFractionDigits: 1});
const pct = value => format.format(value * 100) + '%';
const slider = (id, label, min, max, value, unit = '') => `<label class="armor-slider" for="armor-${id}">
  <span>${label} <output data-armor-value="${id}" aria-hidden="true">${value}${unit}</output></span>
  <input type="range" id="armor-${id}" name="${id}" min="${min}" max="${max}" value="${value}">
</label>`;

export function armorDemo() {
  return `<section class="armor-demo" data-armor-demo aria-labelledby="armor-demo-title">
    <h2 id="armor-demo-title">Tune an armor curve</h2>
    <p>Choose a mitigation target for evenly matched levels. Set how much armor each gear slot adds per level, then test that gear against a different attacker.</p>
    <form>
      ${slider('target', 'Target mitigation', 5, 80, 25, '%')}
      <fieldset class="armor-gear">
        <legend>Armor gain per slot per level</legend>
        ${gearGroups.map(group => slider(group.id, group.title, 0, 12, group.armor)).join('')}
      </fieldset>
      <dl class="armor-metrics">
        <div><dt>Total armor gain per level</dt><dd data-armor-stat="budget">28</dd></div>
        <div><dt>K per attacker level</dt><dd data-armor-stat="kRate">84</dd></div>
      </dl>
      <div class="armor-levels">
        ${slider('gear', 'Gear level', 1, 60, 20)}
        ${slider('attacker', 'Attacker level', 1, 60, 20)}
      </div>
      <dl class="armor-metrics">
        <div><dt>Armor</dt><dd data-armor-stat="total">560</dd></div>
        <div><dt>Attacker’s K</dt><dd data-armor-stat="k">1,680</dd></div>
        <div><dt>Damage mitigated</dt><dd data-armor-stat="mitigation">25%</dd></div>
        <div><dt>Damage taken per 100 hit</dt><dd data-armor-stat="damage">75</dd></div>
      </dl>
      <h3>Same gear against different foes</h3>
      <div class="armor-matchups" data-armor-matchups></div>
      <p class="armor-model">K scales with the attacker’s level in this example. Changing the gear budget recalculates K to preserve the target when both levels match. Mitigation = Armor ÷ (Armor + K).</p>
      <p class="sr-only" role="status" data-armor-stat="status"></p>
      <button class="button" type="reset">Reset example</button>
    </form>
  </section>`;
}

export function initArmorDemo(container) {
  const demo = container.querySelector('[data-armor-demo]');
  if (!demo) return;
  const form = demo.querySelector('form');
  const controls = [...form.querySelectorAll('input')];
  const matchups = demo.querySelector('[data-armor-matchups]');
  const readouts = Object.fromEntries([...demo.querySelectorAll('[data-armor-stat]')].map(el => [el.dataset.armorStat, el]));
  const labels = Object.fromEntries([...demo.querySelectorAll('[data-armor-value]')].map(el => [el.dataset.armorValue, el]));

  function update() {
    const values = Object.fromEntries(controls.map(input => [input.name, input.valueAsNumber]));
    for (const [name, value] of Object.entries(values)) labels[name].textContent = value + (name === 'target' ? '%' : '');
    const budget = gearGroups.reduce((sum, {id, slots}) => sum + slots * values[id], 0);
    const target = values.target / 100;
    const kRate = budget * (1 - target) / target;
    const armor = budget * values.gear;
    const k = kRate * values.attacker;
    const mitigationAt = level => armor > 0 ? armor / (armor + kRate * level) : 0;
    const mitigation = mitigationAt(values.attacker);
    readouts.budget.textContent = format.format(budget);
    readouts.kRate.textContent = budget > 0 ? format.format(kRate) : '—';
    readouts.total.textContent = format.format(armor);
    readouts.k.textContent = budget > 0 ? format.format(k) : '—';
    readouts.mitigation.textContent = pct(mitigation);
    readouts.damage.textContent = format.format(100 * (1 - mitigation));
    readouts.status.textContent = budget
      ? `${pct(mitigation)} mitigation. ${readouts.damage.textContent} damage taken per 100 hit.`
      : 'Set armor gain above zero to tune K. With no armor, mitigation is zero.';
    const examples = [
      [values.gear - 5, 'Lower-level foe'],
      [values.gear, 'Same-level foe'],
      [values.gear + 5, 'Higher-level foe']
    ].filter(([level]) => level >= 1 && level <= 60);
    matchups.innerHTML = examples.map(([level, name]) => {
      const result = mitigationAt(level);
      return `<div><span>${name} · Lv ${level}</span><meter min="0" max="1" value="${result}" aria-hidden="true"></meter><strong>${pct(result)}</strong></div>`;
    }).join('');
  }

  form.addEventListener('input', update);
  form.addEventListener('reset', event => {
    event.preventDefault();
    for (const input of controls) input.value = input.defaultValue;
    update();
  });
  update();
}
