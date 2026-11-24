import ShuffleBag from './shufflebag.js';

const bagSize = 8;
const criticalHitsPerBag = 2;
const criticalChance = criticalHitsPerBag / bagSize;

function marbles(critical, total) {
  return Array.from({length: total}, (_, index) =>
    `<span class="shuffle-marble ${index < critical ? 'shuffle-marble-red' : 'shuffle-marble-blue'}"></span>`).join('');
}

export function shuffleBagDemo() {
  return `<section class="shuffle-demo" data-shuffle-demo aria-labelledby="shuffle-demo-title">
    <h2 id="shuffle-demo-title">Try the shuffle bag</h2>
    <p>Draw one attack from each system. The bag contains two critical hits and six normal hits. The independent roll has a 25% chance of a critical hit every time.</p>
    <div class="shuffle-demo-controls">
      <button type="button" class="button primary" data-shuffle-draw>Draw both</button>
      <button type="button" class="button" data-shuffle-reset>Reset</button>
    </div>
    <div class="shuffle-demo-comparison">
      <div>
        <h3>Shuffle bag</h3>
        <div class="shuffle-jar-display" aria-hidden="true">
          <span class="shuffle-jar-count" data-shuffle-marble-count>2 red · 6 blue</span>
          <span class="shuffle-jar-chance" data-shuffle-marble-chance>25% chance on next draw</span>
          <div class="shuffle-jar">
            <div class="shuffle-marbles" data-shuffle-marbles>${marbles(criticalHitsPerBag, bagSize)}</div>
          </div>
        </div>
        <p data-shuffle-bag-status>Bag 1 · 2 critical hits in 8 remaining draws</p>
        <ol class="shuffle-results" data-shuffle-bag aria-label="Draws in the current bag"></ol>
      </div>
      <div>
        <h3>Independent rolls</h3>
        <p>25% critical chance per roll</p>
        <ol class="shuffle-results" data-shuffle-roll aria-label="Last eight independent rolls"></ol>
      </div>
    </div>
    <p data-shuffle-total>Total critical hits · Bag 0 of 0 · Independent 0 of 0</p>
    <p class="sr-only" data-shuffle-announcement role="status"></p>
    <a class="text-link" href="https://github.com/giffo/shufflebag" target="_blank" rel="noopener noreferrer">Shufflebag source on GitHub</a>
  </section>`;
}

export function initShuffleBagDemo(container) {
  const demo = container.querySelector('[data-shuffle-demo]');
  if (!demo) return;
  const bag = new ShuffleBag({critical: criticalHitsPerBag, normal: bagSize - criticalHitsPerBag});
  const bagResults = demo.querySelector('[data-shuffle-bag]');
  const rollResults = demo.querySelector('[data-shuffle-roll]');
  const bagStatus = demo.querySelector('[data-shuffle-bag-status]');
  const marbleCount = demo.querySelector('[data-shuffle-marble-count]');
  const marbleChance = demo.querySelector('[data-shuffle-marble-chance]');
  const jar = demo.querySelector('[data-shuffle-marbles]');
  const total = demo.querySelector('[data-shuffle-total]');
  const announcement = demo.querySelector('[data-shuffle-announcement]');
  let draws = 0;
  let bagCriticalHits = 0;
  let rollCriticalHits = 0;
  let remainingCritical = criticalHitsPerBag;

  function appendResult(list, critical) {
    const result = document.createElement('li');
    result.classList.toggle('shuffle-critical', critical);
    result.textContent = critical ? 'Crit' : 'Hit';
    list.append(result);
  }

  function updateStatus() {
    const used = draws % bagSize;
    const cycle = Math.ceil(draws / bagSize) || 1;
    const complete = draws > 0 && used === 0;
    const remaining = complete ? 0 : bagSize - used;
    jar.innerHTML = marbles(remainingCritical, remaining);
    marbleCount.textContent = `${remainingCritical} red · ${remaining - remainingCritical} blue`;
    marbleChance.textContent = complete
      ? 'Next draw refills the jar'
      : `${Math.round(remainingCritical / remaining * 100)}% chance on next draw`;
    bagStatus.textContent = complete
      ? `Bag ${cycle} complete · Next draw refills it`
      : `Bag ${cycle} · ${remainingCritical} critical hits in ${bagSize - used} remaining draws`;
    total.textContent = `Total critical hits · Bag ${bagCriticalHits} of ${draws} · Independent ${rollCriticalHits} of ${draws}`;
  }

  demo.querySelector('[data-shuffle-draw]').addEventListener('click', () => {
    if (draws % bagSize === 0) {
      bagResults.replaceChildren();
      remainingCritical = criticalHitsPerBag;
    }
    const bagCritical = bag.next() === 'critical';
    const rollCritical = Math.random() < criticalChance;
    draws++;
    bagCriticalHits += Number(bagCritical);
    rollCriticalHits += Number(rollCritical);
    remainingCritical -= Number(bagCritical);
    appendResult(bagResults, bagCritical);
    appendResult(rollResults, rollCritical);
    if (rollResults.childElementCount > bagSize) rollResults.firstElementChild.remove();
    updateStatus();
    announcement.textContent = `Draw ${draws}. Bag: ${bagCritical ? 'critical' : 'normal'} hit. Independent: ${rollCritical ? 'critical' : 'normal'} hit. ${bagStatus.textContent}`;
  });

  demo.querySelector('[data-shuffle-reset]').addEventListener('click', () => {
    bag.reset();
    draws = bagCriticalHits = rollCriticalHits = 0;
    remainingCritical = criticalHitsPerBag;
    bagResults.replaceChildren();
    rollResults.replaceChildren();
    updateStatus();
    announcement.textContent = 'Both systems reset.';
  });
}
