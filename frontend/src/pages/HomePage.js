import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Row, Col } from 'react-bootstrap'
import Movie from '../components/Movie'
import Message from '../components/Message'
import Loader from '../components/Loader'
import { listMovies } from '../redux/actions/movieActions'


const HomePage = () => {

    const dispatch = useDispatch()
    const movieList = useSelector(state => state.movieList)
    const { loading, error, movies } = movieList

    useEffect(() => {
        dispatch(listMovies())
    }, [dispatch])

    return (
        <>
            <h1>Our Movie Selection</h1>
            {loading ? <Loader /> : error ? <Message variant='danger'>{error}</Message> : <Row>
                {movies.map(movie => (
                    <Col key={movie._id} sm={12} md={6} lg={4} xl={3}>
                        <Movie movie={movie} />
                    </Col>
                ))}
            </Row>}
            
        </>
    )
}

export default HomePage
