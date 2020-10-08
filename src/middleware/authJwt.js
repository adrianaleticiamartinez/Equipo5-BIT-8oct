import jwt from 'jsonwebtoken'
import config from '../config'
import User from '../models/User'

export const verifyToken = async (req, res, next) => {
    try {
        const token = req.headers["x-access-token"]
        if (!token) {
            return res.status(403).json({ message: 'No token provided' })
        } else {
            const decoded = jwt.verify(token, config.SECRET)
            req.userId = decoded.id
            console.log(decoded);
            const user = await User.findById(req.userId, { password: 0 })
            if (!decoded) {
                return res.status(403).json({ message: 'No user found' })
            } else {
                next()
            }
        }
    } catch (error) {
        return res.status(401).json({ message: 'Unauthorized' })
    }
}

