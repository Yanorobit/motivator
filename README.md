# 🌟 Motivator

> *A voice-powered German motivational quote generator for Android & iOS*

---

## 💡 Inspiration

This project was born from a simple, deeply personal desire — to help.

I have a blind friend who loves motivation and positivity. She used to have a small **paper quote wheel** — a physical device that, with a spin, would give her a random motivational phrase. She loved using it independently, without needing anyone's help. But paper has its limits: it can't speak, it can't be updated, and eventually it wears out.

I built this app so she could have that same feeling of independence back — in her pocket, on her phone, anytime she needs a boost. One tap. A phrase. A voice.

That's Motivator.

---

## 📱 What It Does

**Motivator** generates unique, uplifting motivational affirmations in **German** and reads them aloud using the device's built-in text-to-speech engine — fully **offline**, no internet required.

Each affirmation is composed of three randomly combined parts, producing hundreds of unique combinations, such as:

> *"Aus tiefster innerer Überzeugung erkenne ich jeden Tag mehr, dass mein Potenzial absolut grenzenlos und einzigartig ist."*

The app is designed with **accessibility first**: large touch targets, clear visual feedback, and audio output that works without needing to look at the screen.

---

## ✨ Features

- 🎲 **Random affirmation generator** — 3-part combinatorial phrases, 1000+ possible outcomes
- 🔊 **Text-to-speech** — reads the quote aloud in German (device TTS, no internet needed)
- 🌙 **Dark UI** — deep blue gradient theme, easy on the eyes
- ♿ **Accessibility-focused** — large button, audio feedback, minimal UI clutter
- 📴 **Fully offline** — works without any network connection
- 📱 **Cross-platform** — runs on Android and iOS via Expo

---

## 🛠️ Tech Stack

| Technology | Version |
|---|---|
| React Native | 0.81.5 |
| Expo SDK | ~54.0.33 |
| expo-speech | ~14.0.8 |
| expo-linear-gradient | ~15.0.8 |
| React | 19.1.0 |

---

## 🚀 Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v18 or newer)
- [Expo CLI](https://docs.expo.dev/get-started/installation/)
- Expo Go app on your phone ([Android](https://play.google.com/store/apps/details?id=host.exp.exponent) / [iOS](https://apps.apple.com/app/expo-go/id982107779))

### Installation

```bash
# Clone the repository
git clone https://github.com/YOUR_USERNAME/motivator.git
cd motivator

# Install dependencies
npm install

# Start the development server
npm start
```

Then scan the QR code with **Expo Go** on your phone.

### Run on specific platform

```bash
npm run android   # Android emulator or device
npm run ios       # iOS simulator (macOS only)
npm run web       # Browser (TTS support may vary)
```

---

## 🏗️ Project Structure

```
motivator/
├── App.js          # Main application component
├── app.json        # Expo configuration
├── index.js        # Entry point
├── package.json    # Dependencies
└── assets/         # App icons and splash screen
```

---

## 📖 How the Quote Engine Works

The generator uses three independent arrays of phrases, drawing one random element from each to compose a full affirmation:

```
[Part 1 — Context/Stance]  +  [Part 2 — Inner Action]  +  [Part 3 — Belief/Goal]
```

**Example:**
```
"Mit unerschütterlichem Selbstvertrauen"   ← Part 1
"spüre ich in jeder Zelle,"               ← Part 2  
"dass ich vollkommen genug bin, genau so wie ich bin." ← Part 3
```

With 10 phrases in each array, that's **10 × 10 × 10 = 1,000 unique combinations**.

---

## ♿ Accessibility Notes

This app was built with vision impairment in mind:

- The **entire screen** doesn't need to be read — one button does everything
- All generated text is **spoken aloud automatically**
- **No login, no menus, no navigation** — launch and tap
- The button is large and centered for easy touch targeting
- Visual spinner appears during playback so sighted users know audio is active

---

## 📄 License

MIT — do whatever you want with it, just maybe pass on the kindness. 🌱

---

*Made with ❤️ for someone who deserves to feel motivated, independently.*
