import express from 'express';
import data from './data/mock.json' assert { type: 'json' };

const app = express();

const PORT = 3000;

// Using the public folder at the route of the project
app.use(express.static('public'));

// Using the images folder at the route /imahes
app.use('/images', express.static('images'));

// GET
app.get('/', (req, res) => {
  res.json(data);
});

// GET with next
app.get('/next',
  (req, res, next) => {
    console.log('The response will be sent by the next function.');
    next();
  },
  (req, res) => {
    res.send('I just said up a route with a second callback.');
  }
);

// GET with routing parameters
app.get('/class/:id/', (req, res) => {
  const studentId = Number(req.params.id);

  const student = data.filter((student) => student.id === studentId);
  res.send(student);
});

// POST
app.post('/create', (req, res) => {
  res.send('This is a POST request at /create');
});

// PUT
app.put('/edit', (req, res) => {
  res.send('This is a PUT request at /edit');
});

// DELETE
app.delete('/delete', (req, res) => {
  res.send('This is a DELETE request at /delete');
});

app.listen(PORT, () => {
  console.log(`The server is running on port: ${PORT}!`);
});
