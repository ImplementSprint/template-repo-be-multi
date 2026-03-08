const express = require('express');
const app = express();
app.get('/health', (req, res) => res.status(200).send('System A OK'));
app.listen(3000, () => console.log('System A listening on port 3000'));
