<section class="search-container">
  <div class=search-content>
    
    <div class="search-field">
      <input type="text" id="filter-input" placeholder="Search for internship oppotunities..."type="text">
      <img class="search-icon"src="assets/search.svg" alt="">
  </div>


    <span class="searchicon">
    <i class="fa fa-search"></i>
    </span>

    <!-- <a class="toggle-filter" onclick="togglefilter()">
      filter +/-
    </a> -->

    <div class="filter-btns">
      <button class="filter btn-inverted" data-filter="ux">UX</button> 
      <button class="filter btn-inverted" data-filter="frontend">Front-end</button> 
      <button class="filter btn-inverted" data-filter="webdesign">Web Design</button> 
      <button class="filter btn-inverted" data-filter="backend">Back-end</button> 
      <button class="filter btn-inverted" data-filter="database">Database</button> 
      <button class="filter btn-inverted" data-filter="cms">CMS</button> 
      <button class="filter btn-inverted" data-filter="animation">Animation</button> 
      <button class="filter btn-inverted">Schedule</button>
    </div>
  </div>

  <div class="resultscontainer">
    <ul id="names">
      <li class="collection-item">
        <a href="#">The Harry Potter</a>
      </li>
      <li class="collection-item">
        <a href="#">A Game of Thrones</a>
      </li>
      <li class="collection-item">
        <a href="#">The Lord of the Rings</a>
      </li>
      <li class="collection-item">
        <a href="#">The Martian</a>
      </li>
      <li class="collection-item">
        <a href="#">The Andromeda Strain</a>
      </li>
      <li class="collection-item">
        <a href="#">To Kill a Mockingbird </a>
      </li>
      <li class="collection-item">
        <a href="#">Siddhartha</a>
      </li>
      <li class="collection-item">
        <a href="#">The Count of Monte Cristo</a>
      </li>
      <li class="collection-item">
        <a href="#">Americanah</a>
      </li>
      <li class="collection-item">
        <a href="#">A Thousand Splendid Suns</a>
      </li>
      <li class="collection-item">
        <a href="#">The Namesake</a>
      </li>
    </ul>
  </div>

  <!-- <script>
    let filterInput = document.getElementById('filter-input');
    filterInput.addEventListener('keyup', function(){
      //Get value of input
      let filterValue = document.getElementById('filter-input').value.toUpperCase();
      console.log(filterValue);
      //Get names UL
      let ul = document.getElementById('ul-names');
      //Get li's from ul
      let li = ul.querySelectorAll('li');
      //loop through collection-item lis
      for(let i = 0 ; i < li.length ; i++) {
        let a = li[i].getElementsByTagName('a')[0];
        if(a.innerHTML.toUpperCase().indexOf(filterValue) > -1 ){
          li[i].style.display = '';
        }else {
          li[i].style.display = 'none';
        }
      }
    })

    const searchField = document.forms['search-field'].querySelector('input');
    const list = document.querySelector('.resultscontainer ul')
    searchField.addEventListener('keyup', function(e){
      const term = e.target.value.toLowerCase();
      const books = list.getElementByTagName('li');
      Array.from(books).forEach(function(book){
        const title = book.firstElementChild.textContent;
        if(title.toLowerCase().indexOf(term)!=-1){
          book.style.display = 'block';
        }
        else{
          book.style.display = 'none';
        }
      })
    })
  </script> -->
  <script>
    // Get input element
    let filterInput = document.getElementById('filter-input');
    // Add event listener
    filterInput.addEventListener('keyup', filterNames);

    function filterNames(){
      // Get value of input
      let filterValue = document.getElementById('filter-input').value.toUpperCase();

      // Get names ul
      let ul = document.getElementById('names');
      // Get lis from ul
      let li = ul.querySelectorAll('li.collection-item');

      // Loop through collection-item lis
      for(let i = 0;i < li.length;i++){
        let a = li[i].getElementsByTagName('a')[0];
        // If matched
        if(a.innerHTML.toUpperCase().indexOf(filterValue) > -1){
          li[i].style.display = '';
        } else {
          li[i].style.display = 'none';
        }
      }

    }
  </script>

</section>