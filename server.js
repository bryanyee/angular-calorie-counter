const express = require('express');
const path = require('path');

const app = express();

// app.use(express.static('client'));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'client', 'index.html'));
})

app.get(/.(js|html|css)$/, (req, res, next) => {
  console.log(req.url)
  res.sendFile(path.join(__dirname, 'client', req.url), (err) => {
    if(err) res.sendStatus(err.status);
  });
})

app.use((req, res) => {
  res.sendStatus(404);
});


app.listen(3000);