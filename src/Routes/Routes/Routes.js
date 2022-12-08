import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layout/Main";
import About from "../../Pages/KphsHome/About/About";
import Blogs from "../../Pages/KphsHome/Blogs/Blogs";
import Contact from "../../Pages/KphsHome/Contact/Contact";
import Home from "../../Pages/KphsHome/Home/Home";
import HomeTop from "../../Pages/KphsHome/HomeTop/HomeTop";
import NotFound from "../../Pages/Shared/NotFound/NotFound";




export const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/hometop',
                element: <HomeTop></HomeTop>
            },
            {
                path: '/about',
                element: <About></About>
            },
            {
                path: '/blogs',
                element: <Blogs></Blogs>
            },
            {
                path: '/contact',
                element: <Contact></Contact>
            },
            {
                path: '*',
                element: <NotFound></NotFound>
            },
        ]
    }
])