// FRONTPAGE PARALAX
var controller = new ScrollMagic.Controller();

$(function() {
  var scene = new ScrollMagic.Scene({
    triggerElement: "#pin2", 
    duration: 650, 
    offset: 820,
    triggerHook: "onEnter"
  })
  .setPin("#pin2")
  .addIndicators({name: "Scroll duration"})
  .addTo(controller);
});
