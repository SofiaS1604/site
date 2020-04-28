$(document).ready(function(){
    $('.menu_item').click(function () {
        $('.menu_mobile').removeClass('menu_mobile-active');
        $('.menu').removeClass('active_menu');
    });

    $('a').on('click', function(e){
        let anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $(anchor.attr('href')).offset().top
        }, 800);
        e.preventDefault();
    });

    let active = 0;

    $('.menu').click(function () {
        if(active === 1){
            $('.menu').removeClass('active_menu');
            $('.menu_mobile').removeClass('menu_mobile-active');
            active = 0;
        }else{
            $('.menu').addClass('active_menu');
            $('.menu_mobile').addClass('menu_mobile-active');
            active = 1;
        }
    });

    $('.block-left').click(function () {
        $('.slid_image-left').animate({
            left: 200,
            maxWidth: 750,
            maxHeight: 500
        },500);

        $('.slid_image-center').animate({
            left: 955,
            maxWidth: 500,
            maxHeight: 300
        },500);

        $('.slid_image-left').addClass('image_left');
        $('.slid_image-right').addClass('slid_image-left').removeClass('slid_image-right');

        $('.slid_image-right').animate({
            left: 1150,
            maxWidth: 500,
            maxHeight: 300
        },600);

        $('.slid_image-center').addClass('slid_image-right').removeClass('slid_image-center');
        $('.image_left').addClass('slid_image-center').removeClass('slid_image-left').removeClass('image_left');
    });

});
