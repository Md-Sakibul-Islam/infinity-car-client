import React from "react";
import { Col, Row } from "react-bootstrap";
import notFound from "../../images/not-found.jpg";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
const NotFound = () => {
  return (
    <>
    <Header></Header>
      <div className="container mt-5">
        <Row className="d-flex justify-content-center">
            <Col sm={12} md={6} lg={6}>
            <img src={notFound}  className="img-fluid" alt="" />
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

export default NotFound;
