import React from 'react';
import { Button, Card, Col } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';
import './HomeProduct.css'
const HomeProduct = ({product}) => {
  const history = useHistory();
    const { img, name, describe, price ,_id} =product;

    const handleBuy = id =>{
     history.push(`/buynow/${id}`)
    }
    return (
        <div>
      <Col>
        <Card data-aos="fade-up" className='card-div'>
          <Card.Img variant="top" src={img} />
          <Card.Body>
            <Card.Title>{name}</Card.Title>
            <Card.Text>{describe.slice(0, 70)}</Card.Text>
            <div className="d-flex justify-content-lg-between ">
              <h4>Price: {price} $</h4>
              <Button onClick={()=>handleBuy(_id)} className="btn-secondary">Buy Now</Button>
            </div>
          </Card.Body>
        </Card>
      </Col>
    </div>
    );
};

export default HomeProduct;