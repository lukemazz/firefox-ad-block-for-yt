# YT Solo (no ads) - Firefox

🎥 Firefox extension to open YouTube in a dedicated ad-free window.

## 📋 Features

- **Dedicated window**: Opens YouTube in a separate popup
- **Ad blocking**: Automatically removes YouTube ads
- **Auto-skip**: Skips video ads when possible
- **Ad acceleration**: Speeds up non-skippable ads
- **Clean interface**: Hides ad overlays and banners

## 🚀 Installation

### Method 1: Temporary (for testing)

1. Download: `git clone https://github.com/yourusername/yt-solo-firefox.git`
2. Open Firefox and navigate to `about:debugging`
3. Click "This Firefox" → "Load Temporary Add-on..."
4. Select `manifest.json` from the extension folder

> ⚠️ Extension removed when Firefox closes.

### Method 2: Permanent (unsigned)

1. Go to `about:config` and set `xpinstall.signatures.required` to `false`
2. Compress extension files to ZIP, rename to `.xpi`
3. Drag `.xpi` into Firefox and click "Add"

> ⚠️ Warning: Disabling signature verification reduces browser security.

### Method 3: Developer/Nightly Edition

Use Method 2 without modifying `about:config`.

## 🎯 Usage

Click the extension icon to open YouTube in an ad-free popup window. Ads are automatically blocked, skipped, or accelerated.

## 🔧 Project Structure

```
yt-solo-firefox/
├── manifest.json    # Extension config
├── background.js    # Request blocking
├── content.js       # DOM manipulation
└── README.md
```

## 📝 How It Works

**Background Script**: Blocks requests to ad domains (doubleclick.net, googlesyndication.com, etc.) and opens popup window.

**Content Script**: Accelerates ads to 16x speed, auto-clicks "Skip Ad" buttons, hides overlays and banners.

## ⚖️ Legal Notice

Developed for educational purposes. Ad-blocking is legal in most jurisdictions. Users are responsible for their use. YouTube may limit access if ad-blocking is detected.

## 🐛 Troubleshooting

- **Extension not appearing**: Check all files are present, verify `manifest.json` selection
- **Ads not blocked**: Reload page, check extension is active in `about:addons`
- **Extension disappears**: Normal for temporary installation, use Method 2/3 for permanence

## 🤝 Contributing

1. Fork the repository
2. Create feature branch: `git checkout -b feature/new-feature`
3. Commit: `git commit -m 'Add new feature'`
4. Push: `git push origin feature/new-feature`
5. Open Pull Request

## 📄 License

MIT License. See `LICENSE` file.

## ⚠️ Disclaimer

Provided "as is" without warranty. Author not responsible for damages. Use at your own risk.

---

YouTube is a registered trademark of Google LLC. Not affiliated with or endorsed by Google.
