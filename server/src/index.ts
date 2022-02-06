import express, { Express, Request, Response } from 'express'
import errorHandler from 'errorhandler'
import mongoose, { ConnectOptions } from 'mongoose'
import dotenv from 'dotenv'
import { request } from 'http'
import pinRoute from '../routes/pins'

dotenv.config()

const PORT = process.env.PORT || 4000
// const MONGODB_URI = process.env.MONGODB_URI
const app = express()

app.use(express.json())

app.use('/api/pins', pinRoute)



mongoose.connect(process.env.MONGODB_URI as string)
    .then(() => {
        // Start Express server

        app.listen(PORT, () => {
            console.log(`Application is running at http://localhost:${PORT}`)
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



console.log("process", process.env.MONGODB_URI)











