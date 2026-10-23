(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),t.credentials=e.crossOrigin===`use-credentials`?`include`:e.crossOrigin===`anonymous`?`omit`:`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();var e=[{title:`Gliwice Waterfront Urban Regeneration`,description:`Spatial analysis, interactive masterplan, and 3D visual showcase for the Gliwice waterfront urban contest.`,tags:[`Urban Planning`,`GIS`,`GeoJSON`,`3D Visualization`],link:`#`,active:!1},{title:`Civic Crowdfunding & Budget Transparency`,description:`AI-assisted transparent crowdfunding platform for municipal projects and civic infrastructure initiatives.`,tags:[`CivicTech`,`FinTech`,`TypeScript`,`Spatial Analytics`],link:`#`,active:!1},{title:`#30DayMapChallenge Showcase`,description:`Daily cartographic, GIS, and 3D spatial data visualizations using Mapbox, Deck.gl, Leaflet, and Cesium.`,tags:[`Cartography`,`Mapbox GL JS`,`Deck.gl`,`Cesium.js`],link:`#`,active:!1}];function t(){let t=document.getElementById(`projects-grid`);if(!t)return;let n=e.filter(e=>e.active);t.innerHTML=n.length===0?`
      <div class="placeholder-card">
        <h3>Spatial Tech Lab under construction</h3>
        <p>Interactive maps and spatial engineering showcases are currently being integrated. Check back soon!</p>
      </div>
    `:n.map(e=>`
    <article class="project-card">
      <h3>${e.title}</h3>
      <p>${e.description}</p>
      <div class="tags">
        ${e.tags.map(e=>`<span class="tag">${e}</span>`).join(``)}
      </div>
      ${e.link?`<a href="${e.link}" class="project-link">View Project &rarr;</a>`:``}
    </article>
  `).join(``)}document.addEventListener(`DOMContentLoaded`,t);