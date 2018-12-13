<section class="search-container">
  <div class="search-content">
    
    <div class="search-field">
      <input type="text" id="filter-input" placeholder="Search for internship oppotunities..."type="text">
      <img class="search-icon"src="assets/search.svg" alt="">
    </div>

    <div id="showFilterMenu">
        <h1 class="btn-font">Filter</h1>
    </div>

    <?php include('php/filter.php')?>

  </div>

  <div class="resultscontainer" id="resultscontainer"></div>

</section>