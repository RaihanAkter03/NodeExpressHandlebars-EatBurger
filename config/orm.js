// Import MySQL connection.
var connection = require("../config/connection.js");




var orm = {
    //  * `selectAll()`
    selectAll: function (table, cb) {
        var query = "SELECT * FROM ??;";
        connection.query(query, [table], function (err, results) {
            if (err) throw err;
            cb(results);
        })
    },


    //     * `insertOne()`
    insertOne: function (value1, value2, value3, cb) {
        var query = "INSERT INTO ?? (??) VALUES (?);";
        connection.query(query, [value1, value2, value3], function (err, results) {
            if (err) throw err;
            cb(results);
        })
    },
    //     * `updateOne()`
    update: function (table, objColVals, condition, cb) {
        var queryString = "UPDATE " + table;

        queryString += " SET ";
        queryString += objToSql(objColVals);
        queryString += " WHERE ";
        queryString += condition;

        console.log(queryString);
        connection.query(queryString, function (err, result) {
            if (err) {
                throw err;
            }

            cb(result);
        });
    }
};

module.exports = orm;

