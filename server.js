//require the express module
var express = require("express");

//have the port set by Heroku or else use 8080
var PORT = process.env.PORT || 8080;

//create instance of express app
var app = express();

//use the public folder for the static content of the application
app.use(express.static("public"));

//have application data as JSON text
app.use(express.urlencoded({extended: true}));
app.use(express.json());

//require the handlebars to be used to dynamically display pages
var exphbs = require("express-handlebars");

app.engint("handlebars", exphbs({defaultLayout: "main"}))
app.set("view engine", "handlebars");

//pull in the routes from the controller.js file so they can be used by the server
var routes = require("./controllers/burgerController.js");

app.use(routes);

//start the server and listen for actions
app.listen(PORT, function() {
    //let the use know if the server connection was successful
    console.log("Server listening on: http://localhost:"+PORT);
});