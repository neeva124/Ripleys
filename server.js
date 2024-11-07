import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
const app = express();

// Get __dirname in ES module
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Serve static files (CSS, images, etc.)

app.use('/images', express.static(path.join(__dirname, 'public/css')));
app.use(express.static(path.join(__dirname, 'public')));
app.use('/node_modules', express.static(path.join(__dirname, 'node_modules')));

// Route to serve the HTML file
app.get('/', (req, res) => {
  // Remove the 'cd' that was mistakenly included
  res.sendFile(path.join(__dirname, 'public', 'ripleys.html'));
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
