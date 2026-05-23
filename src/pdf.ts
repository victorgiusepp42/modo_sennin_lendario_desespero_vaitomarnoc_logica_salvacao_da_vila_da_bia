import { pathToFileURL } from "node:url";
import path from "node:path";
import { fileURLToPath } from "node:url";
import puppeteer from "puppeteer";
/** Largura útil A4 com margens 12mm (210 − 24). */
const A4_VIEWPORT_PX = 794;

export async function generatePdfFromHtml(
  htmlPath: string,
  pdfPath: string
): Promise<void> {
  const browser = await puppeteer.launch({
    headless: true,
    args: ["--font-render-hinting=medium"],
  });

  try {
    const page = await browser.newPage();
    await page.setViewport({
      width: A4_VIEWPORT_PX,
      height: 1123,
      deviceScaleFactor: 1,
    });

    await page.goto(pathToFileURL(htmlPath).href, {
      waitUntil: "networkidle0",
      timeout: 120_000,
    });

    await page.evaluate(async () => {
      await document.fonts.ready;
      const fit = (globalThis as { fitHeroTitleLines?: () => void }).fitHeroTitleLines;
      if (typeof fit === "function") fit();
    });

    await page.waitForFunction(
      () => document.querySelector(".hero-title")?.dataset?.fitted === "1",
      { timeout: 15_000 }
    );

    await page.emulateMediaType("print");

    await page.pdf({
      path: pdfPath,
      preferCSSPageSize: true,
      printBackground: true,
      margin: { top: 0, right: 0, bottom: 0, left: 0 },
    });
  } finally {
    await browser.close();
  }
}

