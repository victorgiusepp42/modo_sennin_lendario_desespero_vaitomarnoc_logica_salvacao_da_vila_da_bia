export function getThemeCss(): string {
  return `
:root {
  --ice: #00b4d8;
  --ice-l: #90e0ef;
  --ice-d: #0077b6;
  --ice-glow: rgba(0, 180, 216, 0.3);
  --med: #9b5de5;
  --med-l: #c77dff;
  --med-d: #6a0dad;
  --med-glow: rgba(155, 93, 229, 0.3);
  --neon: #39ff14;
  --bg: #080808;
  --bg-2: #0d0d0d;
  --surface: rgba(24, 24, 24, 0.82);
  --border: rgba(0, 180, 216, 0.22);
  --border-h: rgba(0, 180, 216, 0.45);
  --section-pad-x: 0.9rem;
  --text: #f0f0f0;
  --text-2: #aaa;
  --text-m: #555;
  --font-body: "Inter", "Segoe UI", sans-serif;
  --font-cond: "Barlow Condensed", "Segoe UI", sans-serif;
  --font-display: "Bebas Neue", "Arial Narrow", sans-serif;
  --font-serif: "Lora", Georgia, serif;
  --font-mono: "Consolas", "Cascadia Code", monospace;
  --hh: 0px;
  --chrome-h: 0px;
  --page-w: 186mm;
  --page-pad-x: 5mm;
  --page-pad-y: 10mm;
  color-scheme: dark;
}

@page {
  size: A4 portrait;
  margin: 14mm 12mm;
}

*, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

html { scroll-behavior: smooth; scroll-padding-top: calc(var(--chrome-h) + 16px); }

body {
  font-family: var(--font-body);
  font-size: 10.5pt;
  line-height: 1.55;
  background: var(--bg);
  color: var(--text);
  overflow-x: clip;
  -webkit-font-smoothing: antialiased;
  padding: var(--chrome-h) max(4px, env(safe-area-inset-right, 0px)) 0
    max(4px, env(safe-area-inset-left, 0px));
  display: flex;
  justify-content: center;
}

::selection { background: var(--ice-d); color: #fff; }

/* ── Fundo Ice: orbs + ruído (fixos, não rolam) ── */
.orbs {
  position: fixed;
  inset: 0;
  pointer-events: none;
  z-index: 0;
  overflow: hidden;
}

.orb {
  position: absolute;
  border-radius: 50%;
  filter: blur(90px);
  opacity: 0.14;
  animation: orb-d 16s ease-in-out infinite;
}

.orb--1 { width: 500px; height: 500px; background: var(--ice-d); top: -120px; left: -160px; }
.orb--2 { width: 340px; height: 340px; background: var(--ice); top: 30%; right: -80px; animation-delay: -5s; }
.orb--3 { width: 260px; height: 260px; background: var(--med-d); bottom: -60px; left: 25%; animation-delay: -10s; }
.orb--4 { width: 200px; height: 200px; background: var(--neon); opacity: 0.08; top: 15%; right: 28%; animation-delay: -14s; }

@keyframes orb-d {
  0%, 100% { transform: translate(0, 0) scale(1); }
  40% { transform: translate(26px, -16px) scale(1.04); }
  70% { transform: translate(-14px, 24px) scale(0.96); }
}

body::after {
  content: "";
  position: fixed;
  inset: 0;
  z-index: 1;
  pointer-events: none;
  opacity: 0.022;
  background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 512 512' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='.75' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E");
  background-size: 256px;
}

/* ── Cabeçalho FIXO no topo (não acompanha scroll) ── */
.site-header {
  position: fixed !important;
  top: 0;
  left: 0;
  right: 0;
  width: 100%;
  z-index: 1000;
  height: var(--hh);
  background: rgba(8, 8, 8, 0.96);
  backdrop-filter: blur(18px) saturate(140%);
  -webkit-backdrop-filter: blur(18px) saturate(140%);
  border-bottom: 1px solid rgba(255, 255, 255, 0.12);
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.45);
}

.site-header__inner {
  max-width: 920px;
  margin: 0 auto;
  padding: 0 1rem;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}

.site-header__brand {
  font-family: var(--font-display);
  font-size: clamp(1rem, 3.5vw, 1.35rem);
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: #fff;
  text-shadow: 0 0 18px var(--ice-glow), 0 0 8px var(--med-glow);
  text-align: center;
  line-height: 1.1;
}

.page {
  position: relative;
  z-index: 2;
  width: min(100%, var(--page-w));
  max-width: var(--page-w);
  margin: 0 auto;
  padding: var(--page-pad-y) var(--page-pad-x) 14mm;
  box-sizing: border-box;
}

.document-body,
.material-principal {
  width: 100%;
  max-width: 100%;
  min-width: 0;
}

/* Seção 0: mascote à esquerda, texto à direita */
.sec-0-lead {
  display: flex;
  align-items: center;
  gap: 1.1rem;
  margin: 0.75rem 0 1.25rem;
}

.hero-mascot {
  flex: 0 0 auto;
  width: 11rem;
  height: 11rem;
  margin: 0;
  padding: 0;
  border: none;
  background: none;
  box-shadow: none;
  line-height: 0;
  border-radius: 50%;
  overflow: hidden;
  isolation: isolate;
}

.hero-mascot__img {
  display: block;
  width: 100%;
  height: 100%;
  max-height: none;
  object-fit: cover;
  object-position: 32% 50%;
}

.sec-0-lead__text {
  flex: 1 1 auto;
  min-width: 0;
}

.sec-0-lead__text p {
  margin: 0 0 0.65rem;
  font-size: 12pt;
  line-height: 1.55;
  color: var(--text-1);
}

.sec-0-lead__text p:last-child {
  margin-bottom: 0;
}

/* ── Tipografia pedagógica ── */
#sec-0 > h1,
.material-principal .hero-title {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: fit-content;
  max-width: 100%;
  margin: 0 auto 0.75rem;
  padding: 0;
  font-family: var(--font-display);
  letter-spacing: 0.04em;
  text-transform: uppercase;
  line-height: 1.05;
  filter: drop-shadow(0 0 20px var(--ice-glow));
}

.hero-title__line {
  display: block;
  width: 100%;
  white-space: nowrap;
  text-align: center;
  letter-spacing: 0.04em;
  background: linear-gradient(90deg, var(--ice-l), var(--neon) 45%, var(--med-l) 75%, var(--ice-l));
  background-size: 200% auto;
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
  animation: shine 8s linear infinite;
}

.hero-title__line--primary {
  font-size: clamp(2rem, 6.2vw, 3rem);
}

.hero-title__line--secondary {
  margin-top: 0.25rem;
  font-size: clamp(1.35rem, 4.4vw, 2.05rem);
}

.sec-label {
  display: inline-flex;
  align-items: center;
  gap: 7px;
  font-family: var(--font-cond);
  font-size: 0.75rem;
  font-weight: 700;
  letter-spacing: 0.2em;
  text-transform: uppercase;
  color: var(--ice-l);
  margin-bottom: 10px;
  text-shadow: 0 0 10px var(--ice-glow);
}

.sec-label::before {
  content: "";
  width: 14px;
  height: 2px;
  background: var(--ice);
  border-radius: 2px;
}

.sec-title {
  font-family: var(--font-display);
  font-size: clamp(1.45rem, 4vw, 2rem);
  letter-spacing: 0.04em;
  color: #ffffff;
  line-height: 1.05;
  margin-bottom: 12px;
  text-shadow: 0 2px 20px rgba(0, 180, 216, 0.35);
}

.sec-title .hi {
  background: linear-gradient(90deg, var(--ice-l), var(--neon) 45%, var(--med-l) 75%, var(--ice-l));
  background-size: 200% auto;
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
  animation: shine 8s linear infinite;
}

@keyframes shine { to { background-position: 200% center; } }

.material-principal > section,
.material-principal > article {
  margin-bottom: 1.25rem;
  padding: 0.85rem var(--section-pad-x);
  background: rgba(8, 8, 8, 0.82);
  border: 1px solid var(--border);
  border-radius: 8px;
  width: 100%;
  max-width: 100%;
  overflow-x: auto;
  overflow-y: visible;
  box-shadow: inset 0 0 0 1px rgba(255, 255, 255, 0.04);
}

.material-principal h2,
.material-principal .sec-title {
  font-family: var(--font-display);
  font-size: clamp(1.65rem, 4vw, 2rem);
  letter-spacing: 0.05em;
  text-transform: uppercase;
  color: var(--ice-l);
  margin-bottom: 1rem;
  text-shadow: 0 0 16px var(--ice-glow);
}

.material-principal h3,
.concept h3,
.exam-question h3 {
  font-family: var(--font-cond);
  font-size: 1.15rem;
  font-weight: 700;
  letter-spacing: 0.07em;
  text-transform: uppercase;
  color: #e8f8ff;
  margin: 1.5rem 0 0.75rem;
  text-shadow: 0 0 12px rgba(0, 180, 216, 0.25);
}

.material-principal h4,
.worked-example h4,
.resumao h4 {
  font-family: var(--font-cond);
  font-size: 1rem;
  font-weight: 700;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  color: var(--med-l);
  margin: 1rem 0 0.5rem;
  text-shadow: 0 0 10px var(--med-glow);
}

.material-principal p {
  margin: 0.55rem 0;
  color: var(--text);
  overflow-wrap: anywhere;
  word-wrap: break-word;
}

.material-principal .concept {
  margin: 0.65rem 0;
}
.material-principal ul, .material-principal ol { padding-left: 1.25rem; margin: 0.75rem 0; }
.material-principal li { margin: 0.35rem 0; color: var(--text-2); }

.concept { margin: 1.25rem 0; }

.ref, .practice-hint {
  font-family: var(--font-cond);
  font-size: 0.78rem;
  font-weight: 600;
  letter-spacing: 0.06em;
  color: var(--ice-l);
  margin-top: 0.75rem;
}

.worked-example {
  margin: 1.25rem 0;
  padding: 1rem 1.1rem;
  border: 1px solid var(--border-h);
  border-radius: 10px;
  background: rgba(0, 180, 216, 0.04);
  page-break-inside: avoid;
}

.worked-example .setup {
  font-family: var(--font-serif);
  font-style: italic;
  color: var(--text-2);
  margin-bottom: 0.75rem;
}

.steps { list-style: none; padding: 0; margin: 0; counter-reset: step; }

.steps li {
  margin: 0.85rem 0;
  padding-left: 0;
  counter-increment: step;
}

.step {
  display: block;
  font-weight: 600;
  color: var(--text);
  margin-bottom: 0.25rem;
}

.step::before {
  content: "Passo " counter(step) ": ";
  color: var(--ice-l);
  font-family: var(--font-cond);
  font-size: 0.85rem;
  letter-spacing: 0.06em;
  text-transform: uppercase;
}

.thinking {
  display: block;
  margin-top: 0.35rem;
  padding: 0.5rem 0.65rem;
  border-left: 2px solid var(--med);
  background: rgba(155, 93, 229, 0.08);
  font-size: 0.9rem;
  color: var(--text-2);
}

.closure { margin-top: 0.75rem; font-weight: 600; color: var(--neon); }

.pegadinha {
  margin: 1rem 0;
  padding: 0.85rem 1rem;
  border-left: 3px solid #f59e0b;
  background: rgba(245, 158, 11, 0.08);
  color: #fcd34d;
  page-break-inside: avoid;
}

.mnemonic {
  margin: 1rem 0;
  padding: 0.75rem 1rem;
  border-radius: 8px;
  background: rgba(57, 255, 20, 0.06);
  border: 1px solid rgba(57, 255, 20, 0.2);
  color: #bbf7d0;
}

.resumao {
  margin-top: 1.5rem;
  padding: 1rem;
  border: 1px solid rgba(155, 93, 229, 0.25);
  border-radius: 10px;
  background: rgba(155, 93, 229, 0.06);
  page-break-inside: avoid;
}

.resumao h4 { color: var(--med-l); margin-top: 0; }

.takeaways { margin: 0.5rem 0; }

/* Tabelas: centralizadas no eixo X, bordas brancas, células ao centro */
.material-principal table,
.truth-table,
.equivalence-chain,
.formal-proof {
  display: table;
  width: 100%;
  max-width: 100%;
  table-layout: auto;
  margin: 0.85rem auto;
  border-collapse: collapse;
  font-size: 8.5pt;
  page-break-inside: avoid;
}

.material-principal table th,
.material-principal table td,
.truth-table th,
.truth-table td,
.equivalence-chain th,
.equivalence-chain td,
.formal-proof th,
.formal-proof td {
  border: 1px solid rgba(255, 255, 255, 0.88);
  padding: 0.55rem 0.75rem;
  text-align: center;
  vertical-align: middle;
  color: var(--text);
}

.material-principal table th,
.truth-table th,
.equivalence-chain th,
.formal-proof th {
  background: rgba(0, 180, 216, 0.22);
  color: #fff;
  font-family: var(--font-cond);
  font-size: 0.78rem;
  font-weight: 700;
  letter-spacing: 0.07em;
  text-transform: uppercase;
}

.material-principal table tbody tr:nth-child(even) td,
.truth-table tbody tr:nth-child(even) td,
.equivalence-chain tbody tr:nth-child(even) td,
.formal-proof tbody tr:nth-child(even) td {
  background: rgba(255, 255, 255, 0.03);
}

.table-wrap {
  width: 100%;
  max-width: 100%;
  overflow-x: auto;
  margin: 1rem 0;
  -webkit-overflow-scrolling: touch;
}

/* Mapa SVG legível (substitui texto invisível) */
.material-principal svg {
  display: block;
  max-width: 100%;
  height: auto;
  margin: 1rem auto;
}

.material-principal svg text {
  fill: #f0f0f0;
  font-family: var(--font-cond), sans-serif;
  font-size: 11px;
  font-weight: 600;
}

.material-principal svg rect {
  fill: rgba(0, 180, 216, 0.18);
  stroke: rgba(255, 255, 255, 0.55);
  stroke-width: 1;
}

.exam-question {
  margin: 2rem 0;
  padding: 1.25rem;
  border: 1px solid var(--border-h);
  border-radius: 10px;
  background: rgba(8, 8, 8, 0.6);
  page-break-inside: avoid;
}

.statement, .what-its-testing, .strategy {
  margin: 0.75rem 0;
}

.mapa-progressao {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.22rem;
  margin: 0.75rem auto 0;
  max-width: min(26rem, 100%);
  width: 100%;
}

.mapa-progressao a {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  min-height: 0;
  padding: 0.22rem 0.3rem;
  border: 1px solid rgba(255, 255, 255, 0.4);
  border-radius: 4px;
  color: #fff;
  text-decoration: none;
  font-family: var(--font-cond);
  font-size: 13.5pt;
  font-weight: 700;
  letter-spacing: 0.03em;
  text-align: center;
  line-height: 1.15;
  transition: border-color 0.2s, color 0.2s, background 0.2s;
}

.mapa-progressao a:hover {
  border-color: var(--ice-l);
  color: var(--ice-l);
  background: rgba(0, 180, 216, 0.14);
  transform: translateY(-1px);
}

.concept h3.mapa-progressao-label {
  text-align: center;
  font-size: 1.25rem;
}

.site-footer {
  margin-top: 3rem;
  padding: 1.5rem 0;
  text-align: center;
  font-family: var(--font-cond);
  font-size: 0.72rem;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: var(--text-m);
  border-top: 1px solid var(--border);
}

@media (max-width: 520px) {
  .sec-0-lead {
    flex-direction: column;
    align-items: center;
  }

  .hero-mascot {
    width: 9.5rem;
    height: 9.5rem;
  }

  .sec-0-lead__text {
    text-align: center;
  }
}

@media print {
  body {
    background: #080808;
    font-size: 10pt;
    display: block;
  }

  .orbs,
  body::after {
    display: none !important;
  }

  .page {
    width: 100%;
    max-width: none;
    margin: 0;
    padding: 0 3mm;
    box-sizing: border-box;
  }

  .material-principal > section,
  .material-principal > article {
    overflow: visible;
  }

  .hero-title__line {
    -webkit-print-color-adjust: exact;
    print-color-adjust: exact;
  }

  .mapa-progressao a {
    -webkit-print-color-adjust: exact;
    print-color-adjust: exact;
  }

  .material-principal > section,
  .material-principal > article {
    break-inside: avoid-page;
    page-break-inside: avoid;
  }

  .hero-mascot {
    width: 9rem;
    height: 9rem;
  }
}

@media (prefers-reduced-motion: reduce) {
  .orb, .sec-title .hi, #sec-0 > h1 { animation: none; }
}
`;
}
