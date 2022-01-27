
import React from "react";
import { useState } from "react";
import { useRef } from "react";
import { Button, Col, FloatingLabel, Form, Row ,Alert} from "react-bootstrap";

const AddProduct = () => {
    const[success,setSuccess]= useState(false);
  const imgRef = useRef();
  const nameRef = useRef();
  const describeRef = useRef();
  const priceRef = useRef();

  const handleProduct = (e) => {
    e.preventDefault();
    setSuccess(false)
    const img = imgRef.current.value;
    const name = nameRef.current.value;
    const describe = describeRef.current.value;
    const price = priceRef.current.value;

    const product = { img, name, describe, price };
    fetch("http://localhost:5000/products", {
      method: "post",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(product),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          imgRef.current.value = "";
          nameRef.current.value = "";
          describeRef.current.value = "";
          priceRef.current.value = "";
          setSuccess(true);
        }
      });
  };
  return (
    <div>
      <h4>Add Product</h4>
      <div className="container">
        <Row>
          <Col sm={12} md={7} lg={7}>
            <Form onSubmit={handleProduct}>
              <Form.Group className="mb-3" controlId="formBasicText">
                <Form.Control
                  type="text"
                  ref={imgRef}
                  placeholder="Enter Image url"
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicText">
                <Form.Control
                  type="text"
                  ref={nameRef}
                  placeholder="Enter Product Name"
                />
              </Form.Group>
              <FloatingLabel
                className="mb-3"
                controlId="floatingTextarea2"
                label="Describe"
              >
                <Form.Control
                  ref={describeRef}
                  as="textarea"
                  placeholder="Leave a describe here"
                  style={{ height: "100px" }}
                />
              </FloatingLabel>
              <Form.Group className="mb-3" controlId="formBasicText">
                <Form.Control
                  ref={priceRef}
                  type="number"
                  placeholder="Enter Product Price"
                />
              </Form.Group>
              {
                  success && <Alert>Product Added Successfully</Alert>
              }
              <Button className="mb-2" variant="secondary" type="submit">
                Submit
              </Button>
            </Form>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default AddProduct;
