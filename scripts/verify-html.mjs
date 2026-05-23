import { readFileSync } from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const root = path.join(path.dirname(fileURLToPath(import.meta.url)), "..");
const htmlPath = path.join(
  root,
  "dist",
  "modo_sennin_lendario_desespero_vaitomarnoc_logica_salvacao_da_vila_da_bia.html"
);

const html = readFileSync(htmlPath, "utf8");
const ids = new Set([...html.matchAll(/id="(sec-\d+)"/g)].map((m) => m[1]));
const hrefs = [...html.matchAll(/href="#(sec-\d+)"/g)].map((m) => m[1]);
const missing = hrefs.filter((x) => !ids.has(x));

const checks = {
  ambient: html.includes('class="ambient"'),
  fog: html.includes("ambient-fog"),
  sparks: html.includes("ambient-sparks"),
  navScript: html.includes("bindAnchorLinks"),
  sectionAura: html.includes("section-aura"),
  touchMinHeight: html.includes("min-height: 44px"),
  sectionIds: ids.size,
  mapLinks: hrefs.length,
  missingAnchors: missing,
};

let failed = 0;
for (const [k, v] of Object.entries(checks)) {
  const ok = k === "missingAnchors" ? v.length === 0 : v === true || (typeof v === "number" && v > 0);
  if (!ok && k !== "missingAnchors") failed++;
  if (k === "missingAnchors" && v.length) failed++;
  console.log(ok ? "OK" : "FAIL", k, v);
}
process.exit(failed ? 1 : 0);
