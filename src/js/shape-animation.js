anime({
    targets: 'svg.triangle',
    rotate: function() { return anime.random(-660,360); },
    duration: function() { return anime.random(20000,25000); },
    scale: function() { return anime.random(50, 20) / 10; },
    direction: 'alternate',
    easing: 'linear',
    loop: true
});