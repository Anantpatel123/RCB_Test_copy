var fs = require("fs");
var UserSearch = require("./UserSearch.js");
var moment = require("moment")

var WeatherAdmin = function () {

    this.newUserSearch = function (name, location) 
    {
        var newUserInfo = new UserSearch(name, location);
        newUserInfo.getWeather();
      
    var logTxt = `Name: ${newUserInfo.name} Location: ${newUserInfo.location} Date: 
    ${moment(newUserInfo.date).format("MMMM Do YYYY, h:mm:ss a")}`;

        fs.appendFile("log.txt", logTxt, function (err) {
            if (err) {
                console.log(err);
            }
            console.log("log.txt was updated!");
        });
    };

    this.getData = function () {
        fs.readFile("log.txt", "utf8", function(err,data) {
            console.log(data);
        });
    
    };

};

module.exports = WeatherAdmin;