import { mkdir, writeFile } from "node:fs/promises";
import path from "node:path";
import type { Block, IdlDocument, Section } from "../../idl/types.js";

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

function renderBlock(block: Block): string {
  switch (block.type) {
    case "heading": {
      const tag = `h${block.level}`;
      return `<${tag}>${escapeHtml(block.text)}</${tag}>`;
    }
    case "paragraph":
      return `<p>${escapeHtml(block.text)}</p>`;
    case "list": {
      const tag = block.ordered ? "ol" : "ul";
      const items = block.items.map((i) => `<li>${escapeHtml(i)}</li>`).join("");
      return `<${tag}>${items}</${tag}>`;
    }
    case "callout":
      return `<aside class="callout callout-${block.variant}">${
        block.title ? `<strong>${escapeHtml(block.title)}</strong> ` : ""
      }${escapeHtml(block.text)}</aside>`;
    case "image":
      return `<figure><img src="${escapeHtml(block.src)}" alt="${escapeHtml(block.alt)}"/>${
        block.caption ? `<figcaption>${escapeHtml(block.caption)}</figcaption>` : ""
      }</figure>`;
    case "code":
      return `<pre><code>${escapeHtml(block.text)}</code></pre>`;
    case "divider":
      return "<hr/>";
    default:
      return "";
  }
}

function renderSection(section: Section): string {
  const body = section.blocks.map(renderBlock).join("\n");
  return `<section id="${escapeHtml(section.id)}"><h2>${escapeHtml(section.title)}</h2>${body}</section>`;
}

export function renderHtmlBundle(doc: IdlDocument): string {
  const sections = doc.structure.map(renderSection).join("\n");
  return `<!DOCTYPE html>
<html lang="${escapeHtml(doc.meta.language)}">
<head>
  <meta charset="utf-8"/>
  <meta name="viewport" content="width=device-width, initial-scale=1"/>
  <title>${escapeHtml(doc.meta.title)}</title>
  <style>
    :root { font-family: system-ui, sans-serif; line-height: 1.5; max-width: 42rem; margin: auto; padding: 1rem; }
    .callout { padding: 0.75rem 1rem; border-radius: 0.5rem; margin: 1rem 0; }
    .callout-info { background: #e8f4fc; }
    .callout-warning { background: #fff3cd; }
    .callout-tip { background: #e8f5e9; }
    img { max-width: 100%; height: auto; }
    pre { overflow-x: auto; background: #f4f4f4; padding: 0.75rem; }
  </style>
</head>
<body>
  <header><h1>${escapeHtml(doc.meta.title)}</h1></header>
  <main>${sections}</main>
</body>
</html>`;
}

export async function compileHtmlBundle(
  doc: IdlDocument,
  distDir: string
): Promise<BuildResult> {
  await mkdir(distDir, { recursive: true });
  const fileName = `${doc.meta.id}.html`;
  const outputPath = path.join(distDir, fileName);
  await writeFile(outputPath, renderHtmlBundle(doc), "utf8");
  return { outputPath, format: "html-bundle" };
}
