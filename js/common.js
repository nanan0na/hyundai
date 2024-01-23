$(function () {
  // footer
  const $selectList = $('.select-list');
  $('.family-site').on('click', () => {
    $selectList.toggleClass('active');
    $('.family-site').toggleClass('active');
  });
});
