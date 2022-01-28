import React, { useRef, useState } from "react";
import { Button, Col, Form, Row, Spinner } from "react-bootstrap";
import { useLocation } from "react-router-dom";
import { useHistory } from "react-router-dom";
import { Link } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import "./Login.css";
const Login = () => {
  const [loading, setLoading] = useState(false);
  // history
  const history = useHistory();
  const location = useLocation();

  const redirectURL = location.state?.from || "/home";

  // Ref
  const emailRef = useRef();
  const passwordRef = useRef();
  const { loginUser, setUser, setError, error, setIsLoading } = useAuth();

  // user login function
  const handleOnLogin = (e) => {
    e.preventDefault();
    setLoading(true);
    const email = emailRef.current.value;
    const password = passwordRef.current.value;
    setIsLoading(true);
    loginUser(email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        setUser(user);
        setLoading(false);
        history.push(redirectURL);
      })
      .catch((error) => {
        const errorMessage = error.message;
        setError(errorMessage);
        setLoading(false);
      })
      .finally(() => setIsLoading(false));
  };
  return (
    <>
      <Header></Header>
      <div className="container login-container mt-5">
        <Row className="d-flex justify-content-center">
          <Col sm={12} md={6} lg={6}>
            <Form onSubmit={handleOnLogin} className=" login-form">
              <div className="text-center mb-2">
                <h4>
                  Please <span className="text-danger">Login</span>{" "}
                </h4>
              </div>

              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>
                  Email address <span className="text-danger">*</span>{" "}
                </Form.Label>
                <Form.Control
                  required
                  ref={emailRef}
                  type="email"
                  placeholder="Enter Your Email"
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>
                  Password <span className="text-danger">*</span>
                </Form.Label>
                <Form.Control
                  required
                  ref={passwordRef}
                  type="password"
                  placeholder="Enter Your Password"
                />
              </Form.Group>
              <p>{error}</p>

              {loading && (
                <div>
                  <Spinner animation="border" variant="success"></Spinner>
                </div>
              )}

              <Button className="mt-3" variant="secondary" type="submit">
                Login
              </Button>
              <p className="mt-2">
                Are You New User? Please <Link to="/register">Register</Link>
              </p>
            </Form>
          </Col>
        </Row>
      </div>
      <br />
      <br />
      <br />
      <Footer></Footer>
    </>
  );
};

export default Login;
