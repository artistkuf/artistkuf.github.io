  //note: On Page Load
  $(document).ready(function () {
    $("#navBurger").click(function () {
      $(".navbar-burger").toggleClass("is-active");
      $(".navbar-menu").toggleClass("is-active");
    });
  });

  //note: navBar Click to Scroll
  $("#navLogo").click(function () {
    $('html, body').animate({
      scrollTop: $("#sec__home").offset().top
    }, 800);
  });

  $("#navHome").click(function () {
    $('html, body').animate({
      scrollTop: $("#sec__home").offset().top
    }, 800);
    $(".navbar-end a").parent().children('a').not("#navHome").addClass('active');
  });

  $("#navAbout").click(function () {
    $('html, body').animate({
      scrollTop: $("#sec__about").offset().top - 50
    }, 800)
    $(".navbar-end a").parent().children('a').not("#navAbout").addClass('active');
  });

  $("#navPortfolio").click(function () {
    $('html, body').animate({
      scrollTop: $("#sec__portfolio").offset().top
    }, 800)
    $(".navbar-end a").parent().children('a').not("#navPortfolio").addClass('active');
  });

  $("#navContact").click(function () {
    $('html, body').animate({
      scrollTop: $("#sec__contact").offset().top
    }, 800)
    $(".navbar-end a").parent().children('a').not("#navContact").addClass('active');
  });

  //note: navBar Scrollto change class
  $(window).scroll(function () {
    var scroll = $(window).scrollTop();
    if (scroll <= 600) {
      $("#navHome").addClass('active');
      $(".navbar-end a").parent().children('a').not("#navHome").removeClass('active');
    } else if (scroll <= 4300) {
      $("#navAbout").addClass('active');
      $(".navbar-end a").parent().children('a').not("#navAbout").removeClass('active');
    } else if (scroll <= 5600) {
      $("#navPortfolio").addClass('active');
      $(".navbar-end a").parent().children('a').not("#navPortfolio").removeClass('active');
    } else {
      $("#navContact").addClass('active');
      $(".navbar-end a").parent().children('a').not("#navContact").removeClass('active');
    }
  });


  //note: navBar Matchmedia 768px
  if (window.matchMedia("(max-width: 768px)").matches) {
    $(window).scroll(function () {
      var scroll = $(window).scrollTop();
      if (scroll <= 500) {
        $("#navHome").addClass('active');
        $(".navbar-end a").parent().children('a').not("#navHome").removeClass('active');
      } else if (scroll <= 5200) {
        $("#navAbout").addClass('active');
        $(".navbar-end a").parent().children('a').not("#navAbout").removeClass('active');
      } else if (scroll <= 14000) {
        $("#navPortfolio").addClass('active');
        $(".navbar-end a").parent().children('a').not("#navPortfolio").removeClass('active');
      } else {
        $("#navContact").addClass('active');
        $(".navbar-end a").parent().children('a').not("#navContact").removeClass('active');
      }
    });
  }

  //note: navBar Matchmedia 768px
  if (window.matchMedia("(max-width: 425px)").matches) {
    $(window).scroll(function () {
      var scroll = $(window).scrollTop();
      if (scroll <= 400) {
        $("#navHome").addClass('active');
        $(".navbar-end a").parent().children('a').not("#navHome").removeClass('active');
      } else if (scroll <= 5000) {
        $("#navAbout").addClass('active');
        $(".navbar-end a").parent().children('a').not("#navAbout").removeClass('active');
      } else if (scroll <= 9700) {
        $("#navPortfolio").addClass('active');
        $(".navbar-end a").parent().children('a').not("#navPortfolio").removeClass('active');
      } else {
        $("#navContact").addClass('active');
        $(".navbar-end a").parent().children('a').not("#navContact").removeClass('active');
      }
    });
  }