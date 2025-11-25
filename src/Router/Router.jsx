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
import Error404 from "../Pages/Error404";

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
                element: <PrivateRoute>
                    <ServicesDetails></ServicesDetails>
                </PrivateRoute>
            },
            {
                path: '/myServices',
                element: <PrivateRoute>
                    <MyServices></MyServices>
                </PrivateRoute>
            },
            {
                path: '/addServices',
                element: <PrivateRoute>
                    <AddServices></AddServices>
                </PrivateRoute>
            },
            {
                path: '/updateService/:id',
                element: <PrivateRoute>
                    <UpdateService></UpdateService>
                </PrivateRoute>
            },
            {
                path: '/myBookings',
                element: <PrivateRoute>
                    <MyBookings></MyBookings>
                </PrivateRoute>
            },
            {
                path: '*',
                element: <Error404></Error404>
            }
        ]
    }
])

export default router;