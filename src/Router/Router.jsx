import { createBrowserRouter } from "react-router";
import RootLayout from "../Layouts/RootLayout";
import Home from "../Components/Home";
import Profile from "../Pages/Profile";
import Login from "../Pages/Login";
import Register from "../Pages/Register";
import PrivateRoute from "./PrivateRoute";
import Services from "../Pages/Services";
import AddServices from "../Pages/AddServices";
import MyServices from "../Pages/MyServices";
import UpdateService from "../Pages/UpdateService";
import ServicesDetails from "../Pages/ServicesDetails";
import MyBookings from "../Pages/MyBookings";

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
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/register',
                element: <Register></Register>
            },
            {
                path: '/profile',
                element: <PrivateRoute>
                    <Profile></Profile>
                </PrivateRoute>
            },
            {
                path: '/services',
                element: <Services></Services>
            },
            {
                path: '/servicesDetails/:id',
                element: <ServicesDetails></ServicesDetails>,
            },
            {
                path: '/myServices',
                element: <MyServices></MyServices>
            },
            {
                path: '/addServices',
                element: <AddServices></AddServices>
            },
            {
                path: '/updateService/:id',
                element: <UpdateService></UpdateService>
            },
            {
                path: '/myBookings',
                element: <MyBookings></MyBookings>
            },
            {
                path: '*',
                element: <p>Error 404!!</p>
            }
        ]
    }
])

export default router;