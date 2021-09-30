const http = require('http');

http.createServer((req, res) => {
    res.write(`Hello from  ${req.client.remoteAddress} : ${req.client.remotePort}\n`);
    res.write(`To  ${req.client.localAddress}  : ${req.client.localPort}\n`);
    res.end();
}).listen(4000);