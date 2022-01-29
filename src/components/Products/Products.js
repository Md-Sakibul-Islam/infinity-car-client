import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { Row } from "react-bootstrap";
import Banner from "../Banner/Banner";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import Product from "../Product/Product";
import './Products.css'
const Products = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://shielded-dusk-28661.herokuapp.com/products")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);
  return (
    <>
    <Header></Header>
      <Banner></Banner>
      <div className="products-container">
      <div className="container products-text text-center">
        <p>Made for <span className="text-danger text-uppercase">you only</span> </p>
        <p><span className="text-danger">Infinity Car</span></p>
       
      </div>
      <div className="container product-container">
        <Row xs={1} md={3} className="g-4">
            {
                products.map(product => <Product key={product._id} product={product}></Product>)
            }
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

export default Products;
