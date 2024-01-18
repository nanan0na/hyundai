$(function () {
  $('.fullpage').fullpage({
    // 1. 앵커 설정
    anchors: ['visual', 'about', 'business', 'h-story', 'contact'],
    navigation: true,

    // 3.필요 옵션 적용
    // 스크롤 속도 : 기본값 700
    scrollingSpeed: 1000,

    // 고정 시킬 요소
    fixedElements: '#header',

    // 영역 콘텐츠의 세로 정렬
    verticalCentered: false,

    // 스크롤바 생성되게
    scrollBar: true,

    // 큰 영역으로 이동할 때 상단에 철컥 붙게
    bigSectionsDestination: 'top',
  });
});
