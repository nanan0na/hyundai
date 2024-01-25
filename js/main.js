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

  // Swiper 초기화
  const businessSlider = new Swiper('.business-slide', {
    slidesPerView: 7,
    loop: true,
    spaceBetween: 20,
    loopAdditionalSlides: 3,
    pagination: {
      el: '.swiper-pagination',
      type: 'fraction',
    },
    navigation: {
      nextEl: '.btn-next',
      prevEl: '.btn-prev',
    },
    on: {
      slideChange: function () {
        const idx = this.realIndex;
        const businessBg = $(this.slides[idx]).data('bg');
        $('.business').css({
          'background-image': `url(${businessBg})`,
          transition: 'background-image 0.5s ease-in-out',
        });
      },
    },
  });
  $('.swiper-slide').on('click', function () {
    // 클릭한 슬라이드에 active 클래스 추가
    $(this).addClass('active').siblings().removeClass('active');

    // 클릭한 슬라이드의 인덱스를 가져와서 활성화된 슬라이드로 이동
    const clickedIndex = $(this).index();
    businessSlider.slideToLoop(clickedIndex);
  });
});
