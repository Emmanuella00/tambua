/**
 * Demo Mode Responses
 *
 * Realistic pre-generated reports for when the Claude API
 * is unavailable (no API key or network issues).
 * These demonstrate exactly what the live AI produces.
 */

const demoResponses = {
  risk: {
    en: `OVERALL SUMMARY

Based on your health profile, you have a moderate overall risk for developing non-communicable diseases. Several lifestyle factors are working in your favor, but there are areas that deserve your attention — especially given your family history and dietary patterns.

KEY RISK FACTORS

Your family history is the most significant factor here. Having close relatives with hypertension or diabetes means your genetic predisposition is elevated. This does not mean you will develop these conditions, but it means your body may be less forgiving of unhealthy habits compared to someone without this history.

Your diet leans toward processed foods, which in many parts of Africa means high sodium intake from bouillon cubes, packaged snacks, and fried street food. Over time, excess sodium contributes directly to elevated blood pressure.

Your physical activity level is lower than recommended. The WHO suggests at least 150 minutes of moderate activity per week — that is about 20 minutes of brisk walking daily.

PROTECTIVE FACTORS

You do not smoke, which significantly reduces your cardiovascular risk. You also drink alcohol rarely, which protects your liver and cardiovascular system. Your stress management appears reasonable, which helps regulate cortisol and blood pressure.

RECOMMENDED SCREENINGS

At your age, you should get the following checked at least once a year: blood pressure reading (available at most pharmacies for free), fasting blood glucose test, and a basic cholesterol panel. If you have not done these before, start now — knowing your baseline numbers is the first step.

ACTIONABLE NEXT STEPS

Start with small, sustainable changes. Reduce your use of salt and bouillon cubes in cooking by half. Walk briskly for 20 minutes each day — even walking to class or the market counts. Drink at least 6 glasses of water daily. Get your blood pressure checked this week at any local pharmacy. Share your family health history with a healthcare provider so they can advise you personally.

This report is for awareness purposes only and is not a medical diagnosis. Please consult a healthcare provider to discuss your risk factors and get personalized medical advice.`,

    fr: `RESUME GENERAL

D'apres votre profil de sante, vous presentez un risque modere de developper des maladies non transmissibles. Plusieurs facteurs de votre mode de vie jouent en votre faveur, mais certains domaines meritent votre attention, notamment vos antecedents familiaux et vos habitudes alimentaires.

FACTEURS DE RISQUE CLES

Vos antecedents familiaux sont le facteur le plus significatif. Avoir des proches atteints d'hypertension ou de diabete signifie que votre predisposition genetique est elevee. Cela ne veut pas dire que vous developperez ces conditions, mais votre corps pourrait etre moins tolerant aux mauvaises habitudes.

Votre alimentation penche vers les aliments transformes, ce qui en Afrique signifie souvent une consommation elevee de sodium provenant des cubes de bouillon, des collations emballees et des fritures. A long terme, l'exces de sodium contribue directement a l'elevation de la tension arterielle.

FACTEURS PROTECTEURS

Vous ne fumez pas, ce qui reduit considerablement votre risque cardiovasculaire. Vous consommez rarement de l'alcool, ce qui protege votre foie et votre systeme cardiovasculaire.

DEPISTAGES RECOMMANDES

A votre age, faites verifier au moins une fois par an: votre tension arterielle, votre glycemie a jeun, et un bilan lipidique de base.

PROCHAINES ETAPES

Commencez par des changements petits et durables. Reduisez de moitie votre utilisation de sel et de cubes de bouillon. Marchez 20 minutes par jour. Buvez au moins 6 verres d'eau par jour. Faites verifier votre tension arterielle cette semaine.

Ce rapport est uniquement a des fins de sensibilisation et ne constitue pas un diagnostic medical.`,

    rw: `INCAMAKE RUSANGE

Dukurikije umwirondoro w'ubuzima bwawe, ufite ibyago bisanzwe byo kurwara indwara zidakira. Ibintu byinshi mu mibereho yawe bikurinda, ariko hari aho ugomba kwitaho — cyane cyane amateka y'umuryango wawe n'imirire yawe.

IBYAGO BY'INGENZI

Amateka y'umuryango wawe ni ikintu cy'ingenzi cyane. Kugira abavandimwe bafite umuvuduko w'amaraso cyangwa diyabete bisobanura ko ufite ibyago bishobora kuba byinshi. Ibyo ntibisobanura ko uzarwara izi ndwara, ariko bisobanura ko umubiri wawe ushobora kutihangana n'imyitwarire mibi.

IBYIZA BIKURINDA

Ntabwo unywa itabi, ibyo bigabanya cyane ibyago by'indwara z'umutima. Unywa inzoga gake, ibyo birinda umwijima wawe.

IBIZAMINI BISABWA

Ku myaka yawe, ugomba gusuzumisha nibura rimwe mu mwaka: umuvuduko w'amaraso, isukari mu maraso, na cholesterol.

INTAMBWE ZIKURIKIRA

Tangira n'impinduka nto ariko zirambye. Gabanya umunyu n'ibicuruzwa by'amashu mu guteka. Genda n'amaguru iminota 20 buri munsi. Nywa nibura ibirahure 6 by'amazi buri munsi.

Iyi raporo ni iy'ubumenyi gusa ntabwo ari ignostic y'ubuvuzi. Mujye mubaza umuganga wanyu.`,
  },

  numbers: {
    en: `BLOOD PRESSURE — 135/88 mmHg

Your blood pressure reading of 135 over 88 falls into what doctors call Stage 1 Hypertension. Think of your blood vessels like a garden hose — 135/88 means the water pressure is slightly higher than it should be. Not an emergency, but not something to ignore either.

A normal reading is below 120/80. Yours is elevated on both numbers. The top number (systolic, 135) measures pressure when your heart beats, and the bottom number (diastolic, 88) measures pressure when your heart rests between beats. Both being elevated suggests your heart is working harder than ideal.

What could cause this: excess salt in your diet, stress, lack of physical activity, or family genetics. In many African diets, bouillon cubes and processed seasonings add significant sodium without us realizing it.

What to do: Get this checked again in one week to confirm it was not a one-time spike. If it stays above 130/85, see a healthcare provider. Meanwhile, reduce salt intake and walk briskly for 20 minutes daily.

BLOOD SUGAR — 95 mg/dL

Your fasting blood sugar of 95 is within the normal range (70-99 mg/dL). This is good news — your body is processing sugar effectively right now.

However, you are at the upper end of normal. Think of it like a fuel gauge — you are not in the danger zone, but you are closer to the line than you might want to be.

What to do: Maintain this by limiting sugary drinks and refined carbohydrates. Get tested again in 6 months to make sure the trend stays stable.

Please discuss these results with a healthcare provider who can give you personalized medical guidance based on your full health picture.`,

    fr: `TENSION ARTERIELLE — 135/88 mmHg

Votre tension de 135 sur 88 correspond a ce que les medecins appellent une hypertension de stade 1. Pensez a vos vaisseaux sanguins comme un tuyau d'arrosage — 135/88 signifie que la pression est legerement plus elevee qu'elle ne devrait l'etre.

Une lecture normale est inferieure a 120/80. Les deux chiffres sont eleves. Le chiffre du haut (systolique, 135) mesure la pression quand le coeur bat, et le chiffre du bas (diastolique, 88) mesure la pression au repos.

Que faire: Faites verifier a nouveau dans une semaine. Si cela reste au-dessus de 130/85, consultez un professionnel de sante. Reduisez le sel et marchez 20 minutes par jour.

GLYCEMIE — 95 mg/dL

Votre glycemie de 95 est dans la plage normale (70-99 mg/dL). Votre corps traite le sucre efficacement.

Cependant, vous etes a la limite superieure de la normale. Maintenez cela en limitant les boissons sucrees.

Veuillez discuter de ces resultats avec un professionnel de sante.`,

    rw: `UMUVUDUKO W'AMARASO — 135/88 mmHg

Umuvuduko w'amaraso yawe wa 135 kuri 88 ugaragaza umuvuduko w'amaraso uri hejuru gato. Tekereza imitsi y'amaraso yawe nk'ipompe y'amazi — 135/88 bisobanura ko pressure iri hejuru gato kurenza uko bigomba kumera.

Umubare usanzwe uri munsi ya 120/80. Ibyawe byombi biri hejuru.

Icyo wakora: Subiramo isuzuma mu cyumweru kimwe. Niba bikomeje kuba hejuru ya 130/85, gana umuganga. Gabanya umunyu kandi ugende n'amaguru iminota 20 buri munsi.

ISUKARI MU MARASO — 95 mg/dL

Isukari yawe ya 95 iri mu rugero rusanzwe (70-99 mg/dL). Umubiri wawe ukora neza mu gutunganya isukari.

Mujye mubaza umuganga wanyu kugira ngo abahe inama zihariye.`,
  },

  symptoms: {
    en: `WHAT YOU DESCRIBED

You have been experiencing persistent headaches and fatigue over the past two weeks. These symptoms are consistent and ongoing rather than occasional, which means they deserve attention.

POSSIBLE NCD CONNECTIONS

Persistent headaches combined with fatigue are among the most common early warning signs of elevated blood pressure (hypertension). Hypertension is often called the "silent killer" because many people live with it for years without knowing. The headaches typically occur at the back of the head and may be worse in the morning.

Fatigue alone can also signal blood sugar irregularities. When blood glucose levels fluctuate — either too high or too low — your body struggles to maintain energy. This is particularly relevant if diabetes runs in your family.

Chronic stress and poor sleep can also produce both symptoms simultaneously, and these lifestyle factors are themselves risk factors for NCDs.

SCREENINGS TO ASK FOR

Based on what you described, request these specific tests at your next healthcare visit: blood pressure measurement (quick and free at most pharmacies), fasting blood glucose test, complete blood count to rule out anemia (a common cause of fatigue, especially in women), and thyroid function test if fatigue persists.

WHEN TO SEEK IMMEDIATE CARE

Go to a health facility right away if you experience: sudden severe headache unlike anything you have felt before, headache with vision changes or confusion, chest pain or shortness of breath alongside the fatigue, or fainting or dizziness.

LIFESTYLE FACTORS TO CONSIDER

While you get screened, these changes can help: ensure you are sleeping 7 to 9 hours per night, drink at least 6 glasses of water daily as dehydration alone causes headaches and fatigue, reduce screen time before bed, and take short walking breaks throughout your day.

This analysis is for awareness purposes only and is not a medical diagnosis. Please visit a healthcare provider to discuss your symptoms and get proper evaluation.`,

    fr: `CE QUE VOUS AVEZ DECRIT

Vous avez des maux de tete persistants et de la fatigue depuis deux semaines. Ces symptomes meritent attention.

CONNEXIONS POSSIBLES AVEC LES MNT

Les maux de tete persistants combines a la fatigue sont parmi les signes avant-coureurs les plus courants de l'hypertension arterielle. L'hypertension est souvent appelee le "tueur silencieux" car beaucoup vivent avec pendant des annees sans le savoir.

La fatigue seule peut egalement signaler des irregularites de glycemie.

DEPISTAGES A DEMANDER

Demandez: mesure de la tension arterielle, glycemie a jeun, numeration globulaire complete, et test de la fonction thyroidienne si la fatigue persiste.

QUAND CHERCHER DES SOINS IMMEDIATS

Allez immediatement dans un etablissement de sante si vous ressentez: un mal de tete severe soudain, des changements de vision, des douleurs thoraciques, ou des evanouissements.

FACTEURS DE MODE DE VIE

Dormez 7 a 9 heures par nuit, buvez au moins 6 verres d'eau par jour, et prenez des pauses de marche.

Cette analyse est uniquement a des fins de sensibilisation et ne constitue pas un diagnostic medical.`,

    rw: `IBYO WASOBANUYE

Ufite ibibazo by'umutwe bihoraho n'umunaniro mu byumweru 2 bishize. Ibimenyetso nk'ibi bisaba kwitabwaho.

ISANO ISHOBOKA NA NCD

Ibibazo by'umutwe bihoraho hamwe n'umunaniro ni mu bimenyetso bisanzwe by'umuvuduko w'amaraso uri hejuru. Umuvuduko w'amaraso usanzwe witwa "umuzimu w'icyica" kubera ko abantu benshi babana nawo imyaka myinshi batabimenye.

IBIZAMINI UKWIRIYE GUSABA

Saba: gupima umuvuduko w'amaraso, isukari mu maraso, na complete blood count.

IGIHE CYO GUSHAKA UBUVUZI BYIHUTIRWA

Genda ku bitaro byihutirwa niba wumva: umutwe ukabije utari bwagere, impinduka mu kubona, ububabare mu gatuza, cyangwa kuzimia.

Iri sesengura ni iry'ubumenyi gusa ntabwo ari ignostic y'ubuvuzi.`,
  },
};

export default demoResponses;
