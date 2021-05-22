  //note: Script Fake Loader
  $(document).ready(function () {
    // $("#fakeLoader").fakeLoader({
    //   timeToHide: 3000,
    //   zIndex: 999,
    //   spinner: "spinner1",
    //   bgColor: "#ffa31d",
    // });

    //note: Script Parallax
    var scene = $('#home__parallax').get(0);
    var parallax = new Parallax(scene, {
      relativeInput: true,
    });

    //note: Script Type effect
    var typed = new Typed('#type__text', {
      strings: ["Front-End Developer.", "UX/UI Designer.", "Motion Graphic Artist.", "Freelancer."],
      typeSpeed: 80,
      backSpeed: 50,
      backDelay: 1000,
      loop: true,
    });

    //note: Script Scroll Down About section
    $("#scrollAbout").click(function () {
      $('html, body').animate({
        scrollTop: $("#sec__about").offset().top - 50
      }, 800);
    });
  });


  //note: Script go to top button
  var btn = $('#button__top a');
  $(window).scroll(function () {
    if ($(window).scrollTop() > 300) {
      btn.addClass('show');
    } else {
      btn.removeClass('show');
    }
  });
  btn.on('click', function (e) {
    e.preventDefault();
    $('html, body').animate({
      scrollTop: 0
    }, '300');
  });