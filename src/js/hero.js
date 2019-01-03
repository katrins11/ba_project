function hero() {
    var timeline = new TimelineMax({
        paused: true
    });
    var logoShape = $(".js-logo-shape");
    var logoShapePath = "M259.936669,29.9683682 C287.007954,55.6912379 294.870242,98.4733718 289.330903,141.255506 C283.791564,184.03764 264.761254,226.909089 237.868657,252.81059 C193.017881,296.039301 99.6532171,303.720436 51.2286737,264.510923 C-0.876849768,222.264682 -17.8969153,119.373203 22.1024723,65.5159451 C45.9573673,33.362358 90.8974878,10.6940791 137.177771,2.92362887 C183.36871,-4.82895824 230.899812,2.38773576 259.936669,29.9683682 Z";
    function _logoShapeAnimation() {
        //10 = Speed of movement
        TweenMax.to(logoShape, 10, {
            attr: { d: logoShapePath },
            repeat: -1,
            yoyo: true,
            ease: Power0.easeNone,
            x: 200,
            y: 200
        });
    }

    _logoShapeAnimation();
  }
  
  hero();