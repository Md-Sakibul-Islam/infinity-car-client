import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { Button, Col, FloatingLabel, Form, Row } from "react-bootstrap";
import { useParams } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import "./Booking.css";
const Booking = () => {
  const { user } = useAuth();
  const { id } = useParams();
  const [product, setProduct] = useState({});
  const url = `http://localhost:5000/products/${id}`;
  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => setProduct(data));
  }, [url]);


// post api for orders

  return (
    <div className="container buy-now-container mt-4">
      <div className="text-center">
        <h2>
          <span className="text-danger">Infinity</span> Car
        </h2>
        <h3>
          Make Love With <span className="text-danger">The Roads</span>{" "}
        </h3>
      </div>

      <div className="container mt-5">
        <Row>
          <Col className="me-auto border border-1 rounded-3" sm={12} md={5} lg={5}>
            <img src={product?.img} className="rounded img-fluid mb-2 mt-1" alt="" />
            <p className="product-info">{product?.describe}</p>
          </Col>
          <Col className="me-auto" sm={12} md={5} lg={5}>
              
            <Form className=" login-form">
            <h4>{product?.name}</h4>
            <h5>Price: {product?.price} $</h5>


              <Form.Group className="mb-3" controlId="formBasicText">
                <Form.Control
                  type="text"
                  readOnly
                  value={user?.displayName || ""}
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Control type="email" readOnly value={user?.email || ""} />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicText">
                <Form.Control
                  type="text"
                  readOnly
                  value={product?.name || ""}
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicNumber">
                <Form.Control placeholder="Phone Number"  type="number" />
              </Form.Group>
              <FloatingLabel className="mb-3" controlId="floatingTextarea1" label="address">
                <Form.Control
                
                  as="textarea"
                  placeholder="address"
                  style={{ height: "100px" }}
                />
              </FloatingLabel>

              <Button variant="success" type="submit">
              Confirm
              </Button>
            </Form>
          </Col>
        </Row>
      </div>
      <br />
      <br />
      <br />
      <br />
      <br />
    </div>
  );
};

export default Booking;
