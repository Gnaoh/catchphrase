var db = require('./models');

// DATA //
var phrase_list =[
  {word: "Document" , definition: "an object name that refers to the HTML"},
  {word: "Method" , definition: "a command that tells how an object is to be acted upon"},
  {word: "Object" , definition: "is something that exists"},
  {word: "Variable" , definition: "a symbol representing a quantity that assumes a range of values"},
  {word: "Function" , definition: "user-defined or built-in set of statements that perform a task"},
  {word: "Nathan Allen" , definition: "Software Engineer / WDI21 Instructor from Ohio. "},
  {word: "JavaScript" , definition: "a scripting language developed by Netscape for HTML documents"}, 
  {word: "Operator" , definition: "performs a function on one or more operands or variables"},
  {word: "Script" , definition: "one or more JavaScript commands"},
  {word: "Location" , definition: "contains complete URL information for the current document"},
  {word: "String" , definition: "a series of characters defined by double or single quote"},
  {word: "<&#33;DOCTYPE>" , definition: "an instruction to the browser on what version of HTML the page is written in"},
  {word: "CSS" , definition: "stands for Cascading Style Sheets"},
  {word: "Illias Tsangaris" , definition: "winner of TechCrunch's Disrupt 'Best Use of Crunchbase's API' in 2014"},
  {word: "Meta data" , definition: "used to input descriptions and keywords that improve search engine optimization"},
  {word: "href" , definition: "HTML links are defined with the <a> tag"},
  {word: "Jasmine" , definition: "a behavior-driven development framework for testing JavaScript code"},
  {word: "Express" , definition: "a configurable, minimal web framework for Node"},
  {word: "Mongoose" , definition: "provides a straight-forward, schema-based solution to model application data"}, 
  {word: "Boostrap" , definition: "a framework for developing responsive, mobile first projects on the web"},
  {word: "Array" , definition: "a global object that is used in the construction of high-level, list-like objects"},
  {word: "AJAX" , definition: "Asynchronous JavaScript And XML (AJAX) allows us to make requests to a server"},
  {word: "application" , definition: "Application Program Interfaces (APIs)"},
  {word: "Anchors" , definition: "a piece of text that can be the target of a hypertext link"},  
  {word: "Justin Castilla" , definition: "2015 COMP SCI GRAD from USF. Was on the Dean's list in 2010"},               
];

db.Bazinga.remove({}, function(err, words){
  if (err) return console.log(err);

});

db.Bazinga.create(phrase_list, function (err, subword) {
  if (err) { return console.log(err); };
            console.log(subword);
  });