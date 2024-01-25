$(function () {
  // header
  const $header = $('#header');
  const $menu = $('.gnb > li');
  const $submenu = $('.submenu');
  const duration = 300;
  const $window = $(window);

  $header.on('mouseenter', function () {
    $header.addClass('active');
    $submenu.stop().slideDown(duration);
    $menu.addClass('active');
    $('.logo a, .search-ico').css('filter', 'invert(1)');
    $('.lang-toggle').css('color', '#000');
    $('.plus-element').css('display', 'block');
  });
  $header.on('mouseleave', function () {
    $header.removeClass('active');
    $submenu.stop().slideUp(duration);
    $menu.removeClass('active');
    $('.logo a, .search-ico').css('filter', 'none');
    $('.lang-toggle').css('color', '#fff');
    $('.plus-element').css('display', 'none');
    $('.tab-search').css('display', 'none');
    $('.btn-close').css('display', 'none');
    $('.search-ico').css('display', 'block');
  });

  // 마우스 휠을 조작했을 때 : wheel
  $window.on('wheel', function (e) {
    e.originalEvent.wheelDelta > 0 ? $header.removeClass('hide') : $header.addClass('hide');
  });

  // search
  $('.search-ico').on('click', function () {
    $('.submenu, .plus-element, .search-ico').css('display', 'none');
    $('.tab-search').css('display', 'flex');
    $('.btn-close').css('display', 'block');
  });
  // search-close
  $('.btn-close').on('click', function () {
    $('.submenu, .plus-element, .search-ico').css('display', 'block');
    $('.tab-search').css('display', 'none');
    $('.btn-close').css('display', 'none');
    $('.search-ico').css('display', 'block');
  });

  // footer
  const $selectList = $('.select-list');
  const $familySite = $('.family-site');
  $familySite.on('click', () => {
    $selectList.toggleClass('active');
    $familySite.toggleClass('active');
  });
});
