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
router.get('/new', (req,res) => {
  res.render('games/new')
})

// SHOW, SHOW ONE
router.get('/:id', (req, res) => {
  Game.findById(req.params.id)
    .then((game) => {
      res.render('games/show', { game })
    })
})

// EDIT, RENDER EDIT FORM

// CREATE
router.post('/', (req, res) => {
  Game.create(req.body)
    .then((game) => {
      res.redirect(`/games/${game._id}`)
    })
})

// UPDATE

// DELETE


module.exports = router;