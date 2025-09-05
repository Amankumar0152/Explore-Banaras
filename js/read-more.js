document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll("[data-readmore]").forEach(container => {
    const btn  = container.querySelector("[data-readmore-toggle]");
    const wrap = container.querySelector(".more-wrap");
    const dots = container.querySelector(".dots");

    // Initialize collapsed
    container.dataset.open = "false";
    btn.setAttribute("aria-expanded", "false");
    wrap.style.height = "0px";

    function expand() {
      // Set explicit height to enable transition from 0 → target
      wrap.style.height = wrap.scrollHeight + "px";
      container.dataset.open = "true";
      btn.setAttribute("aria-expanded", "true");
      btn.textContent = "Read Less";
      if (dots) dots.style.display = "none";

      // After the transition, set height to 'auto' for responsiveness
      const onEnd = (e) => {
        if (e.propertyName !== "height") return;
        wrap.style.height = "auto";
        wrap.removeEventListener("transitionend", onEnd);
      };
      wrap.addEventListener("transitionend", onEnd);
    }

    function collapse() {
      // If height is 'auto', lock it to a pixel value first
      const currentHeight = wrap.scrollHeight;
      wrap.style.height = currentHeight + "px";
      // Force reflow so the browser acknowledges the height before collapsing
      // eslint-disable-next-line no-unused-expressions
      wrap.offsetHeight;
      wrap.style.height = "0px";

      container.dataset.open = "false";
      btn.setAttribute("aria-expanded", "false");
      btn.textContent = "Read More";
      if (dots) dots.style.display = "inline";
    }

    btn.addEventListener("click", () => {
      const isOpen = container.dataset.open === "true";
      if (isOpen) {
        collapse();
      } else {
        expand();
      }
    });
  });
});
