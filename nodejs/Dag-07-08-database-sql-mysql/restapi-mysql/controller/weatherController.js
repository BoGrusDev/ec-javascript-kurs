const weatherModel = require('../model/weatherModel');

const weatherList = (req, res) => {
    weatherModel.list()
    .then(response => response.json())
    .then(function(data) {
        res.send(data);
    })
    .catch(error => console.log(error));
}

module.exports = {
    weatherList
}