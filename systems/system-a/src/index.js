const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
require('dotenv').config();

const app = express();
app.use(cors());
app.use(helmet());

// Health check endpoint required by Section 13.6.112
app.get('/health', (req, res) => {
  res.status(200).json({ status: 'OK', system: 'System A' });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`System A running on port ${PORT}`));
