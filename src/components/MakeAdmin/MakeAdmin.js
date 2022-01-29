
import React from "react";
import { useState } from "react";
import { useRef } from "react";
import { Button,Alert ,Col, Form, Row } from "react-bootstrap";

const MakeAdmin = () => {
    
    const emailRef = useRef();
    
    const[success,SetSuccess]= useState(false);
const handleAdmin =e =>{
    e.preventDefault();

    const email = emailRef.current.value;
    const admin = {email}
    fetch('https://shielded-dusk-28661.herokuapp.com/users',{
        method:'put',
        headers:{
            'content-type':'application/json'
        },
        body:JSON.stringify(admin)
    })
    .then(res => res.json())
    .then(data => {
        if(data.modifiedCount){
            SetSuccess(true);
            emailRef.current.value=""
        }
    })
   
}
  return (
    <div>
      <h3>Make Admin</h3>
      <div className="container">
        <Row>
          <Col sm={12} md={7} lg={7}>
            <Form onSubmit={handleAdmin} className="review-form">
              <Form.Group
                className="mb-3 d-inline-block"
                controlId="formBasicEmail"
              >
                <Form.Control ref={emailRef} required type="email" />{" "}
              </Form.Group>

              <Button
                className="mb-4 mt-3  d-inline-block"
                variant="secondary"
                type="submit"
              >
                Make Admin
              </Button>
            </Form>
            {
                success && <Alert variant="success">Admin made Successfully</Alert>
            }
           
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default MakeAdmin;
