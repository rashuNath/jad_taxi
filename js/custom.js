/**
 * Created by rashu on 5/21/2018.
 */
$(document).ready(function () {
    $('.nav-ul').on('click','li', function () {
            $('.nav-ul li.active').removeClass('active');
            $(this).addClass('active');

            // var hasActive = $('.tab-menu li').hasClass('active');
            // console.log(hasActive);
            // if(hasActive){
            //     $('#headDetails').addClass('display-block');
            // }
        });
    $('.navbar-toggle').on('click',function () {
        $('.second').toggleClass('display-none');
        $('.first').toggleClass('first-icon-bar');
        $('.last').toggleClass('last-icon-bar');
    });
    var homeSlider = $('.home-slider');
    homeSlider.owlCarousel({
        merge: true,
        smartSpeed: 2000,
        loop: true,
        autoplay: true,
        stopOnHover: true,
        autoplayTimeout: 5000,
        margin: 0,
        //animateIn: 'fadeIn',
        //animateOut: 'fadeOut',
        responsiveClass: true,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 1
            },
            1000: {
                items: 1
            },
            1200: {
                items: 1
            }
        }
    });

    var newsSlider = $('.news-carousel');
    newsSlider.owlCarousel({
        merge: true,
        smartSpeed: 2000,
        loop: true,
        margin: 30,
        nav: true,
        navText: ['<img src="images/icons/news_carousel_left.png">', '<img src="images/icons/news_carousel_right.png">'],
        //animateIn: 'fadeIn',
        //animateOut: 'fadeOut',
        responsiveClass: true,
        responsive: {
            0: {
                items: 1,
                autoplay: true,
                autoplayTimeout: 3000,
                autoplayHoverPause: true
            },
            600: {
                items: 2,
                autoplay: true,
                autoplayTimeout: 3000,
                autoplayHoverPause: true
            },
            1000: {
                items: 3,
                autoplay: true,
                autoplayTimeout: 3000,
                autoplayHoverPause: true
            },
            1200: {
                items: 3,
                autoplay: true,
                autoplayTimeout: 3000,
                autoplayHoverPause: true
            }
        }
    });

    var fareSlider = $('.fare-slider');
    fareSlider.owlCarousel({
        merge: true,
        smartSpeed: 2000,
        loop: true,
        margin: 30,
        nav: true,
        navText: ['<img src="images/icons/news_carousel_left.png">', '<img src="images/icons/news_carousel_right.png">'],
        //animateIn: 'fadeIn',
        //animateOut: 'fadeOut',
        responsiveClass: true,
        responsive: {
            0: {
                items: 1,
                autoplay: true,
                autoplayTimeout: 3000,
                autoplayHoverPause: true
            },
            600: {
                items: 2,
                autoplay: true,
                autoplayTimeout: 3000,
                autoplayHoverPause: true
            },
            1000: {
                items: 3,
                autoplay: true,
                autoplayTimeout: 3000,
                autoplayHoverPause: true
            },
            1200: {
                items: 3,
                autoplay: true,
                autoplayTimeout: 3000,
                autoplayHoverPause: true
            }
        }
    });

    $('.ride').click(function (event) {
        $(this).toggleClass('changed');
        $('.ride-div').toggleClass('display-none');
        var hasClass = $('.ride-div').hasClass('display-none');
        if(hasClass!==true){
            $('.second-accordion').addClass('display-none');
            $('.sign-up').addClass('changed-two');

        }else{
            $('.second-accordion').removeClass('display-none');
            $('.sign-up').removeClass('changed-two');
        }
    });

    $('.sign-up').click(function (event) {
        $(this).toggleClass('changed-two');
        $('.second-accordion').toggleClass('display-none');
        $('.ride-div').toggleClass('display-none');
        $('.ride').toggleClass('changed');
        // var hasClass = $('.second-accordion').hasClass('display-none');
        // if(hasClass!==true){
        //     $('.ride-div').addClass('display-none');
        //     $('.ride').addClass('changed');
        //
        // }else{
        //     $('.ride-div').removeClass('display-none');
        //     $('.ride').removeClass('changed');
        // }
    });


    var offset = $('header').outerHeight()+150;
    console.log(offset);
    $(window).scroll(function() {
        // var scroll = window.scrollTop();
        // console.log(scroll);
        if ($(this).scrollTop() > offset) {
            $(".go-to-top").fadeIn(400);
            $('.custom-nav').addClass('fixed-nav');
        } else {
            $(".go-to-top").fadeOut(400);
            $('.custom-nav').removeClass('fixed-nav');
        }

    });



    $(".scroll-down").click(function () {
        //1 second of animation time
        //html works for FFX but not Chrome
        //body works for Chrome but not FFX
        //This strange selector seems to work universally
        $("html, body").animate({scrollTop: 0}, 1500);
    });
    $(".go-to-top").click(function () {
        //1 second of animation time
        //html works for FFX but not Chrome
        //body works for Chrome but not FFX
        //This strange selector seems to work universally
        $("html, body").animate({scrollTop: 0}, 1500);
    });

    /*--------------------------
     ACTIVE WOW JS
     ----------------------------*/
    new WOW().init();

});