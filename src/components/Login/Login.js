import React from "react";
import "./Login.css";
import { Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import useAuth from "../../hooks/useAuth";

const Login = () => {
  const {
    signInUsingGoogle,
    signInUsingFacebook,
    signInUsingEmailAndPassword,
    emailChangeHandler,
    passwordChangeHandler,
    passwordResetHandler,
    error,
  } = useAuth();
  return (
    <div className="login-container d-flex align-items-center justify-content-center">
      <Container className="p-5">
        <Row>
          <Col>
            <div className="login_box w-50 mx-auto">
              <h2 className="mb-5">Please Sign in!</h2>
              <div>
                <form
                  className="d-flex flex-column"
                  onSubmit={signInUsingEmailAndPassword}
                >
                  <input
                    type="email"
                    placeholder="  E-mail"
                    onBlur={emailChangeHandler}
                  />
                  <br />
                  <input
                    type="password"
                    placeholder="  Password"
                    onBlur={passwordChangeHandler}
                  />
                  <div className="text-danger text-start">{error}</div>
                  <br />
                  <button
                    className="btn-regular align-self-center ps-5 pe-5"
                    type="submit"
                  >
                    SIGN IN
                  </button>
                </form>
                <br />
                <div className="text-start">
                  Forgot password?{" "}
                  <a href="#" onClick={passwordResetHandler}>
                    Click here to reset password
                  </a>
                </div>
                <p className="text-start">
                  New to E-School? <Link to="/register"> Create account?</Link>
                </p>

                <hr />
                <span>OR</span>
                <br />
                <br />
                <div className="d-flex justify-content-center">
                  <button
                    className="me-2 btn-regular btn-google"
                    onClick={signInUsingGoogle}
                  >
                    SIGN IN WITH GOOGLE
                  </button>
                  <button
                    className="btn-regular btn-facebook"
                    onClick={signInUsingFacebook}
                  >
                    SIGN IN WITH FACEBOOK
                  </button>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Login;
