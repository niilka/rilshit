$('.left-bar-collapse').click(function () {
  if ($('.left-bar').hasClass('iscollapsed')) {
    $('.left-bar').removeClass('iscollapsed');
    $('.left-bar').addClass('is-large');
    $('.room-info').css('display', 'block');
    $('.links').addClass('large');
  } else {
    $('.left-bar').addClass('iscollapsed');
    $('.left-bar').removeClass('is-large');
    $('.room-info').css('display', 'none');
    $('.links').removeClass('is-large');
  }
});

$('.top-bar-collapse').click(function () {
  if ($('.top-bar').hasClass('is-collapsed')) {
    $('.top-bar').removeClass('is-collapsed');
    $('.top-bar').addClass('is-large');
  } else {
    $('.top-bar').addClass('is-collapsed');
    $('.top-bar').removeClass('is-large');
  }
});

$('.chat-bar-collapse').click(function () {
  if ($('.chat-bar').hasClass('is-collapsed')) {
    $('.chat-bar').removeClass('is-collapsed');
    $('.chat-bar').addClass('is-large');
  } else {
    $('.chat-bar').addClass('is-collapsed');
    $('.chat-bar').removeClass('is-large');
  }
});

$(".profile-nickname").hover(
  function () {
    $('.profile-popup').addClass('show');
  },
  function () {
    $('.profile-popup').removeClass('show');
  }
);

$(".profile-popup").hover(
  function () {
    $('.profile-popup').addClass('show');
  },
  function () {
    $('.profile-popup').removeClass('show');
  }
);

$('.show-bets').click(function () {
  $('.all-bets').toggleClass('visible');
  setHeight();
});


function calcHeight() {
  var windowHeight = $(window).height();
  var headerHeight = $('.site-header').height();
  var footerHeight = $('.site-footer').height();
  var betsHeight = $('.all-bets').height();
  var resultHeight = windowHeight - headerHeight - footerHeight - betsHeight;
  return resultHeight;
}

function setHeight() {
  $('.window-plate').height(calcHeight());
  $('.left-bar').height(calcHeight());
  $('.rooms').height(calcHeight() - 29);
}

$(window).resize(function () {
  setHeight();
});

setHeight();