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
    var wow = new WOW(
        {
            boxClass:     'wow',      // класс, скрывающий элемент до момента отображения на экране (по умолчанию, wow)
            animateClass: 'animated', // класс для анимации элемента (по умолчанию, animated)
            offset:       200,          // расстояние в пикселях от нижнего края браузера до верхней границы элемента, необходимое для начала анимации (по умолчанию, 0)
            mobile:       false,       // включение/отключение WOW.js на мобильных устройствах (по умолчанию, включено)
            live:         true,       // поддержка асинхронно загруженных элементов (по умолчанию, включена)
            callback:     function(box) {
                // функция срабатывает каждый раз при старте анимации
                // аргумент box — элемент, для которого была запущена анимация
            },
            scrollContainer: null, // селектор прокручивающегося контейнера (опционально, по умолчанию, window)
            resetAnimation: true
        }
    );
    wow.init();
});
$(window).scroll(function(){
    var windowTop,
        blockTop,
        windowHeight,
        items,
        animDeg;
    function rotateBlock(){
        windowTop = $(window).scrollTop();
        blockTop = $('.main_rotate').offset().top;
        windowHeight = $(window).height();
        if (windowTop + windowHeight > blockTop) {
            items = Math.ceil((windowTop + windowHeight - blockTop) / 180);
            animDeg = items * 180;
            $('.anim-img22').css({transform: 'rotateX(' + animDeg + 'deg)'});
            console.log(items);
        }
        else {
            $('.anim-img22').css({transform: 'rotateX(0deg)'});
        }
    }
    rotateBlock();
});
