<header id="header">

  <a class="logo-link" href='/'>
      <img src="assets/logo-header.svg" alt="logo">
  </a>

  <nav class="menu-btn" id="btnmenu">
      <p>menu</p>
      <p>close</p>
      <div class="line"></div>
      <div class="line"></div>
      <div class="line"></div>
  </nav>

  <script>
    // header change on scroll
    window.onscroll = function() {
        myFunction()
    };

    var navbar = document.getElementById("header");
    var sticky = navbar.offsetTop + 150;

    function myFunction() {
        if (window.pageYOffset >= sticky) {
            navbar.classList.add("sticky")
        } 
        else {
            navbar.classList.remove("sticky");
        }
    }

     //burger to x
    var menu = document.getElementById("btnmenu");
    var navigation = document.getElementById("navigation");

    menu.onclick = function() {
        if(menu.classList.contains("menu-active")) {
            menu.classList.remove("menu-active");
            navigation.classList.remove("nav-active");
            return;
        }
        else {
            menu.classList.add("menu-active");
            navigation.classList.add("nav-active");
        }
    };
  </script>
</header>