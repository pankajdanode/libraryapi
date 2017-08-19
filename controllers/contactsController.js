
var Contact = require('../models/Contact');
var async = require('async');

// Display list of all contact
exports.list = function(req, res) {

    Contact.find()
    .sort([['first_name', 'ascending']])
    .exec(function (err, contacts) {
        if (err) { return next(err); }
        //Successful, so render        
        res.setHeader('Content-Type', 'application/json');
        res.send(JSON.stringify(contacts));   
       // res.send('Contact list');
    });

    //res.setHeader('Content-Type', 'application/json');
    //res.send(JSON.stringify({ a: 1 }));
    //res.send('NOT IMPLEMENTED: Contact list');
};

// Display detail page for a specific contact
exports.detail = function(req, res) {
    
    /* async.parallel({
    contact: function(callback) {  
      contact.findById(req.params.id)
        .exec(callback);
    },
        
    contact_books: function(callback) {            
      Book.find({ 'contact': req.params.id })
      .exec(callback);
    },

  }, function(err, results) {
    if (err) { return next(err); }
    //Successful, so render
    res.render('contact/detail', { title: 'contact Detail', contact: results.contact, contact_books: results.contact_books } );
  }); */
    res.send('NOT IMPLEMENTED: contact detail: ' + req.params.id);
};

// Display contact create form on GET
exports.create_get = function(req, res, next) {
    //res.render('contact/add', { title: 'Create contact' });
    res.send('NOT IMPLEMENTED: contact create GET');
};

// Handle contact create on POST
exports.create_post = function(req, res, next) {

    //Check that the name field is not empty
    /* req.checkBody('name', 'contact name required').notEmpty(); 
    
    //Trim and escape the name field. 
    req.sanitize('name').escape();
    req.sanitize('name').trim();
    
    //Run the validators
    var errors = req.validationErrors();

    //Create a contact object with escaped and trimmed data.
    var contact = new contact(
      { name: req.body.name }
    );
    
    if (errors) {
        //If there are errors render the form again, passing the previously entered values and errors
        res.render('contact/add', { title: 'Create contact', contact: contact, errors: errors});
        return;
    } 
    else {
        // Data from form is valid.
        //Check if contact with same name already exists
        contact.findOne({ 'name': req.body.name })
            .exec( function(err, found_contact) {
                 console.log('found_contact: ' + found_contact);
                 if (err) { return next(err); }
                 
                 if (found_contact) { 
                     //contact exists, redirect to its detail page
                     res.redirect(found_contact.url);
                 }
                 else {
                     
                     contact.save(function (err) {
                       if (err) { return next(err); }
                       //contact saved. Redirect to contact detail page
                       res.redirect(contact.url);
                     });
                     
                 }
                 
             });
    } */

    res.send('NOT IMPLEMENTED: contact create POST');
};

// Display contact delete form on GET
exports.delete_get = function(req, res) {
    res.send('NOT IMPLEMENTED: contact delete GET');
};

// Handle contact delete on POST
exports.delete_post = function(req, res) {
    res.send('NOT IMPLEMENTED: contact delete POST');
};

// Display contact update form on GET
exports.update_get = function(req, res) {
    res.send('NOT IMPLEMENTED: contact update GET');
};

// Handle contact update on POST
exports.update_post = function(req, res) {
    res.send('NOT IMPLEMENTED: contact update POST');
};