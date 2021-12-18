import React from 'react'
import {Switch, Route, Redirect} from 'react-router-dom'
import {MainPage} from "./pages/MainPage";
import {AboutPage} from "./pages/AboutPage";

export const useRoutes = () => {
    return (
        <Switch>
            <Route path="/main" exact>
                <MainPage />
            </Route>

            <Route path="/about" exact>
                <AboutPage />
            </Route>

            <Redirect to="/main" />
        </Switch>
    )
}