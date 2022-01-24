import React from 'react';
import { Button, Card, Col } from 'react-bootstrap';

const HomeProduct = ({product}) => {
    const { img, name, describe, price } =product;
    return (
        <div>
      <Col>
        <Card>
          <Card.Img variant="top" src={img} />
          <Card.Body>
            <Card.Title>{name}</Card.Title>
            <Card.Text>{describe.slice(0, 70)}</Card.Text>
            <div className="d-flex justify-content-lg-between ">
              <h4>Price: {price} $</h4>
              <Button className="btn-secondary">Buy Now</Button>
            </div>
          </Card.Body>
        </Card>
      </Col>
    </div>
    );
};

export default HomeProduct;