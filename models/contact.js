var mongoose = require('mongoose');
var moment = require('moment');
var Schema = mongoose.Schema;

var ContactSchema = Schema({ 
  first_name: {type: String, required: true},
  last_name: {type: String, required: true},
  phone: {type: String, required: true},
  created: {type: Date, default: Date.now},
  modified: {type: Date, default: Date.now},
});

// Virtual for genre's URL
ContactSchema
.virtual('url')
.get(function () {
  return '/contact/' + this._id;
});

ContactSchema
.virtual('created_formatted')
.get(function () {
  return moment(this.created).format('MMMM Do, YYYY');
});

//Export model
module.exports = mongoose.model('Contact', ContactSchema);