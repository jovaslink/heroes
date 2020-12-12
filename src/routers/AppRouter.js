import React, { useContext } from "react";
import { BrowserRouter as Router, Switch } from "react-router-dom";

import { LoginScreen } from "../components/login/LoginScreen";
import { DashboardRouter } from "./DashboardRouter";
import { PrivateRoute } from "./PrivateRoute";
import { AuthContext } from "../auth/AuthContext";
import { PublicRoute } from "./PublicRoute";

export default function AppRouter() {
  const { user } = useContext(AuthContext);
  return (
    <Router>
      <div>
        <Switch>
          <PublicRoute
            exact
            path="/login"
            isAuthenticated={user.logged}
            component={LoginScreen}
          />

          <PrivateRoute
            path="/"
            isAuthenticated={user.logged}
            component={DashboardRouter}
          />
        </Switch>
      </div>
    </Router>
  );
}
