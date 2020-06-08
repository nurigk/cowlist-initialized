const express = require('express');
//const path = require('path');

const morgan = require('morgan');
const bodyParser = require('body-parser');


const router = require('./routes.js')
const controller = require('./controller');

const app = express();



app.use(morgan('dev'));
app.use(bodyParser.json());
//app.use(bodyParser.urlencoded({ extended: true }));


app.use('/api', router);

app.use(express.static(__dirname + '/../client'));


app.get('/', (req, res) => res.send('Hello World!'))
app.post('/', (req, res) => res.send('Hello World!'))
app.get('/api/cow', (req, res) => {
  router.get(err,)
  res.send('Hello World!')
})


module.exports= app;

