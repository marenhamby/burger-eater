//use the connection.js file to connect to mySQL
var connection = require("../config/connection.js");

//create objects for all the functions to be used in the routes on the controller page
var orm = {
    //create outlines to be used in the burger.js file to take action in the database accoring to what actions have been requested
    
    //view all items in the table listed in the burger.js file
    all: function(tableInput, callback) {
        var queryString = "SELECT * FROM " + tableInput + ";";
        connection.query(queryString, function(err, res) {
            if (err) throw err;
            callback(res);
        })
    },
    create: function(tableInput, column, columnValue) {
        //desired outcome format: INSERT INTO burgers (name) VALUES ("New Burger");
        var queryString = `INSERT INTO ?? (??) VALUES ("?")`;
        console.log(queryString);

        connection.query(queryString, [tableInput, column, columnValue], function(err, res) {
            if (err) throw err;
            console.log(res);
        })

    },
    // update: function() {

    // },
    // delete: function() {

    // }
};

//export the orm object for the model document (burger.js)
module.exports =orm;