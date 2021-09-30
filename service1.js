const http = require('http');

const service2PORT = 4000;

http.createServer((req, res) => {
    res.write(`Hello from  ${req.client.remoteAddress} : ${req.client.remotePort}\n`);
    res.write(`To  ${req.client.localAddress}  : ${req.client.localPort}\n`);

    http.get(`http:localhost:${service2PORT}`, (response) => {

        response.on('error', (chunk) => {
            res.writeHead(404);
            res.write('Service 2 is unreacheable!');
            res.end();
        })
        
        response.on('data', (chunk) => {
            res.write(chunk);
        })
        response.on('end', () => {
            res.end();
          });
    })  
    
}).listen(8001);

