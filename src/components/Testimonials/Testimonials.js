import React, { useEffect, useState } from "react";
import { Row } from "react-bootstrap";
import Testimonial from "../Testimonial/Testimonial";

const Testimonials = () => {
  const [reviews, setReviews] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/review")
      .then((res) => res.json())
      .then((data) => setReviews(data));
  }, []);
  return (
    <>
      <div className="container mt-5">
          <div className="text-center">
              <h6>Testimonials</h6>
              <h4>CUSTOMER  <span className="text-danger">REVIEWS </span> </h4>
          </div>
        <Row xs={1} md={3} className="g-4 mt-4">
            {
                reviews.map(review => <Testimonial key={review._id} review={review}></Testimonial>)
            }
        </Row>
      </div>
    </>
  );
};

export default Testimonials;
