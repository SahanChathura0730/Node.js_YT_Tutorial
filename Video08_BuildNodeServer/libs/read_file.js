import { fileURLToPath } from "node:url";
import { readFile } from "node:fs/promises";
import { join, dirname } from "node:path";
import { log } from "node:console";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export const fileRead = async (path, res, contentType = "text/html") => {
  try {
    const data = await readFile(join(__dirname, path));
    res.writeHead(200, { "Content-Type": contentType });
    res.end(data);
  } catch (err) {
    log(err);
    res.writeHead(500, { "Content-Type": "text/html" });
    res.end("<h1>Server error</h1>");
  }
};
