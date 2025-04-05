const path = require("path");
require("dotenv").config();
const axios = require("axios");
const { GoogleGenerativeAI } = require("@google/generative-ai");

const genAI = new GoogleGenerativeAI("AIzaSyD02kJ3dqI2k0v9hLbEfH-l0igviqq-S04");

const data = [
  {
    role: "system",
    content:
      "Assume that you are a Teaching Assistant and I have sent you all the details for the subject, answer the questions for students related to the data given to you and if you know topics related to them you can answer that yourself as well for the subject given to you, keep the answer short and concise, to the point. NO BOLD OR ITALICS OR ANY EMOJIS, this is mandatory ",
  },
];

async function QueryGPT(prompt) {
  data.push({ role: "user", content: prompt });

  // Convert to Gemini format
  const geminiMessages = data.map((msg) => {
    return msg.role === "user"
      ? { role: "user", parts: [{ text: msg.content }] }
      : { role: "model", parts: [{ text: msg.content }] };
  });

  try {
    const model = genAI.getGenerativeModel({ model: "gemini-2.0-flash" });

    const result = await model.generateContent({
      contents: [
        {
          role: "user", // Gemini expects the whole conversation as a user message contextually
          parts: [
            { text: data.map((d) => `${d.role}: ${d.content}`).join("\n") },
          ],
        },
      ],
    });

    const answer = result.response.text();
    // console.log("Hello: ", answer); // Optional
    return answer;
  } catch (err) {
    console.error("Error from Gemini:", err);
    return "Oops! Something went wrong with Gemini.";
  }
}

module.exports = QueryGPT;
