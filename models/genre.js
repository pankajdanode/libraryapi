var mongoose = require('mongoose');
var moment = require('moment');
var Schema = mongoose.Schema;

var GenreSchema = Schema({ 
  name: {type: String, required: true},
  created: {type: Date, default: Date.now},
  modified: {type: Date, default: Date.now},
});

// Virtual for genre's URL
GenreSchema
.virtual('url')
.get(function () {
  return '/catalog/genre/' + this._id;
});

GenreSchema
.virtual('created_formatted')
.get(function () {
  return moment(this.created).format('MMMM Do, YYYY');
});

//Export model
module.exports = mongoose.model('Genre', GenreSchema);