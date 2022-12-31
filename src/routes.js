import React from "react";
import { Route } from 'react-router-dom'

import Info from './pages/info/info.page'
import Main from './pages/main/main.page'

const Routes = () => (
    <Routes>
        <Route exatct path='./' component={Main} />
        <Route path='/info' component={Info} />
    </Routes>
)

export default Routes;