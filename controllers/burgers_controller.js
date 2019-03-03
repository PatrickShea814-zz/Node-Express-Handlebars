const express = require('express');
var router = express.Router();
const burger = require('../models/burger.js');

var router = express.Router();

// GETS all of the data from the MySQL burgers table. Uses Handlebars #if & #unless statements to sort.
router.get("/", function (req, res) {
    burger.selectAll(function (data) {
        res.render("index", {
            burgers: data
        });
        console.log(data);
    });
});
// POST new burger to eat to the db.
router.post("/api/burgers", function (req, res) {
    burger.insertOne(["burger_name", "devoured"], [req.body.burger_name, req.body.devoured], function (result) {
        res.json({
            id: result.id
        });
    });
});

// UPDATE a burgers devoured state to true in the burgers table.
router.put("/api/burgers/:id", function (req, res) {
    var colCondition = "id = " + req.params.id;
    console.log("colCondition", colCondition);

    burger.updateOne(
        {
            devoured: req.body.devoured
        },
        colCondition,
        function (result) {
            if (result.changedRows === 0) {
                return res.status(404).end();
            }
            res.status(200).end();
        }
    );
});
// Delete burger from db.
router.delete("/api/burgers/:id", function (req, res) {
    var condition = "id = " + req.params.id;
    burger.deleteOne(condition, function (result) {
        if (result.changedRows === 0) {
            // If no rows were changed, then the ID must not exist, so 404.
            return res.status(404).end();
        } else {
            res.status(200).end();
        }
    });
});


module.exports = router;