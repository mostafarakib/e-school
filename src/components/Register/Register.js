import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import useAuth from "../../hooks/useAuth";

const Register = () => {
  const {
    registrationHandler,
    nameChangeHandler,
    emailChangeHandler,
    passwordChangeHandler,
    error,
  } = useAuth();
  return (
    <div className="login-container d-flex align-items-center justify-content-center">
      <Container className="p-5">
        <Row>
          <Col>
            <div className="login_box w-50 mx-auto">
              <h2 className="mb-5">Create User Account</h2>
              <div>
                <form
                  className="d-flex flex-column"
                  onSubmit={registrationHandler}
                >
                  <input
                    type="text"
                    placeholder="  Name"
                    onBlur={nameChangeHandler}
                  />
                  <br />
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
                    SIGN UP
                  </button>
                </form>
                <br />
                <p className="d-flex">
                  Already an user? <Link to="/login"> Click here to login</Link>
                </p>

                <hr />
                <span>OR</span>
                <br />
                <br />
                <div className="d-flex justify-content-center">
                  <button className="me-2 btn-regular btn-google">
                    SIGN IN WITH GOOGLE
                  </button>
                  <button className="btn-regular btn-facebook">
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

export default Register;
