import React from "react";
import { Card, Col, Row } from "react-bootstrap";
import blogOne from "../../images/blog/blog-1.jpg";
import blogTwo from "../../images/blog/blog-2.jpg";
import blogThree from "../../images/blog/blog-3.jpg";
import bloger from "../../images/blog/bloger.jpg";
import "./Blog.css";
const Blog = () => {
  return (
    <div>
      <div className="container blog-container mt-5">
        <div className="text-center">
          <h3 className="blog-text">
            From Our Blog <hr />{" "}
          </h3>
        </div>
        <Row xs={1} md={3} className="g-4 mt-3">
          <Col>
            <Card data-aos="fade-up"  className="card-div">
              <Card.Img variant="top" src={blogOne} />
              <Card.Body>
                <Card.Title>
                  Importent tips for your faviorate car.Best informative way to
                  learn
                </Card.Title>
                <div className="d-flex justify-content-around">
                  <img className="blog-img" src={bloger} alt="" />
                  <small>By Nabila Nur </small> <small>|</small>{" "}
                  <small>Feb 01,2022</small>
                </div>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card data-aos="fade-up"  className="card-div">
              <Card.Img variant="top" src={blogTwo} />
              <Card.Body>
                <Card.Title>
                  Does the Brand of Gas I Use Actually Matter?
                </Card.Title>
                <div className="d-flex justify-content-around">
                  <img className="blog-img" src={bloger} alt="" />
                  <small>By Nabila Nur</small> <small>|</small>{" "}
                  <small>Feb 01,2022</small>
                </div>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card data-aos="fade-up" className="card-div">
              <Card.Img variant="top" src={blogThree} />
              <Card.Body>
                <Card.Title>Why Does My Car Heater Blow Cold Air?</Card.Title>
                <div className="d-flex justify-content-around">
                  <img className="blog-img" src={bloger} alt="" />
                  <small>By Nabila Nur</small> <small>|</small>{" "}
                  <small>Feb 01,2022</small>
                </div>
              </Card.Body>
            </Card>
          </Col>
        </Row>
        <br />
        <br />
        <br />
      </div>
    </div>
  );
};

export default Blog;
