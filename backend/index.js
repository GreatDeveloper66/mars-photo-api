import express from 'express'
import mongoose from 'mongoose'
const app = express()
const PORT = 3000

app.get('/', (req,res) => {
    res.send(`Our mars application is running on ${PORT}`)
})

app.listen(PORT, () => {
    console.log(`Your app is listening on ${PORT}`)
})