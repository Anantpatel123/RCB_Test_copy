
var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");

// Tells node that we are creating an "express" server
var app = express();

// Sets an initial port. We"ll use this later in our listener
var PORT = process.env.PORT || 8080;

// Sets up the Express app to handle data parsing
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var waitingArray = [
    {
      customerName: "Saima",
      customerEmail: "saima@example.com",
      phoneNumber: "000-000-0000",
      customerID: "saimaCool"
    }
  ];

  var tableArray = [
    {
      customerName: "Ahmed",
      customerEmail: "ahmed@example.com",
      customerID: "afhaque89",
      phoneNumber: "000-000-0000"
    }
  ];


  //this from apiRoutes.js
  app.get("/api/tables", function(req, res) {
    res.json(tableArray);
  });
  //this from apiRoutes.js
  app.get("/api/waitlist", function(req, res) {
    res.json(waitingArray);
  });

  //this from htmlroutes.js
  app.get("/tables", function(req, res) {
    res.sendFile(path.join(__dirname, "tables.html"));
  });

  //this from htmlroutes.js
  app.get("/reserve", function(req, res) {
    res.sendFile(path.join(__dirname, "reserve.html"));
  });

  //this from htmlroutes.js
  // If no matching route is found default to home
  app.get("*", function(req, res) {
    res.sendFile(path.join(__dirname, "home.html"));
  });

  //this from apiRoutes.js
  app.post("/api/tables", function(req, res) {
    // Note the code here. Our "server" will respond to requests and let users know if they have a table or not.
    // It will do this by sending out the value "true" have a table
    // req.body is available since we're using the body-parser middleware
    if (tableArray.length < 5) {
        tableArray.push(req.body);
      res.json(true);
    }
    else {
        waitingArray.push(req.body);
      res.json(false);
    }
  });

  //this from apiRoutes.js
  app.post("/api/clear", function() {
    // Empty out the arrays of data
    tableArray = [];
    waitingArray = [];

    console.log(tableArray);
  });


// =============================================================================
//this from server.js
// LISTENER
// The below code effectively "starts" our server
// =============================================================================

app.listen(PORT, function() {
  console.log("App listening on PORT: " + PORT);
});



