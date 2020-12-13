//use the outline of the object from the orm document 
var orm = require("../config/orm.js");

//use orm outline to model the burger object
var burger = {
    all: function(callback) {
        //use the orm outline and send in relevant table informatin to complete the database request line to display all table information
        orm.selectAll("burgers", function(res) {
            callback(res);
        });
    },
    create: function(column, value, callback) {
        orm.create("burgers", column, value, function(res){
            callback(res);
        });
    },
    update: function(column, condition, callback) {
        orm.update("burgers", column, condition, function(res){
            callback(res);
        });
    },
    delete: function(condition, callback) {
        orm.delete("burgers", condition, function(res) {
            callback(res);
        });
    }
};

//Export the functions for the controller document
module.exports = burger;