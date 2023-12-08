import {createBrowserRouter} from "react-router-dom";
import Navbar from "../components/navbar/navbar.tsx";
import Error from "../pages/error/error.tsx";
import Home from "../pages/home/home.tsx";
import Results from "../pages/results/results.tsx";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Navbar/>,
        errorElement: <Error/>,
        children: [
            {
                path: '',
                element: <Home/>,
            },
            {
                path: 'results',
                element: <Results/>,
            },

        ]
    }
])