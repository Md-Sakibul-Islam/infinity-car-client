import React, { useRef } from "react";
import { Button, Col, Form, Row } from "react-bootstrap";
import { useLocation } from "react-router-dom";
import { useHistory } from "react-router-dom";
import { Link } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import "./Login.css";
const Login = () => {
  // history
  const history = useHistory();
  const location = useLocation();

  const redirectURL = location.state?.from || '/home'

  // Ref 
  const emailRef = useRef();
  const passwordRef = useRef();
  const{loginUser,setUser,setError,error,isLoading,setIsLoading} = useAuth();

  // user login function
  const handleOnLogin = e=>{
    e.preventDefault();
    const email= emailRef.current.value;
    const password = passwordRef.current.value;
    loginUser(email,password)
      setIsLoading(true)
    .then((userCredential) => {
      const user = userCredential.user;
      setUser(user);
      history.push(redirectURL)
    })
    .catch((error) => {
      const errorMessage = error.message;
      setError(errorMessage);
    }).finally(()=>setIsLoading(false));
  }
  return (
    <div className="container login-container mt-5">
      <div className="container">
        <Row className="d-flex justify-content-center">
          <Col sm={12} md={6} lg={6}>
            <Form onSubmit={handleOnLogin} className=" login-form">
                <div className="text-center mb-2">
                <h4>Please <span className="text-danger">Login</span> </h4>
                </div>

              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address <span className="text-danger">*</span> </Form.Label>
                <Form.Control required ref={emailRef} type="email" placeholder="Enter Your Email" />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password  <span className="text-danger">*</span></Form.Label>
                <Form.Control
                required
                ref={passwordRef}
                  type="password"
                  placeholder="Enter Your Password"
                />
              </Form.Group>
                <p>{error}</p>
              <Button variant="secondary" type="submit">
                Login
              </Button>
              <p className="mt-2">Are You New User? Please <Link to='/register'>Register</Link></p>
            </Form>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default Login;
