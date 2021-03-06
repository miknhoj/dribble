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
    position: String,
    stats: {type:StatSchema, default:StatSchema}
})

const GameSchema = new Schema ({
    date: String,
    location: String,
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