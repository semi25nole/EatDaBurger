var express = require("express");
var bodyParser = require("body-parser");
var mysql = require("mysql");

var app = express();
var PORT = 3005;

app.use(bodyParser.urlencoded({ extended: false}));
app.use(bodyParser.json());

var EH = require("express-handlebars");

app.engine("handlebars", EH({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

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