const express = require('express');
const path = require('path');

const app = express();

// Serve static files (CSS, images, etc.)
app.use('/images', express.static('/public/css'));
app.use(express.static('public'));

// Route to serve the HTML file
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '/public/ripleys.html'));
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});