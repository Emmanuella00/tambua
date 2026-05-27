/**
 * Claude API Integration for Tambua
 *
 * Handles all communication with the Claude API including
 * system prompts for risk assessment, number interpretation,
 * and symptom analysis.
 */

const API_URL = "https://api.anthropic.com/v1/messages";
const MODEL = "claude-sonnet-4-20250514";

/**
 * Language code to full name mapping for Claude prompts
 */
const LANG_NAMES = {
  en: "English",
  fr: "French",
  rw: "Kinyarwanda",
};

/**
 * System prompts for each Tambua feature.
 * Each prompt instructs Claude on tone, structure, language,
 * and the critical distinction between awareness and diagnosis.
 */
export const systemPrompts = {
  risk: (lang) =>
    `You are Tambua, a caring health awareness companion for young Africans. Provide NCD (non-communicable disease) risk awareness — NOT diagnosis. Respond in ${LANG_NAMES[lang] || "English"}. Be warm, culturally sensitive (reference African diets, lifestyles, local context). Use clear UPPERCASE section headers: OVERALL SUMMARY, KEY RISK FACTORS, PROTECTIVE FACTORS, RECOMMENDED SCREENINGS, ACTIONABLE NEXT STEPS. Do NOT use any emojis anywhere. Keep it personal and conversational — like a knowledgeable friend. End with a reminder that this is awareness, not diagnosis.`,

  numbers: (lang) =>
    `You are Tambua, a health literacy companion for young Africans. Help people understand their health numbers in plain, friendly language — NOT medical jargon. Respond in ${LANG_NAMES[lang] || "English"}. For each number provided, explain: what it measures, whether their reading is normal/borderline/concerning (use standard WHO/medical ranges), what could cause abnormal readings, and what action to take. Use relatable analogies. Be culturally relevant. Use clear UPPERCASE section headers for each measurement. Do NOT use any emojis. End with a reminder to discuss results with a healthcare provider.`,

  symptoms: (lang) =>
    `You are Tambua, a health awareness companion for young Africans. Help users understand what their symptoms COULD be related to in the context of NCD risk factors — NOT a diagnosis. Respond in ${LANG_NAMES[lang] || "English"}. Use UPPERCASE section headers: WHAT YOU DESCRIBED, POSSIBLE NCD CONNECTIONS, SCREENINGS TO ASK FOR, WHEN TO SEEK IMMEDIATE CARE, LIFESTYLE FACTORS TO CONSIDER. Do NOT use any emojis. Be warm, culturally aware, and always emphasize this is guidance, not diagnosis. If symptoms sound urgent, strongly recommend immediate medical attention.`,
};

/**
 * Call the Claude API.
 *
 * @param {string} systemPrompt - System instructions for Claude
 * @param {string} userMessage - User's health data to analyze
 * @returns {Promise<string>} Claude's response text
 */
export async function callClaude(systemPrompt, userMessage) {
  const apiKey = import.meta.env.VITE_CLAUDE_API_KEY || "";

  const response = await fetch(API_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      ...(apiKey && {
        "x-api-key": apiKey,
        "anthropic-version": "2023-06-01",
        "anthropic-dangerous-direct-browser-access": "true",
      }),
    },
    body: JSON.stringify({
      model: MODEL,
      max_tokens: 1024,
      system: systemPrompt,
      messages: [{ role: "user", content: userMessage }],
    }),
  });

  if (!response.ok) {
    const err = await response.json().catch(() => ({}));
    throw new Error(err.error?.message || `API error: ${response.status}`);
  }

  const data = await response.json();
  return (
    data.content?.map((block) => block.text || "").join("") ||
    "No response received."
  );
}
