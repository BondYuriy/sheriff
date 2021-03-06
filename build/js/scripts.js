$(function() {
  $(window).scroll(function() {
    var winTop = $(window).scrollTop();
    if (winTop >= 30) {
      $("body").addClass("sticky-header");
    } else {
      $("body").removeClass("sticky-header");
    }
  });
});

//==================================================

$(".customers-carousel").owlCarousel({
  loop: true,
  margin: 80,
  nav: false,
  autoplay: true,
  autoplayTimeout: 1500,
  autoplayHoverPause: false,
  responsive: {
    0: {
      items: 2
    },
    420: {
      items: 3
    },
    768: {
      items: 4
    },
    992: {
      items: 5
    },
    1200: {
      items: 6
    }
  }
});

$(".order-carousel").owlCarousel({
  loop: true,
  margin: 0,
  nav: true,
  responsive: {
    0: {
      items: 1
    }
  }
});

$(".servicw-carousel").owlCarousel({
  loop: true,
  margin: 5,
  nav: true,
  responsive: {
    0: {
      items: 1
    },
    768: {
      items: 2
    },
    1200: {
      items: 3
    }
  }
});

//============================================

$(".navbar-toggler").click(function() {
  $(this).toggleClass("open");
});

//============================================

new WOW().init();

//============================================

$(document).ready(function() {
  $(".button a").click(function() {
    $(".nav-box nav").fadeToggle(200);
    $(".dropdown").fadeToggle(200);
    $(".header-options").toggleClass("mr-80");
    $(".overlay").fadeToggle(200);
    $(".header-black").toggleClass("header-transparent");
    $(this)
      .toggleClass("btn-open")
      .toggleClass("btn-close");
  });
});

// $(".button a").on("click", function() {
//   $(".overlay").fadeToggle(200);
//   $(".button a")
//     .toggleClass("btn-open")
//     .toggleClass("btn-close");
//   $(".dropdown").fadeToggle(200);
//   $(".header-options").toggleClass("mr-80");
//   $(".nav-box nav").fadeToggle(200);
//   open = false;
// });

//===========================================

$(".btn-toggle").click(function() {
  $(this)
    .prev(".toggle-block")
    .toggleClass("show-list");
});

//===========================================

$(".btn-show").click(function() {
  $(this)
    .addClass("hidden")
    .prev(".toggle-block")
    .addClass("show-list");

  $(this)
    .next(".btn-less")
    .removeClass("hidden");

  $(this)
    .parent(".text-wrapper")
    .addClass("show-position");
});

$(".btn-less").click(function() {
  $(this)
    .addClass("hidden")
    .prev(".btn-show")
    .removeClass("hidden")
    .prev(".toggle-block")
    .removeClass("show-list");

  $(this)
    .parent(".text-wrapper")
    .removeClass("show-position");
});
