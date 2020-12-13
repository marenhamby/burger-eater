//use the connection.js file to connect to mySQL
var connection = require("../config/connection.js");

//create objects for all the functions to be used in the routes on the controller page
var orm = {
    all: function() {

    },
    create: function() {
        
    },
    update: function() {

    },
    delete: function() {

    }
};

//export the orm object for the model document (burger.js)
module.exports =orm;