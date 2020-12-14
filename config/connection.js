//set up the connection to mySQL
var mysql = require("mysql");

//add connection information for connecting to the mySQL database using JAWS; if not available then use local connection
let connection;
if (process.env.JAWSDB_URL) {
    connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
    connection = mysql.createConnection({
        host: "localhost",
        port: 3306,
        user: "root",
        password: "",
        database: "burger_db",
    });
};

//make connection to the database
connection.connect(function(err) {
    //if there's an error in the connection, display what the error is
    if (err) {
        console.error("ERROR in connection: " + err.stack);
        return;
    };
    //if no error, display succcess message with the connection information
    console.log("connected as id " + connection.threadId);
});

//send the connection information to be used by other modules
module.exports = connection;

