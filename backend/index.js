import dotenv from 'dotenv'
import express from 'express'
import mongoose from 'mongoose'
import bodyParser from 'body-parser'
import fetch from 'isomorphic-fetch'
const app = express()
const PORT = 5000
app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())
dotenv.config()


mongoose.Promise = global.Promise
mongoose.connect(process.env.API_KEY, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).
then(() => {
    const URL = process.env.BASE_URL
    const sol = 1000
    const key = process.env.MARS_API_KEY
    const camera = process.env.ROVER_CAMERAS
    //fetch() 
    
}).
catch((err) => {
    console.log('Connection unsuccessful ${err}')
})

/*
const MongoClient = require('mongodb').MongoClient;
const uri = process.env.API_KEY 
const client = new MongoClient(uri, { useNewUrlParser: true });
client.connect(err => {
  const collection = client.db("test").collection("devices");
  // perform actions on the collection object
  client.close();
});

*/


app.get('/', (req,res) => {
    res.send(`Our mars application is running on ${PORT}`)
    const URL = process.env.BASE_URL
    const sol = 1000
    const key = process.env.MARS_API_KEY
    const camera = process.env.ROVER_CAMERAS
    const fetchURL = `${URL}sol=${sol}&camera=${camera}&api_key=${key}`
    fetch(fetchURL)
        .then(resp => resp.json())
        .then(data => {
            console.log('img',data.photos[0].img_src)
            console.log('earth_date', data.photos[0].earth_date)
        })
        .catch(error => console.log(error))
})

app.listen(PORT, () => {
    console.log(`Your app is listening on ${PORT}`)
})
