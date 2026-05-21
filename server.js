const express = require('express');
const path = require('path');
const app = express();

// cPanel Node.js passenger will pass the port via process.env.PORT
const port = process.env.PORT || 3000;

// Serve all files (HTML, CSS, JS, Images, etc.) as static assets
app.use(express.static(path.join(__dirname)));

// Fallback to index.html for any other requests (useful for SPA routing or clean URLs)
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
