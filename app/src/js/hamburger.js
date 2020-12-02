$(function() {
  console.log( "ready!" );
  $('.hamburger--stand').on('click', function(){
    $(this).toggleClass('is-active');
    $(this).parent().find('nav').slideToggle();
    
  });
});