var express = require("express"),
  bodyParser = require("body-parser"),
  path = require("path");

var app = express();

var db = require("./models");

app.use(bodyParser.urlencoded({extended: true}));
app.use("/static", express.static("public"));
app.use("/vendor", express.static("bower_components"));

var views = path.join(process.cwd(), "views");

// DATA //
var phrases =[
  {word: "Abase", definition: "To lower in position, estimation, or the like; degrade."},
  {word: "Abbess", definition: "The lady superior of a nunnery."},
  {word: "Abbot", definition: "The superior of a community of monks."},
  {word: "Abdicate", definition: "To give up (royal power or the like)."},
  {word: "Abed", definition: "In bed; on a bed. "}
];

app.get("/", function (req, res) {
  var homePath = path.join(views, "index.html");
  res.sendFile(homePath);
});

app.get("/phrases", function (req, res){
  res.send(phrases);
});

app.listen(3000, function () {
  console.log("Systems Online!");
});