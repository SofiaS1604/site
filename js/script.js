$(document).ready(function(){
    $('.navigation-link').on('click', function(e){
        let anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $(anchor.attr('href')).offset().top
        }, 800);
        e.preventDefault();
    });

    let parcent = -100;
    setInterval(function () {
        $('.slid-1__news').css('left', `${parcent}%`);
        $('.slid-2__news').css('left', `${parcent + 100}%`);
        $('.slid-3__news').css('left', `${parcent + 200}%`);
        $('.slid-4__news').css('left', `${parcent + 300}%`);


        parcent = parcent === - 300 ? 0 : parcent - 100;
    },3000);




    let slid = -700;
    $('.slider-comments__arrow--left').click(function () {
        var activeSlide = $('.slider-comments--active');
        var indexActiveSlide = activeSlide.index();
        var nextActiveSlide;
        if(indexActiveSlide == 0){
            nextActiveSlide = $('.slider-comments__slid').length - 1
        }else{
            nextActiveSlide = indexActiveSlide - 1;
        }

        var nextSlide = $('.slider-comments__slid').eq(nextActiveSlide);
        nextSlide.css('left',-700);
        nextSlide.animate({left:0},800);
        activeSlide.animate({left:1400},800);


        setTimeout(function () {
            nextSlide.addClass('slider-comments--active')
            activeSlide.removeClass('slider-comments--active')

        },800)
    })

    $('.slider-comments__arrow--right').click(function () {
        var activeSlide = $('.slider-comments--active');
        var indexActiveSlide = activeSlide.index();
        var nextActiveSlide;

        if(indexActiveSlide == $('.slider-comments__slid').length - 1){
            nextActiveSlide = 0
        }else{
            nextActiveSlide = indexActiveSlide + 1;
        }

        var nextSlide = $('.slider-comments__slid').eq(nextActiveSlide);
        nextSlide.css('left',700);
        nextSlide.animate({left:0},800);
        activeSlide.animate({left:-700},800);

        // пагинатор

        setTimeout(function () {
            nextSlide.addClass('slider-comments--active')
            activeSlide.removeClass('slider-comments--active')
        },800)
    })

});

