var connection = require("../config/connection.js");

// Puts appropriate number of question marks in the query for insert function
function questionMarks(num) {
    var arr = [];

    for (var i = 0; i < num; i++) {
        arr.push("?");
    };

    return arr.toString();
};

// 
function objToSql(ob) {
    var arr = [];

    for (var key in ob) {
        var value = ob[key];

        if (Object.hasOwnProperty.call(ob, key)) {
            if (typeof value === "string" && value.indexOf(" ") >= 0) {
                value = "'" + value + "'";
            };

            arr.push(key + "=" + value);
        };
    };

    return arr.toString();
}


var orm = {
    selectAll: function (tableInput, cb) {
        var query = "SELECT * FROM " + tableInput + ";";
        connection.query(query, function(err, result) {
            if (err) throw err;
            cb(result)
        });
    },
    insertOne: function (table, cols, vals, cb) {
        var query = "INSERT INTO " + table;
        query += "(" + cols.toString() + ")";
        query += "VALUES (" + questionMarks(vals.length) + ")";
    },
    updateOne: function () {

    }
};

module.exports = orm;