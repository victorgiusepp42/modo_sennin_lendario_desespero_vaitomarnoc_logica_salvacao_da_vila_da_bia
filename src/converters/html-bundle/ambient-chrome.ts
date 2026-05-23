/** Camadas de fundo: orbs, fumaça/nevoa e pontos de luz (fora dos painéis de conteúdo). */
export function renderAmbientChrome(): string {
  const sparks = Array.from({ length: 22 }, (_, i) => {
    const n = i + 1;
    return `<span class="spark spark--${n}" aria-hidden="true"></span>`;
  }).join("\n    ");

  return `<div class="ambient" aria-hidden="true">
  <div class="orbs">
    <div class="orb orb--1"></div>
    <div class="orb orb--2"></div>
    <div class="orb orb--3"></div>
    <div class="orb orb--4"></div>
  </div>
  <div class="ambient-fog">
    <div class="fog-wisp fog-wisp--1"></div>
    <div class="fog-wisp fog-wisp--2"></div>
    <div class="fog-wisp fog-wisp--3"></div>
    <div class="fog-wisp fog-wisp--4"></div>
    <div class="fog-wisp fog-wisp--5"></div>
    <div class="fog-wisp fog-wisp--6"></div>
  </div>
  <div class="ambient-sparks">
    ${sparks}
  </div>
</div>`;
}
