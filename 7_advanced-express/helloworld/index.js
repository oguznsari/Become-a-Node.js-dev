const express = require('express');
const app = express();
const PORT = 3000;

function handler (req, res) {
  return res.send('Hello World!');
}

app.get('/', handler);

app.listen(PORT, () => console.log(`Hello World listening on port ${PORT}`));
