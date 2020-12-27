const express = require ('express');
const router = express.Router();
const Player = require('../models/player');

router.get('/all', (req, res, next) => {

    //this will return all the data, exposing only the id and action field to the client
    Player.find({}, 'name')
      .then(data => res.json({'players': data}))
      .catch(next)
  });

  router.post('/new', (req, res, next) => {
      if( req.body.name) {
          Player.create(req.body)
          .then(data => res.json(data))
          .catch(next)
      } else {
          res.json("The name field is empty")
      }
  });

  router.delete('/:id', (req, res, next) => {
      Player.remove({'_id' : req.params.id})
      .then(data => res.json(data))
      .catch(next)
  });

  module.exports = router;