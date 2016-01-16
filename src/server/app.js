'use strict';

let express = require('express');
let path = require('path');
let app = express();
let bodyParser = require('body-parser');
let environment = process.env.NODE_ENV || 'development';
let port = process.env.PORT || 3000;
let baseAPIUrl = '/api';

console.log('About to crank up node');
console.log('PORT=' + port);
console.log('NODE_ENV=' + environment);
app.set('view engine', 'ejs');
app.use(express.static('../../'));
app.use(bodyParser.urlencoded({
  extended: true
}));

app.use(bodyParser.json());
app.use(baseAPIUrl + '/questions', require('./restControllers/questionCtrl')(express));
app.use(baseAPIUrl + '/users', require('./restControllers/userCtrl')(express));

app.get('/', function (req, res) {
  res.render('index');
});

app.listen(port, function () {
  console.log('Node is listening on Port: ' + port);
  console.log('env = ' + app.get('env') +
    '\n__dirname = ' + __dirname +
    '\nprocess.cwd = ' + process.cwd());
});