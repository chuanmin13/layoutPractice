// course slick 輪播
$(document).ready(function () {
    $(".course-slick").slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        speed: 300,
        autoplay: false,
        responsive: [
            {
                breakpoint: 576,
                settings: {
                    slideToShow: 2,
                },
            },
        ],
    });
});
