const {
  getDeepgramBalance,
  getGrokBalance,
} = require("../services/balanceService");

const fetchBalances = async (req, res) => {
  try {
    const deepgram = await getDeepgramBalance();
    const grok = await getGrokBalance();

    res.json({
      success: true,
      deepgram,
      grok,
    });
  } catch (err) {
    console.error("CONTROLLER ERROR:", err);

    res.status(500).json({
      success: false,
      message: err.message || "Something went wrong",
    });
  }
};

module.exports = { fetchBalances };