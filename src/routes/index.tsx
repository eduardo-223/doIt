import { Switch } from "react-router-dom";
import { Dashboard } from "../pages/Dashboard";
import { Login } from "../pages/Login";
import { SingUp } from "../pages/SingUp";
import { Route } from "./Route";

export const Router = () => (
  <Switch>
    <Route exact path="/" component={Login} />
    <Route path="/singup" component={SingUp} />
    <Route path="/dashboard" component={Dashboard} isPrivate />
  </Switch>
);
