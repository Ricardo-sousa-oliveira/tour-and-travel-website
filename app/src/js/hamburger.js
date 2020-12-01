$(function() {
  console.log( "ready!" );
  $('.hamburger--arrowturn-r').on('click', function(){
    $(this).toggleClass('is-active');
    $(this).parent().find('nav').slideToggle();
    
  });
});