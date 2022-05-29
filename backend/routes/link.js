const express = require('express');

const router = express.Router();

const linkController = require('../controllers/link');

router.get('/all', linkController.getAllLinks);
router.get('/:userId', linkController.getAllLinksByUser);
router.post('/', linkController.createLink);
router.delete('/:id', linkController.deleteLink);
router.put('/:id', linkController.updateLink);

module.exports = router;
