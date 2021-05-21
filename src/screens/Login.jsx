import React, { useState } from "react";
import { Container, Form, Button } from "react-bootstrap";
import {} from "react-router-dom";

const Login = () => {
  const [tempLogin, settemplogin] = useState(false);

  const loginFunction = (e) => {
    e.preventDefault();
    settemplogin(true);

    console.log(tempLogin);
  };

  return (
    <Container className="my-5 p-5 border shadow">
      <Form className="my-3 p-5">
        <Form.Group controlId="formBasicEmail" className="mb-3">
          <Form.Label>Username</Form.Label>
          <Form.Control
            type="email"
            autoFocus
            placeholder="Enter email"
            style={{ borderLeft: "5px solid black" }}
          />
          <Form.Text className="text-muted ">
            We'll never share your username with anyone else.
          </Form.Text>
        </Form.Group>

        <Form.Group controlId="formBasicPassword" className="mb-3">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Password"
            style={{ borderLeft: "5px solid black" }}
          />
          <Form.Text className="text-muted">
            We'll never share your password with anyone else.
          </Form.Text>
        </Form.Group>

        <Button variant="primary" type="submit" onClick={loginFunction}>
          Login
        </Button>
      </Form>
    </Container>
  );
};

export default Login;
