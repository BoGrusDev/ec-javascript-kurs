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
            let reply = result[0];
            reply.code = 1;
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

const update = async (id, data) => {
    try {
        const db = await dbConnection();
        let sql = `UPDATE customer SET customer_name = '${data.customer_name}', mobile = '${data.mobile}', salary = '${data.salary}' `;
        sql += `WHERE customer_id = ${id}`;
        //console.log(sql);
        try {
            const result = await db.query(sql)
            await db.end();
            let reply = {};
            if (result.affectedRows > 0) {    
                reply.code = 1;
            }
            else {
                reply.code = 0;
            }
            return reply;
        }
        catch(err) {
            // console.log(err); // TypeError: failed to fetch
            let reply = {};
            reply.code = 0;
            reply.message = 'Fel vid ändra i kund';
            return reply;
        }
    }
    catch(err) {
        let reply = {};
        reply.code = 9;
        reply.message = "Något fel med databasen har inträffat";
        return reply;
    }
    /*
        {
            "fieldCount": 0,
            "affectedRows": 1, // OK
            "insertId": 0,
            "serverStatus": 2,
            "warningCount": 0,
            "message": "(Rows matched: 1  Changed: 1  Warnings: 0",
            "protocol41": true,
            "changedRows": 1 // If something changed
        }
    */
}

const updateDynamic = async (data) => {
    // Prepare
    var id;
    var updateQuery = '';
    for (const key in data) {
        if (key.charAt(0) == '_') {
            id = data[key];
        }
        else {
            updateQuery += key + "='" + data[key] + "',";
        }
    }
    updateQuery = updateQuery.slice(0, -1);
    var sql = `UPDATE customer SET ${updateQuery} WHERE customer_id = ${id}`;
    try {
        const db = await dbConnection();   
        //console.log(sql);
        try {
            const result = await db.query(sql)
            await db.end();
            let reply = {};
            if (result.affectedRows > 0) {    
                reply.code = 1;
            }
            else {
                reply.code = 0;
            }
            return reply;
        }
        catch(err) {
            // console.log(err); // TypeError: failed to fetch
            let reply = {};
            reply.code = 0;
            reply.message = 'Fel vid ändra i kund';
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

module.exports ={
    list,
    get,
    add,
    update,
    updateDynamic
}