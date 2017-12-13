// When you click on the checkbox 1 2 or 3 the picture will collapse

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

var currentImage =7;
// Products carousel
$('#line').on('click', function() {
      $('.productCarousel').addClass('zoomproductgo');



      $('#1').hide();
      $('#2').hide();
      $('#3').hide();
      $('#4').hide();
      $('#5').hide();
      $('#6').hide();
    $('img').eq(7).fadeIn(300);
    $('#next').on('click', function() {
      if (currentImage < 12) {
      $('img').eq(currentImage).fadeOut(0);
      currentImage++;

      $('img').eq(currentImage).fadeIn(300);
    } else {
      $('img').eq(currentImage).fadeOut(0);
      currentImage = 7;

      $('img').eq(currentImage).fadeIn(300);
    }
    });

    $('#previous').on('click', function() {

      if (currentImage === 7) {
      $('img').eq(currentImage).fadeOut(0);
      currentImage=12;

      $('img').eq(currentImage).fadeIn(300);
    } else {

      $('img').eq(currentImage).fadeOut(0);
      currentImage += -1;

      $('img').eq(currentImage).fadeIn(300);
    }
    });

});

$('#close').on('click', function() {
      $('.productCarousel').removeClass('zoomproductgo');
      window.location.reload(true);

});

    // Hide the hamburger nav for now
    $('#burgernav').hide();

    // If you click on the hamburger nav bring out the menu.  if the product zoom is engaged it will close.
    $('.hamburger').on('click', function() {
      $('.restzoomprod').removeClass('zoomproductgo');
      $('.relaxzoomprod').removeClass('zoomproductgo');
      $('.focuszoomprod').removeClass('zoomproductgo');
      $('.welldropszoomprod').removeClass('zoomproductgo');
      $('.wellcapszoomprod').removeClass('zoomproductgo');
      $('.healzoomprod').removeClass('zoomproductgo');
      $('#burgernav ul').css('text-align', 'left');
      $('#burgernav ul').css('padding-left', '0px');
      $('#burgernav ul').css('list-style-type', 'none');
      $('.fa').toggleClass('rotateburger');
      $('#burgernav').fadeToggle(100);

    });

    // If a menu item is chosen, close the hamburger list
    $('#burgerlist').on('click', function() {
      $('#burgernav').hide();
      $('.restzoomprod').removeClass('zoomproductgo');
      $('.relaxzoomprod').removeClass('zoomproductgo');
      $('.focuszoomprod').removeClass('zoomproductgo');
      $('.welldropszoomprod').removeClass('zoomproductgo');
      $('.wellcapszoomprod').removeClass('zoomproductgo');
      $('.healzoomprod').removeClass('zoomproductgo');
      $('.fa').removeClass('rotateburger');
    });

    // If the window is resized do some checks and clear out zooms
    $(window).resize(function() {
      // Hide any zoomed out product
      // $('.restzoomprod').removeClass('zoomproductgo');
      // $('.relaxzoomprod').removeClass('zoomproductgo');
      // $('.focuszoomprod').removeClass('zoomproductgo');
      // $('.welldropszoomprod').removeClass('zoomproductgo');
      // $('.wellcapszoomprod').removeClass('zoomproductgo');
      // $('.healzoomprod').removeClass('zoomproductgo');
      // Hide the hamburger list
      $('.productCarousel').removeClass('zoomproductgo');
      $('#burgernav').hide();
      // $('.hamburger').hide();
      $('.fa').removeClass('rotateburger');
      // $('.hamburger').show();
    });

    // Smooth scrolling if you click on any anchor
    $('a[href*="#"]').on('click', function(event) {
      // On-page links
      // Close zoomed product on any click


      $('.restzoomprod').removeClass('zoomproductgo');
      $('.relaxzoomprod').removeClass('zoomproductgo');
      $('.focuszoomprod').removeClass('zoomproductgo');
      $('.welldropszoomprod').removeClass('zoomproductgo');
      $('.wellcapszoomprod').removeClass('zoomproductgo');
      $('.healzoomprod').removeClass('zoomproductgo');

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

    // REST Spin ===================================
    $('#restanchor').on('click', function() {
      setTimeout(function() {
        $('#restspray').toggleClass('rotateproduct');
      }, 500);
    });

    // REST Zoom modal triggered
    $('#restspray, #restspray2').on('click', function() {
      setTimeout(function() {
        $('.relaxzoomprod').removeClass('zoomproductgo');
        $('.focuszoomprod').removeClass('zoomproductgo');
        $('.welldropszoomprod').removeClass('zoomproductgo');
        $('.wellcapszoomprod').removeClass('zoomproductgo');
        $('.healzoomprod').removeClass('zoomproductgo');
        $('.restzoomprod').addClass('zoomproductgo');
      }, 100);
    });

    //REST zoom close button hit
    $('#restclose').on('click', function() {
      setTimeout(function() {
        $('.restzoomprod').removeClass('zoomproductgo');
      }, 100);
    });

    // RELAX Spin ===================================
    $('#relaxanchor').on('click', function() {
      setTimeout(function() {
        $('#relaxspray').toggleClass('rotateproduct');
      }, 500);
    });

    // RELAX Zoom modal triggered
    $('#relaxspray, #relaxpray2').on('click', function() {
      setTimeout(function() {
        $('.restzoomprod').removeClass('zoomproductgo');
        $('.focuszoomprod').removeClass('zoomproductgo');
        $('.welldropszoomprod').removeClass('zoomproductgo');
        $('.wellcapszoomprod').removeClass('zoomproductgo');
        $('.healzoomprod').removeClass('zoomproductgo');
        $('.relaxzoomprod').addClass('zoomproductgo');
      }, 100);
    });

    //RELAX zoom close button hit
    $('#relaxclose').on('click', function() {
      setTimeout(function() {
        $('.relaxzoomprod').removeClass('zoomproductgo');
      }, 100);
    });

    // FOCUS Spin ===================================
    $('#focusanchor').on('click', function() {
      setTimeout(function() {
        $('#focusspray').toggleClass('rotateproduct');
      }, 500);
    });

    // FOCUS Zoom modal triggered
    $('#focusspray, #focusspray2').on('click', function() {
      setTimeout(function() {
        $('.restzoomprod').removeClass('zoomproductgo');
        $('.relaxzoomprod').removeClass('zoomproductgo');
        $('.welldropszoomprod').removeClass('zoomproductgo');
        $('.wellcapszoomprod').removeClass('zoomproductgo');
        $('.healzoomprod').removeClass('zoomproductgo');
        $('.focuszoomprod').addClass('zoomproductgo');
      }, 100);
    });

    //FOCUS zoom close button hit
    $('#focusclose').on('click', function() {
      setTimeout(function() {
        $('.focuszoomprod').removeClass('zoomproductgo');
      }, 100);
    });

    // Spring two products
    // WELL Spins ===================================
    $('#wellanchor').on('click', function() {
      setTimeout(function() {
        $('#welldrops').toggleClass('rotateproduct');
        $('#wellcapsules').toggleClass('rotateproduct');
      }, 500);
    });

    // WELL Drops Zoom modal triggered
    $('#welldrops, #welldrops2').on('click', function() {
      setTimeout(function() {
        $('.restzoomprod').removeClass('zoomproductgo');
        $('.relaxzoomprod').removeClass('zoomproductgo');
        $('.focuszoomprod').removeClass('zoomproductgo');
        $('.wellcapszoomprod').removeClass('zoomproductgo');
        $('.healzoomprod').removeClass('zoomproductgo');
        $('.welldropszoomprod').addClass('zoomproductgo');
      }, 100);
    });

    //WELL Drops zoom close button hit
    $('#welldropsclose').on('click', function() {
      setTimeout(function() {
        $('.welldropszoomprod').removeClass('zoomproductgo');
      }, 100);
    });

    // WELL Capsules Zoom modal triggered
    $('#wellcapsules, #wellcapsules2').on('click', function() {
      setTimeout(function() {
        $('.restzoomprod').removeClass('zoomproductgo');
        $('.relaxzoomprod').removeClass('zoomproductgo');
        $('.focuszoomprod').removeClass('zoomproductgo');
        $('.welldropszoomprod').removeClass('zoomproductgo');
        $('.healzoomprod').removeClass('zoomproductgo');
        $('.wellcapszoomprod').addClass('zoomproductgo');
      }, 100);
    });

    //WELL Capsules zoom close button hit
    $('#wellcapsclose').on('click', function() {
      setTimeout(function() {
        $('.wellcapszoomprod').removeClass('zoomproductgo');
      }, 100);
    });

    // HEAL Spin ===================================
    $('#healanchor').on('click', function() {
      setTimeout(function() {
        $('#healcream').toggleClass('rotateproduct');
      }, 500);
    });

    // Heal Cream Zoom modal triggered
    $('#healcream, #healcream2').on('click', function() {
      setTimeout(function() {
        $('.restzoomprod').removeClass('zoomproductgo');
        $('.relaxzoomprod').removeClass('zoomproductgo');
        $('.focuszoomprod').removeClass('zoomproductgo');
        $('.welldropszoomprod').removeClass('zoomproductgo');
        $('.wellcapszoomprod').removeClass('zoomproductgo');
        $('.healzoomprod').addClass('zoomproductgo');
      }, 100);
    });

    //WEAL Cream zoom close button hit
    $('#healcreamclose').on('click', function() {
      setTimeout(function() {
        $('.healzoomprod').removeClass('zoomproductgo');
      }, 100);
    });

    // On scroll do some cleanup
    $(window).on('scroll', function() {

      $('.restzoomprod').removeClass('zoomproductgo');
      $('.relaxzoomprod').removeClass('zoomproductgo');
      $('.focuszoomprod').removeClass('zoomproductgo');
      $('.welldropszoomprod').removeClass('zoomproductgo');
      $('.wellcapszoomprod').removeClass('zoomproductgo');
      $('.healzoomprod').removeClass('zoomproductgo');
      $('.fa').removeClass('rotateburger');
    });
