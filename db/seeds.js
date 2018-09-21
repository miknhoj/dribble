require('dotenv').config()
const mongoose = require('mongoose')

mongoose.connect(process.env.MONGODB_URI, {
    useNewUrlParser: true
})

const Schema = require('./schema')
const { Game, Player, Stat } = Schema

const gamestat1 = new Stat({
    points: 200,
    rebounds: 100,
    assists: 100,
    steals: 30,
})

const gamestat2 = new Stat({
    points: 150,
    rebounds: 150,
    assists: 150,
    steals: 40,
})


const playerOne = new Player({
    name: 'Mike',
    stats: gamestat1,
})

const playerTwo = new Player({
    name: 'Bron', 
    stats: gamestat2,
})

const gametest1 = new Game({
    date: '9 / 5 / 2018',
    location: 'KFPC',
    gameNumber: 1,
    players: [playerOne, playerTwo]
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