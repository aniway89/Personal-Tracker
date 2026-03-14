# Personal-Tracker

### Yoru Tracker

A personal study tracker built to follow a 10-month scholarship preparation plan (April 2026 → February 2027). Targets the **Mitsui & Co. Scholarship** and **MEXT Government of Japan Scholarship** for undergraduate study in Japan.

Built in one sitting as a real tool for personal use — then documented as a portfolio piece.

---

## What it does

- Tracks monthly goals across 5 parallel study tracks: Apps, Boards, Chemistry, Japanese, and English
- Per-task rich text notes with a custom editor (bold, italic, headings, lists)
- Task completion with visual strikethrough and progress state
- Firebase Firestore cloud sync — data persists across devices
- Offline-first localStorage fallback if Firebase is unavailable
- Dynamic theme engine: change background color and accent color in System Preferences
- Custom banner images per session, with a built-in cycle gallery
- Mobile responsive with long-press support for note editing on touch devices
- Right-click context menu on any task card to open the note editor

---

## Tech stack

- Vanilla HTML, CSS, JavaScript — no frameworks, no build tools
- Firebase Firestore (v10) for cloud sync
- Google Fonts: JetBrains Mono + Inter
- Hosted on Firebase Hosting

---

## Interesting implementation details

**Luma-based surface color generation**
When the user picks a background color in System Preferences, the app calculates perceived brightness using the ITU-R BT.709 standard:

```js
const luma = 0.2126 * r + 0.7152 * g + 0.0722 * b;
```

If the background is light, card surfaces get darker. If dark, they get lighter. This means any background color produces a readable, consistent UI automatically — no hardcoded theme variants needed.

**Offline-first sync**
Every save writes to `localStorage` first, then attempts Firestore. If Firebase fails, the app shows "SAVED LOCALLY" and continues working. Data is never lost due to connectivity.

**Rich text editor**
Built using `document.execCommand` for simplicity and zero dependencies. Notes are stored as raw HTML strings in Firestore per task ID. Planned upgrade to Tiptap or Quill in V2 since `execCommand` is technically deprecated (though still universally supported).

**Data-driven rendering**
The entire UI is generated from a single `planData` JSON array. Adding a new month or changing task content requires editing one object — no HTML changes needed anywhere.

**Touch support**
Long-press (600ms) on mobile opens the note editor, matching the right-click behaviour on desktop. Uses `touchstart`/`touchend`/`touchmove` to cancel the timer on scroll.

---

## Project structure

```
index.html        # Entire app — single file, no build step
README.md
```

---

## Local setup

No installation required.

```bash
# Clone the repo
git clone https://github.com/YOUR_USERNAME/yoru-tracker.git

# Open in browser
open index.html
```

For cloud sync, replace the Firebase config in the `<script type="module">` block with your own project credentials from the Firebase Console.

> **Note:** The Firebase config in this repo is a personal demo project. For production use, move credentials to environment variables and configure Firestore security rules.

---

## Roadmap

- [ ] Progress percentage per month based on completed tasks
- [ ] Export monthly summary as PDF
- [ ] Migrate rich text editor to Tiptap
- [ ] Authentication so multiple users can have separate data
- [ ] Notification reminders for daily protocol times

---

## Why this exists

This tracker was built to follow a real preparation plan for applying to Japanese university scholarships. The plan covers CBSE Class 12 boards, JLPT N4 Japanese exam, three software portfolio projects, and scholarship applications — all running in parallel from April 2026 to February 2027.

The app itself became one of the portfolio projects.

---

## Author

17-year-old developer from India. Building software, learning Japanese, aiming for Japan.

GitHub: [@YOUR_USERNAME](https://github.com/YOUR_USERNAME)