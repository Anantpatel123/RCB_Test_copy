// *********************************************************************************
// api-routes.js - this file offers a set of routes for displaying and saving data to the db
// *********************************************************************************

// Dependencies
// =============================================================
var connection = require("../config/connection.js");


// Routes
// =============================================================
module.exports = function(app) {

  // Get all chirps
  app.get("/api/all", function(req, res) {
    connection.query("SELECT * FROM chirps;", function(err, data) {
      if (err) throw err;
      res.json(data);
      console.log("app.get: ", data);
    });
    
  });

  // Add a chirp
  app.post("/api/chirps", function(req, res) {
    connection.query("INSERT INTO chirps (author, chirp) VALUES (?, ?)", 
    [req.body.author, req.body.chirp], function(err,data) {
      if (err) throw error;
       
      // res.json(data);
      res.redirect("/api/all");
    });
  });

};
