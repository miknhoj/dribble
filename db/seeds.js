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

const playerTwo = new Player({
    name: 'Bron',
    stats: [gamestat],
})

const gametest1 = new Game({
    date: '9 / 5 / 2018',
    location: 'KFPC',
    gameNumber: 1,
    players: [playerOne]
})

const gametest2 = new Game({
    date: '10/ 11 / 2018',
    location: 'KFPC',
    gameNumber: 1,
    players: [playerTwo]
})

Game.deleteMany()
    .then(() => {
        return Game.insertMany([gametest1, gametest2])
    })
    .then(() => {
        console.log('Done Seeding!')
        mongoose.connection.close()
    })