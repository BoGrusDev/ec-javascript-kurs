const express = require('express');
const contactController = require('../controller/contactController');
const router = express.Router();

router.post('/get', contactController.contactGet);
router.post('/list', contactController.contactList);
router.post('/add', contactController.contactAdd);

module.exports = router;
