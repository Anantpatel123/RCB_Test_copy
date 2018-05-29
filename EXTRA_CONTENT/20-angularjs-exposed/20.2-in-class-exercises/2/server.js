var express = require("express");
var logger = require("morgan");

var app = express();
app.use(logger("dev"));
app.use(express.static("public"));


var PORT = 3000;
app.listen(PORT, function() {
  console.log("listening on port:" + port);
});
