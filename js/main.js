$(function () {
  // fullpage
  const $header = $('#header');

  $('#fullpage').fullpage({
    anchors: ['visual', 'about', 'business', 'h-story'],
    fixedElements: '#header',
    verticalCentered: true,
    bigSectionsDestination: 'top',
    scrollBar: true, // 스크롤바 사용 여부 설정

    menu: '#indicator',
  });
});
