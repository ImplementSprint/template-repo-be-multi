const express = require('express');
const app = express();
const port = process.env.PORT || 8080;

app.get('/health', (req, res) => {
  res.status(200).json({ status: 'healthy', system: 'System B' });
});

app.listen(port, () => {
  console.log(`System B listening on port ${port}`);
});
