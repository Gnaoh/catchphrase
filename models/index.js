var mongoose = require("mongoose");
mongoose.connect(
  process.env.MONGOLAB_URI ||
  process.env.MONGOLAB_URL ||
  "mongodb://localhost/catchphrase")

module.exports.Bazinga = require("./catchphrase");

