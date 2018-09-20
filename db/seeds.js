require('dotenv').config()
const mongoose = require('mongoose')

mongoose.connect(process.env.MONGODB_URI, {
    useNewUrlParser: true
})

const Schema = require('./schema')
const { Game, Player, Stat } = Schema

const gamestat = new Stat({
    points: 0,
    rebounds: 0,
    assists: 0,
    steals: 0,
})

const playerOne = new Player({
    name: 'Mike',
    stats: [gamestat],
})

const thursday = new Game({
    date: 9 / 5 / 2018,
    location: 'KFPC',
    gameNumber: 1,
    players: [playerOne]
})

Game.deleteMany()
    .then(() => {
        return Game.insertMany([thursday])
    })
    .then(() => {
        console.log('Done Seeding!')
        mongoose.connection.close()
    })