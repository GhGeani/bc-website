// Google tag manager
(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-KSLLGQC');

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