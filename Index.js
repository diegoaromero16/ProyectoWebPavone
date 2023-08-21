const textoAnimado = document.querySelector('.texto-animado');

window.addEventListener('scroll', () => {
  const imageTop = document.querySelector('img').getBoundingClientRect().top;
  const viewportBottom = window.innerHeight;

  if (imageTop < viewportBottom) {
    textoAnimado.classList.add('animate-text');
  }
});
