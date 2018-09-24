var express = require('express');
var router = express.Router({
    mergeParams: true
});
const { Game, Player, Stat } = require('../db/schema')

// INDEX , SHOW ALL/SHOW ONE
router.get('/', (req, res) => {
    Game.findById(req.params.gameId)
        .then((game) => {
            res.render('stats/index', {
                game: game,
                player: game.players.id(req.params.playerId)
            })
        })
})

// EDIT, RENDER EDIT FORM
router.get('/edit', (req, res) => {
    Game.findById(req.params.gameId)
        .then((game) => {
            res.render('stats/edit', {
                game,
                player: game.players.id(req.params.playerId),
            })
        })
})

// UPDATE
router.put('/:id', (req, res) => {
    Game.findById(req.params.gameId)
        .then((game) => {
            game.players.id(req.params.playerId).stats.set(req.body)
            return game.save()
        })
        .then((game) => {
            res.redirect(`/games/${req.params.gameId}/players/${req.params.playerId}.stats`)
        })
})

module.exports = router;