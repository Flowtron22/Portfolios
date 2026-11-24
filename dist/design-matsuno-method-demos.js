const meter = (name, label) => `<label class="method-meter"><span>${label} <output data-value="${name}"></output></span><meter data-meter="${name}" min="0" max="100"></meter></label>`;
const slider = (name, label, min, max, step, value) => `<label class="method-slider"><span>${label} <output data-value="${name}"></output></span><input type="range" name="${name}" min="${min}" max="${max}" step="${step}" value="${value}"></label>`;
const select = (name, label, options) => `<label>${label}<select name="${name}">${options.map(([value, text]) => `<option value="${value}">${text}</option>`).join('')}</select></label>`;
const radios = (name, label, options) => `<fieldset><legend>${label}</legend>${options.map(([value, text], i) => `<label class="method-choice"><input type="radio" name="${name}" value="${value}"${i ? '' : ' checked'}> ${text}</label>`).join('')}</fieldset>`;
const result = (name, label) => `<div class="method-result"><span>${label}</span><strong data-value="${name}" aria-live="polite"></strong></div>`;

const army = `<h3>Command your liberation army</h3>
  <form>
    ${slider('force', 'Military strength', 20, 100, 5, 50)}
    ${radios('conduct', 'Military doctrine', [
      ['restrained', 'Restrained — prioritize civilian confidence'],
      ['aggressive', 'Aggressive — prioritize rapid military success']
    ])}
    ${meter('military', 'Military effectiveness')}
    ${meter('reputation', 'Public reputation')}
    ${result('consequence', 'Strategic consequence')}
  </form>
  <p>Illustrative prototype using hypothetical values.</p>`;

const risk = `<h3>Interactive risk–reward model</h3>
  <p>Inspired by Vagrant Story, using hypothetical values.</p>
  <form>
    ${slider('chain', 'Additional chained attacks', 0, 20, 1, 4)}
    <svg class="method-chart" viewBox="0 0 330 176" role="img" aria-label="Damage rises and accuracy falls as the chain grows">
      <path d="M35 14 V153 H310" stroke="currentColor" opacity=".5" fill="none"/>
      <path d="M35 14 H310 M35 49 H310 M35 84 H310 M35 119 H310" stroke="currentColor" opacity=".18" stroke-dasharray="3 4"/>
      <path d="M35 138 L310 20" fill="none" stroke="#367255" stroke-width="2.5"/>
      <path d="M35 17 C130 38 215 75 310 124" fill="none" stroke="#a74b42" stroke-width="2.5"/>
      <path data-risk-line stroke="currentColor" stroke-dasharray="4 4" opacity=".7"/>
      <circle data-risk-damage r="4" fill="#367255"/>
      <circle data-risk-accuracy r="4" fill="#a74b42"/>
      <text x="35" y="167">0</text><text x="310" y="167" text-anchor="end">20 attacks</text>
    </svg>
    <p class="method-chart-legend"><span>Damage potential</span><span>Accuracy</span></p>
    <div class="method-metrics">${result('damage', 'Potential damage')}${result('accuracy', 'Accuracy')}${result('risk', 'RISK')}</div>
    <p data-value="advice" aria-live="polite"></p>
  </form>`;

const buildOptions = [
  ['job', 'Primary job', {Knight:'Frontline durability', Monk:'Physical damage and close-range utility', 'Black Mage':'Offensive spellcasting', Ninja:'Mobility and physical offense'}],
  ['secondary', 'Secondary command', {'White Magic':'Healing support', 'Time Magic':'Turn and movement control', 'Black Magic':'Magical offense', Fundaments:'General combat utility'}],
  ['reaction', 'Reaction ability', {Counter:'Retaliation', 'Auto-Potion':'Automatic item-based recovery', 'HP Restore':'Emergency recovery'}],
  ['movement', 'Movement ability', {'Move +2':'Extended movement', Teleport:'Unconventional positioning', 'Jump +2':'Vertical movement'}]
];
const build = `<h3>Build a tactical character</h3>
  <p>A simplified Final Fantasy Tactics character construction exercise.</p>
  <form>
    <div class="method-selects">${buildOptions.map(([name, label, options]) =>
      select(name, label, Object.keys(options).map(key => [key, key]))).join('')}</div>
    ${result('profile', 'Character build')}
    <ul>${buildOptions.map(([name]) => `<li data-value="${name}"></li>`).join('')}</ul>
    <p>Possible combinations in this demonstration <strong>${buildOptions.reduce((total, [, , options]) => total * Object.keys(options).length, 1)}</strong></p>
  </form>`;

const priority = `<h3>Design your party’s behavior</h3>
  <p>Simplified Gambit logic. The first valid rule takes priority.</p>
  <form>
    ${slider('health', 'Ally health', 1, 100, 1, 35)}
    <label class="method-choice"><input type="checkbox" name="enemy" checked> Enemy is present</label>
    ${select('limit', 'Heal when health falls below', [[50, '50%'], [30, '30%'], [70, '70%']])}
    ${radios('priority', 'First priority', [['heal', 'Heal first'], ['attack', 'Attack first']])}
    <ol class="method-rules"><li><span></span><strong></strong></li><li><span></span><strong></strong></li></ol>
    ${result('action', 'Executed action')}
  </form>`;

const principles = [
  ['Opportunity', 'Does the game offer a distinct and valuable experience?'],
  ['Research', 'Does the design draw upon knowledge beyond existing games?'],
  ['World history', 'Does the world possess credible foundations?'],
  ['Human realism', 'Are behaviors and motivations believable?'],
  ['Opposing values', 'Does conflict arise from meaningful opposing beliefs?'],
  ['Systemic morality', 'Do player actions produce appropriate consequences?'],
  ['Trade-offs', 'Do important decisions have meaningful costs?'],
  ['Systemic depth', 'Do mechanics interact to create strategic variety?'],
  ['Player thinking', 'Can players plan, experiment and discover?'],
  ['Yohaku', 'Is there room for imagination and interpretation?'],
  ['Feasibility', 'Does the design suit available production resources?'],
  ['Coherence', 'Do all disciplines reinforce the same experience?']
];
function radarPoint(index, level, radius = 19) {
  const angle = -Math.PI / 2 + index * Math.PI / 6;
  return [160 + Math.cos(angle) * level * radius, 148 + Math.sin(angle) * level * radius];
}
const radarGrid = Array.from({length: 5}, (_, level) =>
  `<polygon points="${principles.map((_, i) => radarPoint(i, level + 1).join(',')).join(' ')}" fill="none" stroke="#8b9590" stroke-opacity=".45"/>`).join('');
const radarAxes = principles.map(([label], i) => {
  const [x, y] = radarPoint(i, 5);
  const [tx, ty] = radarPoint(i, 1, 122);
  return `<path d="M160 148 L${x} ${y}" stroke="#8b9590" stroke-opacity=".45"/><text x="${tx}" y="${ty + 4}" text-anchor="middle">${label}</text>`;
}).join('');
const assessment = `<h3>Game design assessment</h3>
  <p>Rate each principle from 1 (weak) to 5 (strong). Use the scores to identify where the design needs attention.</p>
  <form>
    ${result('total', 'Overall assessment')}
    <svg class="method-chart" viewBox="0 0 320 302" role="img" aria-label="Radar chart of all twelve design assessment scores">
      ${radarGrid}${radarAxes}
      <polygon data-radar-profile fill="#5881a3" fill-opacity=".28" stroke="#416887" stroke-width="1.8"/>
      ${principles.map(() => '<circle data-radar-point r="2.6" fill="#416887"/>').join('')}
    </svg>
    <div class="method-assessment-grid">${principles.map(([label, question], i) =>
      `<div>${slider('score'+i, label, 1, 5, 1, 3)}<small>${question}</small></div>`).join('')}</div>
    <h4>Lowest-rated areas</h4>
    <ul data-value="lowest"></ul>
    <div class="loot-controls"><button type="reset" class="button">Reset</button><button type="button" class="button primary" data-copy-assessment>Copy results</button></div>
    <p data-copy-status role="status"></p>
    <textarea data-copy-fallback hidden readonly aria-label="Assessment results"></textarea>
  </form>`;

const models = {army, risk, build, priority, assessment};
export function renderMatsunoModels(body) {
  return body.replace(/<div data-matsuno-model="(army|risk|build|priority|assessment)"><\/div>/g,
    (_, key) => `<div class="matsuno-gambit matsuno-method-demo" data-matsuno-method="${key}">${models[key]}</div>`);
}

const setup = {
  army(panel, form, show) {
    return () => {
      const force = form.force.valueAsNumber;
      const aggressive = form.conduct.value === 'aggressive';
      const military = Math.min(100, force + (aggressive ? 20 : 0));
      const reputation = Math.max(0, Math.min(100, 65 + (aggressive ? -25 : 18) - Math.max(0, force - 70) * 0.7));
      show('force', force);
      for (const [name, score] of [['military', military], ['reputation', reputation]]) {
        panel.querySelector(`[data-meter="${name}"]`).value = score;
        show(name, Math.round(score) + '/100');
      }
      show('consequence', reputation < 45
        ? 'Your army may defeat its enemies, but its political legitimacy is deteriorating.'
        : military < 50 ? 'Your army maintains public support but may lack the strength to overcome resistance.'
          : 'Your rebellion balances military effectiveness and political legitimacy.');
    };
  },
  risk(panel, form, show) {
    const line = panel.querySelector('[data-risk-line]');
    const damagePoint = panel.querySelector('[data-risk-damage]');
    const accuracyPoint = panel.querySelector('[data-risk-accuracy]');
    return () => {
      const chain = form.chain.valueAsNumber;
      const accuracy = Math.round(98 - Math.pow(chain / 20, 1.2) * 70);
      const x = 35 + chain / 20 * 275;
      show('chain', chain);
      show('damage', 100 + chain * 24);
      show('accuracy', accuracy + '%');
      show('risk', chain * 5);
      show('advice', chain >= 12 ? 'High offensive potential with a substantial accuracy penalty.'
        : chain >= 5 ? 'Moderate aggression with an accumulating penalty.' : 'Conservative approach with relatively low risk.');
      line.setAttribute('d', `M${x} 14 V153`);
      damagePoint.setAttribute('cx', x);
      damagePoint.setAttribute('cy', 138 - chain / 20 * 118);
      accuracyPoint.setAttribute('cx', x);
      accuracyPoint.setAttribute('cy', 153 - accuracy / 100 * 139);
    };
  },
  build(_panel, form, show) {
    return () => {
      show('profile', form.job.value + ' / ' + form.secondary.value);
      for (const [name, , options] of buildOptions) show(name, options[form[name].value]);
    };
  },
  priority(panel, form, show) {
    const rows = [...panel.querySelectorAll('.method-rules li')];
    return () => {
      const hp = form.health.valueAsNumber;
      const limit = Number(form.limit.value);
      const rules = [[`Ally HP below ${limit}%`, 'Heal', hp < limit], ['Enemy present', 'Attack', form.enemy.checked]];
      if (form.priority.value === 'attack') rules.reverse();
      const active = rules.findIndex(rule => rule[2]);
      show('health', hp + '%');
      show('action', active === -1 ? 'Wait' : rules[active][1] === 'Heal' ? 'Heal ally' : 'Attack enemy');
      rules.forEach(([condition, action], i) => {
        rows[i].firstElementChild.textContent = condition;
        rows[i].lastElementChild.textContent = action;
        if (i === active) rows[i].setAttribute('aria-current', 'true');
        else rows[i].removeAttribute('aria-current');
      });
    };
  },
  assessment(panel, form, show) {
    const points = [...panel.querySelectorAll('[data-radar-point]')];
    const profile = panel.querySelector('[data-radar-profile]');
    const lowest = panel.querySelector('[data-value="lowest"]');
    const status = panel.querySelector('[data-copy-status]');
    const fallback = panel.querySelector('[data-copy-fallback]');
    const read = () => principles.map(([label], i) => ({label, score: form['score'+i].valueAsNumber}));
    panel.querySelector('[data-copy-assessment]').addEventListener('click', async () => {
      const scores = read();
      const report = ['Matsuno-inspired Game Design Assessment',
        'Total: ' + scores.reduce((sum, item) => sum + item.score, 0) + '/60',
        ...scores.map(({label, score}) => label + ': ' + score + '/5')].join('\n');
      try {
        await navigator.clipboard.writeText(report);
        status.textContent = 'Results copied.';
      } catch {
        fallback.hidden = false;
        fallback.value = report;
        fallback.select();
        status.textContent = 'Select and copy the results below.';
      }
    });
    panel.querySelector('form').addEventListener('reset', () => requestAnimationFrame(update));
    function update() {
      const scores = read();
      show('total', scores.reduce((sum, item) => sum + item.score, 0) + ' / 60');
      profile.setAttribute('points', scores.map(({score}, i) => {
        const [x,y] = radarPoint(i, score);
        points[i].setAttribute('cx', x);
        points[i].setAttribute('cy', y);
        show('score'+i, score + '/5');
        return x + ',' + y;
      }).join(' '));
      lowest.replaceChildren(...scores.sort((a,b) => a.score - b.score).slice(0,3).map(({label, score}) => {
        const item = document.createElement('li');
        item.textContent = label + ' · ' + score + '/5';
        return item;
      }));
      fallback.hidden = true;
      status.textContent = '';
    }
    return update;
  }
};

export function initMatsunoModels(study) {
  for (const panel of study.querySelectorAll('[data-matsuno-method]')) {
    const form = panel.querySelector('form');
    const values = new Map([...panel.querySelectorAll('[data-value]')].map(element => [element.dataset.value, element]));
    const show = (name, value) => {
      const element = values.get(name);
      if (element.textContent !== String(value)) element.textContent = value;
    };
    const update = setup[panel.dataset.matsunoMethod](panel, form.elements, show);
    form.addEventListener('input', update);
    form.addEventListener('change', update);
    update();
  }
}
