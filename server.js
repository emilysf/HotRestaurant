var express = require('express');
var app = express();

var exphbs = require('express-handlebars');
app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

var reservedArray = [
  {name: 'Emily', phone: '407-555-3221', email: 'emily@gmail.com', uniqueId: 'Em'},
  {name: 'Josh', phone: '407-335-6821', email: 'josh@gmail.com', uniqueId: 'Joshy'},
  {name: 'Walter', phone:'407-123-4567', email: 'walter@gmail.com', uniqueId:'Walt'}
];

var waitlistArray = [
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
    waitlist: waitlistArray
  });
});


var port = 3000;
app.listen(port);