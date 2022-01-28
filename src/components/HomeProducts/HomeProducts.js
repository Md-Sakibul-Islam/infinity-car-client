import React, { useEffect, useState } from "react";
import { Row } from "react-bootstrap";
import HomeProduct from "../HomeProduct/HomeProduct";

const HomeProducts = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/products")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);
  return (
    <div className="container mt-5">
      <div className="container products-text text-center">
        <p>
          Made for <span className="text-danger text-uppercase">you only</span>{" "}
        </p>
        <p>
          <span className="text-danger">Infinity Car</span>
        </p>
      </div>
      <div className="product-container">
        <Row xs={1} md={3} className="g-4">
          {products.slice(0, 6).map((product) => (
            <HomeProduct key={product._id} product={product}></HomeProduct>
          ))}
        </Row>
      </div>
     
    </div>
  );
};

export default HomeProducts;
