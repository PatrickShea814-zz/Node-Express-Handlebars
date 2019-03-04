const express = require('express');
var path = require('path')

var PORT = process.env.PORT || 3000;

var app = express();

// Serve static content for the app from the "public" directory in the application directory.
app.use(express.static(path.join(__dirname, 'public')));

// Parse The Request Body as JSON
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Require Handlebars
var exphbs = require("express-handlebars");
//Set Handlebars as Rendering Engine
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// Import Routes and give the server access to them.
var routes = require("./controllers/burgers_controller.js");

app.use(routes);

// Start Server
app.listen(PORT, function() {
  console.log("App now listening at localhost:" + PORT);
});
