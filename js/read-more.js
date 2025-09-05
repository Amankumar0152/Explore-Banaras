// readmore.js
function initReadMore(container) {
  const btn = container.querySelector('[data-readmore-toggle]');
  const wrap = container.querySelector('.vtg-more-wrap');
  const dots = container.querySelector('.vtg-dots');

  if (!btn || !wrap) return;

  // initial state
  container.dataset.open = "false";
  btn.setAttribute('aria-expanded', 'false');
  wrap.style.height = "0px";
  wrap.style.overflow = "hidden";

  function expand() {
    wrap.style.height = wrap.scrollHeight + "px";
    container.dataset.open = "true";
    btn.setAttribute('aria-expanded', 'true');
    btn.textContent = btn.dataset.textClose || "Read Less";
    if (dots) dots.style.display = "none";

    wrap.addEventListener("transitionend", function handler(e) {
      if (e.propertyName === "height") {
        wrap.style.height = "auto";
        wrap.removeEventListener("transitionend", handler);
      }
    });
  }

  function collapse() {
    const cur = wrap.scrollHeight;
    wrap.style.height = cur + "px";
    wrap.offsetHeight; // force reflow
    wrap.style.height = "0px";

    container.dataset.open = "false";
    btn.setAttribute('aria-expanded', 'false');
    btn.textContent = btn.dataset.textOpen || "Read More";
    if (dots) dots.style.display = "inline";
  }

  btn.addEventListener("click", () => {
    if (container.dataset.open === "true") collapse();
    else expand();
  });
}

// 🔹 Re-initialize for all existing and future cards
function initAllReadMore() {
  document.querySelectorAll("[data-readmore]").forEach(container => {
    if (!container.dataset.init) {
      initReadMore(container);
      container.dataset.init = "true"; // prevent double init
    }
  });
}

// Run on DOM ready
document.addEventListener("DOMContentLoaded", initAllReadMore);

// 🔹 Watch for dynamically added content (include.js etc.)
const observer = new MutationObserver(() => initAllReadMore());
observer.observe(document.body, { childList: true, subtree: true });
