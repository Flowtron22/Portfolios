import {libraryEntryCount,libraryPage,loadLibraryArticle} from './design.js';
import {artworks} from './art.js';
import {artCards,artViewer,initArtViewer} from './art-gallery.js';
import {pandora} from './pandora.js';
const projects=[
 pandora,
 {
  id: 'maut', name: 'MAUT', type: 'Game concept', image: 'maut.webp',
  imageAlt: 'The Death Dealer stands before towering stone figures in a misty forest',
  imageWidth: 1261, imageHeight: 862,
  intro: 'A Death Dealer hunts creatures from folklore using dark magic and the spirits they summon.',
  description: 'MAUT is an early gameplay concept exploring how spirit summoning and dark magic could shape the Death Dealer’s hunts.',
  status: 'Early concept', contribution: [],
  gallery: [{
    image: 'maut-overhead.webp', width: 1261, height: 862,
    alt: 'Overhead view of the Death Dealer in a misty forest clearing',
    caption: 'Overhead forest view'
  }]
 },
 {id:'police-n-thief',name:'Police N Thief',type:'Multiplayer party game',image:'police-n-thief.jpg',url:'https://police-n-thief.vercel.app/',intro:'An asymmetric multiplayer chase with police, thieves, tools and team rescues.',focus:'Gameplay · AI · Multiplayer · UI',description:'A solo-developed party-game prototype in which police pursue thieves while thieves steal and rescue captured teammates. Distinct roles and tools give each team different ways to pursue, escape and coordinate rescues.',contribution:['Creative direction and gameplay rules','Player controls, AI behaviour and interface design','Online and local multiplayer','Testing and playable-build delivery'],tech:'Three.js'},
 {id:'combat-patrol',name:'Combat Patrol',type:'Browser game',image:'combat-patrol.jpg',url:'https://combatpatrol.vercel.app/',intro:'A science-fiction game for the browser.',description:'A personal game project with a dark science-fiction setting. The public build includes a new-game flow, a resume option, settings and credits.',contribution:[]},
 {id:'potionpendium',name:'Potionpendium',type:'Potion puzzle',image:'potionpendium.jpg',url:'https://potionpendium.vercel.app/',intro:'A potion puzzle with gems, bottle queues and mana abilities.',focus:'Puzzle systems · Interaction · Progression',description:'Plan around bottle capacities, blocked queues and a limited brewing shelf. Mana abilities let players clear or rearrange gems. Daily challenges and a journey mode provide different ways to play.',contribution:['Gem interactions, bottle queues and mana spells','Mastery progression and daily challenges']},
 {id:'quantum-loom',name:'QuantumLoom',type:'Circuit puzzle',image:'quantum-loom.jpg',url:'https://quantum-loom.vercel.app/',intro:'A circuit puzzle with visual strand routing and quantum-state challenges.',focus:'Puzzle systems · Visualization · Interaction',description:'Arrange circuit gates to match a target signature. Loom Mode uses visual strands to introduce routing, while Quantum Mode works with state vectors.',contribution:['Visual circuit presentation and gate interactions','Loom Mode and Quantum Mode']},
 {id:'codex-imperium',name:'Codex Imperium',type:'Tabletop tool',image:'codex-imperium.jpg',url:'https://codex-imperium.vercel.app/',launch:'Open calculator',intro:'A tabletop combat calculator for testing unit matchups and dice odds.',description:'Choose two units, configure their attacks, and roll a single engagement or run repeat simulations to compare outcomes.',contribution:[]},
 {id:'my-watt',name:'My Watt',type:'Energy simulator',image:'my-watt.jpg',url:'https://my-watt.vercel.app/',launch:'Open simulator',intro:'A household electricity simulator for Peninsular Malaysia.',description:'Set appliance schedules, simulate a billing cycle, and compare how different household routines affect estimated energy use and costs.',contribution:[]}
];
const experience=[
 {
  company: 'Ureka Games',
  roles: [{
    title: 'Founder',
    summary: 'I founded Ureka Games as an independent studio for hands-on game development. I design and build playable prototypes to find which mechanics are worth building a game around.',
    projects: []
  }]
},
 {company:'Todak Studios',roles:[
  {period:'2025–Present',title:'Producer / Project Manager',summary:'Coordinate multidisciplinary production involving 40–45 employees. Manage task visibility, resource allocation, milestone forecasting and delivery-risk escalation. Facilitate communication across technical, creative and stakeholder teams; support candidate reviews, voice auditions and structured QA playtests.',projects:[]},
  {period:'Apr 2022–2024',title:'Creative Director',summary:'Led creative direction across narrative, world-building, visual development, and audio. Set art briefs and visual standards and guided the team through reviews and feedback.',responsibilities:["Created the Game Design Document (GDD) framework to structure the team’s design decisions.","Designed the Live Ops structure for online games.","Advised on game and level design, led quality-control reviews, and gave feedback to refine core gameplay mechanics.","Taught game designers, 3D artists, and concept artists design theory, best practices, and practical problem-solving."],projects:[['Mastra Battle Arena','Shaped the narrative and game world, defined the audio style, and guided visual identity, early gameplay design, and hero mechanics.'],['Mastra Opening Trailer','Visual storytelling, shot composition, camera framing, cinematic pacing and editing choices.']]}
 ]},
 {company:'Virtuos Kuala Lumpur',roles:[{period:'Mar 2021–Apr 2022',title:'3D Artist',summary:'Contributed 3D assets to commercial co-development projects.',projects:[['Medal of Honor: Above and Beyond','3D asset production and optimization for VR production requirements.'],['CrossFire HD','Commercial game asset production.']]}]},
 {company:'Studio Kamii',roles:[{period:'Jan 2018–Mar 2021',title:'Technical Art Director',summary:'Worked with the Game Director and concept artists on technical art and asset production.',projects:[['ToGather:Island','Technical art direction and 3D asset production. Released on Steam.'],['NevaLogik','Technical art and asset production.']]}]},
 {company:'Animonsta Studios',roles:[{period:'Oct 2014–Dec 2017',title:'3D Environment Artist',summary:'Created environment assets for feature-film and television animation production.',projects:[['BoBoiBoy: The Movie','Environment art, with VFX and compositing contributions.'],['BoBoiBoy Galaxy','3D environment assets for the television series.']]}]},
 {company:'Anifora Multimedia',roles:[{period:'2013–2014',title:'3D Animator',summary:'',projects:[['HadiHuda','3D animation for the educational series.']]}]},
 {company:'E-One Studio / Quark Energy System',roles:[{period:'2009–2013',title:'3D Artist',summary:'',projects:[['Hoodwink','Environment asset creation and animation.']]}]},
 {company:'Les’ Copaque',roles:[{period:'2009',title:'Compositor',summary:'',projects:[['Upin & Ipin','Colour correction and quality checking.']]}]}
];
const main=document.querySelector('main');
const button=(href,label,primary=false)=>`<a ${href.endsWith('.pdf')?'download':''} class="button ${primary?'primary':''}" href="${href}">${label}</a>`;
const external=(url,label)=>`<a class="button primary" href="${url}" target="_blank" rel="noopener noreferrer">${label}</a>`;
const projectImage = (p, attributes) => `<img src="assets/${p.image}" alt="${p.imageAlt || `${p.name} browser screenshot`}"${p.imageWidth ? ` width="${p.imageWidth}" height="${p.imageHeight}"` : ''} ${attributes}>`;
const projectFigure = ({image, width, height, alt, caption}, className = '') => `<figure${className ? ` class="${className}"` : ''}>
  <a href="assets/${image}" target="_blank" rel="noopener" aria-label="View ${caption} full size"><img src="assets/${image}" width="${width}" height="${height}" alt="${alt}" loading="lazy"></a>
  <figcaption>${caption}</figcaption>
</figure>`;
const card=p=>`<a class="project-card" href="#/project/${p.id}"><div class="thumb">${projectImage(p, 'loading="lazy"')}<span>${p.type}</span></div><div class="card-top"><h2>${p.name}</h2><span>View project</span></div><p>${p.intro}</p></a>`;
const heading=(label,title,text)=>`<div class="page-head">${label?'<span class="eyebrow">'+label+'</span>':''}<h1>${title}</h1><p>${text}</p></div>`;
const projectCredits=items=>items.length?'<ul class="project-credits">'+items.map(([title,credit])=>'<li><strong>'+title+'</strong> — '+credit+'</li>').join('')+'</ul>':'';
const roleDetails=roles=>roles.map(r=>'<section class="company-role">'+(r.period?'<time>'+r.period+'</time>':'')+'<h3>'+r.title+'</h3>'+(r.summary?'<p>'+r.summary+'</p>':'')+(r.responsibilities?.length?'<ul class="role-responsibilities">'+r.responsibilities.map(item=>'<li>'+item+'</li>').join('')+'</ul>':'')+projectCredits(r.projects)+'</section>').join('');
const exp=()=>experience.map(c=>'<article class="experience company-experience"><h2>'+c.company+'</h2>'+roleDetails(c.roles)+'</article>').join('');
function home(){return `<section class="hero"><div class="hero-copy"><div class="hero-identity"><img src="assets/ahmad-fadzil.png" alt="Portrait of Ahmad Fadzil" width="200" height="200" fetchpriority="high" decoding="async"></div><h1><span class="hero-desktop-title">Creative <br><em>direction &</em> <br><em>development.</em></span><span class="hero-mobile-title">Design <em>Direction</em> <em>Development</em></span></h1><p>I develop gameplay concepts, direct visual production and coordinate multidisciplinary teams.</p></div><div class="scene-shell cube-shell" id="scene" role="region" aria-label="Portfolio navigation"><nav class="cube-fallback" aria-label="Portfolio sections"><a class="button" href="#/solo/art">Art</a><a class="button" href="#/solo/games">Games</a><a class="button" href="#/solo/library">Library</a><a class="button" href="#/cv">CV</a><a class="button" href="#/contact">Contact</a></nav></div></section>
 <section class="section"><div class="section-heading"><div><span class="eyebrow">Background</span><h2>Experience</h2></div><a class="text-link" href="#/cv">Read my experience</a></div><div class="leadership"><p>I founded Ureka Games to develop independent games and build playable prototypes. At Todak Studios, I set creative direction for Mastra Battle Arena before moving into production management. Earlier roles at Virtuos, Studio Kamii and Animonsta developed my experience in technical art and asset production.</p><div class="principles"><div><h3>Creative direction</h3><p>Narrative, world-building, visual direction, and audio style for Mastra Battle Arena, plus hands-on Live Ops design for online games.</p></div><div><h3>Technical art</h3><p>I led technical art direction at Todak Studios and Studio Kamii and worked in commercial co-development at Virtuos. I set performance benchmarks and technical limits for target platforms and guide art and engineering teams in meeting them.</p></div><div><h3>Production management</h3><p>I plan milestones, allocate resources, track delivery risks, and organize structured playtests. I coordinate deliverables for the open beta build, monthly events, and exhibitions.</p></div></div></div><div class="credit-line"><span>Ureka Games</span><span>Todak Studios</span><span>Virtuos Kuala Lumpur</span><span>Studio Kamii</span><span>Animonsta</span></div></section>
 <section class="section"><div class="section-heading"><h2>Featured Project</h2><a class="text-link" href="#/solo/games">Explore all projects</a></div><article class="featured"><a class="featured-image" href="#/project/${pandora.id}">${projectImage(pandora, 'loading="lazy"')}</a><div class="featured-copy"><div class="tags"><span class="tag">${pandora.type}</span><span class="tag">${pandora.status}</span></div><h3>${pandora.name}</h3><p>${pandora.intro}</p>${button('#/project/'+pandora.id,'Explore PANDORA')}</div></article></section>
 <section class="section cta"><div><h2>Discuss a project</h2><p>For creative direction, game development and production enquiries.</p></div>${button('#/contact','Contact me',true)}</section>`;}
function work(){return heading('Professional work','Work & experience.','Selected contributions across studio leadership, game development and animation production.')+'<div class="page-content">'+experience.map(c=>'<article class="work-row company-work"><div><h2>'+c.company+'</h2></div><div>'+roleDetails(c.roles)+'</div></article>').join('')+'<div class="actions">'+button('#/cv','View full CV',true)+'</div></div>';}
const isLibrary = section => section === 'library' || section === 'design';
function solo(section = 'art', subsection, slug) {
  const active = section === 'games' ? 'games' : isLibrary(section) ? 'library' : 'art';
  const pages = {
    art: {label: 'Art', title: 'Art', count: artworks.length},
    games: {label: 'Games', title: 'Solo Dev', count: projects.length, description: 'Game development R&D, playable prototypes, and interactive tools.'},
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
function project(id) {
  const p = projects.find(p => p.id === id);
  if (!p) return missing();
  const details = [
    ['Role', p.role || 'Solo developer'], ['Studio', p.studio], ['Status', p.status],
    ['Focus', p.focus], ['Technology', p.tech]
  ];
  const projectDetails = `<aside><h2>Project details</h2><dl>${details.filter(([, value]) => value).map(([label, value]) => `<dt>${label}</dt><dd>${value}</dd>`).join('')}</dl></aside>`;
  return `<article class="detail">
    <a class="breadcrumb" href="#/solo/games">All games</a>
    <div class="detail-top">
      <div><span class="eyebrow">${p.type}</span><h1>${p.name}</h1><p>${p.intro}</p></div>
      ${p.url ? `<div class="actions">${external(p.url, p.launch || 'Play in browser')}</div>` : ''}
    </div>
    ${projectImage(p, 'class="detail-image"')}
    <div class="detail-columns${p.poster ? ' detail-with-poster' : ''}">
      ${p.poster ? projectFigure(p.poster, 'project-poster') : projectDetails}
      <div><h2>Overview</h2><p>${p.description}</p>${p.contribution.length ? '<h3>My contribution</h3><ul>' + p.contribution.map(item => '<li>' + item + '</li>').join('') + '</ul>' : ''}${p.poster ? projectDetails : ''}</div>
    </div>
    ${p.videos ? `<section class="project-videos" aria-labelledby="project-videos-heading">
      <h2 id="project-videos-heading">Mechanic Test</h2>
      <div class="project-video-grid">${p.videos.map(({src, poster, title}) => `<figure>
        <video controls playsinline preload="none" width="1280" height="716" poster="assets/${poster}" aria-label="${title}">
          <source src="assets/${src}" type="video/mp4">
          <a href="assets/${src}">Open ${title}</a>
        </video>
        <figcaption>${title}</figcaption>
      </figure>`).join('')}</div>
    </section>` : ''}
    ${p.gallery ? `<section class="project-gallery" aria-label="Game artwork and prototype">${p.gallery.map(art => projectFigure(art)).join('')}</section>` : ''}
  </article>`;
}
function cv(){return heading('','Ahmad Fadzil','DESIGN . NARRATIVE . ART')+`<section class="page-content cv-layout"><aside class="cv-aside"><h2>Profile</h2><p>Creative director and producer with 17+ years of experience in games and animation, including technical art, commercial co-development and studio production.</p>${button('assets/Ahmad-Fadzil-CV.pdf','Download CV · PDF',true)}<button class="button" id="print-cv">Print web CV</button><p><a href="mailto:ahmadfadzil22@gmail.com">ahmadfadzil22@gmail.com</a></p><p><strong>Areas of practice</strong><br>Creative direction · Narrative direction · World-building · Audio direction · GDD frameworks · Game and level design · Live Ops design · Core gameplay mechanics · Design quality control · Team training · Prototyping · Technical art · Art briefs · Production planning · Multidisciplinary coordination · Recruitment · QA playtesting</p><p><a class="text-link" href="https://a-fadzil.vercel.app/">a-fadzil.vercel.app</a></p></aside><div>${exp()}<article class="experience"><h2>Independent projects</h2><p>Police N Thief, Combat Patrol, Potionpendium and QuantumLoom are available in the Projects gallery.</p><div class="actions" style="margin-top:20px">${button('#/solo/games','Explore projects')}</div></article></div></section>`;}
function contact(){return `<section class="contact"><h1>Contact</h1><p>For roles, collaborations and project enquiries, contact me by email.</p><a class="contact-email" href="mailto:ahmadfadzil22@gmail.com">ahmadfadzil22@gmail.com</a><div class="contact-links"><a class="text-link" href="assets/Ahmad-Fadzil-CV.pdf" download>Download CV</a><a class="text-link" href="#/solo/games">Games</a></div></section>`;}
function missing(){return `<section class="error"><span class="eyebrow">Page not found</span><h1>Page not found.</h1>${button('#/','Return to overview',true)}</section>`;}
let cleanup;
async function render(){cleanup?.();cleanup=null;const [route]=(location.hash.slice(1)||'/').split('?');const parts=route.split('/').filter(Boolean);const page=parts[0]||'home';main.innerHTML=({home,work,solo:()=>solo(parts[1],parts[2],parts[3]),cv,contact}[page]||(()=>page==='project'?project(parts[1]):missing()))();document.querySelectorAll('[data-nav]').forEach(a=>{if(a.dataset.nav===(page==='project'?'solo':page))a.setAttribute('aria-current','page');else a.removeAttribute('aria-current');});document.title=`${page==='home'?'Game Direction & Creative Leadership':page==='project'?(projects.find(p=>p.id===parts[1])?.name||'Project'):({work:'Work',solo:isLibrary(parts[1])?'Library':parts[1]==='games'?'Solo Dev':'Art',cv:'CV',contact:'Contact'}[page]||'Page not found')} — Ahmad Fadzil`;window.scrollTo(0,0);document.getElementById('print-cv')?.addEventListener('click',()=>window.print());
  if (page === 'solo') {
    cleanup = initArtViewer(main);
    void loadLibraryArticle(main);
  }
    if (page === 'home') {
    const host = document.getElementById('scene');
    try {
      const {createCubeDemo} = await import('./cube-menu.js');
      if (host?.isConnected) cleanup = createCubeDemo(host);
    } catch (error) {
      console.warn('3D scene unavailable', error);
    }
  }
}
document.querySelector('.mobile-menu').addEventListener('click', event => {
  if (location.hash !== '#/') return;
  event.preventDefault();
  window.scrollTo(0, 0);
});
document.querySelector('.skip').addEventListener('click',e=>{e.preventDefault();main.focus();main.scrollIntoView();});
window.addEventListener('hashchange',()=>{render();main.focus({preventScroll:true});});render();
