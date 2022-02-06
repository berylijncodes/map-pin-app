/* eslint-disable @typescript-eslint/member-delimiter-style */
import mongoose, { Document } from 'mongoose'

export type UserDocument = Document & {
    userName: string
    email: string
    password: string | number

}

const userSchema = new mongoose.Schema({
    userName: {
        type: String,
        required: true,
        min: 3,
        max: 20,
        unique: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
        min: 6,
    },

}, { timestamps: true })

export default mongoose.model<UserDocument>('User', userSchema)
