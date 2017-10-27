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