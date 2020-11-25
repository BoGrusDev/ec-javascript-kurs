const express = require('express');

const router = express.Router();

router.get('/', (reg, res) => {
    console.log('hemsida');
    res.end();
})

router.get('/om-oss', (reg, res) => {
    console.log('om-oss');
    res.end();
})

module.exports = router;