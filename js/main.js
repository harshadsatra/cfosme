/*jQuery*/

(function ($) {
    // USE STRICT
    "use strict";

    $(document).ready(function () {

        // fixed navbar when scroll
        var navbarFix = $("#js-navbar-fixed");
        var headerOffset = navbarFix.offset().top + 1;
        $(window).scroll(function () {
            if ($(window).scrollTop() > headerOffset) {
                navbarFix.addClass('fixed').removeClass("unfixed");
            } else {
                navbarFix.addClass('unfixed').removeClass("fixed");
            }
        });


        // Magnific Popup
        var galleryPhoto = $('.gallery-photo');
        galleryPhoto.magnificPopup({
            type: 'image',
            gallery: {
                enabled: true
            },
            width: 550
        });

        var careersToglle = $(".careers .au-toggle");

        careersToglle.find(".btn-toggle").on("click", function () {
            if ($(this).text() == "MORE DETAILS") {
                $(this).html("LESS DETAILS");
            } else {
                $(this).html("MORE DETAILS");
            }
        });


        // --------------------------------------------------
        // Back To Top
        // --------------------------------------------------
        var offset = 450;
        var duration = 500;
        var upToTop = $("#up-to-top");
        upToTop.hide();
        $(window).on('scroll', function () {
            if ($(this).scrollTop() > offset) {
                upToTop.fadeIn(duration);
            } else {
                upToTop.fadeOut(duration);
            }
        });

        upToTop.on('click', function (event) {
            event.preventDefault();
            $('html, body').animate({scrollTop: 0}, duration);
            return false;
        });
    });


    /*Preloader animsition*/
    $(window).on('load', function () {
        $('.page-loader').fadeOut('slow', function () {
            $(this).remove();
        });
    });

})(jQuery);

