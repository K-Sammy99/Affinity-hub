# AffinityHub Mobile Deployment Guide 📱
### Converting AffinityHub into Android & iOS Mobile Apps

**Yes! You can 100% turn AffinityHub into a mobile app for both Android and iOS.**

Because AffinityHub is engineered with responsive HTML5, CSS3 Custom Properties, vanilla modular JavaScript, and standard Web APIs (WebRTC, Web Audio API, Canvas API, IndexedDB), you can deploy it to mobile devices using two primary pathways:

---

## ⚡ Option 1: Instant PWA Installation (Android & iOS — Zero Build Tools Needed)

AffinityHub is already pre-configured as an installable **Progressive Web App (PWA)** with:
- [`manifest.json`](file:///c:/Users/User/OneDrive/Desktop/AffinityHub/manifest.json) (App launcher icon, theme color `#0f172a`, standalone full-screen window)
- [`sw.js`](file:///c:/Users/User/OneDrive/Desktop/AffinityHub/sw.js) (Offline service worker caching)
- Mobile Native Bottom Navigation Bar for thumb-friendly navigation on phones
- Full notch & dynamic island support (`viewport-fit=cover`)

### On Android:
1. Host or open `index.html` on your mobile phone (via local Wi-Fi IP or any free hosting like GitHub Pages, Vercel, Netlify, or Firebase).
2. Open the URL in **Google Chrome** on your Android device.
3. Tap the **three-dots menu (⋮)** in the top-right corner.
4. Tap **"Install app"** or **"Add to Home screen"**.
5. AffinityHub installs with its own app icon on your home screen and launches full-screen with no browser address bar!

### On iOS (iPhone & iPad):
1. Open the URL in **Apple Safari**.
2. Tap the **Share icon (box with upward arrow)** at the bottom toolbar.
3. Scroll down and tap **"Add to Home Screen"**.
4. Tap **"Add"**.
5. AffinityHub will launch from your home screen as a standalone native-feeling iOS app with full-screen view.

---

## 🚀 Option 2: Build Real Native Apps for Google Play Store & Apple App Store (via Capacitor)

If you want real `.apk` / `.aab` files for Android and `.ipa` files for iOS ready to submit to the **Google Play Store** and **Apple App Store**, the official industry-standard tool is **Capacitor** (by the Ionic team).

Capacitor wraps your exact web code into high-performance native iOS (WKWebView) and Android (Chromium System WebView) applications with zero code rewrites.

### 📋 Prerequisites:
- **Node.js** & npm (already installed on your system)
- For Android: **Android Studio** (free, for building `.apk` / `.aab`)
- For iOS: A Mac computer with **Xcode** (required by Apple for signing `.ipa` files)

---

### 🛠️ Step-by-Step Build Commands

Open PowerShell or Terminal in the project folder:
```powershell
cd "c:\Users\User\OneDrive\Desktop\AffinityHub"
```

#### Step 1: Initialize npm and install Capacitor
```powershell
npm init -y
npm install @capacitor/core @capacitor/cli @capacitor/android @capacitor/ios
```

#### Step 2: Initialize Capacitor with the pre-made configuration
A configuration file [`capacitor.config.json`](file:///c:/Users/User/OneDrive/Desktop/AffinityHub/capacitor.config.json) has already been created for you:
```powershell
npx cap init AffinityHub org.affinityhub.app --web-dir .
```

#### Step 3: Add Android Platform
```powershell
npx cap add android
```
This generates a complete native Android Studio project inside the `android/` directory!

#### Step 4: Add iOS Platform (run on macOS)
```bash
npx cap add ios
```
This generates a complete native Xcode workspace inside the `ios/` directory!

#### Step 5: Sync Assets & Open in Native IDEs

- **To open and build in Android Studio**:
  ```powershell
  npx cap copy android
  npx cap open android
  ```
  In Android Studio, click **Build > Build Bundle(s) / APK(s) > Build APK(s)** to generate your installable `.apk` file!

- **To open and build in Xcode (on macOS)**:
  ```bash
  npx cap copy ios
  npx cap open ios
  ```
  In Xcode, connect your iPhone or choose an iOS Simulator, select your Developer Team, and click **Run (▶)** to install directly onto your iPhone or generate an `.ipa` archive for TestFlight and the App Store!

---

## 🔒 Mobile Permissions Handled by Capacitor

When running natively on mobile, Capacitor provides official native plugins for all AffinityHub features:
- **Camera & Microphone**: Handled natively by WebRTC and `@capacitor/camera`
- **Screen Sharing**: Supported natively on Android 10+ and iOS ReplayKit
- **File Uploads & Downloads**: Handled by `@capacitor/filesystem`
- **Push Notifications**: Handled by `@capacitor/push-notifications`
- **Biometric FaceID / Fingerprint Unlock**: Can be added to the Password Vault via `@capacitor/biometrics`

---

## 📱 Summary Comparison

| Feature | Option 1: PWA | Option 2: Capacitor Native |
| :--- | :--- | :--- |
| **Android Support** | ✅ Yes (Instant) | ✅ Yes (Google Play Store `.apk` / `.aab`) |
| **iOS / iPhone Support** | ✅ Yes (Instant) | ✅ Yes (Apple App Store `.ipa`) |
| **Development Time** | 0 minutes (Already done) | ~15 minutes (Run 4 commands) |
| **Cost** | 100% Free | Free for testing ($25 Google / $99 Apple for store listing) |
| **App Store Submission** | No (Direct install) | Yes (Google Play & Apple App Store) |
| **WebRTC Audio/Video** | ✅ Full Support | ✅ Full Support |
| **Offline IndexedDB Storage**| ✅ Full Support | ✅ Full Support |
| **Home Screen App Icon** | ✅ Full Support | ✅ Full Support |
