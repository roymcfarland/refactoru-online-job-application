var express = require('express');
var bodyParser = require('body-parser');

// Require the mongoose module
var mongoose = require('mongoose');

// Controller
var indexController = require('./controllers/index.js');

// Connect to the MongoDB
mongoose.connect('mongodb://localhost/omega3studios');

var app = express();
app.set('view engine', 'jade');
app.set('views', __dirname + '/views');
app.use(express.static(__dirname + '/public'));
app.use(bodyParser());

// Displays the homepage
app.get('/', indexController.index);

// Displays a list of applicants
app.get('/applicants', indexController.applicants);

// Creates an applicant
app.post('/postIt', indexController.postIt);

var server = app.listen(8441, function() {
	console.log('Express server listening on port ' + server.address().port);
});