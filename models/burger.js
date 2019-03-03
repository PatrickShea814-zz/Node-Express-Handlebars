// DEPENDENCIES
// Import the ORM to create functions that will interact with the database.
var orm = require("../config/orm.js");

var burger = {
    selectAll: function(cb) {
        orm.selectAll("burgers", function(res) {
            cb(res);
        });
    },

    insertOne: function(colToInsert, colValue, cb) {
        orm.insertOne("burgers", colToInsert, colValue, function(res) {
            cb(res);
        });
    },

    updateOne: function(colName, colValue, colCondition, conditionVal, cb) {
        orm.updateOne("burgers", colName, colValue, colCondition, conditionVal, function(res) {
            cb(res);
        });
    },

    deleteOne: function(condition, cb) {
        orm.deleteOne("burgers", condition, function(res) {
            cb(res);
        });
    }
};

// Export the database functions for the controller (catsController.js).
module.exports = burger;
