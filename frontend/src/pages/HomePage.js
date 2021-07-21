import React from 'react'
import { Row, Col } from 'react-bootstrap'
import movies from '../products'
import Movie from '../components/Movie'

const HomePage = () => {
    return (
        <>
            <h1>Our Movie Selection</h1>
            <Row>
                {movies.map(movie => (
                    <Col sm={12} md={6} lg={4} xl={3}>
                        <Movie movie={movie} />
                    </Col>
                ))}
            </Row>
        </>
    )
}

export default HomePage
