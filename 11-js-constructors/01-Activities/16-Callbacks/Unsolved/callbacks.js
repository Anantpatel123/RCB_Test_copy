var fs = require("fs");

// Write a function that logs a message, then executes
// a function argument.
function string(val, fun) {
    fs.appendFile("log.txt", val, function(err) {
        if (err) console.log(err);
    })
    fun();
}

// Write a function that runs a function argument if
// its other argument is truthy.
function checkTrue(guess, name){
    if(guess) {
        name();
    }
    else{
        console.log(name);
    }
}

// Write a function that accepts a function argument and
// a value, and returns a function that returns the result
// of executing the function argument with the value.
// This isn't as hard as it sounds!
function function3(fun, str){
    var num1 = 0;
    var myString = "Anant";

    return function(){
        num1++
        
        console.log("Num 1: ", num1);
        return fun(null, myString);
    }
}

var test = function3(checkTrue, "Blah");;
console.log(test);// it will store function because test stores results of function3 which returns function().

test();
test();

// Use fs.writeFile to log a message to a file called
// log.txt. Are yo using callbacks anywhere? Where?
fs.writeFile("log.txt", "Anant", function(err) {
    if (err) console.log(err);

});