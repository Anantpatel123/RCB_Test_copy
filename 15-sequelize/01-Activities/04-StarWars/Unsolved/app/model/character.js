var Sequelize = require("sequelize");

var sequelize = require("../config/connection.js");

var allchar = sequelize.define("allcharacters", {
  routeName: {
    type: Sequelize.STRING,
    allowNull: false
  },
  name: {
    type: Sequelize.STRING
  },
  role: {
    type: Sequelize.STRING
  },
  age: {
    type: Sequelize.INTEGER
  },
  forcePoints: {
    type: Sequelize.INTEGER
  },
}, {
  timestamps: false
});

// var allchar = sequelize.define("allcharacters", {
//   routeName: {
//     type: Sequelize.STRING,
//     allowNull: false
//   },
//   name: {
//     type: Sequelize.STRING
//   },
//   role: {
//     type: Sequelize.STRING
//   },
//   age: {
//     type: Sequelize.INTEGER
//   },
//   forcePoints: {
//     type: Sequelize.INTEGER
//   },
// },{
//   timestamp: false
// });

// Syncs with DB
allchar.sync();

// Makes the Chirp Model available for other files (will also create a table)
module.exports = allchar;
