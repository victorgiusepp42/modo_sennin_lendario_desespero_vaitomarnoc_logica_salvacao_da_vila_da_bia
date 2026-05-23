/** Scroll suave, âncoras e toque — desktop + iOS/Android. */
export const INTERACTION_SCRIPT = `
(function () {
  var SCROLL_PAD = 14;

  function scrollPad() {
    return SCROLL_PAD + (parseInt(getComputedStyle(document.documentElement).scrollPaddingTop, 10) || 0);
  }

  function scrollToHash(hash, behavior) {
    if (!hash || hash === "#") return;
    var id = hash.replace(/^#/, "");
    var target = document.getElementById(id);
    if (!target) return;
    var top = target.getBoundingClientRect().top + window.pageYOffset - scrollPad();
    try {
      window.scrollTo({ top: top, behavior: behavior || "smooth" });
    } catch (_) {
      window.scrollTo(0, top);
    }
    if (history.replaceState) {
      history.replaceState(null, "", "#" + id);
    } else {
      location.hash = id;
    }
  }

  function bindAnchorLinks(root) {
    var links = (root || document).querySelectorAll('a[href^="#"]');
    for (var i = 0; i < links.length; i++) {
      var link = links[i];
      if (link.dataset.navBound === "1") continue;
      link.dataset.navBound = "1";
      link.addEventListener("click", function (e) {
        var href = this.getAttribute("href");
        if (!href || href.length < 2) return;
        var id = href.slice(1);
        if (!document.getElementById(id)) return;
        e.preventDefault();
        scrollToHash(href, "smooth");
      });
    }
  }

  function onReady(fn) {
    if (document.readyState === "loading") {
      document.addEventListener("DOMContentLoaded", fn);
    } else {
      fn();
    }
  }

  onReady(function () {
    bindAnchorLinks(document);
    if (location.hash) {
      setTimeout(function () {
        scrollToHash(location.hash, "auto");
      }, 120);
    }
  });

  window.addEventListener("hashchange", function () {
    scrollToHash(location.hash, "smooth");
  });

  /* Mobile: bloqueia arraste horizontal; só rolagem vertical */
  if (window.matchMedia("(hover: none) and (pointer: coarse)").matches) {
    var touchStartX = 0;
    var touchStartY = 0;

    document.addEventListener(
      "touchstart",
      function (e) {
        if (e.touches.length !== 1) return;
        touchStartX = e.touches[0].clientX;
        touchStartY = e.touches[0].clientY;
      },
      { passive: true }
    );

    document.addEventListener(
      "touchmove",
      function (e) {
        if (e.touches.length !== 1) return;
        var dx = Math.abs(e.touches[0].clientX - touchStartX);
        var dy = Math.abs(e.touches[0].clientY - touchStartY);
        if (dx > dy && dx > 8) {
          e.preventDefault();
        }
      },
      { passive: false }
    );

    window.addEventListener("scroll", function () {
      if (window.scrollX !== 0) {
        window.scrollTo(0, window.scrollY);
      }
    });
  }
})();
`;
