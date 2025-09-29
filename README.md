# Nic's Gym Program PWA

A Progressive Web App for an 8-week back-friendly gym transformation program.

## Features

- 📱 **Installable** - Add to home screen on Android/iOS
- 🔌 **Offline-first** - Works without internet connection
- ⏱️ **Rest Timer** - Built-in countdown timer between sets
- 💪 **3-day Split** - Monday/Wednesday/Friday workout routine
- 🎯 **Progressive** - 8-week structured progression plan
- 🔗 **Video Guides** - Exercise demonstration links
- 🦴 **Back-friendly** - Designed for safe training

## Quick Start

### For Users

**Install on Android:**
1. Visit the app URL in Chrome
2. Tap menu → "Add to Home screen"
3. Use like a native app!

**Local Testing:**
```bash
python3 -m http.server 8000
# Open http://localhost:8000/gym_program.html
```

### For Developers

**Setup:**
```bash
git clone <repo-url>
cd gym-program
npm install
npm start
```

**Deploy:**
```bash
# Push to GitHub (auto-deploys via GitHub Actions)
git push

# Enable GitHub Pages:
# Settings → Pages → Source: GitHub Actions
```

**Version Bump:**
```bash
npm run version patch   # 1.0.0 → 1.0.1
npm run version minor   # 1.0.0 → 1.1.0
npm run version major   # 1.0.0 → 2.0.0
```

## Documentation

- [Installation Guide](INSTALL.md) - Setup and install instructions
- [Deployment Guide](DEPLOYMENT.md) - CI/CD and lifecycle management
- [Changelog](CHANGELOG.md) - Version history

## Tech Stack

- **Frontend:** Pure HTML/CSS/JavaScript (no framework)
- **PWA:** Service Worker + Web App Manifest
- **Hosting:** GitHub Pages
- **CI/CD:** GitHub Actions

## Project Structure

```
gym-program/
├── gym_program.html     # Main app file
├── manifest.json        # PWA manifest
├── service-worker.js    # Offline support
├── icon-192.png         # App icon (192x192)
├── icon-512.png         # App icon (512x512)
├── package.json         # Version management
├── netlify.toml         # Netlify config
├── vercel.json          # Vercel config
├── .github/
│   └── workflows/
│       └── deploy.yml   # CI/CD pipeline
├── scripts/
│   ├── validate.js      # PWA validation
│   └── update-version.js # Version bumper
└── docs/
    ├── INSTALL.md
    ├── DEPLOYMENT.md
    └── CHANGELOG.md
```

## Development

**Validate PWA:**
```bash
npm run validate
```

**Test locally:**
```bash
npm start
# Visit http://localhost:8000
```

**Check on mobile:**
```bash
# Get your IP
ifconfig | grep "inet " | grep -v 127.0.0.1

# Visit on phone: http://YOUR_IP:8000
```

## Contributing

1. Fork the repo
2. Create feature branch: `git checkout -b feature/amazing`
3. Commit changes: `git commit -m 'feat: add amazing feature'`
4. Push to branch: `git push origin feature/amazing`
5. Open Pull Request

## License

MIT

## Workout Program

**Schedule:** Monday, Wednesday, Friday (45 min each)

- **Monday:** Lower Body + Core
- **Wednesday:** Upper Body Push
- **Friday:** Upper Body Pull + Cardio

**Duration:** 8 weeks progressive program

**Focus:** Back-friendly exercises with proper form emphasis

---

Built with 💪 by Nic
