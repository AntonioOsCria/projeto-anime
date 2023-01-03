import React from "react";
import { Routes, Route, BrowserRouter } from 'react-router-dom'
import { InfoPage } from "./pages/info/info.page";

import { MainPage } from './pages/main/main.page'

export const MyAppRoutes = () => {
    return(
       <BrowserRouter>
            <Routes>
                <Route path="/" exact element = { <MainPage /> }  />
                <Route path="/info"  element = { <InfoPage /> } />
            </Routes>
       </BrowserRouter>
    );
}

