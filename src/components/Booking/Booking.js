import React from "react";
import { useRef } from "react";
import { useState } from "react";
import { useEffect } from "react";
import { Button, Col, FloatingLabel, Form, Row, Spinner } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import { useParams } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import "./Booking.css";
const Booking = () => {
  const { user } = useAuth();
  const { id } = useParams();
const [loading,setLoading]= useState(false);
const[message,setMessage]= useState('');
const history = useHistory();
  //ref 
  const phoneRef = useRef();
  const addressRef = useRef();

  const [product, setProduct] = useState({});
  const url = `http://localhost:5000/products/${id}`;
  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => setProduct(data));
  }, [url]);

  // post api for orders
  const handleOrder = e => {
    e.preventDefault();
    setLoading(true);
      const phone = phoneRef.current.value;
      const address = addressRef.current.value;
    
      const order ={
        name:user.displayName,
        productName:product.name,
        email:user.email,
        phone:phone,
        address:address
      }


    fetch(`http://localhost:5000/orders`,{
      method:'post',
      headers:{
        'content-type':'application/json'
      },
      body:JSON.stringify(order)
    }).then(res => res.json())
    .then(data => {
    if(data.insertedId){
       phoneRef.current.value=''
      addressRef.current.value=''
      setLoading(false);
      setMessage('Thank You! Your Order Was Successfully')

    }
    })

  }

  return (
    < >
    <Header></Header>
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
          <Col
            className="me-auto mb-4 border border-1 rounded-3"
            sm={12}
            md={5}
            lg={5}
          >
            <img
              src={product?.img}
              className="rounded img-fluid mb-2 mt-1"
              alt=""
            />
            <p className="product-info">{product?.describe}</p>
          </Col>
          <Col className="me-auto" sm={12} md={5} lg={5}>
            <Form onSubmit={handleOrder} className=" login-form">
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
                <Form.Control ref={phoneRef} placeholder="Phone Number" type="number" />
              </Form.Group>
              <FloatingLabel
                className="mb-3"
                controlId="floatingTextarea1"
                label="address"
              >
                <Form.Control
                ref={addressRef}
                  as="textarea"
                  placeholder="address"
                  style={{ height: "100px" }}
                />
              </FloatingLabel>
              {
                loading && <><Spinner animation="border" variant="success"></Spinner></>
              }
              <p>{message}</p>

              <Button variant="success" type="submit">
                Confirm
              </Button>
            </Form>
          </Col>
        </Row>
        
      </div>
      </div>
      <br />
      <br />
      <br />
      <Footer></Footer>
     
    </>
  );
};

export default Booking;
