import { createBrowserRouter } from "react-router";
import RootLayout from "../Layouts/RootLayout";
import Home from "../Components/Home";
import Profile from "../Pages/Profile";

const router = createBrowserRouter([
    {
        path: '/',
        element: <RootLayout></RootLayout>,
        children: [
            {
                index: true,
                element: <Home></Home>
            },
            {
                path: '/profile',
                element: <Profile></Profile>
            }
        ]
    }
])

export default router;