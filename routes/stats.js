var express = require('express');
var router = express.Router({mergeParams: true});
const { Game, Player, Stat } = require('../db/schema')

// INDEX , SHOW ALL/SHOW ONE
router.get('/', (req, res) => {
    Game.findById(req.params.gameId)
        .then((game) => {
            res.render('stats/index', {
            gameId: req.params.gameId,
            playerId: game.players.id(req.params.playerId),
            stats: game.players.id(req.params.playerId).stats
        })
    })
})

// EDIT, RENDER EDIT FORM
router.get('/edit', (req, res) => {
    Game.findById(req.params.gameId)
        .then((game) => {
            res.render('stats/edit', {
                gameId: req.params.gameId,
                playerId: game.players.id(req.params.playerId)
            })
        })
})

// UPDATE

module.exports = router;