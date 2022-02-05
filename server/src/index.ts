import express, { Express, Request, Response } from 'express'
import errorHandler from 'errorhandler'
import mongoose, { ConnectOptions } from 'mongoose'
import dotenv from 'dotenv'
import { request } from 'http'

dotenv.config()

const PORT = process.env.PORT || 3000
// const MONGODB_URI = process.env.MONGODB_URI
const app = express()

mongoose.connect(`${process.env.MONGODB_URI}`)
    .then(() => {
        // Start Express server
        app.listen(app.get('/'), () => {
            console.log(`Application is running at htto://localhost:${PORT}`)
            console.log(`Press CTRL-C to stop\n`)
        })
        console.log("App is working")
    })
    .catch((err: Error) => {
        console.log(
            'MongoDB connection error. Please make sure MongoDB is running. ' + err
        )
        process.exit(1)
    })

// mongoose.connect(`${process.env.MONGO_URI}`, () => {
//     console.log('connected to mongodb')
// })








