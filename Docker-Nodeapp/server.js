'use strict';

const express = require('express');

// Constants
const PORT = 3002;
const HOST = '0.0.0.0';

// App
const app = express();
app.get('/', (req, res) => {
  res.send('Welcome to AWS and DevOps Channel');
});

app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);