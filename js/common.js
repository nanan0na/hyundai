$(function () {
  // header

  // footer
  const $selectList = $('.select-list');
  const $familySite = $('.family-site');
  $familySite.on('click', () => {
    $selectList.toggleClass('active');
    $familySite.toggleClass('active');
  });
});
