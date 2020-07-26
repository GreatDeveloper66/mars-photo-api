import mongoose from 'mongoose'
import { marsSchema } from '../models/marsModels'
const marsPics = mongoose.model('Mars', marsSchema)

export const getImages = (req, res) => {
    marsPics.find({}, (err, marsPics) => {
        if(err){
            res.send(err)
        }
        res.json(marsPics)
    })
}