// Use expresss and establish router
var express = require("express");

var router = express.Router();

// Import the model burger.js to use its database functions.
var burger = require("../models/burger.js");

// Routes
// Get all burgers
router.get("/", function(req, res) {
  burger.selectAll(function(data) {
    var hbsObject = {
      burgers: data
    };
    console.log(hbsObject);
    res.render("index", hbsObject);
  });
});

// Add burger via a POST
router.post("/api/burgers", function(req, res) {
  // User burger_name input with a default of !true for devoured
  burger.insertOne([
    "burger_name", "devoured"
  ], [
    req.body.burger_name, 0
  ], function(result) {
    // Send back the ID of the new burger
    res.json({ id: result.insertId });
  });
});

// Update route via a PUT for devoured
router.put("/api/burgers/:id", function(req, res) {
  // ID of the burger corresponding to the devour button clicked
  var condition = "id = " + req.params.id;
  // console.log("condition", condition);
  burger.updateOne({
    devoured: req.body.devoured
  }, condition, function(result) {
    if (result.changedRows == 0) {
      // If no rows were changed, then the ID must not exist, so 404
      return res.status(404).end();
    } else {
      res.status(200).end();
    }
  });
});

// Export routes for server.js to use.
module.exports = router;
