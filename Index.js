// window.addEventListener("scroll", function() {
//   var navbar = document.getElementById("navbar-style");
//   if (window.scrollY > 50) {
//       navbar.classList.add("navbar-scrolled");
//       navbar.classList.add("navbar-smaller");
//   } else {
//       navbar.classList.remove("navbar-scrolled");
//       navbar.classList.remove("navbar-smaller");
//   }
// });
window.addEventListener("scroll", function () {
  var logoNavbar = document.getElementById("logoimg");
  var header = document.getElementById("headernav");
  if (window.scrollY > 50) {
    logoNavbar.classList.add("Image-with-navbar-scrolled");
    header.classList.add("nav-small");
  } else {
    logoNavbar.classList.remove("Image-with-navbar-scrolled");
    header.classList.remove("nav-small");
  }
});


