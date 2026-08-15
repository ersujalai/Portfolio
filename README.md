# Sujal Prajapati — Developer Portfolio

⚡ **Modern, High-Performance Personal Portfolio Website** built for **Sujal Prajapati** (Computer Engineering Student & Aspiring Software Developer).

Inspired by top-tier developer portfolio aesthetics, featuring a dark neon theme, glassmorphism, interactive developer code terminal, project feature modals, skill category filters, and smooth responsive layouts.

---

## 🚀 Features

- **Developer Hero Section**: Dynamic typographic introduction, status pill ("Available for Internships"), CTA buttons, and an interactive Developer Code Terminal.
- **Background & Experience**: Computer Engineering focus at LJ University, core engineering statistics (SPI 8.58/10), and technical focus area cards.
- **Categorized Skills Showcase**: Filterable skill pills (Programming Languages, Frameworks, Databases, Tools) strictly based on real resume experience with 0 fake progress bars.
- **Projects Showcase & Detail Modals**:
  - *InfluencerHub* (Full-Stack Creator Platform with AI Creator-Matching Engine)
  - *University Attendance Management System* (Role-Based Attendance System)
  - *Pharmacy Management System* (Java Desktop System with Custom Singly Linked List)
  - *Theater Management System* (Java Multiplex Management Application)
- **Academic Education & SPI**: Featured LJ University card highlighting **SPI: 8.58 / 10** and core engineering coursework.
- **Verified Certifications**: Coursera certificates from IBM, UPenn, and LearnQuest.
- **Interactive Contact & Mailto**: One-click email clipboard copy, social profile links, and direct mailto form submission.
- **Centralized Data File**: All content managed cleanly in `src/data/portfolioData.js`.

---

## 🛠️ Tech Stack

- **Framework**: [React 19](https://react.dev/) + [Vite](https://vitejs.dev/)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/) with `@tailwindcss/vite`
- **Icons**: [Lucide React](https://lucide.dev/)
- **Deployment**: Vercel Ready (`vercel.json` included)

---

## 📁 Centralized Customization

All portfolio data, links, and placeholder variables are located in **`src/data/portfolioData.js`**.

To update your social links, resume, or Gmail notifications:

```javascript
// Located in src/data/portfolioData.js
placeholders: {
  GITHUB_URL: "https://github.com/ersujalai",
  LINKEDIN_URL: "https://www.linkedin.com/in/sujal-prajapati-39690933b/",
  RESUME_URL: "/resume/Sujal_Prajapati_Resume.pdf",
  WEB3FORMS_ACCESS_KEY: "YOUR_WEB3FORMS_ACCESS_KEY" // Free key for instant Gmail notifications
}
```

---

## 📧 Setting Up Instant Gmail Notifications (10 Seconds)

To receive real-time email notifications directly to **`sbprajapati310707@gmail.com`** when someone submits the contact form:

1. Visit [https://web3forms.com](https://web3forms.com).
2. Enter your email address: `sbprajapati310707@gmail.com`.
3. Click **"Create Access Key"** (It takes 10 seconds, completely free, no password or credit card required!).
4. Copy your Access Key from the email you receive.
5. Open [`src/data/portfolioData.js`](file:///c:/Users/vinip/OneDrive/Documents/Desktop/Portfolio/src/data/portfolioData.js) and paste the key in `WEB3FORMS_ACCESS_KEY`.

Now, every message submitted on your portfolio will be delivered directly into your Gmail inbox!

---

## 💻 Local Development Setup

### 1. Install Dependencies
```bash
npm install
```

### 2. Start Local Dev Server
```bash
npm run dev
```
Open [http://localhost:5173](http://localhost:5173) in your browser.

### 3. Test Production Build
```bash
npm run build
npm run preview
```

---

## 🌐 Deploying to Vercel (Step-by-Step)

### Step 1: Create a GitHub Repository
1. Go to [GitHub](https://github.com/new) and create a new repository named `sujal-prajapati-portfolio`.
2. Do not initialize with a README (this project already has one).

### Step 2: Push Portfolio Code to GitHub
In your local project terminal, run:
```bash
git init
git add .
git commit -m "Initial commit of Sujal Prajapati portfolio"
git branch -M main
git remote add origin https://github.com/<YOUR_GITHUB_USERNAME>/sujal-prajapati-portfolio.git
git push -u origin main
```

### Step 3: Deploy on Vercel
1. Sign in to [Vercel](https://vercel.com).
2. Click **"Add New..."** → **"Project"**.
3. Import your `sujal-prajapati-portfolio` repository from GitHub.
4. Keep the default settings:
   - **Framework Preset**: Vite
   - **Build Command**: `npm run build`
   - **Output Directory**: `dist`
5. Click **"Deploy"**.

Your live website URL will be generated automatically (e.g. `https://sujal-prajapati-portfolio.vercel.app`).

---

## 📄 License
This portfolio project is created for **Sujal Prajapati**.
