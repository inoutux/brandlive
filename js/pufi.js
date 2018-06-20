$(function() {

  // Menu responsive
  var $menu = $('.toggle');
  var $foldOut = $('.fold-out');

  $menu.click(function(e){
        e.stopPropagation();
        $(this).toggleClass('change');
        $foldOut.toggleClass('fold-out-open');
  });


// slider 

var slideIndex = 0;
showSlides();

function showSlides() {

    var i;
    var slides = document.getElementsByClassName("pf-slides");
    var dots = document.getElementsByClassName("slide-dot");

    for (i = 0; i < slides.length; i++) {
       slides[i].style.display = "none";
    }

    slideIndex++;

    if (slideIndex > slides.length) {slideIndex = 1}

    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" slide-active", "");
    }

    slides[slideIndex-1].style.display = "block";
    dots[slideIndex-1].className += " slide-active";
    setTimeout(showSlides, 5000);
}

  //Validar email

  var validate_email = function(email){
  var pattern = /^([a-zA-A0-9_.-])+@([a-zA-Z0-9_.-])+([a-zA-Z])+/;
  var is_email_valid = false;

  if(email.match(pattern) != null){
    is_email_valid = true;
  }
    return is_email_valid;
  }

  $(document).on("keyup", "#email", function(event){
    var keypressed = event.which;
    var input_val = $(this).val();
    var is_success = true;
    if(keypressed == 9){
      is_success = validate_email(input_val);
      if(!is_success){
        $(this).focus();
        $(".pf-msg-email").html("UPS! Parece que está mal el mail ingresado :/");
        $(".pf-msg-email").show();
      } else {
        $(".pf-msg-email").hide();
      }
    }
  });

  $(document).on("focusout", "#email", function(){
    var input_val = $(this).val();
    var is_success = validate_email(input_val);

    if(!is_success){
      $("#email").focus();
      $(".pf-msg-email").html("");
      $(".pf-msg-email").show();
    } else {
      $(".pf-msg-email").hide();
    }
  });



  (function() {

  var hamburger = {
    navToggle: document.querySelector('.nav-toggle'),
    nav: document.querySelector('nav'),

    doToggle: function(e) {
      e.preventDefault();
      this.navToggle.classList.toggle('expanded');
      this.nav.classList.toggle('expanded');
    }
  };

  hamburger.navToggle.addEventListener('click', function(e) { hamburger.doToggle(e); });
  hamburger.nav.addEventListener('click', function(e) { hamburger.doToggle(e); });

}());

});