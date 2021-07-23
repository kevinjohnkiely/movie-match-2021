import express from 'express'
const router = express.Router()
import { authUser, getUserProfile, registerUser } from '../controllers/userController.js'
import { protectedRoute } from '../middleware/authMiddleware.js'

// router.get('/', getMovies)
router.route('/').post(registerUser)
router.post('/login', authUser)
router.route('/profile').get(protectedRoute, getUserProfile)

export default router