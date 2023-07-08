document.addEventListener('DOMContentLoaded', function() {
    var lightbox = document.getElementById('lightbox');
    var galleryItems = document.querySelectorAll('[data-lightbox="gallery"]');
  
    galleryItems.forEach(function(item) {
      item.addEventListener('click', function(e) {
        e.preventDefault();
        lightbox.innerHTML = '<img src="' + this.href + '">';
        lightbox.classList.add('active');
      });
    });
  
    lightbox.addEventListener('click', function() {
      lightbox.innerHTML = '';
      lightbox.classList.remove('active');
    });
  });
  