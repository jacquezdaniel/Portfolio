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

$(document).on("scroll", function () {
    var pageTop = $(document).scrollTop()
    var pageBottom = pageTop + $(window).height()
    var tags = $("section")
  
    for (var i = 0; i < tags.length; i++) {
      var tag = tags[i]
  
      if ($(tag).position().top < pageBottom) {
        $(tag).addClass("visible")
      } else {
        $(tag).removeClass("visible")
      }
    }
  })