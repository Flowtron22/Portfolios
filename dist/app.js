import {libraryEntryCount,libraryPage,loadLibraryArticle} from './design.js';
import {artworks} from './art.js';
import {artCards,artViewer,initArtViewer} from './art-gallery.js';
const projects=[
 {id:'police-n-thief',name:'Police N Thief',type:'Multiplayer party game',image:'police-n-thief.jpg',url:'https://police-n-thief.vercel.app/',intro:'An asymmetric multiplayer chase with police, thieves, tools and team rescues.',focus:'Gameplay · AI · Multiplayer · UI',description:'A solo-developed party-game prototype in which police pursue thieves while thieves steal and rescue captured teammates. Distinct roles and tools give each team different ways to pursue, escape and coordinate rescues.',contribution:['Creative direction and gameplay rules','Player controls, AI behaviour and interface design','Online and local multiplayer','Testing and playable-build delivery'],tech:'Three.js'},
 {id:'combat-patrol',name:'Combat Patrol',type:'Browser game',image:'combat-patrol.jpg',url:'https://combatpatrol.vercel.app/',intro:'A science-fiction game for the browser.',description:'A personal game project with a dark science-fiction setting. The public build includes a new-game flow, a resume option, settings and credits.',contribution:[]},
 {id:'potionpendium',name:'Potionpendium',type:'Potion puzzle',image:'potionpendium.jpg',url:'https://potionpendium.vercel.app/',intro:'A potion puzzle with gems, bottle queues and mana abilities.',focus:'Puzzle systems · Interaction · Progression',description:'Plan around bottle capacities, blocked queues and a limited brewing shelf. Mana abilities let players clear or rearrange gems. Daily challenges and a journey mode provide different ways to play.',contribution:['Gem interactions, bottle queues and mana spells','Mastery progression and daily challenges']},
 {id:'quantum-loom',name:'QuantumLoom',type:'Circuit puzzle',image:'quantum-loom.jpg',url:'https://quantum-loom.vercel.app/',intro:'A circuit puzzle with visual strand routing and quantum-state challenges.',focus:'Puzzle systems · Visualization · Interaction',description:'Arrange circuit gates to match a target signature. Loom Mode uses visual strands to introduce routing, while Quantum Mode works with state vectors.',contribution:['Visual circuit presentation and gate interactions','Loom Mode and Quantum Mode']}
];
const experience=[
 {company:'Todak Studios',roles:[
  {period:'2025–Present',title:'Producer / Project Manager',summary:'Coordinate multidisciplinary production involving 40–45 employees. Manage task visibility, resource allocation, milestone forecasting and delivery-risk escalation. Facilitate communication across technical, creative and stakeholder teams; support candidate reviews, voice auditions and structured QA playtests.',projects:[]},
  {period:'Apr 2022–2024',title:'Creative Director',summary:'Established creative direction, art briefs and visual standards, aligning artists and designers through reviews, feedback and technical guidance.',projects:[['Mastra Battle Arena','Creative direction, visual identity, world-building, early gameplay design and individual hero mechanics.'],['Mastra Opening Trailer','Visual storytelling, shot composition, camera framing, cinematic pacing and editing choices.']]}
 ]},
 {company:'Virtuos Kuala Lumpur',roles:[{period:'Mar 2021–Apr 2022',title:'3D Artist',summary:'Contributed 3D assets to commercial co-development projects.',projects:[['Medal of Honor: Above and Beyond','3D asset production and optimization for VR production requirements.'],['CrossFire HD','Commercial game asset production.']]}]},
 {company:'Studio Kamii',roles:[{period:'Jan 2018–Mar 2021',title:'Technical Art Director',summary:'Worked with the Game Director and concept artists on technical art and asset production.',projects:[['ToGather:Island','Technical art direction and 3D asset production. Released on Steam.'],['NevaLogik','Technical art and asset production.']]}]},
 {company:'Animonsta Studios',roles:[{period:'Oct 2014–Dec 2017',title:'3D Environment Artist',summary:'Created environment assets for feature-film and television animation production.',projects:[['BoBoiBoy: The Movie','Environment art, with VFX and compositing contributions.'],['BoBoiBoy Galaxy','3D environment assets for the television series.']]}]},
 {company:'Anifora Multimedia',roles:[{period:'2013–2014',title:'3D Animator',summary:'',projects:[['HadiHuda','3D animation for the educational series.']]}]},
 {company:'E-One Studio / Quark Energy System',roles:[{period:'2009–2013',title:'3D Artist',summary:'',projects:[['Hoodwink','Environment asset creation and animation.']]}]},
 {company:'Les’ Copaque',roles:[{period:'2009',title:'Compositor',summary:'',projects:[['Upin & Ipin','Colour correction and quality checking.']]}]}
];
const urekaGames = {
  company: 'Ureka Games',
  roles: [{
    title: 'Founder',
    summary: 'I founded Ureka Games as an independent studio for hands-on game development. I design and build playable prototypes to find which mechanics are worth building a game around.',
    projects: []
  }]
};
const main=document.querySelector('main');
const button=(href,label,primary=false)=>`<a ${href.endsWith('.pdf')?'download':''} class="button ${primary?'primary':''}" href="${href}">${label}</a>`;
const external=(url,label)=>`<a class="button primary" href="${url}" target="_blank" rel="noopener noreferrer">${label}</a>`;
const card=p=>`<a class="project-card" href="#/project/${p.id}"><div class="thumb"><img src="assets/${p.image}" alt="${p.name} live browser screenshot" loading="lazy"><span>${p.type}</span></div><div class="card-top"><h2>${p.name}</h2><span>View project</span></div><p>${p.intro}</p></a>`;
const heading=(label,title,text)=>`<div class="page-head">${label?'<span class="eyebrow">'+label+'</span>':''}<h1>${title}</h1><p>${text}</p></div>`;
const projectCredits=items=>items.length?'<ul class="project-credits">'+items.map(([title,credit])=>'<li><strong>'+title+'</strong> — '+credit+'</li>').join('')+'</ul>':'';
const roleDetails=roles=>roles.map(r=>'<section class="company-role">'+(r.period?'<time>'+r.period+'</time>':'')+'<h3>'+r.title+'</h3>'+(r.summary?'<p>'+r.summary+'</p>':'')+projectCredits(r.projects)+'</section>').join('');
const exp=()=>experience.map(c=>'<article class="experience company-experience"><h2>'+c.company+'</h2>'+roleDetails(c.roles)+'</article>').join('');
function home(){return `<section class="hero"><div class="hero-copy"><div class="hero-identity"><img src="assets/ahmad-fadzil.png" alt="Portrait of Ahmad Fadzil" width="200" height="200" fetchpriority="high" decoding="async"><div><p class="hero-name">Ahmad Fadzil</p></div></div><h1>Creative <br><em>direction &</em> <br><em>development.</em></h1><p>I develop gameplay concepts, direct visual production and coordinate multidisciplinary teams.</p><div class="actions">${button('#/work','Explore work',true)}${button('#/solo/games','Play solo projects')}</div></div><div class="scene-shell cube-shell" id="scene" role="region" aria-label="Playable Rubik’s cube"></div></section>
 <section class="section"><div class="section-heading"><div><span class="eyebrow">Solo development</span><h2>Featured game</h2></div><a class="text-link" href="#/solo/games">Explore all solo projects</a></div><article class="featured"><a class="featured-image" href="#/project/police-n-thief"><img src="assets/police-n-thief.jpg" alt="Police N Thief colourful Three.js character and game menu"></a><div class="featured-copy"><div class="tags"><span class="tag">Solo development</span><span class="tag">Multiplayer</span><span class="tag">Three.js</span></div><h3>Police N Thief</h3><p>A police-and-thieves party game. I designed and developed the rules, controls, AI, interface and multiplayer systems.</p>${button('#/project/police-n-thief','Explore the project')}</div></article></section>
 <section class="section"><div class="section-heading"><div><span class="eyebrow">Background</span><h2>Experience</h2></div><a class="text-link" href="#/cv">Read my experience</a></div><div class="leadership"><p>At Todak Studios, I set creative direction for Mastra Battle Arena before moving into production management. Earlier roles at Virtuos, Studio Kamii and Animonsta developed my experience in technical art and asset production.</p><div class="principles"><div><h3>Creative direction</h3><p>Art briefs, world-building and early hero mechanics for Mastra Battle Arena.</p></div><div><h3>Technical art</h3><p>Technical art direction at Studio Kamii and commercial co-development experience at Virtuos.</p></div><div><h3>Production management</h3><p>Milestone planning, resource allocation, delivery risks and structured playtesting.</p></div></div></div><div class="credit-line"><span>Todak Studios</span><span>Virtuos Kuala Lumpur</span><span>Studio Kamii</span><span>Animonsta</span></div></section>
 <section class="section cta"><div><h2>Discuss a project</h2><p>For creative direction, game development and production enquiries.</p></div>${button('#/contact','Contact me',true)}</section>`;}
function work(){return heading('Professional work','Work & experience.','Selected contributions across studio leadership, game development and animation production.')+'<div class="page-content">'+[experience[0], urekaGames, ...experience.slice(1)].map(c=>'<article class="work-row company-work"><div><h2>'+c.company+'</h2></div><div>'+roleDetails(c.roles)+'</div></article>').join('')+'<div class="actions">'+button('https://www.artstation.com/z_e_a_l','Explore ArtStation',true)+button('#/cv','View full CV')+'</div></div>';}
const isLibrary = section => section === 'library' || section === 'design';
function solo(section = 'art', subsection, slug) {
  const active = section === 'games' ? 'games' : isLibrary(section) ? 'library' : 'art';
  const pages = {
    art: {label: 'Art', title: 'Art', count: artworks.length},
    games: {label: 'Games', title: 'Solo Dev', count: projects.length, description: 'Game development R&D and playable prototypes.'},
    library: {label: 'Library', count: libraryEntryCount}
  };
  const tabs = `<nav class="solo-sections" aria-label="Solo subsections">
    ${Object.entries(pages).map(([key, {label, count}]) =>
      `<a href="#/solo/${key}"${active === key ? ' aria-current="page"' : ''}>${label} <span>${count}</span></a>`).join('')}
  </nav>`;

  if (active === 'library') {
    return `<section class="page-content solo-page">${tabs}${libraryPage(subsection, slug)}</section>`;
  }

  const {title, description} = pages[active];
  const content = {
    art: () => `<div class="art-grid">${artCards()}</div>${artViewer()}`,
    games: () => `<div class="grid">${projects.map(card).join('')}</div>`
  };
  return `<section class="page-content solo-page">
    ${tabs}
    <div class="solo-page-heading">
      <h1>${title}</h1>
      ${description ? `<p>${description}</p>` : ''}
    </div>
    ${content[active]()}
  </section>`;
}
function project(id){const p=projects.find(x=>x.id===id);if(!p)return missing();return `<article class="detail"><a class="breadcrumb" href="#/solo/games">All games</a><div class="detail-top"><div><span class="eyebrow">${p.type}</span><h1>${p.name}</h1><p>${p.intro}</p></div><div class="actions">${external(p.url,'Play in browser')}</div></div><img class="detail-image" src="assets/${p.image}" alt="${p.name} browser screenshot"><div class="detail-columns"><aside><h2>Project details</h2><dl><dt>Role</dt><dd>Solo developer</dd>${p.focus?'<dt>Focus</dt><dd>'+p.focus+'</dd>':''}${p.tech?'<dt>Technology</dt><dd>'+p.tech+'</dd>':''}</dl></aside><div><h2>Overview</h2><p>${p.description}</p>${p.contribution.length?'<h3>My contribution</h3><ul>'+p.contribution.map(x=>'<li>'+x+'</li>').join('')+'</ul>':''}</div></div></article>`;}
function cv(){return heading('','Ahmad Fadzil','Ahmad Fadzil Bin Ahmad Nasharuddin')+`<section class="page-content cv-layout"><aside class="cv-aside"><h2>Profile</h2><p>Creative director and producer with 17+ years of experience in games and animation, including technical art, commercial co-development and studio production.</p>${button('assets/Ahmad-Fadzil-CV.pdf','Download CV · PDF',true)}<button class="button" id="print-cv">Print web CV</button><p><a href="mailto:ahmadfadzil22@gmail.com">ahmadfadzil22@gmail.com</a></p><p><strong>Areas of practice</strong><br>Creative direction · Gameplay concepts · Prototyping · Technical art · Art briefs · Production planning · Multidisciplinary coordination · Recruitment · QA playtesting</p><p><a class="text-link" href="https://www.artstation.com/z_e_a_l" target="_blank" rel="noopener noreferrer">ArtStation portfolio</a></p></aside><div>${exp()}<article class="experience"><h2>Independent projects</h2><p>Police N Thief, Combat Patrol, Potionpendium and QuantumLoom are available in the solo-project gallery.</p><div class="actions" style="margin-top:20px">${button('#/solo/games','Explore solo projects')}</div></article></div></section>`;}
function contact(){return `<section class="contact"><h1>Contact</h1><p>For roles, collaborations and project enquiries, contact me by email.</p><a class="contact-email" href="mailto:ahmadfadzil22@gmail.com">ahmadfadzil22@gmail.com</a><div class="contact-links"><a class="text-link" href="https://www.artstation.com/z_e_a_l" target="_blank" rel="noopener noreferrer">ArtStation</a><a class="text-link" href="assets/Ahmad-Fadzil-CV.pdf" download>Download CV</a><a class="text-link" href="#/solo/games">Games</a></div></section>`;}
function missing(){return `<section class="error"><span class="eyebrow">Page not found</span><h1>Page not found.</h1>${button('#/','Return to overview',true)}</section>`;}
let cleanup;
async function render(){cleanup?.();cleanup=null;const [route]=(location.hash.slice(1)||'/').split('?');const parts=route.split('/').filter(Boolean);const page=parts[0]||'home';main.innerHTML=({home,work,solo:()=>solo(parts[1],parts[2],parts[3]),cv,contact}[page]||(()=>page==='project'?project(parts[1]):missing()))();document.querySelectorAll('[data-nav]').forEach(a=>{if(a.dataset.nav===(page==='project'?'solo':page))a.setAttribute('aria-current','page');else a.removeAttribute('aria-current');});document.title=`${page==='home'?'Game Direction & Creative Leadership':page==='project'?(projects.find(p=>p.id===parts[1])?.name||'Project'):({work:'Work',solo:isLibrary(parts[1])?'Library':parts[1]==='games'?'Solo Dev':'Art',cv:'CV',contact:'Contact'}[page]||'Page not found')} — Ahmad Fadzil`;window.scrollTo(0,0);document.getElementById('print-cv')?.addEventListener('click',()=>window.print());
  if (page === 'solo') {
    cleanup = initArtViewer(main);
    void loadLibraryArticle(main);
  }
  if(page==='home'){try{const {createScene}=await import('./scene.js');if(document.getElementById('scene'))cleanup=createScene(document.getElementById('scene'));}catch(e){console.warn('3D scene unavailable',e);document.getElementById('motion')?.remove();}}}
const menuButton=document.getElementById('menu-toggle'),siteHeader=document.querySelector('header');
function closeMenu(){siteHeader.classList.remove('menu-open');menuButton.setAttribute('aria-expanded','false');menuButton.textContent='Menu';}
menuButton.addEventListener('click',()=>{const open=menuButton.getAttribute('aria-expanded')!=='true';siteHeader.classList.toggle('menu-open',open);menuButton.setAttribute('aria-expanded',String(open));menuButton.textContent=open?'Close':'Menu';});
document.getElementById('main-nav').addEventListener('click',event=>{if(event.target.closest('a'))closeMenu();});
siteHeader.addEventListener('keydown',event=>{if(event.key==='Escape'&&menuButton.getAttribute('aria-expanded')==='true'){closeMenu();menuButton.focus();}});
matchMedia('(min-width: 701px)').addEventListener('change',closeMenu);
document.querySelector('.skip').addEventListener('click',e=>{e.preventDefault();main.focus();main.scrollIntoView();});
window.addEventListener('hashchange',()=>{closeMenu();render();main.focus({preventScroll:true});});render();
