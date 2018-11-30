var overviewPage = document.getElementById("overview-page");
if(overviewPage) {
  /* *** SEARCH *** */
  let filterInput = document.getElementById('filter-input');
  filterInput.addEventListener('keyup', function() {
    // Get value of input
    let filterValue = document.getElementById('filter-input').value.toLowerCase();
    // Get names from list
    let Allposts = document.getElementById('resultscontainer');
    // Get each item from list
    let postItem = Allposts.querySelectorAll('.eachPost');
    // Loop through list
    for(let i = 0;i < postItem.length;i++){
      let a = postItem[i].getElementsByTagName('a')[0];
      // If matched
      if(a.innerHTML.toLowerCase().indexOf(filterValue) > -1){
        postItem[i].style.display = '';
      } else {
        postItem[i].style.display = 'none';
      }
    }
  });

  /* *** FILTERING *** */
  var containerElem = document.querySelector('#resultscontainer');
  var mixer = mixitup(containerElem);
}  
