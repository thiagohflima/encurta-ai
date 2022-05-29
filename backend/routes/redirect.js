const express = require('express');

const router = express.Router();

const redirectController = require('../controllers/redirect');

router.get('/:linkShort', redirectController.setRedirect);

module.exports = router;
