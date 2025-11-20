import React from 'react';
import NavBar from '../Components/NavBar';
import { Outlet, useLocation } from 'react-router';
import Footer from '../Components/Footer';
import Banner from '../Components/Banner';

const RootLayout = () => {
    const location = useLocation();
    console.log(location);
    return (
        <div>
             <NavBar></NavBar>
             {
                location.pathname === '/' && <Banner></Banner>
             }
            <main className='pt-24 min-h-[calc(100vh-100px)] mx-auto max-w-[1440px]'>
                <Outlet></Outlet>
            </main>
            <footer>
                <Footer></Footer>
            </footer>
        </div>
    );
};

export default RootLayout;