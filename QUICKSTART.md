# 🚀 Quick Start Guide

## First Time Setup (5 minutes)

### 1. Create GitHub Repository

```bash
# On GitHub.com, create new repo "gym-program"

# In terminal:
cd /Users/rugginic/projects/gym-program
git add .
git commit -m "feat: initial commit with PWA setup"
git remote add origin git@github.com:YOUR_USERNAME/gym-program.git
git push -u origin main
```

### 2. Enable GitHub Pages

1. Go to your repo on GitHub: `github.com/YOUR_USERNAME/gym-program`
2. Click **Settings** → **Pages**
3. Under "Source", select **GitHub Actions**
4. Done! Your app will be at: `https://YOUR_USERNAME.github.io/gym-program/gym_program.html`

GitHub Actions will auto-deploy on every push to `main`.

### 3. Install on Your Phone

1. Open Chrome on Android
2. Visit `https://YOUR_USERNAME.github.io/gym-program/gym_program.html`
3. Tap menu (⋮) → "Add to Home screen"
4. Done! 🎉

## Daily Usage

### Making Changes

```bash
# Edit gym_program.html with changes
git add gym_program.html
git commit -m "feat: added new exercise"
git push

# Auto-deploys in ~30 seconds!
```

### Releasing New Version

```bash
# Update CHANGELOG.md first

# Bump version (patch/minor/major)
npm run version minor

# Commit and push
git add .
git commit -m "chore: release v1.1.0"
git tag v1.1.0
git push && git push --tags
```

## Common Tasks

### Test Locally
```bash
npm start
# Open http://localhost:8000
```

### Test on Phone
```bash
# Get your computer's IP
ifconfig | grep "inet " | grep -v 127.0.0.1

# On phone (same WiFi): http://YOUR_IP:8000
```

### Validate Before Pushing
```bash
npm run validate
```

### Check PWA Score
```bash
npm install -g lighthouse
lighthouse https://YOUR_USERNAME.github.io/gym-program/gym_program.html --view
```

### Rollback Deployment
```bash
git revert HEAD
git push
```

## File Changes Quick Reference

| Task | File to Edit |
|------|-------------|
| Change workout | `gym_program.html` |
| Update app name | `manifest.json` |
| Add new icons | `icon-192.png`, `icon-512.png` |
| Configure deployment | `.github/workflows/deploy.yml` |
| Track changes | `CHANGELOG.md` |
| Update version | `npm run version patch` |

## GitHub Pages Setup

No secrets needed! Just enable GitHub Pages:

1. Go to repo **Settings** → **Pages**
2. Under "Source", select **GitHub Actions**
3. Push to `main` branch → auto-deploys!

## Troubleshooting

**App not updating on phone?**
- Clear browser cache
- Close all tabs and reopen
- Uninstall and reinstall PWA

**CI/CD not working?**
- Check GitHub Actions tab for errors
- Verify GitHub Pages is enabled (Settings → Pages → GitHub Actions)
- Check `.github/workflows/deploy.yml`

**Icons not showing?**
- Open `create-icons.html` in browser
- Download generated icons
- Place in project root

## Next Steps

- [ ] Set up custom domain (Netlify: Domain settings)
- [ ] Add Google Analytics (optional)
- [ ] Set up error tracking with Sentry (optional)
- [ ] Enable Lighthouse CI for automatic PWA scoring
- [ ] Share app URL with friends!

## Resources

- 📘 [Full Deployment Guide](DEPLOYMENT.md)
- 📱 [Installation Instructions](INSTALL.md)
- 📝 [Version History](CHANGELOG.md)
- 🐛 [Report Issues](https://github.com/YOUR_USERNAME/gym-program/issues)

---

**Need help?** Create an issue on GitHub!
