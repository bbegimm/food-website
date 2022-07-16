// Burger menu
const iconMenu = document.querySelector('.header__icon');
const menuBody = document.querySelector('.menu__body');
if (iconMenu) {
    
  iconMenu.addEventListener("click", function (e) {
      document.body.classList.toggle('_lock');
        iconMenu.classList.toggle('_active');
        menuBody.classList.toggle('_active');
    })
}

// Header sticky
window.addEventListener("scroll", function () {
    document.body.classList.remove('_lock');
    let header = document.querySelector("header");
    header.classList.toggle("sticky", window.scrollY > 0)
})

// Scroll
const menuLinks = document.querySelectorAll('.menu__link[data-goto]');
if (menuLinks.length > 0) {
  menuLinks.forEach(menuLink => {
    menuLink.addEventListener("click", onMenuLinkClick);
  });

  function onMenuLinkClick(e) {
    const menuLink = e.target;
    if (menuLink.dataset.goto && document.querySelector(menuLink.dataset.goto)) {
      const gotoBlock = document.querySelector(menuLink.dataset.goto);
      const gotoBlockValue = gotoBlock.getBoundingClientRect().top + pageYOffset - document.querySelector('header').offsetHeight;

      if (iconMenu.classList.contains('_active')) {
        document.body.classList.remove('_lock');
        iconMenu.classList.remove('_active');
        menuBody.classList.remove('_active');
      }
     
      window.scrollTo({
        top: gotoBlockValue,
        behavior: "smooth",
      });
      e.preventDefault();
    }
  }
}  

// Swiper
const testimonialSwiper = document.querySelector('.swiper-testimonial');

if (testimonialSwiper) {

  const swiper = new Swiper('.swiper-testimonial', {
      loop: true,
    
      pagination: {
        el: '.swiper-testimonial__pagination',
        clickable: true,
      },
    
      navigation: {
        nextEl: '.swiper-button-next-n',
        prevEl: '.swiper-button-prev-p',
    },
  });
}

