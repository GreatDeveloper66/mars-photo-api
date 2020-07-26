import mongoose from 'mongoose'
const Schema = mongoose.Schema

export const UserSchema = new Schema({
    id: {
        type: Number,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    username: {
        type: String,
        required: true
    }
})