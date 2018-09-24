require('dotenv').config()
const mongoose = require('mongoose')

mongoose.connect(process.env.MONGODB_URI, {
    useNewUrlParser: true
})

const Schema = require('./schema')
const { Game, Player, Stat } = Schema

const gamestat1 = new Stat({
    points: 20,
    rebounds: 10,
    assists: 10,
    steals: 3,
})

const gamestat2 = new Stat({
    points: 15,
    rebounds: 15,
    assists: 15,
    steals: 4,
})


const playerOne = new Player({
    name: 'Mike',
    position: 'Forward',
    stats: gamestat1,
})

const playerTwo = new Player({
    name: 'Bron', 
    position: 'Power Foward',
    stats: gamestat2,
})

const gametest1 = new Game({
    date: '9 / 5 / 2018',
    location: 'KFPC',
    players: [playerOne, playerTwo]
})

const gametest2 = new Game({
    date: '10/ 11 / 2018',
    location: 'KFPC',
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