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


  document.addEventListener("DOMContentLoaded", function() {
    // Select all img elements on the page
    var images = document.querySelectorAll('img');

    // Iterate through each image and set the loading attribute to 'lazy'
    images.forEach(function(image) {
        image.loading = 'lazy';
    });
});

function ovl(){
    var loadingover = document.querySelector(".loading-over2");
    loadingover.classList.toggle("loading-overshow");
}