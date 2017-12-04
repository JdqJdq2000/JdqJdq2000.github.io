$('#checkBox1').on('click', function() {
  $('#centerpic').fadeToggle(400);
});

$('#checkBox2').on('click', function() {
  $('#aboutuspic').fadeToggle(400);
});

$('#checkBox3').on('click', function() {
  $('#prefooterpic').fadeToggle(400);
  $('footer').css('margin-top', '20px');
  if (!$("#checkBox3").is(":checked")) {
    $('footer').css('margin-top', '0');
  }
});

$('#burgernav').hide();


$('.hamburger').on('click', function() {
  $('.restzoomprod').removeClass('zoomproductgo');
  $('#burgernav ul').css('text-align', 'left');
  $('#burgernav ul').css('padding-left', '0px');
  $('#burgernav ul').css('list-style-type', 'none');
  $('.fa').toggleClass('rotateburger');
  // $('#burgernav').show();
  $('#burgernav').fadeToggle(1000);
  $('.restzoomprod').removeClass('zoomproductgo');
});

$('#burgerlist').on('click', function() {
  $('#burgernav').hide();
  $('.restzoomprod').removeClass('zoomproductgo');
  $('.fa').removeClass('rotateburger');
});

$(window).resize(function() {
  $('#burgernav').hide();
  $('.restzoomprod').removeClass('zoomproductgo');

  // $('.hamburger').hide();
  $('.fa').removeClass('rotateburger');
  // $('.hamburger').show();
});
// Smooth scrolling
$('a[href*="#"]').on('click', function(event) {
  // On-page links
  $('.restzoomprod').removeClass('zoomproductgo');

  if (
    location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') &&
    location.hostname == this.hostname
  ) {
    // Figure out element to scroll to
    var target = $(this.hash);
    target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
    // Does a scroll target exist?
    console.log('[name=' + this.hash.slice(1) + ']');

    // $('#wellcapsules').addClass('rotatewellcapsules');
    if (target.length) {
      // Only prevent default if animation is actually gonna happen
      event.preventDefault();
      switch (this.hash.slice(1)) {
        case "restspray":
        case "relaxspray":
        case "focusspray":
        case "welldrops":
        case "healcream":
          $('html, body').animate({
            scrollTop: target.offset().top - 180
          }, 800);
          break;
        default:
          $('html, body').animate({
            scrollTop: target.offset().top - 90
          }, 800);
      }
    }
  }
});

// Spin products and zoom
$('#restanchor').on('click', function() {

  setTimeout(function() {
    $('#restspray').toggleClass('rotateproduct');
  }, 500);
});

$('#restspray, #restspray2').on('click', function() {
  setTimeout(function() {
    $('.restzoomprod').addClass('zoomproductgo');
  }, 100);
});

$('#restclose').on('click', function() {
  setTimeout(function() {
    $('.restzoomprod').removeClass('zoomproductgo');
  }, 100);
});

$('#relaxanchor').on('click', function() {
  setTimeout(function() {
    $('#relaxspray').toggleClass('rotateproduct');
  }, 500);
});

$('#focusanchor').on('click', function() {
  setTimeout(function() {
    $('#focusspray').toggleClass('rotateproduct');
  }, 500);
});

$('#wellanchor').on('click', function() {
  setTimeout(function() {
    $('#welldrops').toggleClass('rotateproduct');
    $('#wellcapsules').toggleClass('rotateproduct');
  }, 500);
});

$('#healanchor').on('click', function() {
  setTimeout(function() {
    $('#healcream').toggleClass('rotateproduct');
  }, 500);
});

// $(window).resize(function(){
//
//        if ($('#check2').css("display") == "none"){
//               $('nav').css('background-color', 'red');
//                console.log("<div>" + $( window ).width() + "</div>" );
//             } else {
//                    $('nav').css('background-color', 'white');
//                     console.log( "<div>" + $( window ).width() + "</div>" );
//                  }
// });

$(window).on('scroll', function() {
  $('.restzoomprod').removeClass('zoomproductgo');
});
