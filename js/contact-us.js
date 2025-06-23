// Auto Dark Mode
const hour = new Date().getHours();
const body = document.getElementById('pageBody');
if (hour >= 19 || hour < 6) {
  body.classList.add('dark-mode');
}

// Tour Options toggle
const purposeSelect = document.getElementById("purpose");
const tourOptions = document.getElementById("tourOptions");

purposeSelect.addEventListener("change", () => {
  tourOptions.style.display = (purposeSelect.value === "Tour") ? "block" : "none";
});
