# Install Nic's Gym Program Android App

## Quick Setup

Your gym program has been converted to a Progressive Web App (PWA) that you can install on your Android phone!

## What You Need

1. An Android phone with Chrome browser
2. A simple web server to host the files locally OR upload to a web host

## Installation Steps

### Option 1: Using Python (Easiest for Testing)

1. **On your computer**, open Terminal and navigate to this folder:
   ```bash
   cd /Users/rugginic/projects/gym-program
   ```

2. **Start a local web server**:
   ```bash
   python3 -m http.server 8000
   ```

3. **Find your computer's IP address**:
   ```bash
   ifconfig | grep "inet " | grep -v 127.0.0.1
   ```
   Look for something like `192.168.1.xxx`

4. **On your Android phone**:
   - Connect to the same WiFi network
   - Open Chrome browser
   - Go to: `http://YOUR_IP_ADDRESS:8000/gym_program.html`
   - Example: `http://192.168.1.105:8000/gym_program.html`

5. **Install the app**:
   - Tap the menu (⋮) in Chrome
   - Select "Add to Home screen" or "Install app"
   - Name it and tap "Add"
   - The app icon will appear on your home screen!

### Option 2: Using a Web Host (Best for Permanent Use)

Upload all files to any web hosting service:
- `gym_program.html`
- `manifest.json`
- `service-worker.js`
- `icon-192.png`
- `icon-512.png`

Then visit the URL on your Android phone and follow step 5 above.

Popular free hosting options:
- GitHub Pages (free)
- Netlify (free)
- Vercel (free)

## Features

✅ **Works Offline** - Once installed, works without internet
✅ **Rest Timer** - Click ⏱️ next to any exercise for countdown timer
✅ **Saves Progress** - Remembers which tab you were on
✅ **Mobile Optimized** - Designed for phone screens
✅ **Install on Home Screen** - Looks and feels like a native app

## Generating Icons

1. Open `create-icons.html` in your browser
2. It will automatically download `icon-192.png` and `icon-512.png`
3. Move these files to the same folder as `gym_program.html`

## Troubleshooting

**"Add to Home screen" doesn't appear?**
- Make sure you're using Chrome (not another browser)
- PWAs require HTTPS or localhost
- Check that `manifest.json` is accessible

**App doesn't work offline?**
- Load the page once while online first
- The service worker needs to cache files on first visit

**Timer doesn't work?**
- Make sure JavaScript is enabled in browser settings

## Usage Tips

- **Rest Timer**: Click the stopwatch emoji (⏱️) next to any rest time
- **Navigation**: Swipe between workout days using the tabs
- **Offline Mode**: After first load, works without internet connection
- **Updates**: Reload the page to get any updates to the program

Enjoy your workouts! 💪
