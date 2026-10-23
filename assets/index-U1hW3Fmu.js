(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const s of t.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&a(s)}).observe(document,{childList:!0,subtree:!0});function i(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function a(e){if(e.ep)return;e.ep=!0;const t=i(e);fetch(e.href,t)}})();const c=[{title:"Gliwice Waterfront Urban Regeneration",description:"Spatial analysis, interactive masterplan, and 3D visual showcase for the Gliwice waterfront urban contest.",tags:["Urban Planning","GIS","GeoJSON","3D Visualization"],link:"#",active:!1},{title:"Civic Crowdfunding & Budget Transparency",description:"AI-assisted transparent crowdfunding platform for municipal projects and civic infrastructure initiatives.",tags:["CivicTech","FinTech","TypeScript","Spatial Analytics"],link:"#",active:!1},{title:"#30DayMapChallenge Showcase",description:"Daily cartographic, GIS, and 3D spatial data visualizations using Mapbox, Deck.gl, Leaflet, and Cesium.",tags:["Cartography","Mapbox GL JS","Deck.gl","Cesium.js"],link:"#",active:!1}];function o(){const n=document.getElementById("projects-grid");if(!n)return;const r=c.filter(i=>i.active);if(r.length===0){n.innerHTML=`
      <div class="placeholder-card">
        <h3>Spatial Tech Lab under construction</h3>
        <p>Interactive maps and spatial engineering showcases are currently being integrated. Check back soon!</p>
      </div>
    `;return}n.innerHTML=r.map(i=>`
    <article class="project-card">
      <h3>${i.title}</h3>
      <p>${i.description}</p>
      <div class="tags">
        ${i.tags.map(a=>`<span class="tag">${a}</span>`).join("")}
      </div>
      ${i.link?`<a href="${i.link}" class="project-link">View Project &rarr;</a>`:""}
    </article>
  `).join("")}document.addEventListener("DOMContentLoaded",o);
