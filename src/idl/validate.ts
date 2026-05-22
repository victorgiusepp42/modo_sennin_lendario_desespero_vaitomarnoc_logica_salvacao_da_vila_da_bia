import { readFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";
import Ajv, { type ValidateFunction } from "ajv";
import addFormats from "ajv-formats";
import type { IdlDocument } from "./types.js";

const projectRoot = path.join(path.dirname(fileURLToPath(import.meta.url)), "..", "..");
const schemaPath = path.join(projectRoot, "schemas", "material.idl.schema.json");

let validateFn: ValidateFunction | null = null;

async function getValidate(): Promise<ValidateFunction> {
  if (validateFn) return validateFn;
  const schema = JSON.parse(await readFile(schemaPath, "utf8"));
  const ajv = new Ajv({ allErrors: true, strict: false, validateSchema: false });
  addFormats(ajv);
  validateFn = ajv.compile(schema);
  return validateFn;
}

export async function validateDocument(
  doc: IdlDocument,
  filePath: string
): Promise<{ ok: true } | { ok: false; errors: string[] }> {
  const validate = await getValidate();
  const valid = validate(doc);
  if (valid) return { ok: true };
  const errors = (validate.errors ?? []).map(
    (e) => `${filePath}: ${e.instancePath || "/"} ${e.message ?? "erro"}`
  );
  return { ok: false, errors };
}
