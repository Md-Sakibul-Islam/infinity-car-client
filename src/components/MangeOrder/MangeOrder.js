import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Button, Table } from "react-bootstrap";
import trash from "../../images/icon/trash.png";
import useAuth from "../../hooks/useAuth";

const MangeOrder = () => {
  const { user } = useAuth();
  const [myOrder, setMyOrder] = useState([]);
  useEffect(() => {
    fetch(`https://shielded-dusk-28661.herokuapp.com/orders/?email=${user.email}`)
      .then((res) => res.json())
      .then((data) => setMyOrder(data));
  }, [user.email]);

  const handleDelete = (id) => {
    const yes = window.confirm("Are You Sure , You want to delete?");
    if (yes) {
      fetch(`https://shielded-dusk-28661.herokuapp.com/orders/${id}`, {
        method: "delete",
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.deletedCount > 0) {
            const oldOrder = myOrder.filter((order) => order._id !== id);
            setMyOrder(oldOrder);
          }
        });
    }
  };

  return (
    <div>
      <div className="table-main-container">
        <h4 className="">My Orders</h4>
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
              {myOrder.map((order, index) => (
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

export default MangeOrder;
