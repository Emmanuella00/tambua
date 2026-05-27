# Tambua — Know Your Health

> **Recognize. Understand. Act.**

Tambua (Swahili for "to recognize") is an AI-powered personal health companion that helps young Africans understand their risk for non-communicable diseases (NCDs) — before it is too late.

Built for the **CBC Hackathon 2026** at ALU Kigali.

---

## The Problem

Non-communicable diseases — hypertension, diabetes, heart disease, cancer — are projected to become the **#1 cause of death in sub-Saharan Africa by 2030**. In Africa, these diseases affect people **10+ years younger** than in wealthier regions. Yet most young Africans have never had their blood pressure or blood sugar checked.

The problem is not a lack of health data in the world. It is a lack of **personal health awareness**.

## What Tambua Does

### 1. Know Your Risk — Personal NCD Risk Assessment
Complete a guided questionnaire covering lifestyle, diet, family history, and habits. Claude AI generates a personalized risk breakdown with culturally relevant explanations.

### 2. Read My Numbers — Health Literacy Tool
Input health readings (blood pressure, blood sugar, BMI, cholesterol) and Claude explains them in plain language — not medical jargon.

### 3. What's This Feeling? — Symptom Sense-Check
Describe persistent symptoms and Claude maps them to possible NCD connections, recommends screenings, and tells you when to seek care.

**Tambua does not diagnose.** It empowers people with understanding and directs them to real healthcare providers.

---

## Key Features

- **Multilingual** — English, French, and Kinyarwanda with all AI responses generated natively
- **Culturally Aware** — References African diets, lifestyles, and local context
- **Privacy by Design** — No personal health data stored on any server
- **Mobile-First** — Responsive design optimized for phone screens
- **Scroll Animations** — Smooth editorial-style transitions between sections

---

## Tech Stack

| Layer | Technology |
|-------|-----------|
| Frontend | React 18 + Vite |
| AI Engine | Claude API (Anthropic) — Sonnet |
| Styling | CSS-in-JS |
| Font | DM Sans (Google Fonts) |
| Images | Unsplash (free license) |
| Deployment | Vercel / Netlify |

### Claude API Integration Points

1. **Risk Assessment Engine** — Personalized NCD risk analysis from lifestyle data
2. **Health Number Interpreter** — Plain-language explanations of medical readings
3. **Symptom Analyzer** — Maps symptoms to NCD risk connections and screenings
4. **Multilingual Generation** — Native output in English, French, or Kinyarwanda

---

## Getting Started

### Prerequisites
- Node.js 18+
- Claude API key from [console.anthropic.com](https://console.anthropic.com/)

### Installation

```bash
git clone https://github.com/YOUR_USERNAME/tambua.git
cd tambua
npm install
cp .env.example .env
# Add your Claude API key to .env
npm run dev
```

Open `http://localhost:5173`

### Build for Production

```bash
npm run build
npm run preview
```

---

## Project Structure

```
tambua/
├── public/
│   └── favicon.svg
├── src/
│   ├── components/
│   │   └── FadeSection.jsx    # Scroll-triggered animations
│   ├── data/
│   │   ├── languages.js       # EN/FR/RW translations
│   │   └── questions.js       # Assessment question factory
│   ├── utils/
│   │   ├── api.js             # Claude API + system prompts
│   │   └── theme.js           # Color palette + image URLs
│   ├── App.jsx                # Main application
│   └── main.jsx               # Entry point
├── .env.example
├── .gitignore
├── index.html
├── LICENSE
├── package.json
├── README.md
└── vite.config.js
```

---

## Ethical Alignment

- **No diagnosis, only awareness** — Helps users understand risk, never tells them what they have
- **Cultural respect** — Acknowledges local diets, traditional practices, and regional context
- **Privacy by design** — No health data stored on servers
- **Inclusive access** — Multilingual support + USSD roadmap for feature phones
- **Harm mitigation** — Clear disclaimers, emergency guidance to health facilities

---

## Roadmap

- [ ] USSD integration for offline access (Africa's Talking gateway)
- [ ] Additional languages (Swahili, Hausa, Amharic)
- [ ] Health number trend tracking
- [ ] Clinic/pharmacy locator
- [ ] B2B partnership API for insurers and health NGOs

---

## The Numbers

| Stat | Source |
|------|--------|
| 71% of global deaths caused by NCDs | WHO |
| NCDs projected #1 cause of death in SSA by 2030 | WHO Africa |
| NCDs affect Africans 10+ years younger | Lancet |
| Only 10.3% of hypertensive adults in SSA achieve BP control | BMJ Global Health |
| 41% of African internet users search health info on mobile | Research ICT Africa |

---

## Team

Built by [Your Names] — ALU Kigali, CBC Hackathon 2026.

## License

MIT — see [LICENSE](LICENSE)
