$(function () {
  $('#fullpage').fullpage({
    anchors: ['visual', 'about', 'business', 'h-story'],
    navigation: true,

    scrollingSpeed: 1400,

    // 영역 콘텐츠의 세로 정렬
    verticalCentered: false,

    // 큰 영역으로 이동할 때 상단에 철컥 붙게
    bigSectionsDestination: 'top',

    fitToSection: true, // 각 섹션에 자동으로 맞추기
  });
});
