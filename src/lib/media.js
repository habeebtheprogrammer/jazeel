import fs from "node:fs";
import path from "node:path";

// Lets pages skip video slots whose files haven't been added to /public yet.
export function publicFileExists(src) {
  return Boolean(src) && fs.existsSync(path.join(process.cwd(), "public", src));
}
