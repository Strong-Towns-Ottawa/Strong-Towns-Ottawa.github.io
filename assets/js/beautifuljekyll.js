// Navbar toggle functionality
document.addEventListener('DOMContentLoaded', function() {
  const navbarToggler = document.querySelector('.navbar-toggler');
  const navbarCollapse = document.querySelector('.navbar-collapse');
  
  if (!navbarToggler || !navbarCollapse) return;
  
  // Manual toggle handler since Bootstrap's auto-init might not be working
  navbarToggler.addEventListener('click', function(e) {
    e.preventDefault();
    e.stopPropagation();
    
    const isExpanded = navbarToggler.getAttribute('aria-expanded') === 'true';
    
    if (isExpanded) {
      // Close the navbar
      navbarCollapse.classList.remove('show');
      navbarToggler.setAttribute('aria-expanded', 'false');
      navbarToggler.classList.add('collapsed');
    } else {
      // Open the navbar
      navbarCollapse.classList.add('show');
      navbarToggler.setAttribute('aria-expanded', 'true');
      navbarToggler.classList.remove('collapsed');
    }
  });
  
  // Close navbar when a link is clicked
  const navLinks = navbarCollapse.querySelectorAll('a:not(.dropdown-toggle)');
  navLinks.forEach(link => {
    link.addEventListener('click', function() {
      if (navbarCollapse.classList.contains('show')) {
        navbarCollapse.classList.remove('show');
        navbarToggler.setAttribute('aria-expanded', 'false');
        navbarToggler.classList.add('collapsed');
      }
    });
  });
});
