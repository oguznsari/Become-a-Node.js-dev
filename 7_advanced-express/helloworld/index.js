const express = require('express');
const fs = require('fs');
const util = require('util');
const marked = require('marked');
const app = express();
const PORT = 3000;

const fsreadFile = util.promisify(fs.readFile);

app.engine('md', async (filePath, options, callback) => {
  try {
    const content = await fsreadFile(filePath);
    const rendered = content.toString().replace('{headline}', options.headline);
    return callback(null, marked.parse(rendered));
  } catch (err) {
    callback(err);
  }
});

app.set('views', 'views');
app.set('view engine', 'md');

function handler (req, res) {
  return res.render('index', { headline: 'Hello World!' });
}

app.get('/', handler);

app.listen(PORT, () => console.log(`Hello World listening on port ${PORT}`));
