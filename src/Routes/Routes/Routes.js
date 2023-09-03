import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layout/Main";
import About from "../../Pages/KphsHome/About/About";
import Contact from "../../Pages/KphsHome/Contact/Contact";
import Home from "../../Pages/KphsHome/Home/Home";
import HomeTop from "../../Pages/KphsHome/HomeTop/HomeTop";
import Notice from "../../Pages/KphsHome/Notice/Notice";
import Teachers from "../../Pages/KphsHome/Teachers/Teachers";
import NotFound from "../../Pages/Shared/NotFound/NotFound";
import Classes from "../../Pages/KphsHome/Classes/Classes";




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
                path: '/notice',
                element: <Notice></Notice>
            },
            {
                path: '/teachers',
                element: <Teachers></Teachers>
            },
            {
                path: '/classes',
                element: <Classes></Classes>
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