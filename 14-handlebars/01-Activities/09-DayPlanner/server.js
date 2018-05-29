var express = require("express");
var bodyParser = require("body-parser");

var app = express();

// Set the port of our application
// process.env.PORT lets the port be set by Heroku
var PORT = process.env.PORT || 8000;

// Parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

var mysql = require("mysql");

var connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "root",
  database: "day_planner_db"
});

connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }

  console.log("connected as id " + connection.threadId);
});

// Use Handlebars to render the main index.html page with the todos in it.
app.get("/", function(req, res) {
  connection.query("SELECT * FROM plans;", function(err, data) {
    if (err) {
      return res.status(500).end();
    }
    console.log("****** 1st get(): select * from plans ******");
    console.log(data);
    res.render("index", { plans: data });
  });
});

// Create a new todo by clicking save plan button.
app.post("/todos", function(req, res) {
  connection.query("INSERT INTO plans (plan) VALUES (?)", [req.body.plan], function(err, result) {
    if (err) {
      return res.status(500).end();
    }

    console.log("****** 2nd post(): INSERT INTO ******");
    // console.log(result);
    // Send back the ID of the new todo
    res.json({ id: result.insertId, plan:result.plan});
    console.log({ id: result.insertId });
    console.log({ plan: result.insertplan });
  });
});

// Retrieve all todos. This is to show as an arrays.
app.get("/todos", function(req, res) {
  connection.query("SELECT * FROM plans;", function(err, data) {
    if (err) {
      return res.status(500).end();
    }

    console.log("****** 3rd get(): select * from plans ******");
    console.log(data);
    res.json(data);
  });
});

// Update a todo by picking the todo from the dropdown and type some text and click update plan.
app.put("/todos/:id", function(req, res) {
  connection.query("UPDATE plans SET plan = ? WHERE id = ?", [req.body.plan, req.params.id], function(err, result) {
    if (err) {
      // If an error occurred, send a generic server failure
      return res.status(500).end();
    }
    else if (result.changedRows === 0) {
      // If no rows were changed, then the ID must not exist, so 404
      return res.status(404).end();
    }
    res.status(200).end();
    console.log("****** 4th put(): UPDATE plans where id ******");
    console.log(result);

  });
});

// DELETES IT FROM THE DATABASE a todo by clicking delete button next to plan.
app.delete("/todos/:id", function(req, res) {
  connection.query("DELETE FROM plans WHERE id = ?", [req.params.id], function(err, result) {
    if (err) {
      // If an error occurred, send a generic server failure
      return res.status(500).end();
    }
    else if (result.affectedRows === 0) {
      // If no rows were changed, then the ID must not exist, so 404
      return res.status(404).end();
    }
    res.status(200).end();
    console.log("****** 5th delete(): DELETE from plans where id ******");
    console.log(result.id);
  });
});

// Start our server so that it can begin listening to client requests.
app.listen(PORT, function() {
  // Log (server-side) when our server has started
  console.log("Server listening on: http://localhost:" + PORT);
});
