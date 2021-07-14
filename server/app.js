var express = require('express');
const cors = require("cors");
var path = require('path');
var logger = require('morgan');
var bodyParser = require('body-parser');


var indexRouter = require('./routes/index');
var inputsRouter = require('./routes/inputs');

var app = express();

// mongoose.connect('mongodb://172.17.0.2:27017/docker_test');
// app.connect('postgres://postgres:docker@172.17.0.4:3004/docker_inputs_db');

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/inputs', inputsRouter);

module.exports = app;
