import React from 'react';
import NavBar from '../Components/NavBar';
import { Outlet, useLocation } from 'react-router';
import Footer from '../Components/Footer';
import Slider from '../Components/Slider';
import Works from '../Components/Works';
import MarqueeCom from '../Components/ScrollBar';
import Testimonials from '../Components/Testimonials';

const RootLayout = () => {
    const location = useLocation();
    return (
        <div>
             <NavBar></NavBar>
             {
                location.pathname === '/' && <><Slider></Slider></> 
             }
            <main className='pt-24 min-h-[calc(100vh-100px)] mx-auto max-w-[1440px]'>
                <Outlet></Outlet>
            </main>
            {
                location.pathname === '/' && <> <MarqueeCom></MarqueeCom> <Testimonials></Testimonials><Works></Works></> 
             }
            <footer>
                <Footer></Footer>
            </footer>
        </div>
    );
};

export default RootLayout;