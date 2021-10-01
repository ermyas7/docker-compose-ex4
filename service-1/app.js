const http = require('http');

http.createServer((req, res) => {
    res.write(`Hello from  ${req.client.remoteAddress} : ${req.client.remotePort}\n`);
    res.write(`To  ${req.client.localAddress}  : ${req.client.localPort}\n`);
    const host = req.headers.host.split(':')[0];
    http.get(`http://server2:4000`, (response) => {
        response.on('error', (err) => {
            console.log(err);
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

