<section class="search-container">
  <div class="search-content">
    
    <div class="search-field">
      <input type="text" id="filter-input" placeholder="Search internships..."type="text">
      <img class="search-icon"src="assets/search.svg" alt="">
    </div>

    <div id="showFilterMenu">
        <h1 class="btn-font"><?php echo $filterHeadline ?></h1>
    </div>

    <?php include('php/filter.php')?>
  </div>

  <div class="resultscontainer" id="resultscontainer"></div>
</section>