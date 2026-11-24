import {renderMatsunoModels, initMatsunoModels} from './design-matsuno-method-demos.js';
import {renderMatsunoMechanics, initMatsunoMechanics} from './design-matsuno-mechanics-demos.js';

const gambitMarkup = `<div class="matsuno-gambit" data-matsuno-gambit>
  <h3>Interactive Gambit demonstration</h3>
  <p>A simplified example of conditional party AI.</p>
  <form>
    <div class="gambit-controls">
      <label for="gambit-health">Ally HP <output id="gambit-health-value" for="gambit-health">33%</output></label>
      <meter data-gambit-meter min="0" max="100" low="30" optimum="100" value="33" aria-label="Ally health"></meter>
      <input id="gambit-health" name="health" type="range" min="1" max="100" value="33">
      <label class="gambit-checkbox"><input type="checkbox" name="enemy" checked> Enemy is present</label>
    </div>
    <p class="gambit-rule-caption">Priority rules, evaluated from top to bottom</p>
    <ol class="gambit-rules">
      <li>
        <label for="gambit-threshold">Ally HP below
          <select id="gambit-threshold" name="threshold">
            <option value="30">30%</option>
            <option value="50" selected>50%</option>
            <option value="70">70%</option>
          </select>
        </label>
        <strong>Heal</strong>
      </li>
      <li><span>Enemy present</span><strong>Attack</strong></li>
      <li><span>Otherwise</span><strong>Wait</strong></li>
    </ol>
    <div class="gambit-result" aria-live="polite">
      <span>Current character action</span>
      <strong data-gambit-action>Heal ally</strong>
    </div>
  </form>
</div>`;

export function renderMatsunoBody(article) {
  const body = renderMatsunoModels(article.body.replace('<div data-matsuno-gambit></div>', gambitMarkup));
  const parts = [
    ['yasumi-matsuno-designing-consequences', 'Read Part I'],
    ['the-matsuno-method', 'Read Part II'],
    ['matsuno-gameplay-mechanics', 'Try Gameplay Mechanics']
  ];
  const links = parts.filter(([slug]) => slug !== article.slug).map(([slug, label]) =>
    `<a class="text-link" href="#/solo/library/${slug}">${label}</a>`).join('');
  return `<p class="design-intro">${article.summary}</p><nav class="matsuno-part-link" aria-label="Matsuno articles">${links}</nav>${renderMatsunoMechanics(body)}`;
}

export function initMatsunoArticle(container) {
  const study = container.querySelector('.matsuno-study');
  if (!study) return;
  initMatsunoModels(study);
  initMatsunoMechanics(study);

  for (const button of study.querySelectorAll('[data-matsuno-jump]')) {
    button.addEventListener('click', () => {
      const target = document.getElementById(button.dataset.matsunoJump);
      const focusTarget = target?.querySelector('summary') ?? target;
      focusTarget?.focus({preventScroll: true});
      target?.scrollIntoView({block: 'start'});
    });
  }

  const demo = study.querySelector('[data-matsuno-gambit]');
  if (!demo) return;

  const form = demo.querySelector('form');
  const {health, threshold, enemy} = form.elements;
  const healthValue = demo.querySelector('#gambit-health-value');
  const meter = demo.querySelector('[data-gambit-meter]');
  const result = demo.querySelector('[data-gambit-action]');
  const rows = [...demo.querySelectorAll('.gambit-rules li')];
  const actions = ['Heal ally', 'Attack enemy', 'Wait'];

  function update() {
    const hp = health.valueAsNumber;
    const active = hp < Number(threshold.value) ? 0 : enemy.checked ? 1 : 2;
    healthValue.value = hp + '%';
    meter.value = hp;
    for (const [index, row] of rows.entries()) {
      if (index === active) row.setAttribute('aria-current', 'true');
      else row.removeAttribute('aria-current');
    }
    if (result.textContent !== actions[active]) result.textContent = actions[active];
  }

  form.addEventListener('input', update);
  form.addEventListener('change', update);
  update();
}
