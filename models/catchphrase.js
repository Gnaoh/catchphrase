var mongoose = require("mongoose");

var Schema = mongoose.Schema;

var CatchPhraseSchema = new Schema({
  word: String,
  definition: String
});

var Bazinga = mongoose.model('Bazinga', CatchPhraseSchema);
module.exports = Bazinga;