import express from 'express'
const app = express()
const PORT = 3000

app.get('/', (req,res) => {
    res.send(`Our mars application is running ${PORT}`)
})

app.listen(PORT, () => {
    console.log(`Your app is listening on ${PORT}`)
})