const express = require('express');
const path = require('path');
const createUser = require('./database/controllers/userController.js');
const findUser = require('./database/controllers/userController.js')
const app = express();

const mongoose = require('mongoose');
const uri = 'mongodb://localhost/calorie';
mongoose.connect(uri);
const db = mongoose.connection;
db.once('open', ()=>{
  console.log('connected db');
})
// app.use(express.static(path.join(__dirname, './')));
// app.use(express.static(path.join(__dirname, '/client/')));

//serve static files with vanilla express without express.static
app.get('/', (req, res) => {
  res.sendFile(path.resolve('client/index.html'));
  // res.sendFile(path.join(__dirname + '/client/index.html'));
});

app.get('/client/*', (req, res) => {
  console.log('url:', req.url);
  res.sendFile(path.resolve(req.url.slice(1)), (err) => {
    if(err){
      res.sendStatus(404);
    }
  });
});

app.get('/test', createUser, findUser, (req, res) => {
  console.log('finduser works');
  res.end();
})

app.use((req, res) => {
  res.sendStatus(404);
});


app.listen(3000);