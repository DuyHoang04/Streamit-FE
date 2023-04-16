import React from 'react'
import {
    createBrowserRouter,
    createRoutesFromElements,
    Route,
    Routes,
} from "react-router-dom";
import { publicRoutes } from './utils/protectRouter';

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
