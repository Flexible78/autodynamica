const promoSwiper = new Swiper('.swiper', {
   direction: 'horizontal',
   loop: true,
   speed: 500,
   keyboard: true,
   effect: 'flip', // slide, flip,fade
   initialSlide: 1,
   slidesPerView: 1,
   slidesPerGroup: 1,
   freeMode: false,
   pagination: {
      el: '.swiper-pagination',
      clickable: true,
   },

   autoplay: {
      delay: 2000,
   },

});
