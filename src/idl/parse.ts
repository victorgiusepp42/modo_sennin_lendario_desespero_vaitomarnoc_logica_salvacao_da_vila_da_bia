import { readFile } from "node:fs/promises";
import path from "node:path";
import YAML from "yaml";
import type { IdlDocument } from "./types.js";

export async function parseIdlFile(filePath: string): Promise<IdlDocument> {
  const raw = await readFile(filePath, "utf8");
  const data = YAML.parse(raw) as IdlDocument | null;
  if (!data || typeof data !== "object") {
    throw new Error(`Arquivo IDL inválido ou vazio: ${filePath}`);
  }
  return data;
}

export async function findIdlFiles(contentDir: string): Promise<string[]> {
  const { readdir } = await import("node:fs/promises");
  const files: string[] = [];
  async function walk(dir: string) {
    for (const entry of await readdir(dir, { withFileTypes: true })) {
      const full = path.join(dir, entry.name);
      if (entry.isDirectory()) await walk(full);
      else if (entry.name.endsWith(".idl.yaml")) files.push(full);
    }
  }
  await walk(contentDir);
  return files.sort();
}
