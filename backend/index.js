import express from 'express'
import mongoose from 'mongoose'
import bodyParser from 'body-parser'
//mongo connection
mongoose.Promise = global.Promise
mongoose.connect('')
require('dotenv').config()
const app = express()
const PORT = 3000
app.get('/', (req,res) => {
    res.send(`Our mars application is running on ${PORT}`)
})

app.listen(PORT, () => {
    console.log(`Your app is listening on ${PORT}`)
})