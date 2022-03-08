document.addEventListener('DOMContentLoaded', async () => {

  // GALLERY

  const photoContainer = document.getElementById('photo-container');

  const addPhoto = (photoName) => {
    const imageTemplate = 
    `
    <div class="col-6 col-xxl-4 m-0 p-1">
      <img class="g-photo" src="/assets/gallery-photos/${photoName}" alt="${photoName} loading="lazy"">
    </div>
    `;
    photoContainer.innerHTML += imageTemplate;

  }

  const res = await fetch(`${document.location.origin}/photos-names`);
  const photos = await res.json();

  if (photos) {
    for (let i = 0; i < photos.length; i++) {
      addPhoto(photos[i])
    }
  }

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
        modalImage.src = `${document.location.origin}/assets/gallery-photos/${imgName}`;

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
  
      modalImage.src = `${document.location.origin}/assets/gallery-photos/${imgNames[prevImageIndex]}`;
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
  
      modalImage.src = `${document.location.origin}/assets/gallery-photos/${imgNames[nextImageindex]}`;
  
    });
  }
  
});