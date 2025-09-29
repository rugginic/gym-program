#!/usr/bin/env node

/**
 * Validates PWA requirements before deployment
 */

const fs = require('fs');
const path = require('path');

let errors = 0;
let warnings = 0;

function error(msg) {
  console.error(`✗ ERROR: ${msg}`);
  errors++;
}

function warn(msg) {
  console.warn(`⚠ WARNING: ${msg}`);
  warnings++;
}

function success(msg) {
  console.log(`✓ ${msg}`);
}

console.log('Validating PWA...\n');

// Check required files exist
const requiredFiles = [
  'gym_program.html',
  'manifest.json',
  'service-worker.js',
  'icon-192.png',
  'icon-512.png'
];

requiredFiles.forEach(file => {
  if (fs.existsSync(file)) {
    success(`${file} exists`);
  } else {
    error(`${file} is missing`);
  }
});

// Validate manifest.json
try {
  const manifest = JSON.parse(fs.readFileSync('manifest.json', 'utf8'));
  
  if (manifest.name) {
    success('manifest.json has name');
  } else {
    error('manifest.json missing name');
  }
  
  if (manifest.short_name) {
    success('manifest.json has short_name');
  } else {
    warn('manifest.json missing short_name');
  }
  
  if (manifest.icons && manifest.icons.length >= 2) {
    success('manifest.json has icons');
  } else {
    error('manifest.json needs at least 2 icons');
  }
  
  if (manifest.display === 'standalone' || manifest.display === 'fullscreen') {
    success('manifest.json has correct display mode');
  } else {
    warn('manifest.json should use standalone or fullscreen display');
  }
  
} catch (e) {
  error(`manifest.json is invalid JSON: ${e.message}`);
}

// Validate service worker
const swContent = fs.readFileSync('service-worker.js', 'utf8');

if (swContent.includes('addEventListener')) {
  success('service-worker.js has event listeners');
} else {
  error('service-worker.js missing event listeners');
}

if (swContent.includes('install') && swContent.includes('fetch')) {
  success('service-worker.js has install and fetch handlers');
} else {
  error('service-worker.js missing required handlers');
}

// Validate HTML
const htmlContent = fs.readFileSync('gym_program.html', 'utf8');

if (htmlContent.includes('<link rel="manifest"')) {
  success('HTML links to manifest');
} else {
  error('HTML missing manifest link');
}

if (htmlContent.includes('serviceWorker.register')) {
  success('HTML registers service worker');
} else {
  error('HTML missing service worker registration');
}

if (htmlContent.includes('viewport')) {
  success('HTML has viewport meta tag');
} else {
  error('HTML missing viewport meta tag');
}

if (htmlContent.includes('theme-color')) {
  success('HTML has theme-color meta tag');
} else {
  warn('HTML missing theme-color meta tag');
}

// Summary
console.log(`\n${'='.repeat(50)}`);
if (errors === 0 && warnings === 0) {
  console.log('✓ All checks passed! PWA is ready to deploy.');
  process.exit(0);
} else if (errors === 0) {
  console.log(`✓ Validation passed with ${warnings} warning(s)`);
  process.exit(0);
} else {
  console.log(`✗ Validation failed with ${errors} error(s) and ${warnings} warning(s)`);
  process.exit(1);
}
