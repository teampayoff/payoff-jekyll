var navbarHeight = $('nav').outerHeight();

$(function() {
    //caches a jQuery object containing the header element
    var header = $("nav");
    $(window).scroll(function() {
        var scroll = $(window).scrollTop();

        if (scroll >= navbarHeight) {
            header.removeClass('navbar-naked').addClass("navbar-default");
        } else {
            header.removeClass("navbar-default").addClass('navbar-naked');
        }
    });
});
