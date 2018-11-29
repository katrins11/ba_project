// FRONTPAGE PARALAX
var controller = new ScrollMagic.Controller();

var frontpageWH = window.innerHeight,
  $left = $('.left'),
  $innerF1 = $('.innerinnerF1T1'),
  $innerF2 = $('.innerF2');

$(function() {
  var scene = new ScrollMagic.Scene({
    triggerElement: "#pin-frontpage", 
    duration: '170%', 
    offset: frontpageWH*0.897,
    triggerHook: "onEnter"
  })
  .setPin("#pin-frontpage")
  .addIndicators({name: "Scroll duration"})
  .addTo(controller);
});
