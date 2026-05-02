/**
 * Downloads all external images used in /data/**\/*.json files
 * and updates those files to reference local /images/ paths.
 *
 * Run: node scripts/download-images.js
 */

const fs   = require("fs");
const path = require("path");
const https = require("https");
const http  = require("http");

// ─── Config ────────────────────────────────────────────────────────────────

const DATA_DIR   = path.join(__dirname, "..", "data");
const PUBLIC_DIR = path.join(__dirname, "..", "public", "images");

// Sub-folders under public/images/
const DIRS = {
  devicons : path.join(PUBLIC_DIR, "icons", "devicons"),
  social   : path.join(PUBLIC_DIR, "icons", "social"),
  industry : path.join(PUBLIC_DIR, "industries"),
};

// Explicit rename map for cloudinary industry photos (hash → slug)
const CLOUDINARY_NAMES = {
  "653ca979984c4a0c0953933ad5a36acfa4b9ec3c": "ecommerce",
  "f66979133dcaae16ba4e6824dbd1171ef7e0e24e": "healthcare",
  "dbd832203e92ca69bb00d3ac51dca441f54ccf2d": "education",
  "399aaac40e9ebb8b6da318348fdde0762e12b2da": "corporate",
  "1f481be6d70ce9131b8db1c3a1c86bb72c906cef": "gaming",
  "f1da8a5c8034039f8ff4c9afe719cd4eb21cee87": "real-estate",
};

// Skip generative CDNs — no static file to save
const SKIP_HOSTS = ["placehold.co", "ui-avatars.com"];

// ─── Helpers ────────────────────────────────────────────────────────────────

function ensureDir(dir) {
  if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
}

function download(url, dest) {
  return new Promise((resolve, reject) => {
    if (fs.existsSync(dest)) { console.log(`  skip (exists): ${path.basename(dest)}`); return resolve(dest); }
    const file = fs.createWriteStream(dest);
    const client = url.startsWith("https") ? https : http;
    client.get(url, (res) => {
      if (res.statusCode === 301 || res.statusCode === 302) {
        file.close();
        fs.unlinkSync(dest);
        return download(res.headers.location, dest).then(resolve).catch(reject);
      }
      if (res.statusCode !== 200) {
        file.close();
        fs.unlinkSync(dest);
        return reject(new Error(`HTTP ${res.statusCode} for ${url}`));
      }
      res.pipe(file);
      file.on("finish", () => { file.close(); resolve(dest); });
    }).on("error", (e) => { fs.unlink(dest, () => {}); reject(e); });
  });
}

/** Returns { localPath, publicPath } for a given URL, or null to skip. */
function resolveDestination(url) {
  let host;
  try { host = new URL(url).hostname; } catch { return null; }

  if (SKIP_HOSTS.some(h => host.includes(h))) return null;

  // devicons via jsDelivr  → public/images/icons/devicons/react-original.svg
  if (host === "cdn.jsdelivr.net" && url.includes("/devicons/")) {
    const name = path.basename(url);                          // react-original.svg
    return {
      localPath : path.join(DIRS.devicons, name),
      publicPath: `/images/icons/devicons/${name}`,
    };
  }

  // simple-icons via jsDelivr  → public/images/icons/social/linkedin.svg
  if (host === "cdn.jsdelivr.net" && url.includes("simple-icons")) {
    const name = path.basename(url);                          // linkedin.svg
    return {
      localPath : path.join(DIRS.social, name),
      publicPath: `/images/icons/social/${name}`,
    };
  }

  // Cloudinary industry photos  → public/images/industries/ecommerce.jpg
  if (host.includes("cloudinary.com")) {
    const hash = path.basename(url, path.extname(url));       // 653ca97...
    const ext  = path.extname(url) || ".jpg";
    const slug = CLOUDINARY_NAMES[hash] || hash;
    const name = `${slug}${ext}`;
    return {
      localPath : path.join(DIRS.industry, name),
      publicPath: `/images/industries/${name}`,
    };
  }

  return null;
}

// ─── Collect all JSON files ──────────────────────────────────────────────────

function walkJson(dir) {
  let results = [];
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) results = results.concat(walkJson(full));
    else if (entry.name.endsWith(".json")) results.push(full);
  }
  return results;
}

// ─── Main ───────────────────────────────────────────────────────────────────

async function main() {
  Object.values(DIRS).forEach(ensureDir);

  const jsonFiles = walkJson(DATA_DIR);

  // Build URL → publicPath map
  const urlMap = new Map();
  for (const file of jsonFiles) {
    const content = fs.readFileSync(file, "utf8");
    const matches = content.match(/https?:\/\/[^\s"]+\.(jpg|jpeg|png|svg|webp|gif)/gi) || [];
    for (const url of matches) {
      if (!urlMap.has(url)) {
        const dest = resolveDestination(url);
        if (dest) urlMap.set(url, dest);
      }
    }
  }

  console.log(`\nDownloading ${urlMap.size} images…\n`);

  let ok = 0, fail = 0;
  for (const [url, { localPath, publicPath }] of urlMap) {
    process.stdout.write(`  → ${publicPath}  `);
    try {
      await download(url, localPath);
      console.log("✓");
      ok++;
    } catch (e) {
      console.log(`✗  (${e.message})`);
      fail++;
      urlMap.delete(url);   // don't rewrite if download failed
    }
  }

  console.log(`\nDownloaded: ${ok}  Failed: ${fail}\n`);

  // Rewrite data files
  console.log("Updating data files…\n");
  for (const file of jsonFiles) {
    let content = fs.readFileSync(file, "utf8");
    let changed = false;
    for (const [url, { publicPath }] of urlMap) {
      if (content.includes(url)) {
        content = content.split(url).join(publicPath);
        changed = true;
      }
    }
    if (changed) {
      fs.writeFileSync(file, content, "utf8");
      console.log(`  updated: ${path.relative(process.cwd(), file)}`);
    }
  }

  console.log("\nAll done.");
}

main().catch(console.error);
