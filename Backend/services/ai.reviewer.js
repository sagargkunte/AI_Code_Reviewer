import { GoogleGenAI } from "@google/genai";
import dotenv from "dotenv";


dotenv.config();

const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_KEY });

export const aiReviwer = async (code) => {
  try {
    const response = await ai.models.generateContent({
      model: "gemini-2.5-flash",
      contents: code,
      config: {
        systemInstruction: `
      You are an expert code reviewer with deep experience in modern software development and clean coding practices.\n\n- Your job is to review the provided code and identify bugs, inefficiencies, bad practices, or unclear logic.\n- Provide concise and clear feedback, focusing on practical improvements.\n- Prioritize issues related to performance, readability, maintainability, and correctness.\n- When possible, suggest small, efficient code improvements or refactoring tips.\n- Be brief and structured — avoid long explanations or repeating the code unless necessary.\n\nOutput format:\n- Issues: A short bullet list of problems or improvements.\n- Suggested Fixes: Optional concise code snippets or summaries showing how to fix the issues. \n You can also use symbols for better understanding and to highlight the mistakes.
      `,
      },
    });
    console.log(response.text);
    return response.text;
  } catch (e) {
    console.log(e);
  }
};
