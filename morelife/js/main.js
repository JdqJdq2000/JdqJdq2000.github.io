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

$('a[href*="#"]').on('click', function(event) {
  // On-page links
  if (
    location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') &&
    location.hostname == this.hostname
  ) {
    // Figure out element to scroll to
    var target = $(this.hash);
    target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
    // Does a scroll target exist?
    console.log('[name=' + this.hash.slice(1) + ']');
    var name1 = this.hash.slice(1);
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
      };
    }
  }
});


$('#restanchor').on('click', function() {

  setTimeout(function() {
    $('#restspray').toggleClass('rotateproduct');
  }, 500);
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
