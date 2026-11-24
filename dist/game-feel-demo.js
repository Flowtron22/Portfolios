const duration = 3;
const release = 0.9;
const impact = 1.3;
const settle = 2.5;
const phases = [
  {name: 'Aim', start: 0, preview: 0.65, note: 'The aiming guide shows where the harpoon will travel. The camera closes in as the diver lines up the shot.'},
  {name: 'Fire', start: release, preview: 1.05, note: 'The diver recoils immediately and bubbles trace the harpoon through the water.'},
  {name: 'Impact', start: impact, preview: 1.43, note: 'The fish recoils and particles mark the point of contact.'},
  {name: 'Struggle', start: 1.72, preview: 2.02, note: 'The taut line, kicking fins and subtle camera shake show resistance.'},
  {name: 'Recovery', start: settle, preview: 2.85, note: 'The motion eases and the camera pulls back to mark the end of the catch.'}
];
const effects = [
  ['aim', 'Aim guide'], ['camera', 'Camera motion'], ['recoil', 'Recoil'],
  ['trail', 'Bubble trail'], ['impact', 'Impact reaction'], ['struggle', 'Struggle']
];

export function gameFeelDemo() {
  return `<section class="game-feel-demo" data-game-feel aria-labelledby="game-feel-title">
    <h2 id="game-feel-title">Play through a three-second catch</h2>
    <p>Scrub the action or play it back at a slower speed. Turn individual effects off and compare how clearly each beat reads.</p>
    <canvas width="720" height="330" role="img" aria-label="Schematic animation of a diver aiming a harpoon at a fish"></canvas>
    <label class="armor-slider" for="game-feel-time">
      <span>Timeline <output data-feel-time aria-hidden="true">0.00 s</output></span>
      <input id="game-feel-time" type="range" min="0" max="3" step="0.01" value="0">
    </label>
    <div class="feel-controls">
      <button class="button primary" type="button" data-feel-play>Play</button>
      <button class="button" type="button" data-feel-replay>Replay</button>
      <label>Speed <select data-feel-speed>
        <option value="1">1×</option><option value="0.5">½×</option><option value="0.25">¼×</option>
      </select></label>
    </div>
    <div class="feel-phases" aria-label="Jump to a beat">
      ${phases.map(({name}, index) => `<button class="button" type="button" data-feel-phase="${index}" aria-pressed="${index === 0}">${name}</button>`).join('')}
    </div>
    <p class="feel-explanation" data-feel-explanation role="status">${phases[0].note}</p>
    <fieldset class="feel-effects">
      <legend>Feedback effects</legend>
      ${effects.map(([id, label]) => `<label><input type="checkbox" data-feel-effect="${id}" checked> ${label}</label>`).join('')}
    </fieldset>
  </section>`;
}

const clamp = (value, max = 1) => Math.min(max, Math.max(0, value));
const ramp = (time, start, length) => clamp((time - start) / length);

function line(ctx, x1, y1, x2, y2, color, width = 2) {
  ctx.beginPath();
  ctx.moveTo(x1, y1);
  ctx.lineTo(x2, y2);
  ctx.strokeStyle = color;
  ctx.lineWidth = width;
  ctx.stroke();
}

function oval(ctx, x, y, rx, ry, color) {
  ctx.beginPath();
  ctx.ellipse(x, y, rx, ry, 0, 0, Math.PI * 2);
  ctx.fillStyle = color;
  ctx.fill();
}

function drawScene(ctx, t, enabled) {
  const {width, height} = ctx.canvas;
  const water = ctx.createLinearGradient(0, 0, 0, height);
  water.addColorStop(0, '#124354');
  water.addColorStop(1, '#091c2d');
  ctx.fillStyle = water;
  ctx.fillRect(0, 0, width, height);

  ctx.save();
  const struggle = t >= 1.72 && t < settle;
  if (enabled.camera) {
    const zoom = 1 + 0.09 * (ramp(t, 0, release) - ramp(t, settle, duration - settle));
    const shake = struggle && enabled.struggle ? 2.5 * Math.sin(t * 46) : 0;
    ctx.translate(width / 2 + shake, height / 2);
    ctx.scale(zoom, zoom);
    ctx.translate(-width / 2, -height / 2);
  }
  for (let i = 0; i < 6; i++) {
    oval(ctx, 18 + i * 145, 327 - (i % 3) * 10, 100, 25 + i % 2 * 8, '#102e3b');
    oval(ctx, 54 + i * 122, 66 + (i * 43) % 160, 2, 2, '#70afbc55');
  }

  const aimY = 215 - 51 * ramp(t, 0, release);
  const recoil = enabled.recoil && t >= release ? 18 * (1 - ramp(t, release, 0.27)) : 0;
  const kick = enabled.struggle && struggle ? 12 * Math.sin(t * 35) : 0;
  const diverX = 154 - recoil;
  if (enabled.aim && t < release) {
    ctx.setLineDash([7, 7]);
    line(ctx, diverX + 38, aimY, 515, 153, '#c4f2ff', 2);
    ctx.setLineDash([]);
    ctx.beginPath();
    ctx.arc(diverX + 28, 179, 73, -0.28, 0.6);
    ctx.strokeStyle = '#61c6db';
    ctx.stroke();
  }
  const fishX = 530 + (enabled.impact ? 28 * (ramp(t, impact, 0.16) - ramp(t, 1.72, 0.6)) : 0)
    - 105 * ramp(t, settle, duration - settle);
  const fishY = 151 + (enabled.struggle && struggle ? 7 * Math.sin(t * 26) : 0);

  ctx.lineCap = 'round';
  line(ctx, diverX - 19, 191, diverX - 58, 207 + kick, '#68bad2', 9);
  line(ctx, diverX - 19, 192, diverX - 52, 224 - kick, '#408aa3', 9);
  line(ctx, diverX, 184, diverX + 34, aimY + 5, '#76d2e4', 8);
  line(ctx, diverX - 18, 187, diverX + 7, 181, '#4ba0bd', 23);
  oval(ctx, diverX + 12, 169, 17, 16, '#75cfe0');
  oval(ctx, diverX + 19, 168, 10, 7, '#183b52');

  ctx.beginPath();
  ctx.moveTo(fishX + 20, fishY);
  ctx.lineTo(fishX + 45, fishY - 18);
  ctx.lineTo(fishX + 45, fishY + 18);
  ctx.closePath();
  ctx.fillStyle = '#e99161';
  ctx.fill();
  oval(ctx, fishX, fishY, 29, 17, '#ffc078');
  oval(ctx, fishX - 16, fishY - 4, 3, 3, '#392727');

  const travel = ramp(t, release, impact - release);
  const spearX = t >= impact ? fishX - 23 : diverX + 48 + (507 - diverX - 48) * travel;
  const spearY = t >= impact ? fishY + 2 : aimY + (153 - aimY) * travel;
  if (t < impact) {
    line(ctx, spearX - 13, spearY + 2, spearX + 18, spearY, '#ffe7b0', 4);
  } else {
    line(ctx, diverX + 34, aimY + 5, spearX, spearY, '#bdd9d999');
  }
  if (enabled.trail && t >= release && t < impact + 0.35) {
    for (let i = 0; i < 7; i++) {
      const bubble = travel - (i + 1) * 0.08;
      if (bubble > 0) oval(ctx, 204 + 303 * bubble, 164 - i * 3, 2 + i % 3, 2 + i % 3, '#bcf7ff88');
    }
  }
  if (enabled.impact && t >= impact && t < impact + 0.27) {
    const spread = 10 + 30 * ramp(t, impact, 0.27);
    for (let i = 0; i < 8; i++) {
      const angle = i * Math.PI / 4;
      oval(ctx, spearX + Math.cos(angle) * spread, spearY + Math.sin(angle) * spread, 3, 3, '#ffd58b');
    }
  }
  ctx.restore();
}

export function initGameFeelDemo(container) {
  const demo = container.querySelector('[data-game-feel]');
  if (!demo) return;
  const ctx = demo.querySelector('canvas').getContext('2d');
  const timeline = demo.querySelector('#game-feel-time');
  const speed = demo.querySelector('[data-feel-speed]');
  const play = demo.querySelector('[data-feel-play]');
  const output = demo.querySelector('[data-feel-time]');
  const explanation = demo.querySelector('[data-feel-explanation]');
  const buttons = [...demo.querySelectorAll('[data-feel-phase]')];
  const toggles = [...demo.querySelectorAll('[data-feel-effect]')];
  let time = 0;
  let previous;
  let frame;
  let activePhase;

  function render() {
    timeline.value = time;
    output.textContent = time.toFixed(2) + ' s';
    const phase = phases.findLastIndex(({start}) => time >= start);
    if (phase !== activePhase) {
      activePhase = phase;
      buttons.forEach((button, index) => button.setAttribute('aria-pressed', String(index === phase)));
      explanation.textContent = phases[phase].note;
    }
    if (ctx) drawScene(ctx, time, Object.fromEntries(toggles.map(input => [input.dataset.feelEffect, input.checked])));
  }

  function stop() {
    if (frame !== undefined) cancelAnimationFrame(frame);
    frame = previous = undefined;
    play.textContent = 'Play';
  }

  function tick(now) {
    if (!demo.isConnected) return stop();
    if (previous !== undefined) time = clamp(time + (now - previous) / 1000 * Number(speed.value), duration);
    previous = now;
    render();
    if (time >= duration) stop();
    else frame = requestAnimationFrame(tick);
  }

  function start() {
    if (time >= duration) time = 0;
    play.textContent = 'Pause';
    render();
    frame = requestAnimationFrame(tick);
  }

  play.addEventListener('click', () => frame === undefined ? start() : stop());
  demo.querySelector('[data-feel-replay]').addEventListener('click', () => {
    stop();
    time = 0;
    start();
  });
  timeline.addEventListener('input', () => {
    stop();
    time = timeline.valueAsNumber;
    render();
  });
  buttons.forEach((button, index) => button.addEventListener('click', () => {
    stop();
    time = phases[index].preview;
    render();
  }));
  toggles.forEach(input => input.addEventListener('change', render));
  render();
}
