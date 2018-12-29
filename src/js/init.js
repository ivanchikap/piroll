$(function() {
    // $('.release-products__tabs').tabs();
     (function () {
         // .menu__nav -  навигация
         let nav = $('.header__nav');

         // .menu-btn - кнопка меню
         $('.header__btn').click(function() {
             if(nav.hasClass('header__nav--active')) {
                 nav.removeClass('header__nav--active');
             }
             else {
                 nav.addClass('header__nav--active');
             }
         });
     }());


    let btn = $(".work-process__player-button");
    let btnInner = $(".work-process__player-button-inner");
    btn.click(function() {
        btnInner.toggleClass("paused");
        return false;
    });



    // $('.owl-carousel').owlCarousel({
    //     loop:true,
    //     dots: true,
    //     // margin: 15,
    //     items: 4,
    //     responsive: {
    //         0: {
    //             items: 1,
    //             dots: false
    //         },
    //         620: {
    //             items: 2
    //         },
    //         950: {
    //             items: 3
    //         },
    //         1370: {
    //             items: 4
    //         },
    //     }
    // });
    //
    // $('.upload-form select').styler();
    // $('.upload-form .upload-form__type-file').styler();
});