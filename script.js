//PARALLAX
/*
$(window).scroll(function() {
  parallax();
});

function parallax() {

  var wScroll = $(window).scrollTop();

  $('.parallax--bg').css('background-position', 'center '+(wScroll*0.5)+'px');
}
*/


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
  if ($(document).scrollTop() > 250) {
    $('#nav-container-box').addClass('nav-bg-scroll');
    $('.logo-image').addClass('logo-image-scroll');
  }
  else {
    $('#nav-container-box').removeClass('nav-bg-scroll');
    $('.logo-image').removeClass('logo-image-scroll');
  }
});



//Scroll Animation for Services Section
/*
$(window).scroll(function() {
  if ($(document).scrollTop() > 650) {
    $('.about-des, .about-img').addClass('about-scroll');
  }
  else {
    $('.about-des, .about-img').removeClass('about-scroll');
  }
});*/

//Grid Links for Front-Page
$(".grid-portfolio-item").click(function() {
  window.location = $(this).find("a").attr("href");
  return false;
});


//Grid Links for Listings Page
$(".lp-list-item").click(function() {
  window.location = $(this).find("a").attr("href");
  return false;
});


//Header-Image-Carousel
$('.single-item-head').slick({
	speed: 500,
	fade: true,
  cssEase: 'linear',
	autoplay: true,
  autoplaySpeed: 5000,
});

//Testimonial-Carousel
$('.single-item-test').slick({
	speed: 500,
	fade: false,
  cssEase: 'linear',
	autoplay: true,
  autoplaySpeed: 3000,
  arrows: false,
  dots: true,
});

//ind list page sliders
$('.slider-for').slick({
 slidesToShow: 1,
 slidesToScroll: 1,
 arrows: false,
 fade: true,
 asNavFor: '.slider-nav'
});
$('.slider-nav').slick({
 slidesToShow: 5,
 slidesToScroll: 1,
 asNavFor: '.slider-for',
 dots: true,
 centerMode: true,
 focusOnSelect: true
});
