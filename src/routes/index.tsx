import { BrowserRouter as Router, Navigate, useRoutes } from 'react-router-dom';
import Layout from '../Layout';
import Home from '../pages/Home';
import Registration from '../pages/Registration';
import About from '../pages/About';
import Projects from '../pages/Projects';
import Events from '../pages/Events';
import Event from "../pages/Event.tsx";
import Project from "../pages/Project.tsx";


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
                {path:"projects", element:<Projects />},
                {path:"events", element:<Events />},
                { path: "events/:id", element: <Event /> },
                { path: "projects/:id", element: <Project /> },
            ],
        }
    ]);

    return routes;
}

export default AppRouter
