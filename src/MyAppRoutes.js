import React from "react";
import { Routes, Route, BrowserRouter } from 'react-router-dom'

import Info from './pages/info/info.page'
import Main from './pages/main/main.page'

const MyAppRoutes = () => {
    return(
       <BrowserRouter>
            <Routes>
                <Route path="/" exact element = { <Main /> }  />
                <Route path="/info"  element = { <Info /> } />
            </Routes>
       </BrowserRouter>
    )
}

export default MyAppRoutes;