$(document).ready(function() {
  $('.menu__toggle').click(function() {
    $(this).toggleClass('active');
    $('.menu').toggleClass('active');
  });
});