var express = require('express');
var router = express.Router();

// Require controller modules
var contacts_controller = require('../controllers/contactsController');

/// BOOK ROUTES ///

/* GET contacts home page. */
router.get('/', contacts_controller.list);

/* GET request for creating a contact. NOTE This must come before routes that display Book (uses id) */
router.get('/create', contacts_controller.create_get);

/* POST request for creating contact. */
router.post('/create', contacts_controller.create_post);

/* GET request to delete contact. */
router.get('/:id/delete', contacts_controller.delete_get);

// POST request to delete contact
router.post('/:id/delete', contacts_controller.delete_post);

/* GET request to update contact. */
router.get('/:id/update', contacts_controller.update_get);

// POST request to update contact
router.post('/:id/update', contacts_controller.update_post);

/* GET request for one contact. */
router.get('/:id', contacts_controller.detail);

/* GET request for list of all contact items. */
//router.get('/contacts', contacts_controller.list);

module.exports = router;