<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta http-equiv="X-UA-Compatible" content="ie=edge">
        <title>Web Intern</title>
        
        <!-- css -->
        <link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/OwlCarousel2/2.3.4/assets/owl.carousel.min.css">
        <link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/OwlCarousel2/2.3.4/assets/owl.theme.default.min.css">
        <link rel="stylesheet" type="text/css" href="css/styles.css">
    </head>
    <body>
        <?php include('menu.php')?>

        <?php include('header.php')?>
        <!-- <h1 id="company-name"></h1> -->
        <?php include('hero-banner.php')?>

        <?php include('slider.php')?>
      
        <?php include('fifty50.php')?>

        <?php include('cta.php')?>

        <?php include('footer.php')?>

        <!-- Scripts -->
        <!-- <script src="js/script.js"></script> -->
        <script src="//code.jquery.com/jquery-3.3.1.min.js"></script>

        <!-- Database -->
        <script src="https://www.gstatic.com/firebasejs/5.5.9/firebase.js"></script>
        <script src="js/data.js"></script>

        <!-- Animations-->
        <!-- <script src="anime.min.js"></script> -->
        <!-- <script src="https://cdnjs.cloudflare.com/ajax/libs/OwlCarousel2/2.3.4/owl.carousel.min.js"></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/OwlCarousel2/2.3.4/assets/owl.carousel.min.css"></script>  -->
        <script src="//cdnjs.cloudflare.com/ajax/libs/ScrollMagic/2.0.6/ScrollMagic.min.js"></script>
        <script src="//cdnjs.cloudflare.com/ajax/libs/ScrollMagic/2.0.6/plugins/debug.addIndicators.min.js"></script>
        <script src="//cdnjs.cloudflare.com/ajax/libs/gsap/2.0.0/TweenMax.min.js"></script>
        <script src="//cdnjs.cloudflare.com/ajax/libs/ScrollMagic/2.0.5/plugins/animation.gsap.js"></script> 

        <script>
        // 50/50 paralax scrolling
        var controller = new ScrollMagic.Controller();

        $(function() {
            var scene = new  ScrollMagic.Scene({
                triggerElement: "#pin2", 
                duration: 1300, 
                offset: 670,
                triggerHook: "onEnter"
            })
                .setPin("#pin2")
                .addIndicators({name: "1 (duration: 0"})
                .addTo(controller);
        });
        </script>

    </body>
</html>