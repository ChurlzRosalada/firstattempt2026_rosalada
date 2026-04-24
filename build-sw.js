/**
 * build-sw.js
 * Run after `vite build` to inject hashed asset filenames into sw.js
 * Usage: node build-sw.js
 */
import { readFileSync, writeFileSync, readdirSync } from 'fs';
import { join } from 'path';

const DIST = './dist';
const SW_SRC = './public/sw.js';
const SW_OUT = join(DIST, 'sw.js');

// Find all built assets in dist/assets/
const assets = readdirSync(join(DIST, 'assets'))
  .map(f => `/assets/${f}`)
  .filter(f => f.endsWith('.js') || f.endsWith('.css'));

console.log('[build-sw] Found assets:', assets);

// Read the sw.js template
let swContent = readFileSync(SW_SRC, 'utf-8');

// Inject asset paths before the closing of SHELL_ASSETS array
// Replace the placeholder comment line
const assetLines = assets.map(a => `  '${a}',`).join('\n');
swContent = swContent.replace(
  "  // __VITE_ASSETS__ — replaced by build-sw.js with actual hashed filenames",
  assetLines
);

// Write to dist/sw.js
writeFileSync(SW_OUT, swContent);
console.log('[build-sw] sw.js written to dist/ with', assets.length, 'asset(s) injected');
console.log('[build-sw] Done! Your PWA now has full offline support.');
