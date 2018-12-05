observeOnScroll();

function observeOnScroll () {
var atTop = window.scrollY === 0;
var sections = document.querySelectorAll(".section-watch");
var body = document.getElementsByTagName("body");

var observer = new IntersectionObserver(function name(entries, observer) {
  entries.forEach( function name2 (entry, index) {

  setTimeout ( () => {
    if(atTop){
      if (entry.intersectionRatio > 0) {
        entry.target.classList.add('scroll-animation');
        if(entry.target.classList.contains('scroll-animation')) {
            observer.unobserve(entry.target);
        }
      } 
    }
  }, 250 * index);

  if(!atTop){
    if (entry.intersectionRatio > 0) {
      entry.target.classList.add('scroll-animation');
      if(entry.target.classList.contains('scroll-animation')) {
        observer.unobserve(entry.target);
      }
    } 
  }

  }); 
});

  // start observing your element
  sections.forEach(section => {
    observer.observe(section);
  });
}