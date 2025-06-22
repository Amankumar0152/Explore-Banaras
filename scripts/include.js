// scripts/include.js

// document.addEventListener("DOMContentLoaded", function () {
//   const footerElement = document.getElementById("footer-placeholder");

//   fetch("footer.html")
//     .then(response => response.text())
//     .then(data => {
//       footerElement.innerHTML = data;
//     })
//     .catch(error => console.error("Error loading footer:", error));
// });

// include.js

// Load Navbar
fetch('/components/navbar.html')
  .then(response => response.text())
  .then(data => {
    document.getElementById('navbar-placeholder').innerHTML = data;
  });

// Load Footer
fetch('/components/footer.html')
  .then(response => response.text())
  .then(data => {
    document.getElementById('footer-placeholder').innerHTML = data;
  });

