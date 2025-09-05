document.addEventListener("DOMContentLoaded", function() {
  const buttons = document.querySelectorAll(".read-more-btn");

  buttons.forEach(function(btn) {
    btn.addEventListener("click", function() {
      const card = btn.closest(".best-time-box");
      const dots = card.querySelector(".dots");
      const moreText = card.querySelector(".more-text");

      if (moreText.style.display === "inline") {
        moreText.style.display = "none";
        dots.style.display = "inline";
        btn.textContent = "Read More";
      } else {
        moreText.style.display = "inline";
        dots.style.display = "none";
        btn.textContent = "Read Less";
      }
    });
  });
});
