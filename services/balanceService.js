const axios = require("axios");
const { DEEPGRAM_API_KEY, GROK_API_KEY } = require("../config/config");

// 🔹 Deepgram Balance (Mock - due to restricted API)
const getDeepgramBalance = async () => {
  try {
    return {
      success: true,
      provider: "Deepgram",
      balance: "Free tier",
      usage: "120 minutes used",
      remaining: "880 minutes",
      note: "Mock data (Deepgram billing API not publicly accessible)",
    };
  } catch (error) {
    return {
      success: false,
      error: error.message,
    };
  }
};

// 🔹 Grok Balance (Mock)
const getGrokBalance = async () => {
  try {
    return {
      success: true,
      provider: "Grok",
      balance: "1000 credits",
      usage: "200 credits used",
      remaining: "800 credits",
      note: "Mock data (API not publicly available)",
    };
  } catch (error) {
    return {
      success: false,
      error: error.message,
    };
  }
};

// ✅ Export both functions
module.exports = {
  getDeepgramBalance,
  getGrokBalance,
};