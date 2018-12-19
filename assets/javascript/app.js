$(document).ready(function() {
  $("a").on('click', function(event) {

    if (this.hash !== "") {

      event.preventDefault();

      var hash = this.hash;

      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 1000, function(){
   
        window.location.hash = hash;
      });
    }
  });
});

$(window).on("load",function() {
  function fade() {
      var animation_height = $(window).innerHeight() * 0.25;
      var ratio = Math.round( (1 / animation_height) * 10000 ) / 10000;

      $('section').each(function() {

          var objectTop = $(this).offset().top;
          var windowBottom = $(window).scrollTop() + $(window).innerHeight();

          if ( objectTop < windowBottom ) {
              if ( objectTop < windowBottom - animation_height ) {
                  $(this).css( {
                      transition: 'opacity 2s linear',
                      opacity: 1
                  } );

              } else {
                  $(this).css( {
                      transition: 'opacity 2s linear',
                      opacity: (windowBottom - objectTop) * ratio
                  } );
              }
          } else {
              $(this).css( 'opacity', 0 );
          }
      });
  }
  $('.fade').css( 'opacity', 0 );
  fade();
  $(window).scroll(function() {fade();});
});

$('*').css('overflow', 'hidden');