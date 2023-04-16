import React from 'react'
import {
    createBrowserRouter,
    createRoutesFromElements,
    Route,
    Routes,
} from "react-router-dom";
import config from './utils/index'
import * as pages from "./view/index"

const publicRoutes = [
    {
        path: config.routes.login,
        element: <pages.loginPage />,
    },
    {
        path: config.routes.home,
        element: <pages.HomePage />
    },
    {
        path: config.routes.errorpage,
        element: <pages.ErrorPage />
    }
]
const privateRoutes = [

];

const router = createBrowserRouter(
    createRoutesFromElements( 
            <Route>
                {
                    publicRoutes.map((route, idx) => {
                        return <Route key={idx} path={route.path} element={route.element} />
                    })
                }
            </Route>
   
    )
);
export default router
export { publicRoutes, privateRoutes };