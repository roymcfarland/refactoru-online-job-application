var Applicant = require('../models/applicants.js');

var indexController = {
	index: function(req, res) {
		res.render('index');
	},

	applicants: function(req, res){
		Applicant.find({}, function(err, results){
			res.render('applicants', {
				applicants: results
			});
		});
	},

	postIt: function(req, res){
		var applicantData = req.body;

		// Use the submitted data to create
		// a new Applicant instance
		var applicant = new Applicant(applicantData);

		// Once the save operation is completed...
		applicant.save(function(err, result){

			res.render('success');

		});
	}
};

module.exports = indexController;