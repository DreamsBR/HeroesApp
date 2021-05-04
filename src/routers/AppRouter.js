
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import { LoginScreem } from "../components/login/LoginScreem";
import { MarvelScreem } from "../components/maven/MarvelScreem";
import { Navbar } from "../components/maven/ui/Navbar";
import { DashboardRoutes } from "./DashboardRoutes";


export const AppRouter = () => {
    
    return (
    <Router>
        <div>                    
            <Switch>
                <Route exact path="/login" component={ LoginScreem }/>                
                <Route path="/" component={ DashboardRoutes }/>
            </Switch>
        </div>
    </Router>
    )
}
