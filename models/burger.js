// Import the ORM to create functions that will interact with the database.
var orm = require("../config/orm.js");

var burger = {
  // selectAll burgers method to retrieve all burgers in the DB
  selectAll: function(cb) {
    orm.selectAll("burgers", function(res) {
      cb(res);
    });
  },
  // insertOne method to add a burger to the DB 
  // The variables cols and vals are arrays.
  insertOne: function(cols, vals, cb) {
    orm.insertOne("burgers", cols, vals, function(res) {
      cb(res);
    });
  },
  // updateOne method to update the devoured state of a burger
  updateOne: function(objColVals, condition, cb) {
    orm.updateOne("burgers", objColVals, condition, function(res) {
      cb(res);
    });
  },
};

// Export the database functions for the controller (burgers_controllers.js).
module.exports = burger;
