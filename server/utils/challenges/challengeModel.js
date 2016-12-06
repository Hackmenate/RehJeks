var mongoose = require('mongoose');
mongoose.Promise = require('bluebird');


var challengeSchema = mongoose.Schema({
  id: String,
  userId: String,
  title: String,
  prompt: String,
  text: String,
  difficulty: String,
  expected: [String],
  answer: String,
  cheats: [String]
});

module.exports = mongoose.model('Challenge', challengeSchema);
