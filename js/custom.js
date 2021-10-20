
$(function() {
  "use strict";
  
  // On scroll smooth header
  $(window).on("scroll", function() {
      if($(window).scrollTop() > 50) {
          $(".header-nav").addClass("header-fix");
      } else {
         $(".header-nav").removeClass("header-fix");
      }
  });
});

  // On Counter animation
$('.countdown-content>h6').each(function () {
  $(this).prop('Counter',0).animate({
    Counter: $(this).text()
  }, {
    duration: 4000,
    easing: 'swing',
    step: function (now) {
      $(this).text(Math.ceil(now));
    }
  });
});