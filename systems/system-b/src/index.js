const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
require('dotenv').config();

const app = express();
app.use(cors());
app.use(helmet());

// Health check endpoint identifying System B
app.get('/health', (req, res) => {
  res.status(200).json({ status: 'OK', system: 'System B' });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`System B running on port ${PORT}`));
