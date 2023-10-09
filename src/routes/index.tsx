import { BrowserRouter as Router, Navigate, useRoutes } from 'react-router-dom';
import Layout from '../Layout';
import Home from '../pages/Home';
import Registration from '../pages/Registration';
import About from '../pages/About';


const AppRouter = () => {

    <Router></Router>;
    const routes = useRoutes([
        {
            path: "/*",
            element: <Layout/>,
            children: [
                { element: <Navigate to="" />},
                {path:"", element:<Home />},
                {path:"register", element:<Registration />},
                {path:"about", element:<About />},
            ],
        }
    ]);

    return routes;
}

export default AppRouter
