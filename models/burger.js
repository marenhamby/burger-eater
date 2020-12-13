//use the outline of the object from the orm document 
var orm = require("../config/orm.js");

//use orm outline to model the burger object
var burger = {
    all: function(callback) {
        //use the orm outline and send in relevant table informatin to complete the database request line to display all table information
        orm.all("burgers", function(res) {
            callback(res);
        });
    },
    // create: function() {
        
    // },
    // update: function() {

    // },
    // delete: function() {

    // }
};

//Export the functions for the controller document
module.exports = burger;