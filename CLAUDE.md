# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a Progressive Web App (PWA) for an 8-week back-friendly gym transformation program. The entire application is self-contained in a single HTML file with embedded CSS and JavaScript, designed for offline-first usage with a service worker.

## Development Commands

**Local development:**
```bash
npm start  # Starts Python HTTP server on port 8000
```

**Validation:**
```bash
npm run validate  # Runs PWA validation checks
```

**Version management:**
```bash
npm run version patch   # 1.0.0 → 1.0.1
npm run version minor   # 1.0.0 → 1.1.0
npm run version major   # 1.0.0 → 2.0.0
```

**Testing on mobile:**
```bash
# Get local IP address
ifconfig | grep "inet " | grep -v 127.0.0.1
# Then visit http://YOUR_IP:8000 on mobile device
```

## Architecture

### Single-File Application Structure
The entire app is contained in `gym_program.html` with:
- **Embedded CSS** in `<style>` tags using CSS variables for theming
- **Embedded JavaScript** in `<script>` tags at the bottom
- **No build process** - can be opened directly in a browser
- **No external dependencies** except Chart.js CDN for data visualization

### PWA Components
- **manifest.json** - PWA configuration (name, icons, theme colors)
- **service-worker.js** - Offline caching strategy
- **Icons** - icon-192.png and icon-512.png for app installation

### Data Storage
- Uses **localStorage** for all data persistence
- **Storage keys:**
  - `workoutLogs` - Array of workout entries (exercise, weight, date)
  - `weightLogs` - Array of bodyweight entries (weight, date)
  - `userHeight` - User height in cm
  - `weightGoal` - Object with current and target weight
  - `currentTab` - Last active tab for session persistence

### Tab-Based Navigation
The app uses a tab system with 4 main views:
- **Tracker** (default) - Dashboard with charts, metrics, and workout logging
- **Monday** - Lower Body + Core workout
- **Wednesday** - Back & Core Focus workout
- **Friday** - Full Body + Cardio workout

Navigation is handled by `openTab(event, tabName)` function which:
- Shows/hides tab content with `.active` class
- Saves current tab to localStorage
- Initializes dashboard data when switching to tracker

### Key Features

**Rest Timer:**
- Modal-based countdown timer between sets
- Accessible from workout pages via `[Start]` links
- Functions: `startTimer(seconds)`, `toggleTimer()`, `resetTimer()`, `closeTimer()`

**Workout Logging:**
- Quick log buttons on workout pages (opens modal)
- Full exercise logger in Tracker tab
- Stores exercise name, weight, and timestamp
- Limited to last 100 entries

**Progress Tracking:**
- Weight chart using Chart.js (last 20 entries)
- Exercise strength progression charts
- Dashboard metrics: total workouts, streak, weight lost, weekly average, total volume, strongest lift
- Goal setting with progress bar and estimated days to goal

**Charts:**
- Weight progression chart with trend-based coloring
- Exercise-specific strength progression charts
- Both use Chart.js library loaded via CDN

## Development Guidelines

### Modifying Workouts
Exercise tables are in each tab's HTML. Structure:
```html
<tr class="exercise-row">
  <td>
    <span class="exercise-icon"></span>
    <span class="exercise-name">Exercise Name</span>
    <a href="VIDEO_URL" target="_blank" class="exercise-link">[Video]</a>
    <button class="log-button-small" onclick="openQuickLog('Exercise Name', 'day')">Log</button>
  </td>
  <td>Sets × Reps</td>
  <td>Rest <span class="rest-link" onclick="startTimer(SECONDS)">[Start]</span></td>
</tr>
```

When adding/removing exercises, also update:
- Exercise dropdown in tracker tab (`#exerciseSelect`)
- Exercise chart dropdown (`#exerciseChartSelect`)

### Styling
Uses CSS variables defined in `:root`:
- `--primary`: #3498db (blue)
- `--secondary`: #2c3e50 (dark blue)
- `--success`: #2ecc71 (green)
- `--danger`: #e74c3c (red)
- `--warning`: #f39c12 (orange)
- `--light`: #ecf0f1 (light gray)
- `--dark`: #34495e (dark gray)
- `--light-gray`: #f5f7fa (background)

Mobile styles use `@media (max-width: 768px)` breakpoint.

### Service Worker Cache
Cache name: `gym-program-v1`
Cached files defined in `urlsToCache` array in service-worker.js

**When updating cached files:**
1. Increment cache version in service-worker.js (e.g., `gym-program-v2`)
2. Update manifest.json version number
3. Old caches are automatically cleaned up on activation

## Deployment

Auto-deploys to GitHub Pages via GitHub Actions on push to `main` branch.

**CI/CD Pipeline (.github/workflows/deploy.yml):**
1. **Validate** - Checks HTML structure, JSON validity, service worker
2. **Deploy** - Uploads to GitHub Pages (only on main branch)

**Manual deployment:**
- Push to main: `git push origin main`
- GitHub Pages must be configured: Settings → Pages → Source: GitHub Actions

## Testing

**PWA Installation:**
- Chrome Android: Menu → "Add to Home screen"
- iOS Safari: Share → "Add to Home Screen"

**Service Worker:**
- Chrome DevTools → Application → Service Workers
- Check "Offline" checkbox to test offline functionality
- Clear storage: Application → Storage → "Clear site data"

## Important Notes

- All functionality is client-side - no backend required
- Chart.js is the only external dependency (loaded from CDN)
- Data persists in browser localStorage only (not synced across devices)
- Cache-control headers prevent stale data on mobile (meta tags in HTML head)
- App defaults to "tracker" tab for quick access to logging features
