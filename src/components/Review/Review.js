import React from "react";
import { useRef } from "react";
import { Button, Col, FloatingLabel, Form, Row } from "react-bootstrap";
import useAuth from "../../hooks/useAuth";

const Review = () => {
  const { user } = useAuth();
  const messageRef = useRef();
  const ratingRef = useRef();
  const handleReview = (e) => {
    e.preventDefault();
    const message = messageRef.current.value;
    const rating = ratingRef.current.value;
    const name = user?.displayName;
    const feedback ={name,message,rating};
    fetch('http://localhost:5000/review',{
        method:'post',
        headers:{
            'content-type':'application/json'
        }
        ,
        body:JSON.stringify(feedback)
    }).then(res => res.json())
    .then(data => {
        console.log(data)
    })
  };
  return (
    <div>
      <h3>Review</h3>
      <div className="container">
        <Row>
          <Col sm={12} md={5} lg={5}>
            <Form onSubmit={handleReview} className="review-form">
              <Form.Group className="mb-3" controlId="formBasicText">
                <Form.Control
                  type="text"
                  readOnly
                  value={user?.displayName || ""}
                />
              </Form.Group>
              <FloatingLabel
                className="mb-2"
                controlId="floatingTextarea1"
                label="Write Message"
              >
                <Form.Control
                  ref={messageRef}
                  required
                  as="textarea"
                  placeholder="feedback"
                  style={{ height: "100px" }}
                />
              </FloatingLabel>
              <Form.Group className="mb-3" controlId="formBasicText">
                <Form.Control
                  required
                  ref={ratingRef}
                  type="number"
                  placeholder="Enter Rating Number"
                  min={0}
                  max={5}
                />
              </Form.Group>
              <Button className="mb-4" variant="secondary" type="submit">
                Submit
              </Button>
            </Form>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default Review;
