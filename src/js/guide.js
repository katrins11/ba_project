(function() {
    var items = document.querySelectorAll(".guideSteps li");
    // is element in viewport
    function isElementInViewport(el) {
        var rect = el.getBoundingClientRect();
        return (
            rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
    }

    function callbackFunc() {
        for (var i = 0; i < items.length; i++) {
            if (isElementInViewport(items[i])) {
                items[i].classList.add("in-view");

            }
        }
    }

    // listen for events
    window.addEventListener("load", callbackFunc);
    window.addEventListener("resize", callbackFunc);
    window.addEventListener("scroll", callbackFunc);
})();

// Make overview stick on scroll
$(window).scroll(function() {    
    var scroll = $(window).scrollTop();
    var headerHight = $('#headline-banner').height();
    if (scroll >= headerHight) {
        $('.guide .guide_overview').css('position','fixed');
    } else {
        $('.guide .guide_overview').css('position','absolute');
    }
});

$('.menu__item').click(function(e){
    e.preventDefault();
    var target = $($(this).attr('href'));
    if(target.length){
        var scrollTo = target.offset().top;
        scrollTo -= 150;
        $('body, html').animate({scrollTop: scrollTo+'px'}, 800);
    }
});