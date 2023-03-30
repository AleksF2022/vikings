$(function(){
  $('[data-fancybox]').fancybox({
    youtube: {
      controls: 0,
      showinfo: 0
    }
  });
  $('.heroes__slider-img').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    prevArrow: '<button  class="slick-prev slick-btn"><img src="images/arrow-left.png" alt=""></img></button>',
    nextArrow: '<button  class="slick-next slick-btn"><img src="images/arrow-right.png" alt=""></img></button>',
    asNavFor: '.heroes__slider-text'
  });
  $('.heroes__slider-text').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    asNavFor: '.heroes__slider-img',
    fade: true,
    arrows: false
    
  });

});