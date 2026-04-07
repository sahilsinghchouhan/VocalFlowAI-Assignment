require("dotenv").config();
console.log("ENV KEY:", process.env.DEEPGRAM_API_KEY);


const express = require("express");
const cors = require("cors");

const balanceRoutes = require("./routes/balanceRoutes");

const app = express();

app.use(cors());
app.use(express.json());

// Routes
app.use("/api", balanceRoutes);

// Server
const PORT = 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});