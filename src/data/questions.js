/**
 * Generates the risk assessment questions array
 * based on the current language translations.
 */
export function getQuestions(t) {
  return [
    { key: "age", type: "number", label: t.age },
    { key: "sex", type: "select", label: t.sex, opts: [
      { v: "male", l: t.male }, { v: "female", l: t.female },
    ]},
    { key: "diet", type: "select", label: t.dietTitle, opts: [
      { v: "high", l: t.dietHigh }, { v: "mixed", l: t.dietMixed }, { v: "healthy", l: t.dietHealthy },
    ]},
    { key: "activity", type: "select", label: t.activityTitle, opts: [
      { v: "sed", l: t.activityLow }, { v: "mod", l: t.activityMod }, { v: "act", l: t.activityHigh },
    ]},
    { key: "smoking", type: "select", label: t.smokingTitle, opts: [
      { v: "yes", l: t.smokingYes }, { v: "occ", l: t.smokingOccasional }, { v: "no", l: t.smokingNo }, { v: "quit", l: t.smokingFormer },
    ]},
    { key: "alcohol", type: "select", label: t.alcoholTitle, opts: [
      { v: "daily", l: t.alcoholDaily }, { v: "weekly", l: t.alcoholWeekly }, { v: "rarely", l: t.alcoholRarely }, { v: "never", l: t.alcoholNever },
    ]},
    { key: "family", type: "multi", label: t.familyTitle, opts: [
      { v: "hyp", l: t.familyHypertension }, { v: "dia", l: t.familyDiabetes }, { v: "hrt", l: t.familyHeart }, { v: "can", l: t.familyCancer }, { v: "none", l: t.familyNone },
    ]},
    { key: "stress", type: "select", label: t.stressTitle, opts: [
      { v: "high", l: t.stressHigh }, { v: "mod", l: t.stressMod }, { v: "low", l: t.stressLow },
    ]},
    { key: "sleep", type: "select", label: t.sleepTitle, opts: [
      { v: "low", l: t.sleepLow }, { v: "mod", l: t.sleepMod }, { v: "good", l: t.sleepGood },
    ]},
    { key: "water", type: "select", label: t.waterTitle, opts: [
      { v: "low", l: t.waterLow }, { v: "mod", l: t.waterMod }, { v: "good", l: t.waterGood },
    ]},
  ];
}
