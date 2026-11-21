import {designDecks} from './design-decks.js';
import {designTopics} from './design-topics.js';

const mapSlides = 'assets/design/multiplayer-maps';
const mapSlide = (number, alt, caption) => ({src: `${mapSlides}/slide-${number}.jpg`, alt, caption});

export const designArticles = [
  {
    number: '21',
    slug: 'tips-for-building-multiplayer-maps',
    title: 'Tips for Building Multiplayer Maps',
    subject: 'Level Design',
    kind: 'Practical guide',
    author: 'Ahmad Fadzil',
    summary: 'How I would block out a multiplayer map and test its routes, spawns, sightlines and objectives before committing to the final art.',
    sections: [
      {
        heading: 'Start with the match you want to play',
        paragraphs: [
          'When I sketch a multiplayer map, I start with the first thirty seconds. Where do players spawn? What do they see? When can they first meet the other team? A rough blockout can answer these questions before I spend time on buildings or scenery.',
          'I write down the mode, team size, movement speed, traversal abilities, useful weapon ranges and respawn rules. Then I time routes with the actual player controller. Two routes that look equally long from above can play very differently if one involves a climb, a sharp turn or an exposed crossing.'
        ],
        figures: [mapSlide(5, 'Slide listing movement flow, landmarks and gameplay metrics', 'Define movement flow, landmarks and gameplay metrics before building out the map.')]
      },
      {
        heading: 'Make routes readable at full speed',
        paragraphs: [
          'Give the main route a clear destination and each alternate route a reason to exist. A short crossing might be exposed, while a longer side route breaks line of sight. Use a landmark players can recognise from multiple approaches and name in a callout. In a large map, roads and ridgelines can help players stay oriented between landmarks.',
          'Run the route while aiming. If the camera has to snap around a tight corner or the player keeps catching on a prop, adjust the turn or simplify the collision. Test stairs, doorways and transitions between heights with the controller and camera players will use.',
          'On Crash, three routes connect the team starts, and the crash site gives players a recognisable reference point. Try sketching the main routes on your own overhead plan, then walk them at ground level and see whether the landmarks are still easy to pick out.'
        ],
        figures: [
          mapSlide(14, 'Crash map with a scene screenshot and an overhead plan showing three routes in red, green and blue', 'Crash uses a central landmark and three routes between team starts.'),
          mapSlide(15, 'Crossfire street screenshot and overhead plan with three coloured paths', 'Compare Crossfire’s main street with its side routes.')
        ]
      },
      {
        heading: 'Balance arrival times and give spawns a way out',
        paragraphs: [
          'I treat the opening spawn and the respawn as separate design problems. Time each team’s approach to the first contested position, then compare the cover and sightlines they get there. The two sides can use different landmarks and geometry while giving each team a fair chance to contest the same space.',
          'For respawns, place candidates both on and off the main routes so the spawn system has options as the fight moves. Face players toward a useful route, while keeping their starting position out of direct enemy sightlines. Test what happens when a winning team pushes deep into the other side. A starting base needs particular protection if players keep returning there.'
        ],
        figures: [mapSlide(6, 'Slide on player start points, team bases and respawn rules', 'Plan team starts and respawn positions separately.')]
      },
      {
        heading: 'Test cover and vertical routes under fire',
        paragraphs: [
          'Check cover with the weapons and rules players will actually use. If the game supports bullet penetration, a plywood wall may hide a player without protecting them. Put standing or crouching cover where players need to break contact, then test how easily they can reach it under fire.',
          'A ladder can make sense in a floor plan and still play badly. If climbing puts the weapon away and the top is exposed, a defender can wait for every climber to appear in the same place. Check the approach, the climb and the exit. Add another route or reposition the landing if the defender has an uncontested shot.'
        ]
      },
      {
        heading: 'Adapt the layout to the mode',
        bullets: [
          'Arena. Keep players moving with connected routes and pickups that pull them through the map. A strong pickup can make a risky route worthwhile. Watch for dead ends that stop movement without offering any decision.',
          'Tactical. Three connected lanes are a useful starting point. Decide which fights should happen at close, medium and long range, then add flanks and cover accordingly. Give a strong sniper position an approach outside its main sightline so opponents have a way to challenge it.',
          'Objective-based. Trace a clear route from each start to the objective, then add secondary paths for rotations or retakes. For an escort route, test each stretch of the journey. Cover can help a team stay on the objective or give the opposing team a chance to contest it.',
          'Large-scale and battle royale. Place the major points of interest before detailing the spaces between them. Use landmarks that read from both the ground and the air. Add small outposts or terrain cover along exposed routes, then test what happens when players rotate between the same popular locations.',
          'Co-op PvE. Plan something for each player role to do in the encounter. A group of weaker enemies can occupy an area-damage build while a tougher target gives a precision player a job. Check that both jobs matter to the team.'
        ],
        figures: [
          mapSlide(8, 'The Longest Yard gameplay screenshot and an overhead view of its arena platforms', 'The Longest Yard shows how platforms and pickups support arena movement.'),
          mapSlide(24, 'Dust II screenshot beside an overhead map', 'Dust II lets you trace routes from team starts to the two bombsites.'),
          mapSlide(27, 'Several overhead and in-game views of the Gold Rush payload map', 'Gold Rush is an example of a moving objective through distinct spaces.'),
          mapSlide(30, 'Apex Legends overhead map with named locations', 'Apex Legends shows how named points of interest organise a large map.'),
          mapSlide(31, 'Call of Duty Mobile battle royale map with roads and named locations', 'Roads connect landmarks and outposts in Call of Duty: Mobile.'),
          mapSlide(35, 'Green Run in-game view and overhead scene showing traversal and hazards', 'Green Run provides a co-op example with traversal and combat in the same space.')
        ]
      },
      {
        heading: 'Run a blockout review',
        steps: [
          'Time both teams from spawn to first contact and to the objective. Check what each team can see and use for cover when it arrives.',
          'Watch a first-time player navigate without giving directions. Note missed turns, unclear landmarks and routes they never try.',
          'Play from the strongest position on the map, then switch sides and try to dislodge it. Check how much of the map it controls and whether players can approach it safely.',
          'Repeat with a team pinned near spawn and with the objective under pressure. Change one route, spawn or piece of cover at a time and test the same situation again.'
        ]
      }
    ]
  },
  ...designTopics,
];

const escape=text=>String(text??'').replace(/[&<>"']/g,char=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[char]));

function renderFigure({src, alt, caption}) {
  return `<figure class="design-slide">
    <a href="${escape(src)}" target="_blank" rel="noopener noreferrer" aria-label="Open slide full size. ${escape(alt)}">
      <img src="${escape(src)}" alt="${escape(alt)}" width="1400" height="788" loading="lazy" decoding="async">
    </a>
    ${caption ? `<figcaption>${escape(caption)}</figcaption>` : ''}
  </figure>`;
}

function renderPresentation({pdf, slides}) {
  return `<section class="design-presentation" aria-label="Presentation slides">
    <details>
      <summary>Browse slides <span>${slides.length}</span></summary>
      <ol class="design-deck-grid">
        ${slides.map(({thumbnail, title}, index) => `<li>
          <a href="${escape(pdf)}#page=${index + 1}" target="_blank" rel="noopener noreferrer" aria-label="Open slide ${index + 1} in PDF. ${escape(title)}">
            <img src="${escape(thumbnail)}" alt="" loading="lazy" decoding="async">
            <span>${String(index + 1).padStart(2, '0')}</span>
          </a>
        </li>`).join('')}
      </ol>
    </details>
    <a class="button" href="${escape(pdf)}" target="_blank" rel="noopener noreferrer">View full PDF</a>
  </section>`;
}

const articleLink = slug => `#/solo/library/${encodeURIComponent(slug)}`;
const mainSubject = article => article.librarySubject ?? 'Design';

function filterOptions(values) {
  return values.map(value => `<option value="${escape(value)}">${escape(value)}</option>`).join('');
}

function libraryCard(article) {
  return `<li data-library-card data-subject="${escape(mainSubject(article))}" data-format="${escape(article.kind)}">
    <a href="${articleLink(article.slug)}">
      <img class="design-card-preview" src="${escape(designDecks[article.number].slides[0].thumbnail)}" alt="" loading="lazy" decoding="async">
      <div class="design-card-copy">
        <span class="design-kind">Topic ${escape(article.number)} · ${escape(article.kind)}</span>
        <h4>${escape(article.title)}</h4>
        <p>${escape(article.summary)}</p>
      </div>
    </a>
  </li>`;
}

export function libraryIndex() {
  const subjects = [...new Set(designArticles.map(mainSubject))];
  const formats = [...new Set(designArticles.map(article => article.kind))].sort();
  const entries = [...designArticles].sort((a, b) => Number(a.number) - Number(b.number));

  return `<section class="design-index">
    <h1>Library</h1>
    <p class="design-intro">Case studies, guides and tutorials on design and production.</p>
    <div class="library-filters" role="group" aria-label="Filter library">
      <div class="library-field"><label for="library-subject">Subject</label>
        <select id="library-subject" name="subject"><option value="">All subjects</option>${filterOptions(subjects)}</select>
      </div>
      <div class="library-field"><label for="library-format">Format</label>
        <select id="library-format" name="format"><option value="">All formats</option>${filterOptions(formats)}</select>
      </div>
      <p class="library-count" role="status"></p>
    </div>
    <div class="library-results">
      ${subjects.map(subject => {
        const articles = entries.filter(article => mainSubject(article) === subject);
        const subtopics = [...new Set(articles.map(article => article.subject))];
        return `<section class="library-subject" data-library-group>
          <h2>${escape(subject)}</h2>
          ${subtopics.map(subtopic => `<div class="design-subject" data-library-group>
            ${subtopic === subject ? '' : `<h3>${escape(subtopic)}</h3>`}
            <ul class="design-articles">${articles.filter(article => article.subject === subtopic).map(libraryCard).join('')}</ul>
          </div>`).join('')}
        </section>`;
      }).join('')}
      <p class="design-empty" hidden>No entries match both filters.</p>
    </div>
  </section>`;
}

export function initLibraryFilters(root, query) {
  const filters = root.querySelector('.library-filters');
  if (!filters) return;

  const subject = filters.querySelector('[name="subject"]');
  const format = filters.querySelector('[name="format"]');
  const params = new URLSearchParams(query);
  for (const select of [subject, format]) {
    select.value = params.get(select.name) ?? '';
    if (select.selectedIndex === -1) select.selectedIndex = 0;
  }

  const cards = [...root.querySelectorAll('[data-library-card]')];
  const groups = root.querySelectorAll('[data-library-group]');
  const count = filters.querySelector('.library-count');
  const empty = root.querySelector('.design-empty');

  function applyFilters() {
    let matches = 0;
    for (const card of cards) {
      card.hidden = Boolean((subject.value && subject.value !== card.dataset.subject) ||
        (format.value && format.value !== card.dataset.format));
      if (!card.hidden) matches++;
    }
    for (const group of groups) group.hidden = !group.querySelector('[data-library-card]:not([hidden])');
    count.textContent = `${matches} ${matches === 1 ? 'entry' : 'entries'}`;
    empty.hidden = matches > 0;
  }

  filters.addEventListener('change', () => {
    applyFilters();
    const active = new URLSearchParams();
    for (const select of [subject, format]) {
      if (select.value) active.set(select.name, select.value);
    }
    history.replaceState(history.state, '', `#/solo/library${active.size ? `?${active}` : ''}`);
  });
  applyFilters();
}

export function designArticle(slug){
  const article = designArticles.find(a => a.slug === slug);
  if (!article) return '<section class="design-index"><h1>Article not found</h1><a class="text-link" href="#/solo/library">Back to library</a></section>';
  return `<article class="design-reading">
    <a class="breadcrumb" href="#/solo/library">Back to library</a>
    <span class="eyebrow">${escape(article.subject)} / Topic ${escape(article.number)} · ${escape(article.kind)}</span>
    <h1>${escape(article.title)}</h1>
    ${article.author ? `<p class="design-kind">By ${escape(article.author)}</p>` : ''}
    <p class="design-intro">${escape(article.summary)}</p>
    ${renderPresentation(designDecks[article.number])}
    ${article.sections.map(section => `<section>
      <h2>${escape(section.heading)}</h2>
      ${(section.paragraphs || []).map(p => `<p>${escape(p)}</p>`).join('')}
      ${section.bullets?.length ? `<ul>${section.bullets.map(p => `<li>${escape(p)}</li>`).join('')}</ul>` : ''}
      ${section.steps?.length ? `<ol${section.start ? ` start="${escape(section.start)}"` : ''}>${section.steps.map(p => `<li>${escape(p)}</li>`).join('')}</ol>` : ''}
      ${section.figures?.length ? `<div class="design-slides">${section.figures.map(renderFigure).join('')}</div>` : ''}
    </section>`).join('')}
  </article>`;
}
