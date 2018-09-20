var express = require('express');
var router = express.Router({ mergeParams: true });
const { Game, Player } = require('../db/schema')

// INDEX , SHOW ALL
router.get('/', (req, res) => {
    Game.findById(req.params.gameId)
        .then((game) => {
          res.render('players/index', {
            gameId: req.params.userId,
            players: game.players
            })
        })
        .catch(error=> {
            console.log(error)
        })
})

// NEW, RENDER NEW FORM


// SHOW, SHOW ONE


// EDIT, RENDER EDIT FORM

// CREATE


// UPDATE


// DELETE


module.exports = router;