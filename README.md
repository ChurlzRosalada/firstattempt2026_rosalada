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

<img width="1919" height="911" alt="image" src="https://github.com/user-attachments/assets/32d2521c-8bd9-42bd-b4e4-a6633a7b7f70" />
<img width="1918" height="910" alt="image" src="https://github.com/user-attachments/assets/3e0a17b0-353b-480c-acc4-bf8880364724" />
<img width="1920" height="1080" alt="image" src="https://github.com/user-attachments/assets/452bf6e2-d7cb-4b34-9dd1-112fe7605749" />
<img width="1920" height="1080" alt="image" src="https://github.com/user-attachments/assets/1ad9cc02-66a7-4dea-8d3b-4924f4b51cdf" />
<img width="1920" height="1080" alt="image" src="https://github.com/user-attachments/assets/05a33067-b8a9-47cb-85ad-844dcf31c60d" />
<img width="1920" height="1080" alt="image" src="https://github.com/user-attachments/assets/b7703607-2364-44c5-b9f9-407777d09ed6" />
<img width="1920" height="1080" alt="image" src="https://github.com/user-attachments/assets/3c931101-f2bf-4714-b82e-2b9883c58b8f" />
<img width="1920" height="1080" alt="image" src="https://github.com/user-attachments/assets/20803cd5-24a5-4308-bad4-f43b9275441c" />
<img width="1920" height="1080" alt="image" src="https://github.com/user-attachments/assets/ab0135e5-c303-4596-8c30-96a8160f14b1" />
<img width="1920" height="1080" alt="image" src="https://github.com/user-attachments/assets/47998e28-fab2-4cd7-957a-38a1c0d6c143" />
<img width="1920" height="1080" alt="image" src="https://github.com/user-attachments/assets/37b13d34-4226-4bf4-94f1-a31f1ac1662e" />
<img width="1920" height="1080" alt="image" src="https://github.com/user-attachments/assets/92e4d02a-4d96-491c-80d4-8bcfb674c995" />
<img width="1920" height="1080" alt="image" src="https://github.com/user-attachments/assets/dc325071-dc22-4bd7-bb14-b8a2ceccf032" />
<img width="1920" height="1080" alt="image" src="https://github.com/user-attachments/assets/0dee6401-6668-4e7d-9112-fdf2d051c362" />
<img width="1920" height="1080" alt="image" src="https://github.com/user-attachments/assets/e9f62abd-acad-464b-b2a3-e8b6f28c0d73" />
<img width="1920" height="1080" alt="image" src="https://github.com/user-attachments/assets/b8611eb7-3e54-4c97-ae0a-dceba5aa781f" />
<img width="1920" height="1080" alt="image" src="https://github.com/user-attachments/assets/9ff201c2-cdcd-43bf-aff0-1a4f651794cf" />
<img width="1920" height="1080" alt="image" src="https://github.com/user-attachments/assets/1f80cc71-3bb2-4cae-9ab5-69c53ba53a70" />
