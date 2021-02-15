import React, { useState, useEffect } from "react";
import { AppContext } from "./libs/contextLib";
import Routes from "./Routes";
import { Navbar, Nav, Button } from "react-bootstrap";
import Cookies from "js-cookie";
import "./App.css";

// var Parse = require('parse');
// Parse.initialize("myAppId");
// Parse.serverURL = 'http://localhost:1337/parse'

function App() {
  const [isAuthenticated, userHasAuthenticated] = useState(false);

  useEffect(() => {
    onLoad();
  }, []);

  async function onLoad() {
    const user = Cookies.get("user");
    if (user) {
      userHasAuthenticated(true);
    }
  }

  function handleLogout() {
    Cookies.remove("user");
    userHasAuthenticated(false);
  }

  return (
    <div>
      <div className="App container">
        <Navbar
          fixed="top"
          collapseOnSelect
          bg="white"
          expand="sm"
          className="navbar-light mb-3"
        >
          <Navbar.Brand href="/" className="font-weight-bold">
            <img
              alt=""
              src="./logo.png"
              width="50"
              height="30"
              className="d-inline-block align-top"
            />
          </Navbar.Brand>

          <Navbar.Toggle />
          <Navbar.Collapse className="justify-content-end">
            <Nav>
              {isAuthenticated ? (
                <>
                  <Button
                    variant="outline-primary"
                    className="nav-btn1"
                    size="sm"
                    href="/dashboard"
                  >
                    پنل کاربری
                  </Button>
                  <Button
                    onClick={handleLogout}
                    variant="outline-primary"
                    className="nav-btn2"
                    size="sm"
                    href="/login"
                  >
                    خروج
                  </Button>
                </>
              ) : (
                <>
                  <Button
                    variant="outline-primary"
                    className="nav-btn1"
                    size="sm"
                    href="/login"
                  >
                    ورود
                  </Button>{" "}
                  <Button
                    variant="outline-primary"
                    className="nav-btn2"
                    size="sm"
                    href="/signup"
                  >
                    ثبت نام
                  </Button>{" "}
                </>
              )}
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </div>
      <AppContext.Provider value={{ isAuthenticated, userHasAuthenticated }}>
        <Routes />
      </AppContext.Provider>
    </div>
  );
}

export default App;
