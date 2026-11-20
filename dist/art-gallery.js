import {artworks} from './art.js';

export function artCards(){return artworks.map((art,index)=>`<button class="art-card" type="button" data-art="${index}" aria-label="Open ${art.title}"><span class="art-thumb"><img src="${art.thumbnail}" alt="${art.title}" width="${art.width}" height="${art.height}" loading="lazy" decoding="async"></span></button>`).join('');}

export const artViewer=()=>`<dialog class="art-viewer" aria-labelledby="art-viewer-title"><div class="art-viewer-header"><h2 class="sr-only" id="art-viewer-title"></h2><button type="button" data-viewer="close" autofocus>Close</button></div><div class="art-viewer-stage"><img alt="" id="art-viewer-image"></div><div class="art-viewer-footer"><button type="button" data-viewer="previous">Previous</button><output id="art-viewer-count" aria-live="polite"></output><button type="button" data-viewer="next">Next</button><a id="art-viewer-source" target="_blank" rel="noopener noreferrer">Original image</a></div></dialog>`;

export function initArtViewer(container){
 const dialog=container.querySelector('.art-viewer');if(!dialog)return()=>{};
 let selected=0,opener=null;
 const grid=container.querySelector('.art-grid');let lastWidth=0;
 function layout(){const width=grid.getBoundingClientRect().width;if(width===lastWidth)return;lastWidth=width;const gap=parseFloat(getComputedStyle(grid).rowGap)||0;grid.querySelectorAll('[data-art]').forEach(card=>{const art=artworks[Number(card.dataset.art)],height=card.getBoundingClientRect().width*art.height/art.width;card.style.gridRowEnd='span '+Math.ceil((height+gap)/(1+gap));});}
 const resize=new ResizeObserver(layout);resize.observe(grid);layout();
 const image=dialog.querySelector('#art-viewer-image'),title=dialog.querySelector('#art-viewer-title'),counter=dialog.querySelector('#art-viewer-count'),source=dialog.querySelector('#art-viewer-source');
 function show(index){selected=(index+artworks.length)%artworks.length;const art=artworks[selected];image.src=art.image;image.alt=art.title;title.textContent=art.title;counter.textContent=`${selected+1} of ${artworks.length}`;source.href=art.source;}
 function click(event){const card=event.target.closest('[data-art]');if(card){opener=card;show(Number(card.dataset.art));dialog.showModal();document.body.classList.add('art-viewer-open');return;}const action=event.target.closest('[data-viewer]')?.dataset.viewer;if(action==='close')dialog.close();if(action==='previous')show(selected-1);if(action==='next')show(selected+1);if(event.target===dialog){const r=dialog.getBoundingClientRect();if(event.clientX<r.left||event.clientX>r.right||event.clientY<r.top||event.clientY>r.bottom)dialog.close();}}
 function keyboard(event){if(!dialog.open)return;if(event.key==='ArrowLeft'){event.preventDefault();show(selected-1);}if(event.key==='ArrowRight'){event.preventDefault();show(selected+1);}}
 function close(){document.body.classList.remove('art-viewer-open');if(opener?.isConnected)opener.focus({preventScroll:true});}
 container.addEventListener('click',click);dialog.addEventListener('keydown',keyboard);dialog.addEventListener('close',close);
 return()=>{resize.disconnect();container.removeEventListener('click',click);dialog.removeEventListener('keydown',keyboard);dialog.removeEventListener('close',close);if(dialog.open)dialog.close();document.body.classList.remove('art-viewer-open');};
}
