import React from 'react';
import {Redirect, Route, Switch} from "react-router-dom";
import Login from "../pages/Login/Login";
import Error404 from "../pages/404/Error404";
import Profile from "../pages/Profile/Profile";
import Registration from "../pages/Login/Registration";
import ResetPassword from "../pages/Login/ResetPassword";
import NewPassword from "../pages/Login/NewPassword";
import Test from "../pages/Tests/Test";

export const PATH = {
    LOGIN: "/login",
    REGISTRATION: "/registration",
    PROFILE: "/profile",
    RESET_PASSWORD: "/reset-password",
    NEW_PASSWORD: "/new-password",
    TEST: "/test",
}

function Routes() {
    return (
        <Switch>
            <Route path={"/"} exact render={() => <Redirect to={PATH.PROFILE}/>}/>
            <Route path={PATH.LOGIN} render={() => <Login/>}/>
            <Route path={PATH.REGISTRATION} render={() => <Registration/>}/>
            <Route path={PATH.PROFILE} render={() => <Profile/>}/>
            <Route path={PATH.RESET_PASSWORD} render={() => <ResetPassword/>}/>
            <Route path={PATH.NEW_PASSWORD} render={() => <NewPassword/>}/>
            <Route path={PATH.TEST} render={() => <Test/>}/>
            <Route render={() => <Error404/>}/>{/*Если ни один путь не совпадает, рендерит страницу 404*/}
        </Switch>
    );
}

export default Routes;
