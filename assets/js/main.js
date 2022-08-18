/*
  Close top Header
*/
; (function ($) {

    var $headerClose = $('.header-close-icon'),
        $headerTop = $('.header-top');

    if ($headerTop.length > 0) {

        $headerClose.on('click', function () {

            $headerTop.slideUp(500);

        });
    }
    // Tab
    $(function () {
      $(document).off("click.bs.tab.data-api", '[data-hover="tab"]');
      $(document).on(
        "mouseenter.bs.tab.data-api",
        '[data-toggle="tab"], [data-hover="tab"]',
        function () {
          jQuery(this).tab("show");
        }
      );
    });
})(jQuery);

$(document).ready(function () {

    // owlCarousel 
    $(".home-slider").owlCarousel({
      loop: true,
      nav: true,
      dots: false,
      slideSpeed: 2000,
      autoplay: true,
      responsive: {
        0: {
          items: 1,
        },
        600: {
          items: 1,
        },
        1000: {
          items: 1,
        },
      },
    });

    $(".trainer-slider").owlCarousel({
      loop: true,
      margin: 35,
      dots: false,
      nav: true,
      slideSpeed: 2000,
      autoplay: true,
      responsive: {
        0: {
          items: 2,
        },
        600: {
          items: 4,
        },
        1000: {
          items: 4,
        },
      },
    });

    $(".bietet-slider").owlCarousel({
      loop: true,
      margin: 45,
      dots: false,
      nav: true,
      slideSpeed: 2000,
      autoplay: true,
      responsive: {
        0: {
          items: 2,
        },
        600: {
          items: 3,
        },
        1000: {
          items: 3,
        },
      },
    });
    $(".testimonials_slider").owlCarousel({
      loop: true,
      margin: 45,
      dots: true,
      nav: false,
      slideSpeed: 2000,
      autoplay: true,
      responsive: {
        0: {
          items: 1,
        },
        600: {
          items: 2,
        },
        1000: {
          items: 2,
        },
      },
    });
    $(".news_slider").owlCarousel({
      loop: true,
      margin: 80,
      dots: true,
      nav: true,
      slideSpeed: 2000,
      autoplay: true,
      responsive: {
        0: {
          items: 1,
        },
        600: {
          items: 2,
        },
        1000: {
          items: 2,
        },
      },
    });

    // Back to Top
    jQuery("#back-top").hide();
    jQuery(function () {
      jQuery(window).scroll(function () {
        if (jQuery(this).scrollTop() > 100) {
          jQuery("#back-top").fadeIn();
        } else {
          jQuery("#back-top").fadeOut();
        }
      });
      jQuery("#back-top").click(function () {
        jQuery("body,html").animate(
          {
            scrollTop: 0,
          },
          800
        );
        return false;
      });
    });

    // Counter
    $(".count").each(function () {
      $(this)
        .prop("Counter", 0)
        .animate(
          {
            Counter: $(this).text(),
          },
          {
            duration: 4000,
            easing: "swing",
            step: function (now) {
              $(this).text(Math.ceil(now));
            },
          }
        );
    });
  });