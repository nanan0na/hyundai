$(function () {
  // $(window).scroll(function () {
  //   const historyItem = $('.history-2020'); // 적용하고자 하는 history-item 클래스 선택
  //   const figure = historyItem.find('.history-item-img img');
  //   const historyExp = historyItem.find('.history-item-exp');
  //   const triggerPoint = historyItem.offset().top + historyItem.outerHeight() - $(window).height();
  //   if ($(window).scrollTop() >= triggerPoint) {
  //     // 스크롤 위치가 triggerPoint를 지나면 투명도 조절
  //     const scrollPercentage = ($(window).scrollTop() - triggerPoint) / $(window).height();
  //     figure.css('opacity', 1 - scrollPercentage);
  //     historyExp.css('opacity', 1 - scrollPercentage);
  //     // 투명도가 0 이하가 되면 fade-out 클래스 추가
  //     if (scrollPercentage >= 1) {
  //       historyExp.addClass('fade-out');
  //     } else {
  //       historyExp.removeClass('fade-out');
  //     }
  //   } else {
  //     // 스크롤 위치가 triggerPoint 미만이면 초기값으로 복원
  //     figure.css('opacity', 1);
  //     historyExp.css('opacity', 1);
  //     historyExp.removeClass('fade-out');
  //   }
  // });
});
