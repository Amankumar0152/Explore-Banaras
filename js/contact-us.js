  function toggleOtherField() {
    const reason = document.getElementById("reason").value;
    const otherField = document.getElementById("otherReasonContainer");
    otherField.style.display = reason === "Other" ? "block" : "none";
  }
