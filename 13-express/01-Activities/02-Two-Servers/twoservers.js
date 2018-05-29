var http = require("http");

var PORTA = 7000;
var PORTB = 7500;

function handleRequestA(request, response) {
    response.end("You are awesome!!! ");
}

function handleRequestB(request, response) {
    response.end("You still dont know node and SQl. ");
}

var serverA = http.createServer(handleRequestA);
var serverB = http.createServer(handleRequestB);

serverA.listen(PORTA,function() {
    console.log("Server listening on: http://localhost:" + PORTA);
});

serverB.listen(PORTB, function() {
    console.log("Server listening on: http://localhost:" + PORTB);
});