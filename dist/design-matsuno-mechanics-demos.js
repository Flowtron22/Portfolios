const turns = `<div class="matsuno-gambit matsuno-method-demo mechanic-panel" data-mechanic="recovery">
  <div class="method-selects">
    <label>Vanguard armor
      <select data-armor-load>
        <option value="light">Light</option><option value="medium">Medium</option><option value="heavy">Heavy</option>
      </select>
    </label>
    <label>Vanguard action
      <select data-turn-action><option value="wait">Wait</option><option value="attack">Attack</option></select>
    </label>
  </div>
  <div class="recovery-timeline" aria-label="Turn timeline from tick 0 to 240">
    <div class="recovery-scale" aria-hidden="true"><span>0</span><span>60</span><span>120</span><span>180</span><span>240</span></div>
    <div class="recovery-lane"><strong>Vanguard</strong><div class="recovery-track" data-turn-lane="vanguard"></div></div>
    <div class="recovery-lane"><strong>Rival</strong><div class="recovery-track" data-turn-lane="rival"></div></div>
  </div>
  <div class="mechanic-readouts">
    <div class="method-result"><span>Vanguard turns / 240 ticks</span><strong data-turn-count></strong></div>
    <div class="method-result"><span>Damage taken from a 40-point hit</span><strong data-turn-damage></strong></div>
  </div>
  <div class="loot-controls"><button type="button" class="button primary" data-advance-turn>Advance turn</button><button type="button" class="button" data-reset-timeline>Reset clock</button></div>
  <p class="mechanic-status" data-turn-status role="status"></p>
</div>`;

const size = 5;
const cells = Array.from({length: size * 4}, (_, i) => i);
const coordinate = cell => 'ABCDE'[cell % size] + (Math.floor(cell / size) + 1);
const origin = {enemy: 7, ally: 16};
const spell = `<div class="matsuno-gambit matsuno-method-demo mechanic-panel" data-mechanic="spell">
  <div class="method-selects">
    <label>Spell target
      <select data-spell-target><option value="ground">Ground at C2</option><option value="enemy">Follow the enemy</option></select>
    </label>
    <label>Charge time
      <select data-spell-charge><option value="1">1 tick</option><option value="2" selected>2 ticks</option><option value="3">3 ticks</option><option value="4">4 ticks</option></select>
    </label>
    <label>Plan a destination
      <select data-spell-unit><option value="enemy">Enemy</option><option value="ally">Ally</option></select>
    </label>
  </div>
  <p class="mechanic-instruction">Choose a unit and tap a tile to plan its movement. Then advance the charge one tick at a time.</p>
  <div class="spell-board" aria-label="Spell targeting board">${cells.map(cell =>
    `<button type="button" data-spell-cell="${cell}" aria-label="${coordinate(cell)}"><span class="spell-coordinate">${coordinate(cell)}</span><span class="spell-token" aria-hidden="true"></span><span class="spell-goal" aria-hidden="true"></span></button>`
  ).join('')}</div>
  <p class="mechanic-instruction"><strong>E</strong> Enemy · <strong>A</strong> Ally · Dashed border marks spell area</p>
  <div class="loot-controls"><button type="button" class="button primary" data-spell-step>Advance tick</button><button type="button" class="button" data-spell-restart>Restart trial</button></div>
  <p class="mechanic-status" data-spell-status role="status"></p>
</div>`;

export function renderMatsunoMechanics(body) {
  return body.replace('<div data-mechanic-slot="recovery"></div>', turns)
    .replace('<div data-mechanic-slot="spell"></div>', spell);
}

const armor = {light: {load: 5, protection: 6}, medium: {load: 15, protection: 12}, heavy: {load: 30, protection: 20}};
const windowTicks = 240;
const units = {vanguard: 'Vanguard', rival: 'Rival'};

function initRecovery(panel) {
  const load = panel.querySelector('[data-armor-load]');
  const action = panel.querySelector('[data-turn-action]');
  const advance = panel.querySelector('[data-advance-turn]');
  const lanes = [...panel.querySelectorAll('[data-turn-lane]')];
  const count = panel.querySelector('[data-turn-count]');
  const damage = panel.querySelector('[data-turn-damage]');
  const status = panel.querySelector('[data-turn-status]');
  let cursor = -1;

  function render() {
    const gear = armor[load.value];
    const recovery = {vanguard: 36 + gear.load + (action.value === 'attack' ? 12 : 0), rival: 54};
    const events = Object.entries(recovery).flatMap(([unit, delay]) =>
      Array.from({length: Math.floor(windowTicks / delay)}, (_, i) => ({unit, tick: (i + 1) * delay}))
    ).sort((a,b) => a.tick - b.tick);
    const active = events[cursor];
    for (const lane of lanes) {
      const unit = lane.dataset.turnLane;
      const turns = events.filter(event => event.unit === unit);
      lane.innerHTML = turns.map(event => `<span class="recovery-point${event === active ? ' active' : ''}" style="left:${event.tick / windowTicks * 100}%" aria-label="Turn at tick ${event.tick}" title="Tick ${event.tick}"></span>`).join('');
    }
    count.textContent = Math.floor(windowTicks / recovery.vanguard);
    damage.textContent = 40 - gear.protection;
    const next = events[cursor + 1];
    const nextLabel = next ? `${units[next.unit]} at tick ${next.tick}.` : 'End of the 240-tick window.';
    advance.disabled = !next;
    status.textContent = active ? `Tick ${active.tick}. ${units[active.unit]} acts. ${next ? 'Next: ' : ''}${nextLabel}`
      : `First turn: ${nextLabel} Vanguard recovers every ${recovery.vanguard} ticks. Rival recovers every ${recovery.rival}.`;
  }

  function reset() {
    cursor = -1;
    render();
  }
  load.addEventListener('change', reset);
  action.addEventListener('change', reset);
  panel.querySelector('[data-reset-timeline]').addEventListener('click', reset);
  advance.addEventListener('click', () => {
    cursor++;
    render();
  });
  render();
}

function distance(a, b) {
  return Math.abs(a % size - b % size) + Math.abs(Math.floor(a / size) - Math.floor(b / size));
}

function moveToward(from, to) {
  const horizontal = Math.sign(to % size - from % size);
  return horizontal ? from + horizontal : from + size * Math.sign(Math.floor(to / size) - Math.floor(from / size));
}

function initSpell(panel) {
  const target = panel.querySelector('[data-spell-target]');
  const charge = panel.querySelector('[data-spell-charge]');
  const plan = panel.querySelector('[data-spell-unit]');
  const step = panel.querySelector('[data-spell-step]');
  const status = panel.querySelector('[data-spell-status]');
  const tiles = [...panel.querySelectorAll('[data-spell-cell]')];
  const destinations = {enemy: 9, ally: 12};
  let positions = {...origin};
  let tick = 0;

  function render() {
    const length = Number(charge.value);
    const center = target.value === 'enemy' ? positions.enemy : origin.enemy;
    const resolved = tick === length;
    for (const [cell, tile] of tiles.entries()) {
      const tokens = [positions.enemy === cell ? 'E' : '', positions.ally === cell ? 'A' : ''].filter(Boolean);
      const goals = [destinations.enemy === cell ? 'E' : '', destinations.ally === cell ? 'A' : ''].filter(Boolean);
      const inArea = distance(cell, center) <= 1;
      tile.classList.toggle('spell-area', inArea);
      tile.classList.toggle('spell-center', cell === center);
      tile.classList.toggle('spell-impact', resolved && inArea);
      tile.querySelector('.spell-token').textContent = tokens.join(' ');
      tile.querySelector('.spell-goal').textContent = goals.length && !tick ? '→ ' + goals.join(' ') : '';
      tile.setAttribute('aria-label', [coordinate(cell), tokens.includes('E') && 'enemy', tokens.includes('A') && 'ally',
        inArea && 'spell area', goals.includes('E') && !tick && 'enemy destination', goals.includes('A') && !tick && 'ally destination'
      ].filter(Boolean).join(', '));
      tile.disabled = tick > 0;
    }
    for (const input of [target, charge, plan]) input.disabled = tick > 0;
    step.disabled = resolved;
    const hit = [distance(positions.enemy, center) <= 1 && 'enemy', distance(positions.ally, center) <= 1 && 'ally'].filter(Boolean);
    status.textContent = resolved ? `Resolved at ${coordinate(center)}. ${hit.length ? 'Hits: ' + hit.join(' and ') + '.' : 'No units hit.'}`
      : `Charge ${tick}/${length} · Center ${coordinate(center)}. ${tick ? '' : 'Enemy to ' + coordinate(destinations.enemy) + ', ally to ' + coordinate(destinations.ally) + '.'}`;
  }

  for (const tile of tiles) tile.addEventListener('click', () => {
    destinations[plan.value] = Number(tile.dataset.spellCell);
    render();
  });
  target.addEventListener('change', render);
  charge.addEventListener('change', render);
  step.addEventListener('click', () => {
    tick++;
    for (const unit of Object.keys(positions)) positions[unit] = moveToward(positions[unit], destinations[unit]);
    render();
  });
  panel.querySelector('[data-spell-restart]').addEventListener('click', () => {
    tick = 0;
    positions = {...origin};
    render();
  });
  render();
}

export function initMatsunoMechanics(study) {
  const recovery = study.querySelector('[data-mechanic="recovery"]');
  const spell = study.querySelector('[data-mechanic="spell"]');
  if (recovery) initRecovery(recovery);
  if (spell) initSpell(spell);
}
