const express = require('express');
const currencyController = require('../controller/currencyController');
const router = express.Router();

router.get('/list', currencyController.currencyList);

module.exports = router;
