import React from "react";
import { Col, Row } from "react-bootstrap";
import appStore from '../../images/appstore.png'
import palyStore from '../../images/playstore.png'
import "./Footer.css";
const Footer = () => {
  return (
    <div className="container-fluid footer-container">
      <div className="container">
        <Row>
          <Col sm={12} md={4} lg={4}>
            <h4>OVERVIEW</h4>
            <li>About us </li>
            <li>FAQs </li>
            <li>Privacy Policy </li>
            <li> Terms & Conditions</li>
            <li>Corporate Policies </li>
          </Col>
          <Col sm={12} md={4} lg={4}>
            {" "}
            <h4> OTHERS</h4>
            <li>Advertise with Us </li>
            <li>Careers</li>
            <li>Customer Care</li>
          </Col>
          <Col sm={12} md={4} lg={4}>
            {" "}
            <h4>CONNECT WITH US</h4>
            <li>+00889230484 (Toll-Free) </li>
            <li>support@infinitycar.com</li>
            <li>Dealer solutions</li>
            <li> Used Cars Business</li>
            <li>Contact Us </li>
            <li>Feedback</li>
          </Col>
         
        </Row>
      </div>
    </div>
  );
};

export default Footer;
