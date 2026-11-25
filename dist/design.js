import {publishedLibraryCollections} from './library-content.js';
import {librarySamples} from './library-samples.js';
import {fullLibrarySections} from './library-article-index.js';
import {playerTypeArticles} from './design-player-types.js';
import {multiplayerBalance} from './design-multiplayer-balance.js';
import {liveOps} from './design-live-ops.js';
import {matsuno} from './design-matsuno.js';
import {matsunoMethod} from './design-matsuno-method.js';
import {mobaScaling} from './design-moba-scaling.js';
import {diminishReturns} from './design-diminish-returns.js';
import {yomi} from './design-yomi.js';
import {mobaPanels} from './moba-scaling-demos.js';
import {gameplaySystems as existingGameplaySystems} from './candlesan.js';
import {renderMatsunoBody} from './design-matsuno-interactions.js';
import {shuffleBagDemo} from './shufflebag-demo.js';
import {lootTableDemo} from './loot-table-demo.js';
import {armorDemo} from './armor-demo.js';
import {armorSurvivalDemo} from './armor-survival-demo.js';
import {gameFeelDemo} from './game-feel-demo.js';
import {awangProgression, awangProgressionDemo} from './design-awang-progression.js';

const gameplaySystems = [yomi, awangProgression, ...existingGameplaySystems, mobaScaling, diminishReturns];
const additionalDesignArticles = [matsuno, matsunoMethod, multiplayerBalance, liveOps];
export const designArticles = [...playerTypeArticles, ...gameplaySystems, ...additionalDesignArticles];
const fullArticleSlugs = new Set(Object.keys(publishedLibraryCollections).flatMap(key => fullLibrarySections[key] ?? []));

const escape=text=>String(text??'').replace(/[&<>"']/g,char=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[char]));

function renderFigure({src, original, alt, caption, width = 1400, height = 788}) {
  return `<figure class="design-slide">
    <a href="${escape(original || src)}" target="_blank" rel="noopener noreferrer" aria-label="Open image full size. ${escape(alt)}">
      <img src="${escape(src)}" alt="${escape(alt)}" width="${width}" height="${height}"${height > width ? ' data-portrait' : ''} loading="lazy" decoding="async">
    </a>
    ${caption ? `<figcaption>${escape(caption)}</figcaption>` : ''}
  </figure>`;
}

const libraryRoot = '#/solo/library';
const collectionLink = collection => collection === 'design' ? libraryRoot : `${libraryRoot}/${collection}`;
const articleLink = (collection, slug) => `${collectionLink(collection)}/${encodeURIComponent(slug)}`;
const collections = {
  design: {title: 'Design', groups: [
    {title: 'Player types & motivation', featured: true, entries: playerTypeArticles},
    {title: 'Gameplay Systems', entries: gameplaySystems},
    {title: 'Design articles', entries: additionalDesignArticles}
  ]},
  ...publishedLibraryCollections
};

export const libraryEntryCount = Object.values(collections).reduce((count, {groups}) =>
  count + groups.reduce((total, {entries}) => total + entries.length, 0), 0);

function libraryTabs(active) {
  return `<nav class="library-sections" aria-label="Library sections">
    ${Object.entries(collections).map(([key, {title}]) =>
      `<a href="${collectionLink(key)}"${active === key ? ' aria-current="page"' : ''}>${escape(title)}</a>`).join('')}
  </nav>`;
}

function libraryCard(collection, article, grouped) {
  const cover = article.cover ?? librarySamples[article.slug]?.src
    ?? article.sections?.find(section => section.figures?.length)?.figures[0].src;
  const heading = grouped ? 'h3' : 'h2';
  return `<li>
    <a href="${articleLink(collection, article.slug)}">
      ${cover ? `<img class="design-card-preview" src="${escape(cover)}" alt="" loading="lazy" decoding="async">` : ''}
      <div class="design-card-copy">
        <${heading}>${escape(article.title)}</${heading}>
        <p>${escape(article.summary)}</p>
      </div>
    </a>
  </li>`;
}

function collectionIndex(key, {title, groups}) {
  return `<div class="solo-page-heading"><h1>${escape(title)}</h1></div>
    ${groups.map(group => {
      const simulations = [];
      const articles = [];
      for (const article of group.entries) {
        (article.sections?.some(section => section.demo) ? simulations : articles).push(article);
      }
      const cards = (simulations.length ? `<ul class="design-articles design-simulation-cards" aria-label="Interactive simulations">${simulations.map(article => libraryCard(key, article, Boolean(group.title))).join('')}</ul>` : '')
        + (articles.length ? `<ul class="design-articles">${articles.map(article => libraryCard(key, article, Boolean(group.title))).join('')}</ul>` : '');
      return group.title ? `<section class="library-group${group.featured ? ' library-featured' : ''}"><h2>${escape(group.title)}</h2>${cards}</section>` : cards;
    }).join('')}`;
}

export function libraryPage(sectionOrSlug, entrySlug) {
  const isCollection = Object.hasOwn(collections, sectionOrSlug);
  const key = isCollection ? sectionOrSlug : 'design';
  const slug = isCollection ? entrySlug : sectionOrSlug;
  const collection = collections[key];
  const article = slug ? collection.groups.flatMap(group => group.entries).find(article => article.slug === slug) : null;
  const content = slug ? renderArticle(article, collectionLink(key)) : collectionIndex(key, collection);
  return libraryTabs(key) + content;
}

function renderArticle(article, backLink) {
  if (!article) return `<div class="solo-page-heading"><h1>Article not found</h1><a class="text-link" href="${backLink}">Back to library</a></div>`;
  const sample = librarySamples[article.slug];
  return `<article class="design-reading">
    <a class="breadcrumb" href="${backLink}">Back to library</a>
    <h1>${escape(article.title)}</h1>
    ${fullArticleSlugs.has(article.slug)
      ? `<section class="source-reading" data-library-article="${escape(article.slug)}" aria-busy="true"><p role="status">Loading article…</p></section>`
      : article.body ? renderMatsunoBody(article) : renderArticleSummary(article, sample)}
  </article>`;
}

function renderDesignTable({caption, columns, rows}) {
  const cell = value => escape(typeof value === 'number' && value > 0 ? `+${value}` : value);
  return `<div class="design-table" role="region" aria-label="${escape(caption)}" tabindex="0">
    <table>
      <caption>${escape(caption)}</caption>
      <thead><tr>${columns.map(label => `<th scope="col">${escape(label)}</th>`).join('')}</tr></thead>
      <tbody>${rows.map(([label, ...values]) => `<tr><th scope="row">${escape(label)}</th>${values.map(value => `<td>${cell(value)}</td>`).join('')}</tr>`).join('')}</tbody>
    </table>
  </div>`;
}

function renderArticleSummary(article, sample) {
  return `<p class="design-intro">${escape(article.summary)}</p>
    ${article.download ? `<p class="design-intro"><a class="button primary" href="${escape(article.download.src)}" download>${escape(article.download.label)}</a></p>` : ''}
    ${sample ? `<div class="library-sample">${renderFigure(sample)}</div>` : ''}
    ${article.sections.map(section => `<section>
      <h2>${escape(section.heading)}</h2>
      ${(section.paragraphs || []).map(p => `<p>${escape(p)}</p>`).join('')}
      ${section.bullets?.length ? `<ul>${section.bullets.map(p => `<li>${escape(p)}</li>`).join('')}</ul>` : ''}
      ${section.steps?.length ? `<ol${section.start ? ` start="${escape(section.start)}"` : ''}>${section.steps.map(p => `<li>${escape(p)}</li>`).join('')}</ol>` : ''}
      ${section.table ? renderDesignTable(section.table) : ''}
      ${section.figures?.length ? `<div class="design-slides">${section.figures.map(renderFigure).join('')}</div>` : ''}
      ${section.references?.map(({label, href}) =>
        `<p><a class="design-reference" href="${escape(href)}">${escape(label)}</a></p>`).join('') ?? ''}
      ${section.demo === 'shuffle-bag' ? shuffleBagDemo() : ''}
      ${section.demo === 'loot-table' ? lootTableDemo() : ''}
      ${section.demo === 'armor' ? armorDemo() : ''}
      ${section.demo === 'armor-survival' ? armorSurvivalDemo() : ''}
      ${section.demo === 'game-feel' ? gameFeelDemo() : ''}
      ${section.demo === 'awang-progression' ? awangProgressionDemo() : ''}
      ${mobaPanels[section.demo] ?? ''}
    </section>`).join('')}`;
}

export async function loadLibraryArticle(container) {
  const article = container.querySelector('[data-library-article]');
  if (!article) return;
  const {libraryArticle: slug} = article.dataset;
  if (!fullArticleSlugs.has(slug)) return;
  try {
    const {body} = await import(`./library-articles/${slug}.js`);
    if (article.isConnected) article.innerHTML = body;
  } catch (error) {
    if (article.isConnected) article.textContent = 'The article could not load. Refresh the page to try again.';
    console.error('Library article unavailable', error);
  } finally {
    article.removeAttribute('aria-busy');
  }
}
