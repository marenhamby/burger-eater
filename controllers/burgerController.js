//require the express module
var express = require("express");

var router = express.Router();

//use the database functions in the burger.js file
var burger = require("../models/burger.js");

//add the get, post, put, and delete routes to communicate between the client, views, and models
//ROUTES
router.get("/", function(req,res) {
    //add function to be used in the callback in the burger.js file
    burger.all(function(data){
        var hbsObject = {
            burgers: data
        };
        console.log(hbsObject);
        //render the data onto the index handlebars page
        res.render("index", hbsObject);
    });
});

router.post("/api/burgers", function(req, res){
    //add name of the new burger
    burger.create("name", req.body.name, function(result){
        //get the id of the new burger
        res.json({ id: result.insertId});
    });
});

// Export routes for server.js to use.
module.exports = router;