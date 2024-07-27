const express = require('express')
const app = express()
const bodyParser = require('body-parser')

const apiRoutes = require('./routes/index')
const {PrismaClient} = require('@prisma/client')
const prisma = new PrismaClient()
const StartupServer = ()=>{
    //? Middlewares
    app.use(bodyParser.json())
    app.use(bodyParser.urlencoded({extended: true}))
     //? routes
    app.use('/api', apiRoutes)

    //? server
    app.listen(3005, ()=>{
        console.log(`app listening on ${3005}`)
    })
}

StartupServer()