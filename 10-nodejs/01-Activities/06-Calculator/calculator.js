// * Create a command-line node application that takes in parameters like this:

//   * `node calculator.js add 1 2` ... and outputs 3
//   * `node calculator.js subtract 5 2` ... and outputs 3
//   * `node calculator.js multiply 3 2` ... and outputs 6
//   * `node calculator.js divide 8 2` ... and outputs 4
//   * `node calculator.js remainder 7 2`... and outputs 1

//   * `node calculator.js exp 7 2` ... and output 49 (7 squared)
//   * `node calculator.js algebra 4x+2=10`... and output 2. (Hint: Assume the algebra will always be 
//   * in this exact form and will always be addition)


var operation = process.argv[2];
var number1 = process.argv[3];
var number2 = process.argv[4];

// file path node is index 0.
// file path for file is index 1.
// operation is index 2.
// number1 (user input) is index 3.
// number2 (user input) is index 4.


if(operation === "add") {
    console.log(parseFloat(number1) + parseFloat(number2));
}
else if(operation === "subtract") {
    console.log(parseFloat(number1) - parseFloat(number2));
}
else if(operation === "multiply") {
    console.log(parseFloat(number1) * parseFloat(number2));
}
else if(operation === "divide") {
    console.log(parseFloat(number1) / parseFloat(number2));
}
else if(operation === "remainder") {
    console.log(parseFloat(number1) % parseFloat(number2));
}
else if(operation === "exp") {
    console.log(Math.pow(parseFloat(number1) , parseFloat(number2)));
}
