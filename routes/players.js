var express = require('express');
var router = express.Router({ mergeParams: true });
const { Game, Player } = require('../db/schema')

// INDEX , SHOW ALL
router.get('/', (req, res) => {
    Game.findById(req.params.gameId)
        .then((game) => {
          res.render('players/index', {
            game: game,
            player: game.players.id(req.params.playerId),
            players: game.players
            })
        })
        .catch(error=> {
            console.log(error)
        })
})

// NEW, RENDER NEW FORM
router.get('/new', (req, res) => {
    Game.findById(req.params.gameId)
        .then((game) => {
            res.render('players/new', {
                game,
                player: game.players.id(req.params.playerId),
                players: game.players
        })
    })
})

// SHOW, SHOW ONE
router.get('/:id', (req, res) => {
    Game.findById(req.params.gameId)
        .then((game) => {
            res.render('players/show', {
                game,
                player: game.players.id(req.params.playerId)
            })
        })
})

// EDIT, RENDER EDIT FORM
router.get('/:id/edit', (req, res) => {
    Game.findById(req.params.gameId)
        .then((game) => {
            res.render('players/edit', {
                game,
                player: game.players.id(req.params.playerId)
            }) 
        })
})

// CREATE
router.post('/', (req, res) => {
    const newPlayer = new Player(req.body)
    Game.findById(req.params.gameId)
        .then((game) => {
            game.players.push(newPlayer)
            return game.save()
        })
        .then((game) => {
            res.redirect(`/games/${req.params.gameId}/players`)
        })
})

// UPDATE
router.put('/:id', (req, res) => {
    Game.findById(req.params.gameId)
        .then((game) => {
            game.players.id(req.params.playerId).set(req.body)
            return game.save()
        })
        .then((game) => {
            res.redirect(`/games/${req.params.gameId}/players/${req.params.playerId}`)
        })
})


// DELETE
router.delete('/:id', (req, res) => {
    Game.findById(req.params.gameId)
        .then((game) =>{
            game.players.id(req.params.id).remove()
            return game.save()
        })
        .then(() => {
           res.redirect(`/games/${req.params.gameId}/players`) 
        })
    })


module.exports = router;