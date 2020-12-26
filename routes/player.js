const express = require ('express');
const router = express.Router();
const Player = require('../models/player');

router.get('/all', (req, res, next) => {

    //this will return all the data, exposing only the id and action field to the client
    Player.find({}, 'name')
      .then(data => res.json(data))
      .catch(next)
  });

  module.exports = router;