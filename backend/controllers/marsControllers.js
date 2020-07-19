import mogoose from 'mongoose'
import { marsSchema } from '../models/marsModel'

const mars = mongoose.model('Mars', marsSchema)

export const addNewImage = (req, res) => {
    
}