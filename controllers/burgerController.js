//require the express module
var express = require("express");

var router = express.Router();

//use the database functions in the burger.js file
var burger = require("../models/burger.js");

//add the get, post, put, and delete routes to communicate between the client, views, and models
//ROUTES
router.get("/", function(req,res) {
    //use the .all to display the data from the burger table via the orm
    burger.all(function(data){
        var hbsObject = {
            burgers: data
        };
        console.log(hbsObject);
        //render the data onto the index handlebars page
        res.render("index", hbsObject);
    });
});