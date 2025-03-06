require('dotenv').config()
const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  console.log("GET / request received");
  res.send('Hello World!');
});

app.get('/home', (req, res) => {
  console.log("GET /home request received");
  res.send('Welcome to home!');
});

app.listen(process.env.PORT, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
