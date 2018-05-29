var express = require("express");
var app = express();
var logger = require("morgan");

app.use(logger("dev"));
app.use(express.static("public"));


var PORT = 3000;
app.listen(PORT, function() {
  console.log("listening on port:" + port);
});
