$(document).ready(function () {

  $('a.blog-button').click(function () {
    if ($('.panel-cover').hasClass('panel-cover--collapsed')) return;
    currentWidth = $('.panel-cover').width();
    $('.panel-cover').addClass('animated panel-cover--collapsed slideInLeft');
    $('.content-wrapper').addClass('animated slideInLeft');
  });

  if (window.location.hash && window.location.hash == "#blog") {
    $('.panel-cover').addClass('panel-cover--collapsed');
  }

  if (window.location.pathname != "/") {       // if hexo in subdir of site, should change this line
    $('.panel-cover').addClass('panel-cover--collapsed');
  }

  $('.btn-mobile-menu').click(function () {
    $('.navigation-wrapper').toggleClass('visible animated bounceInDown');
    $('.btn-mobile-menu__icon').toggleClass('icon-list icon-x-circle animated fadeIn');
  });

  $('.navigation-wrapper .blog-button').click(function () {
    // $('.navigation-wrapper').toggleClass('visible');
    $('.btn-mobile-menu__icon').toggleClass('icon-list icon-x-circle animated fadeIn');
  });

  // 点击关于按钮
  var $about = $('#about'), $card = $about.find('.card'), $close = $about.find('.close');
  $('.aepkill-about-button').click(function (event) {
    $card.stop().css({
      top: '-300px',
      opacity: 0
    });
    $about.fadeIn(function () {
      $card.animate({
        top: '120px',
        opacity: 1
      }, 1000);
    });
    return false;
  })
  $close.click(function () {
    $about.fadeOut();
  });
});
