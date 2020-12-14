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
    updateOne: function (table,colval,id,cb) {
        var queryString = "UPDATE " + table + " SET devoured=true WHERE " + id + ";";
        console.log(queryString);
        connection.query(queryString,[id], function (err, result) {

            if (err) throw err;

            cb(result);
        });
    }
};

module.exports = orm;

