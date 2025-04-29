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