const express = require('express');
const app = express();
const port = process.env.PORT || 8080;

app.get('/health', (req, res) => {
  res.status(200).json({ status: 'healthy', system: 'System A' });
});

app.listen(port, () => {
  console.log(`System A listening on port ${port}`);
});
