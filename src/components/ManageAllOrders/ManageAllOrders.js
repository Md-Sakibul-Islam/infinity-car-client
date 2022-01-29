import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Button, Table } from "react-bootstrap";
import trash from "../../images/icon/trash.png";
const ManageAllOrders = () => {
  const [allOrder, SetAllOrder] = useState([]);
  useEffect(() => {
    fetch("https://shielded-dusk-28661.herokuapp.com/allorders")
      .then((res) => res.json())
      .then((data) => SetAllOrder(data));
  }, []);

  const handleDelete = (id) => {
    const yes = window.confirm("Are You Sure , You want to delete?");
    if (yes) {
      fetch(`https://shielded-dusk-28661.herokuapp.com/allorders/${id}`, {
        method: "delete",
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.deletedCount > 0) {
            const oldOrder = allOrder.filter((order) => order._id !== id);
            SetAllOrder(oldOrder);
          }
        });
    }
  };
  return (
    <div>
      <div className="table-main-container">
        <h4 className="">Mange All Orders</h4>
        <div className="container overflow-scroll">
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>#</th>
                <th>Car Name</th>
                <th>Email</th>
                <th>Address</th>
                <th>Phone</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {allOrder.map((order, index) => (
                <tr key={order._id}>
                  <td>{index + 1}</td>
                  <td>{order?.productName}</td>
                  <td>{order?.email}</td>
                  <td>{order?.address}</td>
                  <td>{order?.phone}</td>
                  <td>
                    <Button onClick={() => handleDelete(order._id)} variant="">
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

export default ManageAllOrders;
