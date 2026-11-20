// Populate from the user's approved source documents when they are supplied.
// Each entry: {slug, title, subject, kind, summary, sections:[{heading, paragraphs?, bullets?, steps?}]}.
export const designArticles=[];

const escape=text=>String(text??'').replace(/[&<>"']/g,char=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[char]));

export function designIndex(){
 if(!designArticles.length)return '<section class="design-index"><h1>Design</h1><p class="design-intro">Articles, design documents, practical guides and tutorials.</p><p class="design-empty">No articles published yet.</p></section>';
 const subjects=[...new Set(designArticles.map(article=>article.subject))];
 return '<section class="design-index"><h1>Design</h1><p class="design-intro">Articles, design documents, practical guides and tutorials.</p>'+subjects.map(subject=>'<section class="design-subject"><h2>'+escape(subject)+'</h2><ul class="design-articles">'+designArticles.filter(a=>a.subject===subject).map(article=>'<li><a href="#/solo/design/'+encodeURIComponent(article.slug)+'"><span class="design-kind">'+escape(article.kind)+'</span><h3>'+escape(article.title)+'</h3><p>'+escape(article.summary)+'</p></a></li>').join('')+'</ul></section>').join('')+'</section>';
}

export function designArticle(slug){
 const article=designArticles.find(a=>a.slug===slug);if(!article)return '<section class="design-index"><h1>Article not found</h1><a class="text-link" href="#/solo/design">All design articles</a></section>';
 return '<article class="design-reading"><a class="breadcrumb" href="#/solo/design">All design articles</a><span class="eyebrow">'+escape(article.subject)+' / '+escape(article.kind)+'</span><h1>'+escape(article.title)+'</h1><p class="design-intro">'+escape(article.summary)+'</p>'+article.sections.map(section=>'<section><h2>'+escape(section.heading)+'</h2>'+(section.paragraphs||[]).map(p=>'<p>'+escape(p)+'</p>').join('')+(section.bullets?.length?'<ul>'+section.bullets.map(p=>'<li>'+escape(p)+'</li>').join('')+'</ul>':'')+(section.steps?.length?'<ol>'+section.steps.map(p=>'<li>'+escape(p)+'</li>').join('')+'</ol>':'')+'</section>').join('')+'</article>';
}
