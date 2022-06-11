const swiper = new Swiper('.swiper', {

    spaceBetween: 30,

    // Optional parameters
    direction: 'horizontal',
    loop: true,
    slidesPerView: 1,

    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });