  // header change on scroll
window.onscroll = function() {
    myFunction()
};
var navbar = document.getElementById("header");
var sticky = navbar.offsetTop + 150;
function myFunction() {
    if (window.pageYOffset >= sticky) {
        navbar.classList.add("sticky");
    } 
    else {
        navbar.classList.remove("sticky");
    }
}