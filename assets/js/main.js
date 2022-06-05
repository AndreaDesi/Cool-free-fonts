//Random number function

function randomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min)
}

$(document).ready(function(){
  let colore = randomInt(0, 255);
  $('::selection').css('background', 'hsl('+colore+', 100%, 80%)');
});

//Filtri front page

$('#serif-btn').click(function(){
  $('.selectors-category > button').addClass('selectors-dim');
  $('#serif-btn').removeClass('selectors-dim');
  $('.block').show();
  $('.sans-tag').hide();
  $('.mono-tag').hide();
})

$('#sans-btn').click(function(){
  $('.selectors-category > button').addClass('selectors-dim');
  $('#sans-btn').removeClass('selectors-dim');
  $('.block').show();
  $('.serif-tag').hide();
  $('.mono-tag').hide();
})

$('#mono-btn').click(function(){
  $('.selectors-category > button').addClass('selectors-dim');
  $('#mono-btn').removeClass('selectors-dim');
  $('.block').show();
  $('.serif-tag').hide();
  $('.sans-tag').hide();
})

$('#all-btn').click(function(){
  $('.selectors-category > button').removeClass('selectors-dim');
  $('.block').show();
})


//Animazioni colori front page

$('.block').mouseenter(function(){
  let hue = randomInt(0, 255);
  $(this).css('background-color', 'hsl('+hue+', 100%, 80%)');
}).mouseleave(function(){
  $(this).css('background-color', 'white');
})

//About

$(document).ready(function(){
  $('.about-text, .about-contacts').fadeOut(0);
})

$('.about-btn').click(function(){  
  $('nav').toggleClass('nav-extend');
  $('.about-text, .about-contacts').fadeToggle('fast');
})





//Sets --color3 to random number
$(document).ready(function(){
  let colore = randomInt(0, 255);
  $('html').css('--color3', 'hsl('+colore+', 100%, 80%)');
});


//Swaps colors
$('.swap-btn').click(function(){
    $('.content').toggleClass('right').toggleClass('inv');
    $('.swiper-button-prev').toggleClass('right').toggleClass('inv');
    $('.swiper-button-next').toggleClass('right').toggleClass('inv');
});

//random color
$('.rand-btn').click(function(){
  let hue = randomInt(0, 255);
  
  $('html').css('--color2', 'hsl('+hue+', 100%, 80%)').css('--color3', 'var(--color2)');
});

//reset black and white
$('.bw-btn').click(function(){
  let hue = randomInt(0, 255);
  if ($('.content').hasClass('inv')) {
    $('.content').removeClass('inv').addClass('right');
  }
  $('html').css('--color2', 'white').css('--color3', 'hsl('+ hue +', 100%, 80%)');;
});