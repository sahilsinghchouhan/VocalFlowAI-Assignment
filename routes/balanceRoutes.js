const express = require("express");
const router = express.Router();
const { fetchBalances } = require("../controllers/balanceController");

router.get("/balances", fetchBalances);

module.exports = router;