import { GoogleGenAI, Type } from "@google/genai";

let genAI: any = null;

function getAI() {
  if (!genAI) {
    const apiKey = import.meta.env.VITE_GEMINI_API_KEY;
    if (!apiKey) {
      console.warn("GEMINI_API_KEY is not defined. AI features will fail.");
      return null;
    }
    genAI = new (GoogleGenAI as any)(apiKey);
  }
  return genAI;
}

export const portfolioSchema = {
  type: Type.OBJECT,
  properties: {
    name: { type: Type.STRING },
    role: { type: Type.STRING },
    bio: { type: Type.STRING },
    email: { type: Type.STRING },
    phone: { type: Type.STRING },
    github: { type: Type.STRING },
    linkedin: { type: Type.STRING },
    whatsapp: { type: Type.STRING },
    skills: { type: Type.ARRAY, items: { type: Type.STRING } },
    projects: {
      type: Type.ARRAY,
      items: {
        type: Type.OBJECT,
        properties: {
          title: { type: Type.STRING },
          description: { type: Type.STRING },
          link: { type: Type.STRING },
          tags: { type: Type.ARRAY, items: { type: Type.STRING } },
        },
        required: ["title", "description", "tags"],
      },
    },
    experience: {
      type: Type.ARRAY,
      items: {
        type: Type.OBJECT,
        properties: {
          company: { type: Type.STRING },
          role: { type: Type.STRING },
          duration: { type: Type.STRING },
          description: { type: Type.STRING },
        },
        required: ["company", "role", "duration", "description"],
      },
    },
    education: {
      type: Type.ARRAY,
      items: {
        type: Type.OBJECT,
        properties: {
          school: { type: Type.STRING },
          degree: { type: Type.STRING },
          duration: { type: Type.STRING },
        },
        required: ["school", "degree", "duration"],
      },
    },
  },
  required: ["name", "role", "bio", "email", "skills", "projects", "experience", "education"],
};

export async function generatePortfolioFromText(text: string) {
  const ai = getAI();
  if (!ai) throw new Error("AI not initialized. Please check API Key.");

  const model = ai.getGenerativeModel({
    model: "gemini-2.0-flash",
  });

  const response = await model.generateContent({
    contents: [{ role: 'user', parts: [{ text: `EXTRACT AND GENERATE portfolio data from the following resume text. 
    Be creative and professional when writing the bio and descriptions. 
    Ensure the output is valid JSON strictly matching the schema.
    
    Resume Text:
    ${text}` }] }],
    generationConfig: {
      responseMimeType: "application/json",
      responseSchema: portfolioSchema as any,
    },
  });

  const result = await response.response;
  return JSON.parse(result.text() || "{}");
}
