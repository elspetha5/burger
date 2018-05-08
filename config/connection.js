var mysql = require("mysql");
var connection;

if (process.env.JAWSBD_URL) {
    connection = mysql.createConnection(process.env.JAWSBD_URL);
} else {
    connection = mysql.createConnection({
        port: 3306,
        host: "localhost",
        user: "root",
        password: "",
        database: "burgers_db"
    });
};

connection.connect(function (err) {
    if (err) {
        console.log("error connecting: " + err.stack);
        return;
    }
    console.log("connected as id " + connection.threadId);
});

module.exports = connection;
