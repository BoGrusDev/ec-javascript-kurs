const express = require('express');
const customerController = require('../controller/customerController');
const router = express.Router();

router.get('/list', customerController.customerList);
router.get('/get', customerController.customerGet);
router.post('/add', customerController.customerAdd);
module.exports = router;
