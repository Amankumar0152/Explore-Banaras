// scripts/include.js
document.addEventListener("DOMContentLoaded", function () {
  const footerElement = document.getElementById("footer-placeholder");

  fetch("footer.html")
    .then(response => response.text())
    .then(data => {
      footerElement.innerHTML = data;
    })
    .catch(error => console.error("Error loading footer:", error));
});
