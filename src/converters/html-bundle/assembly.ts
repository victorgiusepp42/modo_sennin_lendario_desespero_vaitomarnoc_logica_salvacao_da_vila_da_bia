import { readFile, copyFile } from "node:fs/promises";
import path from "node:path";
import YAML from "yaml";

export type GeneratedPart = {
  id: string;
  kind: "generated";
  source: string;
  title: string;
};

export type TransitionPart = {
  id: string;
  kind: "transition";
  title: string;
  subtitle?: string;
};

export type PdfAppendixPart = {
  id: string;
  kind: "pdf-appendix";
  file: string;
  distName: string;
  title: string;
  description?: string;
  embed?: boolean;
};

export type AssemblyPart = GeneratedPart | TransitionPart | PdfAppendixPart;

export type AssemblyConfig = {
  parts: AssemblyPart[];
};

const EMBED_MAX_BYTES = 2 * 1024 * 1024;

export async function loadAssembly(projectRoot: string): Promise<AssemblyConfig> {
  const raw = await readFile(path.join(projectRoot, "content", "assembly.yaml"), "utf8");
  const doc = YAML.parse(raw) as { parts?: AssemblyPart[] };
  if (!doc?.parts?.length) throw new Error("content/assembly.yaml sem parts");
  return { parts: doc.parts };
}

function escapeHtml(text: string): string {
  return text
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

function renderTransition(part: TransitionPart): string {
  const subtitle = part.subtitle
    ? `<p class="section-transition__subtitle">${escapeHtml(part.subtitle)}</p>`
    : "";
  return `<section class="section-transition" id="${escapeHtml(part.id)}" aria-label="${escapeHtml(part.title)}">
  <div class="section-transition__divider" aria-hidden="true"><span></span><span class="section-transition__icon">⬇</span><span></span></div>
  <h2 class="section-transition__title">${escapeHtml(part.title)}</h2>
  ${subtitle}
</section>`;
}

function renderPdfAppendix(
  part: PdfAppendixPart,
  pdfRef: string,
  embedded: boolean
): string {
  const desc = part.description
    ? `<p class="appendix__desc">${escapeHtml(part.description)}</p>`
    : "";
  const viewer = embedded
    ? `<object class="appendix__pdf" data="${pdfRef}" type="application/pdf" title="${escapeHtml(part.title)}">
    <p class="appendix__fallback">Seu navegador não exibe PDF inline. <a href="${part.distName}" download>Baixar ${escapeHtml(part.distName)}</a></p>
  </object>`
    : `<div class="appendix__pdf-placeholder">
    <p>Arquivo grande — abra pelo botão ou pelo PDF na mesma pasta do HTML.</p>
    <a class="appendix__open-btn" href="${pdfRef}" target="_blank" rel="noopener">Abrir ${escapeHtml(part.distName)}</a>
    <object class="appendix__pdf appendix__pdf--external" data="${pdfRef}" type="application/pdf" title="${escapeHtml(part.title)}">
      <p class="appendix__fallback"><a href="${pdfRef}">Abrir PDF</a></p>
    </object>
  </div>`;

  return `<section class="appendix" id="${escapeHtml(part.id)}">
  <h2 class="appendix__title">${escapeHtml(part.title)}</h2>
  ${desc}
  ${viewer}
</section>`;
}

export async function renderAssemblyParts(
  projectRoot: string,
  distDir: string
): Promise<string> {
  const { parts } = await loadAssembly(projectRoot);
  const chunks: string[] = [];

  for (const part of parts) {
    if (part.kind === "generated") {
      const src = path.join(projectRoot, part.source);
      chunks.push(`<!-- assembly: ${part.id} -->\n${await readFile(src, "utf8")}`);
      continue;
    }
    if (part.kind === "transition") {
      chunks.push(renderTransition(part));
      continue;
    }
    if (part.kind === "pdf-appendix") {
      const srcPath = path.join(projectRoot, part.file);
      await copyFile(srcPath, path.join(distDir, part.distName));
      const size = (await readFile(srcPath)).length;
      const embedded =
        part.embed === true || (part.embed !== false && size <= EMBED_MAX_BYTES);
      let pdfRef = part.distName;
      if (embedded) {
        const buf = await readFile(srcPath);
        pdfRef = `data:application/pdf;base64,${buf.toString("base64")}`;
      }
      chunks.push(renderPdfAppendix(part, pdfRef, embedded));
    }
  }
  return chunks.join("\n");
}
