 // Slide menu open/close
 const hamburger = document.getElementById('hamburger');
 const navMenu = document.getElementById('nav-menu');

 // Open/close menu on click hamburger
 hamburger.addEventListener('click', (e) => {
   e.stopPropagation();
   navMenu.classList.toggle('show');
 });

 // Close menu when clicking outside of it
 document.addEventListener('click', (e) => {
   if (!navMenu.contains(e.target) && navMenu.classList.contains('show')) {
     navMenu.classList.remove('show');
   }
 });

 // Prevent event propagation when clicking inside the menu
 navMenu.addEventListener('click', (e) => {
   e.stopPropagation();
 });

// -------------------------------
// Load GitHub Repositories
// -------------------------------
const projectsContainer = document.querySelector('.projects');

fetch('https://api.github.com/users/mihai-mrnsc/repos')
  .then(res => res.json())
  .then(repos => {
    repos
      .filter(repo => !repo.fork && repo.description) // opțional: doar proiectele originale cu descriere
      .forEach(repo => {
        const card = document.createElement('div');
        card.classList.add('card');
        card.innerHTML = `
          <h3><a href="${repo.html_url}" target="_blank">${repo.name}</a></h3>
          <p>${repo.description}</p>
        `;
        projectsContainer.appendChild(card);
      });
  })
  .catch(err => {
    console.error('Error fetching GitHub repos:', err);
    projectsContainer.innerHTML = '<p>Could not load GitHub projects at this time.</p>';
  });