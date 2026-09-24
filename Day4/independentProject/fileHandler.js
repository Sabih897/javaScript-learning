import { readFile, writeFile } from "fs/promises";

export async function readJSON(path) {
  const data = await readFile(path);
  return JSON.parse(data);
}

export async function writeJSON(path, data) {
  const result = JSON.stringify(data);
  await writeFile(path, result);
}
