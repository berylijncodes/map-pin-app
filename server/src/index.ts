import express, { Express, Request, Response } from 'express'
import errorHandler from 'errorhandler'
import mongoose, { ConnectOptions } from 'mongoose'
import dotenv from 'dotenv'
import { request } from 'http'
import pinRoute from './routes/pins'
import userRoute from './routes/users'

dotenv.config()

const PORT = process.env.PORT || 4000
// const MONGODB_URI = process.env.MONGODB_URI
const app = express()

app.use(express.json())





mongoose.connect(process.env.MONGODB_URI as string)
    .then(() => {
        console.log("Connected to MongoDB successfully!")
    })
    .catch((err: Error) => {
        console.log(
            'MongoDB connection error. Please make sure MongoDB is running. ' + err
        )
        process.exit(1)
    })

// Start Express server
app.use('/api/pins', pinRoute)
app.use('/api/users', userRoute)


app.listen(PORT, () => {
    console.log(`Application is running at http://localhost:${PORT}`)
    console.log(`Press CTRL-C to stop\n`)
})



// console.log("process", process.env.MONGODB_URI)











