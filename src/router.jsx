import React from 'react'
import {
    createBrowserRouter,
    createRoutesFromElements,
    Route
} from "react-router-dom";

import * as pages from "./view/index"

const router = createBrowserRouter(
    createRoutesFromElements(
        <Route>
            <Route path="/" element={< pages.loginPage />} />
            <Route path="/HomePage" element={<pages.HomePage />} />
            <Route path='/errorPage' element={<pages.ErrorPage />} />
        </Route>
    )
);
export default router