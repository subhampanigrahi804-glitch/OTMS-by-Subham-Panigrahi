var swiper = new Swiper('.swiper-container', {
  slidesPerView: 3,
  spaceBetween: 30,
  loop: true,

  // smooth dragging
  grabCursor: true,

  // mouse wheel scroll support
  mousewheel: {
    forceToAxis: true,
    sensitivity: 1,
  },

  // touch support
  simulateTouch: true,

  // better snapping
  speed: 600,

  // responsive
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    },
    1024: {
      slidesPerView: 3,
    }
  }
});



function goToNextSlide() {
  swiper.slideNext();
}

function goToPrevSlide() {
  swiper.slidePrev();
}

document.querySelector('.swiper-button-next').addEventListener('click', goToNextSlide);
document.querySelector('.swiper-button-prev').addEventListener('click', goToPrevSlide);
