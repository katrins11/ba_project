// FRONTPAGE PARALAX
var controller = new ScrollMagic.Controller();

$(function() {
  var scene = new ScrollMagic.Scene({
    triggerElement: "#pin2", 
    duration: 1800, 
    offset: 820,
    triggerHook: "onEnter"
  })
  .setPin("#pin2")
  .addIndicators({name: "Scroll duration"})
  .addTo(controller);
});
