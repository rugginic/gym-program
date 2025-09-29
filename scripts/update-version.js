#!/usr/bin/env node

/**
 * Updates version across all PWA files
 * Usage: npm run version -- <major|minor|patch>
 */

const fs = require('fs');
const path = require('path');

const versionType = process.argv[2] || 'patch';

// Read current version from package.json
const packageJson = JSON.parse(fs.readFileSync('package.json', 'utf8'));
let [major, minor, patch] = packageJson.version.split('.').map(Number);

// Increment version
switch (versionType) {
  case 'major':
    major++;
    minor = 0;
    patch = 0;
    break;
  case 'minor':
    minor++;
    patch = 0;
    break;
  case 'patch':
  default:
    patch++;
    break;
}

const newVersion = `${major}.${minor}.${patch}`;

// Update package.json
packageJson.version = newVersion;
fs.writeFileSync('package.json', JSON.stringify(packageJson, null, 2) + '\n');

// Update manifest.json
const manifest = JSON.parse(fs.readFileSync('manifest.json', 'utf8'));
manifest.version = newVersion;
fs.writeFileSync('manifest.json', JSON.stringify(manifest, null, 2) + '\n');

// Update service worker cache name
let serviceWorker = fs.readFileSync('service-worker.js', 'utf8');
serviceWorker = serviceWorker.replace(
  /const CACHE_NAME = 'gym-program-v\d+';/,
  `const CACHE_NAME = 'gym-program-v${major}';`
);
fs.writeFileSync('service-worker.js', serviceWorker);

console.log(`✓ Version updated to ${newVersion}`);
console.log(`  - package.json`);
console.log(`  - manifest.json`);
console.log(`  - service-worker.js`);
console.log(`\nNext steps:`);
console.log(`  1. Update CHANGELOG.md`);
console.log(`  2. git commit -am "chore: bump version to ${newVersion}"`);
console.log(`  3. git tag v${newVersion}`);
console.log(`  4. git push && git push --tags`);
