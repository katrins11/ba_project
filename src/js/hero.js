function hero() {
    var timeline = new TimelineMax({
        paused: true
    });
    var logoShape = $(".js-logo-shape");
    var logoShapePath = "M 189,80.37 C 243,66.12 307.3,87.28 350.9,124.1 389.3,156.6 417,211.2 418.1,263.4 419.1,305.7 401.8,355.6 368.5,379.1 298.8,428 179.2,446.4 117.6,386.3 65.4,335.3 78.55,230.3 105.5,160.5 119.7,123.6 152.6,89.85 189,80.37 Z";

    function _logoShapeAnimation() {
        //10 = Speed of movement
        TweenMax.to(logoShape, 10, {
            attr: { d: logoShapePath },
            repeat: -1,
            yoyo: true,
            ease: Power0.easeNone
        });
    }

    _logoShapeAnimation();
  }
  
  hero();