const customerModel = require('../model/customerModel');

const customerList = (req, res) => {
    customerModel.list()
    .then(function(data) {
        res.send(data);
    })
    .catch(error => console.log(error)); 
}

module.exports = {
    customerList
}