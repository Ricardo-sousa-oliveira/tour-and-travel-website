$(function() {
  console.log( "ready!" );
  $('.hamburger--stand').on('click', function(){
    $(this).toggleClass('is-active');
    $(this).parents('.nav').find('nav').slideToggle();
    
  });
});