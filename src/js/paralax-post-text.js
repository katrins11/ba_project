var textController = new ScrollMagic.Controller();

var textWH = window.innerHeight,
  $left = $('.left'),
  $innerT1 = $('.innerT1'),
  $innerT2 = $('.innerT2'),
  $innerT3 = $('.innerT3'),
  $screenT1 = $('.screenT1');

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
  .from($innerT2, 1, {autoAlpha: 0});

new ScrollMagic.Scene({
  offset: textWH*0.6,
  triggerElement: $('body')[0],
  duration: '100%'
})
.setTween(textSlide1)
.addIndicators({name: "1st slide"})
.addTo(textController);

var textSlide2 = new TimelineMax();
textSlide2
  .from($innerT3, 1, {autoAlpha: 0});

new ScrollMagic.Scene({
  offset: textWH*0.6,
  triggerElement: $('.left')[0],
  duration: '100%'
})
.setTween(textSlide2)
.addIndicators({name: "2nd slide"})
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