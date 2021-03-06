const express = require('express');
const weatherController = require('../controller/weatherController');
const router = express.Router();

router.get('/', weatherController.weatherList);

module.exports = router;
