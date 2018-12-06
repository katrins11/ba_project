<?php include('php/head.php')?>
    <div class="page" id="overview-page" data-overviewId="1">
        <?php include('php/header.php')?>
        <?php include('php/menu.php')?>

        <?php include('php/search.php')?>

        <div id="pop-up-modal" class="modal">
            <div class="modal-content">
                <span class="close">&times;</span>  
                <?php include('php/hero-post.php')?>

                <?php include('php/post-text.php')?>

                <?php include('php/carousel.php')?>

                <?php include('php/info-box.php')?>

                <?php include('php/post-contact.php')?>
                <section class="btn-close">
                    <button>Close</button>
                </section>
            </div>
        </div>

        <?php include('php/carousel.php')?>
        
        <?php include('php/footer.php')?>
    </div>
<?php include('php/foot.php')?>
