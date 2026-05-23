/** Ajusta o tamanho da 2ª linha para igualar a largura da 1ª (sem justify / espaçamento extra). */
export const HERO_TITLE_FIT_SCRIPT = `
function fitHeroTitleLines() {
  const root = document.querySelector(".hero-title");
  const primary = document.querySelector(".hero-title__line--primary");
  const secondary = document.querySelector(".hero-title__line--secondary");
  if (!root || !primary || !secondary) return;

  secondary.style.fontSize = "";
  const targetW = primary.getBoundingClientRect().width;
  if (targetW < 1) return;

  const primarySize = parseFloat(getComputedStyle(primary).fontSize);
  let lo = primarySize * 0.55;
  let hi = primarySize * 1.35;
  let best = primarySize;

  for (let i = 0; i < 28; i++) {
    const mid = (lo + hi) / 2;
    secondary.style.fontSize = mid + "px";
    const w = secondary.getBoundingClientRect().width;
    if (w > targetW) hi = mid;
    else lo = mid;
    best = mid;
  }

  secondary.style.fontSize = best + "px";
  const page = root.closest(".page");
  const maxW = page ? page.clientWidth - 8 : targetW;
  root.style.width = Math.ceil(Math.min(targetW, maxW)) + "px";
  root.dataset.fitted = "1";
}

var touchUi = window.matchMedia("(hover: none) and (pointer: coarse)").matches;

document.fonts.ready.then(fitHeroTitleLines);

if (!touchUi) {
  var resizeTimer = 0;
  var lastWidth = window.innerWidth;

  window.addEventListener("resize", function () {
  var w = window.innerWidth;
  if (Math.abs(w - lastWidth) < 6) return;
  lastWidth = w;
  clearTimeout(resizeTimer);
  resizeTimer = setTimeout(function () {
    var root = document.querySelector(".hero-title");
    if (root) root.dataset.fitted = "";
    fitHeroTitleLines();
  }, 180);
  });
}
`;
