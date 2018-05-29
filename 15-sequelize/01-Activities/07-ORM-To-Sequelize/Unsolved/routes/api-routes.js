// *********************************************************************************
// api-routes.js - this file offers a set of routes for displaying and saving data to the db
// *********************************************************************************

// Dependencies
// =============================================================

// Requiring our Todo model
var db = require("../models");
// var Sequelize = require('sequelize');

// Routes
// =============================================================
module.exports = function(app) {

  // GET route for getting all of the todos
  app.get("/api/todos", function(req, res) {
    db.todo.findAll({}).then(function(dbtodo) {
      res.json(dbtodo);
    });
  });

  // POST route for saving a new todo. We can create todo with the data in req.body
  app.post("/api/todos", function(req, res) {
    // Write code here to create a new todo and save it to the database
    // and then res.json back the new todo to the user
    db.todo.create({
      text: req.body.text,
      complete: req.body.complete
    }).then(function(result){
      res.json(result);
    });    
  });

  // DELETE route for deleting todos. We can get the id of the todo to be deleted from
  // req.params.id
  app.delete("/api/todos/:id", function(req, res) {
    db.todo.destroy({
        where: {
          id: req.params.id
        }
      }).then(function(result){
        res.json(result);
      })
  });

  // PUT route for updating todos. We can get the updated todo data from req.body
  app.put("/api/todos", function(req, res) {
    db.todo.update({
        text: req.body.text,
        complete: req.body.complete
      },{
        where: {
          id: req.body.id
        }
      }).then(function(dbtodos){
        res.json(dbtodos);
      });
  });
};
