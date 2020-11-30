const express = require('express');
const customerController = require('../controller/customerController');
const router = express.Router();

router.get('/list', customerController.customerList);

module.exports = router;
