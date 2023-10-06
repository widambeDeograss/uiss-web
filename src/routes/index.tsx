import { BrowserRouter as Router, Navigate, useRoutes } from 'react-router-dom';
import Layout from '../Layout';
import Home from '../pages/Home';


const AppRouter = () => {

    <Router></Router>;
    const routes = useRoutes([
        {
            path: "/*",
            element: <Layout/>,
            children: [
                { element: <Navigate to="" />},
                {path:"", element:<Home />}
            ],
        }
    ]);

    return routes;
}

export default AppRouter
