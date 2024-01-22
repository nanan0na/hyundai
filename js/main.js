$(function () {
  $('#fullpage').fullpage({
    anchors: ['visual', 'about', 'business', 'h-story'],

    // 임시
    navigation: true,
    scrollingSpeed: 400,
    fixedElements: '#header',
    bigSectionsDestination: 'top',

    verticalCentered: true,

    scrollBar: true,
  });
});
