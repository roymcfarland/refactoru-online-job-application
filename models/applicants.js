var mongoose = require('mongoose');

// A schema, or blueprint, for documents
// inside the collection
var applicantSchema = mongoose.Schema({
	name: String,
	bio: String,
	skills: String,
	years: Number,
	why: String
});

// Export the model so that other files
// can run commands in this collection
module.exports = mongoose.model('applicant', applicantSchema);