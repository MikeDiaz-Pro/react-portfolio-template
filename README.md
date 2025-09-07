# 🌐 React + Tailwind Portfolio Template

A modern, responsive, and bilingual personal portfolio template built with **React**, **TailwindCSS**, and **Framer Motion**.  
This template is ideal for developers who want a clean and elegant way to showcase their work and skills.

---

## 📸 Demo

> Add your live demo link here (e.g. Netlify, Vercel, GitHub Pages)

---

## 🛠 Tech Stack

- ⚛️ React + Vite
- 🎨 TailwindCSS
- 🎥 Framer Motion
- 📜 React Scroll
- 🌍 Multilanguage support (ES / EN)
- 🧠 React Context (Language switcher)
- 📱 Fully responsive (Mobile-First)
- 🌐 Icons with React Icons

---

## 📁 Project Structure

```
src/
├── assets/              # Images and static files
├── components/          # Reusable UI components (Navbar, Footer, etc.)
├── constants/           # Translations and color definitions
├── context/             # LanguageContext to manage ES/EN toggle
├── pages/               # Main sections: Hero, About, Resume, Portfolio
├── App.jsx              # Main app structure
├── main.jsx             # Entry point (wrapped with LanguageProvider)
└── index.css            # Global styles (Tailwind directives)
```

---





## ✍️ How to Edit Content

You can update the portfolio content by editing the following files:

### 🔁 `src/constants/translations.js`

Contains **all static text** in both Spanish and English:

- Name and professional title
- About text
- Resume (experience, skills, education, languages)
- Portfolio project cards
- Footer

```js
export const translations = {
  en: {
    name: "Your Name",
    title: "Fullstack Developer",
    aboutText1: "...",
    experience: [ {...}, ... ],
    projects: [ {...}, ... ],
    // etc.
  },
  es: {
    name: "Tu Nombre",
    title: "Desarrollador Fullstack",
    aboutText1: "...",
    experience: [ {...}, ... ],
    projects: [ {...}, ... ],
    // etc.
  }
}
```

## ✏️ Customization Guide

To personalize this template:

- Replace or remove the avatar image in `src/assets/profile.png`
- Modify the colors or layout using Tailwind classes

### 🌐 `LanguageContext.jsx`

Handles the language state and switching logic. No need to modify unless you want to change the default language.

### 🧠 `Navbar.jsx`

Includes the section links and the language switch button (desktop + mobile).

---

## 🚀 Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/yourusername/react-portfolio-template.git
cd react-portfolio-template
```

### 2. Install dependencies

```bash
npm install
```

### 3. Start the development server

```bash
npm run dev
```

---

## 🧪 Build for Production

```bash
npm run build
```

Output will be generated in the `/dist` folder.

---

## ☁️ Deployment Suggestions

You can deploy this site using any static hosting provider:

- **AWS (EC2 + NGINX)** – recommended for full control.
- **GCP (Firebase Hosting)** – simple and fast for static content.
- **Azure (Static Web Apps)** – good integration with GitHub.

> ⚠️ Note: Detailed cloud deployment is not included in this template. Please refer to the official docs of each provider.

---

## 🤝 Credits

Originally created by Miguel Díaz — feel free to adapt or share as your own.
This template is open source. You can adapt it freely and use it for your own personal site.

---

## 📜 License

[MIT](LICENSE)