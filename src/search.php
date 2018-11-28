<section class="search-container">
  <div class=search-content>
    
    <div class="search-field">
      <input type="text" id="filter-input" placeholder="Search for internship oppotunities..."type="text">
      <img class="search-icon"src="assets/search.svg" alt="">
    </div>

    <div class="filter-btns">
      <button type="button" class="filter btn-inverted" data-filter="all">See All</button> 
      <button type="button" class="filter btn-inverted" data-filter=".web">Web</button> 
      <button type="button" class="filter btn-inverted" data-filter=".ux">UX</button> 
      <button type="button" class="filter btn-inverted" data-filter=".frontend">Front-end</button> 
      <button type="button" class="filter btn-inverted" data-filter=".webdesign">Web Design</button> 
      <button type="button" class="filter btn-inverted" data-filter=".backend">Back-end</button> 
      <button type="button" class="filter btn-inverted" data-filter=".database">Database</button> 
      <button type="button" class="filter btn-inverted" data-filter=".cms">CMS</button> 
      <button type="button" class="filter btn-inverted" data-filter=".animation">Animation</button> 
    </div>
  </div>

  <div class="resultscontainer" id="resultscontainer">
    <div class="eachPost mix web">
      <a href="#">The Harry Potter</a>
    </div>
    <div class="eachPost mix ux">
      <a href="#">A Game of Thrones</a>
    </div>
    <div class="eachPost mix web">
      <a href="#">The Lord of the Rings</a>
    </div>
    <div class="eachPost mix web">
      <a href="#">The Martian</a>
    </div>
    <div class="eachPost mix frontend">
      <a href="#">The Andromeda Strain</a>
    </div>
    <div class="eachPost mix frontend">
      <a href="#">To Kill a Mockingbird </a>
    </div>
    <div class="eachPost mix frontend">
      <a href="#">Siddhartha</a>
    </div>
    <div class="eachPost mix frontend">
      <a href="#">The Count of Monte Cristo</a>
    </div>
    <div class="eachPost mix frontend">
      <a href="#">Americanah</a>
    </div>
    <div class="eachPost mix ux">
      <a href="#">A Thousand Splendid Suns</a>
    </div>
    <div class="eachPost mix frontend">
      <a href="#">The Namesake</a>
    </div>
  </div>

  <!-- Filtering -->
  <script src="js/mixitup.min.js"></script>
  <script>
    // Search
    let filterInput = document.getElementById('filter-input');
    // Add event listener
    filterInput.addEventListener('keyup', filterNames);

    function filterNames(){
      // Get value of input
      let filterValue = document.getElementById('filter-input').value.toLowerCase();
      // Get names ul
      let Allposts = document.getElementById('resultscontainer');
      // Get lis from ul
      let postItem = Allposts.querySelectorAll('.eachPost');
      // Loop through collection-item lis
      for(let i = 0;i < postItem.length;i++){
        let a = postItem[i].getElementsByTagName('a')[0];
        // If matched
        if(a.innerHTML.toLowerCase().indexOf(filterValue) > -1){
          postItem[i].style.display = '';
        } else {
          postItem[i].style.display = 'none';
        }
      }
    }
    
    //Filtering
    var containerEl = document.querySelector('.resultscontainer');
    var mixer = mixitup(containerEl);
  </script>

</section>