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
    $('.career-slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        dots: true,
        arrows: true,
        variableWidth: true,
        touchMove: true
    });
    $('.team-slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        dots: true,
        arrows: true,
        variableWidth: true,
        centerMode: true,
        touchMove: true
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
    var controller = new ScrollMagic.Controller({globalSceneOptions: {triggerHook: "onCenter", duration: "200%"}});
    $('.parallax').each(function() {
        var trigg = $('body'),
            parallax = this.getAttribute('data-parallax'),
            speed = parallax * 100 + '%';
        new ScrollMagic.Scene({triggerElement: trigg})
            .setTween(this, {y: speed, ease: Linear.easeNone})
            .addTo(controller);
    });
    var controller2 = new ScrollMagic.Controller({globalSceneOptions: {triggerHook: "onEnter", duration: "200%", offset: '100'}});
    $('.parallax2').each(function() {
        var trigg = this.parentNode,
            parallax = this.getAttribute('data-parallax'),
            speed = parallax * 100 + '%';

        new ScrollMagic.Scene({triggerElement: trigg})
            .setTween(this, {y: speed, ease: Linear.easeNone})
            .addTo(controller2);
    });
});
$(window).scroll(function(){
    var windowTop,
        block,
        blockTop,
        windowHeight,
        items,
        i,
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
    // rotateBlock();
    // function paralaxBlock() {
    //     block = $('.paralax');
    //     windowTop = $(window).scrollTop();
    //     for (i = 0; i < block.length; i++) {
    //         blockTop = block.eq(i).offset().top;
    //         console.log(blockTop);
    //     }
    //
    //
    //
    // }
    // paralaxBlock();
});
