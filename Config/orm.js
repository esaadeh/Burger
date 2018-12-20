// Import MySQL connection.
var connection = require("../config/connection.js");


var orm = {
    select: function(selectWhat, fromWhere) {
      var queryString = "SELECT ?? FROM ??";
      connection.query(queryString, [selectWhat, fromWhere], function(err, result) {
        if (err) throw err;
        console.log(result);
      });
    },
    // selectWhere: function(tableInput, colToSearch, valOfCol) {
    //   var queryString = "SELECT * FROM ?? WHERE ?? = ?";
  
    //   console.log(queryString);
  
    //   connection.query(queryString, [tableInput, colToSearch, valOfCol], function(err, result) {
    //     if (err) throw err;
    //     console.log(result);
    //   });
    // },
    // leftJoin: function(whatToSelect, tableOne, tableTwo, onTableOneCol, onTableTwoCol) {
    //   var queryString = "SELECT ?? FROM ?? AS tOne";
    //   queryString += " LEFT JOIN ?? AS tTwo";
    //   queryString += " ON tOne.?? = tTwo.??";
  
    //   console.log(queryString);
  
    //   connection.query(queryString, [whatToSelect, tableOne, tableTwo, onTableOneCol, onTableTwoCol], function(
    //     err,
    //     result
    //   ) {
    //     if (err) throw err;
    //     console.log(result);
    //   });
    // }
  };
  
  module.exports = orm;