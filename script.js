
//PARALLAX

$(window).scroll(function() {
  parallax();
});

function parallax() {

  var wScroll = $(window).scrollTop();

  $('.parallax--bg').css('background-position', 'center '+(wScroll*0.5)+'px');
}


$(document).ready(function() {

  $('.scroll').click(function(e){
    e.preventDefault();
    $('html,body').animate({scrollTop:$(this.hash).offset().top}, 1000 );
});
});

$(document).ready(function(){
  $('.nav-item').click(function(){
    $('.nav-item').removeClass("active");
    $(this).addClass("active");

  });
});


document.querySelector('.burger').addEventListener('click', () => {
document.querySelector('.nav-ul-list').classList.toggle('nav-active');
	});

document.querySelector('.burger').addEventListener('click', () => {
document.querySelector('.burger-exit').classList.toggle('active-exit-burger');
  	});


    $(document).ready(function(){
      $('.burger-exit').click(function(){
        $('.nav-ul-list').removeClass('nav-active');
        $('.burger-exit').removeClass('active-exit-burger')
      });
    });


    $(document).ready(function(){
      $('.ind-nav-link').click(function(){
        $('.nav-ul-list').removeClass('nav-active');
        $('.burger-exit').removeClass('active-exit-burger');
      });
    });



//Scroll Animation - Navigation
$(window).scroll(function() {
  if ($(document).scrollTop() > 50) {
    $('#nav-container-box').addClass('nav-bg-scroll');
    $('.ind-nav-link').addClass('nav-text-scroll');
    $('.logo-image').addClass('logo-image-scroll');
    $('.burger div').addClass('burger-scroll');
    $('.ind-nav-link').addClass('ind-nav-link-scroll');
  }
  else {
    $('#nav-container-box').removeClass('nav-bg-scroll');
    $('.ind-nav-link').removeClass('nav-text-scroll');
    $('.logo-image').removeClass('logo-image-scroll');
    $('.burger div').removeClass('burger-scroll');
    $('.ind-nav-link').removeClass('ind-nav-link-scroll');
  }
});


//Scroll Animation for Services Section
$(window).scroll(function() {
  if ($(document).scrollTop() > 300) {
    $('.s1-des, .s1-img').addClass('s123-scroll');
  }
  else {
    $('.s1-des, .s1-img').removeClass('s123-scroll');
  }
});

$(window).scroll(function() {
  if ($(document).scrollTop() > 650) {
    $('.s2-des, .s2-img').addClass('s123-scroll');
  }
  else {
    $('.s2-des, .s2-img').removeClass('s123-scroll');
  }
});

$(window).scroll(function() {
  if ($(document).scrollTop() > 1000) {
    $('.s3-des, .s3-img').addClass('s123-scroll');
  }
  else {
    $('.s3-des, .s3-img').removeClass('s123-scroll');
  }
});




$('.single-item').slick({
	speed: 500,
	fade: true,
  cssEase: 'linear',
	autoplay: true,
  autoplaySpeed: 5000,
});




/*
$('.autoplay').slick({
  slidesToShow: 3,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 2000,
});*/
