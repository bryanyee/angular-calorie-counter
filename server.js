const express = require('express');
const path = require('path');
const createUser = require('./database/controllers/userController.js');
const verifyUser = require('./database/controllers/userController.js')
const app = express();
const bodyParser = require('body-parser');

const mongoose = require('mongoose');
const uri = 'mongodb://localhost/calorie';
mongoose.connect(uri);
const db = mongoose.connection;
db.once('open', ()=>{
  console.log('connected db');
})


app.use(bodyParser());

app.use(express.static('client'));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'client', 'index.html'));
});

//insert//retreieve from db
app.post('/signup', createUser, (req, res) => {
  console.log('finduser works');
  res.end();
});

app.post('/login', verifyUser, (req, res) => {
  res.end();
});

app.use((req, res) => {
  res.sendStatus(404);
});


app.listen(3000);