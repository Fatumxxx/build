$(function () {
    $('.products__inner').slick({
        slidesToShow: 2,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        arrows: false,
        responsive: [
            {
                breakpoint: 640,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            }
        ]
    });

    $('.hamburger').on('click', function () {
        $('.menu__list').slideToggle();
    })

    new WOW().init();
});