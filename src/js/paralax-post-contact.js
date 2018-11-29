var contactController = new ScrollMagic.Controller();

var contactWH = window.innerHeight,
  $left = $('.left'),
  $innerC1 = $('.innerC1'),
  $innerC2 = $('.innerC2'),
  $screenC1 = $('.screenC1'),
  $screenC2 = $('.screenC2');

$(function() {
  var scene = new ScrollMagic.Scene({
      triggerElement: "#pin-contact", 
      duration: '120%', 
      offset: contactWH*0.92,
      triggerHook: "onEnter"
  })
      .setPin("#pin-contact")
      .addIndicators({name: "Scene duration"})
      .addTo(contactController);
});

var contactSlide1 = new TimelineMax();
contactSlide1
  .to($left, 1, {yPercent: 0, ease: Power4.easeOut})
  .fromTo($screenC1, 1, {yPercent: 0, autoAlpha: 0}, {yPercent: 0, autoAlpha: 1, scale: 1, ease: Power4.easeOut})
  .from($innerC2, 1, {autoAlpha: 0});

new ScrollMagic.Scene({
  triggerElement: $('#trigger-contact')[0],
  duration: 200
})
.setTween(contactSlide1)
.addIndicators({name: "222"})
.addTo(contactController);

var contactSlide2 = new TimelineMax();
contactSlide2
  .to($screenC1, 1, {yPercent: 0, autoAlpha: 0, ease: Power4.easeOut})
  .fromTo($screenC2, 1, {yPercent: 20, autoAlpha: 0}, {yPercent: 0, autoAlpha: 1, ease: Power4.easeOut})

new ScrollMagic.Scene({
  triggerElement: $('.innerC2')[0],
  duration: '50%'
})
.setTween(contactSlide2)
.addIndicators({name: "333"})
.addTo(contactController);


removeScrollMagicContact();

function removeScrollMagicContact() {
  if ($(window).width() <= 1024 && contactController.enabled()) {
    console.log("screen smaller than...")
    contactController.enabled(false);
    contactController = contactController.destroy(true);
  } else if (!contactController.enabled()) {
    contactController.enabled(true);
    contactController = contactController.destroy(false);
  }
}

