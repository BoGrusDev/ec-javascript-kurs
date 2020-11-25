// Demo nodejs Express
const express = require('express');
const app = express();
const port = 3000;

/*
app.use((express.static('public/js')));
app.use((express.static('public/css')));
*/

app.get('/', (req, res) => {
    res.send('Hello');
})

app.get('/om-oss', (req, res) => {
    res.send('Om oss');
})

app.post('/api', function(req, res) {
    console.log('Inside Post');
    var body = '';
    req.on("data", function( data) {
        body += data;
    });
    req.on('end', function () {
        console.log(body);
        // body = Buffer.concat(body).toString();
        res.send(body);
    })
})

app.listen(port, () => {
    console.log(`Körs på http://localhost:${port}`)
})