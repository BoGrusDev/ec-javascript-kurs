// Demo restapi-mysql
//
// start node app
// call: http://localhost:3000/customer/list

/*

GET - customer/list
http://localhost:3000/list

GET - customer/get
http://127.0.0.1:3000/customer/get?id=2

POST - customer/add
http://127.0.0.1:3000/customer/add
    {    
        "customer_name": "Pelleson  Pelle",
        "Mobile" : "0701232211",
        "salary": 20000
    }
    {
        "code": 1,
        "customer_id": 17
    }

POST - customer/update
http://127.0.0.1:3000/customer/update
    {    
        "_id" : "17", 
        "customer_name": "Palleson  Palle",
        "Mobile" : "0701232211",
        "salary": 20000
    }
    {
        "code": 1
    }


POST - customer/update2
http://127.0.0.1:3000/customer/update2?id=17
{    
    "customer_name": "Polleson  Polle",
    "Mobile" : "0701232211",
    "salary": 20000
}
{
    "code": 1
}

POST - customer/updatedynamic
http://127.0.0.1:3000/customer/updatedynamic
    {   
        "_id" : "12",  
        "customer_name": "Rocksson  Rock",
        "salary": 55000
    }



// npm install body-parser
// npm install cors
*/ 
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const customerRoutes = require('./routes/customerRoutes');
const currencyRoutes = require('./routes/currencyRoutes');
const weatherRoutes = require('./routes/weatherRoutes');
const app = express();

const host = '127.0.0.1';
const port = 3001;

app.use(cors());
app.use(bodyParser.json());

// routes -> controller -> model
app.use('/customer', customerRoutes);
app.use('/currency', currencyRoutes);
app.use('/weather', weatherRoutes);

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

