const mysql = require('promise-mysql');
//  I xampp user är root, password är tomt, som standard
const dbConnection = async () => {
    return await mysql.createConnection({
        host        : '127.0.0.1',
        user        : 'root',
        password    : '',
        database    :  'nodejs'
    })
}

const list = async () => {
    const db = await dbConnection();
    const result = await db.query("SELECT * FROM customer")
    await db.end();
    return result;
}

module.exports = {
    list
}