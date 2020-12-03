const mysql = require('promise-mysql');
//  I xampp user är root, password är tomt, som standard
const dbConnection = async () => {
    return await mysql.createConnection({
        host        : '127.0.0.1',
        user        : 'root2',
        password    : '',
        database    :  'nodejs'
    })
}

const list = async () => {
    try {
        const db = await dbConnection();
        try {
            const result = await db.query("SELECT customer_id, customer_name FROM customer ORDER BY customer_name")
            await db.end();
            return result;
        }
        catch(err) {
            let reply = {};
            reply.code = 9;
            reply.message = "Något fel med databasen har inträffat";
            return reply;
        }
    }
    catch(err) {
        let reply = {};
        reply.code = 9;
        reply.message = "Kan inte koppla till databasen";
        return reply;
    }
}

const get = async (id) => {
    try {
        const db = await dbConnection();
        const result = await db.query(`SELECT * FROM customer WHERE customer_id = ${id}`)
        await db.end();
        if (result.length == 0) {
            let reply = {};
            reply.code = 0;
            return reply;
        }
        else {
            result.code = 1;
            return result;
        }
    }
    catch(err) {
        let reply = {};
        reply.code = 9;
        reply.message = "Något fel med databasen har inträffat";
        return reply;
    }
}

const add = async (data) => {
    try {
        const db = await dbConnection();
        const sql = `INSERT INTO customer (customer_name, mobile, salary) VALUES ('${data.customer_name}', '${data.mobile}', '${data.salary}')`
        try {
            const result = await db.query(sql)
            await db.end();
            let reply = {};
            reply.code = 1;
            reply.customer_id = result.insertId;
            return reply;
        }
        catch(err) {
            // console.log(err); // TypeError: failed to fetch
            let reply = {};
            reply.code = 0;
            reply.message = 'Fel vid lägga til kund';
            return reply;
        }
    }
    catch(err) {
        let reply = {};
        reply.code = 9;
        reply.message = "Något fel med databasen har inträffat";
        return reply;
    }
}

module.exports = {
    list,
    get,
    add
}