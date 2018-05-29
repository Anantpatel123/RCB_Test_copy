// *********************************************************************************
// api-routes.js - this file offers a set of routes for displaying and saving data to the db
// *********************************************************************************

// Dependencies
// =============================================================
var allchar = require("../model/character.js");


// Routes
// =============================================================
module.exports = function(app) {
  // Search for Specific Character (or all characters) then provides JSON
  app.get("/api/:characters?", function(req, res) {
    // If the user provides a specific character in the URL...
    if (req.params.characters) {
      // Then display the JSON for ONLY that character.
      // (Note how we're using the ORM here to run our searches)
    allchar.findOne({
      where:{
      routeName: req.params.characters
      }
    }).then(function(result) {
      return res.json(result);
    });
  }
  else {
    // Otherwise...
      // Otherwise display the data for all of the characters.
      // (Note how we're using Sequelize here to run our searches)
    allchar.findAll({}).then(function(result) {
      return res.json(result);
    });
  }
  });

  // If a user sends data to add a new character...
  app.post("/api/new", function(req, res) {
    // Take the request...
    
    // Create a routeName
    // Using a RegEx Pattern to remove spaces from character.name
    // You can read more about RegEx Patterns later https://www.regexbuddy.com/regex.html
    var routeName = req.body.name.replace(/\s+/g, "").toLowerCase();
      
      allchar.create({
      routeName: routeName,
      name: req.body.name,
      role: req.body.role,
      age: req.body.age,
      forcePoints: req.body.forcePoints,
    });
  });

};