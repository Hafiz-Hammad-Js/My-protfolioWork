import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";

import Home from "../../Components/MainFolder/Home";
import About from "../../Components/AllFilesComponents/About/About";
import Navbar from "../../Components/AllFilesComponents/Navbar/Navbar";
import Footer from "../../Components/AllFilesComponents/Footer/Footer";
import Skills from "../../Components/AllFilesComponents/Skills/Skills";
import Protfolio from "../../Components/AllFilesComponents/Protfolio/protfolio";
import Contact from "../../Components/AllFilesComponents/Contact/Contact";
import GraphicDetail from "../../Components/AllFilesComponents/DetailPageGraphic/GraphicDetail";
import Resume from "../../Components/AllFilesComponents/CheckResume/Resume";


const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout />,
        children: [

            {
                path: "/",
                element: <Home />,
            },
            {
                path: "/About",
                element: <About />,
            },
            {
                path: "/Skills",
                element: <Skills />,
            },
            {
                path: "/Protfolio",
                element: <Protfolio />,
            },
            {
                path: "/Contact",
                element: <Contact />,
            },
            {
                path: "/Protfolio/:id/GraphicDetail",
                element: <GraphicDetail/>,
            },
          

        ]
    },

]);

function TopCall () {
    const { pathname } = useLocation()

    useEffect(() => {
        window.scrollTo(1, 0)
    }, [pathname])

}


function Layout() {
    return <>
        <Navbar />
        <TopCall/>
        <Outlet />
        <Footer />
    </>
}

function Router() {
    return <>

        <RouterProvider router={router} />

    </>
}

export default Router;