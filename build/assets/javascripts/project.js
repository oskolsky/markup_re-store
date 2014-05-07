//****************************************************************************************************
//
// .. EVENTS
//
//****************************************************************************************************
//
// .. Add bookmark
//
$(document).on('click', '.action-controls > .action-controls_i.__bookmark', function() {
    var $el = $(this);

    $el.hasClass('__active') ? $el.removeClass('__active') : $el.addClass('__active');
    return false;
});



//****************************************************************************************************
//
// .. READY
//
//****************************************************************************************************
$(function() {

    //
    // .. Masket input
    //
    $('.form-el.__tx.__phone').mask('+7 (999) 999-99-99');
    $('.form-el.__tx.__date').mask('99.99.99');

    //
    // .. OWL Carousel init
    //
    $('.owl-carousel').each(function() {
        var $owl = $(this);

        $owl.owlCarousel({
            autoWidth: true,
            items: 4,
            loop: false,
            margin: 20,
            merge: true,
            navigation: true,
            navText: false,
            info: setShadow
        });

        function setShadow(i) {
            i.currentPosition == 0 ? $owl.removeClass('__shadow-left') : $owl.addClass('__shadow-left');
            i.currentPosition == (i.allItems - i.items) ? $owl.removeClass('__shadow-right') : $owl.addClass('__shadow-right');
        }

    });

    //
    // .. Content carousel init
    //
    $('.content-carousel').each(function() {
        var 
            _this = this,
            $owl = $(this).find('.content-carousel_slider');

        $owl.owlCarousel({
            items: 1,
            loop: false,
            navigation: true,
            navText: false,
            info: setCounter
        });

        function setCounter(i) {
            $(_this).find('.content-carousel_counter').html((i.currentPosition + 1) + ' из ' + i.allItems);
        }
    });



    //****************************************************************************************************
    //
    // .. SCROLL
    //
    //****************************************************************************************************
    $(window).scroll(function() {});



    //****************************************************************************************************
    //
    // .. RESIZE
    //
    //****************************************************************************************************
    $(window).smartresize(function() {});

});



//****************************************************************************************************
//
// .. LOAD
//
//****************************************************************************************************
$(window).load(function() {});