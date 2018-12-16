<?php include('php/config.php'); ?>

<?php include('php/head.php')?>

<?php include('php/menu.php')?>

<?php include('php/header.php')?>
<div class="page" id="about-page">
  <?php include('php/headline-banner.php')?>

  <?php include('php/frontpage-text.php')?>

  <section id="" class="section-watch">
    <div class="text-container">
      <div class="text-section">
      <div class="title">
        <h1 class="section-headline"><?php echo $aboutPageTextHeadline ?></h1>
      </div>
      <div id="about-webintern" class="text">
        <p>
          <?php echo $aboutPageText ?>
        </p>
          <?php ?>
      </div>
      </div>  
    </div>
  </section> 

  <?php include('php/cta-guide.php')?>

  <?php include('php/footer.php')?>
</div>

<?php include('php/foot.php')?>