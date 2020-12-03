const mysql = require('mysql');
//  I xampp user är root, password är tomt, som standard
const connection = mysql.createConnection({
    host : 'shishi.oderland.com',
    user : 'grusitse_ec_lisa',
    password : 'eckurs2020',
    database :  'grusitse_ec_lisa'
});

connection.connect();

connection.query('SELECT * FROM customer ORDER BY customer_name', function (error, results, fields) {
    if (error) throw error;
    console.log(JSON.stringify(results));
});

connection.end();
