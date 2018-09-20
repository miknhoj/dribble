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
router.get('/:id/edit', (req, res) => {
  Game.findById(req.params.id)
    .then((game) => {
      res.render('games/edit', {game})
    })
})

// CREATE
router.post('/', (req, res) => {
  Game.create(req.body)
    .then((game) => {
      res.redirect(`/games/${game._id}`)
    })
})

// UPDATE
router.put('/:id', (req, res) => {
  Game.findByIdAndUpdate(req.params.id, req.body)
    .then((game) => {
      res.redirect(`/games/${game._id}`)
    })
})

// DELETE
router.delete('/:id', (req, res) => {
  Game.findByIdAndRemove(req.params.id)
    .then(() => {
      res.redirect('/games')
    })
})

module.exports = router;