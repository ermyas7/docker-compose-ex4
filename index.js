const server = require('http');

server.createServer((req, res) => {
    console.log(`Hello from  ${req.client.remoteAddress} : ${req.client.remotePort}`);
    console.log(`To  ${req.client.localAddress}  : ${req.client.localPort}`);
    res.write("simple http server");
    res.end();
}).listen(3000);