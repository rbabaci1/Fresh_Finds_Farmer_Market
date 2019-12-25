$(window).scroll(function() {
    if ($(document).scrollTop() > 0) {
        $('nav').addClass('nav-on-scroll');
    }
    else {
        $('nav').removeClass('nav-on-scroll');
    }
});