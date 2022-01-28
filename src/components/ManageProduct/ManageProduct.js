import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Button, Table } from 'react-bootstrap';
import trash from '../../images/icon/trash.png'

const ManageProduct = () => {
    const[products,setProducts]= useState([]);
    useEffect(()=>{
        fetch('http://localhost:5000/products')
        .then(res=> res.json())
        .then(data => setProducts(data))
    },[])
    const handleDelete = id => {
        const yes = window.confirm("Are You Sure , You want to delete?");
    if (yes) {
      fetch(`http://localhost:5000/products/${id}`, {
        method: "delete",
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.deletedCount > 0) {
            const oldProducts = products.filter((order) => order._id !== id);
            setProducts(oldProducts);
          }
        });
    }
       
    }
    return (
        <div>
      <div className="table-main-container">
        <h4 className="">Mange All Products</h4>
        <div className="container overflow-scroll">
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>#</th>
                <th>Car Name</th>
                <th>Price</th>
                
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {products.map((product, index) => (
                <tr key={product._id}>
                  <td>{index + 1}</td>
                  <td>{product?.name}</td>
                  <td>{product?.price}</td>
                 
                  <td>
                    <Button onClick={() => handleDelete(product._id)} variant="">
                      <img src={trash} alt="" />
                    </Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </div>
      </div>
    </div>
    );
};

export default ManageProduct;