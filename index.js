var express = require("express"),
  bodyParser = require("body-parser"),
  path = require("path");

var app = express();

var db = require("./models");

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));
app.use(express.static("bower_components"));

var views = path.join(process.cwd(), "views");

app.get("/", function (req, res) {
  var homePath = path.join(views, "index.html");
  res.sendFile(homePath);
});

app.listen(3000, function () {
  console.log("Systems Online!");
});