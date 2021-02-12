import React, { useState } from "react";
import { useAppContext } from "../libs/contextLib";
import { Form, Button, Alert } from "react-bootstrap";
import Cookies from "js-cookie";
import "./Login.css";

export default function Login() {
  const { userHasAuthenticated } = useAppContext();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState([]);

  function validateForm() {
    return username.length > 0 && password.length > 0;
  }

  async function handleSubmit(event) {
    event.preventDefault();
    userHasAuthenticated(true);
    Cookies.set("user", "true");
    alert("Logged in");
  }

  function handleClose() {
    setError([]);
  }

  return (
    <div className="Login">
      {error.map((msg, index) => (
        <div className="col-xs-12 col-sm-6 col-md-6 col-lg-4 pt-3" id="alert">
          <Alert variant="danger" key={index} onClose={handleClose} dismissible>
            <Alert.Heading>Error</Alert.Heading>
            <p>{msg}</p>
          </Alert>
        </div>
      ))}

      <div style={{ marginTop: "15vh", width: "auto" }}>
        <Form onSubmit={handleSubmit} style={{ backgroundColor: "white" }}>
          <Form.Group size="xl" controlId="username">
            <Form.Label>نام کاربری</Form.Label>
            <Form.Control
              autoFocus
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </Form.Group>
          <Form.Group size="xl" controlId="password">
            <Form.Label>رمز عبور</Form.Label>
            <Form.Control
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </Form.Group>
          <Button block size="xl" type="submit" disabled={!validateForm()}>
            ورود
          </Button>
          <p className="m-3">
            حساب کاربری ندارید؟
            <a href="/signup">همین حالا ثبت نام کنید </a>
          </p>
        </Form>
      </div>
    </div>
  );
}
