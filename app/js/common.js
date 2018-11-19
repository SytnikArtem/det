$(document).ready(function() {
    $('.tech-slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        variableWidth: true,
        infinite: false,
        touchMove: true,
        responsive: [
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 3
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    variableWidth: true,
                    arrows: false
                }
            }
        ]
    });
    $('.tech-slider').on('beforeChange', function(event, slick, currentSlide, nextSlide){
        $('.tech-current').text(nextSlide + 1);
    });
});
