var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');

var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.text());
app.use(bodyParser.json({type:'application/vnd.api+json'}));

require('./app/routing/api-routes.js')(app); 

var exphbs = require('express-handlebars');
app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

var reservedArray = [
  {name: 'Emily', phone: '407-555-3221', email: 'emily@gmail.com', uniqueId: 'Em'},
  {name: 'Josh', phone: '407-335-6821', email: 'josh@gmail.com', uniqueId: 'Joshy'},
  {name: 'Walter', phone:'407-123-4567', email: 'walter@gmail.com', uniqueId:'Walt'}
];

var waitingArray = [
  {name: 'Laurie', phone: '407-234-5678', email:'laurie@gmail.com', uniqueId:'Ann'},
  {name: 'Alan', phone: '407-333-4444', email:'alan@gmail.com', uniqueId: 'Al'}
];


app.get('/', function(req,res) {
    res.render('home');
});

app.get('/reserve', function(req,res) {
  res.render('reserve');
});

app.get('/tables', function(req, res) {
  res.render('tables', {
    reserved: reservedArray,
    waitlist: waitingArray
  });
});


var port = 3000;
app.listen(port);