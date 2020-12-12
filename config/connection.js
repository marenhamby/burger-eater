//set up the connection to mySQL
var mysql = require("mysql");

//add connection information for connecting to the mySQL database
var connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "",
    database: "burger_db",
});