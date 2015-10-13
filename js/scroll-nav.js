//
// ========================================================
// NAV CHANGES WHEN SCROLLING UP+DOWN ON PAGE
// ========================================================
//
// // Hide Header on on scroll down
// var didScroll;
// var lastScrollTop = 0;
// var delta = 7;
// var navbarHeight = $('nav').outerHeight();
//
//
// $(window).scroll(function(event){
//     didScroll = true;
// });
//
// setInterval(function() {
//     if (didScroll) {
//         hasScrolled();
//         didScroll = false;
//     }
// }, 250);
//
// function hasScrolled() {
//     var st = $(this).scrollTop();
//
//     // Make sure they scroll more than delta
//     if(Math.abs(lastScrollTop - st) <= delta)
//         return;
//
//     // If they scrolled down and are past the navbar, add class .nav-up.
//     // This is necessary so you never see what is "behind" the navbar.
//     if (st > lastScrollTop && st > navbarHeight){
//         // Scroll Down
//         $('#pagenav').removeClass('nav-down').addClass('nav-up');
//         $('#nav-open').removeClass('nav-down').addClass('nav-up');
//     } else {
//         // Scroll Up
//         if(st + $(window).height() < $(document).height()) {
//             $('#pagenav').removeClass('nav-up').addClass('nav-down');
//             $('#nav-open').removeClass('nav-up').addClass('nav-down');
//         }
//     }
//
//     lastScrollTop = st;
// }

//
// **TEMPORARY FIX ON THE SUBNAV**
// **UNTIL I CAN FIX THE UPSCROLL OF THE PAGE ON MOUSEOVER**
// ========================================================
// NAV CHANGES WHEN SCROLLING DOWN PAST THE TOP OF THE PAGE
// ========================================================
//
var scrollPoint = $('nav').outerHeight();

$(function() {
    //caches a jQuery object containing the header element
    var pagenav = $("#pagenav");
    var mainnav = $("#nav-open");
    $(window).scroll(function() {
        var scroll = $(window).scrollTop();

        if (scroll >= scrollPoint) {
          pagenav.removeClass('nav-down').addClass('nav-up');
          mainnav.removeClass('nav-down').addClass('nav-up');
        } else {
          pagenav.removeClass('nav-up').addClass('nav-down');
          mainnav.removeClass('nav-up').addClass('nav-down');
        }
    });
});
