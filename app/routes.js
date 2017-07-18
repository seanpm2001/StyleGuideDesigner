'use strict';

var	express = require('express');
var	config = require('./controller/settings');

var	router = express.Router();

// Route to UPDATE the config
router.post('/configs', function (req, res) {
	req.params.update = config.update(req);
	console.log(req.params.update);
	res.send(req.params.update);
});

// Route to READ the configs
router.get('/configs', function (req, res) {
	req.params.fetch = config.get();
	res.json(req.params.fetch);
});

// Render settings page
router.get('/', function (req, res) {
	res.render('settings');
});

module.exports = router;
