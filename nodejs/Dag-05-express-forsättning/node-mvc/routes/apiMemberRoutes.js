const express = require('express');
const router = express.Router();

router.get('', (req, res) => {
    console.log('member');
    res.end();
})

router.get('/list', (req, res) => {
    console.log('member-list');
    res.end();
})

module.exports = router;

