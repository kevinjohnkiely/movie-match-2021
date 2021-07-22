import express from 'express'
import expressAsyncHandler from 'express-async-handler'
const router = express.Router()
import Movie from '../models/movieModel.js'

export default router

// @desc Fetch all movies
// @route GET /api/movies
// @access Public
router.get('/', expressAsyncHandler(async (req, res) => {
    const movies = await Movie.find({})

    res.json(movies)
}))