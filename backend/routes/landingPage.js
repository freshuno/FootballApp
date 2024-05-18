const express = require('express');

const landingPageController = require('../controllers/landingPage');

const router = express.Router();

router.get('/', landingPageController.getPage);

module.exports = router;