const express = require('express');
const cors = require('cors');
const { PrismaClient } = require('@prisma/client');

const app = express();
const prisma = new PrismaClient();

app.use(cors());
app.use(express.json());

// GET route
app.get('/api/quotes', async (req, res) => {
  try {
    const quotes = await prisma.quote.findMany();
    res.json(quotes);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch quotes' });
  }
});

// POST route (optional)
app.post('/api/quotes', async (req, res) => {
  const { text, userId } = req.body;
  try {
    const newQuote = await prisma.quote.create({
      data: { text, userId },
    });
    res.status(201).json(newQuote);
  } catch (error) {
    res.status(500).json({ error: 'Failed to create quote' });
  }
});

// Start server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`🚀 Server running at http://localhost:${PORT}`);
});
