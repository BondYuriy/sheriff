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
      items: 1
    },
    600: {
      items: 3
    },
    1200: {
      items: 6
    }
  }
});

//==================================================

// var TxtRotate = function(el, toRotate, period) {
//   this.toRotate = toRotate;
//   this.el = el;
//   this.loopNum = 0;
//   this.period = parseInt(period, 100) || 1500;
//   this.txt = "";
//   this.tick();
//   this.isDeleting = false;
// };

// TxtRotate.prototype.tick = function() {
//   var i = this.loopNum % this.toRotate.length;
//   var fullTxt = this.toRotate[i];

//   if (this.isDeleting) {
//     this.txt = fullTxt.substring(0, this.txt.length - 1);
//   } else {
//     this.txt = fullTxt.substring(0, this.txt.length + 1);
//   }

//   this.el.innerHTML = '<span class="wrap">' + this.txt + "</span>";

//   var that = this;
//   var delta = 150 - Math.random() * 100;

//   if (this.isDeleting) {
//     delta /= 2;
//   }

//   if (!this.isDeleting && this.txt === fullTxt) {
//     delta = this.period;
//     this.isDeleting = true;
//   } else if (this.isDeleting && this.txt === "") {
//     this.isDeleting = false;
//     this.loopNum++;
//     delta = 1000;
//   }

//   setTimeout(function() {
//     that.tick();
//   }, delta);
// };

// window.onload = function() {
//   var elements = document.getElementsByClassName("txt-rotate");
//   for (var i = 0; i < elements.length; i++) {
//     var toRotate = elements[i].getAttribute("data-rotate");
//     var period = elements[i].getAttribute("data-period");
//     if (toRotate) {
//       new TxtRotate(elements[i], JSON.parse(toRotate), period);
//     }
//   }
//   // INJECT CSS
//   var css = document.createElement("style");
//   css.type = "text/css";
//   css.innerHTML = ".txt-rotate > .wrap { border-right: 0.08em solid #00d8ff }";
//   document.body.appendChild(css);
// };

//==================================================

// //Default active on home
// $(".link-hello").addClass("active");

// /*
// Smooth scrolling
// */
// $(".link-hello").click(function() {
//   $("html, body").animate(
//     {
//       scrollTop: $("#hello").offset().top - 0
//     },
//     700
//   );
//   return false;
// });

// $(".link-skills").click(function() {
//   $("html, body").animate(
//     {
//       scrollTop: $("#skills").offset().top - 0
//     },
//     700
//   );
//   return false;
// });

// $(".link-works").click(function() {
//   $("html, body").animate(
//     {
//       scrollTop: $("#works").offset().top - 0
//     },
//     700
//   );
//   return false;
// });

// $(".link-contact").click(function() {
//   $(this).addClass("active");
//   $("html, body").animate(
//     {
//       scrollTop: $("#contact").offset().top - 0
//     },
//     700
//   );
//   return false;
// });

// /*
// Using jquery waypoints to change active on scroll
// */
// $("#skills").waypoint(
//   function() {
//     $(".navbar-nav .nav-item")
//       .children()
//       .removeClass("active");
//     $(".link-skills").addClass("active");
//   },
//   { offset: 0 }
// );

// $("#works").waypoint(
//   function() {
//     $(".navbar-nav .nav-item")
//       .children()
//       .removeClass("active");
//     $(".link-works").addClass("active");
//   },
//   { offset: 0 }
// );

// $("#contact").waypoint(
//   function() {
//     $(".navbar-nav .nav-item")
//       .children()
//       .removeClass("active");
//     $(".link-contact").addClass("active");
//   },
//   { offset: 0 }
// );

// $("#hello").waypoint(
//   function() {
//     $(".navbar-nav .nav-item")
//       .children()
//       .removeClass("active");
//     $(".link-hello").addClass("active");
//   },
//   { offset: -1 }
// );

//=========================================

// $(".btn-scroll").click(function() {
//   $("html, body").animate(
//     {
//       scrollTop: $("#works").offset().top - 0
//     },
//     700
//   );
//   return false;
// });

//=========================================

// $("#skills").waypoint(
//   function() {
//     $(".to-top").addClass("visible");
//   },
//   { offset: 100 }
// );

// $("#hello").waypoint(
//   function() {
//     $(".to-top").removeClass("visible");
//   },
//   { offset: -5 }
// );

// $("#toTop").click(function() {
//   $("html, body").animate(
//     {
//       scrollTop: $("#hello").offset().top - 0
//     },
//     1000
//   );
//   return false;
// });

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
