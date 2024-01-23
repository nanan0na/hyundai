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
});
