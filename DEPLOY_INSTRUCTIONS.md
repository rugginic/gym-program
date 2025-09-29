# 🚀 Deploy to GitHub Pages - Step by Step

## Step 1: Create GitHub Repository

Go to: https://github.com/new

Fill in:
- **Repository name:** `gym-program`
- **Description:** "8-week back-friendly gym program PWA"
- **Visibility:** Public (or Private - both work)
- **DO NOT** initialize with README, .gitignore, or license

Click "Create repository"

## Step 2: Push Code to GitHub

Copy your GitHub username, then run:

```bash
cd /Users/rugginic/projects/gym-program

# Replace YOUR_USERNAME with your actual GitHub username
git remote add origin https://github.com/YOUR_USERNAME/gym-program.git

# Push to GitHub
git push -u origin main
```

## Step 3: Enable GitHub Pages

1. Go to your repo: `https://github.com/YOUR_USERNAME/gym-program`
2. Click **Settings** tab
3. Click **Pages** in left sidebar
4. Under "Build and deployment":
   - **Source:** Select "GitHub Actions"
5. Click **Save**

That's it! GitHub Actions will automatically deploy.

## Step 4: Wait for Deployment

1. Go to **Actions** tab in your repo
2. Watch the "Deploy PWA" workflow run
3. Takes ~1-2 minutes
4. Green checkmark = deployed!

## Step 5: Get Your App URL

Your app is live at:
```
https://YOUR_USERNAME.github.io/gym-program/gym_program.html
```

## Step 6: Install on Phone

1. Open URL above in Chrome on Android
2. Tap menu (⋮) → "Add to Home screen"
3. Done! 💪

## Troubleshooting

**Workflow failed?**
- Check the Actions tab for error details
- Make sure Pages is enabled (Settings → Pages)
- Verify all files are committed: `git status`

**404 Error?**
- Wait 2-3 minutes after first deploy
- GitHub Pages can take a moment to become available
- Check Actions tab to ensure deployment completed

**Service Worker not working?**
- Must use HTTPS (GitHub Pages provides this)
- Clear browser cache and reload
- Check browser console for errors

## Future Updates

Every time you push to `main`, it auto-deploys:

```bash
# Make changes to gym_program.html
git add gym_program.html
git commit -m "feat: updated workout routine"
git push

# Auto-deploys in ~1 minute!
```

## Version Releases

```bash
# Bump version
npm run version minor

# Commit and tag
git add .
git commit -m "chore: release v1.1.0"
git tag v1.1.0

# Push everything
git push && git push --tags
```

---

**Questions?** Create an issue in your repo!
