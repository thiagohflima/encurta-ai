const express = require('express');

const router = express.Router();

const linkController = require('../controllers/link');

router.get('/', linkController.getAllLinksByUser);
router.get('/:id', linkController.getLinkById);
router.post('/', linkController.createLink);
router.delete('/:id', linkController.deleteLink);
router.put('/:id', linkController.updateLink);

module.exports = router;
