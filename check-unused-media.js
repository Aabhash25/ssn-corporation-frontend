import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const PUBLIC_DIR = path.join(__dirname, "public");
const SRC_DIR = path.join(__dirname, "src");

// Supported media extensions
const MEDIA_EXTENSIONS = [".png", ".jpg", ".jpeg", ".gif", ".svg", ".mp4", ".webm"];

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
function readAllCode(dir) {
  let content = "";
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const fullPath = path.join(dir, file);
    const stat = fs.lstatSync(fullPath);
    if (stat.isDirectory()) {
      content += readAllCode(fullPath);
    } else if ([".js", ".jsx", ".ts", ".tsx"].includes(path.extname(file).toLowerCase())) {
      content += fs.readFileSync(fullPath, "utf8");
    }
  }
  return content;
}

const mediaFiles = getAllMediaFiles(PUBLIC_DIR);
const srcContent = readAllCode(SRC_DIR);

// Check which media files are unused
const unused = mediaFiles.filter(file => {
  const relativePath = path.relative(PUBLIC_DIR, file).replace(/\\/g, "/");
  return !srcContent.includes(`/${relativePath}`);
});

console.log("Unused media files in public:");
unused.forEach(f => console.log(f));
