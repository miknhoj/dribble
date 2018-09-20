const mongoose = require('mongoose')
const Schema = mongoose.Schema

const StatSchema = new Schema ({
    points: Number,
    rebounds: Number,
    assists: Number,
    steals: Number,
})

const PlayerSchema = new Schema ({
    name: String,
    stats: [StatSchema],
})

const GameSchema = new Schema ({
    date: String,
    location: String,
    gameNumber: Number,
    players: [PlayerSchema]
})

const StatModel = mongoose.model('Stat', StatSchema)
const PlayerModel = mongoose.model('Player', PlayerSchema)
const GameModel = mongoose.model('Game', GameSchema)

module.exports = {
    Stat: StatModel,
    Player: PlayerModel,
    Game: GameModel
}