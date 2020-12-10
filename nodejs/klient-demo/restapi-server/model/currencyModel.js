const fetch = require('node-fetch');

const list = async () => {
    let promise = await fetch('https://v6.exchangerate-api.com/v6/547f5391104d30d830f55442/latest/SEK')
    return promise;
}

module.exports = {
    list
}