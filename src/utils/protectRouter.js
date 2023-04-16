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

export { publicRoutes, privateRoutes };
