var express = require('express');
var router = express.Router({mergeParams: true});
const { Game, Player, Stat } = require('../db/schema')

// INDEX , SHOW ALL/SHOW ONE
router.get('/', (req, res) => {
    Game.findById(req.params.gameId)
        .then((game) => {
            res.render('stats/index', {
            gameId: req.params.gameId,
            stats: game.players.id(req.params.playerId).stats
        })
    })
})

// NEW, RENDER NEW FORM


// SHOW, SHOW ONE


// EDIT, RENDER EDIT FORM
router.get('/edit', (req, res) => {
    Game.findById(req.params.gameId)
        .then((game) => {
            res.render('stats/edit', {
                gameId: req.params.gameId,
                stats: game.players.id(req.params.playerId).stats
            })
        })
})

// CREATE


// UPDATE



// DELETE



module.exports = router;