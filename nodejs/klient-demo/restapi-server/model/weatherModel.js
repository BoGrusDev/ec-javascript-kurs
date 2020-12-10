const fetch = require('node-fetch');

const list = async () => {
    let promise = await fetch('http://127.0.0.1:3002')
    return promise;
}

module.exports = {
    list
}