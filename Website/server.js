const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors'); // For handling cross-origin requests

const app = express();
const PORT = 3000;

// Middleware to parse JSON and form data
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors()); // Allow requests from your frontend

// Mock database (in a real app, use MySQL, MongoDB, etc.)
let users = [];

// POST endpoint to handle form submissions
app.post('/register', (req, res) => {
    const { name, email, password } = req.body;

    if (!name || !email || !password) {
        return res.status(400).json({ error: "All fields are required!" });
    }

    // Simulate saving to a database
    users.push({ name, email, password });
    console.log("New user registered:", { name, email });

    res.status(200).json({ message: "Registration successful!" });
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});