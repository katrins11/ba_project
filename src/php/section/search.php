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

    <!-- <div class="filter-btns">
      <button type="button" class="filter btn-inverted" data-filter="all">All Posts</button> 
      <button type="button" class="filter btn-inverted" data-filter=".frontend">Front-End</button> 
      <button type="button" class="filter btn-inverted" data-filter=".backend">Back-End</button> 
      <button type="button" class="filter btn-inverted" data-filter=".fullstack">Full-stack</button> 
      <button type="button" class="filter btn-inverted" data-filter=".appdevelopment">App Development</button> 
      <button type="button" class="filter btn-inverted" data-filter=".ui">UI</button> 
      <button type="button" class="filter btn-inverted" data-filter=".ux">UX</button>       
      <button type="button" class="filter btn-inverted" data-filter=".webdesign">Web Design</button>       
      <button type="button" class="filter btn-inverted" data-filter=".database">Database</button> 
      <button type="button" class="filter btn-inverted" data-filter=".projectmanagement">Project Management</button> 
    </div> -->
  </div>

  <div class="resultscontainer" id="resultscontainer"></div>

  <!-- <div class="resultscontainer" id="resultscontainer">
    <a class="eachPost mix frontend backend" data-companyID="1">
        <div class="postImage"><img src="assets/venveo.png" alt="office placholder"></div>
        <div class="company">
            <h3 id="company-name">name</h3>
        </div>
        <div class="text">
            <h3>text</h3>
            <div class="info">
                <p>deadline</p>
                <p>location</p>
            </div>
        </div>
    </a>
    <a class="eachPost mix projectmanagement ui" data-companyID="1">
        <div class="postImage"><img src="assets/venveo.png" alt="office placholder"></div>
        <div class="company">
            <h3 id="company-name">name</h3>
        </div>
        <div class="text">
            <h3>text</h3>
            <div class="info">
                <p>deadline</p>
                <p>location</p>
            </div>
        </div>
    </a>
    <a class="eachPost mix frontend ux" data-companyID="1">
      <div class="postImage"><img src="assets/venveo.png" alt="office placholder"></div>
      <div class="company">
          <h3 id="company-name">name</h3>
      </div>
      <div class="text">
          <h3>text</h3>
          <div class="info">
              <p>deadline</p>
              <p>location</p>
          </div>
      </div>
    </a>
    <a class="eachPost mix webdesign ui" data-companyID="1">
      <div class="postImage"><img src="assets/venveo.png" alt="office placholder"></div>
      <div class="company">
          <h3 id="company-name">name</h3>
      </div>
      <div class="text">
          <h3>text</h3>
          <div class="info">
              <p>deadline</p>
              <p>location</p>
          </div>
      </div>
    </a>
    <a class="eachPost mix frontend ux" data-companyID="1">
      <div class="postImage"><img src="assets/venveo.png" alt="office placholder"></div>
      <div class="company">
          <h3 id="company-name">name</h3>
      </div>
      <div class="text">
          <h3>text</h3>
          <div class="info">
              <p>deadline</p>
              <p>location</p>
          </div>
      </div>
    </a>
    <a class="eachPost mix appdevelopment ui" data-companyID="1">
      <div class="postImage"><img src="assets/venveo.png" alt="office placholder"></div>
      <div class="company">
          <h3 id="company-name">name</h3>
      </div>
      <div class="text">
          <h3>text</h3>
          <div class="info">
              <p>deadline</p>
              <p>location</p>
          </div>
      </div>
    </a>
    <a class="eachPost mix frontend fullstack" data-companyID="1">
      <div class="postImage"><img src="assets/venveo.png" alt="office placholder"></div>
      <div class="company">
          <h3 id="company-name">name</h3>
      </div>
      <div class="text">
          <h3>text</h3>
          <div class="info">
              <p>deadline</p>
              <p>location</p>
          </div>
      </div>
    </a>
    <a class="eachPost mix frontend projectmanagement" data-companyID="1">
      <div class="postImage"><img src="assets/venveo.png" alt="office placholder"></div>
      <div class="company">
          <h3 id="company-name">name</h3>
      </div>
      <div class="text">
          <h3>text</h3>
          <div class="info">
              <p>deadline</p>
              <p>location</p>
          </div>
      </div>
    </a>
    <a class="eachPost mix database ux" data-companyID="1">
      <div class="postImage"><img src="assets/venveo.png" alt="office placholder"></div>
      <div class="company">
          <h3 id="company-name">name</h3>
      </div>
      <div class="text">
          <h3>text</h3>
          <div class="info">
              <p>deadline</p>
              <p>location</p>
          </div>
      </div>
    </a>
    <a class="eachPost mix database ux" data-companyID="1">
      <div class="postImage"><img src="assets/venveo.png" alt="office placholder"></div>
      <div class="company">
          <h3 id="company-name">name</h3>
      </div>
      <div class="text">
          <h3>text</h3>
          <div class="info">
              <p>deadline</p>
              <p>location</p>
          </div>
      </div>
    </a>
  </div> -->

</section>