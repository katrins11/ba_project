var controller = new ScrollMagic.Controller();

var textWH = window.innerHeight,
  $left = $('.left'),
  $innerS1 = $('.innerS1'),
  $innerS2 = $('.innerS2'),
  $innerS3 = $('.innerS3'),
  $screenA = $('.screenA'),
  $screenB = $('.screenB'),
  $screenC = $('.screenC');

$(function() {
  var scene = new ScrollMagic.Scene({
    triggerElement: "#pin3", 
    duration: '140%', 
    offset: textWH*0.915,
    triggerHook: "onEnter"
  })
  .setPin("#pin3")
  .addIndicators({name: "Scroll duration"})
  .addTo(controller);
});

var contentSlide1 = new TimelineMax();
contentSlide1       
  .to($left, 1, {yPercent: 0, ease: Power4.easeOut})
  .fromTo($screenA, 1, {yPercent: 20, autoAlpha: 0}, {yPercent: 0, autoAlpha: 1, scale: 1, ease: Power4.easeOut})
  .from($innerS2, 1, {autoAlpha: 0});

new ScrollMagic.Scene({
  offset: textWH*0.6,
  triggerElement: $('body')[0],
  duration: '100%'
})
.setTween(contentSlide1)
.addIndicators()
.addTo(controller);

var contentSlide2 = new TimelineMax();
  contentSlide2       
    .to($screenA, 1, {yPercent: 0, autoAlpha: 0, ease: Power4.easeOut})
    .fromTo($screenB, 1, {yPercent: 20, autoAlpha: 0}, {yPercent: 0, autoAlpha: 1, ease: Power4.easeOut})
    .from($innerS3, 1, {autoAlpha: 0});

new ScrollMagic.Scene({
  offset: textWH*0.6,
  triggerElement: $('.left')[0],
  duration: '100%'
})
.setTween(contentSlide2)
.addIndicators()
.addTo(controller);

var contentSlide3 = new TimelineMax();
  contentSlide3       
    .to($screenB, 1, {yPercent: 0, autoAlpha: 0, ease: Power4.easeInOut})
    .fromTo($screenC, 1, {yPercent: 20, autoAlpha: 0}, {yPercent: 0, autoAlpha: 1, ease: Power4.easeInOut});

new ScrollMagic.Scene({
  triggerElement: $('.innerS2 h2')[0],
  duration: '100%'
})
.setTween(contentSlide3)
.addTo(controller);



removeScrollMagic();

function removeScrollMagic() {
  if ($(window).width() <= 1024 && controller.enabled()) {
    console.log("screen smaller than...")
    controller.enabled(false);
    controller = controller.destroy(true);
  } else if (!controller.enabled()) {
    controller.enabled(true);
    controller = controller.destroy(false);
  }
}