import dotenv from 'dotenv'
import express from 'express'
import mongoose from 'mongoose'
import bodyParser from 'body-parser'
import 'isomorphic-fetch'
const app = express()
const PORT = 5000
app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())
dotenv.config()


mongoose.Promise = global.Promise
mongoose.connect(process.env.API_KEY,{
    useNewUrlParser: true,
    useUnifiedTopology: true
}).
then(() => {
    console.log('Mongoose connected')
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
})

app.listen(PORT, () => {
    console.log(`Your app is listening on ${PORT}`)
})
