const linea = document.querySelector('.linea');
linea.addEventListener('scroll', () => {
  const scrollLeft = linea.scrollLeft;
  const imgWidth = linea.querySelector('img').clientWidth;
  const currentImage = Math.round(scrollLeft / imgWidth);
  console.log('Imagen actual:', currentImage);
});