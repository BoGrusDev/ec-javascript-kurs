// Demo restapi-mysql
//
// start node app
// call: http://localhost:3000/customer/list

/*
    customer/list (GET)
    customer/get (GET) http://127.0.0.1:3000/customer/get?id=2
    customer/add (POST)
    customer/update (POST)
    customer/delete (POST)
*/
const express = require('express');
const bodyParser = require('body-parser');
const customerRoutes = require('./routes/customerRoutes');
const app = express();

const host = '127.0.0.1';
const port = 3000;

app.use(bodyParser.json());

app.use('/customer', customerRoutes);

app.get('*', function (req, res) {
    res.status(404);
    res.send('NOT ALLOWED');
});

app.post('*', function (req, res) {
    res.status(404);
    res.send('NOT ALLOWED');
});

app.listen(port, host, () => {
    console.log(`Run at: http://${host}:${port}`);
});

