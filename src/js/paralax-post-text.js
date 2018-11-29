var textController = new ScrollMagic.Controller();

var textWH = window.innerHeight,
  $left = $('.left'),
  $innerT1 = $('.innerT1'),
  $innerT2 = $('.innerT2'),
  $innerT3 = $('.innerT3'),
  $screenT1 = $('.screenT1'),
  $screenT2 = $('.screenT2'),
  $screenT3 = $('.screenT3');

$(function() {
  var scene = new ScrollMagic.Scene({
    triggerElement: "#pin-text", 
    duration: '140%', 
    offset: textWH*0.915,
    triggerHook: "onEnter"
  })
  .setPin("#pin-text")
  .addIndicators({name: "Scroll duration"})
  .addTo(textController);
});

var textSlide1 = new TimelineMax();
textSlide1
  .to($left, 1, {yPercent: 0, ease: Power4.easeOut})
  .fromTo($screenT1, 1, {yPercent: 20, autoAlpha: 0}, {yPercent: 0, autoAlpha: 1, scale: 1, ease: Power4.easeOut})
  .from($innerT2, 1, {autoAlpha: 0});

new ScrollMagic.Scene({
  offset: textWH*0.6,
  triggerElement: $('body')[0],
  duration: '100%'
})
.setTween(textSlide1)
.addIndicators()
.addTo(textController);

var textSlide2 = new TimelineMax();
textSlide2
  .to($screenT1, 1, {yPercent: 0, autoAlpha: 0, ease: Power4.easeOut})
  .fromTo($screenT2, 1, {yPercent: 20, autoAlpha: 0}, {yPercent: 0, autoAlpha: 1, ease: Power4.easeOut})
  .from($innerT3, 1, {autoAlpha: 0});

new ScrollMagic.Scene({
  offset: textWH*0.6,
  triggerElement: $('.left')[0],
  duration: '100%'
})
.setTween(textSlide2)
.addIndicators()
.addTo(textController);

var textSlide3 = new TimelineMax();
textSlide3
  .to($screenT2, 1, {yPercent: 0, autoAlpha: 0, ease: Power4.easeInOut})
  .fromTo($screenT3, 1, {yPercent: 20, autoAlpha: 0}, {yPercent: 0, autoAlpha: 1, ease: Power4.easeInOut});

new ScrollMagic.Scene({
  triggerElement: $('.innerT2 h2')[0],
  duration: '100%'
})
.setTween(textSlide3)
.addTo(textController);


removeScrollMagic();

function removeScrollMagic() {
  if ($(window).width() <= 1024 && textController.enabled()) {
    console.log("screen smaller than...")
    textController.enabled(false);
    textController = textController.destroy(true);
  } else if (!textController.enabled()) {
    textController.enabled(true);
    textController = textController.destroy(false);
  }
}