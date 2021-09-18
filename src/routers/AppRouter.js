import React, { useContext } from "react";
import { BrowserRouter as Router, Switch } from "react-router-dom";
import { AuthContext } from "../auth/AuthContext";

import { LoginScreen } from "../components/login/LoginScreen";
import { DashboardRoute } from "./DashboardRoute";
import { PrivateRouter } from "./PrivateRouter";
import { PublicRouter } from "./PublicRouter";


export const AppRouter = () => {

    const {user} = useContext(AuthContext)
    
    return (
        <Router>
            <div>

            <Switch>
                <PublicRouter exact path="/login" component={LoginScreen} />

                <PrivateRouter isAutenticated={user.logged} component={DashboardRoute} />
            </Switch>

            </div>

      </Router>
    )
}
