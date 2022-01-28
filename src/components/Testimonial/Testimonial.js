import React from "react";
import { Card, Col } from "react-bootstrap";
import userImg from "../../images/profile/profile.png";
import Rating from "react-rating";
import './Testimonial.css'
const Testimonial = ({ review }) => {
  const { name, message, rating } = review;
  return (
    <>
      <Col className="testimonial">
        <Card data-aos="fade-up">
          <div className="d-flex justify-content-center align-items-center">
            <Card.Img variant="top" className="profile-img mt-2" src={userImg} />{" "}
            <Card.Title>{name}</Card.Title>
          </div>
          <Card.Body>
            <Card.Text>{message}</Card.Text>
            <Rating
             readonly
              emptySymbol="far fa-star icon-color"
              fullSymbol="fas fa-star icon-color"
              initialRating={rating}
            ></Rating>
          </Card.Body>
        </Card>
      </Col>
    </>
  );
};

export default Testimonial;
