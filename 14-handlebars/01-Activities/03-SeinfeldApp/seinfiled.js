var express = require("express");
var mysql = require("mysql");

var app = express();

var PORT = process.env.PORT || 8000;

var connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "root",
  database: "seinfeld_db"
});

connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});


app.get("/cast", function(req, res) {

      connection.query("SELECT * FROM actors order by id", function(err, result) {  
      var html = "<h1> Actors </h1>";
      html += "<ul>";
  
      // We then use the retrieved records from the database to populate our HTML file.
      for (var i = 0; i < result.length; i++) {
        html += "<li><p> ID: " + result[i].id + "</p>";
        html += "<p>Name: " + result[i].name + " </p></li>";
        html += "<p>Coolness Points: " + result[i].coolness_points + " </p></li>";
        html += "<p>Attitude: " + result[i].attitude + " </p></li>";
      }  
      html += "</ul>";
  
      // Finally we send the user the HTML file we dynamically created.
      res.send(html);
    });
  });


  app.get("/coolness-chart", function(req, res) {

    connection.query("SELECT * FROM actors order by coolness_points DESC", function(err, result) {  
    var html = "<h1> Actors by coolness points </h1>";
    html += "<ul>";

    // We then use the retrieved records from the database to populate our HTML file.
    for (var i = 0; i < result.length; i++) {
      html += "<li><p> ID: " + result[i].id + "</p>";
      html += "<p>Name: " + result[i].name + " </p></li>";
      html += "<p>Coolness Points: " + result[i].coolness_points + " </p></li>";
      html += "<p>Attitude: " + result[i].attitude + " </p></li>";
    }  
    html += "</ul>";

    // Finally we send the user the HTML file we dynamically created.
    res.send(html);
  });
});

app.get("/attitude-chart/:att", function(req, res) {

    connection.query("SELECT * FROM actors where attitude = ?", [req.params.att], function(err, result) {  
    var html = "<h1> Actor with an attitude of </h1>";
    html += "<ul>";

    // We then use the retrieved records from the database to populate our HTML file.
    for (var i = 0; i < result.length; i++) {
      html += "<li><p> ID: " + result[i].id + "</p>";
      html += "<p>Name: " + result[i].name + " </p></li>";
      html += "<p>Coolness Points: " + result[i].coolness_points + " </p></li>";
      html += "<p>Attitude: " + result[i].attitude + " </p></li>";
    }  
    html += "</ul>";

    // Finally we send the user the HTML file we dynamically created.
    res.send(html);
  });
});






  app.listen(PORT, function() {
    // Log (server-side) when our server has started
    console.log("Server listening on: http://localhost:" + PORT);
  });
  