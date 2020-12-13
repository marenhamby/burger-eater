//use the outline of the object from the orm document 
var orm = require("../config/orm.js");

//use orm outline to model the burger object
var burger = {
    all: function(callback) {
        orm.all("burgers", function(res) {
            callback(res);
        });
    },
    create: function() {
        
    },
    update: function() {

    },
    delete: function() {

    }
};