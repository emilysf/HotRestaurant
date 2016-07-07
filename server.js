var express = require('express');
var app = express();

var exphbs = require('express-handlebars');
app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

var icecreams = [
  {name: 'vanilla', price: 10, awesomeness: 8, image: 'http://www.healthline.com/hlcmsresource/images/diabetesmine/wp-content/uploads/2012/07/Vanilla-Ice-Cream-Cone.jpg'},
  {name: 'chocolate', price: 4, awesomeness: 3, image: 'http://foodnetwork.sndimg.com/content/dam/images/food/fullset/2014/5/14/1/FNM_060114-Chocolate-Ice-Cream-Recipe_s4x3.jpg'},
  {name: 'banana', price: 1, awesomeness: 1, image: 'http://www.gimmesomeoven.com/wp-content/uploads/2010/07/brown-sugar-spiced-banana-ice-cream.jpg'},
  {name: 'greentea', price: 5, awesomeness: 7, image: 'https://i.ytimg.com/vi/_mkdzL75SyA/hqdefault.jpg'},
  {name: 'jawbreakers', price: 6, awesomeness: 2, image: 'http://cf.cravingsofalunatic.com/wp-content/uploads/2011/09/cravings-of-a-lunatic-jawbreaker-ice-cream-81.jpg'},
];


app.get('/icecreams', function(req,res) {
    res.render('AllIcecreams', {
      flavors: icecreams,
      eater: 'Emily'
    });
});

app.get('/icecreams/:name', function(req, res) {
	var flavor = req.params.name;

    for(i = 0; i < icecreams.length; i++){
    	if(flavor == icecreams[i].name) {
    		res.render('flavor', {
    			flavors: icecreams[i]
    		});
    	}
    }
})

var port = 3000;
app.listen(port);