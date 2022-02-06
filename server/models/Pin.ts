/* eslint-disable @typescript-eslint/member-delimiter-style */
import mongoose, { Document } from 'mongoose'

export type PinDocument = Document & {
    userName: string
    title: string
    desc: string
    rating: number
    lat: number
    long: number

}

const pinSchema = new mongoose.Schema({
    userName: {
        type: String,
        required: true,
        min: 3,
        max: 20,
        unique: true,
    },
    title: {
        type: String,
        required: true,
        min: 3,
    },
    desc: {
        type: String,
        required: true,
        min: 3,
    },
    rating: {
        type: Number,
        required: true,
        min: 0,
        max: 5,
    },
    lat: {
        type: Number,
        required: true,
    },
    long: {
        type: Number,
        required: true,
    },

}, { timestamps: true })

export default mongoose.model<PinDocument>('Pin', pinSchema)
