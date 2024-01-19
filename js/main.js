$(function () {
  $('.fullpage').fullpage({
    // 1. 앵커 설정
    anchors: ['visual', 'about', 'business', 'h-story'],
    navigation: true,

    // 3.필요 옵션 적용
    // 스크롤 속도 : 기본값 700
    scrollingSpeed: 700,

    // 고정 시킬 요소
    fixedElements: '#header',

    verticalCentered: true,

    bigSectionsDestination: 'top',

    autoScrolling: true,

    scrollBar: true,
  });
});
