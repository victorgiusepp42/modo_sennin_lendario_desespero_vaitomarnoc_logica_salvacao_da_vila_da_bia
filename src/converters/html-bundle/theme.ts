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
  --page-w-screen: 80vw;
  --page-w-touch: min(94vw, calc(100vw - env(safe-area-inset-left, 0px) - env(safe-area-inset-right, 0px) - 10px));
  --page-w-tablet: min(92vw, calc(100vw - env(safe-area-inset-left, 0px) - env(safe-area-inset-right, 0px) - 14px));
  --page-w-print: 186mm;
  --page-pad-x: 0;
  --page-pad-y: clamp(8px, 2vh, 10mm);
  color-scheme: dark;
}

@page {
  size: A4 portrait;
  margin: 14mm 12mm;
}

*, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

html {
  scroll-behavior: smooth;
  scroll-padding-top: calc(var(--chrome-h) + 16px + env(safe-area-inset-top, 0px));
  -webkit-text-size-adjust: 100%;
}

a {
  -webkit-tap-highlight-color: rgba(0, 180, 216, 0.28);
  touch-action: manipulation;
}

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

/* ── Fundo: orbs + fumaça + pontos de luz (fixos, atrás do conteúdo) ── */
.ambient {
  position: fixed;
  inset: 0;
  pointer-events: none;
  z-index: 0;
  overflow: hidden;
  contain: layout paint style;
}

.orbs {
  position: absolute;
  inset: 0;
  overflow: hidden;
}

.orb {
  position: absolute;
  border-radius: 50%;
  filter: blur(140px);
  opacity: 0.48;
  animation: orb-d 16s ease-in-out infinite;
}

.orb--1 { width: 720px; height: 720px; background: var(--ice-d); top: -160px; left: -200px; }
.orb--2 { width: 560px; height: 560px; background: var(--ice); top: 26%; right: -140px; animation-delay: -5s; }
.orb--3 { width: 460px; height: 460px; background: var(--med-d); bottom: -100px; left: 15%; animation-delay: -10s; }
.orb--4 { width: 400px; height: 400px; background: var(--neon); opacity: 0.32; top: 10%; right: 18%; animation-delay: -14s; }

@keyframes orb-d {
  0%, 100% { transform: translate(0, 0) scale(1); opacity: 0.4; }
  40% { transform: translate(48px, -36px) scale(1.1); opacity: 0.55; }
  70% { transform: translate(-32px, 40px) scale(0.92); opacity: 0.42; }
}

.ambient-fog {
  position: absolute;
  inset: -10%;
  pointer-events: none;
}

.fog-wisp {
  position: absolute;
  border-radius: 50%;
  filter: blur(88px);
  opacity: 0.78;
  mix-blend-mode: screen;
  animation: fog-drift 22s ease-in-out infinite;
}

.fog-wisp--1 {
  width: 72vw;
  height: 52vh;
  top: 4%;
  left: -14%;
  background: radial-gradient(ellipse, rgba(0, 180, 216, 0.55) 0%, transparent 68%);
  animation-duration: 26s;
}

.fog-wisp--2 {
  width: 68vw;
  height: 56vh;
  top: 38%;
  right: -18%;
  background: radial-gradient(ellipse, rgba(155, 93, 229, 0.48) 0%, transparent 66%);
  animation-duration: 31s;
  animation-delay: -8s;
}

.fog-wisp--3 {
  width: 78vw;
  height: 48vh;
  bottom: 2%;
  left: 4%;
  background: radial-gradient(ellipse, rgba(0, 119, 182, 0.42) 0%, transparent 64%);
  animation-duration: 28s;
  animation-delay: -14s;
}

.fog-wisp--4 {
  width: 58vw;
  height: 44vh;
  top: 18%;
  left: 32%;
  background: radial-gradient(ellipse, rgba(57, 255, 20, 0.18) 0%, transparent 72%);
  animation-duration: 24s;
  animation-delay: -5s;
}

.fog-wisp--5 {
  width: 50vw;
  height: 40vh;
  top: 68%;
  right: 8%;
  background: radial-gradient(ellipse, rgba(0, 180, 216, 0.38) 0%, transparent 70%);
  animation-duration: 27s;
  animation-delay: -11s;
}

.fog-wisp--6 {
  width: 44vw;
  height: 36vh;
  top: 12%;
  right: 42%;
  background: radial-gradient(ellipse, rgba(199, 125, 255, 0.3) 0%, transparent 68%);
  animation-duration: 22s;
  animation-delay: -16s;
}

@keyframes fog-drift {
  0%, 100% { transform: translate(0, 0) scale(1); opacity: 0.68; }
  33% { transform: translate(64px, -40px) scale(1.12); opacity: 0.88; }
  66% { transform: translate(-48px, 36px) scale(0.9); opacity: 0.58; }
}

.ambient-sparks {
  position: absolute;
  inset: 0;
}

.spark {
  position: absolute;
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background: #fff;
  box-shadow:
    0 0 14px 3px rgba(144, 224, 239, 1),
    0 0 32px 8px rgba(0, 180, 216, 0.75),
    0 0 52px 14px rgba(155, 93, 229, 0.45);
  opacity: 0;
  animation: spark-float 9s ease-in-out infinite;
}

@keyframes spark-float {
  0%, 100% { opacity: 0; transform: translate(0, 0) scale(0.5); }
  15% { opacity: 1; transform: translate(14px, -12px) scale(1.15); }
  50% { opacity: 0.72; transform: translate(-20px, 22px) scale(0.9); }
  85% { opacity: 0.95; transform: translate(12px, 14px) scale(1.25); }
}

.spark--1  { top: 12%; left: 8%;  animation-delay: 0s;    animation-duration: 11s; }
.spark--2  { top: 28%; left: 92%; animation-delay: -2s;  animation-duration: 13s; }
.spark--3  { top: 45%; left: 4%;  animation-delay: -4s;  animation-duration: 10s; }
.spark--4  { top: 62%; left: 88%; animation-delay: -1s;  animation-duration: 12s; }
.spark--5  { top: 78%; left: 14%; animation-delay: -6s;  animation-duration: 14s; }
.spark--6  { top: 18%; left: 72%; animation-delay: -3s;  animation-duration: 9s; }
.spark--7  { top: 55%; left: 96%; animation-delay: -7s;  animation-duration: 15s; }
.spark--8  { top: 88%; left: 48%; animation-delay: -5s;  animation-duration: 11s; }
.spark--9  { top: 35%; left: 22%; animation-delay: -8s;  animation-duration: 12s; }
.spark--10 { top: 8%;  left: 52%; animation-delay: -2.5s; animation-duration: 10s; }
.spark--11 { top: 72%; left: 6%;  animation-delay: -9s;  animation-duration: 13s; }
.spark--12 { top: 48%; left: 78%; animation-delay: -4.5s; animation-duration: 11s; }
.spark--13 { top: 92%; left: 82%; animation-delay: -6.5s; animation-duration: 14s; }
.spark--14 { top: 22%; left: 38%; animation-delay: -1.5s; animation-duration: 9s; }
.spark--15 { top: 58%; left: 58%; animation-delay: -3.5s; animation-duration: 12s; }
.spark--16 { top: 6%;  left: 28%; animation-delay: -5.5s; animation-duration: 13s; }
.spark--17 { top: 40%; left: 94%; animation-delay: -7.5s; animation-duration: 10s; }
.spark--18 { top: 84%; left: 24%; animation-delay: -2.2s; animation-duration: 15s; }
.spark--19 { top: 32%; left: 64%; animation-delay: -8.5s; animation-duration: 11s; }
.spark--20 { top: 66%; left: 42%; animation-delay: -4.8s; animation-duration: 9s; }
.spark--21 { top: 14%; left: 86%; animation-delay: -6.2s; animation-duration: 14s; }
.spark--22 { top: 52%; left: 12%; animation-delay: -1.8s; animation-duration: 12s; }

body::after {
  content: "";
  position: fixed;
  inset: 0;
  z-index: 1;
  pointer-events: none;
  opacity: 0.055;
  background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 512 512' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='.75' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E");
  background-size: 256px;
}

.page {
  position: relative;
  z-index: 2;
  isolation: isolate;
  width: var(--page-w-screen);
  max-width: var(--page-w-screen);
  flex: 0 0 var(--page-w-screen);
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
  width: 10.5rem;
  height: 10.5rem;
  margin: 0;
  padding: 0;
  border: none;
  background: none;
  box-shadow: none;
  line-height: 0;
}

.hero-mascot__img {
  display: block;
  width: 100%;
  height: auto;
  max-width: 10.5rem;
  object-fit: contain;
  object-position: center;
  border-radius: 50%;
}

.sec-0-lead__text {
  flex: 1 1 auto;
  min-width: 0;
}

.sec-0-lead__text p {
  margin: 0 0 0.65rem;
  font-size: 12pt;
  line-height: 1.55;
  color: var(--text);
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

/* Gradiente + brilho no título inteiro (não só em .hi) */
.hero-title__line,
.material-principal .sec-title,
.material-principal h2.sec-title,
.material-principal h3,
.concept h3,
.exam-question h3,
.material-principal h4,
.worked-example h4,
.resumao h4 {
  background: linear-gradient(90deg, var(--ice-l), var(--neon) 45%, var(--med-l) 75%, var(--ice-l));
  background-size: 200% auto;
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
  color: transparent;
  animation: shine 8s linear infinite;
  text-shadow: none;
  filter: drop-shadow(0 0 14px var(--ice-glow));
}

.hero-title__line {
  display: block;
  width: 100%;
  max-width: 100%;
  white-space: nowrap;
  text-align: center;
  letter-spacing: 0.04em;
}

.material-principal .sec-title .hi {
  background: none;
  animation: none;
  -webkit-text-fill-color: inherit;
  color: inherit;
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
  line-height: 1.05;
  margin-bottom: 12px;
}

@keyframes shine { to { background-position: 200% center; } }

.material-principal > section,
.material-principal > article {
  position: relative;
  isolation: isolate;
  margin-bottom: 1.25rem;
  padding: 0.85rem var(--section-pad-x);
  background: rgba(8, 8, 8, 0.88);
  border: 1px solid rgba(144, 224, 239, 0.45);
  border-radius: 10px;
  width: 100%;
  max-width: 100%;
  min-width: 0;
  overflow: visible;
  box-shadow:
    0 0 0 1px rgba(0, 180, 216, 0.2),
    0 0 20px rgba(0, 180, 216, 0.28),
    0 0 40px rgba(155, 93, 229, 0.14),
    inset 0 0 18px rgba(0, 180, 216, 0.05);
}

.material-principal > section::after,
.material-principal > article::after {
  content: "";
  position: absolute;
  inset: 0;
  border-radius: inherit;
  pointer-events: none;
  box-shadow: inset 0 0 0 1px rgba(255, 255, 255, 0.12);
  animation: border-glow 6s ease-in-out infinite;
}

@keyframes border-glow {
  0%, 100% { opacity: 0.55; }
  50% { opacity: 1; }
}

.material-principal > section::before,
.material-principal > article::before {
  content: "";
  position: absolute;
  inset: -22px -14px;
  z-index: -1;
  border-radius: 18px;
  pointer-events: none;
  background:
    radial-gradient(ellipse 85% 65% at 18% 32%, rgba(0, 180, 216, 0.42), transparent 68%),
    radial-gradient(ellipse 75% 60% at 84% 70%, rgba(155, 93, 229, 0.32), transparent 66%);
  filter: blur(32px);
  opacity: 0.95;
  animation: section-aura 18s ease-in-out infinite;
}

.material-principal > section:nth-child(even)::before,
.material-principal > article:nth-child(even)::before {
  animation-delay: -9s;
  background:
    radial-gradient(ellipse 80% 62% at 80% 28%, rgba(0, 180, 216, 0.36), transparent 66%),
    radial-gradient(ellipse 72% 58% at 16% 74%, rgba(155, 93, 229, 0.38), transparent 64%);
}

@keyframes section-aura {
  0%, 100% { transform: translate(0, 0) scale(1); opacity: 0.85; }
  50% { transform: translate(16px, -12px) scale(1.06); opacity: 1; }
}

.material-principal > section[id],
.material-principal > article[id] {
  scroll-margin-top: calc(var(--chrome-h) + 18px + env(safe-area-inset-top, 0px));
}

.material-principal h2,
.material-principal .sec-title {
  font-family: var(--font-display);
  font-size: clamp(1.65rem, 4vw, 2rem);
  letter-spacing: 0.05em;
  text-transform: uppercase;
  margin-bottom: 1rem;
}

.material-principal h3,
.concept h3,
.exam-question h3 {
  font-family: var(--font-cond);
  font-size: 1.15rem;
  font-weight: 700;
  letter-spacing: 0.07em;
  text-transform: uppercase;
  margin: 1.5rem 0 0.75rem;
}

.material-principal h4,
.worked-example h4,
.resumao h4 {
  font-family: var(--font-cond);
  font-size: 1rem;
  font-weight: 700;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  margin: 1rem 0 0.5rem;
}

.material-principal p {
  margin: 0.55rem 0;
  color: var(--text);
  overflow-wrap: break-word;
  word-wrap: break-word;
  word-break: break-word;
}

.material-principal img,
.material-principal svg,
.material-principal video,
.material-principal pre {
  max-width: 100%;
  height: auto;
}

.material-principal .concept {
  margin: 0.65rem 0;
}
.material-principal ul, .material-principal ol { padding-left: 1.25rem; margin: 0.75rem 0; }
.material-principal li { margin: 0.35rem 0; color: var(--text-2); }

.concept {
  margin: 1.25rem 0;
  display: flow-root;
}

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
  display: flow-root;
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

/* Rótulos "Passo N:" vêm do HTML; evita duplicar com contador CSS */
.step::before {
  content: none;
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
  table-layout: fixed;
  margin: 0.85rem auto;
  border-collapse: collapse;
  font-size: clamp(7pt, 2.2vw, 8.5pt);
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
  padding: 0.45rem 0.5rem;
  text-align: center;
  vertical-align: middle;
  color: var(--text);
  overflow-wrap: break-word;
  word-break: break-word;
  hyphens: auto;
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
  overflow: visible;
  margin: 1rem 0;
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
  display: flow-root;
}

.concept + .concept,
.concept + .worked-example,
.worked-example + .concept,
.worked-example + .worked-example,
.worked-example + .exam-question,
.exam-question + .concept {
  margin-top: 1.65rem;
}

.statement, .what-its-testing, .strategy {
  margin: 0.75rem 0;
}

.worked-example,
.exam-question,
.concept {
  max-width: 100%;
  overflow: visible;
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
  min-height: 44px;
  padding: 0.5rem 0.75rem;
  border: 1px solid rgba(255, 255, 255, 0.4);
  border-radius: 6px;
  color: #fff;
  text-decoration: none;
  font-family: var(--font-cond);
  font-size: 13.5pt;
  font-weight: 700;
  letter-spacing: 0.03em;
  text-align: center;
  line-height: 1.2;
  transition: border-color 0.2s, color 0.2s, background 0.2s, transform 0.15s;
  -webkit-user-select: none;
  user-select: none;
}

@media (hover: hover) and (pointer: fine) {
  .mapa-progressao a:hover {
    border-color: var(--ice-l);
    color: var(--ice-l);
    background: rgba(0, 180, 216, 0.14);
    transform: translateY(-1px);
  }
}

.mapa-progressao a:active {
  border-color: var(--ice-l);
  color: var(--ice-l);
  background: rgba(0, 180, 216, 0.22);
  transform: scale(0.98);
}

.mapa-progressao a:focus-visible {
  outline: 2px solid var(--ice-l);
  outline-offset: 2px;
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

/* Tablet / iPad: coluna mais larga, espaço entre blocos, aura contida */
@media (max-width: 1100px) {
  :root {
    --page-w-screen: var(--page-w-tablet);
    --section-pad-x: 0.75rem;
  }

  .page {
    width: var(--page-w-screen);
    max-width: var(--page-w-screen);
    flex: 0 0 var(--page-w-screen);
  }

  .material-principal > section,
  .material-principal > article {
    margin-bottom: 1.6rem;
    padding-top: 1rem;
    padding-bottom: 1rem;
  }

  .material-principal > section::before,
  .material-principal > article::before {
    inset: -10px -6px;
    filter: blur(20px);
  }

  .material-principal h3,
  .concept h3,
  .exam-question h3 {
    margin-top: 1.15rem;
    position: relative;
    z-index: 1;
  }

  .material-principal h4,
  .worked-example h4,
  .resumao h4 {
    margin-top: 0.85rem;
    position: relative;
    z-index: 1;
  }
}

/* Celular: >90% da tela, tipografia e tabelas proporcionais */
@media (max-width: 520px) {
  :root {
    --page-w-screen: var(--page-w-touch);
    --section-pad-x: 0.55rem;
  }

  body {
    padding-bottom: env(safe-area-inset-bottom, 0px);
    padding-left: max(3px, env(safe-area-inset-left, 0px));
    padding-right: max(3px, env(safe-area-inset-right, 0px));
    font-size: 11pt;
    line-height: 1.5;
  }

  .page {
    width: var(--page-w-screen);
    max-width: var(--page-w-screen);
    flex: 0 0 var(--page-w-screen);
    padding-top: 6px;
    padding-bottom: 10mm;
  }

  .material-principal > section,
  .material-principal > article {
    margin-bottom: 1.1rem;
    padding: 0.7rem var(--section-pad-x) 0.85rem;
  }

  .material-principal > section::before,
  .material-principal > article::before {
    inset: -6px -4px;
    filter: blur(14px);
    opacity: 0.75;
  }

  .material-principal h2,
  .material-principal .sec-title {
    font-size: clamp(1.15rem, 5.2vw, 1.45rem);
    margin-bottom: 0.65rem;
    line-height: 1.12;
  }

  .material-principal h3,
  .concept h3,
  .exam-question h3 {
    font-size: clamp(0.95rem, 4.2vw, 1.05rem);
    margin: 1rem 0 0.55rem;
    letter-spacing: 0.05em;
    line-height: 1.2;
  }

  .material-principal h4,
  .worked-example h4,
  .resumao h4 {
    font-size: clamp(0.82rem, 3.6vw, 0.92rem);
    margin: 0.75rem 0 0.45rem;
    line-height: 1.25;
  }

  .sec-0-lead__text p {
    font-size: 10.5pt;
  }

  .hero-title__line--primary {
    font-size: clamp(1.45rem, 7.5vw, 2rem);
  }

  .hero-title__line--secondary {
    font-size: clamp(1rem, 5vw, 1.35rem);
  }

  .ref,
  .practice-hint {
    font-size: 0.7rem;
    line-height: 1.35;
  }

  .worked-example {
    padding: 0.75rem 0.65rem;
    margin: 1rem 0;
  }

  .worked-example .setup {
    font-size: 10pt;
    line-height: 1.45;
  }

  .step {
    font-size: 10pt;
    line-height: 1.4;
  }

  .thinking {
    font-size: 0.82rem;
    padding: 0.4rem 0.5rem;
  }

  .material-principal table,
  .truth-table,
  .equivalence-chain,
  .formal-proof {
    font-size: clamp(7.5pt, 2.4vw, 8.5pt);
  }

  .material-principal table th,
  .truth-table th,
  .equivalence-chain th,
  .formal-proof th {
    font-size: clamp(6.5pt, 2vw, 7.5pt);
    padding: 0.35rem 0.25rem;
    letter-spacing: 0.03em;
  }

  .material-principal table td,
  .truth-table td,
  .equivalence-chain td,
  .formal-proof td {
    padding: 0.35rem 0.25rem;
  }

  .mapa-progressao a {
    font-size: 11pt;
    min-height: 48px;
    padding: 0.45rem 0.5rem;
  }

  .concept h3.mapa-progressao-label {
    font-size: 1.05rem;
  }

  .hero-title__line {
    white-space: normal;
  }

  .sec-0-lead {
    flex-direction: column;
    align-items: center;
    gap: 0.75rem;
  }

  .hero-mascot,
  .hero-mascot__img {
    width: 8.5rem;
    max-width: 8.5rem;
  }

  .sec-0-lead__text {
    text-align: center;
  }

  .concept + .concept,
  .concept + .worked-example,
  .worked-example + .concept,
  .worked-example + .worked-example {
    margin-top: 1.25rem;
  }
}

@media print {
  body {
    background: #080808;
    font-size: 10pt;
    display: block;
  }

  .orbs,
  .ambient,
  .ambient-fog,
  .ambient-sparks,
  body::after {
    display: none !important;
  }

  .material-principal > section::before,
  .material-principal > article::before {
    display: none !important;
  }

  .page {
    width: var(--page-w-print);
    max-width: var(--page-w-print);
    flex: none;
    margin: 0;
    padding: 0 3mm;
    box-sizing: border-box;
  }

  .material-principal > section::after,
  .material-principal > article::after {
    display: none !important;
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
  html { scroll-behavior: auto; }
  .orb,
  .fog-wisp,
  .spark,
  .material-principal > section::before,
  .material-principal > article::before,
  .material-principal > section::after,
  .material-principal > article::after,
  .hero-title__line,
  .material-principal .sec-title,
  .material-principal h3,
  .concept h3,
  .exam-question h3,
  .material-principal h4,
  .worked-example h4,
  .resumao h4,
  #sec-0 > h1 { animation: none; }
}

/* Android / touch: animações pesadas (blur + blend + shine) causam flicker ao rolar */
@media (hover: none) and (pointer: coarse) {
  html { scroll-behavior: auto; }

  body::after {
    display: none;
  }

  .orb,
  .fog-wisp,
  .spark,
  .material-principal > section::before,
  .material-principal > article::before,
  .material-principal > section::after,
  .material-principal > article::after,
  .hero-title__line,
  .material-principal .sec-title,
  .material-principal h2.sec-title,
  .material-principal h3,
  .concept h3,
  .exam-question h3,
  .material-principal h4,
  .worked-example h4,
  .resumao h4 {
    animation: none !important;
  }

  .fog-wisp {
    mix-blend-mode: normal;
  }

  .orb {
    filter: blur(56px);
    opacity: 0.32;
  }

  .ambient-sparks {
    opacity: 0.25;
  }

  .spark {
    opacity: 0.28;
    box-shadow: 0 0 8px 2px rgba(144, 224, 239, 0.55);
  }

  .material-principal > section::before,
  .material-principal > article::before {
    filter: blur(10px);
    opacity: 0.55;
  }

  #sec-0 > h1,
  .material-principal .hero-title,
  .hero-title__line,
  .material-principal .sec-title,
  .material-principal h2.sec-title,
  .material-principal h3,
  .concept h3,
  .exam-question h3,
  .material-principal h4,
  .worked-example h4,
  .resumao h4 {
    filter: none;
    text-shadow: 0 0 10px rgba(0, 180, 216, 0.35);
    background-position: 50% center;
  }
}
`;
}
