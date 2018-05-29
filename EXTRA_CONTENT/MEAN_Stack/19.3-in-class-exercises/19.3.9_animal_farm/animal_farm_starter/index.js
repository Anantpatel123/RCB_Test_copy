var express = require("express");
var bodyParser = require("body-parser");
var mongoose = require("mongoose");

var app = express();
// Mongoose Connect
var db = "mongodb://localhost/animalFarm";
mongoose.connect(db);

var Animal = require("./model/animal");
var Farmhand = require("./model/farmhand");

app.use(express.static("public"));
app.use(bodyParser.json());
app.get("/", function(req, res) {
  res.send("hello world");
});

// check how many clicks are saved
app.get("/check", function(req, res) {

});

// add to workPoints
app.post("/add", function(req, res) {

});
// find all the animals
app.get("/find", function(req, res) {

});
// buy the animal
app.post("/buy", function(req, res) {

});

var PORT = 3000;
app.listen(PORT, function() {
  console.log("listenin on port:" + port);
});
