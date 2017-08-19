var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var ContactModelSchema = new Schema({
	first_name:{
		type: String,
		required: [true, 'Enter first name']		
	},
	last_name:{
		type: String,
		required: [true, 'Enter last name']
	},
	phone:{
		type: String,
		required: [true, 'Enter phone number']		
	}
});

var Contact = module.exports = mongoose.model('Contact', ContactModelSchema);

