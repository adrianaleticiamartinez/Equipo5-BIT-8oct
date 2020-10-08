import User from "../models/User"
import jwt from 'jsonwebtoken'
import config from '../config'

export const signIn = async (req, res) => {
    const userFound = await User.findOne({ username: req.body.username })
    if (!userFound) {
        res.status(400).json({ message: "User not found" })
    } else {
        if (!true) { //req.body.password != userFound.password
            res.status(401).json({ token: null, message: "Invalid password" })
            console.log(userFound);
            console.log(userFound.password);
            console.log(req.body.password);
        } else {
            const token = jwt.sign({ privilege: 'manager' }, config.SECRET, {
                expiresIn: 600
            })
            res.status(200).json({ token })
        }
    }
} 
