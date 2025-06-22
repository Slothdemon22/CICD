import express from 'express';
import cors from 'cors';

const app = express();
const PORT = process.env.PORT || 3001;

// Middleware
app.use(cors());
app.use(express.json());

// Root route
app.get('/', (_req, res) => {
  const timestamp = new Date().toISOString();
  res.send(`🚀 Server live @ updated CICD — ${timestamp}`);
});

// Dummy API routes

app.get('/api/users', (_req, res) => {
  res.json([
    { id: 1, name: 'Alice', role: 'admin' },
    { id: 2, name: 'Bob', role: 'user' },
    { id: 3, name: 'Charlie', role: 'moderator' },
  ]);
});

app.get('/api/products', (_req, res) => {
  res.json([
    { id: 101, name: 'Laptop', price: 1200 },
    { id: 102, name: 'Phone', price: 800 },
    { id: 103, name: 'Tablet', price: 500 },
  ]);
});

app.get('/api/orders', (_req, res) => {
  res.json([
    { orderId: 'ORD001', userId: 1, total: 2000 },
    { orderId: 'ORD002', userId: 2, total: 1200 },
  ]);
});

app.get('/api/status', (_req, res) => {
  res.json({
    server: 'online',
    version: '1.0.0',
    timestamp: new Date().toISOString(),
  });
});

// Start server
app.listen(PORT, () => {
  console.log(`✅ Server is running at http://localhost:${PORT}`);
});
