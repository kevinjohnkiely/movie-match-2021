import React, { useState } from "react";
import { Card, Button, Modal } from "react-bootstrap";

const Movie = ({ movie }) => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
      <Modal show={show} onHide={handleClose} animation={false}>
        <Modal.Header>
          <Modal.Title>{movie.name}</Modal.Title>
        </Modal.Header>
        <Modal.Body><strong>About this movie: </strong>{movie.description}
        <p><strong>Year Released: </strong>{movie.year}</p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
      <Card className="my-1 p-1 rounded">
        <div className="imageHeart">
          <Card.Img src={movie.image} variant="top" />
          <i className="far fa-heart fa-3x"></i>
        </div>

        <Card.Body className="p-1">
          <Card.Title as="div">
            <h5>
              {movie.name} ({movie.year})
            </h5>
          </Card.Title>
          <Card.Text>
            <Button variant="primary" onClick={handleShow} size="sm">
              Read more...
            </Button>
          </Card.Text>
        </Card.Body>
      </Card>
    </>
  );
};

export default Movie;
