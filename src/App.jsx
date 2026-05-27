import { useState, useEffect, useRef, useCallback } from "react";
import demoResponses from "./data/demoResponses.js";

const T = {
  en: {
    login: "Log in", register: "Create account", name: "Full name", email: "Email address",
    password: "Password", welcomeBack: "WELCOME BACK", joinUs: "JOIN TAMBUA",
    welcomeSub: "Sign in to continue your health journey",
    joinSub: "Start understanding your health today",
    noAccount: "Don't have an account?", hasAccount: "Already have an account?",
    signUp: "Sign up", signIn: "Sign in",
    tagline: "KNOW YOUR\nHEALTH", tagSub: "Recognize. Understand. Act.",
    heroDesc: "We help young Africans understand their risk for non-communicable diseases through AI-powered health awareness — before it is too late.",
    getStarted: "Get Started",
    stat1: "71%", stat1Label: "of global deaths caused by NCDs",
    stat2: "#1", stat2Label: "projected killer in Africa by 2030",
    stat3: "10+", stat3Label: "years younger onset in Africa",
    missionTitle: "YOUR HEALTH IS\nOUR PRIORITY",
    missionDesc: "Your health is the foundation to a good life. A life where you have the energy to focus on everything else you want and dream of.",
    f1Title: "PERSONAL\nRISK ASSESSMENT", f1Desc: "Discover your risk for hypertension, diabetes and heart disease based on your lifestyle, diet, and family history.",
    f2Title: "HEALTH\nNUMBER LITERACY", f2Desc: "Enter your blood pressure, blood sugar, or BMI readings and understand what they actually mean — in plain language.",
    f3Title: "SYMPTOM\nSENSE CHECK", f3Desc: "Describe what you are feeling and learn what it could connect to and what screenings to ask for.",
    startAssessment: "Start Assessment", readNumbers: "Enter Numbers", describeSymptoms: "Describe Symptoms",
    poweredBy: "Powered by Claude AI", disclaimer: "Tambua does not diagnose. It helps you understand your risk and know when to see a healthcare provider.",
    step: "Step", of: "of", next: "Next", back: "Back", home: "Home",
    submit: "Get My Risk Report", submitNumbers: "Interpret My Numbers", submitSymptoms: "Analyze Symptoms",
    analyzing: "Analyzing your profile", interpreting: "Interpreting your numbers", analyzingSymptoms: "Analyzing your symptoms",
    riskReport: "YOUR RISK REPORT", numbersReport: "YOUR NUMBERS EXPLAINED", symptomsReport: "YOUR SYMPTOM ANALYSIS",
    newAssessment: "New Assessment", logout: "Log out",
    age: "How old are you?", sex: "What is your biological sex?", male: "Male", female: "Female",
    dietTitle: "How would you describe your diet?",
    dietHigh: "High in processed foods, salt and sugar", dietMixed: "Mixed — some healthy, some not", dietHealthy: "Mostly fresh foods, fruits and vegetables",
    activityTitle: "How physically active are you?",
    activityLow: "Sedentary — mostly sitting", activityMod: "Moderate — some walking or exercise", activityHigh: "Active — regular exercise",
    smokingTitle: "Do you smoke or use tobacco?",
    smokingYes: "Yes, regularly", smokingOccasional: "Occasionally", smokingNo: "No, never", smokingFormer: "I quit",
    alcoholTitle: "How often do you drink alcohol?",
    alcoholDaily: "Daily", alcoholWeekly: "A few times a week", alcoholRarely: "Rarely or socially", alcoholNever: "Never",
    familyTitle: "Family history of these conditions?",
    familyHypertension: "High blood pressure", familyDiabetes: "Diabetes", familyHeart: "Heart disease", familyCancer: "Cancer", familyNone: "None that I know of",
    stressTitle: "How would you rate your stress?",
    stressHigh: "High — constant pressure", stressMod: "Moderate — manageable", stressLow: "Low — balanced",
    sleepTitle: "Hours of sleep per night?",
    sleepLow: "Less than 5", sleepMod: "5 to 7", sleepGood: "7 to 9",
    waterTitle: "Daily water intake?",
    waterLow: "Less than 3 glasses", waterMod: "3 to 6 glasses", waterGood: "7 or more",
    bloodPressure: "Blood Pressure (mmHg)", bpSystolic: "Systolic (top)", bpDiastolic: "Diastolic (bottom)",
    bloodSugar: "Blood Sugar (mg/dL)", weight: "Weight (kg)", height: "Height (cm)", cholesterol: "Cholesterol (mg/dL)",
    numbersHint: "Fill in what you know — leave the rest blank",
    symptomsLabel: "Describe what you are feeling",
    symptomsPlaceholder: "e.g. persistent headaches and fatigue for the past 2 weeks...",
    multilingualNote: "Available in English, Francais, and Ikinyarwanda",
  },
  fr: {
    login: "Se connecter", register: "Creer un compte", name: "Nom complet", email: "Adresse email",
    password: "Mot de passe", welcomeBack: "BON RETOUR", joinUs: "REJOIGNEZ TAMBUA",
    welcomeSub: "Connectez-vous pour continuer", joinSub: "Comprenez votre sante des aujourd'hui",
    noAccount: "Pas de compte?", hasAccount: "Deja un compte?", signUp: "S'inscrire", signIn: "Se connecter",
    tagline: "CONNAISSEZ\nVOTRE SANTE", tagSub: "Reconnaitre. Comprendre. Agir.",
    heroDesc: "Nous aidons les jeunes Africains a comprendre leur risque de maladies non transmissibles grace a l'IA.",
    getStarted: "Commencer",
    stat1: "71%", stat1Label: "des deces mondiaux causes par les MNT",
    stat2: "#1", stat2Label: "tueur projete en Afrique d'ici 2030",
    stat3: "10+", stat3Label: "ans plus jeune en Afrique",
    missionTitle: "VOTRE SANTE EST\nNOTRE PRIORITE",
    missionDesc: "Votre sante est le fondement d'une bonne vie. Une vie ou vous avez l'energie de vous concentrer sur tout ce dont vous revez.",
    f1Title: "EVALUATION\nDES RISQUES", f1Desc: "Decouvrez votre risque d'hypertension, de diabete et de maladie cardiaque.",
    f2Title: "COMPRENDRE\nVOS CHIFFRES", f2Desc: "Entrez vos mesures et comprenez ce qu'elles signifient.",
    f3Title: "ANALYSE DES\nSYMPTOMES", f3Desc: "Decrivez vos symptomes et apprenez quels examens demander.",
    startAssessment: "Commencer", readNumbers: "Entrer les chiffres", describeSymptoms: "Decrire",
    poweredBy: "Propulse par Claude AI", disclaimer: "Tambua ne diagnostique pas. Il vous aide a comprendre vos risques.",
    step: "Etape", of: "de", next: "Suivant", back: "Retour", home: "Accueil",
    submit: "Obtenir Mon Rapport", submitNumbers: "Interpreter", submitSymptoms: "Analyser",
    analyzing: "Analyse en cours", interpreting: "Interpretation en cours", analyzingSymptoms: "Analyse en cours",
    riskReport: "VOTRE RAPPORT", numbersReport: "VOS CHIFFRES", symptomsReport: "ANALYSE SYMPTOMES",
    newAssessment: "Nouvelle Evaluation", logout: "Deconnexion",
    age: "Quel age avez-vous?", sex: "Sexe biologique?", male: "Homme", female: "Femme",
    dietTitle: "Votre alimentation?", dietHigh: "Transformes, sel et sucre", dietMixed: "Mixte", dietHealthy: "Frais et legumes",
    activityTitle: "Activite physique?", activityLow: "Sedentaire", activityMod: "Moderee", activityHigh: "Active",
    smokingTitle: "Tabac?", smokingYes: "Oui", smokingOccasional: "Parfois", smokingNo: "Jamais", smokingFormer: "Arrete",
    alcoholTitle: "Alcool?", alcoholDaily: "Quotidien", alcoholWeekly: "Hebdomadaire", alcoholRarely: "Rarement", alcoholNever: "Jamais",
    familyTitle: "Antecedents familiaux?", familyHypertension: "Hypertension", familyDiabetes: "Diabete", familyHeart: "Maladie cardiaque", familyCancer: "Cancer", familyNone: "Aucun",
    stressTitle: "Niveau de stress?", stressHigh: "Eleve", stressMod: "Modere", stressLow: "Faible",
    sleepTitle: "Heures de sommeil?", sleepLow: "Moins de 5", sleepMod: "5 a 7", sleepGood: "7 a 9",
    waterTitle: "Eau quotidienne?", waterLow: "Moins de 3 verres", waterMod: "3 a 6", waterGood: "7+",
    bloodPressure: "Tension Arterielle", bpSystolic: "Systolique", bpDiastolic: "Diastolique",
    bloodSugar: "Glycemie (mg/dL)", weight: "Poids (kg)", height: "Taille (cm)", cholesterol: "Cholesterol (mg/dL)",
    numbersHint: "Remplissez ce que vous savez", symptomsLabel: "Decrivez vos symptomes",
    symptomsPlaceholder: "ex: maux de tete persistants depuis 2 semaines...",
    multilingualNote: "Disponible en English, Francais et Ikinyarwanda",
  },
  rw: {
    login: "Injira", register: "Iyandikishe", name: "Amazina yombi", email: "Imeyili",
    password: "Ijambo ry'ibanga", welcomeBack: "MURAKAZA NEZA", joinUs: "INJIRA MURI TAMBUA",
    welcomeSub: "Injira ukomeze urugendo rw'ubuzima", joinSub: "Tangira kumva ubuzima bwawe uyu munsi",
    noAccount: "Nta konti ufite?", hasAccount: "Usanzwe ufite konti?", signUp: "Iyandikishe", signIn: "Injira",
    tagline: "MENYA\nUBUZIMA BWAWE", tagSub: "Menya. Umve. Ukore.",
    heroDesc: "Dufasha urubyiruko rw'Abanyafrika kumva ibyago by'indwara zidakira binyuze mu bumenyi bukoreshwa na AI.",
    getStarted: "Tangira",
    stat1: "71%", stat1Label: "by'urupfu ku isi biterwa na NCD",
    stat2: "#1", stat2Label: "icyica cy'ibanze muri Afurika mu 2030",
    stat3: "10+", stat3Label: "imyaka itandukanye muri Afurika",
    missionTitle: "UBUZIMA BWAWE\nNI INGENZI",
    missionDesc: "Ubuzima bwawe ni ishingiro ry'ubuzima bwiza. Ubuzima aho ufite imbaraga zo gutekereza ku bindi.",
    f1Title: "ISUZUMA\nRY'IBYAGO", f1Desc: "Menya ibyago byawe ku ndwara z'umutima, diyabete n'izindi.",
    f2Title: "GUSOBANURA\nIMIBARE", f2Desc: "Andika imibare y'ubuzima usobanukirwe icyo isobanura.",
    f3Title: "ISUZUMA\nRY'IBIMENYETSO", f3Desc: "Sobanura ibimenyetso byawe umenye ibizamini ukwiriye gusaba.",
    startAssessment: "Tangira", readNumbers: "Andika imibare", describeSymptoms: "Sobanura",
    poweredBy: "Ikoreshwa na Claude AI", disclaimer: "Tambua ntabwo ivura. Igufasha kumva ibyago byawe.",
    step: "Intambwe", of: "kuri", next: "Komeza", back: "Subira", home: "Ahabanza",
    submit: "Kubona Raporo", submitNumbers: "Sobanura", submitSymptoms: "Suzuma",
    analyzing: "Gusesengura", interpreting: "Gusobanura", analyzingSymptoms: "Gusuzuma",
    riskReport: "RAPORO Y'IBYAGO", numbersReport: "IMIBARE YAWE", symptomsReport: "IBIMENYETSO",
    newAssessment: "Isuzuma Rishya", logout: "Sohoka",
    age: "Ufite imyaka ingahe?", sex: "Igitsina?", male: "Gabo", female: "Gore",
    dietTitle: "Imirire yawe?", dietHigh: "Ibiryo byatunganijwe", dietMixed: "Bivanze", dietHealthy: "Ibiryo bishya",
    activityTitle: "Siporo?", activityLow: "Ntacyo", activityMod: "Bisanzwe", activityHigh: "Cyane",
    smokingTitle: "Itabi?", smokingYes: "Yego", smokingOccasional: "Rimwe", smokingNo: "Oya", smokingFormer: "Narabiretse",
    alcoholTitle: "Inzoga?", alcoholDaily: "Buri munsi", alcoholWeekly: "Mu cyumweru", alcoholRarely: "Gake", alcoholNever: "Ntabwo",
    familyTitle: "Amateka y'umuryango?", familyHypertension: "Umuvuduko", familyDiabetes: "Diyabete", familyHeart: "Umutima", familyCancer: "Kanseri", familyNone: "Ntayo",
    stressTitle: "Stress?", stressHigh: "Cyane", stressMod: "Bisanzwe", stressLow: "Gake",
    sleepTitle: "Amasaha y'ibitotsi?", sleepLow: "Munsi ya 5", sleepMod: "5-7", sleepGood: "7-9",
    waterTitle: "Amazi?", waterLow: "Munsi ya 3", waterMod: "3-6", waterGood: "7+",
    bloodPressure: "Umuvuduko w'amaraso", bpSystolic: "Hejuru", bpDiastolic: "Hasi",
    bloodSugar: "Isukari (mg/dL)", weight: "Ibiro (kg)", height: "Uburebure (cm)", cholesterol: "Cholesterol (mg/dL)",
    numbersHint: "Uzuza ibyo uzi", symptomsLabel: "Sobanura ibyo wumva",
    symptomsPlaceholder: "urugero: umutwe n'umunaniro mu byumweru 2...",
    multilingualNote: "Iboneka mu English, Francais, na Ikinyarwanda",
  },
};

const IMGS = {
  hero: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=800&q=80",
  mission: "https://images.unsplash.com/photo-1505751172876-fa1923c5c528?w=800&q=80",
  f1: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?w=600&q=80",
  f2: "https://images.unsplash.com/photo-1666214280557-f1b5022eb634?w=600&q=80",
};

function FadeSection({ children, delay = 0 }) {
  const ref = useRef(null);
  const [vis, setVis] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) { setVis(true); obs.disconnect(); } }, { threshold: 0.15 });
    obs.observe(el);
    return () => obs.disconnect();
  }, []);
  return (
    <div ref={ref} style={{
      opacity: vis ? 1 : 0, transform: vis ? "translateY(0)" : "translateY(30px)",
      transition: `opacity 0.7s ease ${delay}s, transform 0.7s ease ${delay}s`,
    }}>{children}</div>
  );
}

export default function Tambua() {
  const [lang, setLang] = useState("en");
  const [user, setUser] = useState(null);
  const [authMode, setAuthMode] = useState("login");
  const [authForm, setAuthForm] = useState({ name: "", email: "", password: "" });
  const [authError, setAuthError] = useState("");
  const [page, setPage] = useState("home");
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState({});
  const [numbers, setNumbers] = useState({});
  const [symptoms, setSymptoms] = useState("");
  const [result, setResult] = useState("");
  const [loading, setLoading] = useState(false);
  const [demoMode, setDemoMode] = useState(false);
  const [langOpen, setLangOpen] = useState(false);
  const [fade, setFade] = useState(true);
  const t = T[lang];

  useEffect(() => { setFade(false); setTimeout(() => setFade(true), 40); }, [page, step]);

  const nav = (p) => { setPage(p); setResult(""); setStep(0); if (p === "home") { setAnswers({}); setNumbers({}); setSymptoms(""); } };

  const handleAuth = () => {
    setAuthError("");
    if (!authForm.email || !authForm.password) { setAuthError("Please fill in all fields."); return; }
    if (authMode === "register" && !authForm.name) { setAuthError("Please enter your name."); return; }
    setUser({ name: authForm.name || authForm.email.split("@")[0], email: authForm.email });
  };

  const C = {
    bg: "#F4FAF8", white: "#FFFFFF", primary: "#0F8A6B", primaryDk: "#0A6B52",
    primaryDeep: "#064D3B", primaryLt: "#D0EDE4", primaryPale: "#E8F5F0",
    text: "#0E1F1A", textMid: "#3D5A50", textLt: "#6B8C80", textMu: "#94AFA5",
    border: "#D4E8E0", borderLt: "#E8F2ED", accent: "#C8885A",
  };

  const Q = [
    { key: "age", type: "number", label: t.age },
    { key: "sex", type: "select", label: t.sex, opts: [{ v: "male", l: t.male }, { v: "female", l: t.female }] },
    { key: "diet", type: "select", label: t.dietTitle, opts: [{ v: "high", l: t.dietHigh }, { v: "mixed", l: t.dietMixed }, { v: "healthy", l: t.dietHealthy }] },
    { key: "activity", type: "select", label: t.activityTitle, opts: [{ v: "sed", l: t.activityLow }, { v: "mod", l: t.activityMod }, { v: "act", l: t.activityHigh }] },
    { key: "smoking", type: "select", label: t.smokingTitle, opts: [{ v: "yes", l: t.smokingYes }, { v: "occ", l: t.smokingOccasional }, { v: "no", l: t.smokingNo }, { v: "quit", l: t.smokingFormer }] },
    { key: "alcohol", type: "select", label: t.alcoholTitle, opts: [{ v: "daily", l: t.alcoholDaily }, { v: "weekly", l: t.alcoholWeekly }, { v: "rarely", l: t.alcoholRarely }, { v: "never", l: t.alcoholNever }] },
    { key: "family", type: "multi", label: t.familyTitle, opts: [{ v: "hyp", l: t.familyHypertension }, { v: "dia", l: t.familyDiabetes }, { v: "hrt", l: t.familyHeart }, { v: "can", l: t.familyCancer }, { v: "none", l: t.familyNone }] },
    { key: "stress", type: "select", label: t.stressTitle, opts: [{ v: "high", l: t.stressHigh }, { v: "mod", l: t.stressMod }, { v: "low", l: t.stressLow }] },
    { key: "sleep", type: "select", label: t.sleepTitle, opts: [{ v: "low", l: t.sleepLow }, { v: "mod", l: t.sleepMod }, { v: "good", l: t.sleepGood }] },
    { key: "water", type: "select", label: t.waterTitle, opts: [{ v: "low", l: t.waterLow }, { v: "mod", l: t.waterMod }, { v: "good", l: t.waterGood }] },
  ];

  const cq = Q[step];
  const canNext = cq?.type === "number" ? answers[cq.key] > 0 : cq?.type === "multi" ? answers[cq.key]?.length > 0 : !!answers[cq?.key];

  const toggleM = (k, v) => {
    const c = answers[k] || [];
    if (v === "none") { setAnswers({ ...answers, [k]: ["none"] }); return; }
    const f = c.filter(x => x !== "none");
    setAnswers({ ...answers, [k]: f.includes(v) ? f.filter(x => x !== v) : [...f, v] });
  };

  const callAI = async (sys, msg, feature) => {
    setLoading(true);
    try {
      const r = await fetch("https://api.anthropic.com/v1/messages", {
        method: "POST", headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ model: "claude-sonnet-4-20250514", max_tokens: 1000, system: sys, messages: [{ role: "user", content: msg }] }),
      });
      const d = await r.json();
      if (d.content) {
        setResult(d.content.map(b => b.text || "").join(""));
        setDemoMode(false);
      } else {
        throw new Error("No content");
      }
    } catch {
      // Fallback to demo mode with pre-generated responses
      const demo = demoResponses[feature]?.[lang] || demoResponses[feature]?.en || "Demo response unavailable.";
      setResult(demo);
      setDemoMode(true);
    }
    setLoading(false);
  };

  const goRisk = () => {
    const ln = lang === "en" ? "English" : lang === "fr" ? "French" : "Kinyarwanda";
    callAI(
      `You are Tambua, a caring health awareness companion for young Africans. Provide NCD risk awareness, NOT diagnosis. Respond in ${ln}. Be warm, culturally sensitive. Use clear UPPERCASE section headers: OVERALL SUMMARY, KEY RISK FACTORS, PROTECTIVE FACTORS, RECOMMENDED SCREENINGS, ACTIONABLE NEXT STEPS. No emojis. Personal and conversational tone. End with a reminder this is awareness, not diagnosis.`,
      `Profile:\n${JSON.stringify(answers)}\n\nAnalyze my NCD risk factors.`,
      "risk"
    ); nav("risk-results");
  };

  const goNums = () => {
    const ln = lang === "en" ? "English" : lang === "fr" ? "French" : "Kinyarwanda";
    const f = Object.fromEntries(Object.entries(numbers).filter(([_, v]) => v));
    callAI(
      `You are Tambua, a health literacy companion for young Africans. Help understand health numbers in plain language. Respond in ${ln}. For each: what it measures, if normal/borderline/concerning, causes, actions. Use UPPERCASE section headers. No emojis. End with a reminder to see a provider.`,
      `Numbers:\n${JSON.stringify(f)}\n\nExplain these.`,
      "numbers"
    ); nav("numbers-results");
  };

  const goSymp = () => {
    const ln = lang === "en" ? "English" : lang === "fr" ? "French" : "Kinyarwanda";
    callAI(
      `You are Tambua, health awareness companion for young Africans. Help understand symptoms in NCD risk context, NOT diagnose. Respond in ${ln}. UPPERCASE headers: WHAT YOU DESCRIBED, POSSIBLE NCD CONNECTIONS, SCREENINGS TO ASK FOR, WHEN TO SEEK IMMEDIATE CARE, LIFESTYLE FACTORS. No emojis. Warm, culturally aware.`,
      `Symptoms:\n${symptoms}\n\nHelp me understand.`,
      "symptoms"
    ); nav("symptoms-results");
  };

  const fmtResult = (txt) => txt.split("\n").map((l, i) => {
    const hdr = /^[A-Z][A-Z\s]{4,}/.test(l.trim()) || /^\*\*[^*]+\*\*$/.test(l.trim());
    const f = l.replace(/\*\*([^*]+)\*\*/g, "<strong>$1</strong>").replace(/\*([^*]+)\*/g, "<em>$1</em>");
    if (!l.trim()) return <div key={i} style={{ height: 8 }} />;
    return <p key={i} style={{ margin: "4px 0", fontSize: hdr ? 13 : 14, fontWeight: hdr ? 700 : 400, color: hdr ? C.primaryDeep : C.text, lineHeight: 1.7, letterSpacing: hdr ? 1.5 : 0, borderBottom: hdr ? `1px solid ${C.borderLt}` : "none", paddingBottom: hdr ? 6 : 0, marginTop: hdr ? 18 : 4, textTransform: hdr ? "uppercase" : "none" }} dangerouslySetInnerHTML={{ __html: f }} />;
  });

  // AUTH SCREEN
  if (!user) return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;700&display=swap');
        * { box-sizing: border-box; margin: 0; padding: 0; }
      `}</style>
      <div style={{ fontFamily: "'DM Sans', sans-serif", minHeight: "100vh", background: C.bg, display: "flex", flexDirection: "column", maxWidth: 480, margin: "0 auto" }}>
        <div style={{ padding: "16px 24px", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <span style={{ fontSize: 20, fontWeight: 700, color: C.primaryDk, letterSpacing: -0.5 }}>Tambua</span>
          <select value={lang} onChange={e => setLang(e.target.value)} style={{ padding: "6px 12px", border: `1.5px solid ${C.border}`, borderRadius: 8, background: C.white, fontSize: 13, fontWeight: 600, color: C.primaryDk, fontFamily: "inherit", cursor: "pointer" }}>
            <option value="en">English</option><option value="fr">Francais</option><option value="rw">Ikinyarwanda</option>
          </select>
        </div>
        <div style={{ flex: 1, display: "flex", flexDirection: "column", justifyContent: "center", padding: "0 32px 60px" }}>
          <div style={{ textAlign: "center", marginBottom: 40 }}>
            <h1 style={{ fontSize: 28, fontWeight: 700, color: C.text, letterSpacing: -0.5, lineHeight: 1.2 }}>
              {authMode === "login" ? t.welcomeBack : t.joinUs}
            </h1>
            <p style={{ fontSize: 14, color: C.textLt, marginTop: 8 }}>
              {authMode === "login" ? t.welcomeSub : t.joinSub}
            </p>
          </div>
          {authMode === "register" && (
            <input placeholder={t.name} value={authForm.name} onChange={e => setAuthForm({ ...authForm, name: e.target.value })}
              style={{ width: "100%", padding: "14px 16px", marginBottom: 12, border: `1.5px solid ${C.borderLt}`, borderRadius: 12, fontSize: 15, fontFamily: "inherit", outline: "none", background: C.white }} />
          )}
          <input placeholder={t.email} type="email" value={authForm.email} onChange={e => setAuthForm({ ...authForm, email: e.target.value })}
            style={{ width: "100%", padding: "14px 16px", marginBottom: 12, border: `1.5px solid ${C.borderLt}`, borderRadius: 12, fontSize: 15, fontFamily: "inherit", outline: "none", background: C.white }} />
          <input placeholder={t.password} type="password" value={authForm.password} onChange={e => setAuthForm({ ...authForm, password: e.target.value })}
            style={{ width: "100%", padding: "14px 16px", marginBottom: 8, border: `1.5px solid ${C.borderLt}`, borderRadius: 12, fontSize: 15, fontFamily: "inherit", outline: "none", background: C.white }} />
          {authError && <p style={{ color: "#c0392b", fontSize: 13, margin: "4px 0 8px" }}>{authError}</p>}
          <button onClick={handleAuth} style={{ width: "100%", padding: "14px", background: C.primary, color: "white", border: "none", borderRadius: 12, fontSize: 15, fontWeight: 700, cursor: "pointer", fontFamily: "inherit", marginTop: 12, transition: "background 0.2s" }}
            onMouseEnter={e => e.target.style.background = C.primaryDk} onMouseLeave={e => e.target.style.background = C.primary}>
            {authMode === "login" ? t.login : t.register}
          </button>
          <p style={{ textAlign: "center", marginTop: 20, fontSize: 14, color: C.textLt }}>
            {authMode === "login" ? t.noAccount : t.hasAccount}{" "}
            <span style={{ color: C.primary, fontWeight: 700, cursor: "pointer" }} onClick={() => { setAuthMode(authMode === "login" ? "register" : "login"); setAuthError(""); }}>
              {authMode === "login" ? t.signUp : t.signIn}
            </span>
          </p>
        </div>
        <p style={{ textAlign: "center", padding: "20px", fontSize: 11, color: C.textMu }}>{t.multilingualNote}</p>
      </div>
    </>
  );

  // MAIN APP
  const innerPages = ["risk", "numbers", "symptoms", "risk-results", "numbers-results", "symptoms-results"];
  const isInner = innerPages.includes(page);

  const input = (props) => ({
    width: "100%", padding: "13px 16px", fontSize: 15, border: `1.5px solid ${C.borderLt}`,
    borderRadius: 12, outline: "none", fontFamily: "'DM Sans', sans-serif", background: C.white, color: C.text, ...props,
  });

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;700&display=swap');
        @keyframes spin { to { transform: rotate(360deg) } }
        input[type=number]::-webkit-inner-spin-button, input[type=number]::-webkit-outer-spin-button { -webkit-appearance: none; }
        input[type=number] { -moz-appearance: textfield; }
        * { box-sizing: border-box; margin: 0; padding: 0; }
        .t-opt:hover { background: ${C.primaryPale} !important; }
        .t-container { width: 100%; max-width: 1200px; margin: 0 auto; }
        .t-hero-img { width: 100%; height: 300px; object-fit: cover; display: block; filter: brightness(0.35); }
        .t-hero-inner { position: absolute; inset: 0; display: flex; flex-direction: column; justify-content: flex-end; padding: 0 40px 40px; }
        .t-hero-h1 { font-size: 48px; font-weight: 700; color: white; line-height: 1; letter-spacing: -1.5px; white-space: pre-line; }
        .t-desc-section { display: flex; align-items: center; gap: 40px; padding: 48px 40px; }
        .t-desc-text { flex: 1; }
        .t-stats { display: flex; gap: 1px; background: ${C.borderLt}; }
        .t-stats > div { flex: 1; padding: 32px 24px; text-align: center; }
        .t-features { display: flex; flex-direction: row; min-height: 260px; border-top: 1px solid ${C.borderLt}; }
        .t-features img { width: 45%; object-fit: cover; }
        .t-features-body { flex: 1; padding: 36px 32px; display: flex; flex-direction: column; justify-content: center; }
        .t-form-container { max-width: 600px; margin: 0 auto; padding: 0 24px; }
        .t-result-container { max-width: 700px; margin: 0 auto; }
        .t-auth-container { max-width: 440px; margin: 0 auto; padding: 0 32px; }
        .t-nav-inner { max-width: 1200px; margin: 0 auto; width: 100%; display: flex; justify-content: space-between; align-items: center; }
        .t-mission { padding: 64px 40px; text-align: center; }
        .t-mission h2 { font-size: 32px; }
        .t-mission p { max-width: 500px; margin: 20px auto 0; }
        @media (max-width: 768px) {
          .t-hero-img { height: 240px; }
          .t-hero-inner { padding: 0 24px 28px; }
          .t-hero-h1 { font-size: 36px; }
          .t-desc-section { flex-direction: column; gap: 20px; padding: 32px 24px; }
          .t-stats > div { padding: 24px 16px; }
          .t-features { flex-direction: column !important; }
          .t-features img { width: 100%; height: 180px; }
          .t-features-body { padding: 24px 20px; }
          .t-mission { padding: 40px 24px; }
          .t-mission h2 { font-size: 24px; }
        }
        @media (max-width: 480px) {
          .t-hero-img { height: 200px; }
          .t-hero-h1 { font-size: 30px; }
          .t-desc-section { padding: 28px 20px; }
          .t-stats > div { padding: 20px 12px; }
        }
      `}</style>
      <div style={{ fontFamily: "'DM Sans', sans-serif", minHeight: "100vh", background: C.bg, color: C.text }}>
        {/* NAV */}
        <div style={{ background: "rgba(244,250,248,0.95)", backdropFilter: "blur(10px)", position: "sticky", top: 0, zIndex: 10, borderBottom: `1px solid ${C.borderLt}`, padding: "14px 24px" }}>
          <div className="t-nav-inner">
          <span style={{ fontSize: 20, fontWeight: 700, color: C.primaryDk, cursor: "pointer", letterSpacing: -0.5 }} onClick={() => nav("home")}>Tambua</span>
          <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
            <div style={{ position: "relative" }}>
              <div onClick={() => setLangOpen(!langOpen)} style={{ padding: "5px 12px", border: `1.5px solid ${C.border}`, borderRadius: 8, background: C.white, cursor: "pointer", fontSize: 13, fontWeight: 600, color: C.primaryDk }}>
                {lang === "en" ? "English" : lang === "fr" ? "Francais" : "Ikinyarwanda"} ▾
              </div>
              {langOpen && <div style={{ position: "absolute", top: "calc(100% + 4px)", right: 0, background: C.white, borderRadius: 10, boxShadow: "0 8px 30px rgba(0,0,0,0.1)", overflow: "hidden", minWidth: 140, zIndex: 20, border: `1px solid ${C.borderLt}` }}>
                {[["en","English"], ["fr","Francais"], ["rw","Ikinyarwanda"]].map(([c,n]) => <div key={c} className="t-opt" onClick={() => { setLang(c); setLangOpen(false); }} style={{ padding: "10px 14px", cursor: "pointer", fontSize: 13, fontWeight: lang === c ? 700 : 500, color: lang === c ? C.primaryDk : C.textMid, background: lang === c ? C.primaryPale : C.white }}>{n}</div>)}
              </div>}
            </div>
            <div onClick={() => { setUser(null); nav("home"); }} style={{ padding: "5px 12px", cursor: "pointer", fontSize: 12, fontWeight: 600, color: C.textLt }}>{t.logout}</div>
          </div>
          </div>
        </div>

        <div style={{ opacity: fade ? 1 : 0, transform: fade ? "translateY(0)" : "translateY(6px)", transition: "opacity 0.3s, transform 0.3s" }}>

        {/* HOME */}
        {page === "home" && <>
          {/* HERO */}
          <div style={{ position: "relative", overflow: "hidden" }}>
            <img src={IMGS.hero} alt="" className="t-hero-img" />
            <div className="t-hero-inner">
              <FadeSection>
                <h1 className="t-hero-h1">{t.tagline}</h1>
                <p style={{ fontSize: 14, color: "rgba(255,255,255,0.7)", marginTop: 8, fontWeight: 500 }}>{t.tagSub}</p>
              </FadeSection>
            </div>
          </div>

          {/* DESCRIPTION */}
          <FadeSection delay={0.1}>
            <div className="t-desc-section">
              <div className="t-desc-text">
                <p style={{ fontSize: 16, color: C.textMid, lineHeight: 1.7 }}>{t.heroDesc}</p>
                <button onClick={() => nav("risk")} style={{ marginTop: 24, padding: "14px 40px", background: C.primary, color: "white", border: "none", borderRadius: 24, fontSize: 15, fontWeight: 700, cursor: "pointer", fontFamily: "inherit" }}
                  onMouseEnter={e => e.target.style.background = C.primaryDk} onMouseLeave={e => e.target.style.background = C.primary}>
                  {t.getStarted} →
                </button>
              </div>
            </div>
          </FadeSection>

          {/* STATS */}
          <FadeSection delay={0.15}>
            <div className="t-stats">
              {[[t.stat1, t.stat1Label], [t.stat2, t.stat2Label], [t.stat3, t.stat3Label]].map(([n, l], i) => (
                <div key={i} style={{ background: C.white }}>
                  <div style={{ fontSize: 36, fontWeight: 700, color: C.primary, letterSpacing: -1 }}>{n}</div>
                  <div style={{ fontSize: 11, color: C.textLt, marginTop: 6, lineHeight: 1.4, textTransform: "uppercase", letterSpacing: 0.5 }}>{l}</div>
                </div>
              ))}
            </div>
          </FadeSection>

          {/* MISSION */}
          <FadeSection delay={0.15}>
            <div className="t-mission">
              <h2 style={{ fontWeight: 700, color: C.text, lineHeight: 1.2, letterSpacing: -0.5, whiteSpace: "pre-line" }}>{t.missionTitle}</h2>
              <p style={{ fontSize: 15, color: C.textLt, lineHeight: 1.7 }}>{t.missionDesc}</p>
            </div>
          </FadeSection>

          {/* FEATURES */}
          {[
            { key: "risk", img: IMGS.f1, title: t.f1Title, desc: t.f1Desc, btn: t.startAssessment },
            { key: "numbers", img: IMGS.f2, title: t.f2Title, desc: t.f2Desc, btn: t.readNumbers },
            { key: "symptoms", img: null, title: t.f3Title, desc: t.f3Desc, btn: t.describeSymptoms },
          ].map((f, i) => (
            <FadeSection key={f.key} delay={0.1}>
              <div className="t-features" style={{ flexDirection: i % 2 === 0 ? "row" : "row-reverse" }}>
                {f.img && <img src={f.img} alt="" />}
                <div className="t-features-body" style={{ background: i === 2 ? C.primaryPale : C.white }}>
                  <h3 style={{ fontSize: 20, fontWeight: 700, color: C.text, lineHeight: 1.2, letterSpacing: -0.3, whiteSpace: "pre-line" }}>{f.title}</h3>
                  <p style={{ fontSize: 14, color: C.textLt, lineHeight: 1.6, marginTop: 12 }}>{f.desc}</p>
                  <button onClick={() => nav(f.key)} style={{ marginTop: 18, padding: "11px 24px", background: "transparent", border: `1.5px solid ${C.primary}`, borderRadius: 20, fontSize: 14, fontWeight: 600, color: C.primary, cursor: "pointer", fontFamily: "inherit", alignSelf: "flex-start" }}>
                    {f.btn} →
                  </button>
                </div>
              </div>
            </FadeSection>
          ))}

          {/* DISCLAIMER */}
          <FadeSection delay={0.05}>
            <div style={{ maxWidth: 800, margin: "32px auto", padding: "16px 24px", borderRadius: 12, background: "#FFFBF3", border: "1px solid #F0DFB8", fontSize: 13, color: "#7A6230", lineHeight: 1.6 }}>
              {t.disclaimer}
            </div>
          </FadeSection>
        </>}

        {/* RISK ASSESSMENT */}
        {page === "risk" && <div className="t-form-container" style={{ paddingBottom: 60 }}>
          <button onClick={() => step === 0 ? nav("home") : setStep(step - 1)} style={{ background: "none", border: "none", cursor: "pointer", color: C.primary, fontWeight: 600, fontSize: 14, padding: "16px 24px", fontFamily: "inherit" }}>
            ← {step === 0 ? t.home : t.back}
          </button>
          <div style={{ padding: "0 24px 4px" }}>
            <h2 style={{ fontSize: 20, fontWeight: 700, color: C.primaryDk, letterSpacing: -0.3 }}>{t.f1Title.replace("\n", " ")}</h2>
            <p style={{ fontSize: 12, color: C.textMu, fontWeight: 600, marginTop: 6 }}>{t.step} {step + 1} {t.of} {Q.length}</p>
          </div>
          <div style={{ display: "flex", gap: 3, padding: "8px 24px 24px" }}>
            {Q.map((_, i) => <div key={i} style={{ height: 3, flex: 1, borderRadius: 2, background: i <= step ? C.primary : C.borderLt, transition: "background 0.3s" }} />)}
          </div>
          <h3 style={{ fontSize: 18, fontWeight: 700, color: C.text, padding: "0 24px", marginBottom: 18, lineHeight: 1.4 }}>{cq.label}</h3>
          {cq.type === "number" && <div style={{ padding: "0 24px" }}>
            <input type="number" style={input()} value={answers[cq.key] || ""} placeholder="..." onChange={e => setAnswers({ ...answers, [cq.key]: e.target.value })} />
          </div>}
          {cq.type === "select" && cq.opts.map(o => (
            <div key={o.v} className="t-opt" onClick={() => setAnswers({ ...answers, [cq.key]: o.v })} style={{ display: "block", margin: "0 24px 10px", padding: "14px 18px", border: `2px solid ${answers[cq.key] === o.v ? C.primary : C.borderLt}`, borderRadius: 12, cursor: "pointer", background: answers[cq.key] === o.v ? C.primaryPale : C.white, fontSize: 15, fontWeight: answers[cq.key] === o.v ? 600 : 400, color: answers[cq.key] === o.v ? C.primaryDk : C.textMid, transition: "all 0.15s" }}>
              {o.l}
            </div>
          ))}
          {cq.type === "multi" && cq.opts.map(o => {
            const s = (answers[cq.key] || []).includes(o.v);
            return <div key={o.v} className="t-opt" onClick={() => toggleM(cq.key, o.v)} style={{ display: "block", margin: "0 24px 10px", padding: "14px 18px", border: `2px solid ${s ? C.primary : C.borderLt}`, borderRadius: 12, cursor: "pointer", background: s ? C.primaryPale : C.white, fontSize: 15, fontWeight: s ? 600 : 400, color: s ? C.primaryDk : C.textMid }}>{o.l}</div>;
          })}
          <div style={{ padding: "20px 24px 0" }}>
            <button disabled={!canNext} onClick={() => step < Q.length - 1 ? setStep(step + 1) : goRisk()} style={{ width: "100%", padding: "14px", background: canNext ? C.primary : "#8BBFB0", color: "white", border: "none", borderRadius: 12, fontSize: 15, fontWeight: 700, cursor: canNext ? "pointer" : "default", fontFamily: "inherit" }}>
              {step < Q.length - 1 ? t.next : t.submit}
            </button>
          </div>
        </div>}

        {/* NUMBERS */}
        {page === "numbers" && <div className="t-form-container" style={{ paddingBottom: 60 }}>
          <button onClick={() => nav("home")} style={{ background: "none", border: "none", cursor: "pointer", color: C.primary, fontWeight: 600, fontSize: 14, padding: "16px 24px", fontFamily: "inherit" }}>← {t.home}</button>
          <div style={{ padding: "0 24px 20px" }}>
            <h2 style={{ fontSize: 20, fontWeight: 700, color: C.primaryDk }}>{t.f2Title.replace("\n", " ")}</h2>
            <p style={{ fontSize: 13, color: C.textLt, marginTop: 6 }}>{t.numbersHint}</p>
          </div>
          {[
            { label: t.bloodPressure, fields: [{ k: "systolic", p: t.bpSystolic }, { k: "diastolic", p: t.bpDiastolic }] },
            { label: t.bloodSugar, fields: [{ k: "bloodSugar", p: "e.g. 95" }] },
            { label: `${t.weight} / ${t.height}`, fields: [{ k: "weight", p: t.weight }, { k: "height", p: t.height }] },
            { label: t.cholesterol, fields: [{ k: "cholesterol", p: "e.g. 200" }] },
          ].map((g, i) => (
            <div key={i} style={{ padding: "0 24px", marginBottom: 18 }}>
              <label style={{ fontSize: 11, fontWeight: 700, color: C.textLt, textTransform: "uppercase", letterSpacing: 0.8, display: "block", marginBottom: 6 }}>{g.label}</label>
              <div style={{ display: "flex", gap: 10 }}>
                {g.fields.map(f => <input key={f.k} type="number" placeholder={f.p} style={input({ fontSize: 14 })} value={numbers[f.k] || ""} onChange={e => setNumbers({ ...numbers, [f.k]: e.target.value })} />)}
              </div>
            </div>
          ))}
          <div style={{ padding: "0 24px" }}>
            <button disabled={!Object.values(numbers).some(v => v)} onClick={() => Object.values(numbers).some(v => v) && goNums()} style={{ width: "100%", padding: "14px", background: Object.values(numbers).some(v => v) ? C.primary : "#8BBFB0", color: "white", border: "none", borderRadius: 12, fontSize: 15, fontWeight: 700, cursor: "pointer", fontFamily: "inherit" }}>{t.submitNumbers}</button>
          </div>
        </div>}

        {/* SYMPTOMS */}
        {page === "symptoms" && <div className="t-form-container" style={{ paddingBottom: 60 }}>
          <button onClick={() => nav("home")} style={{ background: "none", border: "none", cursor: "pointer", color: C.primary, fontWeight: 600, fontSize: 14, padding: "16px 24px", fontFamily: "inherit" }}>← {t.home}</button>
          <div style={{ padding: "0 24px 20px" }}>
            <h2 style={{ fontSize: 20, fontWeight: 700, color: C.primaryDk }}>{t.f3Title.replace("\n", " ")}</h2>
          </div>
          <div style={{ padding: "0 24px" }}>
            <label style={{ fontSize: 11, fontWeight: 700, color: C.textLt, textTransform: "uppercase", letterSpacing: 0.8, display: "block", marginBottom: 6 }}>{t.symptomsLabel}</label>
            <textarea style={{ ...input({ fontSize: 14 }), resize: "vertical", minHeight: 130, lineHeight: 1.6 }} value={symptoms} onChange={e => setSymptoms(e.target.value)} placeholder={t.symptomsPlaceholder} />
          </div>
          <div style={{ padding: "16px 24px 0" }}>
            <button disabled={!symptoms.trim()} onClick={() => symptoms.trim() && goSymp()} style={{ width: "100%", padding: "14px", background: symptoms.trim() ? C.primary : "#8BBFB0", color: "white", border: "none", borderRadius: 12, fontSize: 15, fontWeight: 700, cursor: "pointer", fontFamily: "inherit" }}>{t.submitSymptoms}</button>
          </div>
          <div style={{ margin: "20px 24px", padding: "14px 18px", borderRadius: 12, background: "#FFFBF3", border: "1px solid #F0DFB8", fontSize: 13, color: "#7A6230", lineHeight: 1.6 }}>{t.disclaimer}</div>
        </div>}

        {/* RESULTS */}
        {["risk-results", "numbers-results", "symptoms-results"].includes(page) && <div className="t-result-container" style={{ padding: "0 24px 60px" }}>
          <button onClick={() => nav("home")} style={{ background: "none", border: "none", cursor: "pointer", color: C.primary, fontWeight: 600, fontSize: 14, padding: "16px 24px", fontFamily: "inherit" }}>← {t.home}</button>
          <div style={{ padding: "0 24px 8px" }}>
            <h2 style={{ fontSize: 20, fontWeight: 700, color: C.primaryDk }}>
              {page === "risk-results" ? t.riskReport : page === "numbers-results" ? t.numbersReport : t.symptomsReport}
            </h2>
          </div>
          {loading ? (
            <div style={{ display: "flex", flexDirection: "column", alignItems: "center", padding: "80px 0", gap: 16 }}>
              <div style={{ width: 36, height: 36, border: `3px solid ${C.primaryLt}`, borderTopColor: C.primary, borderRadius: "50%", animation: "spin 0.8s linear infinite" }} />
              <p style={{ fontSize: 14, color: C.primary, fontWeight: 600 }}>
                {page === "risk-results" ? t.analyzing : page === "numbers-results" ? t.interpreting : t.analyzingSymptoms}...
              </p>
            </div>
          ) : <>
            <div style={{ margin: "0 20px", background: C.white, borderRadius: 14, padding: "22px 20px", border: `1px solid ${C.borderLt}` }}>{fmtResult(result)}</div>
            <div style={{ margin: "16px 20px", padding: "14px 18px", borderRadius: 12, background: "#FFFBF3", border: "1px solid #F0DFB8", fontSize: 13, color: "#7A6230", lineHeight: 1.6 }}>{t.disclaimer}</div>
            <div style={{ display: "flex", gap: 10, padding: "8px 24px" }}>
              <button onClick={() => nav("home")} style={{ flex: 1, padding: "13px", border: `1.5px solid ${C.border}`, borderRadius: 12, background: C.white, fontSize: 14, fontWeight: 600, color: C.textMid, cursor: "pointer", fontFamily: "inherit" }}>{t.home}</button>
              <button onClick={() => { setAnswers({}); setNumbers({}); setSymptoms(""); nav("home"); }} style={{ flex: 1, padding: "13px", border: "none", borderRadius: 12, background: C.primary, fontSize: 14, fontWeight: 600, color: "white", cursor: "pointer", fontFamily: "inherit" }}>{t.newAssessment}</button>
            </div>
          </>}
        </div>}

        </div>
      </div>
    </>
  );
}
