const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//create schema for todo
const PlayerSchema = new Schema({
  name: {
    type: String,
    required: [true, 'The player name field is required']
  },
  age: {
      type: Number,
      required: [false, 'The Player age is required']
  }
})

//create model for todo
const Player = mongoose.model('player', PlayerSchema);

module.exports = Player;