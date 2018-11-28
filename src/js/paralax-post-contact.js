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
      triggerElement: "#pin4", 
      duration: '450', 
      offset: textWH*0.92,
      triggerHook: "onEnter"
  })
      .setPin("#pin4")
      .addIndicators({name: "Scene duration"})
      .addTo(controller);
});

var contentSlide1 = new TimelineMax();
  contentSlide1       
    .to($left, 1, {yPercent: 0, ease: Power4.easeOut})
    .fromTo($screenA, 1, {yPercent: 0, autoAlpha: 0}, {yPercent: 0, autoAlpha: 1, scale: 1, ease: Power4.easeOut})
    .from($innerS2, 1, {autoAlpha: 0});

new ScrollMagic.Scene({
  triggerElement: $('body')[0],
  duration: '100'
})
.setTween(contentSlide1)
.addIndicators({name: "222"})
.addTo(controller);

var contentSlide2 = new TimelineMax();
  contentSlide2       
  .to($screenA, 1, {yPercent: 30, autoAlpha: 0, ease: Power4.easeOut})
  .fromTo($screenB, 1, {yPercent: 20, autoAlpha: 0}, {yPercent: 0, autoAlpha: 1, ease: Power4.easeOut});

new ScrollMagic.Scene({
  triggerElement: $('.innerS2')[0],
  duration: '100'
})
.setTween(contentSlide2)
.addIndicators({name: "333"})
.addTo(controller);

