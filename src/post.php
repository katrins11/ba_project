<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta http-equiv="X-UA-Compatible" content="ie=edge">
        <title>Web Intern</title>
        
        <!-- css -->
        <link rel="stylesheet" type="text/css" href="css/styles.css">
    </head>
    <body>
        <?php include('header.php')?>

        <?php include('post-hero.php')?>
        
        <?php include('info-box.php')?>

        <?php include('split-screen-text.php')?>

        <?php include('cta.php')?>

        <?php include('footer.php')?>
            
        <!-- script -->
        <!-- <script src="js/script.js"></script> -->
        <script src="//cdnjs.cloudflare.com/ajax/libs/ScrollMagic/2.0.6/ScrollMagic.min.js"></script>
        <script src="//cdnjs.cloudflare.com/ajax/libs/ScrollMagic/2.0.6/plugins/debug.addIndicators.min.js"></script>
        <script src="//cdnjs.cloudflare.com/ajax/libs/gsap/2.0.0/TweenMax.min.js"></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/ScrollMagic/2.0.5/plugins/animation.gsap.js"></script> 
        <script src="https://code.jquery.com/jquery-3.3.1.min.js"></script>

        <script>
            var wh = window.innerHeight,
                $left = $('.left'),
                $innerS1 = $('.innerS1'),
                $innerS2 = $('.innerS2'),
                $innerS3 = $('.innerS3'),
                $screenA = $('.screenA'),
                $screenB = $('.screenB'),
                $screenC = $('.screenC');
            
            var controller = new ScrollMagic.Controller();

 
            $(function() {
                var scene = new  ScrollMagic.Scene({
                    triggerElement: "#pin3", 
                    duration: '1800', 
                    offset: wh*1,
                    triggerHook: "onEnter"
                })
                    .setPin("#pin3")
                    .addIndicators({name: "1 (duration: 1800"})
                    .addTo(controller);
            });


  
            var contentSlide1 = new TimelineMax();
            contentSlide1       
                .to($left, 1, {yPercent: 0, ease: Power4.easeOut})
                .fromTo($screenA, 1, {yPercent: 20, autoAlpha: 0}, {yPercent: 0, autoAlpha: 1, scale: 1, ease: Power4.easeOut})
                .from($innerS2, 1, {autoAlpha: 0});

            new ScrollMagic.Scene({
                offset: wh*0.6,
                triggerElement: $('body')[0],
                duration: '100%'
            })
            .setTween(contentSlide1)
            .addIndicators()
            .addTo(controller);


        
            var contentSlide2 = new TimelineMax();
            contentSlide2       
            .to($screenA, 1, {yPercent: 0, autoAlpha: 0, ease: Power4.easeOut})
            .fromTo($screenB, 1, {yPercent: 20, autoAlpha: 0}, {yPercent: 0, autoAlpha: 1, ease: Power4.easeOut})
            .from($innerS3, 1, {autoAlpha: 0});

            new ScrollMagic.Scene({
                offset: wh*0.6,
                triggerElement: $('.left')[0],
                duration: '100%'
            })
            .setTween(contentSlide2)
            .addIndicators()
            .addTo(controller);

  
            var contentSlide3 = new TimelineMax();
            contentSlide3       
                .to($screenB, 1, {yPercent: 0, autoAlpha: 0, ease: Power4.easeInOut})
                .fromTo($screenC, 1, {yPercent: 20, autoAlpha: 0}, {yPercent: 0, autoAlpha: 1, ease: Power4.easeInOut});

            new ScrollMagic.Scene({
                triggerElement: $('.innerS2 h2')[0],
                duration: '100%'
            })
            .setTween(contentSlide3)
            .addTo(controller);

        </script>

    </body>
</html>