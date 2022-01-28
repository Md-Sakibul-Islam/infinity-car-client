import React, { useRef } from "react";
import { Button, Col, Form, Row } from "react-bootstrap";
import { useLocation } from "react-router-dom";
import { useHistory } from "react-router-dom";
import { Link } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";

const Register = () => {
  // history
  const history = useHistory();
  const location = useLocation();

  const redirectURL = location.state?.from || "/home";

  const { setUser, error, setError, userCreate, updateProfileName } = useAuth();
  // Ref
  const nameRef = useRef();
  const emailRef = useRef();
  const passwordRef = useRef();

  // save user data in mongodb
  const saveUser = (name, email) => {
    const user = { name, email };
    fetch("http://localhost:5000/users", {
      method: "post",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(user),
    })
      .then((res) => res.json())
      .then((data) => {
      });
  };
  // handle submit for new user create
  const handleSubmit = (e) => {
    e.preventDefault();
    const name = nameRef.current.value;
    const email = emailRef.current.value;
    const password = passwordRef.current.value;
    userCreate(name, email, password)
      .then((userCredential) => {
        const newUser = { email, displayName: name };
        setUser(newUser);
        updateProfileName(name);
        saveUser(name, email);
        history.push(redirectURL);
      })
      .catch((error) => {
        const errorMessage = error.message;
        setError(errorMessage);
      });
  };
  return (
    <>
    <Header></Header>
      <div className="container login-container mt-5">
        <Row className="d-flex justify-content-center">
          <Col sm={12} md={6} lg={6}>
            <Form onSubmit={handleSubmit} className=" login-form">
              <div className="text-center mb-2">
                <h4>
                  Please <span className="text-danger">Register</span>{" "}
                </h4>
              </div>

              <Form.Group className="mb-3" controlId="formBasicText">
                <Form.Label>
                  Your Name <span className="text-danger">*</span>
                </Form.Label>
                <Form.Control
                  ref={nameRef}
                  type="text"
                  required
                  placeholder="Enter Your Name"
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>
                  Email address <span className="text-danger">*</span>
                </Form.Label>
                <Form.Control
                  ref={emailRef}
                  type="email"
                  required
                  placeholder="Enter Your Email"
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>
                  Password <span className="text-danger">*</span>
                </Form.Label>
                <Form.Control
                  ref={passwordRef}
                  required
                  type="password"
                  placeholder="Enter Your Password"
                />
              </Form.Group>
              {error}
              <Button variant="secondary" type="submit">
                Submit
              </Button>
              <p className="mt-2">
                {" "}
                Already User ? Please <Link to="/login">Login</Link>
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

export default Register;
