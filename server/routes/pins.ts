import express, { Request, response, Response } from 'express'
import Pin from '../models/Pin'

const router = express.Router()

router.post('/', async (req: Request, res: Response) => {

    const { userName, title, desc, rating, lat, long } = req.body
    const pin = new Pin({
        userName,
        title,
        desc,
        rating,
        lat,
        long,
    })
    try {
        const savedPin = await pin.save()
        res.status(200).json(savedPin)
    } catch (error) {
        res.status(500).json(error)
    }
})

// Get all pins
router.get('/', async (req: Request, res: Response) => {
    try {
        const pins = await Pin.find()
        res.status(200).json(pins)
    } catch (error) {
        response.status(500).json(error)
    }
})

export default router