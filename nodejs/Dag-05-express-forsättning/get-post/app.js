// app,js - demo get-post express

const express = require('express');
const app = express();

// http://localhost:3000?name=Bosse&mobil=0701212122
app.get('/', (req, res) => {
    /*
    console.log(req.query);
    for (const key in req.query) {
        console.log(key, req.query[key]);
    }
    */
    if (req.query.hasOwnProperty('name')) {
        console.log(req.query.name);
    }
    else {
        console.log('Parametern name saknas');
    }

    res.end();
})

app.get('/html', (req, res) => {
    // String, auto Content.Type text/html
    // utf-8 default
    res.send('<h1>Detta är HTML ÅÄÖåäö</h1>'); 
})

app.get('/json', (req, res) => { 
     // Object, auto Content.Type application/json
    let person = {};
    person.name = "Göran ÖkerÅkerSöner";
    person.mobile = "07212312";
    // res.set('Content-Type', application/json); (No need)
    res.send(person);
})

app.get('/json-file', (req, res) => {
    let jsonFile = '{"name" : "Lasse Larsson", "mobile" : "072121212"}';
    res.send(JSON.parse(jsonFile));
})

app.get('/info', (req, res) => {
    res.redirect('/html');
})
app.get('/nodejs', (req, res) => {
    res.redirect('https://nodejs.org');
})

app.get('/news', (req, res) => {
    res.status(404).end();
})

app.get('/multi/sigin', (req, res) => {
    res.end('Signin');
})

app.listen(3000);
