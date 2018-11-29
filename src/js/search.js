/* *** SEARCH *** */
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

/* *** FILTERING *** */
var containerElem = document.querySelector('#resultscontainer');
var mixer = mixitup(containerElem);