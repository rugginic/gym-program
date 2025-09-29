# Deployment & Lifecycle Management

Complete guide for managing the Nic's Gym Program PWA lifecycle.

## Quick Start

```bash
# Initialize (first time only)
git remote add origin <your-github-repo-url>
git push -u origin main

# Connect to Netlify or Vercel (choose one)
netlify init   # Netlify
# OR
vercel        # Vercel
```

## CI/CD Pipeline

### Automated Workflow

Every `git push` to `main` triggers:
1. ✅ **Validation** - HTML, manifest, service worker checks
2. 🚀 **Deploy** - Automatic deployment to hosting
3. 📊 **Lighthouse** - PWA score, performance, accessibility audit

### Branch Strategy

```
main (production)
  ├── develop (staging)
  └── feature/* (new features)
```

**Development Flow:**
```bash
# Create feature branch
git checkout -b feature/workout-logger

# Make changes and commit
git add .
git commit -m "feat: add workout logging functionality"

# Push and create PR
git push origin feature/workout-logger
# GitHub Actions will validate PR automatically

# Merge to main (triggers production deploy)
git checkout main
git merge feature/workout-logger
git push
```

## Version Management

### Semantic Versioning

- **MAJOR** (1.0.0 → 2.0.0): Breaking changes
- **MINOR** (1.0.0 → 1.1.0): New features
- **PATCH** (1.0.0 → 1.0.1): Bug fixes

### Bump Version

```bash
# Patch release (bug fix)
npm run version patch

# Minor release (new feature)
npm run version minor

# Major release (breaking change)
npm run version major
```

This updates:
- `package.json`
- `manifest.json`
- `service-worker.js` cache name

### Release Process

1. **Update CHANGELOG.md**
   ```markdown
   ## [1.1.0] - 2025-10-01
   
   ### Added
   - Workout logging feature
   - Progress charts
   
   ### Fixed
   - Timer bug on iOS
   ```

2. **Bump version**
   ```bash
   npm run version minor
   ```

3. **Commit and tag**
   ```bash
   git add .
   git commit -m "chore: release v1.1.0"
   git tag v1.1.0
   ```

4. **Push to trigger deployment**
   ```bash
   git push && git push --tags
   ```

## Deployment Platforms

### Option 1: Netlify (Recommended)

**Setup:**
```bash
# Install CLI
npm install -g netlify-cli

# Login
netlify login

# Initialize
netlify init

# Manual deploy
netlify deploy --prod
```

**Secrets:**
Add to GitHub repository secrets:
- `NETLIFY_AUTH_TOKEN` - From netlify.com/user/applications
- `NETLIFY_SITE_ID` - From site settings

**Features:**
- ✅ Auto-deploy on git push
- ✅ Preview URLs for PRs
- ✅ Instant rollbacks
- ✅ Custom domain
- ✅ Free SSL

### Option 2: Vercel

**Setup:**
```bash
# Install CLI
npm install -g vercel

# Login and deploy
vercel

# Production deploy
vercel --prod
```

**Features:**
- ✅ Auto-deploy on git push
- ✅ Preview deployments
- ✅ Edge network
- ✅ Analytics

### Option 3: GitHub Pages

**Setup:**
```bash
# Create gh-pages branch
git checkout -b gh-pages
git push origin gh-pages

# Enable in repo settings
# Settings → Pages → Source: gh-pages
```

Add to `.github/workflows/deploy.yml`:
```yaml
- name: Deploy to GitHub Pages
  uses: peaceiris/actions-gh-pages@v3
  with:
    github_token: ${{ secrets.GITHUB_TOKEN }}
    publish_dir: .
```

## Monitoring & Analytics

### PWA Score

Check PWA compliance:
```bash
npm install -g lighthouse
lighthouse https://your-app.netlify.app --view
```

Target scores:
- PWA: 100
- Performance: >90
- Accessibility: >90
- Best Practices: >90

### User Analytics

Add to `gym_program.html` (optional):
```html
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'GA_MEASUREMENT_ID');
</script>
```

### Error Tracking

Add Sentry (optional):
```html
<script src="https://js.sentry-cdn.com/YOUR_KEY.min.js"></script>
```

## Rollback

### Quick Rollback (Netlify)
```bash
# List deployments
netlify deploy:list

# Restore previous version
netlify rollback
```

### Git Rollback
```bash
# Revert to previous version
git revert HEAD
git push

# Or reset to specific version
git reset --hard v1.0.0
git push --force
```

## Testing

### Local Testing
```bash
# Start dev server
npm start

# Open http://localhost:8000
```

### Validation
```bash
# Run all checks
npm run validate
```

### Mobile Testing
```bash
# Get local IP
ifconfig | grep "inet " | grep -v 127.0.0.1

# Open on phone: http://YOUR_IP:8000
```

### PWA Testing Checklist

- [ ] Installs on Android/iOS
- [ ] Works offline after first load
- [ ] Rest timer functions correctly
- [ ] Tab memory persists
- [ ] All video links work
- [ ] Responsive on mobile
- [ ] Icons display correctly
- [ ] Service worker updates properly

## Updating Content

### Add New Workout
1. Edit `gym_program.html`
2. Add new tab section
3. Update navigation
4. Test locally
5. Commit and push

### Update Exercise
1. Modify exercise in HTML table
2. Update video link if needed
3. Add timer icon: `<span class="rest-link" onclick="startTimer(60)">⏱️</span>`
4. Test and deploy

### Change Program Duration
1. Update header subtitle
2. Modify progression table in Progress tab
3. Update `CHANGELOG.md`
4. Bump minor version

## Environment Variables

Create `.env.local` (not committed):
```
NETLIFY_AUTH_TOKEN=your_token_here
NETLIFY_SITE_ID=your_site_id
GOOGLE_ANALYTICS_ID=GA-XXXXXXXXX
```

## Maintenance Schedule

**Weekly:**
- Check PWA score
- Review user feedback
- Monitor error logs

**Monthly:**
- Update dependencies
- Review analytics
- Plan new features

**Quarterly:**
- Update workout program if needed
- Refresh video links
- Performance audit

## Common Issues

### Service Worker Not Updating
```bash
# Clear old caches by bumping version
npm run version patch
git add . && git commit -m "chore: force SW update"
git push
```

Users should:
1. Close all tabs
2. Clear browser cache
3. Revisit site

### Icons Not Showing
- Ensure icons are 192x192 and 512x512
- Check manifest.json paths
- Clear browser cache

### Timer Not Working
- Check JavaScript console
- Verify event listeners
- Test on different browsers

## Support & Contribution

**Issues:** GitHub Issues
**PRs:** Welcome! Follow branch strategy
**Contact:** Create issue for bugs/features

---

**Quick Commands Reference:**

```bash
# Development
npm start                 # Start dev server
npm run validate         # Run checks

# Version management
npm run version patch    # Bump patch
npm run version minor    # Bump minor
npm run version major    # Bump major

# Deployment
git push                 # Auto-deploy via CI/CD
netlify deploy --prod   # Manual Netlify deploy
vercel --prod           # Manual Vercel deploy

# Monitoring
lighthouse <url>        # Check PWA score
```
