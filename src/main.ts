// src/main.ts
import './style.css';

interface Project {
  title: string;
  description: string;
  tags: string[];
  link?: string;
  active: boolean;
}

// Active and upcoming showcase projects
const projects: Project[] = [
  {
    title: 'Gliwice Waterfront Urban Regeneration',
    description: 'Spatial analysis, interactive masterplan, and 3D visual showcase for the Gliwice waterfront urban contest.',
    tags: ['Urban Planning', 'GIS', 'GeoJSON', '3D Visualization'],
    link: '#',
    active: false, // Set to true when ready
  },
  {
    title: 'Civic Crowdfunding & Budget Transparency',
    description: 'AI-assisted transparent crowdfunding platform for municipal projects and civic infrastructure initiatives.',
    tags: ['CivicTech', 'FinTech', 'TypeScript', 'Spatial Analytics'],
    link: '#',
    active: false, // Set to true when ready
  },
  {
    title: '#30DayMapChallenge Showcase',
    description: 'Daily cartographic, GIS, and 3D spatial data visualizations using Mapbox, Deck.gl, Leaflet, and Cesium.',
    tags: ['Cartography', 'Mapbox GL JS', 'Deck.gl', 'Cesium.js'],
    link: '#',
    active: false, // Set to true when ready
  },
];

function initApp(): void {
  const projectsContainer = document.getElementById('projects-grid');
  if (!projectsContainer) return;

  const activeProjects = projects.filter((p) => p.active);

  if (activeProjects.length === 0) {
    projectsContainer.innerHTML = `
      <div class="placeholder-card">
        <h3>Spatial Tech Lab under construction</h3>
        <p>Interactive maps and spatial engineering showcases are currently being integrated. Check back soon!</p>
      </div>
    `;
    return;
  }

  projectsContainer.innerHTML = activeProjects
    .map(
      (p) => `
    <article class="project-card">
      <h3>${p.title}</h3>
      <p>${p.description}</p>
      <div class="tags">
        ${p.tags.map((tag) => `<span class="tag">${tag}</span>`).join('')}
      </div>
      ${p.link ? `<a href="${p.link}" class="project-link">View Project &rarr;</a>` : ''}
    </article>
  `
    )
    .join('');
}

document.addEventListener('DOMContentLoaded', initApp);