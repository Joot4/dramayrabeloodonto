document.addEventListener('DOMContentLoaded', () => {
  const header = document.querySelector('header');
  let lastScrollY = window.scrollY;

  window.addEventListener('scroll', () => {
    const currentScrollY = window.scrollY;

    if (currentScrollY > 200 && currentScrollY > lastScrollY) {
      // Esconder o header
      header.classList.add('hidden');
    } else {
      // Mostrar o header
      header.classList.remove('hidden');
    }

    lastScrollY = currentScrollY;
  });
});
