import express from 'express'
import mongoose from 'mongoose'
import bodyParser from 'body-parser'
//mongo connection
//mongoose.connect('')
require('dotenv').config()
const app = express()
const PORT = 3000
mongoose.Promise = global.Promise

mongoose.connect(process.env.API_KEY,{
    useNewUrlParser: true,
    useUnifiedTopology: true
})

app.use(bodyParser.urlencoded({extended: true}))
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
})

app.listen(PORT, () => {
    console.log(`Your app is listening on ${PORT}`)
})