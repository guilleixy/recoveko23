const horizontal1 = document.getElementById('horizontal-line-1');


//deberia funcionar solo cuando es visible para mejorar la optimizacion
window.addEventListener('scroll', function() {
  let scrollY = window.scrollY || window.pageYOffset;
  horizontal1.style.left = `${-scrollY / 5}px`; 
});
