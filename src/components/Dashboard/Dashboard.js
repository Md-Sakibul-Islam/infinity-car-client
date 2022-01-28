import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Col, Row } from "react-bootstrap";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams,
  useRouteMatch,
} from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import AddProduct from "../AddProduct/AddProduct";
import DashboardHome from "../DashboardHome/DashboardHome";
import MakeAdmin from "../MakeAdmin/MakeAdmin";
import ManageAllOrders from "../ManageAllOrders/ManageAllOrders";
import ManageProduct from "../ManageProduct/ManageProduct";
import MangeOrder from "../MangeOrder/MangeOrder";
import Payment from "../Payment/Payment";
import Review from "../Review/Review";
import "./Dashboard.css";
const Dashboard = () => {
  const { user } = useAuth();
  let { path, url } = useRouteMatch();
  const [admin, setAdmin] = useState(false);
  useEffect(() => {
    fetch(`http://localhost:5000/users/${user.email}`)
      .then((res) => res.json())
      .then((data) => setAdmin(data.admin));
  }, [user.email]);
  return (
    <div className="container-fluid dash">
      <Row className="d-flex justify-content-evenly">
        <Col className="dash-menu mt-2" sm={12} md={4} lg={4}>
          {!admin && (
            <>
              <p>
                <Link className="dash-item" to="/home">
                  {" "}
                  Back to Home
                </Link>
              </p>
              <p>
                <Link className="dash-item" to={`${url}`}>
                  Dashboard
                </Link>
              </p>
              <p>
                <Link className="dash-item" to={`${url}/payment`}>
                  Payment
                </Link>
              </p>
              <p>
                {" "}
                <Link className="dash-item" to={`${url}/manageorder`}>
                  My Order
                </Link>
              </p>
              <p>
                {" "}
                <Link className="dash-item" to={`${url}/review`}>
                  Review
                </Link>
              </p>
              <p>
                {" "}
                <Link className="dash-item" to={`${url}/logout`}>
                  Logout
                </Link>
              </p>
            </>
          )}
          {admin && (
            <>
             <p>
                <Link className="dash-item" to='/home'>
                  Back To Home
                </Link>
              </p>
             <p>
                <Link className="dash-item" to={`${url}`}>
                  Dashboard
                </Link>
              </p>
              <p>
                {" "}
                <Link className="dash-item" to={`${url}/manageallorders`}>
                  Manage All Orders
                </Link>
              </p>
              <p>
                {" "}
                <Link className="dash-item" to={`${url}/addproduct`}>
                  Add Product
                </Link>
              </p>
              <p>
                {" "}
                <Link className="dash-item" to={`${url}/manageproduct`}>
                  Manage All Products
                </Link>
              </p>
              <p>
                {" "}
                <Link className="dash-item" to={`${url}/makeadmin`}>
                  Make Admin
                </Link>
              </p>
              <p>
                {" "}
                <Link className="dash-item" to={`${url}/logout`}>
                  Logout
                </Link>
              </p>
            </>
          )}
        </Col>
        <Col className="dash-component  mt-2" sm={12} md={7} lg={7}>
          <Route exact path={path}>
            <DashboardHome></DashboardHome>
          </Route>
          <Switch>
            <Route path={`${path}/manageorder`}>
              <MangeOrder></MangeOrder>
            </Route>
            <Route path={`${path}/payment`}>
              <Payment></Payment>
            </Route>
            <Route path={`${path}/review`}>
              <Review></Review>
            </Route>
            <Route path={`${path}/makeadmin`}>
              <MakeAdmin></MakeAdmin>
            </Route>
            <Route path={`${path}/addproduct`}>
              <AddProduct></AddProduct>
            </Route>
            <Route path={`${path}/manageproduct`}>
              <ManageProduct></ManageProduct>
            </Route>
            <Route path={`${path}/manageallorders`}><ManageAllOrders></ManageAllOrders></Route>
          </Switch>
        </Col>
      </Row>
    </div>
  );
};

export default Dashboard;
