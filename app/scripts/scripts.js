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


// Roulette

if (!String.prototype.format) {
  String.prototype.format = function () {
    var args = arguments;
    return this.replace(/{(\d+)}/g, function (match, number) {
      return typeof args[number] != 'undefined' ?
        args[number] :
        match;
    });
  };
}
$(window).load(function () {
  console.log('Window loaded!');

  var $roulette = $('#roulette-images-list');
  $roulette.html(generateRouletteImages(200));

  function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  function getPositionOfWinner(winner) {
    var widthOfImg = $('#roulette-img0').width();
    var minDistanceToEdgeAllowed = 4;

    var desiredImg = $('#roulette-img' + winner.toString());

    var minPos = desiredImg.position().left + minDistanceToEdgeAllowed;
    var maxPos = desiredImg.position().left + widthOfImg - minDistanceToEdgeAllowed;

    console.log('Position.Left: {0} | Offset().left: {1}'.format(desiredImg.position().left, desiredImg.offset().left));
    return getRandomInt(minPos, maxPos);
  }

  function printLeftOfRouletteSpinner() {
    var pos = $('#roulette-images-list').position().left;
    if (pos % 100 == 0) console.log(pos);
  }

  function timelineFinished(destImg) {
    // this is where you highlight your winner
    $('#roulette-img' + destImg).css({
      border: '3px solid red'
    });
  }

  function rouletteSpin(destImg) {
    if (!destImg) destImg = 40;
    var tl = new TimelineMax({
        onUpdate: printLeftOfRouletteSpinner,
        onComplete: timelineFinished,
        onCompleteParams: [destImg]
      }),
      rouletteImages = $('#roulette-images-list'),
      startLeft = rouletteImages.position().left;

    tl //.to(rouletteImages, 0, {x: 5000})
      .to(rouletteImages, 10, {
        x: getPositionOfWinner(destImg) * -1,
        ease: Power4.easeOut
      });
    // .to(rouletteImages, 0, {x: 0}, 11);
  }

  $('#spin').click(function () {
    var winner = $('#winner-text').val();
    //if (isNaN(winner) || winner > 49) alert('Enter 0 through 49');
    rouletteSpin(winner);
  });

  function getRandomColor() {
    return ((1 << 24) * Math.random() | 0).toString(16)
  }

  function generateRouletteImages(howMany) {
    var imgTemplate = '<img src="{0}" class="{1}" id="roulette-img{2}">';
    var imgClass = 'roulette-img';
    var imgSrcTemplate = 'http://placehold.it/{0}/{1}?text={2}';

    var completedRouletteImages = [];
    for (var i = 0; i < howMany; i++) {
      var color = getRandomColor();
      var imgSrc = imgSrcTemplate.format('80', color, i);
      var completedTemplate = imgTemplate.format(imgSrc, imgClass, i);
      completedRouletteImages.push('<li>' + completedTemplate + '</li>');
    }
    return completedRouletteImages;
  }
});