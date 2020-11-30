$(function() {
  $('.opinions__slick').slick({
    dots: true,
    infinite: true,
    speed: 500,
    fade: true,
    cssEase: 'linear'
    
  });
  $('.opinions__button--next').on('click', function() {
    $('.opinions__slick').slick('slickNext');
  });
  $('.opinions__button--back').on('click', function() {
    $('.opinions__slick').slick('slickPrev');
  });

});
