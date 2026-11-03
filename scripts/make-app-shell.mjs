// Runs after `vite-react-ssg build`.
// Creates <outDir>/app-shell.html: the site's HTML with no pre-rendered page inside.
// The web server uses it as the fallback for URLs that were NOT pre-rendered
// (e.g. /news/12, /jobs/3, or a mistyped URL), so the app renders them
// client-side instead of hydrating the homepage's HTML.
import { readFileSync, writeFileSync } from "node:fs";

const outDir = process.env.BUILD_DIR || "dist";

const source = readFileSync(`${outDir}/index.html`, "utf8");

const html = source
  // empty the pre-rendered page (and its hydration data) out of #root
  .replace(
    /<div id="root"[^>]*>[\s\S]*?<\/div>(?=\s*<script>window\.__VITE_REACT_SSG_HASH__)/,
    '<div id="root"></div>',
  )
  // drop the head tags generated for the home page (title, description,
  // canonical, og:*) so the shell does not claim to be the home page
  .replace(/<title\b[^>]*data-rh="true"[^>]*>[\s\S]*?<\/title>/g, "")
  .replace(/<(?:meta|link)\b[^>]*data-rh="true"[^>]*>/g, "");

if (!html.includes('<div id="root"></div>') || html.includes("data-server-rendered")) {
  throw new Error(
    `make-app-shell: could not empty #root in ${outDir}/index.html. Not writing app-shell.html.`,
  );
}

writeFileSync(`${outDir}/app-shell.html`, html);
console.log(`Created ${outDir}/app-shell.html`);