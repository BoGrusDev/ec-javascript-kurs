const express = require('express');
const customerController = require('../controller/customerController');
const router = express.Router();

router.get('/list', customerController.customerList);
router.get('/get', customerController.customerGet);
router.post('/update', customerController.customerUpdate);
router.post('/update2', customerController.customerUpdate2);
router.post('/add', customerController.customerAdd);
router.post('/updatedynamic', customerController.customerUpdateDynamic);
module.exports = router;
