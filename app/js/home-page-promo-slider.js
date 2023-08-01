const promoSwiper = new Swiper('.swiper', {
   direction: 'horizontal',
   slidesPerView: 1,
   loop: true,
   pagination: {
      el: '.swiper-pagination',
   },

   navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
   },
});
