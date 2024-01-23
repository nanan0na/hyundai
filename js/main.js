$(function () {
  // fullpage
  const $header = $('#header');

  $('#fullpage').fullpage({
    anchors: ['visual', 'about', 'business', 'h-story'],

    fixedElements: '#header',

    bigSectionsDestination: 'top',
    scrollBar: true,

    afterLoad: function (anchorLink, index) {
      // 왜?????? 안 움직이니???????
      console.log('afterLoad - anchorLink:', anchorLink, 'index:', index);
      if (anchorLink === 'h-story') {
        $.fn.fullpage.setAutoScrolling(false);
      } else {
        $.fn.fullpage.setAutoScrolling(true);
      }
    },
  });
});
