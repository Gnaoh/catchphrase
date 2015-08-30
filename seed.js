var db = require('./models');

// DATA //
var phrase_list =[
  {word: "Abase", definition: "To lower in position, estimation, or the like; degrade."},
  {word: "Abbess", definition: "The lady superior of a nunnery."},
  {word: "Abbot", definition: "The superior of a community of monks."},
  {word: "Abdicate", definition: "To give up (royal power or the like)."},
  {word: "Abed", definition: "In bed; on a bed. "}
];

db.Bazinga.remove({}, function(err, words){
  if (err) return console.log(err);

});

db.Bazinga.create(phrase_list, function (err, subword) {
  if (err) { return console.log(err); };
            console.log(subword);
  });