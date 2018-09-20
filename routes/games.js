var express = require('express');
var router = express.Router();
const { Game, Player } = require('../db/schema')

// INDEX , SHOW ALL
router.get('/', (req, res) => {
  Game.find()
    .then((games) => {
      res.render('games/index', {games})
  })
});


// NEW, RENDER NEW FORM

// SHOW, SHOW ONE
router.get('/:id', (req, res) => {
  Game.findById(req.params.id)
    .then((game) => {
      res.render('games/show', { game })
    })
})

// EDIT, RENDER EDIT FORM

// CREATE

// UPDATE

// DELETE


module.exports = router;