var express = require("express");

var bodyParser = require("body-parser");

var port = process.env.PORT || 8080;

var app = express();

app.use(bodyParser.urlencoded({ extended: true }));

app.use(bodyParser.json());

var exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

//Import routes and give the server access to them.
var routes = require("");

app.use(routes);

app.listen(PORT, function(){
    console.log("Server listening on http://localhost:" + PORT);
});