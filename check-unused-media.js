import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const PUBLIC_DIR = path.join(__dirname, "public");
const SRC_DIR = path.join(__dirname, "src");
const INDEX_HTML = path.join(__dirname, "public/index.html");

// extensions to detect
const MEDIA_EXTENSIONS = [".webp", ".webp", ".webp", ".gif", ".svg", ".mp4", ".webm"];

// Recursively get all media files in public
function getAllMediaFiles(dir) {
  let mediaFiles = [];
  const files = fs.readdirSync(dir);

  for (const file of files) {
    const fullPath = path.join(dir, file);
    const stat = fs.lstatSync(fullPath);

    if (stat.isDirectory()) {
      mediaFiles = mediaFiles.concat(getAllMediaFiles(fullPath));
    } else if (MEDIA_EXTENSIONS.includes(path.extname(file).toLowerCase())) {
      mediaFiles.push(fullPath);
    }
  }
  return mediaFiles;
}

// Recursively read all code files in src
function readAllProjectFiles() {
  let content = "";

  // Read all src files
  function readDir(dir) {
    for (const file of fs.readdirSync(dir)) {
      const full = path.join(dir, file);
      const stat = fs.lstatSync(full);

      if (stat.isDirectory()) readDir(full);
      else if (/\.(js|jsx|ts|tsx|css|html)$/.test(file)) {
        content += fs.readFileSync(full, "utf8");
      }
    }
  }

  readDir(SRC_DIR);

  // include index.html too
  if (fs.existsSync(INDEX_HTML)) {
    content += fs.readFileSync(INDEX_HTML, "utf8");
  }

  return content;
}

const mediaFiles = getAllMediaFiles(PUBLIC_DIR);
const projectContent = readAllProjectFiles();

// detect unused
const unused = mediaFiles.filter(file => {
  const rel = path.relative(PUBLIC_DIR, file).replace(/\\/g, "/");

  return !(
    projectContent.includes(rel) ||                  // relative path
    projectContent.includes("/" + rel) ||            // absolute public path
    projectContent.includes(path.basename(file))     // only filename
  );
});

console.log("\n❌ Unused media files:");
unused.forEach(f => console.log(" - " + f));

console.log("\nTotal:", unused.length);
