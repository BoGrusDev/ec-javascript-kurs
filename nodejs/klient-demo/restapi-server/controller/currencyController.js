const currencyModel = require('../model/currencyModel');

const currencyList = (req, res) => {
    currencyModel.list()

    .then(response => response.json())
    .then(function(data) {   
        res.send(data.conversion_rates);
    })
    .catch(error => console.log(error)); 
}

module.exports = {
    currencyList
}
