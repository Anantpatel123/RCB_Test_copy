var weather = require('weather-js');

var UserSearch = function(name, location){
    this.date = Date.now();
    this.name = name;
    this.location = location;

    this.getWeather = function(){
        weather.find({search: this.location, degreeType: 'F'}, function(err, result) {
            if(err) console.log(err);
     
            console.log(JSON.stringify(result, null, 2));
     });
   };
};

// var newUserSearch = new UserSearch("Franklin", "Somerset, NJ");
// newUserSearch.getWeather();

module.exports = UserSearch;