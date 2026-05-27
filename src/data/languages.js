/**
 * Tambua Internationalization
 * Supports: English, French, Kinyarwanda
 *
 * All UI strings and Claude AI responses are generated
 * natively in the selected language — not machine-translated.
 */

const languages = {
  en: {
    // Auth
    login: "Log in", register: "Create account", name: "Full name", email: "Email address",
    password: "Password", welcomeBack: "WELCOME BACK", joinUs: "JOIN TAMBUA",
    welcomeSub: "Sign in to continue your health journey",
    joinSub: "Start understanding your health today",
    noAccount: "Don't have an account?", hasAccount: "Already have an account?",
    signUp: "Sign up", signIn: "Sign in",
    multilingualNote: "Available in English, Francais, and Ikinyarwanda",

    // Home
    tagline: "KNOW YOUR\nHEALTH", tagSub: "Recognize. Understand. Act.",
    heroDesc: "We help young Africans understand their risk for non-communicable diseases through AI-powered health awareness — before it is too late.",
    getStarted: "Get Started",
    stat1: "71%", stat1Label: "of global deaths caused by NCDs",
    stat2: "#1", stat2Label: "projected killer in Africa by 2030",
    stat3: "10+", stat3Label: "years younger onset in Africa",
    missionTitle: "YOUR HEALTH IS\nOUR PRIORITY",
    missionDesc: "Your health is the foundation to a good life. A life where you have the energy to focus on everything else you want and dream of.",
    featuresSectionTitle: "What Tambua can do for you",

    // Features
    f1Title: "PERSONAL\nRISK ASSESSMENT", f1Desc: "Discover your risk for hypertension, diabetes and heart disease based on your lifestyle, diet, and family history.",
    f2Title: "HEALTH\nNUMBER LITERACY", f2Desc: "Enter your blood pressure, blood sugar, or BMI readings and understand what they actually mean — in plain language.",
    f3Title: "SYMPTOM\nSENSE CHECK", f3Desc: "Describe what you are feeling and learn what it could connect to and what screenings to ask for.",
    startAssessment: "Start Assessment", readNumbers: "Enter Numbers", describeSymptoms: "Describe Symptoms",

    // Navigation
    home: "Home", back: "Back", next: "Next", logout: "Log out",
    newAssessment: "New Assessment",

    // Assessment
    step: "Step", of: "of",
    submit: "Get My Risk Report", submitNumbers: "Interpret My Numbers", submitSymptoms: "Analyze Symptoms",
    analyzing: "Analyzing your profile", interpreting: "Interpreting your numbers", analyzingSymptoms: "Analyzing your symptoms",
    riskReport: "YOUR RISK REPORT", numbersReport: "YOUR NUMBERS EXPLAINED", symptomsReport: "YOUR SYMPTOM ANALYSIS",

    // Questions
    age: "How old are you?",
    sex: "What is your biological sex?", male: "Male", female: "Female",
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

    // Numbers
    bloodPressure: "Blood Pressure (mmHg)", bpSystolic: "Systolic (top)", bpDiastolic: "Diastolic (bottom)",
    bloodSugar: "Blood Sugar (mg/dL)", weight: "Weight (kg)", height: "Height (cm)", cholesterol: "Cholesterol (mg/dL)",
    numbersHint: "Fill in what you know — leave the rest blank",

    // Symptoms
    symptomsLabel: "Describe what you are feeling",
    symptomsPlaceholder: "e.g. persistent headaches and fatigue for the past 2 weeks...",

    // Footer
    poweredBy: "Powered by Claude AI",
    disclaimer: "Tambua does not diagnose. It helps you understand your risk and know when to see a healthcare provider.",
  },

  fr: {
    login: "Se connecter", register: "Creer un compte", name: "Nom complet", email: "Adresse email",
    password: "Mot de passe", welcomeBack: "BON RETOUR", joinUs: "REJOIGNEZ TAMBUA",
    welcomeSub: "Connectez-vous pour continuer", joinSub: "Comprenez votre sante des aujourd'hui",
    noAccount: "Pas de compte?", hasAccount: "Deja un compte?", signUp: "S'inscrire", signIn: "Se connecter",
    multilingualNote: "Disponible en English, Francais et Ikinyarwanda",
    tagline: "CONNAISSEZ\nVOTRE SANTE", tagSub: "Reconnaitre. Comprendre. Agir.",
    heroDesc: "Nous aidons les jeunes Africains a comprendre leur risque de maladies non transmissibles grace a l'IA.",
    getStarted: "Commencer",
    stat1: "71%", stat1Label: "des deces mondiaux causes par les MNT",
    stat2: "#1", stat2Label: "tueur projete en Afrique d'ici 2030",
    stat3: "10+", stat3Label: "ans plus jeune en Afrique",
    missionTitle: "VOTRE SANTE EST\nNOTRE PRIORITE",
    missionDesc: "Votre sante est le fondement d'une bonne vie. Une vie ou vous avez l'energie de vous concentrer sur tout ce dont vous revez.",
    featuresSectionTitle: "Ce que Tambua peut faire pour vous",
    f1Title: "EVALUATION\nDES RISQUES", f1Desc: "Decouvrez votre risque d'hypertension, de diabete et de maladie cardiaque.",
    f2Title: "COMPRENDRE\nVOS CHIFFRES", f2Desc: "Entrez vos mesures et comprenez ce qu'elles signifient.",
    f3Title: "ANALYSE DES\nSYMPTOMES", f3Desc: "Decrivez vos symptomes et apprenez quels examens demander.",
    startAssessment: "Commencer", readNumbers: "Entrer les chiffres", describeSymptoms: "Decrire",
    home: "Accueil", back: "Retour", next: "Suivant", logout: "Deconnexion", newAssessment: "Nouvelle Evaluation",
    step: "Etape", of: "de",
    submit: "Obtenir Mon Rapport", submitNumbers: "Interpreter", submitSymptoms: "Analyser",
    analyzing: "Analyse en cours", interpreting: "Interpretation en cours", analyzingSymptoms: "Analyse en cours",
    riskReport: "VOTRE RAPPORT", numbersReport: "VOS CHIFFRES", symptomsReport: "ANALYSE SYMPTOMES",
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
    numbersHint: "Remplissez ce que vous savez",
    symptomsLabel: "Decrivez vos symptomes",
    symptomsPlaceholder: "ex: maux de tete persistants depuis 2 semaines...",
    poweredBy: "Propulse par Claude AI",
    disclaimer: "Tambua ne diagnostique pas. Il vous aide a comprendre vos risques.",
  },

  rw: {
    login: "Injira", register: "Iyandikishe", name: "Amazina yombi", email: "Imeyili",
    password: "Ijambo ry'ibanga", welcomeBack: "MURAKAZA NEZA", joinUs: "INJIRA MURI TAMBUA",
    welcomeSub: "Injira ukomeze urugendo rw'ubuzima", joinSub: "Tangira kumva ubuzima bwawe uyu munsi",
    noAccount: "Nta konti ufite?", hasAccount: "Usanzwe ufite konti?", signUp: "Iyandikishe", signIn: "Injira",
    multilingualNote: "Iboneka mu English, Francais, na Ikinyarwanda",
    tagline: "MENYA\nUBUZIMA BWAWE", tagSub: "Menya. Umve. Ukore.",
    heroDesc: "Dufasha urubyiruko rw'Abanyafrika kumva ibyago by'indwara zidakira binyuze mu bumenyi bukoreshwa na AI.",
    getStarted: "Tangira",
    stat1: "71%", stat1Label: "by'urupfu ku isi biterwa na NCD",
    stat2: "#1", stat2Label: "icyica cy'ibanze muri Afurika mu 2030",
    stat3: "10+", stat3Label: "imyaka itandukanye muri Afurika",
    missionTitle: "UBUZIMA BWAWE\nNI INGENZI",
    missionDesc: "Ubuzima bwawe ni ishingiro ry'ubuzima bwiza. Ubuzima aho ufite imbaraga zo gutekereza ku bindi.",
    featuresSectionTitle: "Icyo Tambua yakumarira",
    f1Title: "ISUZUMA\nRY'IBYAGO", f1Desc: "Menya ibyago byawe ku ndwara z'umutima, diyabete n'izindi.",
    f2Title: "GUSOBANURA\nIMIBARE", f2Desc: "Andika imibare y'ubuzima usobanukirwe icyo isobanura.",
    f3Title: "ISUZUMA\nRY'IBIMENYETSO", f3Desc: "Sobanura ibimenyetso byawe umenye ibizamini ukwiriye gusaba.",
    startAssessment: "Tangira", readNumbers: "Andika imibare", describeSymptoms: "Sobanura",
    home: "Ahabanza", back: "Subira", next: "Komeza", logout: "Sohoka", newAssessment: "Isuzuma Rishya",
    step: "Intambwe", of: "kuri",
    submit: "Kubona Raporo", submitNumbers: "Sobanura", submitSymptoms: "Suzuma",
    analyzing: "Gusesengura", interpreting: "Gusobanura", analyzingSymptoms: "Gusuzuma",
    riskReport: "RAPORO Y'IBYAGO", numbersReport: "IMIBARE YAWE", symptomsReport: "IBIMENYETSO",
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
    numbersHint: "Uzuza ibyo uzi",
    symptomsLabel: "Sobanura ibyo wumva",
    symptomsPlaceholder: "urugero: umutwe n'umunaniro mu byumweru 2...",
    poweredBy: "Ikoreshwa na Claude AI",
    disclaimer: "Tambua ntabwo ivura. Igufasha kumva ibyago byawe.",
  },
};

export default languages;
