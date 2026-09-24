import { readFile, writeFile } from "fs/promises";

export async function readJSON(path) {
  const data = await readFile(path, "utf-8");
  return JSON.parse(data);
}

export async function writeJSON(path, data) {
  const result = JSON.stringify(data);
  await writeFile(path, result);
}
