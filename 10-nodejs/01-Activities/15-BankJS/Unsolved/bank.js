var fs = require("fs");

//total || withdraw || deposit || lotto
var transactionType = process.argv[2];
var value = process.argv[3];

if(transactionType === "total") {
  total();    
}
else if(transactionType === "deposit") {
  deposit();
}
else if(transactionType === "withdraw") {
  withdraw();
}
else if(transactionType === "lotto") {
  lotto();
}
else {
  console.log ("That is not a valid transaction type.");
}


function lotto () {
  fs.appendFile("bank.txt", ", -2", function(err) {
    if (err) {
      return console.log(err);
    }    
  });

    var chance = Math.floor(Math.random() * 101)

    if(chance === 50) {

      consolele.log("Congratulations! You've won the lotto!");

      fs.appendFile("bank.txt", ", 100", function(err) {
        if (err) {
          return console.log(err);
        }        
      });
    }
      else {
      console.log("Sorry yu lost $2. Stop Playing!!")
    }
}

function deposit() {
  fs.appendFile("bank.txt", ", " + value, function(err) {
    if (err) {
      return console.log(err);
    }
    console.log("You have sucessfully deposited $" + value);
  })

}

function withdraw() {
  fs.appendFile("bank.txt", ", -" + value, function(err) {
    if (err) {
      return console.log(err);
    }
    console.log("You have sucessfully withdraw $" + value);
  })

}

function total() {
  fs.readFile("bank.txt", "utf8", function(error,data) {
    if (error) {
      return console.log(error);
    }
    
    var dataArray = data.split(", ");

    var total = 0;
    for (let i = 0; i < dataArray.length; i++) {
      //total = total + parseFloat(datArray[i]);
      total += parseFloat(dataArray[i]);
      }

      console.log("You have a total of $" + total.toFixed(2));
  });
}