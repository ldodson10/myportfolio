// script.js — Trust Aesthetic Portfolio
// Dynamically extends the existing projects section with live data from the Trust Aesthetic API

document.addEventListener("DOMContentLoaded", async () => {
  const projectsGrid = document.querySelector(".projects-grid");
  if (!projectsGrid) return;

  // Add subtle loader
  const loader = document.createElement("p");
  loader.textContent = "Fetching live projects...";
  loader.style.opacity = "0.7";
  loader.style.textAlign = "center";
  projectsGrid.appendChild(loader);

  try {
      // Fetch live project data from your Render API
      const response = await fetch("https://myportfolio-q0bp.onrender.com/api/projects");
      if (!response.ok) throw new Error(`HTTP Error: ${response.status}`);

      const data = await response.json();
      loader.remove();

      data.forEach((project) => {
          const card = document.createElement("div");
          card.classList.add("project-card");

          card.innerHTML = `
              <div class="project-header">
                  <h3>${project.name}</h3>
                  <span class="project-tag">Live API Project</span>
              </div>
              <div class="project-content">
                  <p>${project.focus}</p>
                  <div class="project-tech">
                      <span class="tech-tag">API</span>
                      <span class="tech-tag">Render</span>
                      <span class="tech-tag">Node.js</span>
                  </div>
              </div>
              <div class="project-footer">
                  <a href="https://github.com/ldodson10" target="_blank" class="project-link">
                      <i class="fab fa-github"></i> View Source
                  </a>
              </div>
          `;

          projectsGrid.appendChild(card);
      });
  } catch (error) {
      console.error("Error loading projects:", error);
      loader.textContent = "⚠️ Could not load live projects at this time.";
  }
});