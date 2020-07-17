import mongoose from 'mongoose'
const Schema = mongoose.Schema

export const MarsSchema = new Schema({
    id: {
        type: Number,
        required: true
    },
    img: {
        type: String,
        required: true
    }
})