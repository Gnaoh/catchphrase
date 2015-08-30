// REQUIREMENTS //
var db = require("./models");
var express = require("express"),
  bodyParser = require("body-parser"),
  path = require("path");
  views = path.join(process.cwd(), "views");
  app = express();


app.use(bodyParser.urlencoded({extended: true}));
app.use("/static", express.static("public"));
app.use("/vendor", express.static("bower_components"));

// ROUTES //
app.get("/", function (req, res) {
  var homePath = path.join(views, "index.html");
  res.sendFile(homePath);
});

app.get("/phrases", function(req, res){
  db.Bazinga.find({}, function(err, words){
    if (err) {
      console.log('ERROR!');
      return res.sendStatus(400);
    }
    res.send(words);
  })
})

app.get("/phrases", function (req, res){
  res.send(phrases);
});

app.post("/phrases", function (req, res){
  var newWord = req.body;
  db.Bazinga.create(newWord, function(err, words) {
    if (err) {
      console.log("ERROR!");
      return res.sendStatus(400);
    }
    res.send(words);
  });
});

app.delete("/phrases/:id", function (req, res){
  var targetId = req.params.id;
  db.Bazinga.remove({_id: targetId}, function (err, word){
    if (err) {
      console.log(err);
      return res.sendStatus(400);
    }
    res.send(word);
  });
});


app.listen(3000, function () {
  console.log("Systems Online!");
});