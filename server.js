const express = require('express');
const path = require('path');
const app = express();

// Serve files from the inner "Website" folder
app.use(express.static(path.join(__dirname, 'Website'))); // Changed from 'public'

// Form submission handler (keep your existing code)
app.post('/register', (req, res) => {
  // ... your form handling logic ...
});

// All other routes serve index.html from the inner folder
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'Website', 'index.html')); // Updated path
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
