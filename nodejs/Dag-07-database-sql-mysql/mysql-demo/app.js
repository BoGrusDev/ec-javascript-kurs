const mysql = require('mysql');
//  I xampp user är root, password är tomt, som standard
const connection = mysql.createConnection({
    host        : '127.0.0.1',
    user        : 'root',
    password    : '',
    database    :  'nodejs'
});

connection.connect();

connection.query('SELECT * FROM customer ORDER BY customer_name', function (error, results, fields) {
    if (error) throw error;
    console.log(JSON.stringify(results));
});

connection.end();
