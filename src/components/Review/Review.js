import React, { useState } from "react";
import { useRef } from "react";
import {
  Button,
  Col,
  FloatingLabel,
  Form,
  Row,
  Spinner,
} from "react-bootstrap";
import useAuth from "../../hooks/useAuth";

const Review = () => {
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const { user } = useAuth();
  const messageRef = useRef();
  const ratingRef = useRef();
  const handleReview = (e) => {
    e.preventDefault();
    setLoading(true);
    const message = messageRef.current.value;
    const rating = ratingRef.current.value;
    const name = user?.displayName;
    const feedback = { name, message, rating };
    fetch("https://shielded-dusk-28661.herokuapp.com/review", {
      method: "post",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(feedback),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          setLoading(false);
          messageRef.current.value = "";
          ratingRef.current.value = "";
          setMessage("Your Rating Was Submitted");
        }
      });
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
                  placeholder="Enter Rating Number 0-5"
                  min={0}
                  max={5}
                />
              </Form.Group>

              {loading && (
                <div>
                  {" "}
                  <Spinner animation="border" variant="success"></Spinner>{" "}
                </div>
              )}
              <p>{message}</p>

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
