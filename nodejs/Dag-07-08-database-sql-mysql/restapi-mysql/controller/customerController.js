const customerModel = require('../model/customerModel');

const customerList = (req, res) => {
    customerModel.list()
    .then(function(data) {
        res.send(data);
    })
    .catch(error => console.log(error)); 
}

const customerGet = (req, res) => {
    if (!req.query.hasOwnProperty('id')) {
        let reply = {};
        reply.code = 9;
        reply.message = "Kundid saknas";
        res.send(reply);
    }
    else {
        let id = req.query.id;
        customerModel.get(id)
        .then(function(data) {
            res.send(data);
        })
        .catch(error => console.log(error));
    }
}

const customerAdd = (req, res) => {
    let customerData = {};
    customerData.customer_name = req.body.name;
    customerData.mobile = req.body.mobile;
    customerData.salary = req.body.salary;
    customerModel.add(customerData)
    .then(function(data) {
        res.send(data);
    })
    .catch(error => console.log(error));
}

module.exports = {
    customerList,
    customerGet,
    customerAdd
}