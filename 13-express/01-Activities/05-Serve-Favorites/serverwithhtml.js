var http = require("http");
var fs = require("fs");

var PORT = 8000;

var server = http.createServer(handleRequest);

server.listen(PORT, function() {
    console.log("Server is listening on PORT: " + PORT);
});

function handleRequest(req, res) {

    var path = req.url;

    switch (path) {

        case "/favfoods":
        return favfoods(path, req, res);

        case "/favmovies":
        return favmovies(path, req, res);

        case "/favcss":
        return favcss(path, req, res);
      
        default:
          return home(path, req, res);
        }      
}

function home(url, req, res) {
    fs.readFile(__dirname + "/home.html", function(err, data) {
        res.writeHead(200, { "Content-Type": "text/html" });
        res.end(data);
    });
}

function favfoods(url, req, res) {
    fs.readFile(__dirname + "/favfoods.html", function(err, data) {
        res.writeHead(200, { "Content-Type": "text/html" });
        res.end(data);
    });
}

function favmovies(url, req, res) {
    fs.readFile(__dirname + "/favmovies.html", function(err, data) {
        res.writeHead(200, { "Content-Type": "text/html" });
        res.end(data);
    });
}

function favcss(url, req, res) {
    fs.readFile(__dirname + "/favcss.html", function(err, data) {
        res.writeHead(200, { "Content-Type": "text/html" });
        res.end(data);
    });
}




