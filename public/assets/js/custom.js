(function ($) {
  $(document).ready(function () {


    // product details slider start
    var swiper = new Swiper('.details-thumb-slider', {
      spaceBetween: 10,
      slidesPerView: 3,
      freeMode: true,
      watchSlidesProgress: true,
    });
    var swiper2 = new Swiper('.details-display-slider', {
      spaceBetween: 10,
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      thumbs: {
        swiper: swiper,
      },
    });
    // product details slider ends
  });
})(jQuery);
