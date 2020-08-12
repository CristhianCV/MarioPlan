import React from "react";
import { BrowserRouter, Switch } from "react-router-dom";
import Navbar from "./Components/layout/Navbar";
import Dashboard from "./Components/dashboard/Dashboard";
import ProjectDetails from "./Components/projects/ProjectDetails";
import SignIn from "./Components/auth/SignIn";
import SignUp from "./Components/auth/SignUp";
import CreateProject from "./Components/projects/CreateProject";
import PrivateRoute from "./Components/auth/PrivateRoute";
import PublicRoute from "./Components/auth/PublicRoute";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar></Navbar>
        <Switch>
          <PrivateRoute path="/" exact component={Dashboard}></PrivateRoute>
          <PrivateRoute
            path="/project/:id"
            component={ProjectDetails}
          ></PrivateRoute>
          <PublicRoute path="/signin" component={SignIn}></PublicRoute>
          <PublicRoute path="/signup" component={SignUp}></PublicRoute>
          <PrivateRoute path="/create" component={CreateProject}></PrivateRoute>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
