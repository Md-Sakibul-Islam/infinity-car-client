import React from "react";
import { Button, Col, FloatingLabel, Form, Row } from "react-bootstrap";
import "./Contact.css";
import contact from "../../images/contact/contact.png";
import call from "../../images/contact/call.png";
import mail from "../../images/contact/mailbox.png";
import location from "../../images/contact/location.png";
import Header from "../Header/Header";
import Banner from "../Banner/Banner";
import Footer from "../Footer/Footer";
const Contact = () => {
  return (
    <>
      <Header></Header>
      <Banner></Banner>

      <div>
        <div className="container-fluid  contact">
          <Row className="d-flex justify-content-around">
            <Col sm={12} md={5} lg={5}>
              <img src={contact} className="img-fluid" alt="" />
            </Col>
            <Col className="mx-auto contact-form" sm={12} md={6} lg={6}>
              <h2>
                Get In Touch
                <br /> <hr />
              </h2>
              <Form>
                <Form.Group className="mb-3" controlId="formBasicText">
                  <Form.Control type="email" required placeholder="Enter Your Name *" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicText">
                  <Form.Control type="email" required placeholder="Enter Email*" />
                </Form.Group>
                <FloatingLabel
                  className="mb-3"
                  controlId="floatingTextarea2"
                  label="Message"
                >
                  <Form.Control
                  required
                    as="textarea"
                    placeholder="Leave a Message here"
                    style={{ height: "100px" }}
                  />
                </FloatingLabel>

                <Button variant="outline-dark" type="submit">
                  Submit
                </Button>
              </Form>
            </Col>
          </Row>
        </div>
      </div>

      <div className="container mt-5">
        <Row>
          <Col className="d-flex py-2" sm={12} md={4} lg={4}>
            <img className="contact-img" src={call} alt="" />
            <div className="px-3">
              <h5> Call Us Now</h5>
              <p>+(880)1705544150 </p>
            </div>
          </Col>
          <Col className="d-flex" sm={12} md={4} lg={4}>
            <img className="contact-img" src={mail} alt="" />
            <div className="px-3">
              <h5>Mail Us Today </h5>
              <p>support@infinity.com</p>
            </div>
          </Col>
          <Col className="d-flex" sm={12} md={4} lg={4}>
            <img className="contact-img" src={location} alt="" />
            <div className="px-3">
              <h5>Our Location </h5>
              <p>150 Street, Rajshahi</p>
            </div>
          </Col>
        </Row>
      </div>
      <br />
      <br />
      <br />
      <Footer></Footer>
    </>
  );
};

export default Contact;
