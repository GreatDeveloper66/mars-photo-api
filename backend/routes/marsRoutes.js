import mongoose from 'mongoose'
import { marsSchema } from '../models/marsModels'
const marsPics = mongoose.model('Mars', marsSchema)