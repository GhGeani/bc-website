document.addEventListener('DOMContentLoaded', () => {

  // get reviews from google

  // const reviewsUrl = `https://mybusiness.googleapis.com/v4/accounts/{accountId}/locations/{locationId}/reviews`;

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



  // GALLERY

  const images = document.getElementsByClassName('g-photo');
  const modalImage = document.getElementById('modal-image');

  const gallerySection = document.getElementById('gallery-section');
  const galleryModal = document.getElementById('gallery-modal');

  const closeModal = document.getElementById('close-modal');
  const prevImage = document.getElementById('prev-image');
  const nextImage = document.getElementById('next-image');

  const imgNames = [];

  if (images) {
    for (let i = 0; i < images.length; i++) {
      const image = images[i];
      const imgName = image.src.split('/')[5];
      imgNames.push(imgName);
      image.addEventListener('click', () => {
        modalImage.src = `${document.location.origin}/assets/images/${imgName}`;

        gallerySection.style.opacity = '0';
        gallerySection.style.pointerEvents = 'none';
        galleryModal.style.opacity = '1';
        body.style.overflow = 'hidden';  
      });
    }
  }

  if (closeModal) {
    closeModal.addEventListener('click', () => {
      gallerySection.style.opacity = '1';
      gallerySection.style.pointerEvents = 'auto';
      galleryModal.style.opacity = '0';
      body.style.overflow = 'auto';
    });
  }

  if (prevImage) {
    prevImage.addEventListener('click', () => {

      const imgName = modalImage.src.split('/')[5];
  
      let index = imgNames.findIndex(name => name === imgName);
  
      let prevImageIndex = 0;
  
      if (index > -1) {
        prevImageIndex = index - 1;
      } 
      
      if (index == 0) {
        prevImageIndex = imgNames.length - 1;
      }
  
      modalImage.src = `${document.location.origin}/assets/images/${imgNames[prevImageIndex]}`;
    });
  }

  if (nextImage) {
    nextImage.addEventListener('click', () => {
  
      const imgName = modalImage.src.split('/')[5];
  
      let index = imgNames.findIndex(name => name === imgName);
  
      let nextImageindex = 0;
  
      if (index > -1) {
        nextImageindex = index + 1;
      } 
      
      if (index === imgNames.length - 1) {
        nextImageindex = 0;
      }
  
      modalImage.src = `${document.location.origin}/assets/images/${imgNames[nextImageindex]}`;
  
    });
  }

});