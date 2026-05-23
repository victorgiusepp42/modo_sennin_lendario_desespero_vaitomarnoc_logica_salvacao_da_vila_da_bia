import { readFile } from "node:fs/promises";
import path from "node:path";

const MASCOT_REL = path.join("content", "assets", "mascote-bia-ufcat-cutout.png");

export async function loadMascotDataUri(projectRoot: string): Promise<string | null> {
  const filePath = path.join(projectRoot, MASCOT_REL);
  try {
    const buf = await readFile(filePath);
    return `data:image/png;base64,${buf.toString("base64")}`;
  } catch {
    return null;
  }
}
