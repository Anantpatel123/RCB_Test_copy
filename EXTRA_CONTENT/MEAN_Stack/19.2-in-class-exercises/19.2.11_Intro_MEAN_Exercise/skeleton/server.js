var express = require("express");

var bodyParser = require("body-parser");
var mongoose = require("mongoose");
var logger = require("morgan");

var app = express();
// Mongoose Connect
var db = "mongodb://localhost/recipebook";
mongoose.connect(db);

var Recipe = require("./Recipe");

app.use(logger("dev"));
app.use(express.static("public"));
app.use(bodyParser.json());


app.get("/", function(req, res) {
  res.send("index.html");
});


app.get("/recipes", function(req, res) {

  // Route to get all recipes


});

app.post("/newrecipe", function(req, res) {

  // Route to save a new recipe


});


var PORT = 3000;
app.listen(PORT, function() {
  console.log("listening on port:" + port);
});
