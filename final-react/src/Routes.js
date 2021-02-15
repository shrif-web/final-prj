import React from "react";
import { Route, Switch } from "react-router-dom";
import Home from "./containers/Home";
import Search from "./containers/Search";
import Login from "./containers/Login";
import Signup from "./containers/Signup";
import Dashboard from "./containers/Dashboard";
import UserDashboard from "./containers/UserDashboard";
import AuthenticatedRoute from "./components/AuthenticatedRoute";
import UnauthenticatedRoute from "./components/UnauthenticatedRoute";
import "bootstrap/dist/css/bootstrap.min.css";

export default function Routes() {
  return (
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>
      <Route exact path="/search">
        <Search />
      </Route>
      <Route exact path="/user-dashboard">
        <UserDashboard />
      </Route>
      <UnauthenticatedRoute exact path="/login">
        <Login />
      </UnauthenticatedRoute>
      <UnauthenticatedRoute exact path="/signup">
        <Signup />
      </UnauthenticatedRoute>
      <AuthenticatedRoute exact path="/dashboard">
        <Dashboard />
      </AuthenticatedRoute>
    </Switch>
  );
}
