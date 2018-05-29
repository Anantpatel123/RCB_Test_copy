var express = require("express");
var bodyParser = require("body-parser");
var mongoose = require("mongoose");

var app = express();
// Mongoose Connect
var db = "mongodb://localhost/dayplanner";
mongoose.connect(db);

var Day = require("./model/day");

app.use(express.static("public"));
app.use(bodyParser.json());

app.get("/", function(req, res) {
  res.send("hello world");
});

app.get("/find", function(req, res) {
  // Find all plans from db
});

app.post("/grab", function(req, res) {
  // Find 1 plan from db
});

app.post("/add", function(req, res) {
  // Add a full day of plan to db
});

var PORT = 3000;
app.listen(PORT, function() {
  console.log("listenin on port:" + port);
});
