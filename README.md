# AdDU Alumni Portal — PWA

**Framework:** Vue.js 3 + Vite
**Module:** 2 | **Activity:** 14 + 15 (PWA Conversion)
**Branch:** `feature/pwa-ready`
**Author:** Rosalada

---

## About

AdDU Alumni is a Progressive Web App for the Ateneo de Davao University alumni community. Built with Vue 3, Vue Router, and Vite. Features alumni verification, directory, mentorship hub, events management, personalized calendar, and more. Works fully offline after the first visit.

---

## Installation

### Prerequisites
- [Node.js](https://nodejs.org/) v18 or higher
- npm (comes with Node.js)

### Clone & Run (Development)

```bash
# 1. Clone the repository
git clone https://github.com/ChurlzRosalada/firstattempt2026_rosalada.git

# 2. Navigate into the project folder
cd firstattempt2026_rosalada

# 3. Install dependencies
npm install

# 4. Start the development server
npm run dev

# 5. Open your browser and visit
# http://localhost:5173
```

### PWA / Production Build

```bash
npm run build
npx vite preview --port 5173
```

Then open **Chrome** → **http://localhost:5173**

> ⚠️ Always use Chrome. Always use `npx vite preview` — never `npm run dev`. The dev server uses virtual files the Service Worker cannot cache, so offline will not work.

> ⚠️ If port 5173 is already in use (you'll see "trying another one..."), kill the old servers first:
> ```
> npx kill-port 5173 5174 5175 5176 5177
> npx vite preview --port 5173
> ```

---

## Testing Offline

Do this **in order** every time you want to test offline:

1. Open **http://localhost:5173** in Chrome
2. Open **DevTools** (F12) → **Console** tab
3. Wait until you see all four of these messages:
   ```
   [SW] Installing addu-alumni-v7...
   [SW] Pre-caching app shell
   [SW] v7 shell cached — app works offline!
   [SW] Activating v7, clearing old caches...
   ```
4. Go to **DevTools → Application → Service Workers**
5. Confirm status says: **"activated and is running"**
6. Tick the **Offline** checkbox
7. Press **F5** to refresh
8. ✅ Full app loads offline — all pages and navigation work!

### If the app looks unstyled offline (no CSS)

This means the Service Worker cache is stale or from a different port. Fix it:

1. Untick **Offline**
2. Go to **Application → Storage** → click **Clear site data**
3. Press **F5** to reload online
4. Wait for `[SW] v7 shell cached` in Console
5. Tick **Offline** → F5 again ✅

---

## Rebuilding After Changes

If you edit anything in `src/` and want to rebuild:

```bash
npm run build
npx vite preview --port 5173
```

`npm run build` automatically runs `build-sw.js` which injects the correct hashed asset filenames into `dist/sw.js` — you never need to do this manually.

---

## Project Structure

```
├── dist/               ← Pre-built production app (this is what gets served)
│   ├── assets/         ← Compiled JS + CSS (hashed filenames)
│   ├── icons/          ← PWA icons (72px → 512px), AdDU shield crest design
│   ├── screenshots/    ← PWA install preview images
│   ├── index.html      ← App entry point with SW registration
│   ├── manifest.json   ← Web App Manifest
│   └── sw.js           ← Service Worker (v7)
├── public/             ← Source assets (copied to dist/ on build)
│   ├── icons/          ← Icon source files
│   ├── screenshots/    ← Screenshot source files
│   ├── manifest.json   ← Manifest source
│   ├── offline.html    ← Offline fallback page
│   └── sw.js           ← SW template (build-sw.js injects asset names into this)
├── src/                ← Vue source code
│   ├── views/          ← 16 page components
│   ├── components/     ← TopBar, SideNav
│   ├── router/         ← Vue Router config
│   ├── App.vue
│   ├── main.js
│   └── style.css
├── build-sw.js         ← Post-build script: injects hashed asset filenames into sw.js
├── vite.config.js
├── package.json
└── README.md           ← You are here
```

---

## PWA Details

### Files Added for PWA

| File | Purpose |
|---|---|
| `public/manifest.json` | Web App Manifest — name, colors, icons, shortcuts |
| `public/sw.js` | Service Worker template |
| `build-sw.js` | Injects hashed asset filenames into `dist/sw.js` after build |
| `public/icons/` | 8 icon sizes (72px → 512px) — AdDU shield crest, navy + gold |
| `public/screenshots/` | Install preview images shown in the PWA install prompt |

### Service Worker Caching Strategy (v7)

| Strategy | Applied To | Why |
|---|---|---|
| Network-First | All local assets (JS, CSS, HTML) | Always gets latest when online, falls back to cache when offline |
| Cache-First | CDN assets (non-font) | These never change, serve instantly |
| Font handler | Google Fonts | Tries cache → network → silent empty response (system fonts used as fallback offline) |

---

## AI Log

### Activity 15 — PWA Conversion

**Primary AI tool:** Claude (Anthropic)

**Master Prompt used:**

> "I am building a Vue 3 + Vite project called AdDU Alumni. Help me convert it into a full Progressive Web Application with a valid manifest.json, a service worker with offline caching, Apple PWA meta tags, and all required icon sizes."

**Hallucinations / Errors Encountered and Fixed:**

| # | Hallucination / Error | Fix Applied |
|---|---|---|
| 1 | AI suggested using `vite-plugin-pwa`, which conflicted with the manual Service Worker approach already in use | Rejected the plugin recommendation; kept the manual `sw.js` for full transparency and control |
| 2 | AI placed `sw.js` inside `src/` — Service Workers must be served from the root scope | Moved to `public/` so Vite copies it to `/dist/sw.js` at the correct root path |
| 3 | `manifest.json` was generated with `"display": "fullscreen"`, which hides browser UI entirely | Changed to `"display": "standalone"` for the correct PWA appearance |
| 4 | The Service Worker used `import.meta.env.BASE_URL` — this Vite-specific syntax is not available inside SW files | Hardcoded scope to `'/'` since SW files are not processed by Vite's module bundler |
| 5 | Original AI-generated SW used 3 separate caches; silent pre-cache failures broke offline functionality entirely | Rewrote to a single-cache network-first pattern (adapted from a working reference project) |
| 6 | AI generated a PWA icon that was a screenshot of the homepage instead of a proper app icon | Replaced with a custom AdDU shield crest icon (navy + gold, all 8 required sizes) |
| 7 | Google Fonts fetch failure while offline was crashing the entire SW fetch handler, breaking all offline navigation | Added a dedicated font handler that silently returns an empty CSS response so system fonts are used as fallback |

---

### Activity 14 — Original App

**Primary AI tool:** Claude (Anthropic)

**Prompt used:**

> "Here are all the screens [18 screenshots]. Build the full Vue.js application matching all screens including Login, Registration (3-step), Forgot Password, Home/Feed, Alumni Directory, Mentorship Hub, Request Mentorship, Events, Event Detail, Ticket Details, Check-in Success, Calendar, Profile, Notification Settings, Targeted Invites, and Admin Event Manager. Use Vue 3 with Vue Router and Vite. Colors: navy #1a3a6b and gold #c9a84c. Fonts: DM Sans and Playfair Display."

**File attachments:** 18 PNG screenshots of the mobile app design.

---

## Screenshots

<img width="432" height="922" alt="Home" src="https://github.com/user-attachments/assets/91cacabe-5097-46df-9814-7a4fe6b656f0" />
<img width="433" height="923" alt="Directory" src="https://github.com/user-attachments/assets/d46c63fb-a425-43a8-9bac-b8048fd4fbd4" />
<img width="430" height="922" alt="Events" src="https://github.com/user-attachments/assets/50857465-e633-4e74-976e-fdcd36ccff36" />
<img width="429" height="921" alt="Mentorship" src="https://github.com/user-attachments/assets/b485beef-4d4b-4629-b2bb-49d90a2e7941" />
<img width="431" height="922" alt="image" src="https://github.com/user-attachments/assets/b1ad9fac-7847-4e08-9b6c-ee06a7efd10e" />
<img width="430" height="923" alt="image" src="https://github.com/user-attachments/assets/66df4e9a-e636-47e7-a457-a2fb35ec2a95" />
<img width="430" height="923" alt="image" src="https://github.com/user-attachments/assets/68c63508-7087-4199-9555-eedcb46b997a" />
<img width="428" height="922" alt="image" src="https://github.com/user-attachments/assets/723410e2-e951-47bc-8336-8d9fee90b3b8" />
<img width="429" height="924" alt="image" src="https://github.com/user-attachments/assets/e0a3dfb9-8d04-489b-ba61-cbcfc06299e2" />
<img width="431" height="923" alt="image" src="https://github.com/user-attachments/assets/d3644fcf-500f-45e9-80f9-c0ee560f8a34" />
<img width="429" height="925" alt="image" src="https://github.com/user-attachments/assets/9dbd82a4-2f3e-4974-8f7e-46222c799aee" />
<img width="430" height="923" alt="image" src="https://github.com/user-attachments/assets/e3451e6f-4bdb-4869-85ad-f852b9087098" />
<img width="430" height="924" alt="image" src="https://github.com/user-attachments/assets/0c2b251b-0ebc-40f8-a2e0-a91260d49828" />
<img width="430" height="919" alt="image" src="https://github.com/user-attachments/assets/bfc9d192-3bb5-4465-8bf8-bb7baf4dd220" />
<img width="427" height="922" alt="image" src="https://github.com/user-attachments/assets/15d640b7-a8ea-4b78-862b-04db6e9cf5c6" />
<img width="429" height="920" alt="image" src="https://github.com/user-attachments/assets/d6ca4f9f-358c-4814-b6a4-6954507e303e" />
