import path from "node:path";
import { fileURLToPath } from "node:url";
import { compileHtmlBundle } from "./converters/html-bundle/index.js";
import { findIdlFiles, parseIdlFile } from "./idl/parse.js";
import { validateDocument } from "./idl/validate.js";
import { generatePdfFromHtml } from "./pdf.js";

const root = path.join(path.dirname(fileURLToPath(import.meta.url)), "..");
const contentDir = path.join(root, "content");
const distDir = path.join(root, "dist");

async function cmdValidate(): Promise<number> {
  const files = await findIdlFiles(contentDir);
  if (files.length === 0) {
    console.error("Nenhum arquivo .idl.yaml em content/");
    return 1;
  }
  let failed = 0;
  for (const file of files) {
    const doc = await parseIdlFile(file);
    const result = await validateDocument(doc, file);
    if (result.ok) console.log(`OK  ${file}`);
    else {
      failed++;
      console.error(`FAIL ${file}`);
      for (const e of result.errors) console.error(`  ${e}`);
    }
  }
  return failed > 0 ? 1 : 0;
}

async function cmdBuild(): Promise<number> {
  const code = await cmdValidate();
  if (code !== 0) return code;
  const files = await findIdlFiles(contentDir);
  for (const file of files) {
    const doc = await parseIdlFile(file);
    const result = await compileHtmlBundle(doc, distDir, root);
    console.log(`Built ${result.format} → ${result.outputPath}`);
  }
  return 0;
}

async function cmdPdf(): Promise<number> {
  const code = await cmdBuild();
  if (code !== 0) return code;

  const files = await findIdlFiles(contentDir);
  for (const file of files) {
    const doc = await parseIdlFile(file);
    const htmlPath = path.join(distDir, `${doc.meta.id}.html`);
    const pdfPath = path.join(distDir, `${doc.meta.id}.pdf`);
    console.log(`PDF  ${path.basename(htmlPath)} → ${path.basename(pdfPath)}`);
    await generatePdfFromHtml(htmlPath, pdfPath);
    console.log(`OK   ${pdfPath}`);
  }
  return 0;
}

const [command] = process.argv.slice(2);

try {
  const exit =
    command === "validate"
      ? await cmdValidate()
      : command === "build"
        ? await cmdBuild()
        : command === "pdf"
          ? await cmdPdf()
          : (console.error("Uso: validate | build | pdf"), 1);
  process.exit(exit);
} catch (err) {
  console.error(err instanceof Error ? err.message : err);
  process.exit(1);
}
