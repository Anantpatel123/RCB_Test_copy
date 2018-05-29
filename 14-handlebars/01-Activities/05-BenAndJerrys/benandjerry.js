var express = require("express");
var exphbs = require("express-handlebars");

var app = express();

var PORT = process.env.PORT || 8000;

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

var icecreams = [
    {name: 'vanilla', price: 10, awesomeness: 3},
    {name: 'chocolate', price: 4, awesomeness: 8},
    {name: 'banana', price: 1, awesomeness: 1},
    {name: 'greentea', price: 5, awesomeness: 7},
    {name: 'jawbreakers', price: 6, awesomeness: 2},
  ];

  app.get("/icecreams/:name", function(req, res) {
      var name = req.params.name;
        for (var i = 0; i < icecreams.length; i++) {
        if(icecreams[i].name === name) {
            res.render("index", icecreams[i]);
        }
    }
  });

  app.get("/icecreams", function(req, res) {
    for (var i = 0; i < icecreams.length; i++)
    res.render("all-icecreams", { test: icecreams });
  });

  app.listen(PORT, function() {
    // Log (server-side) when our server has started
    console.log("Server listening on: http://localhost:" + PORT);
  });