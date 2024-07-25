const express = require('express')
const cors = require('cors');
const { db } = require('./db/db');

// fs is file system ad readdirSync means read the sync directory synchronously so it is going to do line by line
// so readdirSync reads the information line by line in a specified directory
const {readdirSync} = require('fs')

const app = express()


// require dotenv package
require('dotenv').config()

//creating a PORT variable
const PORT = process.env.PORT

//middlewares
app.use(express.json())
app.use(cors())


//routes
// in the below line we are creating a base url for our api ,and lets just name it as v1
readdirSync('./routes').map((route) => app.use('/api/v1', require('./routes/' + route)))


// create a basic server
const server = () => {
    db()
    app.listen(PORT, () => {
        console.log('listening to port:', PORT)
    })
}


// calling of server function
server()