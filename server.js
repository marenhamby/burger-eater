//require the express module
var express = require("express");

//have the port set by Heroku or else use 8080
var PORT = process.env.PORT || 8080;

//create instance of express app
var app = express();
