// server/index.js
const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3000;

// Serve static files from the dist directory (where Vite builds the frontend)
app.use(express.static(path.join(__dirname, '../dist')));

// A simple API route for testing purposes
app.get('/api', (req, res) => {
  res.json({ message: 'Hello from the server!' });
});

// Catch-all route for frontend (in case of SPA routing)
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../dist/index.html'));
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
