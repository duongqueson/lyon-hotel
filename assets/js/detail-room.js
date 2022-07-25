"user strict";
$(document).ready(function () {
  const sync1 = $(".detail-room__thumb-gallery");
  const sync2 = $(".detail-room__inavigation");

  $(".date-picker").datepicker();

  /*-------------- carousel -------------*/
  sync1
    .owlCarousel({
      video: true,
      loop: true,
      autoplay: true,
      slideTransition: `ease-in-out`,
      smartSpeed: 600,
      autoplayTimeout: 3000,
      nav: true,
      navText: [
        "<i class='ti-angle-left'></i>",
        "<i class='ti-angle-right'></i>",
      ],
      dots: true,
      items: 1,
      dotsSpeed: 200,
    })
    .on("changed.owl.carousel", function () {
      sync1.trigger("stop.owl.autoplay");
      sync1.trigger("play.owl.autoplay");
    });

  sync2
    .owlCarousel({
      video: true,
      loop: true,
      autoplay: true,
      slideTransition: `ease-in-out`,
      smartSpeed: 600,
      autoplayTimeout: 3000,
      nav: false,
      dots: false,
      margin: 10,
      center: true,
      responsive: {
        576: {
          items: 5,
        },
        320: {
          items: 3,
        },
      },
    })
    .on("changed.owl.carousel", function () {
      sync2.trigger("stop.owl.autoplay");
      sync2.trigger("play.owl.autoplay");
    });

  /* when click item carousel 2 */
  sync2.on("click", ".owl-item", function (e) {
    const carousel = $(sync2).data("owl.carousel");
    e.preventDefault();
    const index = carousel.relative($(this).index());
    sync2.trigger("to.owl.carousel", [index, 300]);
    sync1.trigger("to.owl.carousel", [index, 300]);
  });

  /* when click dots carousel 1 */
  sync1.on("click", ".owl-dot", function (e) {
    /* const carousel = $(sync1).data("owl.carousel"); */
    /* e.preventDefault(); */
    const index = $(this).index();
    sync2.trigger("to.owl.carousel", [index, 300]);
  });

  /* when click next, prev carousel 1 */
  $(".owl-prev").on("click", function () {
    sync2.trigger("prev.owl.carousel", 300);
  });
  $(".owl-next").on("click", function () {
    sync2.trigger("next.owl.carousel", 300);
  });
});
