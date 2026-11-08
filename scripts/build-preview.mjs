// Gera uma prévia autocontida (um HTML por idioma, sem dependências externas)
// a partir do export em out/. Útil para compartilhar o visual sem servidor.
// Uso: npm run build && node scripts/build-preview.mjs
import { mkdir, readFile, writeFile } from "node:fs/promises";
import path from "node:path";

const OUT = "out";
const DEST = "preview";

async function inlineCss(html) {
  const links = [...html.matchAll(/<link rel="stylesheet" href="([^"]+)"[^>]*>/g)];
  for (const [tag, href] of links) {
    let css = await readFile(path.join(OUT, href), "utf8");
    const cssDir = path.dirname(path.join(OUT, href));
    const fonts = [...css.matchAll(/url\(([^)]+\.woff2)\)/g)];
    for (const [, url] of fonts) {
      const file = url.startsWith("/") ? path.join(OUT, url) : path.join(cssDir, url);
      const b64 = (await readFile(file)).toString("base64");
      css = css.replaceAll(url, `data:font/woff2;base64,${b64}`);
    }
    html = html.replace(tag, `<style>${css}</style>`);
  }
  return html;
}

async function build(lang, file, otherFile) {
  let html = await readFile(path.join(OUT, lang, "index.html"), "utf8");
  html = await inlineCss(html);
  html = html
    // Scripts do runtime do Next não são necessários: a página é HTML estático.
    .replace(/<script\b(?![^>]*\bid="enhance")(?![^>]*application\/ld\+json)[^>]*>[\s\S]*?<\/script>/g, "")
    .replace(/<link rel="(?:preload|modulepreload|expect)"[^>]*>/g, "")
    .replace(/<link rel="(?:icon|apple-touch-icon|manifest)"[^>]*>/g, "")
    .replace(/href="\.\.\/(pt|en)\/"/g, `href="${otherFile}"`)
    .replace("<html ", '<html data-no-sw="" ');
  await writeFile(path.join(DEST, file), html);
  console.log(`ok ${DEST}/${file} (${Math.round(html.length / 1024)} KB)`);
}

await mkdir(DEST, { recursive: true });
await build("pt", "index.html", "en.html");
await build("en", "en.html", "index.html");
