var orm = require("./config/orm.js");

orm.selectWhere("parties", "party_type", "grown-up", function(result) {

    // var data = result;
    console.log(result); // Data is undefined. Why?
});