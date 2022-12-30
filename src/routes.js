import React from "react";
import { Route, Switch } from "react-router-dom";

import Info from './pages/info/info.page'
import Main from './pages/main/main.page'

export const Routes = () => (
    <Switch>
        <Route exact path='/' component={Main} />
        <Route path='/info' component={Info} />
    </Switch>
)

