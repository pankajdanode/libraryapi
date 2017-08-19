// defining constants

var express = require('express');
var router = express.Router();

var Contact = require('../models/contacts');

//var async = require('async');

// retriving contacts
router.get('/contacts',function(req, res, next){
	
	Contact.find(function(err, contacts){
		res.json(contacts);
	});	
	
});

// add contacts
router.post('/contact',function(req, res, next){
	// Logic to add contact
	var newContact = new Contact({
		first_name : req.body.first_name,
		last_name : req.body.last_name,
		phone : req.body.phone
	});
	
	newContact.save((err, contact)=>{
		if(err){
			res.json({msg:'Failed to add contact : '+err});
		}else{
			res.json({msg:'Contact added succesfully'});
		}
	});
	
	//res.send('add contacts list.');
});

// delete contact
router.delete('/contact/:id',function(req, res){
	// Logic to delete contact
	//res.send('in delete contacts.');
	
	Contact.remove({_id:req.params.id}, function(err, result){
		if(err){
			res.json(err);
		}else{
			res.json(result);
		}
	});
	
});



module.exports = router;
