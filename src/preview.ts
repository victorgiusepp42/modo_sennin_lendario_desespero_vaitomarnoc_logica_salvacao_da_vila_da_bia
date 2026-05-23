import { createServer } from "node:http";
import type { AddressInfo } from "node:net";
import { readFile, stat } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const projectRoot = path.join(path.dirname(fileURLToPath(import.meta.url)), "..");
const distDir = path.join(projectRoot, "dist");
const mainHtml = "modo_sennin_lendario_desespero_vaitomarnoc_logica_salvacao_da_vila_da_bia.html";
const preferred = Number(process.env.PORT || 4173);

const MIME: Record<string, string> = {
  ".html": "text/html; charset=utf-8",
  ".pdf": "application/pdf",
  ".png": "image/png",
  ".css": "text/css; charset=utf-8",
  ".js": "text/javascript; charset=utf-8",
};

function startServer(port: number): void {
  const server = createServer(async (req, res) => {
    try {
      let urlPath = decodeURIComponent(
        new URL(req.url ?? "/", `http://127.0.0.1:${port}`).pathname
      );
      if (urlPath === "/") urlPath = `/${mainHtml}`;

      const filePath = path.normalize(path.join(distDir, urlPath.replace(/^\//, "")));
      if (!filePath.startsWith(distDir)) {
        res.writeHead(403).end("Forbidden");
        return;
      }

      const info = await stat(filePath);
      if (!info.isFile()) {
        res.writeHead(404).end("Not found");
        return;
      }

      const ext = path.extname(filePath).toLowerCase();
      const body = await readFile(filePath);
      res.writeHead(200, {
        "Content-Type": MIME[ext] ?? "application/octet-stream",
        "Cache-Control": "no-cache",
      });
      res.end(body);
    } catch {
      res.writeHead(404).end("Not found");
    }
  });

  server.once("error", (err: NodeJS.ErrnoException) => {
    if (err.code === "EADDRINUSE" && port < preferred + 10) {
      startServer(port + 1);
      return;
    }
    console.error(err.message);
    process.exit(1);
  });

  server.listen(port, "127.0.0.1", () => {
    const url = `http://127.0.0.1:${port}/`;
    console.log(`Preview: ${url}`);
    console.log(`Material: http://127.0.0.1:${port}/${mainHtml}`);
  });
}

startServer(preferred);
