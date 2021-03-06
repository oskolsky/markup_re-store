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

//
// .. Comments reply
//
$(document).on('click', '.js-comments-reply', function() {
    var $el = $(this).closest('.comments_i').find('.comments_i_reply');
    if ($el.is(':hidden')) {
        $(this).text('Закрыть');
        $el.fadeIn();
        $el.find('.form-el.__textarea').focus();
    } else {
        $(this).text('Ответить');
        $el.fadeOut();
    }
    return false;
});

//
// .. Save feedback form
//
$(document).on('click', '#feedback-form-send', function() {
    $.ajax({
      type: 'POST',
      url:  '/',
      data: $('#feedback-form').find('.form').serialize(),
      success: function() {
          $('#feedback-form-message').text('Анкета успешно сохранена');
          // $('#feedback-form')[0].reset(); - ЕСЛИ НУЖНО РЕСЕТИТЬ ФОРМУ
      },
      error: function() {
          $('#feedback-form-message').text('Анкету сохранить не удалось, пожалуйста попробуйте позднее');
      }
    });
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
    $('.form-el.__tx.__date').mask('99.99.9999');

    //
    // .. OWL Carousel init
    //
    $('.owl-carousel').each(function() {
        var $owl = $(this);

        var slides = $owl.find('.grid-i').length;

        if (slides > 4) {
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
        } else {
            $owl.addClass('grid').show();
        }

    });

    //
    // . Promo carousel init
    //
    $('.sport-promo').each(function() {
        var $owl = $(this).find('.sport-promo_carousel');

        $owl.owlCarousel({
            items: 1,
            loop: false,
            info: setNavBlock
        });

        var owlApi = $owl.data('owlCarousel');

        $(this).find('.sport-nav-block').find('.sport-nav-block_header').on('click', function(){
            var item = $(this).data('item');
            owlApi.goTo(item);
            return false;
        });

        function setNavBlock(i) {
            $('.sport-nav-block.__current').removeClass('__current');
            $('.sport-nav-block').find('.sport-nav-block_header[data-item="' + i.currentPosition + '"]').closest('.sport-nav-block').addClass('__current');
        }
    });

    //
    // .. Content carousel init
    //
    $('.content-carousel').each(function() {
        var 
            _this = this,
            $owl = $(this).find('.content-carousel_slider');

        var slides = $owl.find('img').length;

        if (slides > 1) {
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
        }
    });

    //
    // .. Raty init
    // .. http://wbotelhos.com/raty
    //
    $('.raty').each(function() {
        var 
            _this = this,
            score = $(_this).data('score');

        $(this).raty({
            starOff  : '/assets/images/friends/star-off.png',
            starOn   : '/assets/images/friends/star-on.png',
            starHalf : '/assets/images/friends/star-half.png',
            readOnly: true,
            score: $(_this).data('score')
        });
    });

    //
    // .. Jquery ui tabs init
    //
    $('.tabs').tabs({
        activate: function(event, ui) {
            //
            // .. Sticky
            // .. https://github.com/leafo/sticky-kit
            //
            $('#sidebar').trigger('sticky_kit:recalc');
            $('#header').trigger('sticky_kit:recalc');
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
$(window).load(function() {

    if (window.matchMedia) {
        if (matchMedia('all and (min-width: ' + config.matchMedia.desktop.minWidth + 'px)').matches) {
            //
            // .. Sticky
            // .. https://github.com/leafo/sticky-kit
            //
            $('#sidebar').stick_in_parent({
                parent: '.main > .ctn',
                offset_top: 80
            });
            
            $('#header').stick_in_parent({
                parent: '.page'
            });
        }
    }

    
});