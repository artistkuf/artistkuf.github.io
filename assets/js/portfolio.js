//note: Script Isotope
$(document).ready(function () {
  setTimeout(function () {
    $("#btn__filter a:first-child").trigger("click");
  }, 10);
});
var $grid = $("#portfolio__wrapper").isotope({
  itemSelector: ".column",
  percentPosition: true,
  masonry: {
    columnWidth: ".column",
  },
});
$("#btn__filter").on("click", "a", function () {
  var filterValue = $(this).attr("data-filter");
  $grid.isotope({
    filter: filterValue,
  });
});

//note: Script Filter Remove class Button
$("#btn__filter a").click(function (event) {
  $(this).addClass("active").siblings().removeClass("active");
});

//note: Script Popup Portfolio
$(document).ready(function () {
  //comment: Content 5G max speed
  $("#content__01").magnificPopup({
    items: [
      {
        src: "/assets/images/portfolio/web/5g-max-speed/5g-max-speed-2.png",
      },
      {
        src: "/assets/images/portfolio/web/5g-max-speed/5g-max-speed.png",
      },
    ],
    gallery: {
      enabled: true,
    },
    type: "image",
  });

  //comment: Content FXPay Motion Graphics
  $("#content__02").magnificPopup({
    items: [
      {
        src: "https://vimeo.com/369353046",
        type: "iframe",
      },
    ],
    gallery: {
      enabled: true,
    },
    type: "image",
  });

  //comment: Content Chula Zero Waste
  $("#content__03").magnificPopup({
    items: [
      {
        src: "/assets/images/portfolio/creative/chula-zerowaste/chula_zero-waste(1).jpg",
      },
      {
        src: "/assets/images/portfolio/creative/chula-zerowaste/chula_zero-waste(2).jpg",
      },
      {
        src: "/assets/images/portfolio/creative/chula-zerowaste/chula_zero-waste(3).jpg",
      },
      {
        src: "/assets/images/portfolio/creative/chula-zerowaste/chula_zero-waste(4).jpg",
      },
      {
        src: "/assets/images/portfolio/creative/chula-zerowaste/chula_zero-waste(5).jpg",
      },
      {
        src: "/assets/images/portfolio/creative/chula-zerowaste/chula_zero-waste(6).jpg",
      },
      {
        src: "/assets/images/portfolio/creative/chula-zerowaste/chula_zero-waste(7).jpg",
      },
      {
        src: "/assets/images/portfolio/creative/chula-zerowaste/chula_zero-waste(8).jpg",
      },
    ],
    gallery: {
      enabled: true,
    },
    type: "image",
  });

  //comment: Content 5G max speed
  $("#content__04").magnificPopup({
    items: [
      {
        src: "/assets/images/portfolio/web/move-to-ais/move-to-ais-2.png",
      },
      {
        src: "/assets/images/portfolio/web/move-to-ais/move-to-ais.png",
      },
    ],
    gallery: {
      enabled: true,
    },
    type: "image",
  });

  //comment: Content Ready2Fly
  $("#content__05").magnificPopup({
    items: [
      {
        src: "/assets/images/portfolio/web/ready2fly/ready2fly-2.png",
      },
      {
        src: "/assets/images/portfolio/web/ready2fly/ready2fly.png",
      },
    ],
    gallery: {
      enabled: true,
    },
    type: "image",
  });

  //comment: Content Local Election in Thailand
  $("#content__06").magnificPopup({
    items: [
      {
        src: "https://vimeo.com/559815233",
        type: "iframe",
      },
    ],
    gallery: {
      enabled: true,
    },
    type: "image",
  });

  //comment: Content AIS 30th Aniversary
  $("#content__07").magnificPopup({
    items: [
      {
        src: "/assets/images/portfolio/web/ais-aniversary/ais-aniversary-2.png",
      },
      {
        src: "/assets/images/portfolio/web/ais-aniversary/ais-aniversary.png",
      },
    ],
    gallery: {
      enabled: true,
    },
    type: "image",
  });

  //comment: Content 5G Join-us Postpaid
  $("#content__08").magnificPopup({
    items: [
      {
        src: "/assets/images/portfolio/web/5g-joinus-postpaid/5g-joinus-postpaid-2.png",
      },
      {
        src: "/assets/images/portfolio/web/5g-joinus-postpaid/5g-joinus-postpaid.png",
      },
    ],
    gallery: {
      enabled: true,
    },
    type: "image",
  });

  //comment: Content Prepaid to Postpaid
  $("#content__09").magnificPopup({
    items: [
      {
        src: "/assets/images/portfolio/web/prepaid-to-postpaid/prepaid-to-postpaid-2.png",
      },
      {
        src: "/assets/images/portfolio/web/prepaid-to-postpaid/prepaid-to-postpaid.png",
      },
    ],
    gallery: {
      enabled: true,
    },
    type: "image",
  });

  //comment: Content Thai Industrial Standards Institute
  $("#content__10").magnificPopup({
    items: [
      {
        src: "https://vimeo.com/464705762",
        type: "iframe",
      },
    ],
    gallery: {
      enabled: true,
    },
    type: "image",
  });

  //comment: Content AIS Review
  $("#content__11").magnificPopup({
    items: [
      {
        src: "/assets/images/portfolio/web/review/review-2.png",
      },
      {
        src: "/assets/images/portfolio/web/review/review.png",
      },
    ],
    gallery: {
      enabled: true,
    },
    type: "image",
  });

  //comment: Content AIS Review
  $("#content__12").magnificPopup({
    items: [
      {
        src: "/assets/images/portfolio/web/iphone/iphone-2.png",
      },
      {
        src: "/assets/images/portfolio/web/iphone/iphone.png",
      },
    ],
    gallery: {
      enabled: true,
    },
    type: "image",
  });

  //comment: Content Department of environmental quality promotion Thailand
  $("#content__13").magnificPopup({
    items: [
      {
        src: "https://vimeo.com/369349667",
        type: "iframe",
      },
    ],
    gallery: {
      enabled: true,
    },
    type: "image",
  });

  //comment: Content North Bangkok University
  $("#content__14").magnificPopup({
    items: [
      {
        src: "/assets/images/portfolio/creative/nbu-ads/nbu_ads-campaing(1).jpg",
      },
      {
        src: "/assets/images/portfolio/creative/nbu-ads/nbu_ads-campaing(1).png",
      },
      {
        src: "/assets/images/portfolio/creative/nbu-ads/nbu_ads-campaing(2).jpg",
      },
      {
        src: "/assets/images/portfolio/creative/nbu-ads/nbu_ads-campaing(2).png",
      },
      {
        src: "/assets/images/portfolio/creative/nbu-ads/nbu_ads-campaing(3).jpg",
      },
      {
        src: "/assets/images/portfolio/creative/nbu-ads/nbu_ads-campaing(4).jpg",
      },
      {
        src: "/assets/images/portfolio/creative/nbu-ads/nbu_ads-campaing(5).jpg",
      },
      {
        src: "/assets/images/portfolio/creative/nbu-ads/nbu_ads-campaing(6).jpg",
      },
    ],
    gallery: {
      enabled: true,
    },
    type: "image",
  });
});
