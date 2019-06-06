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
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    variableWidth: true,
                    arrows: true,
                    dots: true
                }
            },
            {
                breakpoint: 360,
                settings: {
                    slidesToShow: 1,
                    variableWidth: true,
                    arrows: false,
                    dots: true
                }
            }
        ]
    });
    setTimeout(function(){
        $('.career-slider').slick('slickUnfilter');
        $('.career-slider').slick('slickFilter', ".cityslider1");
        $('.career-tab').eq(1).addClass('active');
    }, 500);
    $('.career-tab').on('click', function() {
        var filterClass = $(this).data('filter');
        $('.career-slider').slick('slickUnfilter');
        $('.career-slider').slick('slickFilter', filterClass);
    });
    // $('#menu-item-518 .header-item-link').click(function(e){
    //    $('.header-sublist').toggleClass('active');
    // });
    // $('#menu-item-518 .header-item-link').hover(function(){
    //     $('.header-sublist').addClass('active');
    // }, function(){
    //     $('.header-sublist').removeClass('active');
    // });
    $('.career-slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        dots: true,
        arrows: true,
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
            mobile:       true,       // включение/отключение WOW.js на мобильных устройствах (по умолчанию, включено)
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
    // $(".about-menu-link").click(function () {
    //     $(this).parent().addClass('active');
    //     $(this).parent().siblings().removeClass('active');
    //     var elementClick = $(this).attr("href");
    //     var destination = $(elementClick).offset().top;
    //     $('html, body').animate({ scrollTop: destination - 100 }, 400);
    //     positionLine();
    //     return false;
    // });
    menuItems.click(function(e){
        var href = $(this).attr("href"),
            offsetTop = href === "#" ? 0 : $(href).offset().top-topMenuHeight+1;
        $('html, body').stop().animate({
            scrollTop: offsetTop
        }, 0);
        e.preventDefault();
        setTimeout(function(){
            positionLine();
        }, 100)

    });
    function fixedBlock() {
        var controller3 = new ScrollMagic.Controller();
        var scene = new ScrollMagic.Scene({
            triggerElement: ".about-flex",
            // duration: "800",
            offset: "-30",
            triggerHook: "onLeave"
        }).setPin(".about-left").addTo(controller3);
    }
    fixedBlock();
    function positionLine() {
        if($('.about-line').length > 0) {
            var positionTop = $('.about-menu-item.active').position().top;
            console.log(positionTop);
            $('.about-line').css("top", positionTop);
        }
    }
    // positionLine();
    $('.menu-open').click(function(){
       $(this).toggleClass('active');
       $('.header-list').toggleClass('active')
    });
    var $body = $(window.document.body);

    function bodyFreezeScroll() {
        var bodyWidth = $body.innerWidth();
        $body.css('overflow', 'hidden');
        $body.css('marginRight', ($body.css('marginRight') ? '+=' : '') + ($body.innerWidth() - bodyWidth))
    }

    function bodyUnfreezeScroll() {
        var bodyWidth = $body.innerWidth();
        $body.css('marginRight', '-=' + (bodyWidth - $body.innerWidth()))
        $body.css('overflow', 'auto');
    }
    $('.contact-as-btn').click(function(){
        bodyFreezeScroll();
    });
    $('.popup-close').click(function(){
        bodyUnfreezeScroll();
    });
    $('.menu-open').click(function(){
        if($(this).hasClass('active')) {
            bodyFreezeScroll();
        }
        else {
            bodyUnfreezeScroll();

        }
    });
});
var lastScrollTop = 0;
// Cache selectors
var lastId,
    topMenu = $(".about-menu"),
    topMenuHeight = topMenu.outerHeight()-250,
    // All list items
    menuItems = topMenu.find("a"),
    // Anchors corresponding to menu items
    scrollItems = menuItems.map(function(){
        var item = $($(this).attr("href"));
        if (item.length) { return item; }
    });

$(window).scroll(function(){
    var windowTop,
        blockTop,
        windowHeight,
        items,
        animDeg;
    function rotateBlock(){
        if($('.main_rotate').length > 0) {
            windowTop = $(window).scrollTop();
            blockTop = $('.main_rotate').offset().top;
            windowHeight = $(window).height();
            if (windowTop + windowHeight > blockTop) {
                items = Math.ceil((windowTop + windowHeight - blockTop) / 180);
                animDeg = items * 180;
                $('.anim-img22').css({transform: 'rotateX(' + animDeg + 'deg)'});
            }
            else {
                $('.anim-img22').css({transform: 'rotateX(0deg)'});
            }
        }
    }
    if($(window).width() > 993) {
        // rotateBlock();
    }
    if($('.about-menu-item.active').length > 0) {
        var positionTop = $('.about-menu-item.active').position().top;
        console.log(positionTop);
        $('.about-line').css("top", positionTop);
    }
    var fromTop = $(this).scrollTop()+topMenuHeight;

    // Get id of current scroll item
    var cur = scrollItems.map(function(){
        if ($(this).offset().top < fromTop)
            return this;
    });
    // Get the id of the current element
    cur = cur[cur.length-1];
    var id = cur && cur.length ? cur[0].id : "";

    if (lastId !== id) {
        lastId = id;
        // Set/remove active class
        menuItems
            .parent().removeClass("active")
            .end().filter("[href='#"+id+"']").parent().addClass("active");
        console.log($('body').height());
        console.log($(window).scrollTop());

    }
    if ($(window).scrollTop() == $(document).height() - $(window).height()) {
        $('.about-menu-item:last-child').addClass('active').siblings().removeClass('active');
    }
    var totalHeight;
    function animationHeight() {
        windowTop = $(window).scrollTop();
        windowHeight = $(window).height() / 1.5;
        if($('.animation-trigger').length > 0){
            blockTop = $('.animation-trigger').offset().top;
            if (windowTop + windowHeight > blockTop) {
                totalHeight = (windowTop + windowHeight - blockTop) / 3;
                if (totalHeight > 100) {
                    totalHeight = 100
                    console.log(totalHeight)
                }
                $('.anim-height').height(totalHeight + '%');
            }
        }
    }
    animationHeight();
    function imgTranslate() {
        windowTop = $(window).scrollTop();
        windowHeight = $(window).height() / 1.5;
        if ($('.anim-img11').length > 0) {
            blockTop = $('.anim-img11').offset().top;
            if (windowTop + windowHeight > blockTop) {
                $('.anim-img11, .anim-img12').addClass('active')
            }
        }
        if ($('.anim-graf').length > 0){
            $('.anim-graf').css('background-position-x', -windowTop);
        }
    }
    imgTranslate();

    function transformLines() {
        windowTop = $(window).scrollTop();
        if($('.tech-block_chain').length > 0) {
            blockTop = $('.tech-block_chain').offset().top;
            if(windowTop + $(window).height() > blockTop && windowTop > lastScrollTop) {
                console.log(lastScrollTop);
                console.log(windowTop);
                $('.tech-lines').addClass('down');
                if($('.tech-lines').hasClass('down')) {
                    $('.tech-lines').removeClass('down');
                    setTimeout(function(){
                        $('.tech-lines').addClass('down');
                    }, 100);
                }
            }
            lastScrollTop = windowTop;
        }
    }
    transformLines();
    if(!$('.about-menu-item').hasClass('active')) {
        $('.about-menu-item').eq(0).addClass('active');
    }

    if($(window).scrollTop() > 0) {
        $('.header').addClass('active');
    }
    else {
        $('.header').removeClass('active');
    }

});
