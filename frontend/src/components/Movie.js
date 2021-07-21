import React from "react";
import { Card } from "react-bootstrap";

const Movie = ({ movie }) => {
  return (
    <Card className="my-1 p-1 rounded">
        <div className="imageHeart">
            <Card.Img src={movie.image} variant="top" />
      <i class="far fa-heart fa-3x"></i>
        </div>
      
      <Card.Body className="p-1">
        <Card.Title as="div">
          <h5>
            {movie.name} ({movie.year})
          </h5>
        </Card.Title>
      </Card.Body>
    </Card>
  );
};

export default Movie;
