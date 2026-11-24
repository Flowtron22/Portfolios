const number = new Intl.NumberFormat('en', {maximumFractionDigits: 2});
const fmt = value => number.format(value);
const colors = ['#a54a32', '#22706a', '#645491', '#735c28', '#465f85', '#785071'];
const roles = {
  Assassin: [35,10,30,10,5,10],
  Tank: [10,40,10,25,10,5],
  Carry: [45,15,10,5,5,20],
  Support: [10,15,10,25,35,5],
  Fighter: [25,25,15,15,10,10],
  'Fighter benchmark': [30,25,15,15,10,5]
};
const axes = ['Damage', 'Survivability', 'Mobility', 'Crowd control', 'Utility', 'Range'];
const archetypes = {
  'Early pressure': [125,105,80],
  'Mid-game specialist': [80,135,95],
  'Late carry': [60,100,160],
  'Utility support': [110,105,100],
  'Balanced fighter': [100,100,100]
};
const abilities = [['Early fighter', 250, .4], ['Balanced fighter', 150, 1], ['Late carry', 60, 1.5]];
const cooldowns = {Fireball: [300,4,75], Meteor: [800,20,60], 'Magic Missile': [180,2,100]};
const panel = (id, content) => `<div class="article-simulation moba-sim" data-moba="${id}"><form>${content}<button class="button" type="reset">Reset example</button></form></div>`;
const range = (id, label, min, max, step, value, unit = '') =>
  `<label class="moba-control"><span>${label} <output data-display="${id}">${value}${unit}</output></span><input name="${id}" type="range" min="${min}" max="${max}" step="${step}" value="${value}" data-unit="${unit}"></label>`;
const select = (id, label, items, initial = items[0]) =>
  `<label class="moba-control"><span>${label}</span><select name="${id}">${items.map(item => `<option${item === initial ? ' selected' : ''}>${item}</option>`).join('')}</select></label>`;
const controls = (...items) => `<div class="moba-controls">${items.join('')}</div>`;
const metrics = labels => `<dl class="moba-metrics" aria-live="polite">${Object.entries(labels).map(([key,label]) =>
  `<div><dt>${label}</dt><dd data-stat="${key}"></dd></div>`).join('')}</dl>`;
const chart = label => `<figure class="moba-figure"><svg viewBox="0 0 480 205" role="img" aria-label="${label}"></svg><figcaption class="moba-legend"></figcaption></figure>`;
const caption = key => `<p class="moba-note" data-stat="${key}"></p>`;

export const mobaPanels = {
  'moba-curve': panel('curve',
    controls(select('role', 'Highlight an archetype', Object.keys(archetypes))) +
    chart('Relative hero power across the match') +
    metrics({early:'Early', mid:'Mid', late:'Late'})),
  'moba-budget': panel('budget',
    controls(select('role', 'Role budget', Object.keys(roles), 'Fighter benchmark')) +
    '<div class="moba-budget-bar" aria-label="100-point role budget"></div>' +
    controls(...axes.map((label,i) => range('grade'+i, label, 0, 200, 5, [120,120,100,80,50,80][i], '%'))) +
    metrics({index:'Weighted power index · 100 baseline', total:'Total role points'}) +
    caption('weights')),
  'moba-growth': panel('growth',
    controls(range('level','Hero level',1,18,1,10), range('base','Base health',300,1000,10,600), range('growth','Growth stat',0,150,5,85)) +
    chart('Linear and back-loaded health growth by level') + metrics({linear:'Linear health', back:'Back-loaded health'})),
  'moba-damage': panel('damage',
    controls(range('ad','Attack damage',0,500,1,150), range('lateBase','Late carry base damage',0,300,5,60),
      range('scaling','Late carry AD coefficient',0,250,5,150,'%')) +
    chart('Raw ability damage across attack damage values') +
    metrics({early:'Early fighter', balanced:'Balanced fighter', late:'Late carry'}) + caption('crossover')),
  'moba-survival': panel('survival',
    controls(range('hp','Target health',500,6000,100,4000), range('armor','Target armor',0,300,5,150),
      range('ad','Attack damage',10,600,1,333), range('speed','Attacks per second',.5,4,.05,2),
      range('crit','Critical chance',0,100,1,50,'%'), range('critMult','Critical damage multiplier',1,3,.05,2,'×'),
      range('goal','Target time to kill',1,20,.5,10,' s')) +
    metrics({reduction:'Physical damage reduction', ehp:'Effective physical health', dps:'Expected raw attack DPS', ttk:'Estimated time to kill', required:'Attack damage needed for target time'})),
  'moba-ability': panel('ability',
    controls(select('spell','Ability',Object.keys(cooldowns)), range('hit','Chance to hit',0,100,1,75,'%'),
      range('haste','Ability haste',0,200,5,0), range('duration','Disable duration',0,5,.25,2,' s'),
      range('enemy','Enemy DPS during disable',0,1000,25,600)) +
    metrics({burst:'Raw damage per hit', cooldown:'Effective cooldown', dps:'Expected ability DPS', denied:'Potential damage denied'})),
  'moba-economy': panel('economy',
    controls(range('price','Core item price',1000,6500,100,4000), range('income','Gold per minute',150,800,10,400),
      range('growth','Lead growth per interval',0,30,1,20,'%'), range('comeback','Comeback offset per interval',0,30,1,15,'%')) +
    chart('Lead index across eight intervals with and without a comeback offset') +
    metrics({minutes:'Estimated item timing', lead:'Lead index at interval 8', reduced:'Lead index with comeback'}) + caption('offset'))
};

function draw(panel, xValues, series, {labels, mark, min = 0, max, baseline} = {}) {
  const figure = panel.querySelector('.moba-figure');
  const left = 44, right = 452, top = 13, bottom = 166;
  const upper = max ?? Math.max(...series.flatMap(item => item.values)) * 1.1;
  const x = value => left + (right-left) * (value-xValues[0]) / (xValues.at(-1)-xValues[0]);
  const y = value => bottom - (bottom-top) * (value-min) / (upper-min);
  const pos = value => value.toFixed(2);
  const grid = Array.from({length:5}, (_,i) => min + (upper-min)*i/4).map(value =>
    `<line x1="${left}" x2="${right}" y1="${pos(y(value))}" y2="${pos(y(value))}" class="moba-gridline"/><text x="${left-7}" y="${pos(y(value)+4)}" text-anchor="end">${fmt(Math.round(value))}</text>`).join('');
  const ticks = (labels ?? [[xValues[0],xValues[0]],[xValues.at(-1),xValues.at(-1)]]).map(([value,label]) =>
    `<text x="${pos(x(value))}" y="188" text-anchor="middle">${label}</text>`).join('');
  const curves = series.map(({values,color,emphasis=true}) =>
    `<polyline fill="none" stroke="${color}" stroke-width="${emphasis?3:1.4}" opacity="${emphasis?1:.48}" points="${values.map((v,i)=>pos(x(xValues[i]))+','+pos(y(v))).join(' ')}"/>`).join('');
  const guide = baseline === undefined ? '' : `<line x1="${left}" x2="${right}" y1="${pos(y(baseline))}" y2="${pos(y(baseline))}" class="moba-chart-guide"/>`;
  const marker = mark === undefined ? '' : `<line x1="${pos(x(mark))}" x2="${pos(x(mark))}" y1="${top}" y2="${bottom}" class="moba-chart-guide"/>`;
  figure.querySelector('svg').innerHTML = grid + ticks + guide + marker + curves;
  figure.querySelector('figcaption').innerHTML = series.map(({label,color})=>
    `<span><i style="--series:${color}"></i>${label}</span>`).join('');
}

const valuesBy = (labels, data, emphasis) => labels.map((label,i) =>
  ({label, values:data[i], color:colors[i], emphasis:emphasis===undefined || emphasis===i}));
const models = {
  curve(panel, read) {
    const chosen = read('role');
    const names = Object.keys(archetypes);
    const [early,mid,late] = archetypes[chosen];
    draw(panel,[0,1,2],valuesBy(names,Object.values(archetypes),names.indexOf(chosen)),
      {min:50,max:170,baseline:100,labels:[[0,'Early'],[1,'Mid'],[2,'Late']]});
    return {early,mid,late};
  },
  budget(panel, read) {
    const weights = roles[read('role')];
    const index = weights.reduce((total,w,i) => total + w*read('grade'+i)/100,0);
    panel.querySelector('.moba-budget-bar').innerHTML = weights.map((weight,i)=>
      `<span style="flex:${weight};background:${colors[i]}" title="${axes[i]}: ${weight} points">${weight}</span>`).join('');
    return {index:fmt(index), total:weights.reduce((total,w)=>total+w,0),
      weights:axes.map((label,i)=>label+' '+weights[i]).join(' · ')};
  },
  growth(panel, read) {
    const base = read('base'), growth = read('growth'), level = read('level');
    const steps = Array.from({length:18},(_,i)=>i+1);
    const linear = n => base + growth*(n-1);
    const back = n => base + growth*(n-1)*(.7025+.0175*(n-1));
    draw(panel,steps,valuesBy(['Linear','Back-loaded'],[steps.map(linear),steps.map(back)]),
      {mark:level,labels:[[1,'Lv 1'],[6,'Lv 6'],[12,'Lv 12'],[18,'Lv 18']]});
    return {linear:fmt(linear(level)),back:fmt(back(level))};
  },
  damage(panel, read) {
    const ad = read('ad'), coefficient = read('scaling')/100, lateBase = read('lateBase');
    const profiles = [abilities[0],abilities[1],[abilities[2][0],lateBase,coefficient]];
    const raw = ([,base,ratio],x) => base+x*ratio;
    const x = [0,500];
    draw(panel,x,valuesBy(profiles.map(([name])=>name),profiles.map(p=>x.map(v=>raw(p,v)))),
      {mark:ad,labels:[[0,'0 AD'],[250,'250 AD'],[500,'500 AD']]});
    const delta = coefficient - abilities[0][2];
    const crossover = (abilities[0][1]-lateBase)/delta;
    const crossing = delta === 0
      ? (lateBase === abilities[0][1] ? 'The early and late abilities tie at every AD.' : 'The early and late abilities never tie.')
      : crossover < 0 || crossover > 500 ? 'The early and late abilities have no crossover in the 0–500 AD range.'
        : 'Early and late abilities tie at ' + fmt(crossover) + ' AD. ' + (delta > 0 ? 'Late carry leads above the crossover.' : 'Early fighter leads above the crossover.');
    return {early:fmt(raw(profiles[0],ad)),balanced:fmt(raw(profiles[1],ad)),late:fmt(raw(profiles[2],ad)),crossover:crossing};
  },
  survival(_panel, read) {
    const hp = read('hp'), armor = read('armor'), speed = read('speed');
    const hitFactor = speed*(1+(read('crit')/100)*(read('critMult')-1));
    const ehp = hp*(1+armor/100);
    const dps = read('ad')*hitFactor;
    return {reduction:fmt(100*armor/(100+armor))+'%', ehp:fmt(ehp), dps:fmt(dps),
      ttk:fmt(ehp/dps)+' s', required:fmt(ehp/(read('goal')*hitFactor))+' AD'};
  },
  ability(_panel, read) {
    const [damage,base] = cooldowns[read('spell')];
    const cooldown = base/(1+read('haste')/100);
    return {burst:fmt(damage),cooldown:fmt(cooldown)+' s',dps:fmt(damage*(read('hit')/100)/cooldown),
      denied:fmt(read('duration')*read('enemy'))};
  },
  economy(panel, read) {
    const growth = read('growth'), offset = read('comeback');
    const intervals = Array.from({length:9},(_,i)=>i);
    const without = intervals.map(i=>100*(1+growth/100)**i);
    const withComeback = intervals.map(i=>100*(1+(growth-offset)/100)**i);
    draw(panel,intervals,valuesBy(['Lead growth','With comeback offset'],[without,withComeback]),
      {baseline:100,labels:[[0,'Start'],[4,'Interval 4'],[8,'Interval 8']]});
    return {minutes:fmt(read('price')/read('income'))+' min', lead:fmt(without[8]), reduced:fmt(withComeback[8]),
      offset:'Net lead growth with comeback: '+fmt(growth-offset)+'% per interval.'};
  }
};

export function initMobaScaling(container) {
  for (const panel of container.querySelectorAll('[data-moba]')) {
    const form = panel.querySelector('form');
    const stats = [...panel.querySelectorAll('[data-stat]')];
    const sliders = [...form.querySelectorAll('input[type=range]')];
    const read = id => {
      const control = form.elements.namedItem(id);
      return control.type === 'range' ? control.valueAsNumber : control.value;
    };
    function render() {
      for (const input of sliders) panel.querySelector(`[data-display="${input.name}"]`).textContent = fmt(input.valueAsNumber)+input.dataset.unit;
      const results = models[panel.dataset.moba](panel,read);
      for (const stat of stats) {
        const value = String(results[stat.dataset.stat]);
        if (stat.textContent !== value) stat.textContent = value;
      }
    }
    form.addEventListener('input',render);
    form.addEventListener('change',event => {
      if (event.target.name === 'spell') form.elements.hit.value = cooldowns[read('spell')][2];
      render();
    });
    form.addEventListener('reset', () => requestAnimationFrame(render));
    render();
  }
}
