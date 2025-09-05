// readmore.js — place before </body> or include with defer
document.addEventListener("DOMContentLoaded", () => {

  // Helper to create unique ids when needed
  const uid = (() => {
    let i = 0;
    return (prefix='vtg') => `${prefix}-${Date.now().toString(36)}-${++i}`;
  })();

  document.querySelectorAll('[data-readmore]').forEach((container, idx) => {
    const btn = container.querySelector('[data-readmore-toggle]');
    const wrap = container.querySelector('.vtg-more-wrap');
    const dots = container.querySelector('.vtg-dots');

    if (!btn || !wrap) {
      console.warn("ReadMore: missing elements in container", container);
      return;
    }

    // Ensure the wrap has a unique id (helps accessibility)
    if (!wrap.id) wrap.id = uid('vtg-more');

    // aria-controls
    if (!btn.getAttribute('aria-controls')) btn.setAttribute('aria-controls', wrap.id);

    // initial state
    container.dataset.open = "false";
    btn.setAttribute('aria-expanded', 'false');
    wrap.style.height = "0px";
    wrap.style.overflow = "hidden";

    // expand
    function expand() {
      // get exact height and animate to it
      const target = wrap.scrollHeight;
      wrap.style.height = target + "px";
      container.dataset.open = "true";
      btn.setAttribute('aria-expanded', 'true');
      btn.textContent = btn.dataset.textClose || "Read Less";
      if (dots) dots.style.display = "none";

      // after transition, set height:auto to allow responsive content
      const onEnd = (e) => {
        if (e.propertyName !== "height") return;
        wrap.style.height = "auto";
        wrap.removeEventListener("transitionend", onEnd);
      };
      wrap.addEventListener("transitionend", onEnd);

      // fallback in case transitionend doesn't fire
      setTimeout(() => {
        if (container.dataset.open === "true") wrap.style.height = "auto";
      }, 500);
    }

    // collapse
    function collapse() {
      // lock to current pixel height, then animate to 0
      const cur = wrap.scrollHeight;
      wrap.style.height = cur + "px";
      // force reflow
      // eslint-disable-next-line no-unused-expressions
      wrap.offsetHeight;
      wrap.style.height = "0px";

      container.dataset.open = "false";
      btn.setAttribute('aria-expanded', 'false');
      btn.textContent = btn.dataset.textOpen || "Read More";
      if (dots) dots.style.display = "inline";
    }

    btn.addEventListener('click', () => {
      if (container.dataset.open === "true") collapse(); else expand();
    });

    // If images inside wrap load after expanding, adjust height so it stays fitting.
    wrap.querySelectorAll('img').forEach(img => {
      img.addEventListener('load', () => {
        if (container.dataset.open === "true") {
          // if open, set to auto briefly then back to auto (keeps visual stable)
          wrap.style.height = wrap.scrollHeight + "px";
          setTimeout(()=> wrap.style.height = "auto", 350);
        }
      });
    });

    // Optional: on window resize, if open and height is auto, do nothing. If open and height is px, adjust.
    window.addEventListener('resize', () => {
      if (container.dataset.open === "true" && wrap.style.height !== "auto") {
        wrap.style.height = wrap.scrollHeight + "px";
        setTimeout(()=> wrap.style.height = "auto", 350);
      }
    });

  }); // end foreach
});
