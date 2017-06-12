// JavaScript Functions ( Statti Template )

$(document).ready(function () {

  /* --- Active Filter Menu --- */
  $(".switch-section a i, .filter a").click(function (e) {
    console.log('test2')
    $(".switch-section a i, .filter a").removeClass("active");
    $(this).addClass("active");
    e.preventDefault();
  });
  
  /* --- Masonry --- */
  var $container = $(".masonry");
  $container.imagesLoaded(function () {
    $container.isotope({
      itemSelector: ".item",
    });
  });
  $("#folio-filters a, #blog-filters a").click(function () {
    var selector = $(this).attr("data-filter");
    $container.isotope({
      filter: selector
    });
    return false;
  });

  /* --- Item Description --- */
  $(".item").click(function () {
    console.log('test')
    $(this).toggleClass("open");
  })
  
  /* --- Fancybox --- */
  $(".view-fancybox").fancybox({
    openEffect: 'elastic'
  });
  
  /* --- NiceScroll --- */
  $(".section").niceScroll();
  
  /* --- Slider --- */
  $('#slides').superslides({
    slide_easing: 'easeInOutCubic',
    slide_speed: 800,
    play: 4000,
    pagination: true,
    hashchange: true,
    scrollable: true
  });

});

