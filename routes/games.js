var express = require('express');
var router = express.Router();
const { Game } = require('../db/schema')

// INDEX , SHOW ALL
router.get('/', (req, res) => {
  Game.find()
    .then((games) => {
      res.render('games/index', {games})
  })
});


// NEW, RENDER NEW FORM

// SHOW, SHOW ONE

// EDIT, RENDER EDIT FORM

// CREATE

// UPDATE

// DELETE


module.exports = router;