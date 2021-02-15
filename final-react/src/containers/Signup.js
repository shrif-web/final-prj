import React, { useState } from "react";
import { Alert, Form, Button } from "react-bootstrap";
import { useFormFields } from "../libs/hooksLib";
import { useHistory } from "react-router-dom";
import { useAppContext } from "../libs/contextLib";
import Cookies from "js-cookie";
import "./Signup.css";

import Parse from "../Parse.js";


export default function Signup() {
  const [fields, handleFieldChange] = useFormFields({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const { userHasAuthenticated } = useAppContext();
  const history = useHistory();
  const [error, setError] = useState([]);

  function validateForm() {
    return (
      fields.username.length > 0 &&
      fields.email.length > 0 &&
      fields.password.length > 0 &&
      fields.password === fields.confirmPassword
    );
  }

  async function handleSubmit(event) {
    event.preventDefault();
    userHasAuthenticated(true);
    Cookies.set("user", "true");
    history.push("/");
    alert("Signed up and logged in");
    //TODO
  }

  function handleClose() {
    setError([]);
  }

  return (
    <div className="Signup ">
      <div className="col-xs-12 col-sm-6 col-md-6 col-lg-4 pt-3" id="alert">
        {error.map((msg, index) => (
          <Alert variant="danger" key={index} onClose={handleClose} dismissible>
            <Alert.Heading>Error</Alert.Heading>
            <p>{msg}</p>
          </Alert>
        ))}
      </div>

      <Form
        onSubmit={handleSubmit}
        style={{
          marginTop: "15vh",
          backgroundColor: "white",
          padding: "25px",
        }}
      >
        <Form.Group controlId="username" size="lg">
          <Form.Label>نام کاربری</Form.Label>
          <Form.Control
            autoFocus
            type="text"
            value={fields.username}
            onChange={handleFieldChange}
          />
        </Form.Group>
        <Form.Group controlId="email" size="lg">
          <Form.Label>ایمیل</Form.Label>
          <Form.Control
            autoFocus
            type="email"
            value={fields.email}
            onChange={handleFieldChange}
          />
        </Form.Group>
        <Form.Group controlId="password" size="lg">
          <Form.Label>رمز عبور</Form.Label>
          <Form.Control
            type="password"
            value={fields.password}
            onChange={handleFieldChange}
          />
        </Form.Group>
        <Form.Group controlId="confirmPassword" size="lg">
          <Form.Label>تکرار رمز عبور</Form.Label>
          <Form.Control
            type="password"
            onChange={handleFieldChange}
            value={fields.confirmPassword}
          />
        </Form.Group>

        <Button
          block
          size="lg"
          type="submit"
          varient="success"
          disabled={!validateForm()}
        >
          ثبت نام
        </Button>
      </Form>
    </div>
  );
}
