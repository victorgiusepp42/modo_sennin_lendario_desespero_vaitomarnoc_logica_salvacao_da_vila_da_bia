import { mkdir, writeFile } from "node:fs/promises";
import path from "node:path";
import type { IdlDocument } from "../../idl/types.js";
import { loadMascotDataUri } from "./assets.js";
import { renderAssemblyParts } from "./assembly.js";
import { HERO_TITLE_FIT_SCRIPT } from "./hero-title-fit.js";
import { getThemeCss } from "./theme.js";

export type BuildResult = {
  outputPath: string;
  format: "html-bundle";
};

function escapeHtml(text: string): string {
  return text
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

const MASCOT_MARKER = "<!-- MASCOTE -->";

function renderMascotImg(mascotSrc: string | null): string {
  if (!mascotSrc) return "";
  return `<img class="hero-mascot__img" src="${mascotSrc}" alt="Mascote do curso BIA UFCAT — Inteligência Artificial" width="1024" height="1024" decoding="async" fetchpriority="high"/>`;
}

function injectMascot(html: string, mascotSrc: string | null): string {
  const img = renderMascotImg(mascotSrc);
  if (!img) return html.replace(MASCOT_MARKER, "");
  return html.includes(MASCOT_MARKER)
    ? html.replace(MASCOT_MARKER, img)
    : html;
}

function renderChrome(): string {
  return `<div class="orbs" aria-hidden="true">
  <div class="orb orb--1"></div>
  <div class="orb orb--2"></div>
  <div class="orb orb--3"></div>
  <div class="orb orb--4"></div>
</div>`;
}

export function renderHtmlBundle(
  doc: IdlDocument,
  assemblyHtml: string,
  mascotDataUri: string | null
): string {
  const bodyHtml = injectMascot(assemblyHtml, mascotDataUri);
  return `<!DOCTYPE html>
<html lang="${escapeHtml(doc.meta.language)}">
<head>
  <meta charset="utf-8"/>
  <meta name="viewport" content="width=device-width, initial-scale=1"/>
  <meta name="theme-color" content="#080808"/>
  <meta name="color-scheme" content="dark"/>
  <title>${escapeHtml(doc.meta.title)}</title>
  <link rel="preconnect" href="https://fonts.googleapis.com"/>
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
  <link href="https://fonts.googleapis.com/css2?family=Barlow+Condensed:wght@400;600;700&family=Bebas+Neue&family=Inter:wght@400;500;600&family=Lora:ital,wght@0,400;1,400&display=swap" rel="stylesheet"/>
  <style>${getThemeCss()}</style>
</head>
<body>
  ${renderChrome()}
  <div class="page">
    <main class="document-body">${bodyHtml}</main>
    <footer class="site-footer">UFCAT · IMTec · Lógica para Inteligência Artificial · Material de remediação</footer>
  </div>
  <script>${HERO_TITLE_FIT_SCRIPT}</script>
</body>
</html>`;
}

export async function compileHtmlBundle(
  doc: IdlDocument,
  distDir: string,
  projectRoot: string
): Promise<BuildResult> {
  await mkdir(distDir, { recursive: true });
  const assemblyHtml = await renderAssemblyParts(projectRoot, distDir);
  const mascotDataUri = await loadMascotDataUri(projectRoot);
  const fileName = `${doc.meta.id}.html`;
  const outputPath = path.join(distDir, fileName);
  await writeFile(outputPath, renderHtmlBundle(doc, assemblyHtml, mascotDataUri), "utf8");
  return { outputPath, format: "html-bundle" };
}
