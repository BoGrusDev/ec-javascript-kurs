// Demo restapi-mysql
//
// start node app
// call: http://localhost:3000/customer/list
const express = require('express');
const customerRoutes = require('./routes/customerRoutes');
const app = express();

app.use('/customer', customerRoutes);
app.listen(3000);

