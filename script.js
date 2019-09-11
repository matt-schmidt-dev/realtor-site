//Google Map Listsings
function initMap() {

  // Map options
  var options = {
    center: {
      lat: 29.834539,
      lng: -95.469543
    },
    zoom: 11
  }

  // New Map
  var map = new google.maps.Map(document.getElementById('map'), options);


  // Array of Markers

  var markers = [{
    //List-One
    coords: {
      lat: 29.826670,
      lng: -95.440063
    },
    content: '<a href="list-one.html"><h5 class="map-marker-content-title">1546 Gardenia Drive</h5><div class="map-marker-content-div"><img class="map-img-tiny" src="css/images/Gardenia-img-1.jpg" alt=""/><div class="map-info"><h5>$1,025,000</h5><h6>4000sq-ft<br>4-Bed<br>3.5-Bath<br></h6></div></div><a/>'
  }, {
    //List-Two
    coords: {
      lat: 29.802740,
      lng: -95.439810
    },
    content: '<a href="list-two.html"><h5 class="map-marker-content-title">1815 Willowby Drive</h5><div class="map-marker-content-div"><img class="map-img-tiny" src="css/images/Millwood-img-1.jpg" alt=""/><div class="map-info"><h5>$435,000</h5><h6>1822sq-ft<br>3-Bed<br>2-Bath<br></h6></div></div><a/>'
  }, {
    //List-Three
    coords: {
      lat: 29.800940,
      lng: -95.432620
    },
    content: '<a href="list-three.html"><h5 class="map-marker-content-title">1822 Millwood Drive</h5><div class="map-marker-content-div"><img class="map-img-tiny" src="css/images/Willowby-img-1.jpg" alt=""/><div class="map-info"><h5>$510,000</h5><h6>1848sq-ft<br>3-Bed<br>2-Bath<br></h6></div></div><a/>'
  }, {
    //List-Four
    coords: {
      lat: 29.837339,
      lng: -95.449348
    },
    content: '<a href="list-four.html"><h5 class="map-marker-content-title">4402 Fallbrook Drive</h5><div class="map-marker-content-div"><img class="map-img-tiny" src="css/images/Fallbrook-img-1.jpg" alt=""/><div class="map-info"><h5>$419,900</h5><h6>1737sq-ft<br>3-Bed<br>2-Bath<br></h6></div></div><a/>'
  }, {
    //List-Five
    coords: {
      lat: 29.903530,
      lng: -95.562202
    },
    content: '<a href="list-five.html"><h5 class="map-marker-content-title">9415 Stone Porch Lane</h5><div class="map-marker-content-div"><img class="map-img-tiny" src="css/images/Stone-img-1.jpg" alt=""/><div class="map-info"><h5>$379,000</h5><h6>3772sq-ft<br>4-Bed<br>3.5-Bath<br></h6></div></div><a/>'
  }, {
    //List-Six
    coords: {
      lat: 29.834539,
      lng: -95.469543
    },
    content: '<a href="list-six.html"><h5 class="map-marker-content-title">5221 Viking Drive</h5><div class="map-marker-content-div"><img class="map-img-tiny" src="css/images/Viking-img-1.jpg" alt=""/><div class="map-info"><h5>$269,000</h5><h6>1414sq-ft<br>3-Bed<br>1.5-Bath<br></h6></div></div><a/>'
  }, {
    //List-Seven
    coords: {
      lat: 29.907460,
      lng: -95.567670
    },
    content: '<a href="list-seven.html"><h5 class="map-marker-content-title">2207 Brimberry Street</h5><div class="map-marker-content-div"><img class="map-img-tiny" src="css/images/Chester-img-1.jpg" alt=""/><div class="map-info"><h5>$1795/month</h5><h6>1206sq-ft<br>2-Bed<br>1-Bath<br></h6></div></div><a/>'
  }, {
    //List-Eight
    coords: {
      lat: 29.833490,
      lng: -95.466460
    },
    content: '<a href="list-eight.html"><h5 class="map-marker-content-title">1546 Gardenia Drive</h5><div class="map-marker-content-div"><img class="map-img-tiny" src="css/images/Lido-img-1.jpg" alt=""/><div class="map-info"><h5>$269,000</h5><h6>1414sq-ft<br>3-Bed<br>1.5-Bath<br></h6></div></div><a/>'
  }]


  // Loop Through markers
  for (var i = 0; i < markers.length; i++) {
    //Add Marker
    addMarker(markers[i]);
  }

  // Add Marker Function
  function addMarker(props) {
    var marker = new google.maps.Marker({
      position: props.coords,
      map: map,
    });

    if (props.content) {

      // Add Info Window
      var infoWindow = new google.maps.InfoWindow({
        content: props.content
      });

      marker.addListener('click', function() {
        infoWindow.open(map, marker);
      });
    }
  }
}




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

/*
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
*/

//ind list page sliders
$('.slider-for').slick({
 slidesToShow: 1,
 slidesToScroll: 1,
 arrows: true,
 fade: true,
 asNavFor: '.slider-nav'
});
$('.slider-nav').slick({
 slidesToShow: 5,
 slidesToScroll: 1,
 asNavFor: '.slider-for',
 dots: false,
 arrows: false,
 centerMode: true,
 focusOnSelect: true
});




/*
$(document).ready(function(){
  var listOneAddress = document.querySelector('#list-one-address');
  var listOneBaths = document.querySelector('#list-one-baths');
  var listOneBeds = document.querySelector('#list-one-beds');
  var listOneSqFt = document.querySelector('#list-one-sq-ft');


document.querySelector('#import-l1-address').textContent = listOneAddress;
document.querySelector('#import-l1-baths').innerHTML = listOneBaths;
document.querySelector('#import-l1-beds').innerHTML = listOneBeds;
document.querySelector('#import-l1-sq-ft').innerHTML = listOneSqFt;
});
*/


/*
//MLS-IDS-Listings
$('#div-ex').load('https://search.har.com/idx/dosearch.cfm?sitetype=aws&cid=238237&allmls=n');
*/
