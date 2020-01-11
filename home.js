//variables, functions

let navbarMobile = function() {
  let pageWidth = parseInt(document.body.offsetWidth);

  $(window).resize(function() {
    pageWidth = parseInt(document.body.offsetWidth);
    if (pageWidth < 580) {
      $('#navbar').removeClass('sticky-top');
    } else if (pageWidth > 580) {
      $('#navbar').addClass('sticky-top')
    }
  })
  
};

navbarMobile();

