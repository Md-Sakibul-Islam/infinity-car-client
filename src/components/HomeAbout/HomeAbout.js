import React from "react";
import { Button, Col, Row } from "react-bootstrap";
import safeDrive from "../../images/about/safty-drive.jpg";
import aboutImg from "../../images/about/about.png";
import "./HomeAbout.css";
const HomeAbout = () => {
  return (
    <div className="container-fluid">
      <div className="container home-about mt-5">
        <div>
          <Row className="d-flex justify-content-between">
            <Col className="home-about-info mb-4" sm={12} md={5} lg={5}>
              <h1>We Ensure Your Safe & Happy Journey</h1>
              <p>
                When you are behind the wheel of a car whether alone or with
                passengers driving safely should always be your top concern.
                We are more distracted than ever, so it is crucial to know the
                basics of safe driving and practice them every time you are on
                the road.
              </p>
              <Button variant="outline-dark" className="contact-btn">
                Contact Us
              </Button>
            </Col>
            <Col sm={12} md={6} lg={6}>
              <img src={safeDrive} className="img-fluid rounded-3" alt="" />
            </Col>
          </Row>
        </div>
      </div>

      <Row className="mt-sm-5">
        <Col sm={12} md={5} lg={5}>
          <img src={aboutImg} className="img-fluid about-img mt-3" alt="" />
        </Col>
        <Col className="home-about-info mx-auto mt-5 p-2" sm={12} md={6} lg={6}>
         <h4><span className="text-danger"> About Our Company</span>  </h4>
         
          <p>Infinity  Motor Company, often abbreviated to Infinity Car Motor and commonly known as Infinity Car, is a Bangladeshi multinational automotive manufacturer headquartered in Rajshahi, Bangladesh. Infinity  Motor Company was founded in 2022.</p>
          <Button variant="outline-dark" className="contact-btn">
                Learn more
              </Button>
        </Col>
      </Row>
    </div>
  );
};

export default HomeAbout;
