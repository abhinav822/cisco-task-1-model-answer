const webSocketServer = require('websocket').server;
const http = require('http');

const server = http.createServer();
server.listen(55455);
const wsServer = new webSocketServer({ httpServer: server });

wsServer.on('request', function (request) {
    console.log('establishing a new connection with client');
    var connection = request.accept(null, request.origin);
    setInterval(() => {
        connection.sendUTF(new Date().getTime())
    }, 100);
});

//to push sextant repo to github of abhinav822 to main branch use below command

//git push

//to push sextant repo to github of abhinav822 to main branch use below command

//git push origin main --force 