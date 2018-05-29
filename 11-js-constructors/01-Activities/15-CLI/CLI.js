var weather = require('weather-js');
var newAdmin = require("./weatherAdmin")

var userType = process.argv[2];
var userName = process.argv[3];
var location = process.argv[4];

var newAdmin = new newAdmin();

if(userType === "user") {
    newAdmin.newUserSearch(userName, location);
}
else if (userType === "admin") {
    newAdmin.getData();
}
else {
    console.log("Invalid login!");
}