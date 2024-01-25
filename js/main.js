$(function () {
  const $header = $('#header');

  $('#fullpage').fullpage({
    anchors: ['visual', 'about', 'business', 'h-story'],
    fixedElements: '#header',
    verticalCentered: true,
    bigSectionsDestination: 'top',
    scrollBar: true,
    menu: '#indicator',
  });

  const businessSlider = new Swiper('.business-slide', {
    // 옵션 설정
    loop: true,
    slidesPerView: 7,
    spaceBetween: 20,
    // 페이지네이션
    pagination: {
      el: '.swiper-pagination',
      type: 'fraction',
    },
    // Navigation arrows
    navigation: {
      nextEl: '.btn-next',
      prevEl: '.btn-prev',
    },
  });
});
