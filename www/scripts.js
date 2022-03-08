document.addEventListener('DOMContentLoaded', () => {

  const body = document.getElementsByTagName('body')[0];
  
  // navbar animation
  const navBar = document.getElementById('nav-bar');
  const openToggle = document.getElementById('navbar-open');
  const closeToggle = document.getElementById('navbar-close');
  const navLinks = document.getElementById('navbar-links');

  if (openToggle && closeToggle) {
    openToggle.addEventListener('click', () => {

      navLinks.style.transform = 'translateX(0%)';
      // body.style.height = '100vh';
      body.style.overflow = 'hidden';
  
    });
  
    closeToggle.addEventListener('click', () => {
  
      navLinks.style.transform = 'translateX(-100%)';
      body.style.overflow = 'auto';
    });
  }

  const navLinkPos = navLinks.offsetTop;
  window.addEventListener('scroll', () => {
    if (window.scrollY > navLinkPos + 10) {
      navLinks.classList.add('sticky');
    }
     else {
      navLinks.classList.remove('sticky');
    }
  });

});