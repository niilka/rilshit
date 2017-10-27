$('.left-bar-collapse').click(function () {
  if ($('.left-bar').hasClass('iscollapsed')) {
    $('.left-bar').removeClass('iscollapsed');
    $('.left-bar').addClass('large');
    $('.room-info').css('display', 'block');
    $('.links').addClass('large');
  } else {
    $('.left-bar').addClass('iscollapsed');
    $('.left-bar').removeClass('large');
    $('.room-info').css('display', 'none');
    $('.links').removeClass('large');
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