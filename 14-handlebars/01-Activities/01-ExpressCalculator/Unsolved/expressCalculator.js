// Dependencies
var express = require("express");

var PORT = process.env.PORT || 8000;

var app = express();

// Routes
// What routes do you need to have? Which ones are optional?
// TODO Add your routes here
app.get("/:operation/:firstNum/:secondNum", function(req, res) {

  // TODO parse out the variables from the request
  // Parameters are received from the URL
  // TODO make sure they're converted to integers (and not strings)
  // Parameters are converted to integers
  var operation = req.params.operation;
  var firstNum = parseInt(req.params.firstNum);
  var secondNum = parseInt(req.params.secondNum);

  // Initialize the result variable to send later
  var result;
  // Switch statement chooses operation based on the operation parameter.
  switch (operation) {
  
    case "add":
      case "+": 
      result = firstNum + secondNum;
      break;
    case "subtract":
      case "-": 
      result = firstNum - secondNum;
      break;
    case "multiply":
      case "*": 
      result = firstNum * secondNum;
      break;
    case "divide":
      case "/": 
      result = firstNum / secondNum;
      break;
    default:
      result =
        "Sorry! The only valid operations are add, subtract, multiply, and divide.";
  }

  // We return the result back to the user in the form of a string
  res.send(result.toString());

});

// Start our server so that it can begin listening to client requests.
app.listen(PORT, function() {
  // Log (server-side) when our server has started
  console.log("Server listening on: http://localhost:" + PORT);
});
