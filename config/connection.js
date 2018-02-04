var mysql = require("mysql");

var connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "root",
    database: ""
});

connection.connect(function(err) {
    if(err) {
        console.log("error connecting: " + err.stack);
        return;
    }

    console.log("connection as id " + connection.threadId);
});

module.exports = connection;