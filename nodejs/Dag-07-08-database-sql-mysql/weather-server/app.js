// Weather server
const express = require('express');
const fetch = require('node-fetch');

const app = express();
const host = '127.0.0.1';
const port = 3002;

/*
    app
        routes
            controller
                model

    routes -> controller -> model
*/

// Model
const weather = async () => {
    let promise = await fetch('https://api.openweathermap.org/data/2.5/group?id=5128581,5368361,1850147,1220988,524901,1819729,2988506,3369157,2147714,3530597,2711537,2706619,2678129,2673875,2666670,2693301&lang=SE&appid=cd076890ec3552da2c0f46b5caea9530&units=metric')
    return promise;
}

// Router
app.get('/', (req, res) => {
    // Controller
    weather()
    .then(response => response.json())
    .then(function(data) {
        let reply = [];
        for (let i=0; i < data.list.length; i++) {
            let item = {};
            item.name = data.list[i].name;
            item.desc = data.list[i].weather[0].description;
            item.temp = data.list[i].main.temp;
            reply.push(item);
        }
        res.send(reply);
    })
    .catch(error => console.log(error))
});

app.listen(port, host, () => {
    console.log(`Run at: http://${host}:${port}`);
});