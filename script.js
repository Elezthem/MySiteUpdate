const navSlide = () => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');
    const navLinks = document.querySelectorAll('.nav-links li');
  
    burger.addEventListener('click', () => {
      // Переключение класса 'nav-active' для выпадающего меню
      nav.classList.toggle('nav-active');
  
      // Анимация для пунктов меню
      navLinks.forEach((link, index) => {
        if (link.style.animation) {
          link.style.animation = '';
        } else {
          link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.3}s`;
        }
      });
    });
  
    // Закрытие выпадающего меню при клике вне него
    document.addEventListener('click', (e) => {
      if (!nav.contains(e.target) && !burger.contains(e.target)) {
        nav.classList.remove('nav-active');
        burger.classList.remove('toggle');
        navLinks.forEach((link) => {
          link.style.animation = '';
        });
      }
    });
  };
  
  navSlide();
  