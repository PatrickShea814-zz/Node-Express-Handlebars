// DEPENDENCIES
// Import MySQL connection.
var connection = require("./connection");

var orm = {
    selectAll: function (tableInput, cb) {
        var queryString = "SELECT * FROM ??;"
        connection.query(queryString, [tableInput], function (err, result) {
            if (err) {
                throw err;
            }
            cb(result);
        });
    },

    insertOne: function (tableInput, colToInsert, colValue, cb) {
        var queryString = "INSERT INTO ?? (?) VALUES (?)";
        connection.query(queryString, [tableInput, colToInsert, colValue], function (err, result) {
            if (err) {
                throw err;
            }
            cb(result);
        });
    },

    updateOne: function (tableInput, colName, colValue, colCondition, conditionVal, cb) {
        var queryString = "UPDATE ?? SET ?? = ? WHERE ?? = ?";
        connection.query(queryString, [tableInput, colName, colValue, colCondition, conditionVal], function (err, result) {
            if (err) {
                throw err;
            }
            cb(result);
        });
    },
    
    deleteOne: function(table, condition, cb) {
        var queryString = "DELETE FROM " + table;
        queryString += " WHERE ";
        queryString += condition;

        console.log(queryString);

        connection.query(queryString, function(err, result) {
            if (err) {
                throw err
            }
            cb(result);
        });
    }
};

module.exports = orm;