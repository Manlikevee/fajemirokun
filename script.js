var swiper = new Swiper(".swiper-panorama", {
    loop: true,
    slidesPerView: 'auto',
    centeredSlides: false,
    loopAddBlankSlides: true,
    speed: 600,
    spaceBetween: 0,
    mousewheel: false, 
    effect: "coverflow",
    coverflowEffect: {
        stretch: -5,
        rotate: 10,
        depth: -65,
        modifier: 2,
        slideShadows: false,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    autoplay: {
        delay: 2000, // Time in milliseconds between slides
        disableOnInteraction: false, // Autoplay will not be disabled after user interactions (swipes, clicks, etc.)
    },
});



var $grid = $('.grid').masonry({
    itemSelector: '.grid-item',
    percentPosition: true,
    columnWidth: '.grid-sizer'
  });
  // layout Masonry after each image loads
  $grid.imagesLoaded().progress( function() {
    $grid.masonry();
  });