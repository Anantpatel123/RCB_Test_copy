var bands = require("./band.js");

for (var anyName in bands) {//anyName is basically storing punk, rap, & classic from myBands object.
    console.log("A " + anyName + " band is " + bands[anyName]);//band is key Green Day, Run DMC, & Led Zeppelin.
}


// this is for Bonus.
var genre = process.argv[2];

var found = false;

for (var anyName in bands) {
    if (anyName === genre) {
    console.log("A " + anyName + " band is " + bands[anyName]);
    found = true;
    }    
}

if (!found) {       
    console.log("The genre " + genre + " does not exist in out object.");
}