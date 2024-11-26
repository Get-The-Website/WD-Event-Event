/*========================================
            6. All Background Image
        ========================================*/

$("[data-bg]").each(function () {
  $(this).css("background-image", "url(" + $(this).attr("data-bg") + ")");
});

// Fancybox.bind("[data-fancybox]", {
//   // Your custom options
// });

(function ($) {
  ("use strict");

  /*========================================
            1. fancybox
        ========================================*/

  Fancybox.bind("[data-fancybox]", {});

  /*========================================
            2. fancybox
        ========================================*/

  $(".ic-content-slide").slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
    asNavFor: ".ic-user-slide",
    
  });

  $(".ic-user-slide").slick({
    slidesToShow: 5,
    slidesToScroll: 1,
    asNavFor: ".ic-content-slide",
    focusOnSelect: true,

    responsive: [
      {
        breakpoint: 575,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: false,
          infinite: true,
        },
      },
    ],
  });

  // countdown

  function makeTimer() {
    //		var endTime = new Date("31 Jan 2025 12:00:00 AM GMT+06:00");
    var endTime = new Date("31 Jan 2025 12:00:00 AM GMT+06:00");
    endTime = Date.parse(endTime) / 1000;

    var now = new Date();
    now = Date.parse(now) / 1000;

    var timeLeft = endTime - now;

    var days = Math.floor(timeLeft / 86400);
    var hours = Math.floor((timeLeft - days * 86400) / 3600);
    var minutes = Math.floor((timeLeft - days * 86400 - hours * 3600) / 60);
    var seconds = Math.floor(
      timeLeft - days * 86400 - hours * 3600 - minutes * 60
    );

    if (hours < "10") {
      hours = "0" + hours;
    }
    if (minutes < "10") {
      minutes = "0" + minutes;
    }
    if (seconds < "10") {
      seconds = "0" + seconds;
    }

    $("#days").html(days);
    $("#hours").html(hours);
    $("#minutes").html(minutes);
    $("#seconds").html(seconds);
  }

  setInterval(function () {
    makeTimer();
  }, 1000);
})(jQuery);
