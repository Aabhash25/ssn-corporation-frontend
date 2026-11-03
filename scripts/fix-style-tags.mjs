// Fixes <style> tags so pre-rendering (vite-react-ssg) produces valid CSS.
//
//  1. <style>{`...css...`}</style>
//       becomes  <style dangerouslySetInnerHTML={{ __html: `...css...` }} />
//     (React escapes quotes and & inside a string child, which breaks the CSS.)
//
//  2. <style jsx> / <style jsx global>
//       becomes  <style> / <style>
//     (jsx and global belong to the styled-jsx library, which this project does
//      not use, so they do nothing except cause React warnings.)
//
// Usage (run from the project root, next to package.json):
//   node scripts/fix-style-tags.mjs            -> dry run: lists what would change
//   node scripts/fix-style-tags.mjs --write    -> applies the changes
//
// The CSS text and the file's line endings stay exactly as they are. Safe to
// run more than once. Any <style> tag it does not recognise is listed at the
// end so you can fix it by hand.
import { readdirSync, readFileSync, statSync, writeFileSync } from "node:fs";
import { join, relative } from "node:path";

const WRITE = process.argv.includes("--write");
const ROOT = "src";
const EXT = /\.(jsx|tsx|js|ts)$/;

// leading `jsx` / `global` words right after <style
const STYLED_JSX_ATTRS = /<style(?:\s+(?:jsx|global)(?=[\s>/]))+/g;

// <style> or <style attrs>, then {`...`} or {identifier}, then </style>
const PATTERN =
  /<style((?:\s[^>]*?)?)>\s*\{\s*(`[^`]*`|[A-Za-z_$][\w$.]*)\s*\}\s*<\/style>/g;

function* walk(dir) {
  for (const name of readdirSync(dir)) {
    const p = join(dir, name);
    if (statSync(p).isDirectory()) yield* walk(p);
    else if (EXT.test(name)) yield p;
  }
}

let changedFiles = 0;
let convertedTags = 0;
let cleanedTags = 0;
const leftovers = [];

for (const file of walk(ROOT)) {
  const before = readFileSync(file, "utf8");

  let cleaned = 0;
  let converted = 0;
  const after = before
    .replace(STYLED_JSX_ATTRS, () => {
      cleaned++;
      return "<style";
    })
    .replace(PATTERN, (_m, attrs, expr) => {
      converted++;
      return `<style${attrs || ""} dangerouslySetInnerHTML={{ __html: ${expr} }} />`;
    });

  if (cleaned || converted) {
    changedFiles++;
    convertedTags += converted;
    cleanedTags += cleaned;
    const parts = [];
    if (converted) parts.push(`${converted} converted`);
    if (cleaned) parts.push(`${cleaned} jsx/global removed`);
    console.log(`${WRITE ? "fixed" : "would fix"}  ${relative(".", file)}  (${parts.join(", ")})`);
    if (WRITE) writeFileSync(file, after);
  }

  // any <style tag still not using dangerouslySetInnerHTML
  const lines = after.split("\n");
  lines.forEach((line, i) => {
    if (/<style\b/.test(line) && !/dangerouslySetInnerHTML/.test(lines.slice(i, i + 3).join("\n"))) {
      leftovers.push(`${relative(".", file)}:${i + 1}  ${line.trim().slice(0, 90)}`);
    }
  });
}

console.log(
  `\n${WRITE ? "Fixed" : "Would fix"}: ${convertedTags} <style> tag(s) converted, ` +
    `${cleanedTags} jsx/global attribute group(s) removed, in ${changedFiles} file(s).` +
    (WRITE ? "" : "  Run again with --write to apply."),
);
if (leftovers.length) {
  console.log("\nNot converted (fix these by hand):");
  for (const l of leftovers) console.log("  " + l);
} else {
  console.log("No unconverted <style> tags left.");
}
