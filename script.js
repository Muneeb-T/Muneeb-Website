$('.navbar-collapse a').click(function(){
    $(".navbar-collapse").collapse('hide');
});

$(document).ready(function() {
    $('.carousel .carousel-caption').css('zoom', $('.carousel').width()/700);
  });

  $(window).resize(function() {
    $('.carousel .carousel-caption').css('zoom', $('.carousel').width()/700);
  });