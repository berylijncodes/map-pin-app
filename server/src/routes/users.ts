import express, { Request, Response } from 'express'
import User, { UserDocument } from '../models/User'
import bcrypt from 'bcrypt'

const router = express.Router()

// Register a user
router.post('/register', async (req: Request, res: Response) => {
    // Generate new password using bcrypt
    try {
        // Create salt
        const salt = await bcrypt.genSalt(10)
        const hashedPassword = await bcrypt.hash(req.body.password, salt)

        // Create new user
        const newUser = new User({
            userName: req.body.userName,
            email: req.body.email,
            password: hashedPassword,
        })

        // Save user and send response
        const savedUser = await newUser.save()
        res.status(200).json(savedUser._id)

    } catch (error) {
        res.status(500).json(error)
    }
})

// Login user
router.post('/login', async (req: Request, res: Response) => {
    try {

        // Find one user
        const { userName } = req.body

        const user = await User.findOne({ userName })
        !user && res.status(400).json('Username or password incorrect!')


        // Validate password
        const ValidPassword = await bcrypt.compare(req.body.password, user.password)
    } catch (error) {
        res.status(500).json(error)
    }

})


export default router