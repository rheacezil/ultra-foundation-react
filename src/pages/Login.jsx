import React from "react";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

// images
import loginImg from "../images/hero-cover-1.png";
import siteIcon from "../images/site-icon-dark.png";

export default function Login() {
  return (
    <div className="page-content d-flex align-items-center">
      <Container className="d-flex justify-content-center">
        <div className="row g-0">
          <img src={loginImg} className="img-fluid h-100" alt="cover" />
        </div>
        <div className="col-lg-5 px-5 p-5">
          <img src={siteIcon} alt="" className="mb-3" />
          <span className="fw-bold fs-3 pt-3">Ultra Foundation</span>

          <p className="lead">Sign in to your account</p>
          <Form>
            <Form.Group>
              <Form.Control
                className="my-3"
                type="email"
                placeholder="Enter your Email"
              />
              <Form.Control
                className="my-3"
                type="password"
                placeholder="Enter your Password"
              />
            </Form.Group>
            <Button className="w-100" variant="warning" type="submit">
              Login
            </Button>
            <hr />
            <Button
              className="w-100 text-dark"
              variant="outline-warning"
              type="submit"
            >
              Login with Facebook
            </Button>
            <Button
              className="w-100 text-dark my-3 mb-5"
              variant="outline-warning"
              type="submit"
            >
              Login with Google
            </Button>

            <a href="#" className="text-muted ">
              Forgot your password?
            </a>
            <p>
              Don't have an account?{" "}
              <a href="#" className="text-muted">
                Register here.
              </a>
            </p>
          </Form>
        </div>
      </Container>
    </div>
  );
}
