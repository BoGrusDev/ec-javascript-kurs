// routes.js
const { resolveSoa } = require('dns');
const fs = require('fs');
const url = require('url');
const { brotliDecompressSync } = require('zlib');

html = {
    render(path, res) {
        fs.readFile(path, 'utf-8', function (error, data) {
            if (error) {
                res.writeHead(404, {
                    'Content-Type' : 'text/html; charset=utf-8'
                });
                res.write('Sidan finns ej - render');
            } else {
                res.writeHead(200, {
                    'Content-Type' : 'text/html; charset=utf-8'
                });
                res.write(data);
            }
            res.end();
        })
    }
}

json = {
    render(path, res) {
        fs.readFile(path, 'utf-8', function  (err, data) {
            if (err) {
                res.writeHead(404);
            }
            else {
                res.writeHead(200, {
                    'Content-Type' : 'application/json; charset=utf-8'
                });
                res.write(data);
            }
            res.end();
        })
    },
    add(req, res) {
        let body = [];
        req.on('data', (chunk) => {
            body.push(chunk);
        }).on('end', () => {
            body = Buffer.concat(body).toString();
            console.log(body);
            const fileUrl = 'visitors.json';
            // -- Övning
            // var visitors = [];
            // --  Läsa in filen
            // --  Konveretras till JSON object
            // -- Push med nya object (visitors) och lägger body() 

            // visitors.push(JSON.parse(body));


            fs.writeFile(fileUrl, body, (err) => {
                let reply = {};
                res.writeHead(200, {
                    'Content-Type' : 'application/json; charset=utf-8'
                });
                if (err) {
                    reply.code = -9;
                    reply.message = "Något gick fel"; 
                }
                else {
                    reply.code = 1;
                    reply.message = "Allt OK";
                }
                res.write(JSON.stringify(reply));
                res.end();

            })
        });
    }
}

module.exports = {
    handleRequest(req, res) {        
       
        let path = url.parse(req.url).pathname;

        if (req.method === 'GET') {
            switch (path) {
                case '/' :
                    html.render('./index.html', res);
                    break;
                case '/om-oss' :
                    html.render('./about-us.html', res);
                    break;
                default :
                    res.writeHead(404, {
                        'Content-Type' : 'text/html; charset=utf-8'
                    });
                    res.write('Sidan finns ej');
                    res.end();
            }
        }
        else if (req.method === 'POST') {
            switch (path) {
                case '/' : 
                    res.writeHead(200);
                    res.write('Inside POST');
                    res.end();
                    break;
                case '/api-load' :
                    json.render('./person.json', res);
                    break;
                case '/api/visitor-add' :
                    json.add(req, res);
                    break;
                default :
                    res.writeHead(404);
                    res.end();
            }
        }
        else {
            res.write('Ej tillåtet: ' + req.method);
            res.end();
        }
    }
} 