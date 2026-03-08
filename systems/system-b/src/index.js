const express = require('express');
const app = express();
app.get('/health', (req, res) => res.status(200).send('System B OK'));
app.listen(3000, () => console.log('System B listening on port 3000'));
