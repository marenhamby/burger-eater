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
    create: function(tableInput, column, value, callback) {
        //add new burger to list
        //desired outcome format: INSERT INTO burgers (name) VALUES ("New Burger");
        var queryString = `INSERT INTO ?? (??) VALUES ("?")`;
        console.log(queryString);

        connection.query(queryString, [tableInput, column, value], function(err, res) {
            if (err) throw err;
            callback(res);
        });

    },
    update: function(tableInput, column, condition, callback) {
        //change status of current burger
        //desired outcome format: UPDATE burgers SET eaten = true WHERE id=#
        var queryString = "UPDATE ?? SET ?? = true WHERE "+ condition; 
        console.log(queryString);
        connection.query(queryString, [tableInput, column], function(err, res){
            if(err) throw err;
            callback(res);
        })
    },
    delete: function(tableInput, condition, callback) {
        //delete burger
        //desired outcome format: DELETE FROM burgers WHERE id=//#endregion
        var queryString = "DELETE FROM ?? WHERE " + condition;
        console.log(queryString);
        connection.query(queryString, [tableInput], function(err, res) {
            if (err) throw err;
            callback(res);
        });
    }
};

//export the orm object for the model document (burger.js)
module.exports =orm;