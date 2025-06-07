const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use(cors());

// Root route - fixes "Cannot GET /"
app.get("/", (req, res) => {
  res.send("Bitcoin Forum Backend is Running! 🚀");
});

// Form submission route
app.post("/register", (req, res) => {
  const { name, email, password } = req.body;

  if (!name || !email || !password) {
    return res.status(400).json({ error: "All fields are required!" });
  }

  console.log("New user:", { name, email }); // Check Railway logs for this
  res.json({ message: "Registration successful!" });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
