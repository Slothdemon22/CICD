import express from 'express';
import cors from 'cors';

const app = express();
const PORT = process.env.PORT || 3001;

app.use(cors());
app.use(express.json());

app.get('/', (_req, res) => {
  res.send('🚀 updated');
});

// ✅ This will keep Node running
app.listen(PORT, () => {
  console.log(`✅ Server is running at http://localhost:${PORT}`);
});
