import express from 'express';
import cors from 'cors';

const app = express();
const PORT = process.env.PORT || 3001;

// Enable CORS and JSON parsing
app.use(cors());
app.use(express.json());

// Sample route
app.get('/', (_req, res) => {
  const timestamp = new Date().toISOString();
  res.send(`🚀 Server live @ updated CICD`);
});

// Start server
app.listen(PORT, () => {
  console.log(`✅ Server is running at http://localhost:${PORT}`);
});
