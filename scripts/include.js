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
// fetch('/components/navbar.html')
//   .then(response => response.text())
//   .then(data => {
//     document.getElementById('navbar-placeholder').innerHTML = data;
//   });

// // Load Footer
// fetch('/components/footer.html')
//   .then(response => response.text())
//   .then(data => {
//     document.getElementById('footer-placeholder').innerHTML = data;
//   });

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

// Load Cards (ONLY card content, not full pages)
fetch('/cards/food.html')
  .then(response => response.text())
  .then(data => {
    document.getElementById('food-card').innerHTML = data;
  });

fetch('/cards/varanasi-temples.html')
  .then(response => response.text())
  .then(data => {
    document.getElementById('temples-card').innerHTML = data;
  });

fetch('/cards/varanasi-ghats.html')
  .then(response => response.text())
  .then(data => {
    document.getElementById('ghats-card').innerHTML = data;
  });

fetch('/cards/contents.html')
  .then(response => response.text())
  .then(data => {
    document.getElementById('contents-card').innerHTML = data;
  });
fetch('/cards/contents2.html')
  .then(response => response.text())
  .then(data => {
    document.getElementById('contents2-card').innerHTML = data;
  });
